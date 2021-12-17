import React from "react";
import { formatDateTime } from "../../../utils/format/formatValues";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { atcChapNhanDonXinNghiHoc } from "../../../redux/actions/GiangVien";
import { useDispatch } from "react-redux";
export default function DonXinNghiHocItem(props) {
  const dispatch = useDispatch();
  const duyetDon = () => {
    confirmAlert({
      title: "Lưu ý",
      message: `Bạn có muốn chấp nhận! `,
      buttons: [
        {
          label: "Có",
          onClick: () => {
            dispatch(
              atcChapNhanDonXinNghiHoc(
                localStorage.getItem("id"),
                props.item.idDonXinNghiHoc,
                props.id
              )
            );
          },
          className: "btn btn-primary",
        },
        {
          label: "Không",
          onClick: () => {
            return;
          },
          className: "btn btn-primary btn-sm",
        },
      ],
    });
  };
  const { item } = props;
  const onClickDonNghiHoc = () => {
    confirmAlert({
      title: "Đơn xin nghỉ học",
      message: `Sinh viên có mã số sinh viên: ${item.maSV}, Họ tên:${
        item.tenSinhVien
      }, xin nghỉ ngày ${formatDateTime(item.ngayNghi)}. Nội dung: ${
        item.noiDung
      }. Hiên tại ${
        item.trangThai
          ? "Đã chấp nhận"
          : "chưa chấp nhận bạn hãy xác nhận cho sinh viên:"
      } `,
      buttons: item.trangThai
        ? [
            {
              label: "Đóng",
              onClick: () => {
                return;
              },
              className: "btn btn-primary btn-sm",
            },
          ]
        : [
            {
              label: "Có",
              onClick: () => {
                dispatch(
                  atcChapNhanDonXinNghiHoc(
                    localStorage.getItem("id"),
                    props.item.idDonXinNghiHoc,
                    props.id
                  )
                );
              },
              className: "btn btn-primary",
            },
            {
              label: "Để sau",
              onClick: () => {
                return;
              },
              className: "btn btn-primary btn-sm",
            },
          ],
    });
  };
  return (
    <div
      className="list-item"
      data-id={13}
      data-item-sortable-id={0}
      draggable="true"
      role="option"
      aria-grabbed="false"
      //   style={{backgroundColor:`${item.hienThi?'':'#e3f2fd'}`}}
    >
      <div className="flex">
        <a
          className="item-author text-color"
          data-abc="true"
          onClick={onClickDonNghiHoc}
        >
          {`Sinh viên có mã số sinh viên: ${item.maSV}, Họ tên:${
            item.tenSinhVien
          }, xin nghỉ ngày ${formatDateTime(item.ngayNghi)}. Hiên tại ${
            item.trangThai ? "Đã chấp nhận" : "chưa chấp nhận"
          }`}
        </a>
        <div className="item-except text-muted text-sm h-1x">
          {/* {item.noiDung} */}
        </div>
      </div>
      <div className="no-wrap">
        <div className="item-date text-muted text-sm d-none d-md-block">
          {/* {formatDateTime(item.ngayTao)} */}
        </div>
      </div>
    </div>
  );
}
