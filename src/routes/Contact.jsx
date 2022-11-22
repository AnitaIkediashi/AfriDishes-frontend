import { motion } from 'framer-motion';
import React from 'react'
import contactImage from '../images/contact.png'


const Contact = () => {
  return (
    <section className="w-full ">
      <div className="lg:w-[70%] w-full mx-auto min-h-screen px-8 grid grid-cols-1 lg:grid-cols-2 items-center justify-center lg:gap-4  pb-12 pt-40 lg:pt-32 gap-8 overflow-y-hidden">
        {/* left */}
        <motion.div
          className="md:grid place-items-center hidden w-full h-full "
          animate={{ y: [0, 20, 0], opacity: [0, 1] }}
          transition={{ type: "spring" }}
        >
          {/* image */}
          <div className="h-72 rounded shadow-lg">
            <img src={contactImage} alt="" className="object-cover h-full " />
          </div>
        </motion.div>
        {/* right */}
        <motion.div
          className="shadow-lg p-4 rounded border border-color-bg w-full"
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0], opacity: [0, 1] }}
          transition={{ type: "spring" }}
        >
          <h2 className="font-bold text-2xl mb-6 text-color-text">
            Contact Us via
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <i className="ri-map-pin-line w-7 h-7 bg-color-footer rounded grid place-items-center text-sm text-color-bg"></i>
              <address className="text-color-text text-base">
                Yaba Lagos, Nigeria
              </address>
            </div>
            <div className="flex gap-3 items-center">
              <i className="ri-mail-line w-7 h-7 bg-color-footer rounded grid place-items-center text-sm text-color-bg"></i>
              <p className="text-color-text text-base">afridishes@gmail.com</p>
            </div>
            <div className="flex gap-3 items-center">
              <i className="ri-phone-line w-7 h-7 bg-color-footer rounded grid place-items-center text-sm text-color-bg"></i>
              <p className="text-color-text text-base">
                +1234789789, +2347897980
              </p>
            </div>
          </div>
        </motion.div>

        <div className="block md:w-[40rem] overflow-y-hidden mt-4 lg:mt-8">
          <h3 className="text-color-text font-bold text-xl mb-2">
            Get in touch with us
          </h3>
          <p className="text-color-text text-sm md:text-base mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            fuga quae eos quisquam ea delectus.
          </p>

          <form className="flex flex-col gap-4 ">
            <input
              type="text"
              placeholder="Name"
              className="h-12 pl-2 bg-transparent outline-none border-2 border-color-border placeholder-color-text caret-color-text placeholder:text-sm text-base text-color-text focus:bg-[#cde4e5f6] placeholder-opacity-50 rounded duration-200 ease-in"
            />
            <input
              type="email"
              placeholder="Email"
              className="h-12 pl-2 bg-transparent outline-none border-2 border-color-border placeholder-color-text caret-color-text placeholder:text-sm text-base text-color-text focus:bg-[#cde4e5f6] placeholder-opacity-50 rounded duration-200 ease-in"
            />
            <textarea
              placeholder="Message"
              className="h-28 pt-2 pl-2 bg-transparent outline-none border-2 border-color-border placeholder-color-text caret-color-text placeholder:text-sm text-base text-color-text focus:bg-[#cde4e5f6] placeholder-opacity-50 rounded duration-200 ease-in overflow-y-auto"
            ></textarea>
          </form>

          <motion.button className='inline-block mt-4 px-7 py-3 bg-color-footer rounded text-white font-semibold cursor-pointer' whileTap={{scale: 1.1}}>Submit</motion.button>
        </div>
      </div>
    </section>
  );
}

export default Contact