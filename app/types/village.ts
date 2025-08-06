import type {Mandatory} from "~/types/mandatory";

export type Village = Mandatory & {
    nama: string,
    fullCode: number,
    code: number | null
}