import {Header} from '../../components/Header'
import { Container, Form } from './styles'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Noteitem } from '../../components/Noteitem'
import { Section } from '../../components/Section'



export function New(){
  return(
    <Container>
    <Header/>
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">Voltar</a>
          </header>
        <Input placeholder="Título"/>
        <Textarea placeholder="Observações"></Textarea>
        </Form>
      
      </main>
    </Container>
  )
}