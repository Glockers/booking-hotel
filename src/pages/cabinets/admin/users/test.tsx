// console.log('wr')
import React, {useEffect, useState} from 'react';
// import {Button, Form, Input, InputNumber, Popconfirm, Space, Table, TableProps} from 'antd';
// import {EditableCellProps, IEditableColumnProps, TypeItem} from "../types";
// import {CSVLink} from "react-csv";
// import {ROLES} from "../../../common/role";
// import {faker} from "@faker-js/faker";
// import {IUser} from "../../../common/types/IStore";
//
// const EditableCell: React.FC<EditableCellProps> = ({
//                                                        editing,
//                                                        dataIndex,
//                                                        title,
//                                                        inputType,
//                                                        record,
//                                                        index,
//                                                        children,
//                                                        ...restProps
//                                                    }) => {
//     const inputNode = inputType === 'number' ? <InputNumber/> : <Input/>;
//
//     return (
//         <td {...restProps}>
//         {editing ? (
//                     <Form.Item
//                         name={dataIndex}
//                 style={{margin: 0}}
//     rules={[
//             {
//                 required: true,
//                 message: `Please Input ${title}!`,
//             },
// ]}
// >
//     {inputNode}
//     </Form.Item>
// ) : (
//         children
//     )}
//     </td>
// );
// };
//
//
//
// const originData: TypeItem[] = [
//     {
//         key: 1,
//         name: 'Test',
//         email: faker.internet.email(),
//         login: "admin",
//         role: ROLES.ADMIN
//     },
//     {
//         key: 2,
//         name: 'test',
//         login: "tester",
//         email: faker.internet.email(),
//         role: ROLES.USER
//     },
// ]
//
//
//
// const UserTable: React.FC = () => {
//     const [form] = Form.useForm();
//     const [dataSource, setDataSource] = useState<TypeItem[]>([]);
//     const [loading, setLoading] = useState(false)
//     const [element, setElement] = useState<TypeItem | null>(null);
//     const [editingKey, setEditingKey] = useState<any>('');
//
//     const isEditing = (record: TypeItem) => record.key === editingKey;
//
//     useEffect(() => {
//         setLoading(true)
//         setDataSource(originData)
//
//         // Загрузка данных
//         setLoading(false)
//     }, [])
//
//
//     useEffect(() => {
//         if (element != null) {
//             try {
//                 setLoading(true);
//                 setElement(null);
//
//                 setLoading(false);
//             } catch (e) {
//                 console.error(e)
//             }
//         }
//
//     }, [element]);
//
//
//     const handleDelete = (key: Number) => {
//         const newData = dataSource.filter((item) => item.key !== key ? item : setElement(item));
//         setDataSource(newData);
//     };
//
//     const cancel = () => {
//         setEditingKey('Произошла ошибка');
//         setEditingKey('');
//     };
//
//     const edit = (record: Partial<TypeItem> & { key: Number }) => {
//         form.setFieldsValue({
//             // name: '', age: '', address: '',
//             ...record
//         });
//         setEditingKey(record.key);
//     };
//
//     const save = async (key: Number) => {
//         try {
//             const row = (await form.validateFields()) as TypeItem;
//
//             const newData = [...dataSource];
//             const index = newData.findIndex((item) => key === item.key);
//             if (index > -1) {
//                 const item: any = newData[index];
//                 newData.splice(index, 1, {
//                     ...item,
//                     ...row
//                 });
//                 setElement(row);
//                 setDataSource(newData);
//                 setEditingKey(null);
//             } else {
//                 newData.push(row);
//                 setDataSource(newData);
//                 setEditingKey(null);
//             }
//         } catch (errInfo) {
//             console.log('Validate Failed:', errInfo);
//         }
//     };
//
//     const defaultColumns: any = [
//         ...columns,
//         {
//             title: 'operation',
//             dataIndex: 'operation',
//             render: (_: any, record: any) => {
//                 const editable = isEditing(record);
//                 return (
//                     <>
//
//                         <Space>
//                             {editable ? (
//                                     <>
//                                         <Popconfirm title="Изменить данные?" onConfirm={() => save(record.key)}>
//                 <Button>Сохранить</Button>
//                 </Popconfirm>
//                 <Button onClick={cancel}>Отмена</Button>
//                     </>
//             ) : (
//                     <>
//                         <Popconfirm title="Удалить запись?"
//                 onConfirm={() => handleDelete(record.key)}>
//                 <Button>Удалить</Button>
//                 </Popconfirm>
//
//                 <Button disabled={editingKey !== ''} onClick={() => edit(record)}>Изменить</Button>
//
//                 </>
//             )
//             }
//                 </Space>
//                 </>
//             )
//             },
//         },
//     ];
//
//
//     const components = {
//         body: {
//             cell: EditableCell,
//         },
//     }
//
//     const mergedColumns = defaultColumns.map((col: any) => {
//         if (!col.editable) {
//             return col;
//         }
//         return {
//             ...col,
//             onCell: (record: TypeItem) => ({
//                 record,
//                 inputType: col.dataIndex === 'age' ? 'number' : 'text',
//                 dataIndex: col.dataIndex,
//                 title: col.title,
//                 editing: isEditing(record),
//             }),
//         };
//     });
//
//     const onChange: TableProps<TypeItem>['onChange'] = (pagination, filters, sorter, extra) => {
//         console.log('params', pagination, filters, sorter, extra);
//     };
//
//
//     const handleAdd = () => {
//         const newData: TypeItem = {
//             key: dataSource.length + 1,
//             name: `Edward King ${count}`,
//             email: "rwer@ga",
//             login: "test",
//             role: ROLES.ADMIN,
//         };
//         setDataSource([...dataSource, newData]);
//         setElement(newData);
//     }
//
//
//     return (
//         <>
//
//             <Space style={{marginBottom: 16}}>
//     <Button onClick={handleAdd} type="primary">
//         Добавить
//         </Button>
//         <Button type="primary">
//     <CSVLink data={dataSource}>Экспортировать</CSVLink>
//         </Button>
//
//         </Space>
//
//         <Form form={form} component={false}>
//
//         <Table
//             bordered
//     dataSource={dataSource}
//     columns={mergedColumns}
//     components={components}
//     loading={loading}
//     onChange={onChange}
//     />
//     </Form>
//     </>
// );
// };
//
// export default UserTable;