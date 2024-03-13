//products
const sliderProducts = [
  {
    imgUrl: "./assests/blazer.png",
    name: "AIR JORDAN 1",
    price: 19,
  },
  {
    imgUrl: "./assests/blazer.png",
    name: "AIR FORCE",
    price: 50,
  },
  {
    imgUrl: "./assests/blazer2.png",
    name: "AIR MAX",
    price: 110,
  },
  {
    imgUrl: "./assests/nikebr4.png",
    name: "DUNK",
    price: 200,
  },
  {
    imgUrl: "./assests/air1.png",
    name: "BLAZER",
    price: 150,
  },
];
// latestProducts
const latestProducts = [
  {
    img: "./assests/blazer2.png",
    description:
      "When both your staff and customers <br> can access the most accurate",
    price: 100,
  },
  {
    img: "./assests/air1.png",
    description:
      "Specifically, the product description <br> includes information about ",
    price: 300,
  },
  {
    img: "./assests/blazer2.png",
    description:
      "Phi starts with a rich fruity line <br> of Apricot. An all natural apricot",
    price: 120,
  },
  {
    img: "./assests/air.png",
    description:
      "Plus, an omnichannel commerce <br> platform gives you powerful insights into",
    price: 200,
  },
  {
    img: "./assests/blazer.png",
    description: "Lorem ipsum dolor sit amet <br>Porro quae assumenda enim",
    price: 100,
  },
  {
    img: "./assests/air.png",
    description: "Lorem ipsum dolor sit amet <br>Porro quae assumenda enim",
    price: 300,
  },
  {
    img: "./assests/blazer2.png",
    description:
      "Plus, an omnichannel commerce platform <br> gives you powerful insights into",
    price: 100,
  },
  {
    img: "./assests/air1.png",
    description: "Lorem ipsum dolor sit amet <br>Porro quae assumenda enim",
    price: 250,
  },
  {
    img: "./assests/blazer2.png",
    description:
      "Ready to get started with product <br> descriptions that drive sales",
    price: 100,
  },
  {
    img: "./assests/air.png",
    description:
      "Convincing someone to buy something <br>without desires is difficult,",
    price: 150,
  },
  {
    img: "./assests/blazer.png",
    description: "Lorem ipsum dolor sit amet <br>Porro quae assumenda enim",
    price: 150,
  },
  {
    img: "./assests/blazer2.png",
    description: "Lorem ipsum dolor sit amet <br>Porro quae assumenda enim",
    price: 200,
  },
  {
    img: "./assests/blazer.png",
    description:
      "Convincing someone to buy something <br>without understanding",
    price: 200,
  },
  {
    img: "./assests/air1.png",
    description:
      "Male, likely aged 25–45, cares about <br> his appearance but also",
    price: 100,
  },
  {
    img: "./assests/blazer.png",
    description: "Lorem ipsum dolor sit amet <br>Porro quae assumenda enim",
    price: 150,
  },
  {
    img: "./assests/blazer2.png",
    description:
      "When both your staff and customers <br> can access the most accurate",
    price: 300,
  },
];
//home slider
sliderProducts.forEach((product) => {
  const sliders = document.querySelector(".sliders");
  const tamplate = `
  <div class="slider" id="jordan">
                        <img src=${product.imgUrl} alt="" class="sliderimg">
                        <div class="sliderTitle">
                            <h2>${product.name}</h2>
                        </div>
                        <div class="sliderCircle"></div>
                        <span class="sliderPrice">
                            ${product.price} $
                        </span>
                        <a href="#display"><button class="sliderbtn">BUY NOW</button></a>
                    </div>
  `;
  sliders.innerHTML += tamplate;
});

/* latest products*/
const latestDrop = document.querySelector(".latest-drop");
const productEls = [];
latestProducts.forEach((products) => {
  const productElement = createProductElement(products);
  productEls.push(productElement);
  latestDrop.appendChild(productElement);
  // updat the value of cart
});

// create latest product
function createProductElement(products) {
  let Droptamplate = document.createElement("div");
  Droptamplate.innerHTML = `
  <div class="items">  
                        <div class="item-img">
                            <img src=${products.img} alt="">
                        </div>
                        <div class="item-desc">
                            <p>
                            ${products.description}
                            </p>
                        </div>
                        <div class="item-price">
                            <p>${products.price} $</p>
                        </div>
                        <button class="latest-btn">Add to cart</button>
                    </div>           
  `;
  //update the of the cart
  Droptamplate.querySelector(".latest-btn").addEventListener(
    "click",
    updateCart
  );
  return Droptamplate;
}

const cartItem = document.querySelector(".panierItem");
let cartItemCount = 0;

function updateCart(e) {
  const targetEl = e.target;

  if (targetEl.classList.contains("added")) {
    targetEl.classList.remove("added");
    targetEl.classList.add("remove");
    targetEl.innerHTML = "Add to cart";
    cartItemCount--;
  } else {
    targetEl.classList.add("added");
    targetEl.classList.remove("remove");
    targetEl.innerText = "Remove from cart";

    cartItemCount++;
  }
  cartItem.innerText = cartItemCount.toString();
}
const navItem = document.querySelectorAll(".navItem");
const sliders = document.querySelector(".sliders");
const shoeZise = document.querySelectorAll(".shoe-size");

//addd products to home slider

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
const close = document.querySelector(".close");
const payment = document.querySelector(".payment-model");
const paymentbtn = document.querySelector(".paymentbtn");
paymentbtn.addEventListener("click", () => {
  payment.style.display = "block";
});
close.addEventListener("click", () => {
  payment.style.display = "none";
});
