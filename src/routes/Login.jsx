import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import googleImg from '../images/google.png'
import loginImg from '../images/login.png'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/config';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const provider = new GoogleAuthProvider();
  const navigate = useNavigate()

  const loginUser = (e) => {
    e.preventDefault()
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        // console.log(user);
        setIsLoading(false);
        toast.success("Login successfully");
        navigate("/");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  }

  const loginUserWithGoogle = (e) => {
    e.preventDefault()
    
    signInWithPopup(auth, provider)
      .then((result) => {
        // const user = result.user;
        // console.log(user);
        toast.success('Login successfully')
        navigate('/')
      })
      .catch((error) => {
        toast.error(error.message)
      });
  }

  return (
    <>
      {isLoading && <Loader />}
      <section className=" w-full">
        <div className="lg:w-[70%] w-full mx-auto min-h-screen px-8 grid grid-cols-1 lg:grid-cols-2 items-center justify-center lg:gap-4  gap-8 overflow-y-hidden pt-16 pb-12 md:pt-40 lg:pt-20">
          {/* left */}
          <motion.div
            className="shadow-lg p-4 rounded border border-color-bg w-full"
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0], opacity: [0, 1] }}
            transition={{ type: "spring" }}
          >
            <h2 className="font-bold text-2xl mb-6 text-color-text">
              Welcome User!
            </h2>
            <form className="flex flex-col gap-4" onSubmit={loginUser}>
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

              <motion.button
                type="submit"
                className="text-white bg-color-footer inline-block my-4 py-3 rounded font-bold cursor-pointer"
                whileTap={{ scale: 0.9 }}
              >
                Login
              </motion.button>
            </form>
            <motion.button
              className="text-color-text border-color-footer border-2 my-4 py-3 rounded font-bold cursor-pointer flex items-center gap-3 justify-center w-full"
              whileTap={{ scale: 0.9 }}
              onClick={loginUserWithGoogle}
            >
              <img src={googleImg} alt="google logo" />
              <span>Login with Google</span>
            </motion.button>
            <p className="pt-4  text-color-text text-sm text-center">
              You don't have an account?{" "}
              <Link
                to="/register"
                className="text-color-footer font-semibold hover:tracking-wide duration-300 ease-linear"
              >
                Register
              </Link>
            </p>
          </motion.div>

          {/* right */}
          <motion.div
            className="md:grid place-items-center hidden w-full h-full md:row-[1] lg:col-[2]"
            initial={{ y: 0 }}
            animate={{ y: [0, 20, 0], opacity: [0, 1] }}
            transition={{ type: "spring" }}
          >
            {/* image */}
            <div className="h-80 rounded shadow-lg ">
              <img src={loginImg} alt="" className="object-cover h-full" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Login