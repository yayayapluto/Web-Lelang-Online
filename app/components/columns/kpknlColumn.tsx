import type { ColumnDef } from "@tanstack/react-table";
import {useNavigate} from "react-router";
import {Button} from "~/components/ui/button";
import {SquareArrowOutUpRight} from "lucide-react";
import type {Country} from "~/types/country";
import type {Province} from "~/types/province";
import type {Subdistrict} from "~/types/subdistrict";
import type {Village} from "~/types/village";
import type {Kpknl} from "~/types/kpknl";


export const KpknlColumn: ColumnDef<Kpknl>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "nama",
        header: "Nama",
    },
    {
        accessorKey: "kode_satker",
        header: "Kode Satker",
    },
    {
        accessorKey: "alamat",
        header: "Alamat",
    },
    {
        accessorKey: "kota",
        header: "Kota",
    },
    {
        accessorKey: "provinsi",
        header: "Provinsi",
    },
    {
        accessorKey: "nomor_telepon",
        header: "Nomor telepon",
    },
    {
        accessorKey: "created_at",
        header: "Created at"
    },
    {
        accessorKey: "updated_at",
        header: "Updated at"
    },
    {
        header: "Action",
        cell: ({ row }) => {
            const data = row.original;
            const navigate = useNavigate()

            return (
                <Button variant={"outline"} onClick={() => {
                    navigate(`/modul-kelurahan/${data.id}`)
                }}>
                    <SquareArrowOutUpRight/>
                </Button>
            );
        }
    }
];