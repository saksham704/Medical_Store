let cartCount = 0;
let cartItems = [];

function addToCart(productName, price) {
  cartItems.push({ productName, price });
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
  alert(productName + " added to cart!");
}
