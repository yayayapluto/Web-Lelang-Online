import type { File } from "~/types/file";
import {GenericEntityDetail} from "~/components/generic/genericEntityDetail";

export default function FileDetail() {
    return (
        <GenericEntityDetail<File>
            resourceUrl={"files"}
            breadcrumbModuleLabel="Modul-File"
            breadcrumbModulePath="/modul-file"
            getResourceName={(file) => "Detail File"}
            renderDetails={(file) => (
                <div className="space-y-4">
                    <div className="text-sm text-muted-foreground space-y-2 grid grid-cols-[max-content_1fr] gap-x-2">
                        <span className="text-black font-medium">File URL</span>
                        <span>: {file.file_url}</span>
                    </div>
                </div>
            )}
        />
    );
}