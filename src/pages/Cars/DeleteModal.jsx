import styled from "styled-components";

import carVector from "../../assets/car-vector.svg";

const ConfirmButton = styled.button`
  background-color: var(--primaryBlue);
  color: white;
  border: 1px solid var(--primaryBlue);
  width: 100px;
`;

const CancelButton = styled.button`
  background-color: transparent;
  color: var(--primaryBlue);
  border: 1px solid var(--primaryBlue);
  width: 100px;
`;

const DeleteModal = ({ carId, onDelete }) => {
  return (
    <div
      className="modal fade"
      id="deleteModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content d-flex justify-content-center align-items-center px-5 py-4 gap-3 w-100 mx-auto">
          <div className="d-flex justify-content-center align-items-center">
            <img src={carVector} alt="car-vector" width={150} height={120} />
          </div>
          <h6 className="mb-0">Menghapus Data Mobil</h6>
          <p className="text-center">
            Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin
            menghapus?
          </p>
          <div className="d-flex justify-content-center gap-3">
            <ConfirmButton
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => onDelete(carId)}
              style={{ backgroundColor: "var(--primaryBlue)" }}
            >
              Ya
            </ConfirmButton>
            <CancelButton type="button" className="btn" data-bs-dismiss="modal">
              Tidak
            </CancelButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeleteModal;
