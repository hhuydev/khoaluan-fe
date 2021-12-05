import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../../../common/Pagination';
import './style.css';
export default function LopHoc() {


  const { data } = useSelector((state) => state.lopHocReducer);
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [totalPage,setTotalPage] = useState(10);
  const [index,setindex] = useState(0);
  const [dataItem,setDataItem] = useState();


  const handelPageClick = (page)=>{
    console.log(page);
  }
  return (
    <div className='lop-hoc'>
      <table className="table table-bordered">
        <thead>
          <tr style={{ backgroundColor: 1, textAlign: "center" }}>
            <th scope="col">STT</th>
            <th scope="col">Mã lớp</th>
            <th scope="col">Tên lớp</th>
            <th scope="col">Sỉ số</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>4</td>
            <td>DHHHH</td>
            <td>5</td>
          </tr>

        </tbody>
        <tfoot>
          <Pagination data={{index:1,totalPage:20,handelPageClick:handelPageClick}}/>
        </tfoot>
      </table>
            
    </div>

  )
}
