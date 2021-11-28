import axiosClient from './axiosClient';
import axios from 'axios'; 

const TaiKhoanApi = async (params) => {
    return axios({
      method: 'POST',
      url: BASE_URL_API + "",
      data: {
        username: params.username,
        password: params.password,
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
    signInApi,
}