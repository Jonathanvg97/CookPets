import Swal from 'sweetalert2'

const Reducer = (cart = [], action) => {
  if (action.type === "ADD") {
    let tempcart = cart.filter((product) => product.id === action.payload.id);
    if (tempcart < 1) {
      return Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Producto agregado',
        showConfirmButton: false,
        timer: 1500
      }), [...cart, action.payload];
    } else {
      return cart;
    }
  }
  if (action.type === "REMOVE") {
    return cart.filter((product) => product.id !== action.payload.id);
  }
  if (action.type === "INCREASE") {
    let tempcart = cart.map((product) => {
      if (product.id === action.payload.id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    return tempcart;
  }
  if (action.type === "DECREASE") {
    let tempcart = cart.map((product) => {
      if (product.id === action.payload.id) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    return tempcart;
  }
  return cart;
};
export default Reducer;