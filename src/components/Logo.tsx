import React from "react";
import logo from "../assets/logo.png";
import { Image } from "@fluentui/react";

interface ILogoProps {}

export const Logo: React.FC<ILogoProps> = () => {
  return <Image src={logo} alt="rast mobile logo" />;
};
