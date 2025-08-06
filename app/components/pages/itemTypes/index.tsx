import React from "react";
import GenericEntityIndex from "~/components/generic/genericEntityIndex";
import { ProvinceColumn } from "~/components/columns/provinceColumn";
import type { Province } from "~/types/province";
import type {ItemType} from "~/types/itemType";
import {ItemTypeColumn} from "~/components/columns/itemTypeColumn";

export default function ItemTypeIndex() {
    return (
        <GenericEntityIndex<ItemType>
            entityName="Jenis-Barang"
            displayName="ItemType"
            apiEndpoint="itemTypes"
            columns={ItemTypeColumn}
            batchImportConfig={{
                enabled: true,
                endpoint: "itemTypes/uploadBatchData",
                templateUrl: "http://localhost:8000/storage/samples/contoh_jenis_barang.json",
                templateFileName: "contoh_jenis_barang.json"
            }}
            sortOptions={[
                { value: "nama", label: "Nama" },
                { value: "created_at", label: "Created at" }
            ]}
        />
    );
}