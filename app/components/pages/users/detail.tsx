import type { User } from "~/types/user";
import {GenericEntityDetail} from "~/components/generic/genericEntityDetail";

export default function UserDetail() {
    return (
        <GenericEntityDetail<User>
            resourceUrl={"users"}
            breadcrumbModuleLabel="Modul-Pengguna"
            breadcrumbModulePath="/modul-pengguna"
            getResourceName={(user) => user.nama_lengkap}
            renderDetails={(user) => (
                <div className="space-y-4">
                    <div className="text-sm text-muted-foreground space-y-2 grid grid-cols-[max-content_1fr] gap-x-2">
                        <span className="text-black font-medium">Tipe Pekerjaan</span>
                        <span>: {user.job_type.nama}</span>

                        <span className="text-black font-medium">Provinsi</span>
                        <span>: {user.province.nama}</span>

                        <span className="text-black font-medium">Kewarganegaraan</span>
                        <span>: {user.kewarganegaraan}</span>

                        <span className="text-black font-medium">NIK</span>
                        <span>: {user.nik}</span>

                        <span className="text-black font-medium">Nama Lengkap</span>
                        <span>: {user.nama_lengkap}</span>

                        <span className="text-black font-medium">Negara</span>
                        <span>: {user.jenis_kelamin}</span>

                        <span className="text-black font-medium">Kota</span>
                        <span>: {user.city.nama}</span>

                        <span className="text-black font-medium">Tempat Lahir</span>
                        <span>: {user.tanggal_lahir}</span>

                        <span className="text-black font-medium">Nomor Telepon</span>
                        <span>: {user.nomor_telepon}</span>

                        <span className="text-black font-medium">Alamat</span>
                        <span>: {user.alamat}</span>

                        <span className="text-black font-medium">File KTP</span>
                        <span>: {user.file.file_url ?? "-"}</span>

                        <span className="text-black font-medium">Kecamatan</span>
                        <span>: {user.subdistrict.nama}</span>

                        <span className="text-black font-medium">Email</span>
                        <span>: {user.email}</span>

                        <span className="text-black font-medium">Kelurahan</span>
                        <span>: {user.village.nama}</span>
                    </div>
                </div>
            )}
        />
    );
}