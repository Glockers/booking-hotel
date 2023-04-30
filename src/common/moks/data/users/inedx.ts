import {GridRowsProp} from "@mui/x-data-grid-pro";
import {randomEmail, randomId, randomTraderName, randomUserName} from "@mui/x-data-grid-generator";
import {ROLES} from "../../../role";
import {IUser} from "../../../../components/table/types";
import {faker} from "@faker-js/faker";


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

const dataUser: IUser[] = [
    {
        id: 1,
        name: 'Test',
        email: faker.internet.email(),
        login: "admin",
        role: ROLES.ADMIN
    },
    {
        id: 2,
        name: 'test',
        login: "tester",
        email: faker.internet.email(),
        role: ROLES.USER
    },
]



