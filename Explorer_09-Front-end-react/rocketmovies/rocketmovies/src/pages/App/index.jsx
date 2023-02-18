import { Container, Content } from "./styles"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { MovieNote } from "../../components/MovieNote"
import { FiPlus, FiX } from 'react-icons/fi'
import { Ratings } from "../../components/Ratings"

export function App() {
  return (
    <Container>
      <Header/>
     
      <main>
        <Content>
        
          <div className="title">
            <h1>Meus Filmes</h1>
            <Button icon={FiPlus} title={'Adicionar Filme'} className={'button-title'}/>
          </div>
        <div className="Notas">
        <MovieNote rating={4} title="Interestrelar" tags={["nota 5","nota 10"]} description= "As enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial."/>
        <MovieNote rating={5} title="Filme 2" tags={["nota 5","o melhor"]}  description= "As enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial."/>
        <MovieNote rating={3} title="Filme 3"  tags={["nota 5","bom","maneiro"]} description= "As enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial."/>
        <MovieNote rating={1} title="Robin Hood" tags={["nota 1","#podever","assista"]} description= "As enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial."/>
        </div>
       
        
        </Content>
        
      </main>

    </Container>
  )
}