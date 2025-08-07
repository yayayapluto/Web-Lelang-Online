import type { Organizer } from "~/types/organizer";
import {GenericEntityDetail} from "~/components/generic/genericEntityDetail";

export default function OrganizerDetail() {
    return (
        <GenericEntityDetail<Organizer>
            resourceUrl={"organizers"}
            breadcrumbModuleLabel="Modul-Penyelenggara"
            breadcrumbModulePath="/modul-penyelenggara"
            getResourceName={(organizer) => organizer.nama_unit_kerja}
            renderDetails={(organizer) => (
                <div className="space-y-4">
                    <div className="text-sm text-muted-foreground space-y-2 grid grid-cols-[max-content_1fr] gap-x-2">
                        <span className="text-black font-medium">Nama Bank</span>
                        <span>: {organizer.nama_bank}</span>

                        <span className="text-black font-medium">Alamat</span>
                        <span>: {organizer.alamat}</span>

                        <span className="text-black font-medium">Nama Unit Kerja</span>
                        <span>: {organizer.nama_unit_kerja}</span>

                        <span className="text-black font-medium">KPKNL</span>
                        <span>: {organizer.kpknl?.nama ?? "-"}</span>
                    </div>
                </div>
            )}
        />
    );
}