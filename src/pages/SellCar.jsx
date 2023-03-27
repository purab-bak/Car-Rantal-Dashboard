import React from "react";
import sellCar from "../assets/images/sell-car.png";
import "../styles/sell-car.css";
import TrackingChart from "../charts/TrackingChart";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const SellCar = () => {
  const percentage = 55;
  const percentage02 = 45;
  return (
    <div className="sell__car">
      <div className="offer__item">
        <div className="box__01">
          <h3 className="client__name">Vehicle Details</h3>
          <h6 className="avg__price">
            $16,605 <span>average price</span>
          </h6>

          <h6 className="market__price">Market average is $16,244</h6>
          <span className="arrow__key">
            <i class="ri-arrow-right-line"></i>
          </span>
        </div>

        <div className="circle__wrapper">
          <div className="box__02">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                pathColor: "#01d293",
                textColor: "#fff",
                trailColor: "#0b0c28",
                textSize: "18px",
              })}
            />
          </div>
          <h4>Impression Share</h4>
        </div>

        <div className="box__03">
          <span className="model__spend-icon">
            <i class="ri-car-line"></i>
          </span>
          <h6 className="spend__amount">$1174</h6>
          <p className="spend__title">Model Spend</p>
        </div>

        <div className="box__04">
          <span className="model__spend-icon">
            <i class="ri-share-forward-line"></i>
          </span>
          <h6 className="spend__amount">$1174</h6>
          <p className="spend__title">Model Spend</p>
        </div>

        <div className="box__05">
          <span className="model__spend-icon">
            <i class="ri-money-dollar-circle-line"></i>
          </span>
          <h6 className="spend__amount">$811</h6>
          <p className="spend__title">Spend Per Unit Turned</p>
        </div>
      </div>


      <div className="sell__car-wrapper">
        <div className="sell__car-top">
          <div className="sell__car-img">
            <h2>2022 Mercedes Benz</h2>
            <img src={sellCar} alt="" />
          </div>

          <div className="tracking__history">
            <h3>Running Status</h3>
            <TrackingChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellCar;
