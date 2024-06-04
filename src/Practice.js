import React, { useEffect, useState } from 'react';

function Change(){
    const [text, setText] = useState('');
    const upperText = text.toUpperCase();

    const onChange = (e) => {
        setText(e.target.value);
    };

    useEffect(() => {
        console.log('onChange');
    },[]);
    return (
        <div>
            <h1>텍스트를 대문자로 변환하기</h1>
            <input onChange={onChange} value = {text}/>
            <div>
                <b>변환된 텍스트: {upperText}</b>
            </div>
        </div>
    )
    
}

export default Change;