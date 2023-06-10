import React, { useState, useEffect, createContext } from "react";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import ErrorPage from "./Components/ErrorPage";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ProductCard from "./Components/ProductCard";
import ClipLoader from "react-spinners/ClipLoader";
import Contact from "./Components/Contact";
import Model from "./Components/Model";
import TodoList from "./Components/TodoList";
import Profile from "./Components/Profile";
import News from "./Components/News";
import AddToCart from "./Components/AddToCart";
import Parent from "./Components/PracticeReact/Parent";
import Users from "./Components/Users";

function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, []);
  document.body.style.backgroundColor = 'white';
  return (

    <>
        <Navbar />

        {
          loading ? <div className="flex justify-center items-center mt-60">
            <ClipLoader color="#140e0e" loading={loading} size={80} />
          </div>
            :
            <>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/users" element={<Users />} />
                <Route path="/news" element={<News />} />
                <Route path="/cart" element={<AddToCart />} />
                <Route path="/home" element={<Home />} />
                <Route path="/*" element={<ErrorPage />} />
                <Route path="/errorPage" element={<ErrorPage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/products" element={<ProductCard />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/model" element={<Model />} />
                <Route path="/todo" element={<TodoList />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/prac" element={<Parent />} />
              </Routes>
              <ToastContainer />
            </>
        }
    </>
  );
}

export default App;
