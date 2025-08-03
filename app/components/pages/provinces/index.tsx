import React from "react";
import GenericEntityIndex from "~/components/generic/genericEntityIndex";
import { ProvinceColumn } from "~/components/columns/provinceColumn";
import type { Province } from "~/types/province";

export default function ProvinceIndex() {
    return (
        <GenericEntityIndex<Province>
            entityName="provinsi"
            displayName="Province"
            apiEndpoint="provinces"
            columns={ProvinceColumn}
            batchImportConfig={{
                enabled: true,
                endpoint: "provinces/uploadBatchData",
                templateUrl: "http://localhost:8000/storage/samples/contoh_provinsi.json",
                templateFileName: "contoh_provinsi.json"
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