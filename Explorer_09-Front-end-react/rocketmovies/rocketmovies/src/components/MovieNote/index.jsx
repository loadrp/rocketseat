import { Container } from "./styles";
import { Tags } from "../Tags";
import { Ratings } from "../Ratings";

export function MovieNote({title, description, tags, rating}){

  return(
    <Container >
      <div>
      <h2 className="title-movie">{title}</h2>
      <Ratings className="title-stars" rating={rating}/>
      </div>
      {
        <p>
          {description}
        </p>
      }
      <Tags tags={tags} />
      
    </Container>

  )


}