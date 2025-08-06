import React from "react";
import GenericEntityIndex from "~/components/generic/genericEntityIndex";
import { ProvinceColumn } from "~/components/columns/provinceColumn";
import type { Province } from "~/types/province";
import type {Organizer} from "~/types/organizer";
import {OrganizerColumn} from "~/components/columns/organizerColumn";

export default function OrganizerIndex() {
    return (
        <GenericEntityIndex<Organizer>
            entityName="Penyelenggara"
            displayName="Organizer"
            apiEndpoint="organizers"
            columns={OrganizerColumn}
            batchImportConfig={{
                enabled: true,
                endpoint: "organizers/uploadBatchData",
                templateUrl: "http://localhost:8000/storage/samples/contoh_organizer.json",
                templateFileName: "contoh_organizer.json"
            }}
            sortOptions={[
                { value: "nama_bank", label: "Nama Bank" },
                { value: "nama_unit_kerja", label: "Nama Unit Kerja" },
                { value: "created_at", label: "Created at" }
            ]}
        />
    );
}