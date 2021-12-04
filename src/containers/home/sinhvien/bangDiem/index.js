import React from "react";
import './style.css';

export default function BangDiem() {
  return (
    <div className="bangdiem">
      <table className="table table-bordered">
        <thead>
          <tr style={{ backgroundColor: 1, textAlign: "center" }}>
            <th scope="col">STT</th>
            <th scope="col">Tên môn học</th>
            <th scope="col" colspan="3">Điểm thường kỳ</th>
            <th scope="col">Điểm giữa kỳ</th>
            <th scope="col">Điểm cuối kỳ</th>
            <th scope="col">Điểm tổng kết</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Tóan A2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>7</td>
          </tr>
          <tr>
            <th scope="row">Điểm trung bình: </th>
            <td colSpan="8">1</td>
          </tr>
          <tr>
            <th scope="row">Nhận xét: </th>
            <td colSpan="8">1</td>
          </tr>
        </tbody>
      </table>
    </div>

  );
}
