import React, {useEffect, useState} from 'react';
import TableAppeal from "../../../../components/table/appeals-table";
import {columns} from "./config";
import {Button, Input, InputNumber, Space} from "antd";
import {CSVLink} from "react-csv";
import {Title} from "../../../../common/style/header";
import {Typography} from "@mui/material";
import styled from "styled-components";
import {faker} from "@faker-js/faker";
import {STATUS_APPEAL} from "../../../../common/enum/appeal";
import {IAppeal} from "../../../../components/table/types";

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
const dataFromServer: IAppeal[] = [
    {
        id: 1,

    },
    {
        id: 2,
        // loginClient: faker.datatype.number(),
        // idService: faker.datatype.number(),
        // status: STATUS_APPEAL.REJECTED,
    },
]


const PageAppeal = () => {
    const [dataSource, setDataSource] = useState<IAppeal[]>([]);

    useEffect(() => {
        setDataSource(dataFromServer)
    }, [])

    const handleAdd = () => {
        console.log("Отправлено на сервер")
        // setDataSource((prevData) => {
        //     return [...prevData, {status: STATUS_APPEAL.PENDING, loginClient: faker.name ,id: dataSource[dataSource.length - 1].id + 1}];
        // });
    }


    return (
        <>
            <Title>Управление Обращениями</Title>
            {/*<WrapperAction>*/}
            {/*    <Button onClick={handleAdd}> Добавить </Button>*/}
            {/*</WrapperAction>*/}
            {/*<WrapperContent>*/}

            {/*    <ElementWrapper>*/}
            {/*        <Typography fontWeight={"bold"}>*/}
            {/*            Название услуги*/}
            {/*        </Typography>*/}

            {/*        <Input style={{width: "100%"}} placeholder="Название услуги" value={name}*/}
            {/*               onChange={value => setName(value.target.value)}/>*/}
            {/*    </ElementWrapper>*/}
            {/*    <ElementWrapper>*/}
            {/*        <Typography fontWeight={"bold"}>*/}
            {/*            Стоимость услуги*/}
            {/*        </Typography>*/}
            {/*        <InputNumber style={{width: "100%"}} min={1} max={10000000} onChange={handlePriceChange}*/}
            {/*                     placeholder={"Стоимость услуги"}/>*/}
            {/*    </ElementWrapper>*/}
            {/*    <ElementWrapper>*/}
            {/*        <Typography fontWeight={"bold"}>*/}
            {/*            Продолжительность услуги*/}
            {/*        </Typography>*/}
            {/*        <InputNumber style={{width: "100%"}} min={1} max={10000000} onChange={handleDurationChange}*/}
            {/*                     placeholder={"Продолжительность услуги"}/>*/}
            {/*    </ElementWrapper>*/}
            {/*</WrapperContent>*/}

            {/*<Space style={{marginBottom: 16}}>*/}
            {/*    <Button type="primary" >*/}
            {/*        <CSVLink filename={"Услуги"} data={dataSource}>Экспортировать</CSVLink>*/}
            {/*    </Button>*/}
            {/*</Space>*/}
            <TableAppeal columns={columns} dataSource={dataSource} setDataSource={setDataSource}/>
        </>
    );
};

export default PageAppeal;