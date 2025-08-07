import type { ColumnDef } from "@tanstack/react-table";
import {useNavigate} from "react-router";
import {Button} from "~/components/ui/button";
import {SquareArrowOutUpRight} from "lucide-react";
import type {Country} from "~/types/country";
import type {Province} from "~/types/province";
import type {Subdistrict} from "~/types/subdistrict";
import type {Village} from "~/types/village";
import type {JobType} from "~/types/jobType";
import type {ItemType} from "~/types/itemType";
import type {Seller} from "~/types/seller";


export const SellerColumn: ColumnDef<Seller>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "nama",
        header: "Nama",
    },
    {
        accessorKey: "nomor_telepon",
        header: "Nomor Telepon",
    },
    {
        accessorKey: "province",
        header: "Provinsi",
        cell: ({row}) => row.original.province.nama
    },
    {
        accessorKey: "city",
        header: "Kota",
        cell: ({row}) => row.original.city.nama
    },
    {
        accessorKey: "nama",
        header: "Nama",
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
                    navigate(`/modul-penjual/${data.id}`)
                }}>
                    <SquareArrowOutUpRight/>
                </Button>
            );
        }
    }
];