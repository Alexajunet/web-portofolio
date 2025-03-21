let lastScrollTop = 0;
const header = document.querySelector("header");
const timeText = document.querySelector(".time");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});

// Set waktu sesuai dengan Sulawesi Tengah (Palu) GMT+8
const now = new Date();
const paluTime = now.toLocaleString("en-US", { timeZone: "Asia/Makassar" });
const [date, time] = paluTime.split(", ");
timeText.textContent = `${time} GMT+8`;

const yearText = document.getElementById("year");
const year = new Date().getFullYear();

yearText.textContent = year;
