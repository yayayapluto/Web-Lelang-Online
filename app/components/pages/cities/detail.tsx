import type { City } from "~/types/city";
import {GenericEntityDetail} from "~/components/generic/genericEntityDetail";

export default function CityDetail() {
    return (
        <GenericEntityDetail<City>
            resourceUrl={"cities"}
            breadcrumbModuleLabel="Modul-Kota"
            breadcrumbModulePath="/modul-kota"
            getResourceName={(city) => city.nama}
            renderDetails={(city) => (
                <div className="space-y-4">
                    <div className="text-sm text-muted-foreground space-y-2 grid grid-cols-[max-content_1fr] gap-x-2">
                        <span className="text-black font-medium">Nama</span>
                        <span>: {city.nama}</span>

                        <span className="text-black font-medium">Kode</span>
                        <span>: {city.code ?? "-"}</span>

                        <span className="text-black font-medium">Kode Lengkap</span>
                        <span>: {city.fullCode}</span>
                    </div>
                </div>
            )}
        />
    );
}