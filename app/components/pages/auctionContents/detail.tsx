import type { AuctionContent } from "~/types/auctionContent";
import {GenericEntityDetail} from "~/components/generic/genericEntityDetail";

export default function AuctionContentDetail() {
    return (
        <GenericEntityDetail<AuctionContent>
            resourceUrl={"auctionContents"}
            breadcrumbModuleLabel="Modul-Konten-Lelang"
            breadcrumbModulePath="/modul-konten-lelang"
            getResourceName={(auctionContent) => "Detail Konten Lelang"}
            renderDetails={(auctionContent) => (
                <div className="space-y-4">
                    <div className="text-sm text-muted-foreground space-y-2 grid grid-cols-[max-content_1fr] gap-x-2">
                        <span className="text-black font-medium">Nama Lot Lelang</span>
                        <span>: {auctionContent.auction.nama_lot}</span>

                        <span className="text-black font-medium">Bukti Kepemilikan Barang</span>
                        <span>: {auctionContent.item.bukti_kepemilikan}</span>

                        <span className="text-black font-medium">Nama Penjual</span>
                        <span>: {auctionContent.seller.nama}</span>

                        <span className="text-black font-medium">Nama Penyelenggara</span>
                        <span>: {auctionContent.organizer.nama_unit_kerja}</span>
                    </div>
                </div>
            )}
        />
    );
}