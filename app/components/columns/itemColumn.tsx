import type { ColumnDef } from "@tanstack/react-table";
import {useNavigate} from "react-router";
import {Button} from "~/components/ui/button";
import {SquareArrowOutUpRight} from "lucide-react";
import type {Country} from "~/types/country";
import type {Province} from "~/types/province";
import type {Subdistrict} from "~/types/subdistrict";
import type {Village} from "~/types/village";
import type {JobType} from "~/types/jobType";
import type {Item} from "~/types/item";

export const ItemColumn: ColumnDef<Item>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "bukti_kepemilikan",
        header: "Bukti Kepemilikan",
    },
    {
        accessorKey: "bukti_kepemilikan_no",
        header: "No. Bukti",
    },
    {
        accessorKey: "bukti_kepemilikan_tgl",
        header: "Tgl. Bukti",
    },
    {
        accessorKey: "alamat",
        header: "Alamat",
    },
    {
        accessorKey: "luas",
        header: "Luas (m²)",
        cell: ({ getValue }) => {
            const luas = getValue<number | null>();
            return luas ? `${luas} m²` : "-";
        },
    },
    {
        accessorKey: "nopol",
        header: "NOPOL",
    },
    {
        accessorKey: "tahun",
        header: "Tahun",
    },
    {
        accessorKey: "warna",
        header: "Warna",
    },
    {
        accessorKey: "item_type",
        header: "Jenis Barang",
        cell: ({ row }) => row.original.item_type.nama
    },
    {
        accessorKey: "object_type",
        header: "Jenis Objek",
        cell: ({ row }) => row.original.object_type.nama
    },
    {
        accessorKey: "category",
        header: "Kategori",
        cell: ({ row }) => row.original.category.nama
    },
    {
        accessorKey: "photos",
        header: "Jumlah foto",
        cell: ({row}) => row.original.photos.length
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
                    navigate(`/modul-barang/${data.id}`)
                }}>
                    <SquareArrowOutUpRight/>
                </Button>
            );
        }
    }
];