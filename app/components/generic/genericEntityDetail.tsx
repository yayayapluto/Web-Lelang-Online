// components/GenericDetail.tsx
import { useNavigate, useParams } from "react-router";
import useApi from "~/hooks/use-api";
import { useEffect, useState } from "react";
import { Separator } from "~/components/ui/separator";
import { Spinner } from "~/components/ui/spinner";
import { Button } from "~/components/ui/button";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { cn } from "~/lib/utils";
import type { ReactNode } from "react";

interface GenericDetailProps<T> {
    // Base URL for fetching and deleting the resource
    resourceUrl: string;

    // Labels for breadcrumbs
    breadcrumbHomeLabel?: string;
    breadcrumbModuleLabel: string;
    breadcrumbModulePath: string;

    // Render function for the resource
    renderDetails: (item: T) => ReactNode;

    // Function to get display name of the resource (for breadcrumb)
    getResourceName: (item: T) => string;

    // Optional: redirect path after delete
    redirectAfterDelete?: string;

    // Optional: additional actions (e.g. "View Logs", "Export")
    extraActions?: (item: T) => ReactNode;
}

const baseUrl = `${import.meta.env.VITE_BASE_URL}/api`

export function GenericEntityDetail<T extends Record<string, any>>({
                                                                       resourceUrl,
                                     breadcrumbHomeLabel = "Dashboard",
                                     breadcrumbModuleLabel,
                                     breadcrumbModulePath,
                                     renderDetails,
                                     getResourceName,
                                     redirectAfterDelete = breadcrumbModulePath,
                                     extraActions,
                                 }: GenericDetailProps<T>) {
    const params = useParams();
    const navigate = useNavigate();

    const id = params.id;
    const [resource, setResource] = useState<T | null>(null);
    const [refetch, setRefetch] = useState(true);

    const detailUrl = `${baseUrl}/${resourceUrl}/${id}`;
    const { isLoading, error, result } = useApi<T>({
        url: detailUrl,
        trigger: true,
    });

    const [isDeleting, setIsDeleting] = useState(false);
    const { isLoading: isDeleteLoading } = useApi<T>({
        url: detailUrl,
        method: "DELETE",
        trigger: isDeleting,
    });

    useEffect(() => {
        if (refetch) setRefetch(false);
    }, [refetch]);

    useEffect(() => {
        if (!isLoading && error === null && result !== null) {
            setResource(result !== undefined ? result : null);
        }
    }, [isLoading, error, result]);

    useEffect(() => {
        if (isDeleting && !isDeleteLoading) {
            setIsDeleting(false);
            navigate(redirectAfterDelete);
        }
    }, [isDeleting, isDeleteLoading, navigate, redirectAfterDelete]);

    return (
        <div className="container mx-auto space-y-4 py-4">
            {/* Breadcrumb */}
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">{breadcrumbHomeLabel}</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href={breadcrumbModulePath}>
                            {breadcrumbModuleLabel}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>
                            {isLoading ? <Spinner /> : resource && !isLoading ? getResourceName(resource) : "Not Found"}
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="w-full flex flex-col gap-4 py-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {!isLoading && resource ? (
                        <div className="border rounded-sm p-4">
                            {/* Render details using custom function */}
                            {renderDetails(resource)}

                            <Separator className="my-4" />

                            {/* Metadata */}
                            <div className="flex items-center space-x-4 text-xs lg:text-sm text-muted-foreground">
                                {("created_at" in resource || "updated_at" in resource) && (
                                    <>
                                        {"created_at" in resource && (
                                            <p>{`Created at ${(resource as any).created_at}`}</p>
                                        )}
                                        {"created_at" in resource && "updated_at" in resource && (
                                            <Separator orientation="vertical" />
                                        )}
                                        {"updated_at" in resource && (
                                            <p>{`Last Update at ${(resource as any).updated_at}`}</p>
                                        )}
                                    </>
                                )}
                            </div>

                            <Separator className="my-4" />

                            {/* Actions */}
                            <div className="flex flex-col gap-2">
                                <Button
                                    variant="default"
                                    onClick={() => navigate(`${detailUrl}/edit`)}
                                >
                                    Edit this item
                                </Button>

                                {extraActions?.(resource)}

                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button variant="outline" className="w-full">
                                            Delete this item
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>
                                                Are you sure you want to delete this item?
                                            </AlertDialogTitle>
                                            <AlertDialogDescription>
                                                This action cannot be undone. You will need to recreate this item.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction
                                                onClick={() => setIsDeleting(true)}
                                                className={cn("bg-red-600 hover:bg-red-700")}
                                            >
                                                Continue
                                            </AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                        </div>
                    ) : isLoading ? (
                        <div className="flex justify-center"><Spinner /></div>
                    ) : !isLoading && (
                        <p>Resource not found</p>
                    )}
                </div>
            </div>
        </div>
    );
}