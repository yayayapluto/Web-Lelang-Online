import type {Mandatory} from "~/types/mandatory";
import type {Auction} from "~/types/auction";
import type {Item} from "~/types/item";
import type {Seller} from "~/types/seller";
import type {Organizer} from "~/types/organizer";

export type AuctionContent = Mandatory & {
    auction_id: number,
    item_id: number,
    seller_id: number,
    organizer_id: number,
    auction: Auction,
    item: Item,
    seller: Seller,
    organizer: Organizer
}