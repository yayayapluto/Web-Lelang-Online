import type { JobType } from "~/types/jobType";
import {GenericEntityDetail} from "~/components/generic/genericEntityDetail";

export default function JobTypeDetail() {
    return (
        <GenericEntityDetail<JobType>
            resourceUrl={"jobTypes"}
            breadcrumbModuleLabel="Modul-Kelurahan"
            breadcrumbModulePath="/modul-kelurahan"
            getResourceName={(jobType) => jobType.nama}
            renderDetails={(jobType) => (
                <div className="space-y-4">
                    <div className="text-sm text-muted-foreground space-y-2 grid grid-cols-[max-content_1fr] gap-x-2">
                        <span className="text-black font-medium">Nama</span>
                        <span>: {jobType.nama}</span>
                    </div>
                </div>
            )}
        />
    );
}