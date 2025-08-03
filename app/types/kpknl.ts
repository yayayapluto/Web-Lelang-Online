import type {Mandatory} from "~/types/mandatory";

export type Kpknl = Mandatory & {
    nama: string,
    kode_satker: number,
    alamat: string,
    kota: string,
    provinsi: string,
    nomor_telepon: string,
}