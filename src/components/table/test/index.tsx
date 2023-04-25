import React, {useCallback, useEffect, useState} from 'react';
import {Button, Form, Input, InputNumber, Popconfirm, Space, Table, message, TableProps} from 'antd';
import {EditableCellProps, TypeItem, KeyReact} from "./types";
import {CSVLink} from "react-csv";

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

const originData: TypeItem[] = [
    {
        key: '0',
        name: 'Test',
        age: 10,
        address: 'London, Park Lane no. 0',
    },
    {
        key: '1',
        name: 'test',
        age: 32,
        address: 'London, Park Lane no. 1',
    },
]
const TestTable: React.FC = () => {
    const [form] = Form.useForm();
    const [dataSource, setDataSource] = useState<TypeItem[]>([]);
    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState(2);
    const [element, setElement] = useState<TypeItem | null>(null);
    const [messageInfo, setMessageInfo] = useState<string>("")
    const [messageApi, contextHolder] = message.useMessage();
    const [editingKey, setEditingKey] = useState<any>('');

    const isEditing = (record: TypeItem) => record.key === editingKey;

    useEffect(() => {
        setLoading(true)
        loadData();
        setLoading(false)
    }, [])

    const loadData = async () => {
        const response = originData;
        setDataSource(response);
    }

    useEffect(() => {
        if (element != null) {
            try {
                setLoading(true);
                console.log(element);
                setElement(null);
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

    const handleDelete = (key: React.Key) => {
        const newData = dataSource.filter((item) => item.key !== key ? item : setElement(item));
        setDataSource(newData);
        setMessageInfo("Удаление прошло успешно")
    };

    const cancel = () => {
        setEditingKey('Произошла ошибка');
        setEditingKey('');
    };

    const edit = (record: Partial<TypeItem> & { key: React.Key }) => {
        form.setFieldsValue({name: '', age: '', address: '', ...record});
        setEditingKey(record.key);
        setMessageInfo("Данные успешно изменены")
    };

    const save = async (key: React.Key) => {
        try {
            const row = (await form.validateFields()) as TypeItem;

            const newData = [...dataSource];
            const index = newData.findIndex((item) => key === item.key);
            if (index > -1) {
                const item: any = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row
                });
                setElement(row);
                setDataSource(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setDataSource(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const defaultColumns: any[] = [
        {
            title: 'Логин',
            dataIndex: 'name',
            editable: true,
            sorter: {
                compare: (a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name)
            }
        },
        {
            title: 'Имя',
            dataIndex: 'name',
            editable: true,
            sorter: {
                compare: (a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name)
            }
        },
        // {
        //     title: 'уьфшд',
        //     dataIndex: 'age',
        //     editable: true,
        //     sorter: {
        //         compare: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
        //         multiple: 2,
        //     },
        // },
        {
            title: 'email',
            dataIndex: 'address',
            editable: true,
            sorter: {
                compare: (a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name)
            }
        },
        {
            title: 'Роль',
            dataIndex: 'address',
            editable: true,
            sorter: {
                compare: (a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name)
            }
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_: any, record: any) => {
                const editable = isEditing(record);
                return (
                    <>

                        <Space>
                            {editable ? (
                                <>
                                    <Popconfirm title="Изменить данные?" onConfirm={() => save(record.key)}>
                                        <Button>Сохранить</Button>
                                    </Popconfirm>
                                    <Button onClick={cancel}>Отмена</Button>
                                </>
                            ) : (
                                <>
                                    <Popconfirm title="Удалить запись?"
                                                onConfirm={() => handleDelete(record.key)}>
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


    const handleAdd =  useCallback(()=>{
        const newData: TypeItem = {
            key: count,
            name: `Edward King ${count}`,
            age: 32,
            address: `London, Park Lane no. ${count}`,
        };
        setDataSource([...dataSource, newData]);
        setCount(count + 1);
        setElement(newData);
        setMessageInfo("Запись добавлена")
    }, [dataSource])

    const components = {
        body: {
            cell: EditableCell,
        },
    }

    const mergedColumns = defaultColumns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: TypeItem) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    const onChange: TableProps<TypeItem>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <>
            {contextHolder}
            <Space style={{marginBottom: 16}}>
                <Button onClick={handleAdd} type="primary">
                    Добавить
                </Button>
                <Button type="primary">
                    <CSVLink data={dataSource}>Экспортировать</CSVLink>
                </Button>

            </Space>

            <Form form={form} component={false}>

                <Table
                    bordered
                    dataSource={dataSource}
                    columns={mergedColumns}
                    components={components}
                    loading={loading}
                    onChange={onChange}
                />
            </Form>
        </>
    );
};

export default TestTable;