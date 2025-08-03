import type { ColumnDef } from "@tanstack/react-table";
import {useNavigate} from "react-router";
import {Button} from "~/components/ui/button";
import {SquareArrowOutUpRight} from "lucide-react";
import type {Country} from "~/types/country";
import type {Province} from "~/types/province";
import type {Subdistrict} from "~/types/subdistrict";


export const SubdistrictColumn: ColumnDef<Subdistrict>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "nama",
        header: "Nama",
    },
    {
        accessorKey: "fullCode",
        header: "Kode Lengkap",
    },
    {
        accessorKey: "code",
        header: "Kode",
        cell: ({row}) => row.original.code ?? "-"
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
                    navigate(`/modul-provinsi/${data.id}`)
                }}>
                    <SquareArrowOutUpRight/>
                </Button>
            );
        }
    }
];