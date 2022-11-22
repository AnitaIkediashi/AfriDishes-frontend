import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../images/serving-dish.png";
import { motion } from "framer-motion";
import { CartCount, CartEmpty, CartItems } from "../cart";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartState,
  selectCartTotalAmount,
  selectCartTotalQty,
  setClearCartItems,
  setCloseCart,
  setGetTotals,
  setOpenCart,
} from "../../redux/slice/CartSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import { removeActiveUser, selectIsLoggedIn, setActiveUser } from "../../redux/slice/AuthSlice";
import ShowOnLogin, { ShowOnLogout } from "../hiddenlinks/HiddenLinks";

const Navbar = () => {
  const [navLinks, setNavLinks] = useState(false);
  const [displayName, setDisplayName] = useState("");

  const openNav = () => setNavLinks(!navLinks);

  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotalAmount);
  const totalQty = useSelector(selectCartTotalQty);
  const isLoggedIn = useSelector(selectIsLoggedIn)

  const navigate = useNavigate();

  const handleCheckout = async () => {
    fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cartItems, //sending to the backend
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        return (window.location = url);
      })
      .catch((e) => console.error(e.error));
  };

  // console.log(cartItems);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  //manage users after logged in by displaying the user name
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user)
        if (user.displayName == null) {
          const tempName = user.email.substring(0, user.email.indexOf("@"));
          const newName = tempName.charAt(0).toUpperCase() + tempName.slice(1);
          setDisplayName(newName);
        } else {
          setDisplayName(user.displayName); //from the user json
        }
        dispatch(
          setActiveUser({
            email: user.email, //action.payload
            userName: user.displayName ? user.displayName : displayName, //action.payload
            userID: user.uid, //action.payload
          })
        );
      } else {
        setDisplayName("");
        dispatch(removeActiveUser());
      }
    });
  }, [dispatch, displayName]);

  const openCart = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  const closeCart = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };

  const clearCartItems = () => {
    dispatch(setClearCartItems());
  };

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout Successfully");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <header className="h-20 w-full fixed top-0 bg-color-nav z-[50] left-0 shadow-md">
        <nav className="max-w-[1280px] mx-auto h-full flex items-center justify-between px-8 lg:px-[5%]">
          {/* logo */}
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-xl sm:text-2xl text-color-footer font-bold">
                Afri
                <span className="font-semibold text-color-text">Dishes</span>
              </h1>
            </Link>
            <img src={logo} alt="logo" />
          </div>
          {/* for desktop */}
          <div className="lg:flex items-center gap-8 hidden">
            {/* search */}
            <div className="w-72 h-9 border-2 border-color-border rounded-md relative">
              <input
                type="text"
                placeholder="Search Here..."
                className="w-full h-full bg-transparent pl-2 caret-color-text text-color-text text-sm placeholder-color-text placeholder-opacity-40 placeholder:text-sm focus:bg-[#cde4e5f6] outline-none"
              />
              <span className="absolute top-1 right-1 text-color-text">
                <i className="ri-search-line"></i>
              </span>
            </div>

            {/* first navlinks for desktop  */}
            <ul className="flex items-center gap-6">
              <li className="mx-4">
                <NavLink
                  to="/"
                  className="text-color-text font-medium text-lg hover:text-color-footer duration-150"
                >
                  Home
                </NavLink>
              </li>
              <ShowOnLogout>
                <li className="mr-4">
                  <NavLink
                    to="/login"
                    className="text-color-text font-medium text-lg hover:text-color-footer duration-150"
                  >
                    Login
                  </NavLink>
                </li>
              </ShowOnLogout>
              <ShowOnLogin>
                <li className="mr-4">
                  <a
                    href="/"
                    className="text-color-text font-medium text-lg hover:text-color-footer duration-150"
                  >
                    <i className="ri-user-line"></i>
                    Hi, {displayName}
                  </a>
                </li>
              </ShowOnLogin>
              <ShowOnLogin>
                <li>
                  <NavLink
                    to="/"
                    className="text-color-text font-medium text-lg hover:text-color-footer duration-150"
                    onClick={logoutUser}
                  >
                    Logout
                  </NavLink>
                </li>
              </ShowOnLogin>
            </ul>
          </div>

          {/* cart and hamburger menu */}
          <div className="flex gap-4">
            {/* cart */}
            <motion.div
              className="text-xl text-color-text relative pr-4 cursor-pointer"
              whileTap={{ scale: 0.9 }}
              onClick={openCart}
            >
              <i className="ri-shopping-cart-2-line"></i>
              <div className="bg-color-footer w-4 h-4 flex items-center justify-center rounded-full absolute top-0 right-2">
                <small className="text-xs text-color-bg">{totalQty}</small>
              </div>
            </motion.div>

            {/* hamburger menu */}
            <motion.div
              className="text-xl md:text-2xl text-color-text cursor-pointer lg:hidden "
              onClick={openNav}
              whileTap={{ scale: 0.9 }}
            >
              <i className="ri-menu-line"></i>
            </motion.div>
          </div>
        </nav>
      </header>
      {/* second links for mobile devices */}
      <div className={navLinks ? "navbar active" : "navbar"}>
        <ul>
          <li className="mb-4">
            <NavLink
              to="/"
              className="text-white text-base font-semibold hover:border-b hover:border-b-color-footer"
              onClick={() => setNavLinks(true)}
            >
              Home
            </NavLink>
          </li>
          <ShowOnLogout>
            <li className="mb-4">
              <NavLink
                to="/login"
                className="text-white text-base font-semibold"
                onClick={() => setNavLinks(true)}
              >
                Login
              </NavLink>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li className="mb-4">
              <a href="/" className="text-white text-base font-semibold">
                <i className="ri-user-line"></i>
                Hi, {displayName}
              </a>
            </li>
          </ShowOnLogin>
          <ShowOnLogin>
            <li>
              <NavLink
                to="/"
                className="text-white text-base font-semibold"
                onClick={logoutUser}
              >
                Logout
              </NavLink>
            </li>
          </ShowOnLogin>
        </ul>
        {/* search */}
        <div className="w-60 border border-white h-9 outline-none rounded-md relative">
          <input
            type="text"
            placeholder="Search here..."
            className="bg-transparent w-full h-full caret-white text-white placeholder-color-bg placeholder:text-sm text-base pl-2 focus:bg-color-bg focus:text-color-text outline-none"
          />
          <span className="absolute top-1 right-1 text-white">
            <i className="ri-search-line"></i>
          </span>
        </div>
        {/* closebtn */}
        <motion.div
          className="close-btn"
          onClick={openNav}
          whileTap={{ rotate: 360 }}
        >
          <i className="ri-close-fill"></i>
        </motion.div>
      </div>

      {/* cart wrapper */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 w-full h-screen bg-[rgba(0,0,0,0.3)] opacity-100 z-[300] duration-300 ease-in ${
          ifCartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }`}
      >
        <div className="w-full h-screen max-w-xl bg-color-text absolute right-0 overflow-y-hidden">
          <CartCount
            closeCart={closeCart}
            clearCartItems={clearCartItems}
            totalQty={totalQty}
          />
          {cartItems?.length === 0 ? (
            <CartEmpty closeCart={closeCart} />
          ) : (
            <div>
              <div className="overflow-y-scroll h-[80vh] scroll-hidden">
                {cartItems?.map((item, i) => {
                  return <CartItems key={i} item={item} />;
                })}
              </div>
              <div className="px-3 pt-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-color-bg">Total:</h3>
                  <span className="font-medium text-color-bg">
                    ₦{totalAmount}
                  </span>
                </div>

                {isLoggedIn ? (
                  <div className="flex items-center justify-center ">
                    <motion.button
                      className="mt-1 w-full py-2 bg-color-border text-base font-semibold text-color-text rounded"
                      whileTap={{ scale: 0.9 }}
                      onClick={handleCheckout}
                    >
                      Checkout
                    </motion.button>
                  </div>
                ) : (
                  <div className="flex items-center justify-center ">
                    <motion.button
                      className="mt-1 w-full py-2 bg-color-border text-base font-semibold text-color-text rounded"
                      whileTap={{ scale: 0.9 }}
                      onClick={() => navigate("/login")}
                    >
                      Checkout
                    </motion.button>
                  </div>
                )}

                {/* <div className="flex items-center justify-center ">
                  <motion.button
                    className="mt-1 w-full py-2 bg-color-border text-base font-semibold text-color-text rounded"
                    whileTap={{ scale: 0.9 }}
                    onClick={handleCheckout}
                  >
                    Checkout
                  </motion.button>
                </div> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
