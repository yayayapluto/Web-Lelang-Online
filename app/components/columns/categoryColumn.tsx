import type { ColumnDef } from "@tanstack/react-table";
import {useNavigate} from "react-router";
import {Button} from "~/components/ui/button";
import {SquareArrowOutUpRight} from "lucide-react";
import type {Country} from "~/types/country";
import type {Province} from "~/types/province";
import type {Subdistrict} from "~/types/subdistrict";
import type {Village} from "~/types/village";
import type {Category} from "~/types/category";


export const CategoryColumn: ColumnDef<Category>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "nama",
        header: "Nama",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "ikon",
        header: "Ikon",
    },
    {
        accessorKey: "tipe_ikon",
        header: "Tipe ikon",
    },
    {
        accessorKey: "nama_ikon",
        header: "Nama ikon",
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
                    navigate(`/modul-kategori-barang/${data.id}`)
                }}>
                    <SquareArrowOutUpRight/>
                </Button>
            );
        }
    }
];