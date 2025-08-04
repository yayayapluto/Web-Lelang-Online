import type { ColumnDef } from "@tanstack/react-table";
import {useNavigate} from "react-router";
import {Button} from "~/components/ui/button";
import {SquareArrowOutUpRight} from "lucide-react";
import type {Country} from "~/types/country";
import type {Province} from "~/types/province";
import type {Subdistrict} from "~/types/subdistrict";
import type {Village} from "~/types/village";
import type {JobType} from "~/types/jobType";
import type {ObjectType} from "~/types/objectType";
import type {User} from "~/types/user";


export const UserColumn: ColumnDef<User>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "job_type",
        header: "Tipe Pekerjaan",
        cell: ({row}) => row.original.job_type.nama
    },
    {
        accessorKey: "province",
        header: "Provinsi",
        cell: ({row}) => row.original.province.nama
    },
    {
        accessorKey: "kewarganegaraan",
        header: "Kewarganegaraan",
    },
    {
        accessorKey: "nik",
        header: "NIK",
    },
    {
        accessorKey: "nama_lengkap",
        header: "Nama Lengkap",
    },
    {
        accessorKey: "country",
        header: "Negara",
        cell: ({row}) => row.original.country.nama
    },
    {
        accessorKey: "jenis_kelamin",
        header: "Jenis Kelamin",
    },
    {
        accessorKey: "city",
        header: "Kota",
        cell: ({row}) => row.original.city.nama
    },
    {
        accessorKey: "tempat_lahir",
        header: "Tempat Lahir",
    },
    {
        accessorKey: "tanggal_lahir",
        header: "Tanggal Lahir",
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
        accessorKey: "file_ktp",
        header: "File KTP",
    },
    {
        accessorKey: "subdistrict",
        header: "Kecamatan",
        cell: ({row}) => row.original.subdistrict.nama
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "village",
        header: "Kelurahan",
        cell: ({row}) => row.original.village.nama
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
                    navigate(`/modul-jenis-objek/${data.id}`)
                }}>
                    <SquareArrowOutUpRight/>
                </Button>
            );
        }
    }
];