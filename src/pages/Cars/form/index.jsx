import React from "react";
import CarForm from "../CarForm";
import Sidebar from "../../../components/sidebar";
import Header from "../../../components/header";
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./styles.scss";

const FormPage = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar active="cars" />
      <main>
        <Header />
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="#">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Library</BreadcrumbItem>
        </Breadcrumb>
        <h1>Add New Car</h1>
        <CarForm />
      </main>
    </div>
  );
};

export default FormPage;
