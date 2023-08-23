let acc = document.getElementsByClassName("accordion");
console.log(acc);
let i = 0;

/* Toggle between adding and removing the "active" class,
to highlight the button that controls the panel */

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", (e) => {
    e.target.classList.toggle("active");
    let panel = e.target.nextElementSibling;

    /*
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    */

    console.log(typeof panel.style.maxHeight);
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
