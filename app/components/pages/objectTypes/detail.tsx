import type { ObjectType } from "~/types/objectType";
import {GenericEntityDetail} from "~/components/generic/genericEntityDetail";

export default function ObjectTypeDetail() {
    return (
        <GenericEntityDetail<ObjectType>
            resourceUrl={"objectTypes"}
            breadcrumbModuleLabel="Modul-Jenis-Objek"
            breadcrumbModulePath="/modul-jenis-objek"
            getResourceName={(objectType) => objectType.nama}
            renderDetails={(objectType) => (
                <div className="space-y-4">
                    <div className="text-sm text-muted-foreground space-y-2 grid grid-cols-[max-content_1fr] gap-x-2">
                        <span className="text-black font-medium">Nama</span>
                        <span>: {objectType.nama}</span>
                    </div>
                </div>
            )}
        />
    );
}