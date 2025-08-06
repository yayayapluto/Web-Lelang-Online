import type {Mandatory} from "~/types/mandatory";
import type {JobType} from "~/types/jobType";
import type {Province} from "~/types/province";
import type {Country} from "~/types/country";
import type {City} from "~/types/city";
import type {Subdistrict} from "~/types/subdistrict";
import type {Village} from "~/types/village";

export type User = Mandatory & {
    job_type_id: number,
    province_id: number,
    kewarganegaraan: "WNA" | "WNI",
    nik: string,
    nama_lengkap: string,
    country_id: number,
    jenis_kelamin: "PRIA" | "WANITA",
    city_id: number,
    tempat_lahir: string,
    tanggal_lahir: string,
    nomor_telepon: string,
    alamat: string,
    file_ktp: string,
    subdistrict_id: number,
    email: string,
    village_id: string,
    password: string,
    job_type: JobType,
    province: Province,
    country: Country,
    city: City,
    subdistrict: Subdistrict,
    village: Village
}