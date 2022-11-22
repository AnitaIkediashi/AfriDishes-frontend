import React, { useState } from 'react'
import registerImg from '../images/register.png'
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import Loader from '../components/Loader';

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setCPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      toast.error('Password do not match')
    }
    setIsLoading(true)

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        // console.log(user);
        setIsLoading(false);
        toast.success("Registered successfully");
        navigate('/login')
        setEmail('')
        setPassword('')
        setCPassword('')
      })
      .catch((error) => {
        setIsLoading(false)
        toast.error(error.message)
      });

    
  };

  return (
    <>
      {isLoading && <Loader />}
      {/* wrapper */}
      <section className="w-full ">
        <div className="lg:w-[70%] w-full  mx-auto min-h-screen px-8 grid grid-cols-1 lg:grid-cols-2 items-center justify-center lg:gap-4 pt-16 md:pt-40 pb-12 lg:pt-20 gap-8 overflow-y-hidden">
          {/* left */}
          <motion.div
            className="md:grid place-items-center hidden w-full h-full"
            initial={{ y: 0 }}
            animate={{ y: [0, 20, 0], opacity: [0, 1] }}
            transition={{ type: "spring" }}
          >
            {/* image */}
            <div className="h-80 rounded shadow-lg">
              <img src={registerImg} alt="" className="object-cover h-full" />
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
              Register Here!
            </h2>
            <form onSubmit={registerUser} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="h-12 pl-2 bg-transparent outline-none border-2 border-color-border placeholder-color-text caret-color-text placeholder:text-sm text-base text-color-text focus:bg-[#cde4e5f6] placeholder-opacity-50 rounded duration-200 ease-in"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="password"
                className="h-12 pl-2 bg-transparent outline-none border-2 border-color-border placeholder-color-text caret-color-text placeholder:text-sm text-base text-color-text focus:bg-[#cde4e5f6] placeholder-opacity-50 rounded duration-200 ease-in"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="confirm password"
                className="h-12 pl-2 bg-transparent outline-none border-2 border-color-border placeholder-color-text caret-color-text placeholder:text-sm text-base text-color-text focus:bg-[#cde4e5f6] placeholder-opacity-50 rounded duration-200 ease-in"
                required
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
              />
              <motion.button type='submit'
                className="text-white bg-color-footer inline-block my-4 py-3 rounded font-bold cursor-pointer"
                whileTap={{ scale: 0.9 }}
              >
                Register
              </motion.button>
            </form>
            <p className="pt-4  text-color-text text-sm text-center">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-color-footer font-semibold hover:tracking-wide duration-300 ease-linear"
              >
                Login
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Register