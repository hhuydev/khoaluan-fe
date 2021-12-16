import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Pagination from "../../../../../../common/Pagination";
import DonXinNghiHocItem from "../../../../../../component/giangVien/donXinNghiHocItem";
import { atcGetDonXinNghiHoc } from "../../../../../../redux/actions/GiangVien";
import { formatDateTime } from "../../../../../../utils/format/formatValues";
import "./style.css";
export default function DonNghiHoc(props) {
  const dispatch = useDispatch();
  const [items, setItems] = useState();
  const [totalPage, setTotalPage] = useState(10);
  const [index, setindex] = useState(0);
  const [dataItem, setDataItem] = useState();
  const { data } = useSelector(
    (state) => state.donXinNghiHocReducer,
    shallowEqual
  );
  const handelPageClick = (page) => {
    dispatch(
      atcGetDonXinNghiHoc(localStorage.getItem("id"), props.id, page.selected)
    );
    setindex(data.paginationMeta.pageNumber);
  };
  useEffect(() => {
    if (data) {
      setTotalPage(data.paginationMeta.totalPage);
    }
  }, [data]);
  console.log(data);

  return (
    <div
      className="tab-pane fade show"
      id="donnghihoc"
      role="tabpanel"
      aria-labelledby="donnghihoc-tab"
    >
      <div className="danh-sach-don-nghi-hoc">
        <div className="search-custem">
          <div className="search">
            <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
              <div className="input-group">
                <input
                  type="search"
                  name="search"
                  placeholder="Nhập từ khóa cần tìm"
                  aria-describedby="button-addon1"
                  className="form-control border-0 bg-light"
                />
                <div className="input-group-append">
                  <i className="fa fa-search"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="selected">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option value={0}>Tất cả thông báo</option>
              <option value={1}>Thông báo bị ẩn</option>
              <option value={2}>Thông báo hiển thị</option>
              <option value={3}>Thông báo bị xóa</option>
            </select>
          </div>
        </div>
        <div className="page-content page-container" id="page-content">
          <div className="padding">
            <div className="row">
              <div className="d-flex justify-content-center">
                <div
                  className="list list-row card"
                  id="sortable"
                  data-sortable-id={0}
                  aria-dropeffect="move"
                >
                  {data
                    ? data.listDonXinNghiHoc.map((item) => {
                        return <DonXinNghiHocItem key={item.id} item={item} id={props.id} />;
                      })
                    : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pagination">
          <Pagination
            data={{
              index: index,
              totalPage: totalPage,
              handelPageClick: handelPageClick,
            }}
          />
        </div>
      </div>
    </div>
  );
}
