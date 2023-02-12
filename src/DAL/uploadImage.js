import { invokeApi } from "../utils/invokeApi";
export const UploadCommentImageOnS3 = async (data) => {
    const requestObj = {
      path: `api/app_api/uplaod_image_s3_with_dir`,
      method: "POST",
      headers: {
        "x-sh-auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbl90b2tlbiI6ImU5NDYwMTgwLWE5MTUtMTFlZC05ZWU2LWRmZjI4MDZlNzg2YSIsImFjY2VzcyI6ImF1dGgiLCJpYXQiOjE2NzYwMTQ3MDl9.untfey_8aOUQcDgDQsArfLG9mqkCJhULxuFM6QJCS2w",
      },
      postData: data,
    };
    console.log(requestObj)
    return invokeApi(requestObj);
  };