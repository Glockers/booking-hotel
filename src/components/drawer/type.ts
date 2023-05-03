import {ReactNode} from "react";

export interface DrawerProps {
    setOpen: (data: boolean) => void,
    open: boolean
    children?: ReactNode
}