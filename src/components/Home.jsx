import React from "react";
import img1 from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home1">
        <main>
          <h1>Tech</h1>
          <p>Tech Solutions</p>
        </main>
      </div>

      <div className="home2" id="about">
        <img src={img1} alt="img1" />
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
            tempore ratione impedit laudantium, sed aliquam provident neque
            corrupti error quisquam quibusdam sint ullam nostrum dolor iste
            perferendis reprehenderit optio. Totam.
          </p>
        </div>
      </div>

      <div className="home3">
        <div>
          <h1>Who We Are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            atque itaque deserunt dicta iste delectus assumenda, aliquid enim
            earum consequatur deleniti adipisci ad sit corrupti saepe quae
            quasi! Natus,Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Ratione optio fugiat eius. Necessitatibus dolores magnam nam
            rerum quis ipsum officiis ullam accusamus tempora voluptate quisquam
            qui nisi, voluptas magni suscipit assumenda? Accusantium nihil quam
            voluptate a libero cum, ratione facilis debitis reiciendis,
            dignissimos impedit neque, eius recusandae architecto asperiores
            fugiat rerum tempore vitae? Aspernatur iste ducimus esse beatae non
            officiis.
          </p>
        </div>
      </div>


      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>

            <div style={{animationDelay:"0.3s"}}>
              <AiFillFacebook/>
              <p>Facebook</p>
            </div>

            <div style={{animationDelay:"0.5s"}}>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>

            <div style={{animationDelay:"0.7s"}}>
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>

            <div style={{animationDelay:"0.9s"}}>
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>
          </article>
        </div>
        
      </div>
    </>
  );
};

export default Home;
