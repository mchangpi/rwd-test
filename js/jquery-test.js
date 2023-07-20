$(document).ready(function () {
  let div_1 = $("#stop .div-1");
  $("#stop .btn-1").click(() => {
    console.log(this, "slide!");
    div_1.slideToggle(3000);
  });
  $("#stop .btn-2").click(function () {
    div_1.stop(false, false);
  });

  let div_2 = $("#stop .div-2");
  $("#stop .btn-3").click(() => {
    div_2.slideToggle(3000);
  });
  $("#stop .btn-4").click(() => {
    div_2.stop(true, false);
  });

  let div_3 = $("#stop .div-3");
  $("#stop .btn-5").click(() => {
    div_3.slideToggle(3000);
  });
  $("#stop .btn-6").click(() => {
    div_3.stop(false, true);
  });

  let div_4 = $("#stop .div-4");
  $("#stop .btn-7").click(() => {
    div_4.slideToggle(3000);
  });
  $("#stop .btn-8").click(() => {
    div_4.stop(true, true);
  });

  $("#animate .cls-1").click(() => {
    console.log(this, "slide!");

    $("#animate .cls-2")
      .animate({ "margin-left": "15em", opacity: "0.7" }, 2000, "easeOutBounce")
      .animate({ "margin-top": "10em" }, 2000, "easeOutBounce");
  });

  $("#slide .cls-1").click(() => {
    console.log(this, "slide!");
    $("#slide .cls-2").slideToggle(3000);
  });

  $("#fade .cls-1").click(() => {
    console.log(this, "fade!");
    $("#fade .cls-2").fadeToggle(1000);
  });

  $("#btn3").click(() => {
    //$().prop("disabled", (i, v) => !v);
    $("#article").toggle(500);
  });

  $("div").css("border", "1px solid darkblue");

  $("div li a").css("color", "red");

  //alert('Test');
  //confirm('Please confirm');
  //prompt('Please input name: ', 'John');
});

const ratings = [5, 4, 5];

ratings.forEach((item, i) => console.log(i, item));
