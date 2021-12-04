import axios from 'axios';
import { BASE_URL_API } from "./../constants/ApiConstant";
import axiosClient from './axiosClient';

const XemThongTinApi =async () => {
  return (await axiosClient())({
    method: 'GET',
    url: BASE_URL_API + "api/solienlacdientu/v1/sinhvien/thongtin/" + localStorage.getItem("id"),

     
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

const chinhSuaThongTinApi =async (data) => {
  return (await axiosClient())({
    method: 'PUT',
    url: `${BASE_URL_API}api/solienlacdientu/v1/sinhvien/thongtin/${localStorage.getItem("id")}`,
    data: data,
    
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

const getThongBaoSinhVienApi =async (page)=>{
  return (await axiosClient())({
    method: 'GET',
    url: `${BASE_URL_API}api/solienlacdientu/v1/sinhvien/${localStorage.getItem("id")}/thongbaos`,
    params:{page:page,size:5}
  })
    .then((response) => { 
      return response;
    })
    .catch((error) => {
      throw error;
    });
}

export {
  XemThongTinApi,
  chinhSuaThongTinApi,
  getThongBaoSinhVienApi
}