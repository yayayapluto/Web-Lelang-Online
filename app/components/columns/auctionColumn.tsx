import type { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import type { Auction } from "~/types/auction";
import type { Province } from "~/types/province";
import type { Kpknl } from "~/types/kpknl";

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(amount);
};

const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleDateString("id-ID");
};

export const AuctionColumn: ColumnDef<Auction>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "nama_lot",
        header: "Nama Lot",
    },
    {
        accessorKey: "kode_lot",
        header: "Kode Lot",
    },
    {
        accessorKey: "nilai_limit",
        header: "Nilai Limit",
        cell: ({ row }) => formatCurrency(row.original.nilai_limit),
    },
    {
        accessorKey: "nilai_jaminan",
        header: "Nilai Jaminan",
        cell: ({ row }) => formatCurrency(row.original.nilai_jaminan),
    },
    {
        accessorKey: "tanggal_mulai",
        header: "Tanggal Mulai",
        cell: ({ row }) => formatDate(row.original.tanggal_mulai),
    },
    {
        accessorKey: "tanggal_selesai",
        header: "Tanggal Selesai",
        cell: ({ row }) => formatDate(row.original.tanggal_selesai),
    },
    {
        accessorKey: "tanggal_batas_jaminan",
        header: "Batas Jaminan",
        cell: ({ row }) => formatDate(row.original.tanggal_batas_jaminan),
    },
    {
        accessorKey: "province",
        header: "Provinsi",
        cell: ({ row }) => {
            const province = row.original.province as Province;
            return province.nama || "N/A";
        },
    },
    {
        accessorKey: "kpknl",
        header: "KPKNL",
        cell: ({ row }) => {
            const kpknl = row.original.kpknl as Kpknl;
            return kpknl?.nama || "N/A";
        },
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "cara_penawaran",
        header: "Cara Penawaran",
    },
    {
        accessorKey: "created_at",
        header: "Dibuat Pada",
        cell: ({ row }) => formatDate(row.original.created_at),
    },
    {
        accessorKey: "updated_at",
        header: "Diperbarui Pada",
        cell: ({ row }) => formatDate(row.original.updated_at),
    },
    {
        header: "Aksi",
        id: "action",
        cell: ({ row }) => {
            const data = row.original;
            const navigate = useNavigate();
            return (
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => navigate(`/modul-lelang/${data.id}`)}
                >
                    <SquareArrowOutUpRight className="h-4 w-4" />
                </Button>
            );
        },
    },
];