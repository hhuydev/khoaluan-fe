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

  return (
    <div
      className="tab-pane fade show"
      id="donnghihoc"
      role="tabpanel"
      aria-labelledby="donnghihoc-tab"
    >
      <div className="danh-sach-don-nghi-hoc">
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
                        return <DonXinNghiHocItem key={item.idDonXinNghiHoc} item={item} id={props.id} />;
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
