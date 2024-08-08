import React, { FC, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@components/Layout";
const SignIn = lazy(() => import("@src/screens/SignIn/SignIn"));
const SignUp = lazy(() => import("@src/screens/SignUp"));
const Home = lazy(() => import("@src/screens/Home"));

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="home" element={<Home />} />
        <Route path="signUp" element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
