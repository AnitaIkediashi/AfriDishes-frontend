import { motion } from "framer-motion";
import React from "react";


const Buttons = ({ button, filter }) => {
  
  return (
    <div className="w-[80%] mx-auto flex flex-wrap gap-4">
      {button.map((catItem, i) => {
        return (
          <motion.button
            type="button"
            whileTap={{ scale: 0.9 }}
            whileHover={{ backgroundColor: "#495959" }}
            className={`grow shrink basis-16 bg-color-footer py-2 rounded-md cursor-pointer text-base text-white font-semibold `}
            onClick={() => filter(catItem)}
            key={i}
          >
            {catItem}
          </motion.button>
        );
      })}
    </div>
  );
};

export default Buttons;
