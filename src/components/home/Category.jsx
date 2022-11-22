import { motion } from 'framer-motion';
import React from 'react'
import { useDispatch } from 'react-redux';
import { setAddItemsToCart } from '../../redux/slice/CartSlice';

const Category = ({id, image, desc, price, button}) => {
  
  const dispatch = useDispatch()

  const AddItemsToCart = () => {
    const item = {id, image, desc, price}
    dispatch(setAddItemsToCart(item))
  }
  

  return (
    <motion.article
      className="p-4 border rounded-md border-color-border cursor-pointer hover:shadow-lg duration-300 ease-in "
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeIn", duration: 0.5 }}
      key={id}
    >
      <div className="overflow-hidden w-40 mx-auto h-40">
        <img
          src={image}
          alt={desc}
          className="w-full object-cover h-full hover:scale-110 duration-300 ease-in"
        />
      </div>
      <h4 className="my-3 text-center text-color-text font-bold text-lg">
        {desc}
      </h4>
      <p className="mb-3 text-center text-color-text font-normal text-base">
        ₦{price}
      </p>
      <div className="w-full flex justify-center">
        <motion.button
          type="button"
          className="text-center px-6 py-3 bg-color-footer w-fit text-sm font-bold text-white rounded-md hover:tracking-wide duration-300"
          whileTap={{ scale: 0.9 }}
          onClick={() => AddItemsToCart()}
        >
          {button}
        </motion.button>
      </div>
    </motion.article>
  );
}

export default Category