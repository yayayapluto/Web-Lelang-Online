import type { Category } from "~/types/category";
import {GenericEntityDetail} from "~/components/generic/genericEntityDetail";

export default function CategoryDetail() {
    return (
        <GenericEntityDetail<Category>
            resourceUrl={"categories"}
            breadcrumbModuleLabel="Modul-Kategori-Barang"
            breadcrumbModulePath="/modul-Kategori-Barang"
            getResourceName={(category) => category.nama}
            renderDetails={(category) => (
                <div className="space-y-4">
                    <div className="text-sm text-muted-foreground space-y-2 grid grid-cols-[max-content_1fr] gap-x-2">
                        <span className="text-black font-medium">Nama</span>
                        <span>: {category.nama}</span>

                        <span className="text-black font-medium">Status</span>
                        <span>: {category.status}</span>

                        <span className="text-black font-medium">Ikon</span>
                        <span>: {category.ikon}</span>

                        <span className="text-black font-medium">Tipe ikon</span>
                        <span>: {category.tipe_ikon}</span>

                        <span className="text-black font-medium">Nama ikon</span>
                        <span>: {category.nama_ikon}</span>
                    </div>
                </div>
            )}
        />
    );
}