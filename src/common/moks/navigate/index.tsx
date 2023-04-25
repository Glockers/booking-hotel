import {HomeOutlined, RoomServiceOutlined, SettingsOutlined} from '@mui/icons-material'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import {AlertOutlined, AreaChartOutlined, TeamOutlined} from "@ant-design/icons";

export const adminNavMenu = [
    {
        name: 'Главная',
        icon: <HomeOutlined />,
        path: '/',
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
        name: 'Управление обращениями',
        icon: <TeamOutlined />,
        path: '/appeals',

    },
    {
        name: 'Управление бронированием',
        icon:<AlertOutlined />,
        path: '/reservation',

    },
    {
        name: 'Отчеты',
        icon:<AreaChartOutlined />,
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
        name: 'USER',
        icon: <PermIdentityOutlinedIcon />,
        path: '/cabinet/users',

    },
    {
        name: 'УUSER',
        icon: <RoomServiceOutlined />,
        path: '/services',

    }
]
