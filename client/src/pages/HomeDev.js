import React from "react";
import FTFlogo from "../assets/FTFlogo.png";
import "../index.css";
const HomeDev = () => {
  return (
    <div className="">
      <section className="hero home-dev__hero is-small is-bold">
        <div className="hero-head">
          <a className="home-dev__logo" href="../">
            <img src={FTFlogo} alt="food-truck-fix logo" width={"300px"}></img>
          </a>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="home-dev__title">
              Looking to take your business to the next level?
            </h1>
            <h2 className="home-dev__subtitle">
              Setup your very own mobile app with Food Truck Fix.
            </h2>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="columns features">
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <i className="uil uil-check nav__icon"></i>
              </div>
              <div className="card-content">
                <div className="content home-card__title">
                  <h4 className="home-card__title">Effortless</h4>
                  <p>
                  FTF boasts an intuitive interface that empowers even newcomers to swiftly deploy their applications with ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <i className="uil uil-dollar-alt nav__icon"></i>
              </div>
              <div className="card-content">
                <div className="content home-card__title">
                  <h4>Budget-Friendly</h4>
                  <p>
                  FTF offers cost-effective solutions tailored for small business owners. Choose from a range of packages designed to fit your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <i className="uil uil-lightbulb-alt nav__icon"></i>
              </div>
              <div className="card-content">
                <div className="content home-card__title">
                  <h4>Innovative Flexibility</h4>
                  <p>
                  Experience the brilliance of FTF's simplicity while enjoying the freedom to explore intricate customizations, making your application truly yours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeDev;
