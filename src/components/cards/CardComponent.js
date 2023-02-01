import React from "react";
import "./CardComponent.css";
import { GoArrowUp, GoArrowDown } from "react-icons/go";
import CountUp from "react-countup";

function CardComponent(props) {
  return (
    <div>
      <div className="cc__container">
        <div className="cc__flex">
          <div>
            {/*Money, description and icon flex*/}
            <div className="cc__amount">
              $ <CountUp end={props.money} duration="1.5" />
            </div>
            <div className="cc__description">{props.description}</div>
          </div>

          <div className="cc__illustration">{props.icon}</div>
        </div>
        {/*Stock*/}
        <div className="cc__stock">
          {props.stock}
          <span
            style={{
              color: "green",
              display: "flex",
              alignItems: "center",
              marginRight: "5px",
            }}
          >
            <GoArrowUp color={"green"} />
            {/* <GoArrowDown color={"red"} /> */}
            2.65%
          </span>
          since last week
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
