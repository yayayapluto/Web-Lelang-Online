import React, {type ChangeEvent, useEffect, useState} from "react";
import {ArrowDownIcon, ArrowLeft, ArrowRight, ArrowUpIcon, FileText, Plus, RefreshCcw} from "lucide-react";
import { cn } from "~/lib/utils";
import { DataTable } from "~/components/ui/data-table";
import {
    DropdownMenu, DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioItem,
    DropdownMenuTrigger
} from "~/components/ui/dropdown-menu";
import {
    DropdownMenuRadioGroup,
    DropdownMenuSeparator
} from "@radix-ui/react-dropdown-menu";
import { Input } from "~/components/ui/input"
import {Spinner} from "~/components/ui/spinner";
import useApi from "~/hooks/use-api";
import type {PaginationResponse} from "~/types/paginationResponse";
import { toast } from "sonner"
import {Skeleton} from "~/components/ui/skeleton";
import {useCookies} from "~/hooks/use-cookies";
import {useProtectRoute} from "~/hooks/use-protect-route";
import {Button} from "~/components/ui/button";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "~/components/ui/breadcrumb"
import {useNavigate} from "react-router";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "~/components/ui/dialog";
import type {Country} from "~/types/country";
import {capitalize} from "~/utils/string-formatter";
import {CountryColumn} from "~/components/columns/countryColumn";

type sortDirType = 'asc' | 'desc'
type sortByType = 'username' | 'email' | 'phone' | 'role' | 'created_at'

export default function CategoryIndex() {
    // useProtectRoute()
    const [sortDir, setSortDir] = useState<sortDirType>("asc");
    const [sortBy, setSortBy] = useState<sortByType>("created_at");
    const [searchTerm, setSearchTerm] = useState<string>("");

    const baseUrl = import.meta.env.VITE_BASE_URL
    const [url, setUrl] = useState(`${baseUrl}/api/admin/users`)
    const [reload, setReload] = useState(false)

    useEffect(() => {
        setReload(true)
    }, [])

    useEffect(() => {
        if (reload) {
            setReload(false);
        }
    }, [reload]);

    useEffect(() => {
        const newUrl = `${baseUrl}/api/countries?search=${searchTerm}&sortBy=${sortBy}&sortDir=${sortDir}`;
        setUrl(newUrl);
        setReload(true)
    }, [sortBy, sortDir, searchTerm]);

    const navigate = useNavigate()

    const [token] = useCookies("auth_token")
    const { isLoading, error, result } = useApi<PaginationResponse<Country>>({
        url: url,
        headers: {
            Authorization: `Bearer ${token}`
        },
        trigger: reload
    });

    if (!isLoading && error !== null) {
        toast(error.toString())
    }

    const toggleSortDirection = () => {
        setSortDir(prevDir => (prevDir === "asc" ? "desc" : "asc"));
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const [importData, setImportData] = useState<File | undefined>()
    const [importFormData, setImportFormData] = useState<FormData | undefined>()
    const [doImport, setDoImport] = useState(false)
    const { isLoading: importLoading, error: importError, result: importResult } = useApi<null>({
        url: `${baseUrl}/api/admin/users/import`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: importFormData,
        trigger: doImport,
        method: "POST"
    });

    useEffect(() => {
        if (importResult !== null) setReload(true)
    }, [importLoading, importResult, importError])

    useEffect(() => {
        if (doImport) setDoImport(false)
    }, [doImport])

    const handleImportFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        setImportData(e.target.files![0])
    }

    const submitImport = () => {
        const formData = new FormData()
        formData.append("file", importData as File)
        setImportFormData(formData)
        setDoImport(true)
    }

    return (
        <div className="container mx-auto py-4">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Users</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="flex flex-col py-4 justify-between gap-5">
                <div className={"flex flex-col lg:flex-row gap-5"}>
                    <Input
                        placeholder="Search"
                        className="max-w-md min-w-44 text-sm"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <div className="flex flex-wrap justify-between lg:justify-start gap-2 items-center max-w-md">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className={cn("flex justify-start")}>
                                    Sort by: {capitalize(sortBy)}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>Sort By</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuRadioGroup value={sortBy} onValueChange={value => {
                                    setSortBy(value as sortByType)
                                }}>
                                    <DropdownMenuRadioItem value="nama">Nama</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="kode">Kode</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="nomor">Nomor</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="created_at">Created at</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button variant="outline" onClick={toggleSortDirection} className={cn("flex justify-between")}>
                            {capitalize(sortDir)}
                            {sortDir === "asc" ? <ArrowUpIcon /> : <ArrowDownIcon />}
                        </Button>
                    </div>
                </div>
                <div className={"flex flex-row gap-2"}>
                    <Button variant={"outline"} onClick={() => setReload(true)} disabled={isLoading}>
                        Reload
                        <RefreshCcw className={`${isLoading && "animate-spin"}`}/>
                    </Button>

                    <Button className={cn("")} disabled={isLoading} onClick={() => navigate("/users/create")}>
                        Add new
                        <Plus/>
                    </Button>
                    <Dialog>
                        <DialogTrigger>
                            <Button variant={"default"} disabled={isLoading} >
                                Batch add
                                <FileText/>
                            </Button>
                        </DialogTrigger>
                        <DialogContent className={"w-full"}>
                            <DialogHeader>
                                <DialogTitle>Import from excel</DialogTitle>
                                <DialogDescription>
                                    Select an excel/csv file to import |
                                    <span>
                                        <a href="http://localhost:8000/storage/samples/users_sample.xlsx" className={"underline"}> download file template</a>
                                    </span>
                                </DialogDescription>
                                <Input type="file" onChange={handleImportFileChange} name={"importUsers"} accept={".xlsx,.csv"} />
                                <Button onClick={submitImport}>
                                    {importLoading ? (<Spinner isWhite/>) : "Import"}
                                </Button>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            {isLoading && (
                <Skeleton className={"w-full h-32 flex justify-center items-center"}>
                    <Spinner/>
                </Skeleton>
            )}
            {!error && !isLoading && result && <DataTable columns={CountryColumn} data={result.data} />}

            <div className="flex items-center justify-start space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    disabled={result?.prev_page_url === null || isLoading}
                    onClick={() => {
                        setUrl(result?.prev_page_url!)
                        setReload(true)
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
                        setUrl(result?.next_page_url!)
                        setReload(true)
                    }}
                >
                    Next
                    <ArrowRight/>
                </Button>
            </div>
        </div>
    );
}