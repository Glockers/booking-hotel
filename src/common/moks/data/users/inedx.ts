import {GridRowsProp} from "@mui/x-data-grid-pro";
import {randomEmail, randomId, randomTraderName, randomUserName} from "@mui/x-data-grid-generator";
import {ROLES} from "../../../role";


export const initialRows: GridRowsProp = [
    {
        id: randomId(),
        name: randomTraderName(),
        email: randomEmail(),
        login: randomUserName(),
        role: ROLES.ADMIN
    },
    {
        id: randomId(),
        name: randomTraderName(),
        email: randomEmail(),
        login: randomUserName(),
        role: ROLES.ADMIN
    },
    {
        id: randomId(),
        name: randomTraderName(),
        email: randomEmail(),
        login: randomUserName(),
        role: ROLES.ADMIN
    },
    {
        id: randomId(),
        name: randomTraderName(),
        email: randomEmail(),
        login: randomUserName(),
        role: ROLES.ADMIN
    },
    {
        id: randomId(),
        name: randomTraderName(),
        email: randomEmail(),
        login: randomUserName(),
        role: ROLES.USER
    },
];



