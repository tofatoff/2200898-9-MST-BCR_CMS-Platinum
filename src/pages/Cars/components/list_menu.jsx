import React from "react";
import "./listmenu.css";
import { Breadcrumb, BreadcrumbItem, Button, Row, Col, Container, ButtonGroup, ButtonToolbar } from "reactstrap";
import { Link } from "react-router-dom";

const ListMenu = () => {
  return (
    <Container>
      <div className="breadcrum">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="#">Car</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>List Car</BreadcrumbItem>
        </Breadcrumb>
        <div>
          <Row>
            <Col>
              <p>List Car</p>
            </Col>
            <Col className="Add_button">
              <Link to="/cars/add">
                <Button color="primary">+ Add New Chart</Button>
              </Link>
            </Col>
          </Row>
        </div>
        <div>
          <ButtonToolbar>
            <ButtonGroup className="me-2">
              <Button className="button_toolbarActive">
                <b>All</b>
              </Button>
            </ButtonGroup>
            <ButtonGroup className="me-2">
              <Button className="button_toolbar">2-4 people</Button>
            </ButtonGroup>
            <ButtonGroup className="me-2">
              <Button className="button_toolbar">4-6 people</Button>
            </ButtonGroup>
            <ButtonGroup className="me-2">
              <Button className="button_toolbar">6-8 people</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
      </div>
    </Container>
  );
};

export default ListMenu;
