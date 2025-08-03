import type {Mandatory} from "~/types/mandatory";

export type Country = Mandatory & {
    nama: string
    kode: string
    nomor: number
}