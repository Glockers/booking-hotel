import {GridRowsProp} from "@mui/x-data-grid-pro";
import {randomId, randomInt, randomJobTitle, randomPrice} from "@mui/x-data-grid-generator";

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

