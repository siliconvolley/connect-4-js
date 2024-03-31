const mode = document.querySelector(".mode");
const fullPage = document.querySelector(".full-page");
const heading = document.querySelectorAll(".heading");
const slots = document.querySelectorAll(".slots");
const board = document.querySelector(".board");

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
        board.style.border = "white 10px solid";

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
        board.style.border = "lightgrey 10px solid";
        
        mode.setAttribute("data-mode", "light");
    }
});
