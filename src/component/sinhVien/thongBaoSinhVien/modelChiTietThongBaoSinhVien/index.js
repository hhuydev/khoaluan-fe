import React from "react";
import "./style.css";
export default function ModelChiTietThongBaoSinhVien(props) {
  const { data } = props;

  return (
    <div className="modal" id="myModal" style={{ marginTop: "15%" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h4 style={{ color: "#88b77b" }} className="modal-title">
              {data ? data.tieuDe : ""}
            </h4>
            <button
              type="button"
              className="btn btn-inline"
              data-dismiss="modal"
            >
              x
            </button>
          </div>
          {/* Modal body */}
          <div className="modal-body">{data ? data.noiDung : ""}</div>
          {/* Modal footer */}
          {/* <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Close
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
