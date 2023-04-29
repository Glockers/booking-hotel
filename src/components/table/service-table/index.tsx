import React, {useEffect, useState} from 'react';
import {Button, Form, Input, InputNumber, message, Popconfirm, Space, Table, TableProps} from 'antd';
import {EditableCellProps, IEditableColumnProps, ITableProps, IServices} from "../types";

const EditableCell: React.FC<EditableCellProps> = ({
                                                       editing,
                                                       dataIndex,
                                                       title,
                                                       inputType,
                                                       record,
                                                       index,
                                                       children,
                                                       ...restProps
                                                   }) => {
    const inputNode = inputType === 'number' ? <InputNumber/> : <Input/>;

    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{margin: 0}}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};







const TableService: React.FC<ITableProps<IServices>> = (props) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState<Number>();
    const [element, setElement] = useState<IServices | null>(null);
    const [messageInfo, setMessageInfo] = useState<string>("")
    const [messageApi, contextHolder] = message.useMessage();
    const [editingKey, setEditingKey] = useState<any>('');
    const isEditing = (record: IServices) => record.id === editingKey;


    useEffect(() => {
        if (element != null) {
            try {
                setLoading(true);
                setElement(null);
                setCount(props.dataSource.length + 1)

                setLoading(false);
                success();
            } catch (e) {
                error();
            }
            setMessageInfo("")
        }

    }, [element]);

    const success = () => {
        messageApi.open({
            type: 'success',
            content: messageInfo,
        });
    };

    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'Произошла ошибка',
        });
    };

    const handleDelete = (key: Number) => {
        const newData: any = props.dataSource.filter((item: any) => item.id !== key ? item : setElement(item));
        props.setDataSource(newData);
        console.log(key)
        setMessageInfo("Удаление прошло успешно")
    };

    const cancel = () => {
        setEditingKey('Произошла ошибка');
        setEditingKey('');
    };

    const edit = (record:IServices ) => {
        form.setFieldsValue({
            // name: '', age: '', address: '',
            ...record
        });
        setEditingKey(record.id);
        setMessageInfo("Данные успешно изменены")
    };

    const save = async (key: Number) => {
        try {
            const row = (await form.validateFields()) as IServices;
            const newData = [...props.dataSource];
            const index = newData.findIndex((item) => key === item.id);
            if (index > -1) {
                const item: any = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row
                });
                setElement(row);
                props.setDataSource(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                props.setDataSource(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const defaultColumns: any = [
        ...props.columns,
        {
            title: 'Операции',
            dataIndex: 'operation',
            render: (_: any, record: IServices) => {
                const editable = isEditing(record);
                return (
                    <>

                        <Space>
                            {editable ? (
                                <>
                                    <Popconfirm title="Изменить данные?" onConfirm={() => save(record.id)}>
                                        <Button>Сохранить</Button>
                                    </Popconfirm>
                                    <Button onClick={cancel}>Отмена</Button>
                                </>
                            ) : (
                                <>
                                    <Popconfirm title="Удалить запись?"
                                                onConfirm={() => handleDelete(record.id)}>
                                        <Button>Удалить</Button>
                                    </Popconfirm>

                                    <Button disabled={editingKey !== ''} onClick={() => edit(record)}>Изменить</Button>

                                </>
                            )
                            }
                        </Space>
                    </>
                )
            },
        },
    ];


    const components = {
        body: {
            cell: EditableCell,
        },
    }

    const mergedColumns = defaultColumns.map((col: any) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: IServices) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    const onChange: TableProps<IServices>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };


    return (
        <>

            {contextHolder}

            <Form form={form} component={false}>

                <Table
                    bordered
                    dataSource={props.dataSource}
                    columns={mergedColumns}
                    components={components}
                    loading={loading}
                    onChange={onChange}
                    rowKey={record => record.id.toString()}
                />
            </Form>
        </>
    );
};

export default TableService;