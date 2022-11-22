import React from 'react'
import { Link } from 'react-router-dom';

const CheckoutSuccess = () => {
  return (
    <section className="h-[70vh] w-full">
      <div className="h-full max-w-[1280px] mx-auto flex items-center justify-center px-8 lg:px-[5%]">
        <div className="flex flex-col gap-3 text-center items-center">
          <div className="w-7 h-7 grid place-items-center bg-green-600 text-base text-white rounded-full">
            <i className="ri-check-line"></i>
          </div>
          <h2 className="text-color-text text-lg">
            Thank you for your payment.
          </h2>
          <Link to="/" className='text-color-text hover:text-color-footer ease-in duration-300 flex gap-2 hover:tracking-wider '>
            <i className="ri-arrow-left-line"></i>
            <span className='text-base'>Back to Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CheckoutSuccess