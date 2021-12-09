import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import loading from "./../../assets/img/loading.gif";
import style from "./LoadingComponent.module.css";
export default function LoadingComponent() {
  const { isLoading } = useSelector((state) => state.loadingReducer,shallowEqual);

  return (
    <div
      className={style.bgLoading}
      style={{ display: isLoading ? "flex" : "none" }}
    >
      <img src={loading} />
    </div>
  );
}
