import React from "react";
import {IUserAuth} from "../types/auth";
import {ENUM_RESERVATION, ENUM_ROOM_FREEDOM, TYPE_CLASS_ROOM} from "../enum";


export type IUser = Required<Omit<IUserAuth, 'password'>>

export interface IServices {
    id: number;
    name: string;
    price: number;
    duration: number;
}

export interface IRoom {
    id: number;
    count_place: number;
    roomClass: TYPE_CLASS_ROOM,
    price: number,
    status?: ENUM_ROOM_FREEDOM
}


export interface IBookRoom {
    id: number;
    dateEnd: Date;
    dateStart: Date;
    guestsCount: number;
    user:IUser;
    room: IRoom;
    status: ENUM_RESERVATION
}


