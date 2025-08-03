import React from "react";
import GenericEntityIndex from "~/components/generic/genericEntityIndex";
import { ProvinceColumn } from "~/components/columns/provinceColumn";
import type { Province } from "~/types/province";
import type {ObjectType} from "~/types/objectType";
import {ObjectTypeColumn} from "~/components/columns/objectTypeColumn";

export default function ObjectTypeIndex() {
    return (
        <GenericEntityIndex<ObjectType>
            entityName="Jenis-Objek"
            displayName="ObjectType"
            apiEndpoint="objectTypes"
            columns={ObjectTypeColumn}
            batchImportConfig={{
                enabled: true,
                endpoint: "objectTypes/uploadBatchData",
                templateUrl: "http://localhost:8000/storage/samples/contoh_jenis_objek.json",
                templateFileName: "contoh_jenis_objek.json"
            }}
            sortOptions={[
                { value: "nama", label: "Nama" },
                { value: "created_at", label: "Created at" }
            ]}
        />
    );
}