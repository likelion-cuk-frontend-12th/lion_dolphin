//import {useEffect, useState} from "react";
// import logo from './logo.svg';
// import './App.css';
//import Practice from './Practice';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Main from './Main';
import About from './About';
import Introduction from './Introduction';
import Practice from './Practice';

// function App() {
//   // const increment = () => {
//   //   setCount(count + 1);
//   // };

//   // const decrement = () => {
//   //   setCount(count - 1);
//   // };
//   // const multiple = () => {
//   //   setCount(count + 2);
//   // };
//   // const division = () => {
//   //   setCount(count - 2);
//   // };
//   // const [visible, setVisible] = useState(true);

//   // return (
//   //   <div className="App">
//   //     <header className="App-header">
//   //       {visible && <img src={logo} className='App-logo' alt='logo'/>}
//   //       <p>
//   //         You clicked <strong>{count}</strong> times
//   //       </p>
//   //       {/* 버튼을 클릭하면 increment 함수가 호출되어 count 상태가 업데이트됩니다. */}
//   //       <button className="App-button" onClick={increment}>plus</button>
//   //       <button className ="App-button" onClick={decrement}>minus</button>
//   //       <button className="App-button" onClick={multiple}>multiple</button>
//   //       <button className='App-button' onClick={division}>divide</button>
//   //       <button className='App-button' onClick={() => setVisible(!visible)}>{visible ? '숨기기' : '보이기'}</button>
//   //     </header>
//   //   </div>
//   // );

    // console.log("before useEffect");
    // useEffect(() => {
    //   console.log("Hello");
    //   const hi = document.getElementById("hi");
    //   hi.innerHTML = "HELLO";
    // });
    // console.log("after useEffect");
    // return (
    //   <div id="hi">Hello</div>
    // );

    // const [count, setCounter] = useState(0);

    // useEffect(() =>{
    //   console.log(`useEffect: ${Date()}`);
    // }, []);

    // const countHandler = (e) => {
    //   setCounter((s) => s+1);
    // };

    //   return(
    //     <div className="App">
    //       <h1 id='hi'>{count}</h1>
    //       <button onClick={countHandler}>카운터 증가</button>
    //     </div>
    //   )


    // const [count, setCount] = useState(1000);

    // useEffect(() => {
    //   console.log("useEffect");
    //   const interval = setInterval(() => console.log(count),count);

    //   return () => {
    //     clearInterval(interval);
    //     console.log("clearInterval");
    //   };
    //  }, [count]);

    // const countHander = (e) => {
    //   setCount((c) => c + 1000);
    // };

  //   return (
  //     <div className="App">
  //       <h1>{count}</h1>
  //       <button onClick={countHander}>카운트 증가 </button>
  //     </div>
  //   );
  // }

// //   setInterval(() => console.log(count), count);
// // },[count]);




// <실습 과제>

function App() {
    return (
      <Practice />
    )
}


// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Main />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/Introduction" element={<Introduction />} />
//     </Routes>
//   );
// }

export default App;


