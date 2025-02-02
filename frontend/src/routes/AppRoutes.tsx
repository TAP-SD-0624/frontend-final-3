import React, { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@components/Layout";
import ProtectedRoute from "./ProtectedRoute";
import BlockUI from "@src/containers/BlockUI";
import useBreadcrumbs from "./useBreadcrumbs";
const SignIn = lazy(() => import("@src/screens/SignIn/SignIn"));
const SignUp = lazy(() => import("@src/screens/SignUp/SignUp"));
const Home = lazy(() => import("@src/screens/Home"));
const Items = lazy(() => import("@src/screens/Items"));
const Checkout = lazy(() => import("@src/screens/Checkout"));
const MyCart = lazy(() => import("@src/screens/MyCart"));
const About = lazy(() => import("@src/screens/About"));
const Product = lazy(() => import("@src/screens/Product"));
const NotFound = lazy(() => import('@src/screens/NotFound'));
const Layoutwithsidebar = lazy(() => import("@components/Layout/Layoutwithsidebar"));
const Profile = lazy(() => import('@src/screens/Profile'));
const MyOrders = lazy(() => import('@src/screens/MyOrders'));
const Order = lazy(() => import('@src/screens/Order'));
const Search = lazy(() => import('@src/screens/Search'));

const AppRoutes: FC = () => {
  const { breadcrumbs } = useBreadcrumbs();

  return (
    <Suspense fallback={<BlockUI isBlocked />}>
      <Routes>
        <Route path="/" element={<Layout breadcrumbs={breadcrumbs} />}>
          <Route path="" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="login" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="home" element={<Home />} />
          <Route path="items" element={<Items />} />
          <Route path="product" element={<Product />} />
          <Route path="search" element={<Search />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="checkout" element={<Checkout />} />
            <Route path="myCart" element={<MyCart />} />
            <Route path="user-profile" element={<Layoutwithsidebar />}>
              <Route path="" element={<Profile />} />
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
