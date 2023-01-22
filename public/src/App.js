import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Secret from './pages/Secret';
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Register/>}>  </Route>
        <Route exact path="/login" element={<Login/>}>  </Route>
        <Route exact path="/" element={<Secret/>}>  </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App