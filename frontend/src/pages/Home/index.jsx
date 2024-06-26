import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import {
  BoxCards,
  Button,
  Container,
  Divisor,
  TextHeaderContent,
} from "./styles";
import { Link } from "react-router-dom";




export default function Home() {
  const [dataProperties, setDataProperties] = useState([]);
  
  useEffect(() => {
    async function getProperties() {
      const response = await axios.get("http://localhost:3001/properties");
      try {
        setDataProperties(response.data);
      } catch (error) {
        console.error("Unable to fetch data from api" + error);
      }
    }
    getProperties();
  }, []);

  return (
    <main>
      <Container>
        <TextHeaderContent>
          <h1>
            Smith<span>Realty</span>
          </h1>
          <Link to={'/register'}>
            <Button>+</Button>
          </Link>
        </TextHeaderContent>
        <Divisor />
        <BoxCards>
          {dataProperties.map((property) => {
            return (
              <Card
                id={property.key}
                key={property.key}
                imageUrl={property.imageUrl}
                title={property.name}
                neighbourhood={property.neighbourhood}
                city={property.city}
                price={property.price}
              />
            );
          })}
        </BoxCards>
      </Container>
    </main>
  );
}
