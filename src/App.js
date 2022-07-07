import React from "react";
import CategoryItem from "./components/category-item/category-item.component.js";
import Directory from "./components/directory/directory.component.js";
import Home from "./routes/home/home.component.js";
import {Routes,Route} from 'react-router-dom'
import Navigation from "./routes/Navigation/navigation.component.js";
import SignIn from "./routes/sign-in/sign-in.component.js";



const Shop=()=>{
  return
   <h1>I am the shop </h1>
};


function App() { 
  return (
  <Routes > 
    <Route path="/"element={<Navigation />}> 
    <Route index element={<Home />} />
    <Route path="shop" element={<Shop />} />
    <Route path="sign-in" element={<SignIn />} />
    </Route>
</Routes>
  );
  
};

export default App;
