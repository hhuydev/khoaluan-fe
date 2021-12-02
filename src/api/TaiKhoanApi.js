// import axiosClient from './axiosClient';
import axios from 'axios';   
import {BASE_URL_API} from "./../constants/ApiConstant";
const DangNhapApi =   (params) => {
  console.log(params);
  return axios({
      method: 'POST',
      url:   BASE_URL_API+"api/solienlacdientu/v1/taikhoan/dangnhap",
      data: {
        tenDangNhap: params.tenDangNhap,
        matKhau: params.matKhau,
      },
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
};

export const CheckAuthApi = (params) => { 
  return axios({
      method: 'POST',
      url:   BASE_URL_API+"api/solienlacdientu/v1/taikhoan/checkauth",
      data: {
        token: params.token,
        id: params.id,
      },
    })
      
};
export {
  DangNhapApi,
}