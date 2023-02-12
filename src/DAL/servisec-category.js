import { invokeApi } from "../utils/invokeApi";
export const GetCategory = async () => {
    const requestObj = {
        path: `api/service_category/get_categories`,
        method: 'GET',
        headers: {
            // 'x-sh-auth': localStorage.getItem('token')
        },
    };
    return invokeApi(requestObj);
};
export const getConsultantListApi = async (data) => {
    const requestObj = {
        path: `api/customer/filter_consultant`,
        method: 'POST',
        headers: {
            'x-sh-auth': localStorage.getItem('token')
        },
        postData:data
    };
    return invokeApi(requestObj);
};