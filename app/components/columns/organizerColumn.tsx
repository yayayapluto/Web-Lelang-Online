import type { ColumnDef } from "@tanstack/react-table";
import {useNavigate} from "react-router";
import {Button} from "~/components/ui/button";
import {SquareArrowOutUpRight} from "lucide-react";
import type {Country} from "~/types/country";
import type {Province} from "~/types/province";
import type {Subdistrict} from "~/types/subdistrict";
import type {Village} from "~/types/village";
import type {JobType} from "~/types/jobType";
import type {Organizer} from "~/types/organizer";


export const OrganizerColumn: ColumnDef<Organizer>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "nama_bank",
        header: "Nama Bank",
    },
    {
        accessorKey: "nomor_telepon",
        header: "Nomor Telepon",
    },
    {
        accessorKey: "alamat",
        header: "Alamat",
    },
    {
        accessorKey: "nama_unit_kerja",
        header: "Nama Unit Kerja",
    },
    {
        accessorKey: "kpknl",
        header: "KPKNL",
        cell: ({row}) => row.original.kpknl ? row.original.kpknl.nama : "-"
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
                    navigate(`/modul-penyelenggara/${data.id}`)
                }}>
                    <SquareArrowOutUpRight/>
                </Button>
            );
        }
    }
];