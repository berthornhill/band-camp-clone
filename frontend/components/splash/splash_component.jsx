// Splash Page that renders components, features, DotSales, SplashCarousel, Discover

import React from "react";
import LoginForm from "../session/login_form_container";
import { Link } from "react-router-dom";
import Features from "./features_component";
import SplashCarousel from "./splash_carousel_container";
import DotSales from "./dot_sales.jsx";
import Discover from "../discover/discover_container";

const Splash = (props) => {
  return (
    <>
      <Features />
      <DotSales />
      <SplashCarousel />
      <Discover />
    </>
  );
};

export default Splash;
