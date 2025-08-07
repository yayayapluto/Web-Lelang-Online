import type { Auction } from "~/types/auction";
import {GenericEntityDetail} from "~/components/generic/genericEntityDetail";
import {formatCurrency} from "~/utils/string-formatter";

export default function AuctionDetail() {
    return (
        <GenericEntityDetail<Auction>
            resourceUrl={"auctions"}
            breadcrumbModuleLabel="Modul-Lelang"
            breadcrumbModulePath="/modul-lelang"
            getResourceName={(auction) => auction.nama_lot}
            renderDetails={(auction) => (
                <div className="space-y-4">
                    <div className="text-sm text-muted-foreground space-y-2 grid grid-cols-[max-content_1fr] gap-x-2">
                        <span className="text-black font-medium">Nama Lot</span>
                        <span>: {auction.nama_lot}</span>

                        <span className="text-black font-medium">Kode Lot</span>
                        <span>: {auction.kode_lot}</span>

                        <span className="text-black font-medium">Nilai Limit</span>
                        <span>: {formatCurrency(auction.nilai_limit)}</span>

                        <span className="text-black font-medium">Nilai Jaminan</span>
                        <span>: {formatCurrency(auction.nilai_jaminan)}</span>

                        <span className="text-black font-medium">Tanggal Mulai</span>
                        <span>: {auction.tanggal_mulai}</span>

                        <span className="text-black font-medium">Tanggal Selesai</span>
                        <span>: {auction.tanggal_selesai}</span>

                        <span className="text-black font-medium">Tanggal Batas Jaminan</span>
                        <span>: {auction.tanggal_batas_jaminan}</span>

                        <span className="text-black font-medium">Provinsi</span>
                        <span>: {auction.province.nama}</span>

                        <span className="text-black font-medium">KPKNL</span>
                        <span>: {auction.kpknl.nama}</span>

                        <span className="text-black font-medium">Status</span>
                        <span>: {auction.status}</span>

                        <span className="text-black font-medium">Cara Penawaran</span>
                        <span>: {auction.cara_penawaran}</span>
                    </div>
                </div>
            )}
        />
    );
}