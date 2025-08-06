import React from "react";
import GenericEntityIndex from "~/components/generic/genericEntityIndex";
import { ProvinceColumn } from "~/components/columns/provinceColumn";
import type { Province } from "~/types/province";
import type {User} from "~/types/user";
import {UserColumn} from "~/components/columns/userColumn";

export default function UserIndex() {
    return (
        <GenericEntityIndex<User>
            entityName="Pengguna"
            displayName="User"
            apiEndpoint="users"
            columns={UserColumn}
            batchImportConfig={{
                enabled: true,
                endpoint: "users/uploadBatchData",
                templateUrl: "http://localhost:8000/storage/samples/contoh_pengguna.json",
                templateFileName: "contoh_pengguna.json"
            }}
            sortOptions={[
                { value: "nama_lengkap", label: "Nama Lengkap" },
                { value: "nik", label: "NIK" },
                { value: "email", label: "Email" },
                { value: "kewarganegaraan", label: "Kewarganegaraan" },
                { value: "jenis_kelamin", label: "Jenis Kelamin" },
                { value: "created_at", label: "Created at" }
            ]}
        />
    );
}