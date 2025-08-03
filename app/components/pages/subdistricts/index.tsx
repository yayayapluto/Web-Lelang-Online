import React from "react";
import GenericEntityIndex from "~/components/generic/genericEntityIndex";
import { ProvinceColumn } from "~/components/columns/provinceColumn";
import type { Province } from "~/types/province";
import type {Subdistrict} from "~/types/subdistrict";
import {SubdistrictColumn} from "~/components/columns/subdistrictColumn";

export default function SubdistrictIndex() {
    return (
        <GenericEntityIndex<Subdistrict>
            entityName="kecamatan"
            displayName="Subdistrict"
            apiEndpoint="subdistricts"
            columns={SubdistrictColumn}
            batchImportConfig={{
                enabled: true,
                endpoint: "subdistricts/uploadBatchData",
                templateUrl: "http://localhost:8000/storage/samples/contoh_kecamatan.json",
                templateFileName: "contoh_kecamatan.json"
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