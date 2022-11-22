import { motion } from 'framer-motion';
import React from 'react'


const CartCount = ({ closeCart, clearCartItems, totalQty }) => {
  return (
    <div className="h-12 flex items-center justify-between bg-color-bg px-3 sticky top-0 left-0">
      <div className="flex items-center gap-2">
        <motion.button
          type="button"
          className="w-6 h-6 grid place-items-center text-sm bg-color-text rounded cursor-pointer text-white"
          whileTap={{ scale: 0.9 }}
          onClick={closeCart}
        >
          <i className="ri-arrow-left-s-line"></i>
        </motion.button>
        <h2 className="text-color-text text-lg font-medium">
          Your Cart{" "}
          <span className="text-sm font-normal">({totalQty} Items)</span>
        </h2>
      </div>
      <motion.div
        className="w-7 h-7 grid place-items-center text-base bg-color-text rounded cursor-pointer text-white"
        whileTap={{ scale: 0.9 }}
        onClick={clearCartItems}
      >
        <i className="ri-close-line"></i>
      </motion.div>
    </div>
  );
};

export default CartCount