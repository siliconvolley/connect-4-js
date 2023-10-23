
const mode = document.querySelector(".mode");
const fullPage = document.querySelector(".full-page");
const heading = document.querySelectorAll(".heading");
const slots = document.querySelectorAll(".slots");

mode.addEventListener("click", () => {
    if (mode.getAttribute("data-mode") === "light") {
        mode.innerHTML = "dark_mode";
        
        fullPage.style.backgroundColor = "#151515";
        heading.forEach((heading) => {
            heading.style.color = "white";
        });
        mode.style.color = "white";
        slots.forEach((slot) => {
            if(slot.getAttribute("slot-colour") === "white"){
                slot.style.backgroundColor = "#151515";
                slot.setAttribute("slot-colour", "dark");
            }
        });
        mode.setAttribute("data-mode", "dark");
    } else {
        mode.innerHTML = "light_mode";
        
        fullPage.style.backgroundColor = "white";
        heading.forEach((heading) => {
            heading.style.color = "#262626";
        });
        mode.style.color = "black";
        slots.forEach((slot) => {
            if(slot.getAttribute("slot-colour") === "dark"){
                slot.style.backgroundColor = "white";
                slot.setAttribute("slot-colour", "white");
            }
        });
        mode.setAttribute("data-mode", "light");
    }
});
