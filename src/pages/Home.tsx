import React from "react";
import { Navbar } from "../components/Navbar";
import { DataList } from "./DataList";

interface IHomeProps {}

export const Home: React.FC<IHomeProps> = () => {
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <Navbar />
      <DataList />
    </div>
  );
};
