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
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY3NTUxNjE1MH0.GWyuCrZVA5HuA3ODVAvgXj5GxoP82BnkUM_rJSuMi5A",
        },
      };

      const response = await axios.get(
        "https://api-car-rental.binaracademy.org/admin/v2/car",
        config
      );
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
            <Listcardata
              key={item.id}
              name={item.name}
              category={item.category}
              price={item.price}
              image={item.image}
              updateAt={item.updateAt}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Listcar;
