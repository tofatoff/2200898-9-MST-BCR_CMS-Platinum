import React from "react";
import CarForm from "../CarForm";
import Sidebar from "../../../components/sidebar/Sidebar";
import Header from "../../../components/header";
import {
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
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
      <main style={{ flexGrow: 1 }}>
        <Header />
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/cars">Cars</a>
          </BreadcrumbItem>
          <BreadcrumbItem>List Car</BreadcrumbItem>
          <BreadcrumbItem active>
            {addOrEdit} {addOrEdit == "Add" ? "New" : ""} Car
          </BreadcrumbItem>
        </Breadcrumb>
        <h1>
          {addOrEdit} {addOrEdit == "Add" ? "New" : ""} Car
        </h1>
        <CarForm mode={addOrEdit} carID={carID ? carID : undefined} />
      </main>
    </div>
  );
};

export default FormPage;
