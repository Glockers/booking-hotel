import {IServices} from "../../../../common/dto";
import {IEditableColumnProps} from "../../../../common/types/table";

export const columns: IEditableColumnProps<IServices>[] = [
    {
        title: 'ID',
        dataIndex: "id",
        sorter: {
            compare: (a: IServices, b: IServices) => {
                if (a.name && b.name) {
                    return a.name.localeCompare(b.name);
                }
                return 0;
            }
        }
    },

    {
        title: 'Название услуги',
        dataIndex: "name",
        editable: true,
        sorter: {
            compare: (a: IServices, b: IServices) => {
                if (a.name && b.name) {
                    return a.name.localeCompare(b.name);
                }
                return 0;
            }
        }
    },
    {
        title: 'Стоимость услуги',
        dataIndex: 'price',
        editable: true,
        sorter: (a: IServices, b: IServices) => a.price - b.price,
    },
    {
        title: 'продолжительность',
        dataIndex: 'duration',
        editable: true,
        sorter: (a: IServices, b: IServices) => a.duration - b.duration,
    },
];