import { motion } from 'framer-motion';
import React from 'react'
import { useDispatch } from 'react-redux';
import { setDecreaseItemQty, setIncreaseItemQty, setRemoveItemFromCart } from '../../redux/slice/CartSlice';


const CartItems = ({item: {id, image, desc, price, cartQuantity}}) => {

  const dispatch = useDispatch()

  const onRemoveItem = () => {
    dispatch(setRemoveItemFromCart({ id, image, desc, price, cartQuantity }));
  }

  const IncreaseQty = () => {
    dispatch(setIncreaseItemQty({ id, image, desc, price, cartQuantity }));
  }

  const DecreaseQty = () => {
    dispatch(setDecreaseItemQty({ id, image, desc, price, cartQuantity }));
  }

  return (
    <>
      <div className="flex px-3 pt-3 w-full items-center justify-between">
        {/* left */}
        <div className="flex gap-4 items-center">
          <div className="grid place-items-center bg-color-border p-2 rounded">
            <img
              src={image}
              alt={`img/cart/${id}`}
              className="w-16 md:w-28 lg:w-20 h-auto object-fill"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-color-bg">
              <h4 className="text-base font-semibold">{desc}</h4>
              <p className="text-xs md:text-sm font-medium">
                ₦{price * cartQuantity}
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <motion.button
                type="button"
                className="w-5 h-5 bg-color-border grid place-items-center text-sm text-color-text rounded"
                whileTap={{ scale: 0.9 }}
                onClick={DecreaseQty}
              >
                <i className="ri-subtract-line"></i>
              </motion.button>
              <p className="w-7 h-6 lg:h-5 bg-color-bg text-color-text grid place-items-center text-sm lg:text-xs rounded font-medium">
                {cartQuantity}
              </p>
              <motion.button
                type="button"
                className="w-5 h-5 bg-color-border grid place-items-center text-sm text-color-text rounded"
                whileTap={{ scale: 0.9 }}
                onClick={IncreaseQty}
              >
                <i className="ri-add-line"></i>
              </motion.button>
            </div>
          </div>
        </div>
        {/* right */}
        <motion.button
          type="button"
          className="w-7 h-7 bg-color-border text-color-text grid place-items-center text-base rounded"
          whileTap={{ scale: 0.9 }}
          onClick={onRemoveItem}
        >
          <i className="ri-delete-bin-line"></i>
        </motion.button>
      </div>
    </>
  );
}

export default CartItems