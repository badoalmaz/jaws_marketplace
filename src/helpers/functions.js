export function getCountProductsInCart() {
  const cart = JSON.parse(localStorage.getItem('cart'));
  return cart ? cart.products.length : 0;
}
