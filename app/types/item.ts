import type {Mandatory} from "~/types/mandatory";
import type {ItemType} from "~/types/itemType";
import type {ObjectType} from "~/types/objectType";
import type {Category} from "~/types/category";
import type {ItemPhoto} from "~/types/itemPhoto";
import type {File} from "~/types/file";

export type Item = Mandatory & {
    bukti_kepemilikan: string,
    bukti_kepemilikan_no: string,
    bukti_kepemilikan_tgl: string,
    alamat: string,
    luas: number | null,
    stnk: string | null,
    nomor_rangka: string | null,
    nopol: string | null,
    tahun: number,
    warna: string | null,
    item_type_id: number,
    object_type_id: number,
    category_id: number,
    item_type: ItemType,
    object_type: ObjectType,
    category: Category,
    photos: File[]
}