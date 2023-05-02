import React from 'react';
import {Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space} from 'antd';
import {DrawerProps} from "components/drawer/type";

const { Option } = Select;

const DrawerBooking = (props: DrawerProps) => {

    const onClose = () => {
        props.setOpen(false)
    }

    const onSave = ()=>{
        props.setOpen(false);
    }
    return (
        <>
            <Drawer
                title="Оформление бронирования"
                width={720}
                onClose={onClose}
                open={props.open}
                bodyStyle={{ paddingBottom: 80 }}
                extra={
                    <Space>
                        <Button onClick={onClose}>Отменить</Button>
                        <Button onClick={onSave} type="primary">
                            Забронировать
                        </Button>
                    </Space>
                }
            >
                {props.children}
            </Drawer>
        </>
    );
};

export default DrawerBooking;