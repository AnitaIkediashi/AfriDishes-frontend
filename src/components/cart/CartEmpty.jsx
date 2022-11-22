import { motion } from "framer-motion";
import React from "react";
import cartImage from "../../images/cart-empty.png";

const CartEmpty = ({ closeCart }) => {
  return (
    <div className=" h-screen flex flex-col items-center justify-center gap-6">
      <img
        src={cartImage}
        alt="empty cart"
        className="w-40 h-auto sm:w-28 lg:w-36"
      />
      <h3 className="text-color-bg font-semibold text-sm md:text-base">No cart Items added</h3>
      <motion.button
        type="button"
        className="bg-color-bg flex items-center gap-2 px-7 py-3 rounded text-color-text"
        whileTap={{ scale: 0.9 }}
        onClick={closeCart}
      >
        <i className="ri-arrow-left-line"></i>
        <span className="font-bold">Continue shopping</span>
      </motion.button>
    </div>
  );
};

export default CartEmpty;
