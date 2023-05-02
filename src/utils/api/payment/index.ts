import {IBookRoom} from "common/dto";
import {$api} from "utils/axios";

const API_BOOK_ROOM = "/api/payment/room/create-checkout-session";

export async function bookRoom(order: IBookRoom): Promise<IBookRoom | null>{
    return $api.post(API_BOOK_ROOM, order);
}

