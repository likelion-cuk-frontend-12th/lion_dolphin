import { useNavigate } from "react-router";

export default function About() {
    const navigate = useNavigate()
    const back = () =>{
		    // 방금 전에 방문한 페이지로 이동
        navigate(-1);
    }
    return (
      <div>
        <h1>소개</h1>
        <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
        <button onClick={back}>뒤로가기</button>
      </div>
    );
  }
