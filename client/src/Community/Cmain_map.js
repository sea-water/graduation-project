import React from "react";
import "./Cmain_map.css";

const Cmain_map = (props) => {
  const truncatedTitle =
    props.list.length > 15 ? props.list.slice(0, 12) + "..." : props.list;
  return (
    <div className="crud_contents">
      <h3 className="content_title">{props.name}</h3>
      <div className="content_thumbnail">
        <img src={props.logo} alt="content_thumbnail" />
      </div>
      <div className="crud_title">{truncatedTitle}</div>
      <div className="crud_writer">
        작성자 : {props.writer}
        <button className="btn_view_post">더보기</button>
      </div>
    </div>
  );
};

export default Cmain_map;
