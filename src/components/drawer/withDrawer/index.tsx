import {Button, Drawer, Form} from "antd";
import React from "react";
import {useForm} from "react-hook-form";
import {FormProvider} from "antd/es/form/context";
import FormBooking from "components/Form/form-booking";


export const FormDrawer = ({children, open, setOpen}: any) => {
    // const [visible, setVisible] = useState(open);
    const methods = useForm();

    const onClose = () => {
        setOpen(false)
    };

    return (
        <FormProvider>
            <Drawer
                title="Форма"
                width={720}
                open={open}
                onClose={onClose}
                footer={
                    <div
                        style={{
                            textAlign: 'right',
                        }}
                    >
                        <Button onClick={onClose} style={{marginRight: 8}}>
                            Отмена
                        </Button>
                        {/*<Button  type="primary">*/}
                        {/*    Сохранить*/}
                        {/*</Button>*/}
                    </div>
                }
            >

                <FormProvider {...methods}>
                    <Form layout="vertical" onSubmitCapture={methods.handleSubmit((data) => console.log(data, "test"))}>
                        <FormBooking/>
                        <input type={"submit"}/>
                    </Form>
                </FormProvider>


            </Drawer>
        </FormProvider>
    );
};

