import React from 'react'
import { formatDateTime } from '../../../utils/format/formatValues';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { atcChapNhanDonXinNghiHoc } from '../../../redux/actions/GiangVien';
import { useDispatch } from 'react-redux';
export default function DonXinNghiHocItem(props) {
    const dispatch = useDispatch();
    const duyetDon = ()=>{ 
        confirmAlert({
            title: "Lưu ý",
            message:
              `Bạn có muốn chấp nhận! `,
            buttons: [
              {
                label: "Có",
                onClick: () => { 
                  dispatch(atcChapNhanDonXinNghiHoc(localStorage.getItem("id"),props.item.idDonXinNghiHoc,props.id))
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
    }
    const {item }= props;
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
            href="#"
            className="item-author text-color"
            data-abc="true"
          >
            {`Sinh viên ${item.idSinhVien} ${
              item.tenSinhVien
            } xin nghỉ ngày ${formatDateTime(
              item.ngayNghi
            )}`}
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
        <div>
          <div className="item-action dropdown">
            <a
              href="#"
              data-toggle="dropdown"
              className="text-muted"
              data-abc="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-more-vertical"
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
              </svg>
            </a>

            <div
              className="dropdown-menu dropdown-menu-right bg-black"
              role="menu"
            >
              {item.trangThai ? (
                <a
                  className="dropdown-item"
                  data-abc="true"
                >
                  Đã chấp nhận
                </a>
              ) : (
                <a
                  className="dropdown-item"
                  data-abc="true"
                  onClick={duyetDon}
                >
                  Chấp nhận
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
 
}
