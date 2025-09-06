const allProducts = document.querySelectorAll(".product");
const shippingCost = document.querySelector(".shipping");
const total = document.querySelector(".total");
const allCounters = document.querySelectorAll(".count");

// Initialize shipping cost, total amounts and counters to 0
shippingCost.textContent = "$19.00";
total.textContent = "$0.00";

allCounters.forEach((count) => {
  count.textContent = "0";
});

// Handle counter buttons
allProducts.forEach((product) => {
  const incrementBtn = product.querySelector(".increment-btn");
  const decrementBtn = product.querySelector(".decrement-btn");

  incrementBtn.addEventListener("click", () => {
    handleCounterButtons(product, "increment");
  });

  decrementBtn.addEventListener("click", () => {
    handleCounterButtons(product, "decrement");
  });
});

function handleCounterButtons(product, action) {
  const countSpan = product.querySelector(".count");
  let currentCount = parseInt(countSpan.textContent);

  if (action === "increment") {
    currentCount += 1;
  } else if (action === "decrement") {
    if (currentCount > 0) {
      currentCount -= 1;
    }
  }
  countSpan.textContent = currentCount;

  calculateTotal();
}
// Calculate total price with shipping cost
function calculateTotal() {
  let cartTotal = 0;
  const shipping = parseFloat(shippingCost.textContent.replace("$", ""));

  allProducts.forEach((product) => {
    const quantity = parseInt(product.querySelector(".count").textContent);
    const price = parseFloat(
      product.querySelector(".sale-price").textContent.replace("$", "")
    );

    cartTotal += quantity * price;
  });

  if (cartTotal) {
    const finalTotal = cartTotal + shipping;
    total.textContent = `$${finalTotal.toFixed(2)}`;
  } else {
    total.textContent = "$0.00";
  }
}
calculateTotal();
