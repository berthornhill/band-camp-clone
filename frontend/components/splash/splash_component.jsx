import React from "react";
import LoginForm from "../session/login_form_container";
import { Link } from "react-router-dom";
import Features from "./features_component";
import AlbumCarousel from "./album_carousel_container";
import DotSales from "./dot_sales.jsx";
import Discover from "../discover/discover_container";

const splash = (props) => {
  return (
    <>
      <Features />
      <DotSales />
      <AlbumCarousel />
      <Discover />
    </>
  );
};

export default splash;
