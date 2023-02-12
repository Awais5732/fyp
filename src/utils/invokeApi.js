import axios from "axios";
import { API_BASE_URL } from "../config/config";


export const base_url = 'http://35.77.123.106:3312/'
axios.defaults.headers.post["Content-Type"] = "application/json";
export async function invokeApi({
  path,
  method = "GET",
  headers = {},
  queryParams = {},
  postData = {},
}) {
  const reqObj = {
    method,
    url: base_url + path,
    headers,
  };
  reqObj.params = queryParams;
  if (method === "POST") {
    reqObj.data = postData;
  }
  if (method === "PUT") {
    reqObj.data = postData;
  }
  if (method === "DELETE") {
    reqObj.data = postData;
  }

  let results;

  console.log("<===REQUEST-OBJECT===>", reqObj);

  try {
    results = await axios(reqObj);
    console.log("<===Api-Success-Result===>", results);

    return results.data;
  } catch (error) {
    console.log("<===Api-Error===>", error.response.data);
    if (error.response.status === 401) {
    }
    return {
      code: error.response.status,
      message: error.response.data.message ? error.response.data.message : "",
    };
  }
}