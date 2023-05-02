import {ReactNode} from "react";

export interface DrawerProps {
    setOpen: (data: boolean) => void,
    onOpen: () => void
    open: boolean
    children?: ReactNode
}