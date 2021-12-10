import { React, useEffect, useMemo, useState } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import ChinhSuaThongTin from "../../../../component/sinhVien/thongTinSinhVien/chinhSua";
import ThongTinSinhVien from "../../../../component/sinhVien/thongTinSinhVien/thongTin";
import { atcImgUrl } from "../../../../redux/actions/TaiKhoan";
import "./style.css";
export default function XemThongTin() {
  const [imgURl, setImgURl] = useState(null);
  const [isSave, setIsSave] = useState(false);
  const { data } = useSelector((state) => state.sinhVienReducer, shallowEqual);
  const [img, setImg] = useState("");
  const [dataImgUrlApi, setDataImgUrlApi] = useState(null);
  const dispatch = useDispatch();
  const onChange = (e) => {
    const file = URL.createObjectURL(e.target.files[0]);
    setImg(file);
    setDataImgUrlApi(e.target.files[0]);
    setIsSave(true);
  };
  const handleHuy = () => {
    console.log("đấ");
    setIsSave(false);
    setImg(data.imgUrl);
  };


  const handleLuu = () => {
    if ((dataImgUrlApi === null, imgURl === null)) {
      return;
    }
    dispatch(atcImgUrl(dataImgUrlApi));
  };
  useEffect(() => {
    setImg(data.imgUrl);
  }, []);
  return (
    <div className="profile">
      <div className="container emp-profile">

        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={img} className="img" alt="Cinque Terre" />
                <div className="file btn btn-lg btn-primary">
                  Chỉnh sửa
                  <input type="file" name="file" onChange={onChange} />
                </div>
                <div className="btn_img">
                  <button
                    onClick={handleHuy}
                    style={{ display: isSave ? "block" : "none" }}
                  >
                    Huy
                  </button>
                  <button
                    onClick={handleLuu}
                    style={{ display: isSave ? "block" : "none" }}
                  >
                    Luu
                  </button>
                </div>
              </div>
            </div>

            {/* <input type="file" name="file" onChange={onchange} /> */}
            <div className="col-md-6">
              <div className="profile-head">
                <h3>Thông Tin Sinh Viên</h3>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Thông tin cá nhân
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Chỉnh sửa thông tin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work"></div>
            </div>
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                {useMemo(
                  () => (
                    <ThongTinSinhVien />
                  ),
                  [data]
                )}
                {useMemo(
                  () => (
                    <ChinhSuaThongTin />
                  ),
                  [data]
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
