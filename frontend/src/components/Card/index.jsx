// config
import axios from "axios";
import { Link } from "react-router-dom";

// icons
import { MdOutlineLocationOn as LocationIcon } from "react-icons/md";
import { FaEye as EyeIcon } from "react-icons/fa";

/// styled-components
import {
  CardButton,
  CardImageContainer,
  CardTextContainer,
  CardTitle,
  ContainerCard,
  ContainerPrice,
} from "./styles";

// Images
import EmptyImage from "../../assets/emptyImage.png"


export default function Card({
  imageUrl,
  title,
  neighbourhood,
  city,
  price,
  id,
}) {

  function handleImageError(event) {
    event.target.src = EmptyImage;
  }
  return (
    <ContainerCard>
      <CardImageContainer>
        <img src={imageUrl} alt="imagem do anúncio" onError={handleImageError}/>
      </CardImageContainer>
      <CardTextContainer>
        <div>
          <CardTitle>{title}</CardTitle>
          <small>
            <i>
              <LocationIcon />
            </i>
            {neighbourhood}, {city}
          </small>
        </div>
        <ContainerPrice>
          <h3>{price}</h3>
          <Link to={`/property/${id}`}>
            <CardButton>
              Ver mais{" "}
              <i>
                <EyeIcon />
              </i>
            </CardButton>
          </Link>
        </ContainerPrice>
      </CardTextContainer>
    </ContainerCard>
  );
}
