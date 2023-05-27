// Navegation menu carrousel

window.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const carouselItems = document.querySelectorAll(".carousel-item");

  let currentIndex = 0;

  prevButton.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = carouselItems.length - 1;
    }
    updateCarousel();
  });

  nextButton.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= carouselItems.length) {
      currentIndex = 0;
    }
    updateCarousel();
  });

  function updateCarousel() {
    carouselItems.forEach(function (item, index) {
      if (index === currentIndex) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
});

// Discounts

const price = document.querySelector("#price");
const inputCoupon = document.querySelector("#coupon-code");
const btn = document.querySelector("#calculate");
const pResult = document.querySelector("#result");

btn.addEventListener("click", calculateDiscountPrice);

const couponsList = [];
couponsList.push({
  name: "Ruben",
  discount: 30,
});
couponsList.push({
  name: "Emma",
  discount: 25,
});
couponsList.push({
  name: "Bartolo",
  discount: 20,
});

function calculateDiscountPrice() {
  const originalPrice = parseFloat(price.innerText);
  const coupon = inputCoupon.value;

  if (!price || !coupon) {
    pResult.innerText = "Please, fill the form";
    return;
  }

  let discount;

  function isCouponInArray(couponElement) {
    return couponElement.name == coupon;
  }

  const couponInArray = couponsList.find(isCouponInArray);

  if (couponInArray) {
    discount = couponInArray.discount;
  } else {
    pResult.innerText = "your coupon is invalid";
    return;
  }

  console.log({
    coupon,
    discount,
    couponInArray,
  });
  if (!originalPrice || !coupon) {
    pResult.innerText = "You need to add a coupon";
    return;
  }

  const newPrice = (originalPrice * (100 - discount)) / 100;

  pResult.innerText = "The new discounted price is $" + newPrice.toFixed(2);
}
