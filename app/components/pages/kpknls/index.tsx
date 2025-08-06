import React from "react";
import GenericEntityIndex from "~/components/generic/genericEntityIndex";
import { ProvinceColumn } from "~/components/columns/provinceColumn";
import type { Province } from "~/types/province";
import type {Kpknl} from "~/types/kpknl";
import {KpknlColumn} from "~/components/columns/kpknlColumn";

export default function KpknlIndex() {
    return (
        <GenericEntityIndex<Kpknl>
            entityName="KPKNL"
            displayName="Kpknl"
            apiEndpoint="kpknl"
            columns={KpknlColumn}
            batchImportConfig={{
                enabled: true,
                endpoint: "kpknl/uploadBatchData",
                templateUrl: "http://localhost:8000/storage/samples/contoh_kpknl.json",
                templateFileName: "contoh_kpknl.json"
            }}
            sortOptions={[
                { value: "nama", label: "Nama" },
                { value: "kode_satker", label: "Kode Satker" },
                { value: "alamat", label: "Alamat" },
                { value: "kota", label: "Kota" },
                { value: "provinsi", label: "Provinsi" },
                { value: "created_at", label: "Created at" }
            ]}
        />
    );
}