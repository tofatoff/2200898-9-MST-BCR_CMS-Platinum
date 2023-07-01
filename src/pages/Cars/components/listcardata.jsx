import React from "react";
import {
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { FiUsers, FiClock, FiTrash2, FiEdit } from "react-icons/fi";

const listcardata = ({ name, category, price, image, updateAt }) => {
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
          <Link to="#">
            <Button style={{ marginRight: "95px" }} className="button_delete">
              <FiTrash2></FiTrash2>Delete
            </Button>
          </Link>
          <Link to="#">
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
