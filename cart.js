const CartItems = document.querySelector(".cart-items");

let cartTotal = 0;
function displayCartItems() {
  const items = JSON.parse(localStorage.getItem("cart"));
  items.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
    <p class="cart-id">${item.id}</p>
              <p class="cart-title">${item.title}</p>
              <img src="${item.images}" alt="${item.title}" class="cart-img" />
              <p class="cart-price">${item.price}</p>
              <p class="cart-delete">Delete</p>
    `;
    CartItems.appendChild(cartItem);
  });
}

displayCartItems();