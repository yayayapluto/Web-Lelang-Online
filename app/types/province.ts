import type {Mandatory} from "~/types/mandatory";

export type Province = Mandatory & {
    nama: string,
    fullCode: number,
    code: number
}