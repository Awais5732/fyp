import { invokeApi } from "../utils/invokeApi";
export const signup = async (data) => {
    const requestObj = {
        path: `api/customer/signup_customer`,
        method: 'POST',
        headers: {
            // 'x-sh-auth': localStorage.getItem('token')
        },
        postData:data
    };
    return invokeApi(requestObj);
};
export const login = async (data) => {
    const requestObj = {
        path: `api/app_api/login`,
        method: 'POST',
        headers: {
            // 'x-sh-auth': localStorage.getItem('token')
        },
        postData:data
    };
    return invokeApi(requestObj);
};

