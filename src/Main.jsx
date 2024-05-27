import { Link } from "react-router-dom"

const Main = () => {
    return (
        <div>
          <h1>Home</h1>
          <p>가장 먼저 보여지는 페이지입니다.</p>
          <Link to="/about">About</Link>
          <br></br>
          <Link to="/Introduction">Introduction</Link>
        </div>
      );
}

export default Main