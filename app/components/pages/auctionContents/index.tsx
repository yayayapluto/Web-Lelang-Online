import React from "react";
import GenericEntityIndex from "~/components/generic/genericEntityIndex";
import { ProvinceColumn } from "~/components/columns/provinceColumn";
import type { Province } from "~/types/province";
import type {AuctionContent} from "~/types/auctionContent";
import {AuctionContentColumn} from "~/components/columns/auctionContentColumn";

export default function AuctionContentIndex() {
    return (
        <GenericEntityIndex<AuctionContent>
            entityName="Konten-Lelang"
            displayName="AuctionContent"
            apiEndpoint="auctionContents"
            columns={AuctionContentColumn}
            batchImportConfig={{
                enabled: true,
                endpoint: "auctionContents/uploadBatchData",
                templateUrl: "http://localhost:8000/storage/samples/contoh_konten_lelang.json",
                templateFileName: "contoh_konten_lelang.json"
            }}
            sortOptions={[
                { value: "nama", label: "Nama" },
                { value: "created_at", label: "Created at" }
            ]}
        />
    );
}