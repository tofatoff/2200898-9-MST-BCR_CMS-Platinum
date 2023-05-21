import React from "react";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import Car from "./components";

const Cars = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar active="cars" />
      <main>
        <Header />
        <Car />
      </main>
    </div>
  );
};

export default Cars;
