import type { Province } from "~/types/province";
import {GenericEntityDetail} from "~/components/generic/genericEntityDetail";

export default function ProvinceDetail() {
    return (
        <GenericEntityDetail<Province>
            resourceUrl={"provinces"}
            breadcrumbModuleLabel="Modul-Provinsi"
            breadcrumbModulePath="/modul-provinsi"
            getResourceName={(province) => province.nama}
            renderDetails={(province) => (
                <div className="space-y-4">
                    <div className="text-sm text-muted-foreground space-y-2 grid grid-cols-[max-content_1fr] gap-x-2">
                        <span className="text-black font-medium">Nama</span>
                        <span>: {province.nama}</span>

                        <span className="text-black font-medium">Kode</span>
                        <span>: {province.code}</span>

                        <span className="text-black font-medium">Kode Lengkap</span>
                        <span>: {province.fullCode}</span>
                    </div>
                </div>
            )}
        />
    );
}