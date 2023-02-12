import { invokeApi } from "../utils/invokeApi";

export const get_chat_message_list = async (id) => {
    const requestObj = {
        path: `api/chat/list_message/${id}`,
        method: 'GET',
        headers: {
            'x-sh-auth': localStorage.getItem('token')
        },
        // postData:data
    };
    return invokeApi(requestObj);
};

export const send_message = async (data) => {
    const requestObj = {
        path: `api/chat/send_message`,
        method: 'POST',
        headers: {
            'x-sh-auth': localStorage.getItem('token')
        },
        postData: data
    };
    return invokeApi(requestObj);
};


export const create_chat = async (data) => {
    const requestObj = {
        path: `api/chat`,
        method: 'POST',
        headers: {
            'x-sh-auth': localStorage.getItem('token')
        },
        postData: data
    };
    return invokeApi(requestObj);
};