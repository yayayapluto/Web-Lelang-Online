import type {Mandatory} from "~/types/mandatory";

export type Category = Mandatory & {
    nama: string,
    status: "TAYANG" | "TIDAK_TAYANG",
    ikon: string,
    tipe_ikon: string,
    nama_ikon: string
}