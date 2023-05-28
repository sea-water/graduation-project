import { React, useState, useEffect, useRef } from "react";
import "./Cbest.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Cbest(props) {
  const navigate = useNavigate();
  const [days, setDays] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/names")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDays(data);
      });
  });

  function onSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:4000/names`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: titleRef.current.value,
        body: bodyRef.current.value,
        writer: writerRef.current.value,
        logo: logoRef.current.value,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성이 완료되었습니다.");
        navigate("./Community");
      }
    });
  }

  const titleRef = useRef(null);
  const bodyRef = useRef(null);
  const writerRef = useRef(null);
  const logoRef = useRef(null);
  return (
    <div className="Cbest">
      <div className="cbest_main">
        <form className="cbest_from" onSubmit={onSubmit}>
          <h2 className="cbest_h2">게시물 올리기</h2>
          <div className="choice">
            <select>
              <option>체중 감량</option>
              <option>근력강화</option>
              <option>식단조절</option>
            </select>
          </div>
          <div className="cbest_input">
            <h3>제목</h3>
            <input
              type="name"
              name="title"
              placeholder="제목을 입력해주세요"
              ref={titleRef}
            />
          </div>
          <div className="cbest_text">
            <h3>내용</h3>
            <textarea
              name="body"
              className="cbest_textarea"
              placeholder="내용을 입력해주세요"
              ref={bodyRef}
            />
          </div>
          <div className="cbest_input">
            <h2>작성자</h2>
            <input
              type="name"
              name="title"
              placeholder="제목을 입력해주세요"
              ref={writerRef}
            />
          </div>

          <div className="cbest_button">
            <select ref={logoRef}>
              {days.map((day) => (
                <option key={day.id} value={day.logo}>
                  {day.logo}
                </option>
              ))}
            </select>
            <button>등록하기</button>
            <button>
              <Link
                to="strap"
                style={{ textDecoration: "none", color: "#ffff" }}
              >
                목록으로
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cbest;
