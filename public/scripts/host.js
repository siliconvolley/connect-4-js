
const host = document.querySelector("#host");
const welcomeButtons = document.querySelector(".welcome-wrapper");
const upperHeading = document.querySelector('.upper');
const lowerHeading = document.querySelector('.lower');

host.addEventListener("click", () => {
    const board = document.querySelector('.board');
    
    lowerHeading.animate ([
        { transform: 'scale(1) translateY(0)' },
        { transform: 'scale(0.5) translateY(-28vh)' }
    ], {
        duration: 350,
        iterations: 1,
        easing: 'ease-in-out'
    });

    board.animate([
        { transform: 'scale(0)' },
        { transform: 'scale(0.9)' },
        { visibility: 'hidden' }
    ], {
        duration: 500,
        iterations: 1,
        easing: 'ease-in-out'
    });

    board.style.visibility = "visible";
    welcomeButtons.style.visibility = "hidden";
    upperHeading.style.animation = "mistify 350ms forwards";
    lowerHeading.style.transform = "scale(0.5) translateY(-28vh)";
});
