import React from "react";
import { SpinnerWrapper } from "./LoadingSpinner.styles";
import Spinner from "../../assets/svg/spinner.svg";

export const LoadingSpinner: React.FC = () => {
  return (
    <SpinnerWrapper>
      <img src={Spinner} style={{ width: "50px", height: "50px" }}></img>
    </SpinnerWrapper>
  );
};

export default LoadingSpinner;
