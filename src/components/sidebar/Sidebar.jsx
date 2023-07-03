import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import home from "../../assets/home.svg";
import smallLogo from "../../assets/small-logo.svg";
import truck from "../../assets/truck.svg";

const Container = styled.div`
  position: fixed;
  background-color: var(--primaryBlue);
  height: 100vh;
  width: 70px;
  z-index: 1050;
`;

const Sidebar = ({ innerRef }) => {
  return (
    <Container>
      <div
        ref={innerRef}
        className="d-flex flex-column justify-content-center align-items-center w-100 pt-2"
      >
        <div>
          <img src={smallLogo} alt="small-logo" />
        </div>
        <div className="d-flex w-100 flex-column align-items-center justify-content-center mt-3">
          <NavLink
            to="/dashboard"
            className="w-100 py-1"
            style={({ isActive }) =>
              isActive
                ? { backgroundColor: "rgba(255,255,255,0.3)" }
                : undefined
            }
          >
            <button className="border-0 p-2 bg-transparent w-100">
              <img src={home} alt="truck" />
              <p className="text-white" style={{ fontSize: "0.75rem" }}>
                Dashboard
              </p>
            </button>
          </NavLink>
        </div>
        <div className="d-flex w-100 flex-column align-items-center justify-content-center">
          <NavLink
            to="/cars"
            className="w-100 py-1"
            style={({ isActive }) =>
              isActive
                ? { backgroundColor: "rgba(255,255,255,0.3)" }
                : undefined
            }
          >
            <button className="border-0 p-2 bg-transparent w-100">
              <img src={truck} alt="truck" />
              <p className="text-white " style={{ fontSize: "0.75rem" }}>
                Cars
              </p>
            </button>
          </NavLink>
        </div>
      </div>
    </Container>
  );
};
export default Sidebar;
