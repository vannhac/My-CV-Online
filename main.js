// hiệu ứng hình ảnh avatar dùng fix ha
/* 
in: sự kiện của các thẻ ha
out: độ dài vs vị trí như thanh đo
ans: bắt sự kiện của thanh bar vs vị trí của con số rồi thay đổi 
width của nó sao cho bằng con số ha 
lấy 2 con số đầu của nó thôi lấy mẹ value đi*/
const skill_bar = document.querySelectorAll(".skill_bar--after");
const skill_measure = document.querySelectorAll(".skill__measure");

for (let i = 0; i < skill_bar.length; i++) {
  skill_bar[i].style.width = skill_measure[i].innerHTML;
  skill_measure[i].style.left = skill_bar[i].style.width;
}

// thêm active vào nav link

/* Toggle màn hình */
const lightSwitch = document.querySelector(".light-switch");
const html = document.querySelector("html");
lightSwitch.addEventListener("click", (e) => {
  html.classList.toggle("dark");
});
// Tạo Menu Mobile
const listPC = document.querySelector(".js-nav__list");
const listMobile = document.querySelector(".list--mobile");
const iconNav = document.querySelector(".icon__nav");
// check boxx
const checkbox = document.querySelector("#menu--check");
listMobile.innerHTML = listPC.innerHTML;
const nav = document.querySelectorAll(".nav__link");

function RemoveActive() {
  nav.forEach((item) => {
    item.classList.remove("active");
  });
}
nav.forEach((item) => {
  item.addEventListener("click", (e) => {
    RemoveActive();
    item.classList.add("active");
    checkActive();
  });
});
function checkActive() {
  checkbox.checked = false;
}
