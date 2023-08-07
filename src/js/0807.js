let accList = document.querySelectorAll(".accordion > li");
let subAccList = document.querySelectorAll(".sub-accordion > li");

for (let acc of accList) {
  acc.addEventListener("click", (e) => {
    // e.target.classList.toggle("active");
    console.log("target " + e.target.innerHTML);

    let subAcc = e.target.nextElementSibling;
    console.log("display " + subAcc);

    if (subAcc.style.display != "block") subAcc.style.display = "block";
    else subAcc.style.display = "";
  });
}

for (let sub of subAccList) {
  sub.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
    console.log("target " + e.target.innerHTML);

    let panel = e.target.nextElementSibling;
    console.log("panel " + panel.style.display);

    if (panel.style.display != "block") panel.style.display = "block";
    else panel.style.display = "";
  });
}
/*
let getSiblings = (from, className) => {
  let siblings = [];
  let sibling = from.nextElementSibling;
  while (sibling) {
    if (sibling.nodeType === 1 && sibling.className.includes(className)) {
      // if(sibling.className)
      console.log("class " + sibling.className);
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

let getLeaf = (from, className) => {
  let siblings = [];
  let sibling = from.nextElementSibling;
  while (sibling) {
    console.log(sibling);
    if (sibling.className && !sibling.className.includes(className)) break;

    if (sibling.nodeType === 1) {
      console.log("leaf " + sibling.className);
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};
*/
