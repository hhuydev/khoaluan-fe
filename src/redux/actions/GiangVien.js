import { addThongBaoLopHocApi, editDisplayThongBaoLopHocApi, editThongBaoLopHocApi, getListCanhBaoSinhVienApi, getLopHocApi, getSinhVienLopHocApi, getThongBaotSinhVienLopHocApi, guiCanhBaoSinhVienApi } from "../../api/GiangVienApi";
import { ADDTHONGBAOSINHVIENS_LOPHOC_FAILED, ADDTHONGBAOSINHVIENS_LOPHOC_SUCCESS, CANHBAO_SINHVIEN_FAILED, CANHBAO_SINHVIEN_SUCCESS, EDITTHONGBAOSINHVIENS_LOPHOC_FAILED, EDITTHONGBAOSINHVIENS_LOPHOC_SUCCESS, GETDANHSACH_LOPHOC_FAILED, GETDANHSACH_LOPHOC_SUCCESS, GETSINHVIENS_LOPHOC_FAILED, GETSINHVIENS_LOPHOC_SUCCESS, GETTHONGBAOSINHVIENS_LOPHOC_FAILED, GETTHONGBAOSINHVIENS_LOPHOC_SUCCESS, GET_CANHBAO_SINHVIEN_FAILED, GET_CANHBAO_SINHVIEN_SUCCESS } from "../constants/GiangVienConstants";
import { displayLoading, hideLoading } from "./Loading";

export const atcGetDanhSachLopHoc = (page) => {
    return (dispatch) => {
      dispatch(displayLoading());
      getLopHocApi(page)
        .then((res) => { 
          dispatch(getDanhSachLopHocSuccess(res))
          dispatch(hideLoading());
        })
        .catch((err) => {
          dispatch(getDanhSachLopHocFailed(err))
          dispatch(hideLoading());
        });
    };
  };
  
  
  const getDanhSachLopHocSuccess = (res) => {
    return {
      type: GETDANHSACH_LOPHOC_SUCCESS,
      payload: res.data
    }
  }
  
  
  const getDanhSachLopHocFailed = (err) => {
    return {
      type: GETDANHSACH_LOPHOC_FAILED,
      payload: err
    }
  }


  
export const atcGetSinhViensLopHoc = (idLop,page) => {
  return (dispatch) => {
    dispatch(displayLoading());
    getSinhVienLopHocApi(idLop,page)
      .then((res) => { 
        dispatch(getSinhViensLopHocSuccess(res))
        dispatch(hideLoading());
      })
      .catch((err) => {
        dispatch(getSinhViensLopHocFailed(err))
        dispatch(hideLoading());
      });
  };
};


const getSinhViensLopHocSuccess = (res) => {
  return {
    type: GETSINHVIENS_LOPHOC_SUCCESS,
    payload: res.data
  }
}


const getSinhViensLopHocFailed = (err) => {
  return {
    type: GETSINHVIENS_LOPHOC_FAILED,
    payload: err
  }
}


  
export const atcGetThongBaoSinhViensLopHoc = (idLop,page) => {
  return (dispatch) => {
    dispatch(displayLoading());
    getThongBaotSinhVienLopHocApi(idLop,page)
      .then((res) => { 
        dispatch(getThongBaoSinhViensLopHocSuccess(res))
        dispatch(hideLoading());
      })
      .catch((err) => {
        dispatch(getThongBaoSinhViensLopHocFailed(err))
        dispatch(hideLoading());
      });
  };
};


const getThongBaoSinhViensLopHocSuccess = (res) => {
  return {
    type: GETTHONGBAOSINHVIENS_LOPHOC_SUCCESS,
    payload: res.data
  }
}


const getThongBaoSinhViensLopHocFailed = (err) => {
  return {
    type: GETTHONGBAOSINHVIENS_LOPHOC_FAILED,
    payload: err
  }
}



  
export const atcAddThongBaoSinhViensLopHoc = (idLop,data) => {
  return (dispatch) => {
    dispatch(displayLoading());
    addThongBaoLopHocApi(idLop,data)
      .then((res) => { 
        dispatch(addThongBaoSinhViensLopHocSuccess(res));
        dispatch(atcGetThongBaoSinhViensLopHoc(idLop,0));
        dispatch(hideLoading());
      })
      .catch((err) => {
        dispatch(addThongBaoSinhViensLopHocFailed(err))
        dispatch(hideLoading());
      });
  };
};


