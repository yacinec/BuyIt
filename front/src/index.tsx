import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

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
import Navbar from "./components/Navbar";
import { PrivateRoute } from "./components/PrivateRoute";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Routes>
          {/* <Route path='/' element={<Articles />}></Route> */}
          <Route
            path='/'
            element={
              <PrivateRoute
                component={Articles}
                redirection='/signin'
                requiredAuth={true}
              />
            }
          />
          <Route
            path='/signup'
            element={
              <PrivateRoute
                component={SignUp}
                redirection='/'
                requiredAuth={false}
              />
            }
          />
          <Route
            path='/signin'
            element={
              <PrivateRoute
                component={SignIn}
                redirection='/'
                requiredAuth={false}
              />
            }
          />
          {/* <Route path='/signin' element={<SignIn />}></Route> */}
          {/* <Route path='/signup' element={<SignUp />}></Route> */}
          {/* <Route path='/orders' element={<Orders />}></Route> */}
          <Route
            path='/orders'
            element={
              <PrivateRoute
                component={Orders}
                redirection='/signin'
                requiredAuth={true}
              />
            }
          />

          {/* <Route path='/cart' element={<Carts />}></Route> */}
          <Route
            path='/cart'
            element={
              <PrivateRoute
                component={Carts}
                redirection='/signin'
                requiredAuth={true}
              />
            }
          />
          <Route
            path='/article/:id'
            element={
              <PrivateRoute
                component={ArticleDetails}
                redirection='/signin'
                requiredAuth={true}
              />
            }
          />
          {/* <Route path='/article/:id' element={<ArticleDetails />}></Route> */}
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
