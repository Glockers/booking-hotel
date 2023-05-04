import {IBookRoom} from "common/dto";
import {$api} from "utils/axios";

const API_BOOK_ROOM = "/api/payment/room/create-checkout-session";
const API_MY_BOOKING = "/api/booking/getMyBooking";


export async function bookRoom(order: IBookRoom): Promise<IBookRoom | null>{
    return $api.post(API_BOOK_ROOM, order);
}


// export async function getMyBooking(): Promise<IBookRoom | null>{
//     return ;
// }
//
