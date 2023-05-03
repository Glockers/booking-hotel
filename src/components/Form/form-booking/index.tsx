import React from 'react';
import {Button, Col, DatePicker, Form, Input, InputNumber, Row, Space} from 'antd';
import {Controller, useForm} from "react-hook-form";
import {IBookRoom, IRoom} from "common/dto";

type Inputs = {
    number_room: number,
    col_vo: number,
    date: Date[]
};
const {RangePicker} = DatePicker;


interface IProps {
    sendData: (data: Partial<IBookRoom>) => void
}

const FormBooking = (props: IProps) => {
    const methods = useForm<Inputs>();

    const retriveData = (data: Inputs) => {
        const booking: Partial<IBookRoom> = {
            guestsCount: data.col_vo,
            room: {id: data.number_room} as IRoom,
            dateStart: new Date(data.date[0]),
            dateEnd: new Date(data.date[1]),
        }

        props.sendData(booking);
    }

    return (
        <Form onSubmitCapture={methods.handleSubmit(retriveData)}>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="name"
                        label="Номер комнаты"
                        rules={[{required: true, message: 'Пожалуйста введите Номер комнаты!'}]}
                    >
                        <Controller
                            name="number_room"
                            control={methods.control}
                            render={({field: {value, onChange}}) => (
                                <Input
                                    placeholder="Введите Номер комнаты"
                                    onChange={onChange}
                                    value={value}
                                />
                            )}
                        />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        name="name"
                        label="Укажите кол-во человек"
                        rules={[{required: true, message: 'Количество человек!!!'}]}
                    >
                        <Controller
                            name="col_vo"
                            control={methods.control}
                            render={({field: {value, onChange}}) => (
                                <InputNumber
                                    min={1}
                                    max={10}
                                    placeholder="Количество человек"
                                    onChange={onChange}
                                    value={value}
                                />
                            )}
                        />
                    </Form.Item>
                </Col>

                <Form.Item
                    name="name"
                    label="Укажите даты бронирования"
                    rules={[{required: true, message: 'Пожалуйста введите корректную дату!'}]}
                >
                    <Controller
                        name="date"
                        control={methods.control}
                        render={({field: {value, onChange}}) => (
                            <Space direction="vertical" size={12}>
                                <RangePicker
                                    showTime={{format: 'HH:mm'}}
                                    format="YYYY-MM-DD HH:mm"
                                    onChange={onChange}
                                />
                            </Space>
                        )}
                    />
                </Form.Item>
            </Row>

            <Button htmlType={"submit"}>Забронировать</Button>
        </Form>

    );
};

export default FormBooking;