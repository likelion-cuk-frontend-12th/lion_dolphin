// Task 1
import { useState, useEffect } from "react";

export default function App() {
  const [inputText, setInputText] = useState(""); 

  const handleInputChange = (e) => { 
    setInputText(e.target.value);
  };

  useEffect(() => {
    console.log("change :", inputText); 
  }, [inputText]);

  const uppercaseText = inputText.toUpperCase();

  return (
    <div>
      <h1>텍스트를 대문자로 변환하기</h1>
      <input 
        type="text" 
        onChange={handleInputChange} 
        value={inputText} 
      />
      <p>변환된 텍스트 : {uppercaseText}</p>
    </div>
  );
}



//Task 2

// import React from "react";
// import { Route, Routes } from "react-router-dom";
// // import One from "./toUpper.js";
// import Main from "./Main";
// import About from "./pages/About";
// import Introduction from "./pages/Introduction";

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Main />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/introduction" element={<Introduction />} />
//     </Routes>
//   );
//xs}

