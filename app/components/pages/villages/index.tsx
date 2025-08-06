import React from "react";
import GenericEntityIndex from "~/components/generic/genericEntityIndex";
import { ProvinceColumn } from "~/components/columns/provinceColumn";
import type { Province } from "~/types/province";
import type {Village} from "~/types/village";
import {VillageColumn} from "~/components/columns/villageColumn";

export default function VillageIndex() {
    return (
        <GenericEntityIndex<Village>
            entityName="kelurahan"
            displayName="Village"
            apiEndpoint="villages"
            columns={VillageColumn}
            batchImportConfig={{
                enabled: true,
                endpoint: "villages/uploadBatchData",
                templateUrl: "http://localhost:8000/storage/samples/contoh_kelurahan.json",
                templateFileName: "contoh_kelurahan.json"
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