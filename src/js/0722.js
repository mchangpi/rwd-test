let showTime = (hour) => {
  let greeting;
  let demo = document.querySelectorAll("#elif .demo")[0];
  if (hour < 10) {
    greeting = "Good morning";
    demo.style.backgroundColor = "cyan";
  } else if (hour < 20) {
    greeting = "Good day";
    demo.style.backgroundColor = "lightgreen";
  } else {
    greeting = "Good evening";
    demo.style.backgroundColor = "yellow";
  }
  demo.innerHTML = greeting + ", current hour: " + hour;
};

let myTimeSelect = () => {
  let hour = document.querySelectorAll("#elif select")[0].value;
  hour = Number(hour);
  console.log(hour);
  showTime(hour);
};

let myTime = () => {
  // const time = new Date().getHours();
  let hour = document.querySelectorAll("#elif input")[0].value;
  hour = Number(hour);
  console.log(hour);
  showTime(hour);
};

let myFunction = () => {
  let voteable;
  let age = document.querySelectorAll("#comparison input")[0].value;
  age = Number(age);
  console.log(age);

  if (isNaN(age)) {
    voteable = "Input is not a number";
  } else {
    voteable = age < 18 ? "Too young" : "Old enough";
  }
  document.querySelectorAll("#comparison .demo")[0].innerHTML =
    voteable + " to vote";
};
