import {HomeOutlined, RoomServiceOutlined, SettingsOutlined} from '@mui/icons-material'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import {AlertOutlined, AreaChartOutlined, RiseOutlined, TeamOutlined, WalletOutlined} from "@ant-design/icons";

export const adminNavMenu = [
    {
        name: 'Dashboard',
        icon: <HomeOutlined />,
        path: '/dashboard',
    },
    {
        name: 'Управление Пользователями',
        icon: <PermIdentityOutlinedIcon />,
        path: '/users',

    },
    {
        name: 'Управление Услугами',
        icon: <RoomServiceOutlined />,
        path: '/services',

    },

    {
        name: 'Управление бронированием',
        icon:<TeamOutlined />,
        path: '/reservation',

    },
    {
        name: 'Управление номерами',
        icon:<AlertOutlined />,
        path: '/room',

    },
    {
        name: 'Отчеты',
        icon:<RiseOutlined />,
        path: '/report',
    },
]


export const clientNavMenu = [
    {
        name: 'Главная',
        icon: <HomeOutlined />,
        path: '/',
    },
    {
        name: 'История услуг',
        icon:<WalletOutlined />,
        path: '/my-services',

    },

    {
        name: 'История Бронирований',
        icon:<AlertOutlined />,
        path: '/my-book',

    },
]
