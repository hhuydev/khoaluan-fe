import axios from 'axios';
import { BASE_URL_API } from "./../constants/ApiConstant";
import axiosClient from './axiosClient';

const getLopHocApi =async (page) => {
    // http://localhost:8080/api/solienlacdientu/v1/giangvien/1/danhsachlophoc
  return (await axiosClient(page))({
    method: 'GET',
    url: BASE_URL_API + `api/solienlacdientu/v1/giangvien/${localStorage.getItem("id")}/danhsachlophoc`,
    params:{page:page,size:10}
     
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export {
    getLopHocApi
  }