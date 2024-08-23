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
const NotFound = lazy(() => import('@src/screens/NotFound'));
const Layoutwithsidebar = lazy(() => import("@components/Layout/Layoutwithsidebar"));
const Profile = lazy(() => import('@src/screens/Profile'));
const MyOrders = lazy(() => import('@src/screens/MyOrders'));
const Order = lazy(() => import('@src/screens/Order'));
import ProtectedRoute from "./ProtectedRoute";
import BlockUI from "@src/containers/BlockUI";

const AppRoutes: FC = () => {
  return (
    <Suspense fallback={<BlockUI isBlocked />}>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="" element={<SignIn />} />
          <Route path="login" element={<SignIn />} />
          <Route path="home" element={<Home />} />
          <Route path="signUp" element={<SignUp />} />


          <Route element={<ProtectedRoute />}>
            <Route path="welcome" element={<Welcome />} />
            <Route path="items" element={<Items />} />
            <Route path="product" element={<Product />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="myCart" element={<MyCart />} />

            <Route path="user-profile" element={<Layoutwithsidebar />}>
              <Route path="profile" element={<Profile />} />
              <Route path="myOrders" element={<MyOrders />} />
              <Route path="order" element={<Order />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
