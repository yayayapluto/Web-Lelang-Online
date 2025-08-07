import type { Kpknl } from "~/types/kpknl";
import {GenericEntityDetail} from "~/components/generic/genericEntityDetail";

export default function KpknlDetail() {
    return (
        <GenericEntityDetail<Kpknl>
            resourceUrl={"kpknl"}
            breadcrumbModuleLabel="Modul-Jenis-Pekerjaan"
            breadcrumbModulePath="/modul-jenis-pekerjaan"
            getResourceName={(kpknl) => kpknl.nama}
            renderDetails={(kpknl) => (
                <div className="space-y-4">
                    <div className="text-sm text-muted-foreground space-y-2 grid grid-cols-[max-content_1fr] gap-x-2">
                        <span className="text-black font-medium">Nama</span>
                        <span>: {kpknl.nama}</span>

                        <span className="text-black font-medium">Kode Satker</span>
                        <span>: {kpknl.kode_satker}</span>

                        <span className="text-black font-medium">Alamat</span>
                        <span>: {kpknl.alamat}</span>

                        <span className="text-black font-medium">Kota</span>
                        <span>: {kpknl.nama}</span>

                        <span className="text-black font-medium">Provinsi</span>
                        <span>: {kpknl.provinsi}</span>

                        <span className="text-black font-medium">Nomor Telepon</span>
                        <span>: {kpknl.nomor_telepon}</span>
                    </div>
                </div>
            )}
        />
    );
}