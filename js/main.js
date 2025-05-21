let text = document.getElementById("text");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let err = document.getElementById("err");
let errMessage = "please enter a message!";

btn.onclick = function print_input() {
  var input_value = input.value;
  // console.log(input_value);
  if (input_value != "") {
    text.innerHTML = input_value;
    input.value = "";
    err.innerHTML = "";
  } else {
    err.innerHTML = errMessage;
  }
}
