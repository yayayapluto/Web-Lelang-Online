import type {Mandatory} from "~/types/mandatory";
import type {Province} from "~/types/province";
import type {Kpknl} from "~/types/kpknl";

export type Auction = Mandatory & {
    nama_lot: string,
    nilai_limit: number,
    nilai_jaminan: number,
    kode_lot: string,
    tanggal_batas_jaminan: string,
    province_id: number,
    kpknl_id: number,
    tanggal_mulai: string,
    tanggal_selesai: string,
    status: string,
    cara_penawaran: string,
    province: Province,
    kpknl: Kpknl,
}