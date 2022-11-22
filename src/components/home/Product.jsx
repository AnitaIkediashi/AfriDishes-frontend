import { motion } from 'framer-motion';
import React from 'react'
import shoppingBag from '../../images/bag.png'


const Product = () => {
  return (
    <section className="w-full bg-color-text mt-16">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-[5%] grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* left */}
        <motion.div
          className="w-full grid place-items-center mb-4"
          animate={{ x: [0, 30, 0], opacity: [0, 1] }}
          transition={{ type: "spring" }}
        >
          <div className="h-[18rem] ">
            <img
              src={shoppingBag}
              alt="shopping bag"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
        {/* right */}
        <motion.div
          className="flex flex-col gap-2 pt-3 pb-4"
          animate={{ x: [0, -40, 0], opacity: [0, 1] }}
          transition={{ type: "spring", delay: 0.5 }}
        >
          <h3 className="text-color-nav font-semibold text-xl">
            Delivery at your door step{" "}
            <i className="ri-e-bike-2-line font-medium"></i>
          </h3>
          <p className="text-color-nav font-light text-sm">
            -Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            fugit expedita temporibus officia hic aperiam aliquid fugiat minima
            laboriosam voluptatum?
          </p>
          <br />
          <p className="text-color-nav font-light text-sm">
            -Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            fugit expedita temporibus officia hic aperiam aliquid fugiat minima
            laboriosam voluptatum?
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Product