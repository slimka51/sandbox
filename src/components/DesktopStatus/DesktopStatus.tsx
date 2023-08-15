/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  style: "black" | "white";
  className: any;
  ellipseClassName: any;
  ellipseClassNameOverride: any;
  divClassName: any;
  divClassNameOverride: any;
  ellipseClassName1: any;
}

export const DesktopStatus = ({
  style,
  className,
  ellipseClassName,
  ellipseClassNameOverride,
  divClassName,
  divClassNameOverride,
  ellipseClassName1,
}: Props): JSX.Element => {
  return (
    <div className={`desktop-status ${className}`}>
      <div className={`ellipse ${style} ${ellipseClassName}`} />
      <div className={`div style-${style} ${ellipseClassNameOverride}`} />
      <div className={`ellipse-2 style-0-${style} ${divClassName}`} />
      <div className={`ellipse-3 style-1-${style} ${divClassNameOverride}`} />
      <div className={`ellipse-4 style-2-${style} ${ellipseClassName1}`} />
    </div>
  );
};

DesktopStatus.propTypes = {
  style: PropTypes.oneOf(["black", "white"]),
};
