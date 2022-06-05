import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import "./index.scss";

import { Provider } from "react-redux";
import { store } from "./redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Articles, Orders, SignIn, SignUp, Cart } from "./pages";
import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Articles />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/orders' element={<Orders />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
