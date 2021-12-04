import axios from 'axios';
import { BASE_URL_API } from "./../constants/ApiConstant";

const XemThongTinApi = () => {
  return axios({
    method: 'GET',
    url: BASE_URL_API + "api/solienlacdientu/v1/sinhvien/thongtin/" + localStorage.getItem("id"),

    headers: {
      Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
    },
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

const chinhSuaThongTinApi = (data) => {
  return axios({
    method: 'PUT',
    url: `${BASE_URL_API}api/solienlacdientu/v1/sinhvien/thongtin/${localStorage.getItem("id")}`,
    data: data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
    },
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export {
  XemThongTinApi,
  chinhSuaThongTinApi
}