import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components/layout";
import { CheckoutCancel, CheckoutSuccess, Contact, Home, Login, Register } from "./routes";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
        <Route path="/checkout-cancel" element={<CheckoutCancel />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
