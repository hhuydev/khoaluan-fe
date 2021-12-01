import React from "react";

export default function BangDiem() {
  return (
    <div className="container">
      <div>
        <p>
          <a
            className="btn btn-primary"
            data-toggle="collapse"
            href="#contentId"
            aria-expanded="false"
            aria-controls="contentId"
          >
            Show
          </a>
        </p>
        <div className="collapse" id="contentId"></div>
      </div>
    </div>
  );
}
