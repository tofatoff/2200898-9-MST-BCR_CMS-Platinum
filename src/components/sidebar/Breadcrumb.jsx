import styled from "styled-components";
import chevronRight from "../../assets/chevron-right.svg";

const Wrapper = styled.div`
  --bs-breadcrumb-divider: url(${chevronRight});
`;

const Breadcrumb = ({ dashboard, cars, newCar, editCar }) => {
  return (
    <Wrapper className="d-flex">
      <ul className="breadcrumb">
        {cars && (
          <>
            <li className="breadcrumb-item fw-bold">Cars</li>
            <li
              className={`breadcrumb-item ${
                newCar || editCar ? "fw-bold" : ""
              }`}
            >
              List Car
            </li>
            {newCar ? <li className="breadcrumb-item">Add New Car</li> : ""}
            {editCar ? <li className="breadcrumb-item">Edit Car</li> : ""}
          </>
        )}{" "}
        {dashboard && (
          <>
            <li className="breadcrumb-item fw-bold">Dashboard</li>
            <li
              className={`breadcrumb-item ${
                newCar || editCar ? "fw-bold" : ""
              }`}
            >
              Dashboard
            </li>
          </>
        )}
      </ul>
    </Wrapper>
  );
};
export default Breadcrumb;
