import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Pagination from "../../../../common/Pagination";
import LopHocItem from "../../../../component/giangVien/lopHocItem";
import { atcGetDanhSachLopHoc } from "../../../../redux/actions/GiangVien";
import "./style.css";
export default function LopHoc() {
  const { data } = useSelector((state) => state.lopHocReducer, shallowEqual);
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [totalPage, setTotalPage] = useState(10);
  const [index, setindex] = useState(0);
  const [dataItem, setDataItem] = useState();
  const handleClickLopHoc = () => {
    console.log("");
  }



  const handelPageClick = (page) => {
    dispatch(atcGetDanhSachLopHoc(page.selected));
    setindex(data.paginationMeta.pageNumber)
  };

  useEffect(() => {
    console.log(data);
    setTotalPage(data.paginationMeta.totalPage)
  }, []);

  return (
    <div className="lop-hoc">
      <table className="table table-bordered">
        <thead>
          <tr style={{ backgroundColor: "rgb(179, 224, 255)", textAlign: "center" }}>
            <th scope="col">#</th>
            <th scope="col">Mã lớp</th>
            <th scope="col">Tên lớp</th>
            <th scope="col">Sỉ số</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
          {data.lopDtos ? data.lopDtos.map((item, index) => {
            return (
              <LopHocItem handleClickLopHoc={handleClickLopHoc} item={item} key={item.id} stt={index} />
            );
          }) : <tr></tr>}
        </tbody>
      </table>
      <Pagination
        data={{ index: index, totalPage: totalPage, handelPageClick: handelPageClick }}
      />
    </div>
  );
}
