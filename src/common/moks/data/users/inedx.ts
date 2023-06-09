import {GridRowsProp} from "@mui/x-data-grid-pro";
import {randomEmail, randomId, randomTraderName, randomUserName} from "@mui/x-data-grid-generator";
import {IUser} from "../../../dto";
import {faker} from "@faker-js/faker";
import {ROLES} from "../../../enum";


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



