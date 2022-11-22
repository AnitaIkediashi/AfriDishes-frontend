import React, { useState } from 'react'
import Buttons from './Buttons'
import Category from './Category'
import {categories} from '../../data'
import { motion, AnimatePresence } from 'framer-motion'


const allCategories = ['All', ...new Set(categories.map(item => item.category))]
// console.log(allCategories);

const Categories = () => {
  
  const [menuItem, setMenuItem] = useState(categories)
  const [buttons, setButtons] = useState(allCategories)

  const filter = (catItem) => {
    const filterData = categories.filter(currentItem => currentItem.category === catItem)
    setMenuItem(filterData)
    
    if (catItem === "All") {
      setMenuItem(categories);
      return;
    }
  }

  return (
    <>
      <section className="w-full mt-16">
        <div className="max-w-[1280px] mx-auto px-8 lg:px-[5%]">
          <Buttons filter={filter} button={buttons} />

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
            <AnimatePresence>
              {menuItem?.map((item, i) => {
                return <Category {...item} key={i} />;
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Categories