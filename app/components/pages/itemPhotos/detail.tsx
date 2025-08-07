import type { ItemPhoto } from "~/types/itemPhoto";
import {GenericEntityDetail} from "~/components/generic/genericEntityDetail";

export default function ItemPhotoDetail() {
    return (
        <GenericEntityDetail<ItemPhoto>
            resourceUrl={"itemPhotos"}
            breadcrumbModuleLabel="Modul-Foto-Barang"
            breadcrumbModulePath="/modul-foto-barang"
            getResourceName={(itemPhoto) => "Detail Foto Barang"}
            renderDetails={(itemPhoto) => (
                <div className="space-y-4">
                    <div className="text-sm text-muted-foreground space-y-2 grid grid-cols-[max-content_1fr] gap-x-2">
                        <span className="text-black font-medium">Bukti Kepemilikan (barang)</span>
                        <span>: {itemPhoto.item.bukti_kepemilikan}</span>

                        <span className="text-black font-medium">Foto</span>
                        <span>: {itemPhoto.file.file_url}</span>
                    </div>
                </div>
            )}
        />
    );
}