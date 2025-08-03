import React from "react";
import GenericEntityIndex from "~/components/generic/genericEntityIndex";
import { ProvinceColumn } from "~/components/columns/provinceColumn";
import type { Province } from "~/types/province";
import {CityColumn} from "~/components/columns/cityColumn";

export default function ProvinceIndex() {
    return (
        <GenericEntityIndex<Province>
            entityName="kota"
            displayName="City"
            apiEndpoint="cities"
            columns={CityColumn}
            batchImportConfig={{
                enabled: true,
                endpoint: "cities/uploadBatchData",
                templateUrl: "http://localhost:8000/storage/samples/contoh_kota.json",
                templateFileName: "contoh_kota.json"
            }}
            sortOptions={[
                { value: "nama", label: "Nama" },
                { value: "fullCode", label: "Kode lengkap" },
                { value: "code", label: "Kode" },
                { value: "created_at", label: "Created at" }
            ]}
        />
    );
}