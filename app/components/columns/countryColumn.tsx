import type { ColumnDef } from "@tanstack/react-table";
import {useNavigate} from "react-router";
import {Button} from "~/components/ui/button";
import {SquareArrowOutUpRight} from "lucide-react";
import type {Country} from "~/types/country";


export const CountryColumn: ColumnDef<Country>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "nama",
        header: "Nama",
    },
    {
        accessorKey: "kode",
        header: "Kode",
    },
    {
        accessorKey: "nomor",
        header: "Nomor",
        cell: ({row}) => `+${row.original.nomor}`
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
                    navigate(`/modul-negara/${data.id}`)
                }}>
                    <SquareArrowOutUpRight/>
                </Button>
            );
        }
    }
];