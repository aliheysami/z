const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slides = document.querySelector(".slides").children;
const indicator = document.querySelector(".indicator");
let index = 0;
//1//

next.addEventListener("click", function () {
  nextSlide();
  updateCircle();
  resetTimer();
});
//2//

prev.addEventListener("click", function () {
  prevSlide();
  updateCircle();
  resetTimer();
});

//3//

function nextSlide() {
  if (index == slides.length - 1) {
    index = 0;
  } else {
    index++;
  }
  changeSlide();
}

//4//

function prevSlide() {
  if (index == 0) {
    index = slides.length - 1;
  } else {
    index--;
  }
  changeSlide();
}

//5//

function changeSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}

//6//
function circleIndicator() {
  for (let i = 0; i < slides.length; i++) {
    const div = document.createElement("div");
    div.innerHTML = i + 1;
    div.id = i;
    div.setAttribute("onclick", "indicatorSlide(this)");
    if (i == 0) {
      div.className = "active";
    }
    indicator.appendChild(div);
  }
}

circleIndicator();
//7//

function updateCircle() {
  for (let i = 0; i < indicator.children.length; i++) {
    indicator.children[i].classList.remove("active");
  }
  indicator.children[index].classList.add("active");
}

//8//
// اینجا اسلاید تغییر میکنه
function indicatorSlide(elemnt) {
  index = elemnt.id;
  changeSlide();
  updateCircle();
  resetTimer();
}

//10//
function resetTimer() {
  // خط پایین ریست میکنه تایمر رو در جایی که تایمر رو تعریف کردی  و صفرش میکنه
  clearInterval(timer);
  timer = setInterval(autoPlay, 4000);
}
//9//
function autoPlay() {
  nextSlide();
  updateCircle();
}

let timer = setInterval(autoPlay, 7000);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
let countrySelectBox = document.querySelector(".countrySelect");
let citySelect = document.querySelector(".citySelect");

let countriesData = {
  iran: ["شیراز", "تهران", "اهواز", "تبریز", "اصفهان", "کرمانشاه"],
  iraq: ["البصره", "بغداد", "نجف", "اربیل", "الناصریه", "موصل"],
  lebanon:["بیروت", "کوره", "ترابلس", "سور"],
  syria: ["حلب", "دمشق", "ادلب", "حجر"],
  yaman: ["صنعا", "تعز", "زمار"],
};
countrySelectBox.addEventListener("change", function () {
  citySelect.innerHTML = "";
  let countryValue = countrySelectBox.value;
  let cityes = countriesData[countryValue];
  console.log(cityes);
  if (countryValue === "Please Select") {
    citySelect.innerHTML += "<option>select country</option>";
  } else {
    cityes.forEach(function (city) {
      citySelect.innerHTML += "<option>" + city + "</option>";
    });
  }
});

//////////////////////////////////////////////////////////////////////////////////////
const menu = document.querySelector(".menu-humberger");
const head = document.querySelector(".head");
const close = document.querySelector(".close i");
const overlay = document.querySelector(".overlay");

menu.addEventListener("click", function () {
  console.log("click");
  head.classList.add("active");
  overlay.classList.add("active");
});

close.addEventListener("click", function () {
  head.classList.remove("active");
  overlay.classList.remove("active");
});
