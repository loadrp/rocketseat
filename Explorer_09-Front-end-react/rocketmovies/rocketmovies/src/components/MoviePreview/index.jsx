import { Container } from './styles'
import { Ratings } from '../Ratings';
import { Section } from '../Section'
import { Tags } from '../Tags';
import { Button } from '../Button'
import { FaArrowLeft, FaClock } from 'react-icons/fa';


export function MoviePreview({name, description, rating, tags, author, date}){
  return(
    <Container >
      <div className='Voltar'>
  
      <Button icon={FaArrowLeft} title="Voltar"/>

      </div>
      
      <div className='title__rating'>
        
        <h1>{name}</h1>
        <Ratings rating={rating}/>
      </div>
      <div className='data__Author'>
        <img src="https://github.com/loadrp.png" alt="author" />
        <span className='author'>{author}</span>
      <FaClock className='icon' size={15}/>
      <span>{date}</span>
      </div>
     
      <Tags className="Tags" tags={tags}></Tags>
      <div className='description'>
        {description}

      </div>

    </Container>
    
  );
}