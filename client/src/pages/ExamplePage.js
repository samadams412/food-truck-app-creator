import React from "react";
import Cart from "../components/Cart";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import FTFlogo from "../assets/FTFlogo.png";

const ExamplePage = () => {
  return (
    <div className="container example__container">
      <div className="hero-head">
        <a className="" href="../">
          <img
            className="example__img"
            src={FTFlogo}
            alt="your-logo-here logo"
            width={"150px"}
          ></img>
        </a>
      </div>
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};
export default ExamplePage;
