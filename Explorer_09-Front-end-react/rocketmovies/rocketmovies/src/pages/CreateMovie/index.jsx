import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { NoteItem } from '../../components/NoteItem'


export function CreateMovie(){
  return(
    <>
    <Header/>
    <Container>
    <h1>Create Movie</h1>
    <div className="new__movie">
    <Input placeholder="Título"/>
    <Input placeholder="Sua Nota (de 0 a 5)"/>
    </div>
    <Textarea placeholder="Obeservações"/>


      <h2>Marcadores</h2>
    <div className="Markup">
      <NoteItem value={"TOP 1"}/>
      <NoteItem isNew placeholder="Novo marcador"/>
    </div>
      <div className="buttons">
      <Button style={{background:"black"}} title="Excluir Filme"/>
      <Button title="Salvar Alterações"/>
      </div>
        
    

    </Container>
    </>
    


  )
}