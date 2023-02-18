import { Container } from "./styles";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export function Ratings({ rating }) {
  const filledStars = Math.floor(rating);
  const halfStar = rating - filledStars >= 0.5;
  const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);
  
  return (
    <Container>
      {[...Array(filledStars)].map((_, index) => <FaStar key={index} />)}
      {halfStar && <FaStarHalfAlt />}
      {[...Array(emptyStars)].map((_, index) => <FaRegStar key={index} />)}
    </Container>
  );
}
