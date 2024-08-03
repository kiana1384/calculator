let calcute = document.querySelector(".text");
let vals = document.querySelectorAll(".val");
let op = document.querySelectorAll(".operator");
let clear = document.querySelector(".AC");
let deletee = document.querySelector(".DEL");
let equal = document.querySelector(".equal");

vals.forEach(val => {
  val.addEventListener("click", () => {
    calcute.value += val.value;
  });
});
clear.addEventListener("click", () => {
    calcute.value = " ";
  });
  deletee.addEventListener("click", () => {
    calcute.value = calcute.value.slice(0,-1);
  });
  equal.addEventListener("click", () => {
    calcute.value = eval(calcute.value);
  });