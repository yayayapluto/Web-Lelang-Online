import React, {useState, useEffect, type ChangeEvent, useRef} from "react";
import {
    ArrowDownIcon, ArrowLeft, ArrowRight, ArrowUpIcon,
    FileText, Plus, RefreshCcw
} from "lucide-react";
import { cn } from "~/lib/utils";
import { DataTable } from "~/components/ui/data-table";
import {
    DropdownMenu, DropdownMenuContent,
    DropdownMenuLabel, DropdownMenuRadioItem,
    DropdownMenuTrigger
} from "~/components/ui/dropdown-menu";
import {
    DropdownMenuRadioGroup,
    DropdownMenuSeparator
} from "@radix-ui/react-dropdown-menu";
import { Input } from "~/components/ui/input";
import { Spinner } from "~/components/ui/spinner";
import useApi from "~/hooks/use-api";
import type { PaginationResponse } from "~/types/paginationResponse";
import { toast } from "sonner";
import { Skeleton } from "~/components/ui/skeleton";
import { useCookies } from "~/hooks/use-cookies";
import { Button } from "~/components/ui/button";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { useNavigate } from "react-router";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "~/components/ui/dialog";
import { capitalize } from "~/utils/string-formatter";

type SortDirType = 'asc' | 'desc';
type EntityIndexProps<T> = {
    entityName: string;
    displayName: string;
    apiEndpoint: string;
    columns: any[]; // Could be more strongly typed with a generic column type
    batchImportConfig?: {
        enabled: boolean;
        endpoint: string;
        templateUrl: string;
        templateFileName: string;
    };
    searchFields?: string[];
    sortOptions?: {
        value: string;
        label: string;
    }[];
    initialSortBy?: string;
    initialSortDir?: SortDirType;
    additionalActions?: React.ReactNode;
    breadcrumbs?: { href: string; label: string }[];
};

