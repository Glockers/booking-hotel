import React, {useEffect, useState} from 'react';
import {Button, Form, Input, InputNumber, message, Popconfirm, Space, Table, TableProps} from 'antd';
import {EditableCellProps, IEditableColumnProps, ITableProps, IRoom, IServices} from "../types";

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


const TableRoom = <T extends {id: number}>(props: ITableProps<T>) => {
    const [form] = Form.useForm();
    const [element, setElement] = useState<T >({} as T);
    const [editingKey, setEditingKey] = useState<any>('');
    const isEditing = (record: T) => record.id === editingKey;
    const { showMessage = () => {} } = props;

    const handleDelete = (key: Number) => {
        const newData: any = props.dataSource.filter((item: any) => item.id !== key ? item : setElement(item));
        props.setDataSource(newData);
        console.log("Запрос на удаление комнаты...")
        showMessage("Информация о комнате была удалена.", "success")
        console.log(key)
    };

    const cancel = () => {
        setEditingKey('Произошла ошибка');
        showMessage("Отмена редактирование", "error")
        setEditingKey('');

    };
    useEffect(()=>console.log(props), [props])

    const edit = (record:T ) => {
        form.setFieldsValue({
            // name: '', age: '', address: '',
            ...record
        });
        setEditingKey(record.id);
    };

    const save = async (key: Number) => {
        try {
            const row = (await form.validateFields()) as T;
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
                showMessage("Информация о комнате изменена", "success")
                setEditingKey('');
            } else {
                newData.push(row);
                props.setDataSource(newData);
                showMessage("Информация о комнате изменена", "success")
                setEditingKey('');
            }
            console.log("Запрос на изменение информации о комнате...")
        } catch (errInfo) {
            showMessage("Произошла ошибка!", "error")
            console.log('Validate Failed:', errInfo);
        }
    };

    const defaultColumns: any = [
        ...props.columns,
        {
            title: 'Операции',
            dataIndex: 'operation',
            render: (_: any, record: T) => {
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
            onCell: (record: T) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    const onChange: TableProps<T>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };


    return (
        <>

            <Form form={form} component={false}>

                <Table
                    bordered
                    dataSource={props.dataSource}
                    columns={mergedColumns}
                    components={components}
                    // loading={loading}
                    onChange={onChange}
                    rowKey={record => record.id.toString()}
                />
            </Form>
        </>
    );
};

export default TableRoom;