const btn1 = document.getElementById("first");
const btn2 = document.getElementById("second");
const btn3 = document.getElementById("third");
const btn4 = document.getElementById("fourth");
const btn5 = document.getElementById("fifth");
const ratingText = document.getElementById("rating-text");
const submitButton = document.getElementById("submitButton");
const ratingState = document.getElementById("bigBox");
const thankyouState = document.getElementById("second-state");
const goBack = document.getElementById("goback-button");
let value = 0;
function setActive(id) {
  // var els = document.querySelectorAll(".active");
  // [].forEach.call(els, function (el) {
  //   el.classList.remove("active");
  // });
  var els = Array.from(document.querySelectorAll(".active"));
  els.forEach((el) => el.classList.remove("active"));
  var btn = document.getElementById(id);
  btn.classList.add("active");

  value = btn.value;
}

submitButton.onclick = function () {
  if (value <= 0) {
    // swal("Choose one");
    swal("Choose one!", "", "error");

    return;
  }
  ratingState.style.display = "none";
  thankyouState.style.display = "block";
  updateText(value);
};

// ratingState.style.display = "none";

function updateText(val) {
  ratingText.innerHTML = `You selected ${val}
    out of 5 `;
}
goBack.onclick = function () {
  var els = Array.from(document.querySelectorAll(".active"));
  els.forEach((el) => el.classList.remove("active"));
  ratingState.style.display = "block";
  thankyouState.style.display = "none";
  value = 0;
};
