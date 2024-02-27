const navItem = document.querySelectorAll(".navItem");
const sliders = document.querySelector(".sliders");
const shoeZise = document.querySelectorAll(".shoe-size");

navItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    sliders.style.transform = `translateX(${-100 * index}vw)`;
  });
});

shoeZise.forEach((shoe, index) => {
  shoe.addEventListener("click", () => {
    shoe.style.background = "black";
    shoe.style.color = "white";
    shoe.addEventListener("click", () => {
      shoe.style.background = "white";
      shoe.style.color = "black";
    });
  });
});
