import React from "react";
import GenericEntityIndex from "~/components/generic/genericEntityIndex";
import { ProvinceColumn } from "~/components/columns/provinceColumn";
import type { Province } from "~/types/province";
import type {Category} from "~/types/category";
import {CategoryColumn} from "~/components/columns/categoryColumn";

export default function CategoryIndex() {
    return (
        <GenericEntityIndex<Category>
            entityName="kategori"
            displayName="Category"
            apiEndpoint="categories"
            columns={CategoryColumn}
            batchImportConfig={{
                enabled: true,
                endpoint: "categories/uploadBatchData",
                templateUrl: "http://localhost:8000/storage/samples/contoh_kategori.json",
                templateFileName: "contoh_kategori.json"
            }}
            sortOptions={[
                { value: "nama", label: "Nama" },
                { value: "status", label: "Status" },
                { value: "tipe_ikon", label: "Tipe ikon" },
                { value: "created_at", label: "Created at" }
            ]}
        />
    );
}