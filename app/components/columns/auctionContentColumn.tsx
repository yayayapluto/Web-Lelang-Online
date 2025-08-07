import type { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import type { AuctionContent } from "~/types/auctionContent";

export const AuctionContentColumn: ColumnDef<AuctionContent>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "auction",
        header: "Auction",
        cell: ({ row }) => {
            const auction = row.original.auction;
            return auction?.nama_lot || "N/A";
        },
    },
    {
        accessorKey: "item",
        header: "Item",
        cell: ({ row }) => {
            const item = row.original.item;
            return item.bukti_kepemilikan || "N/A";
        },
    },
    {
        accessorKey: "seller",
        header: "Seller",
        cell: ({ row }) => {
            const seller = row.original.seller;
            return seller.nama || "N/A";
        },
    },
    {
        accessorKey: "organizer",
        header: "Organizer",
        cell: ({ row }) => {
            const organizer = row.original.organizer;
            return organizer.nama_unit_kerja || "N/A";
        },
    },
    {
        accessorKey: "created_at",
        header: "Dibuat Pada",
        cell: ({ row }) => new Date(row.original.created_at).toLocaleDateString("id-ID"),
    },
    {
        accessorKey: "updated_at",
        header: "Diperbarui Pada",
        cell: ({ row }) => new Date(row.original.updated_at).toLocaleDateString("id-ID"),
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
                    onClick={() => navigate(`/modul-konten-lelang/${data.id}`)}
                >
                    <SquareArrowOutUpRight className="h-4 w-4" />
                </Button>
            );
        },
    },
];