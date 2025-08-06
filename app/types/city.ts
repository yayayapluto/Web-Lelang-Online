import type {Mandatory} from "~/types/mandatory";

export type City = Mandatory & {
    nama: string,
    fullCode: number,
    code: number
}