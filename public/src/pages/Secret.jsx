import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {useCookies} from "react-cookie"
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";


const Secret = () => {
  const navigate = useNavigate();
  
  const [cookie, setCookie, removeCookie] = useCookies([]);
  useEffect(() => {
    const varifyUser = async () => {
      if (!cookie.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post("http://localhost:4000",
          {},
          { withCredentials: true });
        if (!data.status) {
          removeCookie("jwt");
          navigate("/login");
        } else toast(`HI ${data.user}`, { theme: "dark" });
      }
    };
    varifyUser();
  }, [cookie, navigate, removeCookie]);

  const logOut = () => {
    removeCookie("jwt")
    navigate("/login");
  }
  return (
    <>
    <div className='private'>
      <h1>Welcome TO home page </h1>
      <button onClick={logOut}>Log Out</button>
      </div>
      <ToastContainer/>
    </>
    
  )
}

export default Secret