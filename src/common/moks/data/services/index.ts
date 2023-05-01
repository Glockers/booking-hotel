import {GridRowsProp} from "@mui/x-data-grid-pro";
import {randomId, randomInt, randomJobTitle, randomPrice} from "@mui/x-data-grid-generator";
import {IServices} from "../../../dto";
import {faker} from "@faker-js/faker";

export const initialRows: GridRowsProp = [
    {
        id: randomId(),
        name: randomJobTitle(),
        price: randomPrice(1000, 100000),
        duration: randomInt(0, 100),
    },
    {
        id: randomId(),
        name: randomJobTitle(),
        price: randomPrice(1000, 100000),
        duration: randomInt(0, 100),
    },
    {
        id: randomId(),
        name: randomJobTitle(),
        price: randomPrice(1000, 100000),
        duration: randomInt(0, 100),
    },
    {
        id: randomId(),
        name: randomJobTitle(),
        price: randomPrice(1000, 100000),
        duration: randomInt(0, 100),
    },
    {
        id: randomId(),
        name: randomJobTitle(),
        price: randomPrice(1000, 100000),
        duration: randomInt(0, 100),
    },
    {
        id: randomId(),
        name: randomJobTitle(),
        price: randomPrice(1000, 100000),
        duration: randomInt(0, 100),
    },
    {
        id: randomId(),
        name: randomJobTitle(),
        price: randomPrice(1000, 100000),
        duration: randomInt(0, 100),
    },
    {
        id: randomId(),
        name: randomJobTitle(),
        price: randomPrice(1000, 100000),
        duration: randomInt(0, 100),
    },
];


const services: IServices[] = [
    {
        id: 1,
        name: faker.internet.userName(),
        duration: 10,
        price: 130.13,
    },
    {
        id: 2,
        name: faker.internet.userName(),
        duration: 101,
        price: 13.13,
    },
]
