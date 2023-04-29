import styled from "styled-components";
import * as React from "react";
import {useEffect, useState} from "react";
import {Button, Input, InputNumber, Space} from "antd";
import TableService from "../../../../components/table/service-table";
import {IServices} from "../../../../components/table/types";
import {faker} from "@faker-js/faker";
import {Title} from "../../../../common/style/header";
import {RoomServiceOutlined} from "@mui/icons-material";
import {Typography} from "@mui/material";
import {CSVLink} from "react-csv";
import {columns} from "./config";


const dataFromServer: IServices[] = [
    {
        id: 1,
        name: faker.internet.userName(),
        duration: 10,
        price: 130.13,
    },
    {
        id: 2,
        name: faker.internet.userName(),
        duration: 101,
        price: 13.13,
    },
]


const WrapperContent = styled.div`
  display: flex;
  background-color: white;
  padding: 30px;
  gap: 120px;
  margin: 9px 0 50px;
  border-radius: 10px;
`

const WrapperAction = styled.div`
  display: flex;
`
const ElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 30%;
`

function ServicePage() {
    const [dataSource, setDataSource] = useState<IServices[]>([]);
    const [name, setName] = useState<any>("");
    const [price, setPrice] = useState<any>();
    const [duration, setDuration] = useState<any>();

    useEffect(() => {
        setDataSource(dataFromServer)
    }, [])

    const handleAdd = () => {
        console.log("Отправлено на сервер")
        setDataSource((prevData) => {
            return [...prevData, {name, price, duration, id: dataSource[dataSource.length - 1].id + 1}];
        });
    }

    const handlePriceChange: any = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(event);
    };

    const handleDurationChange: any = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDuration(event);
    };
    return (
        <>
            <Title><RoomServiceOutlined/>Управление услугами</Title>

            <WrapperAction>
                <Button onClick={handleAdd}> Добавить </Button>
            </WrapperAction>
            <WrapperContent>

                <ElementWrapper>
                    <Typography fontWeight={"bold"}>
                        Название услуги
                    </Typography>

                    <Input style={{width: "100%"}} placeholder="Название услуги" value={name}
                           onChange={value => setName(value.target.value)}/>
                </ElementWrapper>
                <ElementWrapper>
                    <Typography fontWeight={"bold"}>
                        Стоимость услуги
                    </Typography>
                    <InputNumber style={{width: "100%"}} min={1} max={10000000} onChange={handlePriceChange}
                                 placeholder={"Стоимость услуги"}/>
                </ElementWrapper>
                <ElementWrapper>
                    <Typography fontWeight={"bold"}>
                        Продолжительность услуги
                    </Typography>
                    <InputNumber style={{width: "100%"}} min={1} max={10000000} onChange={handleDurationChange}
                                 placeholder={"Продолжительность услуги"}/>
                </ElementWrapper>
            </WrapperContent>

            <Space style={{marginBottom: 16}}>
                <Button type="primary" >
                    <CSVLink filename={"Услуги"} data={dataSource}>Экспортировать</CSVLink>
                </Button>
            </Space>


            <TableService columns={columns} dataSource={dataSource} setDataSource={setDataSource}/>
        </>
    )
}

export default React.memo(ServicePage);