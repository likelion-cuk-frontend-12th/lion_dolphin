import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // useState를 사용하여 count 상태와 해당 상태를 변경할 수 있는 함수 setCount를 선언합니다.
  const [count, setCount] = useState(0);
  const [hide, setHide] = useState(true);


  // 버튼을 클릭할 때마다 count 상태를 업데이트하는 함수입니다.
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const multiplication = () => {
    setCount(count * 2);
  };

  const division = () => {
    setCount(count / 2);
  };

  const onHide = () => {
    setHide(!hide);
  };


 

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          You clicked <strong>{count}</strong> times
        </p>
        {/* 버튼을 클릭하면 increment 함수가 호출되어 count 상태가 업데이트됩니다. */}
        {hide && <p>
          감추기
        </p>
        }
        <button className="App-button" onClick={increment}>
          plus
        </button>
        <button className ="App-button" onClick={decrement}>minus</button>
        <button className ="App-button" onClick={multiplication}>multiplication</button>
        <button className ="App-button" onClick={division}>division</button>
        <button className ="App-button" onClick={onHide}>감추기</button>
        
      </header>
    </div>
  );
}

export default App;


