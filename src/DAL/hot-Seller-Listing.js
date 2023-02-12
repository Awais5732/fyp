import { invokeApi } from "../utils/invokeApi";
export const GetHotSeller = async () => {
    const requestObj = {
        path: ``,
        method: 'GET',
        headers: {
            // 'x-sh-auth': localStorage.getItem('token')
        },
    };
    return invokeApi(requestObj);
};