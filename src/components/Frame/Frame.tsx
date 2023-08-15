/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
  spanClassName: any;
  spanClassNameOverride: any;
  divClassName: any;
  elementClassName: any;
  spanClassName1: any;
  elementClassNameOverride: any;
  spanClassName2: any;
}

export const Frame = ({
  className,
  spanClassName,
  spanClassNameOverride,
  divClassName,
  elementClassName,
  spanClassName1,
  elementClassNameOverride,
  spanClassName2,
}: Props): JSX.Element => {
  return (
    <div className={`frame ${className}`}>
      <div className="overlap">
        <img
          className="img"
          alt="Frame"
          src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/frame-1-12@2x.png"
        />
        <p className="steeplain">
          <span className={`text-wrapper ${spanClassName}`}>
            Лоток пластиковый SteePlain DN100 H100 со стальной решеткой (P1010S) <br />
          </span>
          <span className={`span ${spanClassNameOverride}`}>
            <br />
          </span>
        </p>
        <p className="p">длина 1 м, ширина 128 мм</p>
        <div className="group">
          <div className="overlap-group">
            <div className={`text-wrapper-2 ${divClassName}`}>Акция</div>
          </div>
        </div>
      </div>
      <div className="overlap-2">
        <div className="group-2" />
        <div className="group-3">
          <div className="overlap-3">
            <div className="group-4">
              <div className="group-wrapper">
                <div className="group-5">
                  <p className={`element ${elementClassName}`}>
                    <span className={`text-wrapper-3 ${spanClassName1}`}>2 100 </span>
                    <span className="text-wrapper-4">руб </span>
                  </p>
                </div>
              </div>
              <p className={`element-2 ${elementClassNameOverride}`}>
                <span className={`text-wrapper-5 ${spanClassName2}`}>1 100 руб</span>
                <span className="text-wrapper-6">&nbsp;</span>
              </p>
            </div>
            <div className="text-wrapper-7">дилерам</div>
          </div>
          <div className="text-wrapper-8">розница</div>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-9">В корзину</div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-4">
            <p className="element-3">
              <span className="text-wrapper-10">2 150 руб</span>
              <span className="text-wrapper-6">&nbsp;</span>
            </p>
            <img
              className="line"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/line-11-9.svg"
            />
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-4">
            <p className="element-3">
              <span className="text-wrapper-10">1 150 руб</span>
              <span className="text-wrapper-6">&nbsp;</span>
            </p>
            <img
              className="line"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/line-11-9.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
