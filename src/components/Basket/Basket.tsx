/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  basket: string;
}

export const Basket = ({
  className,
  basket = "https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/basket-1.svg",
}: Props): JSX.Element => {
  return <img className={`basket ${className}`} alt="Basket" src={basket} />;
};

Basket.propTypes = {
  basket: PropTypes.string,
};
