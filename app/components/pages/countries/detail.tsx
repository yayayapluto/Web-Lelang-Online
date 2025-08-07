import type { Country } from "~/types/country";
import {GenericEntityDetail} from "~/components/generic/genericEntityDetail";

export default function CountryDetail() {
    return (
        <GenericEntityDetail<Country>
            resourceUrl={"countries"}
    breadcrumbModuleLabel="Modul-Negara"
    breadcrumbModulePath="/modul-negara"
    getResourceName={(country) => country.nama}
    renderDetails={(country) => (
        <div className="space-y-4">
        <div className="text-sm text-muted-foreground space-y-2 grid grid-cols-[max-content_1fr] gap-x-2">
        <span className="text-black font-medium">Nama</span>
            <span>: {country.nama}</span>

    <span className="text-black font-medium">Kode</span>
        <span>: {country.kode}</span>

    <span className="text-black font-medium">Nomor</span>
        <span>: {country.nomor}</span>
    </div>
    </div>
)}
    />
);
}