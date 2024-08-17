import React, { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@components/Layout";

const SignIn = lazy(() => import("@src/screens/SignIn"));
const SignUp = lazy(() => import("@src/screens/SignUp"));
const Home = lazy(() => import("@src/screens/Home"));
const Items = lazy(() => import("@src/screens/Items"));
const Checkout = lazy(() => import("@src/screens/Checkout"));
const MyCart = lazy(() => import("@src/screens/MyCart"));
const About = lazy(() => import("@src/screens/About"));
const Product = lazy(() => import("@src/screens/Product"));
import { Profile, MyOrders, Order} from "@src/screens";
import Layoutwithsidebar from "@components/Layout/Layoutwithsidebar";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="home" element={<Home />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="items" element={<Items />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="myCart" element={<MyCart />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />

        <Route path="user-profile" element={<Layoutwithsidebar />}>
          <Route path="profile" element={<Profile />} />
          <Route path="myOrders" element={<MyOrders />} />
          <Route path="order" element={<Order />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
