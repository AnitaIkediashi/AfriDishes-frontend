import React from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="w-full mt-3 h-48 bg-color-footer">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-[5%] flex flex-col gap-3 h-full items-center justify-center">
        <Link to="/">
          <h2 className="font-bold lg:text-2xl text-xl text-color-bg">
            AfriDishes
          </h2>
        </Link>

        <p className='text-sm text-color-bg font-normal '>For more information, <Link to="/contact" className='text-color-text font-semibold hover:tracking-wider duration-500'>Contact Us</Link></p>
        
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/anita-ikediashi-a61668188"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 border rounded border-color-bg text-base grid place-items-center text-color-text hover:bg-[#ffffff59] duration-300 ease-in"
          >
            <i className="ri-linkedin-fill "></i>
          </a>
          <a
            href="https://twitter.com/Anita_ikediashi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 border rounded border-color-bg text-base grid place-items-center text-color-text hover:bg-[#ffffff59] duration-300 ease-in"
          >
            <i className="ri-twitter-fill"></i>
          </a>
          <a
            href="https://github.com/AnitaIkediashi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 border rounded border-color-bg text-base grid place-items-center text-color-text hover:bg-[#ffffff59] duration-300 ease-in"
          >
            <i className="ri-github-line"></i>
          </a>
        </div>
        <small className='w-full text-end text-color-text text-sm border-t border-t-[#ffffff83] mt-2 pt-1 font-semibold'>&copy; 2022 Ikediahi Anita Ifeoma</small>
      </div>
    </footer>
  );
}

export default Footer