import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { atcGetCanhBaoSinhViensLopHoc } from "../../../redux/actions/GiangVien";
import { formatTinhTrangSinhVienText } from "../../../utils/format/formatTinhTrangSinhVien";
import CanhBaoSinhVien from "../CanhBaoSinhVien";

export default function SinhVienLopHocItem(props) {  
    const dispatch = useDispatch();
  const openModalCanhBao = () => { 
    dispatch(atcGetCanhBaoSinhViensLopHoc(props.item.id));
  };
  return (
    <React.Fragment>
      <tr>
        <td>{props.stt}</td>
        <td>{props.item.id}</td>
        <td>{props.item.hoTen}</td>
        <td>{props.item.gioiTinh == true ? "Nam" : "Nữ"}</td>
        <td>{props.item.email}</td>
        <td>{formatTinhTrangSinhVienText(props.item.trangThaiSinhVien)}</td>
        <td>"hoc hanh binh thuong"</td>
        <td>
          <button
            className="btn btn-link"
            data-toggle="modal"
            data-target="#modelId"
            onClick={openModalCanhBao}
            style={{ color: "red" }}
          >
            Cảnh báo
          </button>
        </td>
      </tr>
     <CanhBaoSinhVien data = {props.item}/>
    </React.Fragment>
  );
}
