import type { Seller } from "~/types/seller";
import {GenericEntityDetail} from "~/components/generic/genericEntityDetail";

export default function SellerDetail() {
    return (
        <GenericEntityDetail<Seller>
            resourceUrl={"sellers"}
            breadcrumbModuleLabel="Modul-Penjual"
            breadcrumbModulePath="/modul-penjual"
            getResourceName={(seller) => seller.nama}
            renderDetails={(seller) => (
                <div className="space-y-4">
                    <div className="text-sm text-muted-foreground space-y-2 grid grid-cols-[max-content_1fr] gap-x-2">
                        <span className="text-black font-medium">Nama</span>
                        <span>: {seller.nama}</span>

                        <span className="text-black font-medium">Nomor Telepon</span>
                        <span>: {seller.nomor_telepon}</span>

                        <span className="text-black font-medium">Provinsi</span>
                        <span>: {seller.province.nama}</span>

                        <span className="text-black font-medium">Kota</span>
                        <span>: {seller.city.nama}</span>
                    </div>
                </div>
            )}
        />
    );
}