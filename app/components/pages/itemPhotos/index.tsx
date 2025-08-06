import React from "react";
import GenericEntityIndex from "~/components/generic/genericEntityIndex";
import { ProvinceColumn } from "~/components/columns/provinceColumn";
import type { Province } from "~/types/province";
import type {ItemPhoto} from "~/types/itemPhoto";
import {ItemPhotoColumn} from "~/components/columns/itemPhotoColumn";

export default function ItemPhotoIndex() {
    return (
        <GenericEntityIndex<ItemPhoto>
            entityName="Foto-Barang"
            displayName="ItemPhoto"
            apiEndpoint="itemPhotos"
            columns={ItemPhotoColumn}
            batchImportConfig={{
                enabled: true,
                endpoint: "itemPhotos/uploadBatchData",
                templateUrl: "http://localhost:8000/storage/samples/contoh_foto_barang.json",
                templateFileName: "contoh_foto_barang.json"
            }}
            sortOptions={[
                { value: "created_at", label: "Created at" }
            ]}
        />
    );
}