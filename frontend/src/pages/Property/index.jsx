import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

/// styled-components
import {
  PropertyBase,
  PropertyButton,
  PropertyCard,
  PropertyDescription,
  PropertyImage,
  PropertyText,
} from "./styles";

// icons
import { MdOutlineLocationOn as LocationIcon } from "react-icons/md";
import { BsTelephoneFill as TelephoneIcon } from "react-icons/bs";

// images
import EmptyImage from "../../assets/emptyImage.png";

export default function Property() {
  const params = useParams();
  const [property, setProperty] = useState({});
 
  
  function handleImageError(event) {
    event.target.src = EmptyImage;
  }


  useEffect(() => {
    async function getPropertyDetails() {
      const response = await axios.get(
        `https://api-smithrealty.onrender.com/properties/${params.id}`
      );
      setProperty(response.data);
    }

    getPropertyDetails();
  }, []);

  return (
    <PropertyBase>
      <PropertyCard>
        <div className="imageText">
          <PropertyImage>
            <img src={property.imageUrl} alt="Imagem do anúncio" onError={handleImageError}/>
          </PropertyImage>
          <PropertyText>
            <div>
              <h3>{property.name}</h3>
              <small>
                <i>
                  <LocationIcon />
                </i>
                {property.neighbourhood}, {property.city}
              </small>
            </div>
            <div>
              <h2>{property.price}</h2>
              <PropertyButton href="#">Fazer proposta</PropertyButton>
            </div>
          </PropertyText>
        </div>
        <PropertyDescription>
          <h2>Descrição</h2>
          <p>{property.description}</p>
          <div className="footerProperty">
            <div className="telephone">
              <i>
                <TelephoneIcon />
              </i>{" "}
              &#40;XX&#41; XXXXX-XXXX
            </div>
            <Link to={"/"}>
              <span>voltar para a página inicial</span>
            </Link>
          </div>
        </PropertyDescription>
      </PropertyCard>
    </PropertyBase>
  );
}
