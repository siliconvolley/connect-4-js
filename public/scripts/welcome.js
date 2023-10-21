
const mode = document.querySelector(".mode");
const fullPage = document.querySelector(".full-page");
const heading = document.querySelectorAll(".heading");
const slots = document.querySelectorAll(".slots");

mode.addEventListener("click", () => {
    if (mode.getAttribute("data-mode") === "light") {
        mode.innerHTML = "dark_mode";
        mode.setAttribute("data-mode", "dark");

        fullPage.style.backgroundColor = "#151515";
        heading.forEach((heading) => {
            heading.style.color = "white";
        });
        mode.style.color = "white";
        slots.forEach((slot) => {
            slot.style.backgroundColor = "#151515";
        });
    } else {
        mode.innerHTML = "light_mode";
        mode.setAttribute("data-mode", "light");

        fullPage.style.backgroundColor = "white";
        heading.forEach((heading) => {
            heading.style.color = "#262626";
        });
        mode.style.color = "black";
        slots.forEach((slot) => {
            slot.style.backgroundColor = "white";
        });
    }
});