const addThongBaoSinhViensLopHocSuccess = (res) => {
  return {
    type: ADDTHONGBAOSINHVIENS_LOPHOC_SUCCESS,
    payload: res.data
  }
}


const addThongBaoSinhViensLopHocFailed = (err) => {
  return {
    type: ADDTHONGBAOSINHVIENS_LOPHOC_FAILED,
    payload: err
  }
}



  
export const atcEditThongBaoSinhViensLopHoc = (idThongBao,idLop,data) => {
  return (dispatch) => {
    dispatch(displayLoading());
    editThongBaoLopHocApi(idThongBao,data)
      .then((res) => { 
        dispatch(editThongBaoSinhViensLopHocSuccess(res));
        dispatch(atcGetThongBaoSinhViensLopHoc(idLop,0));
        dispatch(hideLoading());
      })
      .catch((err) => {
        dispatch(ediThongBaoSinhViensLopHocFailed(err))
        dispatch(hideLoading());
      });
  };
};


const editThongBaoSinhViensLopHocSuccess = (res) => {
  return {
    type: EDITTHONGBAOSINHVIENS_LOPHOC_SUCCESS,
    payload: res.data
  }
}


const ediThongBaoSinhViensLopHocFailed = (err) => {
  return {
    type: EDITTHONGBAOSINHVIENS_LOPHOC_FAILED,
    payload: err
  }
}



  
export const atcEditDisplayThongBaoSinhViensLopHoc = (idThongBao,idLop) => {
  return (dispatch) => {
    dispatch(displayLoading());
    editDisplayThongBaoLopHocApi(idThongBao)
      .then((res) => { 
        dispatch(editDisplayThongBaoSinhViensLopHocSuccess(res));
        dispatch(atcGetThongBaoSinhViensLopHoc(idLop,0));
        dispatch(hideLoading());
      })
      .catch((err) => {
        dispatch(editDisplayThongBaoSinhViensLopHocFailed(err))
        dispatch(hideLoading());
      });
  };
};


const editDisplayThongBaoSinhViensLopHocSuccess = (res) => {
  return {
    type: EDITTHONGBAOSINHVIENS_LOPHOC_SUCCESS,
    payload: res.data
  }
}


const editDisplayThongBaoSinhViensLopHocFailed = (err) => {
  return {
    type: EDITTHONGBAOSINHVIENS_LOPHOC_FAILED,
    payload: err
  }
}



  
export const atcGetCanhBaoSinhViensLopHoc = (idSinhVien) => {
  return (dispatch) => {
    dispatch(displayLoading());
    getListCanhBaoSinhVienApi(idSinhVien)
      .then((res) => { 
        dispatch(getCanhBaoSinhVienOfGiangVienSuccess(res)); 
        dispatch(hideLoading());
      })
      .catch((err) => {
        dispatch(getCanhBaoOfGiangVienFailed(err))
        dispatch(hideLoading());
      });
  };
};


const getCanhBaoSinhVienOfGiangVienSuccess = (res) => {
  return {
    type: GET_CANHBAO_SINHVIEN_SUCCESS,
    payload: res.data
  }
}


const getCanhBaoOfGiangVienFailed = (err) => {
  return {
    type: GET_CANHBAO_SINHVIEN_FAILED,
    payload: err
  }
}



export const atcPostCanhBaoSinhViensLopHoc = (data) => {
  return (dispatch) => {
    dispatch(displayLoading());
    guiCanhBaoSinhVienApi(data)
      .then((res) => { 
        dispatch(canhBaoSinhVienSuccess(res));
         dispatch(atcGetCanhBaoSinhViensLopHoc(data.idSinhVien))
        dispatch(hideLoading());
      })
      .catch((err) => {
        dispatch(canhBaoSinhVienFailed(err))
        dispatch(hideLoading());
      });
  };
};



const canhBaoSinhVienSuccess = (res) => {
  return {
    type: CANHBAO_SINHVIEN_SUCCESS,
    payload: res.data
  }
}


const canhBaoSinhVienFailed = (err) => {
  return {
    type: CANHBAO_SINHVIEN_FAILED,
    payload: err
  }
}