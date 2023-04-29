import React from 'react';
import {message} from "antd";
import {MessageInstance, NoticeType} from "antd/es/message/interface";


type UseMessageReturnType = {
    showMessage: (text: string, type: NoticeType)  => void;
    MessageContainer: MessageInstance;
    contextHolder: any;
};
const useNotification = (): UseMessageReturnType => {
    const [MessageContainer, contextHolder] = message.useMessage();

    function showMessage(text: string, type: NoticeType) {
        MessageContainer.open({
            type: type,
            content: text,
        });
    }

    return {showMessage, MessageContainer, contextHolder}

};

export default useNotification;