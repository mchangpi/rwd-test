$(document).ready(() => jQueryFunc());

let Y = new Date().getFullYear();
let M = new Date().getMonth();
let D = new Date().getDate();
let Day = new Date().getDay();
let H = new Date().getHours();
console.log(Y, M, "Day of Month", D, "Day of Week", Day, H);

const arr = [1, 2, 3, 5];
arr.forEach((item, i) => console.log(i, item));
for (let [idx, value] of arr.entries()) {
  console.log(idx, value);
}

let displayYear = () => {
  let cls_2 = document.getElementsByClassName("cls-2")[0];
  console.log(Y);
  cls_2.value = Y;
};

let displayMonth = () => {
  let cls_2 = document.getElementsByClassName("cls-2")[0];
  console.log(M);
  cls_2.value = M;
};
let displayDate = () => {
  let cls_2 = document.getElementsByClassName("cls-2")[0];
  console.log(D);
  cls_2.value = D;
};
let displayTime = () => {
  let cls_2 = document.getElementsByClassName("cls-2")[0];
  console.log(H);
  cls_2.value = H + ":" + new Date().getMinutes();
};
function changeFunc() {
  let cls_1 = document.getElementsByClassName("cls-1")[0];
  console.log(cls_1);
  cls_1.innerHTML = "Paragraph changed";
}

let jQueryFunc = () => {
  $("#filter p")
    .filter(".intro")
    .css({ color: "blue", border: "2px solid blue" });

  $("#first p").eq(1).css({ color: "blue", border: "2px solid blue" });
  $("#first p").first().css({ color: "red", border: "2px solid red" });
  $("#first p").last().css({ color: "green", border: "2px solid green" });
  $("#siblings p").prevAll().css({ color: "green" });
  $("#siblings p").nextAll().css({ color: "orange" });
  $("#siblings p").siblings("h2").css({ color: "blue" });
  $("#children").find("li").css({ color: "green" });
  $("#children").children("div").css({ color: "red" });
  $("#parents span").parents("li").css({ color: "blue" });
};
