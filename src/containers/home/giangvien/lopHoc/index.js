import React from 'react'
import './style.css';
export default function LopHoc() {
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
      </table>
    </div>
  )
}
