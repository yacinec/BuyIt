import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import dotenv from "dotenv-expand";
//dotenv.config();

import "./index.scss";

import { Provider } from "react-redux";
import { store } from "./redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Articles,
  Orders,
  SignIn,
  SignUp,
  Carts,
  ArticleDetails,
} from "./pages";

import { Navbar, NotAuthRoutes, AuthRoutes } from "./components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route element={<AuthRoutes />}>
            <Route path='/' element={<Articles />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/cart' element={<Carts />} />
            <Route path='/article/:id' element={<ArticleDetails />} />
          </Route>
          <Route element={<NotAuthRoutes />}>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
