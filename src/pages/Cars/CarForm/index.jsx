import { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const CarForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const loc = useLocation();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.dashboardStore);
  const selectEdit = selector.detailCar;

  const addNewCarForm = async () => {
    dispatch(uploadedCarDashboard({ name, price, category, image }))
      .unwrap()
      .then(() => {
        navigate("/cars?formSuccess=true");
      })
      .catch((error) => {
        setTimeout(() => {
          alert(error);
        }, 1500);
      });
  };

  const editCarForm = async () => {
    dispatch(editedCarDashboard({ name, price, category, image, id }))
      .unwrap()
      .then(() => {
        navigate("/cars?formSuccess=true");
      })
      .catch((error) => {
        setTimeout(() => {
          alert(error);
        }, 1500);
      });
  };

  const getDetailCar = async () => {
    dispatch(detailCarDashboard(id));
  };

  useEffect(() => {
    if (loc.pathname.includes("edit")) {
      getDetailCar();
    }
  }, [loc.pathname]);

  const formData = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      if (formFunction === "add") {
        addNewCarForm();
      }

      if (formFunction === "edit") {
        editCarForm();
      }
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <Form onSubmit={formData}>
      <FormGroup>
        <Label for="carname">Nama/Tipe Mobil*</Label>
        <Input id="carname" placeholder="Input Nama/Tipe Mobil" onChange={handleName} required></Input>
      </FormGroup>
      <FormGroup>
        <Label for="carPrice">Harga*</Label>
        <Input id="carPrice" placeholder="Input Harga Sewa Mobil" onChange={handlePrice} required></Input>
      </FormGroup>
      <FormGroup>
        <Label for="carphoto">File</Label>
        <Input id="carphoto" name="file" type="file" onChange={handleImage} required />
        <FormText>File size max. 2MB</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="carcategory">Kategori</Label>
        <Input id="carcategory" name="select" type="select" onChange={handleCategory} required>
          <option hidden>Pilih Kategori Mobil</option>
          <option value="small">2 - 4 orang</option>
          <option value="medium">4 - 6 orang</option>
          <option value="large">6 - 8 orang</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label>Created at</Label>
      </FormGroup>
      <FormGroup>
        <Label>Updated at</Label>
      </FormGroup>
      <Button color="primary" outline>
        Cancel
      </Button>
      <Button color="primary">Save</Button>
    </Form>
  );
};

export default CarForm;
