import { useState, useEffect } from "react";

export default function App() {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    console.log("change :", text);
  }, [text]);

  return (
    <div>
      <h1>텍스트를 대문자로 변환하기</h1>
      <input type="text" onChange={onChange} value={text} />
      <p>변환된 텍스트 : {text.toUpperCase()}</p>
    </div>
  );
}
