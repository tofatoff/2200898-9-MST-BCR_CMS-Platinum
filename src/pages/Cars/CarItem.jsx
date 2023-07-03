import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";
import moment from "moment/moment";
import "moment/locale/id";
import { useState } from "react";

import clock from "../../assets/clock.svg";
import edit from "../../assets/edit.svg";
import people from "../../assets/people.svg";
import trash from "../../assets/trash.svg";
import getFormattedPrice from "../../store/getFormattedPrice";
import getCategory from "../../store/getCategory";

moment.locale("id");

const CarItem = ({ id, image, name, price, category, updatedAt, onGetId }) => {
  const [isLoading, setIsLoading] = useState(true);

  let formattedPrice = getFormattedPrice(price);
  let peopleCap = getCategory(category, true);

  return (
    <div className="card w-100">
      <div className="card-body">
        <div className="d-flex px-3 py-2 justify-content-center mb-4">
          {isLoading && (
            <Skeleton
              duration={2}
              height={160}
              width={270}
              className="skeleton"
            />
          )}
          <img
            src={image}
            alt={name}
            width={!isLoading ? 270 : 0}
            height={160}
            style={{
              borderRadius: "4px",
              objectFit: "fill",
            }}
            onLoad={() => setIsLoading(false)}
          />
        </div>
        <div className="d-flex flex-column gap-2 mb-4">
          <p>{name}</p>
          <p className="fw-bold">{formattedPrice} / hari</p>
          <div className="d-flex gap-2">
            <img src={people} alt="people" />
            <p>{peopleCap}</p>
          </div>
          <div className="d-flex gap-2">
            <img src={clock} alt="clock" />
            <p>Updated at {moment(updatedAt).format("DD MMM YYYY, HH.mm")}</p>
          </div>
        </div>
        <div className="d-flex gap-3">
          <button
            className="btn btn-outline-danger w-100 d-flex justify-content-center align-items-center gap-2"
            data-bs-toggle="modal"
            data-bs-target="#deleteModal"
            onClick={() => onGetId(id)}
          >
            <img src={trash} alt="trash" />
            <p>Delete</p>
          </button>
          <Link to={`/edit-car/${id}`} className="w-100">
            <button className="btn btn-success w-100 d-flex justify-content-center align-items-center gap-2">
              <img src={edit} alt="trash" />
              <p className="">Edit</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CarItem;
