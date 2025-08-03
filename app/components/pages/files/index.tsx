import React from "react";
import GenericEntityIndex from "~/components/generic/genericEntityIndex";
import { ProvinceColumn } from "~/components/columns/provinceColumn";
import type { Province } from "~/types/province";
import type {File} from "~/types/file";
import {FileColumn} from "~/components/columns/fileColumn";

export default function FileIndex() {
    return (
        <GenericEntityIndex<File>
            entityName="File"
            displayName="File"
            apiEndpoint="files"
            columns={FileColumn}
            batchImportConfig={{
                enabled: false,
                endpoint: "files/uploadBatchData",
                templateUrl: "http://localhost:8000/storage/samples/contoh_file.json",
                templateFileName: "contoh_file.json"
            }}
            sortOptions={[
                { value: "file_url", label: "File URL" },
                { value: "created_at", label: "Created at" }
            ]}
        />
    );
}