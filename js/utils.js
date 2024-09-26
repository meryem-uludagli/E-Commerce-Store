export function saveToLocalStorage(cart) {
  // * Localstorage a cart verisini kaydet
  localStorage.setItem("cart", JSON.stringify(cart));
}

export const getFromLocalStorage = () => {
  const data = localStorage.getItem("cart");
  return data ? JSON.parse(data) : [];
};

export const updateCartIcon = (cart) => {
  const cartIcon = document.querySelector(".cart-icon");
  const i = document.querySelector(".bxs-shopping-bag");
  let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  i.setAttribute("data-quantity", totalQuantity);
};

export function calculateCartTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