export default function GenericEntityIndex<T>({
                                                  entityName,
                                                  displayName,
                                                  apiEndpoint,
                                                  columns,
                                                  batchImportConfig,
                                                  searchFields = ['search'],
                                                  sortOptions = [
                                                      { value: 'nama', label: 'Nama' },
                                                      { value: 'code', label: 'Kode' },
                                                      { value: 'created_at', label: 'Created at' }
                                                  ],
                                                  initialSortBy = 'created_at',
                                                  initialSortDir = 'asc',
                                                  additionalActions,
                                                  breadcrumbs = [
                                                      { href: "/", label: "Dashboard" },
                                                      { href: "", label: `Modul-${entityName}` }
                                                  ]
                                              }: EntityIndexProps<T>) {
    const [sortDir, setSortDir] = useState<SortDirType>(initialSortDir);
    const [sortBy, setSortBy] = useState<string>(initialSortBy);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const [url, setUrl] = useState(`${baseUrl}/api/${apiEndpoint}`);
    const [reload, setReload] = useState(false);
    const navigate = useNavigate();
    const [token] = useCookies("auth_token");

    // Effects for managing reload state
    useEffect(() => {
        setReload(true);
    }, []);

    useEffect(() => {
        if (reload) {
            setReload(false);
        }
    }, [reload]);

    useEffect(() => {
        const params = new URLSearchParams();
        if (searchTerm.trim().length >= 3) params.append('search', searchTerm);
        params.append('sortBy', sortBy);
        params.append('sortDir', sortDir);

        const newUrl = `${baseUrl}/api/${apiEndpoint}?${params.toString()}`;
        setUrl(newUrl);
        // setReload(true);
    }, [sortBy, sortDir, searchTerm]);

    // API call for main data
    const { isLoading, error, result } = useApi<PaginationResponse<T>>({
        url: url,
        headers: {
            Authorization: `Bearer ${token}`
        },
        trigger: reload
    });

    // Handle API errors
    useEffect(() => {
        if (!isLoading && error !== null) {
            // toast(error.toString());
        }
    }, [isLoading, error]);

    // Batch import functionality
    const [importData, setImportData] = useState<File | undefined>();
    const [importFormData, setImportFormData] = useState<FormData | undefined>();
    const [doImport, setDoImport] = useState(false);

    const {
        isLoading: importLoading,
        error: importError,
        result: importResult
    } = useApi<null>({
        url: batchImportConfig?.endpoint
            ? `${baseUrl}/api/${batchImportConfig.endpoint}`
            : '',
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: importFormData,
        trigger: doImport,
        method: "POST",
    });

    useEffect(() => {
        if (importResult !== null) {
            // toast.success(`${displayName} imported successfully`);
            setReload(true);
        }
        if (importError !== null) {
            // toast.error(`Failed to import ${displayName.toLowerCase()}: ${importError}`);
        }

        // console.log(importError)
    }, [importResult, importError]);

    useEffect(() => {
        if (doImport) setDoImport(false);
    }, [doImport]);

    const handleImportFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        setImportData(e.target.files![0]);
    };

    const submitImport = () => {
        if (!importData) return;

        const formData = new FormData();
        formData.append("file", importData);
        setImportFormData(formData);
        setDoImport(true);
    };

    const toggleSortDirection = () => {
        setSortDir(prevDir => (prevDir === "asc" ? "desc" : "asc"));
    };

    const searchTimeout = useRef<NodeJS.Timeout | null>(null);
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (searchTimeout.current) {
            clearTimeout(searchTimeout.current);
        }

        searchTimeout.current = setTimeout(() => {
            if (value.trim().length >= 3 || value.trim().length === 0) {
                setReload(true);
            }
        }, 500);
    };

    // Render batch import dialog if configured
    const renderBatchImport = () => {
        if (!batchImportConfig?.enabled) return null;

        return (
            <Dialog>
                <DialogTrigger>
                    <Button variant={"default"} disabled={isLoading}>
                        Batch add
                        <FileText />
                    </Button>
                </DialogTrigger>
                <DialogContent className={"w-full"}>
                    <DialogHeader>
                        <DialogTitle>Import from file</DialogTitle>
                        <DialogDescription>
                            Select a JSON/CSV file to import |
                            <span>
                <a
                    href={batchImportConfig.templateUrl}
                    className={"underline"}
                    download={batchImportConfig.templateFileName}
                >
                  Download {displayName} template
                </a>
              </span>
                        </DialogDescription>
                        <Input
                            type="file"
                            onChange={handleImportFileChange}
                            name={`import${displayName}`}
                            accept={".json,.csv"}
                        />
                        <Button onClick={submitImport} disabled={importLoading}>
                            {importLoading ? (<Spinner isWhite />) : "Import"}
                        </Button>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        );
    };

    return (
        <div className="container mx-auto py-4">
            <Breadcrumb>
                <BreadcrumbList>
                    {breadcrumbs.map((crumb, index) => (
                        <React.Fragment key={index}>
                            <BreadcrumbItem>
                                {index === breadcrumbs.length - 1 ? (
                                    <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                            {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                        </React.Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>

            <div className="flex flex-col py-4 justify-between gap-5">
                <div className={"flex flex-col lg:flex-row gap-5"}>
                    <Input
                        placeholder="Search (type minimum 3 characters)"
                        className="max-w-md min-w-44 text-sm"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <div className="flex flex-wrap justify-between lg:justify-start gap-2 items-center max-w-md">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className={cn("flex justify-start")}>
                                    Sort by: {sortOptions.find(opt => opt.value === sortBy)?.label || capitalize(sortBy)}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>Sort By</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuRadioGroup
                                    value={sortBy}
                                    onValueChange={value => setSortBy(value)}
                                >
                                    {sortOptions.map(option => (
                                        <DropdownMenuRadioItem
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </DropdownMenuRadioItem>
                                    ))}
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button
                            variant="outline"
                            onClick={toggleSortDirection}
                            className={cn("flex justify-between")}
                        >
                            {capitalize(sortDir)}
                            {sortDir === "asc" ? <ArrowUpIcon /> : <ArrowDownIcon />}
                        </Button>
                    </div>
                </div>

                <div className={"flex flex-row gap-2"}>
                    <Button
                        variant={"outline"}
                        onClick={() => setReload(true)}
                        disabled={isLoading}
                    >
                        Reload
                        <RefreshCcw className={`${isLoading && "animate-spin"}`}/>
                    </Button>
                    <Button
                        className={cn("")}
                        disabled={isLoading}
                        onClick={() => navigate(`/${apiEndpoint}/create`)}
                    >
                        Add new
                        <Plus/>
                    </Button>
                    {batchImportConfig?.enabled && renderBatchImport()}
                    {additionalActions}
                </div>
            </div>

            {isLoading && (
                <Skeleton className={"w-full h-32 flex justify-center items-center"}>
                    <Spinner/>
                </Skeleton>
            )}

            {!error && !isLoading && result && (
                <DataTable columns={columns} data={result.data} />
            )}

            <div className="flex items-center justify-start space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    disabled={result?.prev_page_url === null || isLoading}
                    onClick={() => {
                        setUrl(result?.prev_page_url!);
                        setReload(true);
                    }}
                >
                    <ArrowLeft/>
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    disabled={result?.next_page_url === null || isLoading}
                    onClick={() => {
                        setUrl(result?.next_page_url!);
                        setReload(true);
                    }}
                >
                    Next
                    <ArrowRight/>
                </Button>
            </div>
        </div>
    );
}