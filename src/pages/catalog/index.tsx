import React from 'react';
import {Button, Tabs, TabsProps} from "antd";
import {Layout} from "../../common/style/page";
import ServiceCatalogPage from "./rooms";
import RoomCatalogPage from "./service";

const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: `Номера`,
        children: <RoomCatalogPage/>,
    },
    {
        key: '2',
        label: `Услуги`,
        children: <ServiceCatalogPage/>,
    },
];

const Catalog = () => {
    return (
        <Tabs defaultActiveKey="1" items={items} onChange={onChange}/>
    );
};

export default Catalog;