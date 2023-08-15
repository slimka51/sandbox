/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  union: string;
  unionClassName: any;
}

export const ArrowRight = ({
  className,
  union = "https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/union-8.svg",
  unionClassName,
}: Props): JSX.Element => {
  return (
    <div className={`arrow-right ${className}`}>
      <img className={`union ${unionClassName}`} alt="Union" src={union} />
    </div>
  );
};

ArrowRight.propTypes = {
  union: PropTypes.string,
};
