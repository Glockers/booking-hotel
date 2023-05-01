import {useEffect, useState} from "react";
import {useAppSelector} from "../../../common/types/store";
import {IUserAuth} from "../../../common/types/auth";
import {ROLES} from "../../../common/enum";

export const useAuth = (): ROLES | null | undefined => {

    const [role, setRole] = useState<ROLES | null | undefined>(null);
    const user = useAppSelector(state => state.auth.user);
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        setFlag(true)
        const userString = sessionStorage.getItem("user");
        if (userString) {
            const user: IUserAuth = JSON.parse(userString);
            setRole(user.role);
        }
    }, []);

    useEffect(() => {
        if (user && flag) {
            setRole(user.role);
        }
    }, [user]);


    return role;
};

