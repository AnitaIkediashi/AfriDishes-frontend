import React from 'react'
import ReactDOM from 'react-dom'
import loaderImg from '../images/shopping-cart-shopping.gif'

const Loader = () => {
  return ReactDOM.createPortal (
    <section className='fixed top-0 bottom-0 left-0 right-0 h-screen w-screen z-[350] bg-[rgba(0,0,0,0.3)]'>
      <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[400]'>
        <img src={loaderImg} alt="loading..." className='w-24 h-24 object-contain' />
      </div>
    </section>,
    document.getElementById('loader')
  )
}

export default Loader