import type { ItemType } from "~/types/itemType";
import {GenericEntityDetail} from "~/components/generic/genericEntityDetail";

export default function ItemTypeDetail() {
    return (
        <GenericEntityDetail<ItemType>
            resourceUrl={"itemTypes"}
            breadcrumbModuleLabel="Modul-Jenis-Barang"
            breadcrumbModulePath="/modul-jenis-barang"
            getResourceName={(itemType) => itemType.nama}
            renderDetails={(itemType) => (
                <div className="space-y-4">
                    <div className="text-sm text-muted-foreground space-y-2 grid grid-cols-[max-content_1fr] gap-x-2">
                        <span className="text-black font-medium">Nama</span>
                        <span>: {itemType.nama}</span>
                    </div>
                </div>
            )}
        />
    );
}