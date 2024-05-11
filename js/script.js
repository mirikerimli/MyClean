const langEN = document.querySelector(".lang_en");
const langRU = document.querySelector(".lang_ru");
const navbarLang = document.querySelector(".navbar_lang");
const leftBtn = document.querySelector(".left_btn");
const rightBtn = document.querySelector(".right_btn");
let counters = document.querySelectorAll(".counter");
let interval = 5000;
let section = document.querySelector(".stats");
let started = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= section.offsetTop - 500) {
    if (!started) {
      counters.forEach((i) => {
        let n = parseInt(i.getAttribute("data-start"));
        let endValue = parseInt(i.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let count = setInterval(() => {
          n += 1;
          i.innerHTML = n;
          if (n == endValue) {
            clearInterval(count);
          }
        }, duration);
      });
    }
    started = true;
  }
});

window.onmousemove = () => {
  leftBtn.style.opacity = "1";
  rightBtn.style.opacity = "1";
};

window.onmouseout = () => {
  leftBtn.style.opacity = "0";
  rightBtn.style.opacity = "0";
};

navbarLang.addEventListener("click", () => {
  langEN.classList.toggle("lang_en");
  langRU.classList.toggle("lang_ru");
});
