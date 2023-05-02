import React, { useEffect, useState } from 'react';
import { IBookRoom, IRoom, IUser } from "../../../common/dto";
import TableFactory from "../table-factory";
import { columns } from "./config";
import { faker } from "@faker-js/faker";
import { useNotificationContext } from "../../../utils/context/notificationContext";
import { Button, DatePicker, InputNumber, Space } from "antd";
import styled from "styled-components";
import { Typography } from "@mui/material";
import type { DatePickerProps, RangePickerProps } from 'antd/es/date-picker';
import { IPropsTableCRUD } from "../../../common/types/table";
import { ENUM_RESERVATION, ENUM_ROOM_FREEDOM, ROLES, TYPE_CLASS_ROOM } from "../../../common/enum";
import { $api } from "../../../utils/axios";
import { CSVLink } from "react-csv";

const { RangePicker } = DatePicker;

type HandleInputChangeType = (value: any, name: string | string[]) => void;


const User: IUser = {
    id: faker.datatype.number(),
    name: faker.name.firstName("male"),
    role: ROLES.ADMIN,
    email: faker.internet.email(),
    login: faker.internet.userName(),
}
// const room: IRoom = {
//     id: faker.datatype.number(),
//     roomClass: TYPE_CLASS_ROOM.STANDARD,
//     price: parseFloat(faker.commerce.price()),
//     count_place: 3,
//     status: ENUM_ROOM_FREEDOM.BOOKED
// }
// const dataFromServer: IBookRoom[] = [
//     {
//         id: 1,
//         room,
//         dateStart: new Date(faker.date.past()),
//         dateEnd: new Date(faker.date.future()),
//         status: ENUM_RESERVATION.UNPAID,
//         guestsCount: 3,
//         user: User,
//     },
//     {
//         id: 2,
//         room,
//         dateStart: new Date(faker.date.past()),
//         dateEnd: new Date(faker.date.future()),
//         status: ENUM_RESERVATION.PAID,
//         guestsCount: 2,
//         user: User
//     }
// ]


const WrapperContent = styled.div`
  display: flex;
  background-color: white;
  padding: 15px;
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

const WrapperPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`


const TableBook = () => {
    const [dataSource, setDataSource] = useState<IBookRoom[]>([]);
    const { showMessage } = useNotificationContext();
    const [formData, setFormData] = useState<IBookRoom>({} as IBookRoom);

    useEffect(() => {
        try {
            $api.get<IBookRoom[]>("/api/booking/getAll")
                .then(value => {
                    console.log("[GET]", value.data)
                    setDataSource(value.data)
                    showMessage("Данные загружены", "success");
                }).catch(error => console.error(error))
        } catch (e) {
            showMessage("Произошла ошибка при загрузке данных", "error");
        }
    }, [])
    //
    // useEffect(() => {
    //     console.log(formData)
    // }, [formData])

    const deleteHandler = (data: IBookRoom) => {
        $api.post("/api/booking/delete", data)
            .then(value => {
                showMessage("Бронирование было удалено!", "success")
            }).catch(error => console.error(error))
    }
    const updateHandler = async (data: IBookRoom) => {

        await $api.put("/api/booking/update", data)
            .then(value => {
                showMessage("Информация о бронировании была изменена", "success")
            }).catch(reason => {
                if (reason?.response?.data) {
                    showMessage(reason.response.data, "error")
                } else {
                    showMessage("Введен неверный формат полей.", "error")
                }
                console.error(reason)
            })
    }

    const saveHandler = (data: IBookRoom) => {
        try {
            const guestsCount = formData.guestsCount !== undefined ? formData.guestsCount : 0;
            const user: IUser = { id: formData.user?.id } as IUser;
            const room: IRoom = { id: formData.room?.id } as IRoom;
            const data: Omit<IBookRoom, "id"> = {
                user,
                room,
                guestsCount: guestsCount,
                dateEnd: formData.dateEnd,
                dateStart: formData.dateStart,
                status: ENUM_RESERVATION.PAID
            }

            console.log(data)

            $api.post("/api/booking/save", data)
                .then(response => {
                    showMessage("Информация о бронировании была добавлена.", "success")
                    console.log(response.data)
                    // setDataSource((prevData) => {
                    //     return [...prevData, response.data];
                    // });
                }).catch(reason => {
                    if (reason?.response?.data) {
                        showMessage(reason.response.data, "error")
                    } else {
                        showMessage("Введен неверный формат полей.", "error")
                    }
                    console.error(reason)
                })

        } catch (e) {
            console.error(e);
            showMessage("Ошибка!", "error")
        }
    }


    const handleInputChange: HandleInputChangeType = (value, name) => {
        setFormData((prevFormData) => {
            const newData = { ...prevFormData };
            let curr: any = newData;
            for (let i = 0; i < name.length; i++) {
                if (i === name.length - 1) {
                    curr[name[i]] = value;
                } else {
                    curr[name[i]] = curr[name[i]] || {};
                    curr = curr[name[i]];
                }
            }
            return newData;
        });
    };

    const onChange = (
        value: DatePickerProps['value'] | RangePickerProps['value'],
        dateString: [string, string] | string,
    ) => {

        setFormData({
            ...formData,
            dateStart: new Date(dateString[0]),
            dateEnd: new Date(dateString[1])
        });


    };

    const prepareProps: IPropsTableCRUD<IBookRoom> = {
        saveHandler,
        updateHandler,
        deleteHandler,
        dataSource,
        columns,
        setDataSource,
    }

    return (
        <>
            <WrapperAction>
                <Button onClick={() => saveHandler(formData)}> Добавить </Button>
            </WrapperAction>

            <WrapperContent>
                <ElementWrapper>
                    <Typography fontWeight={"bold"}>
                        ID Клиента
                    </Typography>
                    <InputNumber value={formData.user?.id}
                        onChange={(value) => handleInputChange(value, ["user", "id"])}
                        placeholder={"ID Клиента"}
                        min={1}
                        max={9999999999}
                        style={{ width: "100%" }}
                    />
                </ElementWrapper>
                <ElementWrapper>
                    <Typography fontWeight={"bold"}>
                        Выберите номер комнаты
                    </Typography>
                    <InputNumber value={formData.room?.id}
                        onChange={(value) => handleInputChange(value, ["room", "id"])}
                        placeholder={"Номер комнаты"}
                        min={1}
                        max={9999999999}
                        style={{ width: "100%" }}
                    />
                </ElementWrapper>


                <ElementWrapper>
                    <WrapperPrice>
                        <Typography fontWeight={"bold"}>
                            Количество людей
                        </Typography>
                    </WrapperPrice>
                    <InputNumber value={formData.guestsCount}
                        onChange={(value) => handleInputChange(value, ["guestsCount"])}
                        placeholder={"Количество людей"}
                        min={1}
                        max={9999999999}
                        style={{ width: "100%" }}
                    />
                </ElementWrapper>


                <ElementWrapper>
                    <WrapperPrice>
                        <Typography fontWeight={"bold"}>
                            Дата бронирования
                        </Typography>
                    </WrapperPrice>
                    <Space direction="vertical" size={12}>
                        <RangePicker
                            showTime={{ format: 'HH:mm' }}
                            // format="YYYY-MM-DD"
                            onChange={onChange}
                        />
                    </Space>
                </ElementWrapper>
            </WrapperContent>
            <Space style={{ marginBottom: 16 }}>
                <Button type="primary">
                    <CSVLink filename={"Список бронирования"} data={dataSource}>Экспортировать</CSVLink>
                </Button>
            </Space>
            <TableFactory {...prepareProps} />
        </>
    );
};

export default TableBook;