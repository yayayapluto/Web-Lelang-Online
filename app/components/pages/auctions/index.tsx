import React from "react";
import GenericEntityIndex from "~/components/generic/genericEntityIndex";
import { ProvinceColumn } from "~/components/columns/provinceColumn";
import type { Province } from "~/types/province";
import type {Auction} from "~/types/auction";
import {AuctionColumn} from "~/components/columns/auctionColumn";

export default function AuctionIndex() {
    return (
        <GenericEntityIndex<Auction>
            entityName="Lelang"
            displayName="Auction"
            apiEndpoint="auctions"
            columns={AuctionColumn}
            batchImportConfig={{
                enabled: true,
                endpoint: "auctions/uploadBatchData",
                templateUrl: "http://localhost:8000/storage/samples/contoh_lelang.json",
                templateFileName: "contoh_lelang.json"
            }}
            sortOptions={[
                { value: "nama", label: "Nama" },
                { value: "created_at", label: "Created at" }
            ]}
        />
    );
}