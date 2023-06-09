import React from "react";
import logo from "../assets/logo.png";

interface ILogoProps {}

export const Logo: React.FC<ILogoProps> = () => {
  return <img src={logo} alt="rast mobile logo" />;
};
