function calculation() {
  var first = Number(document.getElementById("input1").value);
  var second = Number(document.getElementById("input2").value);
  var opt = document.getElementById("opt").value;
  var num = 0;
  var result = document.getElementById("res");
  if (opt === "*") {
    num = first * second;
  } else if (opt === "%") {
    num = first / second;
  } else if (opt === "+") {
    num = first + second;
  } else {
    num = first - second;
  }
  result.textContent = num;
}
