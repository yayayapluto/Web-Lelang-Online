import type {Mandatory} from "~/types/mandatory";

export type Subdistrict = Mandatory & {
    nama: string,
    fullCode: number,
    code: number | null
}