import type { Village } from "~/types/village";
import {GenericEntityDetail} from "~/components/generic/genericEntityDetail";

export default function VillageDetail() {
    return (
        <GenericEntityDetail<Village>
            resourceUrl={"villages"}
            breadcrumbModuleLabel="Modul-Kelurahan"
            breadcrumbModulePath="/modul-kelurahan"
            getResourceName={(village) => village.nama}
            renderDetails={(village) => (
                <div className="space-y-4">
                    <div className="text-sm text-muted-foreground space-y-2 grid grid-cols-[max-content_1fr] gap-x-2">
                        <span className="text-black font-medium">Nama</span>
                        <span>: {village.nama}</span>
                    </div>
                </div>
            )}
        />
    );
}