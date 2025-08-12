import React from "react";
import GenericEntityIndex from "~/components/generic/genericEntityIndex";
import { CountryColumn } from "~/components/columns/countryColumn";
import type { Country } from "~/types/country";

export default function CountryIndex() {
    return (
        <GenericEntityIndex<Country>
            entityName="negara"
            displayName="Country"
            apiEndpoint="countries"
            columns={CountryColumn}
            batchImportConfig={{
                enabled: true,
                endpoint: "countries/uploadBatchData",
                templateUrl: "http://localhost:8000/storage/samples/contoh_negara.json",
                templateFileName: "contoh_negara.json"
            }}
            sortOptions={[
                { value: "nama", label: "Nama" },
                { value: "kode", label: "Kode" },
                { value: "created_at", label: "Created at" }
            ]}
            breadcrumbs={[
                { href: "/dashboard", label: "Dashboard" },
                { href: "", label: "Modul-Negara" }
            ]}
        />
    );
}