import type { Subdistrict } from "~/types/subdistrict";
import {GenericEntityDetail} from "~/components/generic/genericEntityDetail";

export default function SubdistrictDetail() {
    return (
        <GenericEntityDetail<Subdistrict>
            resourceUrl={"subdistricts"}
            breadcrumbModuleLabel="Modul-Kecamatan"
            breadcrumbModulePath="/modul-kecamatan"
            getResourceName={(subdistrict) => subdistrict.nama}
            renderDetails={(subdistrict) => (
                <div className="space-y-4">
                    <div className="text-sm text-muted-foreground space-y-2 grid grid-cols-[max-content_1fr] gap-x-2">
                        <span className="text-black font-medium">Nama</span>
                        <span>: {subdistrict.nama}</span>

                        <span className="text-black font-medium">Kode</span>
                        <span>: {subdistrict.code ?? "-"}</span>

                        <span className="text-black font-medium">Kode Lengkap</span>
                        <span>: {subdistrict.fullCode}</span>
                    </div>
                </div>
            )}
        />
    );
}