var firstNumberInput = document.getElementById("FirstNumber");
var secondNumberInput = document.getElementById("SecondNumber");
var operatorInput = document.getElementById("OperatorInput"); // OperatorInput의 id를 가진 입력 필드를 가정

function calculate() {
    var firstNumber = parseFloat(firstNumberInput.value); // 입력값을 실수로 변환
    var secondNumber = parseFloat(secondNumberInput.value);
    var operator = operatorInput.value; // 연산자 입력값 가져오기

    var result; // 결과값을 저장할 변수

    switch(operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            if (secondNumber !== 0) { // 0으로 나누는 것 방지
                result = firstNumber / secondNumber;
            } else {
                alert("0으로 나눌 수 없습니다.");
                return; // 함수를 종료
            }
            break;
        case '%':
            result = firstNumber % secondNumber;
            break;
        default:
            alert("유효하지 않은 연산자입니다.");
            return; // 함수를 종료
    }

    alert("결과: " + result); // 결과값 표시
}

