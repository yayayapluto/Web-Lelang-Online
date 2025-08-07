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
import type {ItemPhoto} from "~/types/itemPhoto";

export const ItemPhotoColumn: ColumnDef<ItemPhoto>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "item",
        header: "item",
        cell: ({row}) => row.original.item.bukti_kepemilikan
    },
    {
        accessorKey: "file",
        header: "file",
        cell: ({row}) => row.original.file.file_url
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
                    navigate(`/modul-foto-barang/${data.id}`)
                }}>
                    <SquareArrowOutUpRight/>
                </Button>
            );
        }
    }
];