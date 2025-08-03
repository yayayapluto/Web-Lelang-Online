import React from "react";
import GenericEntityIndex from "~/components/generic/genericEntityIndex";
import { ProvinceColumn } from "~/components/columns/provinceColumn";
import type { Province } from "~/types/province";
import type {JobType} from "~/types/jobType";
import {JobTypeColumn} from "~/components/columns/jobTypeColumn";

export default function JobTypeIndex() {
    return (
        <GenericEntityIndex<JobType>
            entityName="Jenis-Pekerjaan"
            displayName="JobType"
            apiEndpoint="jobTypes"
            columns={JobTypeColumn}
            batchImportConfig={{
                enabled: true,
                endpoint: "jobTypes/uploadBatchData",
                templateUrl: "http://localhost:8000/storage/samples/contoh_jenis_pekerjaan.json",
                templateFileName: "contoh_jenis_pekerjaan.json"
            }}
            sortOptions={[
                { value: "nama", label: "Nama" },
                { value: "created_at", label: "Created at" }
            ]}
        />
    );
}