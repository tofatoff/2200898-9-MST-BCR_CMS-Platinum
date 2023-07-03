import { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const CarForm = ({ mode, carID }) => {
  const BASE_URL = "https://api-car-rental.binaracademy.org";
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");

  if (mode == "Edit") {
    useEffect(() => {
      getCarData();
    }, []);

    const getCarData = async () => {
      try {
        const config = {
          headers: {
            access_token: JSON.parse(localStorage.getItem("user")).access_token,
          },
        };

        const response = await axios.get(`${BASE_URL}/admin/car/${carID}`, config);

        setName(response.data.name);
        setPrice(response.data.price);
        setImage(response.data.image);
        setCategory(response.data.category);
        setCreatedAt(response.data.createdAt);
        setUpdatedAt(response.data.updatedAt);
      } catch (error) {
        console.log(error);
      }
    };
  }

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      price,
      image,
      category,
    };

    console.log(formData);

    try {
      if (mode == "Edit") {
        const response = await axios.put(`${BASE_URL}/admin/car/${carID}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            access_token: JSON.parse(localStorage.getItem("user")).access_token,
          },
        });
      } else {
        const response = await axios.post(`${BASE_URL}/admin/car`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            access_token: JSON.parse(localStorage.getItem("user")).access_token,
          },
        });
      }

      navigate("/cars");
    } catch (e) {
      console.error(e);
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
    <Form onSubmit={onHandleSubmit}>
      <FormGroup>
        <Label for="carname">Nama/Tipe Mobil*</Label>
        <Input id="carname" placeholder="Input Nama/Tipe Mobil" onChange={handleName} value={name} required></Input>
      </FormGroup>
      <FormGroup>
        <Label for="carPrice">Harga*</Label>
        <Input id="carPrice" placeholder="Input Harga Sewa Mobil" onChange={handlePrice} value={price} required></Input>
      </FormGroup>
      <FormGroup>
        <Label for="carphoto">File</Label>
        <Input id="carphoto" name="file" type="file" onChange={handleImage} />
        <FormText>File size max. 2MB</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="carcategory">Kategori</Label>
        <Input id="carcategory" name="select" type="select" onChange={handleCategory} value={category} required>
          <option hidden>Pilih Kategori Mobil</option>
          <option value="small">2 - 4 orang</option>
          <option value="medium">4 - 6 orang</option>
          <option value="large">6 - 8 orang</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label>Created at</Label>
        <span>{createdAt}</span>
      </FormGroup>
      <FormGroup>
        <Label>Updated at</Label>
        <span>{updatedAt}</span>
      </FormGroup>
      <Button color="primary" outline>
        Cancel
      </Button>
      <Button color="primary">Save</Button>
    </Form>
  );
};

export default CarForm;
