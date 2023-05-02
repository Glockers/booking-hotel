import React, {useState} from 'react';
import {PlusOutlined} from '@ant-design/icons';
import {Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space} from 'antd';

const {Option} = Select;
const FormBooking = () => {
    return (
        <>
            <Form layout="vertical" hideRequiredMark>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="name"
                            label="Name"
                            rules={[{required: true, message: 'Please enter user name'}]}
                        >
                            <Input placeholder="Please enter user name"/>
                        </Form.Item>
                    </Col>
                </Row>

            </Form>
        </>
    );
};

export default FormBooking;