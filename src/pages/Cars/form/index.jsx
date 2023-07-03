import React from "react";
import CarForm from "../CarForm";
import Sidebar from "../../../components/sidebar";
import Header from "../../../components/header";
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./styles.scss";
import { useParams } from "react-router";

const FormPage = () => {
  const { carID } = useParams();

  const addOrEdit = carID ? "Edit" : "Add";

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
        <h1>{addOrEdit} New Car</h1>
        <CarForm mode={addOrEdit} carID={carID} />
      </main>
    </div>
  );
};

export default FormPage;
