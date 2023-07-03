import { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import axios from "axios";
import Listcardata from "./listcardata";

function Listcar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const config = {
        headers: {
          access_token: JSON.parse(localStorage.getItem("user")).access_token,
        },
      };

      const response = await axios.get("https://api-car-rental.binaracademy.org/admin/v2/car", config);
      setData(response.data.cars);
      console.log(setData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container>
        <Row>
          {data.map((item) => (
            <Listcardata key={item.id} id={item.id} name={item.name} category={item.category} price={item.price} image={item.image} updateAt={item.updateAt} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Listcar;
