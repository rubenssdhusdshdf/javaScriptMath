const price = document.querySelector("#price");
const inputCoupon = document.querySelector("#coupon-code");
const btn = document.querySelector("#calculate");
const pResult = document.querySelector("#result");

btn.addEventListener("click", calculateDiscountPrice);

function calculateDiscountPrice() {
  const originalPrice = parseFloat(price.innerText);
  const coupon = inputCoupon.value;

  let discount;

  if (coupon === "Ruben") {
    discount = 30;
  } else if (coupon === "Emma") {
    discount = 35;
  } else {
    pResult.innerText = "Coupon is not valid";
    return;
  }

  if (!originalPrice || !coupon) {
    pResult.innerText = "You need to add a coupon";
    return;
  }

  const newPrice = (originalPrice * (100 - discount)) / 100;

  pResult.innerText = "The new discounted price is $" + newPrice.toFixed(2);
}
