import type {Mandatory} from "~/types/mandatory";
import type {File} from "~/types/file";
import type {Item} from "~/types/item";

export type ItemPhoto = Mandatory & {
    item_id: number,
    file_id: number,
    item: Item,
    file: File
}