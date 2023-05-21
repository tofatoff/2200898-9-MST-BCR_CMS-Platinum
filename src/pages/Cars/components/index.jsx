import React from "react";
import { Button } from "reactstrap";
import { FiClock, FiEdit, FiKey, FiTrash } from "react-icons/fi";

const Car = () => {
  return (
    <div
      style={{
        padding: "24px",
        border: "1px solid black",
        width: "auto",
      }}
    >
      <img src="src\assets\image 1.png" alt="" />
      <div className="car-name">Nama/Tipe Mobil</div>
      <div className="rent-fee">Rp 430.000 / hari</div>
      <div className="rent-date">
        <FiKey />
        Start rent - Finish rent
      </div>
      <div className="rent-update">
        <FiClock />
      </div>
      <Button>
        <FiTrash />
        Delete
      </Button>
      <Button>
        <FiEdit />
        Edit
      </Button>
    </div>
  );
};

export default Car;
