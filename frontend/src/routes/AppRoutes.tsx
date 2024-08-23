import React, { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@components/Layout";

import SignIn from "@src/screens/SignIn/SignIn";
import SignUp from "@src/screens/SignUp/SignUp";
const Home = lazy(() => import("@src/screens/Home"));
const Items = lazy(() => import("@src/screens/Items"));
const Checkout = lazy(() => import("@src/screens/Checkout"));
const MyCart = lazy(() => import("@src/screens/MyCart"));
const About = lazy(() => import("@src/screens/About"));
const Product = lazy(() => import("@src/screens/Product"));
const Welcome = lazy(() => import("@src/screens/Welcome"));
const AccessDenied = lazy(() => import("@src/screens/AccessDenied"));
const NotFound = lazy(() => import('@src/screens/NotFound'));

import { Profile, MyOrders, Order } from "@src/screens";
import Layoutwithsidebar from "@components/Layout/Layoutwithsidebar";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="about" element={<About />} />
        <Route path="access-denied" element={<AccessDenied />} />
        <Route path="*" element={<NotFound />} />
        <Route path="" element={<SignIn />} />
        <Route  path="login" element={<SignIn />} />
        <Route path="home" element={<Home />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="items" element={<Items />} />
        <Route path="product" element={<Product />} />

        {/* <Route element={<ProtectedRoute />}> */}
          <Route path="welcome" element={<Welcome />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="myCart" element={<MyCart />} />

          <Route path="user-profile" element={<Layoutwithsidebar />}>
            <Route path="profile" element={<Profile />} />
            <Route path="myOrders" element={<MyOrders />} />
            <Route path="order" element={<Order />} />
          {/* </Route> */}
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
