import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Pagination from "../../../../common/Pagination";
import LopHocPhanItem from "../../../../component/giangVien/LopHocPhanItem";
import { atcGetDanhSachLopHocPhan } from "../../../../redux/actions/GiangVien";
import "./style.css";
export default function LopHocPhan() {
  const { data } = useSelector(
    (state) => state.lopHocPhanReducer,
    shallowEqual
  );
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [totalPage, setTotalPage] = useState(10);
  const [index, setindex] = useState(0);
  const [dataItem, setDataItem] = useState();
  const handleClickLopHoc = () => {};

  const handelPageClick = (page) => {
    dispatch(atcGetDanhSachLopHocPhan(page.selected));
    setindex(data.paginationMeta.pageNumber);
  };

  useEffect(() => {
    setTotalPage(data.paginationMeta.totalPage);
  }, []);

  return (
    <div className="lop-hoc-phan">
      <h4 style={{ textAlign: "center", marginBottom: "30px" }}>
        DANH SÁCH LỚP HỌC PHẦN
      </h4>
      <div className="table-lop-hoc-phan">
        <table className="table table-bordered">
          <thead>
            <tr style={{ backgroundColor: "#88b77b", textAlign: "center" }}>
              <th style={{ color: "#fff" }} scope="col">
                STT
              </th>
              <th style={{ color: "#fff" }} scope="col">
                Mã lớp học phần
              </th>
              <th style={{ color: "#fff" }} scope="col">
                Tên lớp học phần
              </th>
              <th style={{ color: "#fff" }} scope="col">
                Môn học
              </th>
              <th style={{ color: "#fff" }} scope="col">
                Sỉ số
              </th>
            </tr>
          </thead>
          <tbody>
            {data.lopHocPhanDtos ? (
              data.lopHocPhanDtos.map((item, index) => {
                return (
                  <LopHocPhanItem
                    handleClickLopHoc={handleClickLopHoc}
                    item={item}
                    key={item.id}
                    stt={index}
                  />
                );
              })
            ) : (
              <tr></tr>
            )}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
      <div className="pagination-foot-lophp">
        <Pagination
          data={{
            index: index,
            totalPage: totalPage,
            handelPageClick: handelPageClick,
          }}
        />
      </div>
    </div>
  );
}
