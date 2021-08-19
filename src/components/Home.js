import React from "react";
import Product from "./Product";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/MzhhODZlNjIt/MzhhODZlNjIt-ZWJhOThiMTUt-w3000._CB665819129_.jpg"
        alt="home"
      />

      <div className="home__row">
        <Product
          id="1"
          title="Podcast: Get Sleepy"
          price={11.98}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/G/02/AmazonMusic/2021/WeeklyBuild/081321/081321_UK_OS_GW_CategoryCard_D_Cover_Art_GetSleepy_758x609._SY608_CB643889400_.jpg"
        />
        <Product
          id="2"
          title="Learning & Developmental Toys"
          price={10.0}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/G/02/FR-hq/2021/img/Toys_Internet/EducationalToysStore/EducationalToysStore_Single_category_card_758x608_2X._SY608_CB662951217_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="More titles to explore than ever"
          price={8.87}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/ku/new/recent/GW/xcm_banners_engaug_758x608_gb-en._SY608_CB663060632_.jpg"
        />
        <Product
          id="4"
          title="Vouchers: Save on your favourites"
          price={2.34}
          rating={1}
          image="https://images-eu.ssl-images-amazon.com/images/G/02/EUBluefield/Price_Perception/Money_Saving_Programs/Desktop/single_card/Desktop_Pay_by_Invoice_758x608._SY608_CB666767568_.jpg"
        />
        <Product
          id="5"
          title="Turn Left at Orion"
          price={12.98}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41Ol2W+xn8L._SX422_BO1,204,203,200_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="6"
          title="You Are a Champion"
          price={5.54}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/51W917k3oxL._SX343_BO1,204,203,200_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
