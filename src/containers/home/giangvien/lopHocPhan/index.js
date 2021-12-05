import React from 'react'
import Pagination from '../../../../common/Pagination';
import './style.css';
export default function LopHocPhan() {
  console.log("ádasdasdasd");
  return (
    <div className="lop-hoc-phan">
      <table className="table table-bordered">
        <thead>
          <tr style={{ backgroundColor: 1, textAlign: "center" }}>
            <th scope="col">STT</th>
            <th scope="col">Mã lớp học phần</th>
            <th scope="col">Tên lớp học phần</th>
            <th scope="col">Môn học</th>
            <th scope="col">Sỉ số</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>4</td>
            <td>DHHHH</td>
            <td>tOÁN</td>
            <td>5</td>
            <td>
              <a href>Nhập điểm</a>

              <a href>Danh sách sinh viên</a>
            </td>
          </tr>

        </tbody>
        <tfoot>
          <Pagination data={{index:1,totalPage:20,handelPageClick:null}}/>
        </tfoot>
      </table>
    </div>
  )
}
