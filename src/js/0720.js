$(document).ready(function () {
  $("#dim .btn-1").click((e) => {
    let width = $("#dim p").width();
    let height = $("#dim p").height();
    let iw = $("#dim p").innerWidth();
    let ih = $("#dim p").innerHeight();
    let ow = $("#dim p").outerWidth();
    let oh = $("#dim p").outerHeight();
    let text = "w:" + width + ", h:" + height + "\n";
    let text2 = "iw:" + iw + ", ih:" + ih + "\n";
    let text3 = "ow:" + ow + ", oh:" + oh;
    $("#dim textarea").val(text + text2 + text3);
    console.log(text);
  });

  $("#addcls .btn-5").click((e) => {
    let p = $("#addcls p");
    let input = $("#addcls input").val();
    p.css("color", input);
    console.log("input", input, "css", p.css(["color", "background-color"]));
  });
  $("#addcls .btn-1").click((e) => {
    let p = $("#addcls p");
    p.removeClass();
    p.addClass("color-r");
    console.log("css", p.css(["color", "background-color"]));
  });
  $("#addcls .btn-2").click((e) => {
    let p = $("#addcls p");
    p.removeClass();
    p.addClass("color-g");
    console.log("css", p.css(["color", "background-color"]));
  });
  $("#addcls .btn-3").click((e) => {
    let p = $("#addcls p");
    p.removeClass();
    p.addClass("color-b");
    console.log("css", p.css(["color", "background-color"]));
  });
  $("#addcls .btn-4").click((e) => {
    let p = $("#addcls p");
    p.toggleClass("bgcolor-c");
    console.log("css", p.css(["color", "background-color"]));
  });

  $("#rem .btn-1").click((e) => {
    $("#rem .p-1").remove();
  });
  $("#rem .btn-2").click((e) => {
    $("#rem .p-2").empty();
  });
  $("#rem .btn-3").click((e) => {
    $("#rem p").remove(".remove");
  });

  $("#before .btn-1").click((e) => {
    $("#before .p-1").prepend("<p>PREPEND text</p>");
    $("#before ol").prepend("<li>PREPEND list item</li>");
  });
  $("#before .btn-2").click((e) => {
    $("#before .p-1").append("<p>APPEND text</p>");
    $("#before ol").append("<li>APPPEND list item</li>");
  });
  $("#before .btn-3").click((e) => {
    $("#before .p-1").before("<p>BEFORE text</p>");
    $("#before ol").before("<li>BEFORE list item</li>");
  });
  $("#before .btn-4").click((e) => {
    $("#before .p-1").after("<p>AFTER text</p>");
    $("#before ol").after("<li>AFTER list item</li>");
  });

  $("#setget .btn-4").click((e) => {
    $("#setget a").prop({ title: "Another Title!" });
  });
  $("#setget .btn-3").click((e) => {
    let p_text = $("#setget p").text();
    $("#setget input").val(p_text);
  });
  $("#setget .btn-2").click((e) => {
    console.log(e.target);
    $("#setget p").html("Another <b>Html!!</b>");
  });
  $("#setget .btn-1").click((e) => {
    console.log(e.target);
    $("#setget p").text("Another text!!");
  });

  let val = $("#setget input").val();
  console.log("value ", val);

  let text = $("#setget p").text();
  let html = $("#setget p").html();
  console.log("text ", text);
  console.log("html ", html);

  $("#chain p").css({ color: "red" }).slideUp(2000).slideDown(3000);
});

const arr = [5, 4, 5];
arr.forEach((item, i) => console.log(i, item));
for (let [idx, value] of arr.entries()) {
  console.log(idx, value);
}
