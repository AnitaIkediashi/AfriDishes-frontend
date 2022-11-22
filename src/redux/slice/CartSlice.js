import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemsToCart: (state, action) => {
      //to avoid data repetition when add to cart button is clicked
      //by using findIndex() to get the specific index in the array
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success("Item QTY increased");
      } else {
        const temp = { ...action.payload, cartQuantity: 1 }; //making copies of the action.payload
        // add cartQuantity to the json object
        //to push new items to the [] empty array
        state.cartItems.push(temp);
        toast.success(`${action.payload.desc} added to cart`);
      }
      //save the items to local storage
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      ); //using filter()
      state.cartItems = removeItem;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      toast.success(`${action.payload.desc} removed from cart`);

      // console.log(action.payload)
    },
    setIncreaseItemQty: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success("Item QTY increased");
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setDecreaseItemQty: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.success("Item QTY decreased");
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setClearCartItems: (state, action) => {
      state.cartItems = []; //back to an empty array
      toast.success("Cart items cleared");
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setGetTotals: (state, action) => {
      let { totalAmount, totalQty } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          //assign two props to the callback function
          const { price, cartQuantity } = cartItem; //draft state
          const totalPrice = price * cartQuantity;

          cartTotal.totalAmount += totalPrice; //draft state
          cartTotal.totalQty += cartQuantity;

          return cartTotal;
        },
        {
          totalAmount: 0, //initial values for the draft states
          totalQty: 0,
        }
      );

      state.cartTotalAmount = totalAmount; //updating the global state
      state.cartTotalQuantity = totalQty;
    },
  },
});

export const {
  setOpenCart,
  setCloseCart,
  setAddItemsToCart,
  setRemoveItemFromCart,
  setIncreaseItemQty,
  setDecreaseItemQty,
  setClearCartItems,
  setGetTotals
} = CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartTotalAmount = (state) => state.cart.cartTotalAmount
export const selectCartTotalQty = (state) => state.cart.cartTotalQuantity

export default CartSlice.reducer;
