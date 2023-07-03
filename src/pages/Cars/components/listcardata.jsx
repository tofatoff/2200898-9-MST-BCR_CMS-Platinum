import React from "react";
import { Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { FiUsers, FiClock, FiTrash2, FiEdit } from "react-icons/fi";

const listcardata = ({ id, name, category, price, image, updateAt }) => {
  const BASE_URL = "https://api-car-rental.binaracademy.org";
  const navigate = useNavigate();

  const handleDelete = async () => {
    const result = window.confirm("Are you sure you want to proceed?");
    if (result) {
      const response = await fetch(`${BASE_URL}/admin/car/${id}`, {
        method: "DELETE",
        headers: {
          access_token: JSON.parse(localStorage.getItem("user")).access_token,
        },
      });
      navigate("/cars");
    } else {
      window.alert("Delete cancelled");
    }
  };

  return (
    <Col md={4}>
      <Card
        style={{
          width: "18rem",
          marginTop: "10px",
        }}
      >
        <img
          style={{
            width: "17rem",
            height: "11rem",
            marginTop: "10px",
            marginLeft: "7px",
          }}
          alt="Sample"
          src={image}
        />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle className="mb-2" tag="b">
            Rp {price} / hari
          </CardSubtitle>
          <CardText className="mb-2">
            <FiUsers></FiUsers> {category}
          </CardText>
          <CardText>
            <FiClock></FiClock>Updated {updateAt}
          </CardText>
          <Button style={{ marginRight: "95px" }} className="button_delete" onClick={handleDelete}>
            <FiTrash2></FiTrash2>Delete
          </Button>
          <Link to={`/cars/${id}/edit`}>
            <Button className="button_edit">
              <FiEdit></FiEdit>Edit
            </Button>
          </Link>
        </CardBody>
      </Card>
    </Col>
  );
};

export default listcardata;
