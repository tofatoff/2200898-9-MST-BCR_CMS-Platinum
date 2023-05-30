import React, { useState } from "react";
import styles from "./styles.module.css";
import { FiMenu } from "react-icons/fi";
import { Form, Input, Button } from "reactstrap";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { useDispatch } from "react-redux";
import { signout } from "../../features/signIn/userSlice";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dispatch = useDispatch();

  const handleSignout = (e) => {
    e.preventDefault();

    dispatch(signout());
  };

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className={styles["header"]}>
      <div className={styles["logo-bcr"]}></div>
      <FiMenu />
      <Form className={styles["search-bar"]}>
        <Input />
        <Button color="primary" outline>
          Search
        </Button>
      </Form>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="down">
        <DropdownToggle caret color="null" className={styles["user-dropdown"]}>
          <div
            style={{
              width: "16px",
              height: "16px",
              background: "#CFD4ED",
              borderRadius: "20px",
            }}
          ></div>
          <span>User</span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem disabled>Settings (currently unavailable)</DropdownItem>
          <DropdownItem>
            <Button onClick={(e) => handleSignout(e)}>Sign out</Button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Header;
