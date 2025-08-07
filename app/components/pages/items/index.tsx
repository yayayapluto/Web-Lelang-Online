import React from "react";
import GenericEntityIndex from "~/components/generic/genericEntityIndex";
import { ProvinceColumn } from "~/components/columns/provinceColumn";
import type { Province } from "~/types/province";
import type {Item} from "~/types/item";
import {ItemColumn} from "~/components/columns/itemColumn";

export default function ItemIndex() {
    return (
        <GenericEntityIndex<Item>
            entityName="Barang"
            displayName="Item"
            apiEndpoint="items"
            columns={ItemColumn}
            batchImportConfig={{
                enabled: true,
                endpoint: "items/uploadBatchData",
                templateUrl: "http://localhost:8000/storage/samples/contoh_jenis_barang.json",
                templateFileName: "contoh_jenis_barang.json"
            }}

            sortOptions={[
                { value: "bukti_kepemilikan", label: "Bukti Kepemilikan" },
                { value: "bukti_kepemilikan_no", label: "Nomor Bukti Kepemilikan" },
                { value: "bukti_kepemilikan_tgl", label: "Tanggal Bukti Kepemilikan" },
                { value: "alamat", label: "Alamat" },
                { value: "luas", label: "Luas" },
                { value: "stnk", label: "STNK" },
                { value: "nomor_rangka", label: "Nomor Rangka" },
                { value: "nopol", label: "Nomor Polisi" },
                { value: "tahun", label: "Tahun" },
                { value: "warna", label: "Warna" },
                { value: "created_at", label: "Created at" }
            ]}
        />
    );
}