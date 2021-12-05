import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../../../common/Pagination";
import LopHocItem from "../../../../component/giangVien/lopHocItem";
import { atcGetDanhSachLopHoc } from "../../../../redux/actions/GiangVien";
import "./style.css";
export default function LopHoc() {
  const { data } = useSelector((state) => state.lopHocReducer);
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [totalPage, setTotalPage] = useState(10);
  const [index, setindex] = useState(0);
  const [dataItem, setDataItem] = useState();
  const handleClickLopHoc = ()=>{
    console.log("");
  }

  

  const handelPageClick = (page) => {
    dispatch(atcGetDanhSachLopHoc(page.selected));  
    setindex(data.paginationMeta.pageNumber)
  };

  useEffect(() => { 
    setTotalPage(data.paginationMeta.totalPage) 
  }, []);

  return (
    <div className="lop-hoc">
      <table className="table table-bordered">
        <thead>
          <tr style={{ backgroundColor: "cyan", textAlign: "center" }}>
            <th scope="col">#</th>
            <th scope="col">Mã lớp</th>
            <th scope="col">Tên lớp</th>
            <th scope="col">Sỉ số</th>
          </tr>
        </thead>
        <tbody>
        {data.lopDtos? data.lopDtos.map((item,index) => {
              return (
                <LopHocItem handleClickLopHoc={handleClickLopHoc} item={item} key ={item.id} stt={index}/>
              );
            }):"....."}
        </tbody>
      </table>
      <Pagination
        data={{ index: index, totalPage: totalPage, handelPageClick: handelPageClick }}
      />
    </div>
  );
}
