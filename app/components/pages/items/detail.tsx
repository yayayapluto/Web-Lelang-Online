import type { Item } from "~/types/item";
import {GenericEntityDetail} from "~/components/generic/genericEntityDetail";

export default function ItemDetail() {
    return (
        <GenericEntityDetail<Item>
            resourceUrl={"items"}
            breadcrumbModuleLabel="Modul-Barang"
            breadcrumbModulePath="/modul-barang"
            getResourceName={(item) => "Detail Barang"}
            renderDetails={(item) => (
                <div className="space-y-4">
                    <div className="text-sm text-muted-foreground space-y-2 grid grid-cols-[max-content_1fr] gap-x-2">
                        <span className="text-black font-medium">Bukti Kepemilikan</span>
                        <span>: {item.bukti_kepemilikan}</span>

                        <span className="text-black font-medium">Nomor Bukti</span>
                        <span>: {item.bukti_kepemilikan_no}</span>

                        <span className="text-black font-medium">Tanggak Bukti</span>
                        <span>: {item.bukti_kepemilikan_tgl}</span>

                        <span className="text-black font-medium">Alamat</span>
                        <span>: {item.alamat ?? "-"}</span>

                        <span className="text-black font-medium">Luas</span>
                        <span>: {item.luas ?? "-"}</span>

                        <span className="text-black font-medium">Nopol</span>
                        <span>: {item.nopol ?? "-"}</span>

                        <span className="text-black font-medium">Tahun</span>
                        <span>: {item.tahun}</span>

                        <span className="text-black font-medium">Warna</span>
                        <span>: {item.warna ?? "-"}</span>

                        <span className="text-black font-medium">Jenis Barang</span>
                        <span>: {item.item_type.nama}</span>

                        <span className="text-black font-medium">Jenis Objek</span>
                        <span>: {item.object_type.nama}</span>

                        <span className="text-black font-medium">Kategori</span>
                        <span>: {item.category.nama}</span>

                        <span className="text-black font-medium">Jumlah Foto</span>
                        <span>: {item.photos.length ?? 0}</span>
                    </div>
                </div>
            )}
        />
    );
}