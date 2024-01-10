const navItem = document.querySelectorAll(".navItem")
const sliders = document.querySelector(".sliders")

navItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        sliders.style.transform = `translateX(${-100 * index}vw)`;
    });
});