$(document).ready(function () {
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
});

const arr = [5, 4, 5];
arr.forEach((item, i) => console.log(i, item));
for (let [idx, value] of arr.entriesfind()) {
  console.log(idx, value);
}
