import type {Mandatory} from "~/types/mandatory";
import type {Province} from "~/types/province";
import type {City} from "~/types/city";

export type Seller = Mandatory & {
    nama: string,
    nomor_telepon: string,
    alamat: string,
    province_id: number,
    city_id: number,
    province: Province,
    city: City
}