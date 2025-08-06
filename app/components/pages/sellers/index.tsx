import React from "react";
import GenericEntityIndex from "~/components/generic/genericEntityIndex";
import { ProvinceColumn } from "~/components/columns/provinceColumn";
import type { Province } from "~/types/province";
import type {Seller} from "~/types/seller";
import {SellerColumn} from "~/components/columns/sellerColumn";

export default function SellerIndex() {
    return (
        <GenericEntityIndex<Seller>
            entityName="Penjual"
            displayName="Seller"
            apiEndpoint="sellers"
            columns={SellerColumn}
            batchImportConfig={{
                enabled: true,
                endpoint: "sellers/uploadBatchData",
                templateUrl: "http://localhost:8000/storage/samples/contoh_seller.json",
                templateFileName: "contoh_seller.json"
            }}
            sortOptions={[
                { value: "nama", label: "Nama" },
                { value: "nomor_telepon", label: "Nomor Telepon" },
                { value: "created_at", label: "Created at" }
            ]}
        />
    );
}