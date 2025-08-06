import type {Mandatory} from "~/types/mandatory";
import type {Kpknl} from "~/types/kpknl";

export type Organizer = Mandatory & {
    nama_bank: string,
    nomor_telepon: string,
    alamat: string,
    nama_unit_kerja: string,
    kpknl: Kpknl | null,
}