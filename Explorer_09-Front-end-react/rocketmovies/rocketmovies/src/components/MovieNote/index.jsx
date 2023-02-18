import { Container } from "./styles";
import { Tags } from "../Tags";

export function MovieNote({title, description, tags , rating}){

  return(
    <Container >
      <h2>{title}</h2>
      {rating}
      {
        <p>
          {description}
        </p>
      }
      <Tags tags={tags} />
    </Container>

  )


}