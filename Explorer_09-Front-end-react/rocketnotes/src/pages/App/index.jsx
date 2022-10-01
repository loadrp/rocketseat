import {Container, Links, Content} from './styles'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tags'
import { ButtonText } from '../../components/ButtonText'

export function App() {
  return (
    <Container>
      <Header/>
      <main>
        <Content>
        <ButtonText title="Excluir nota"/>
        <h1>
          Introdução
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ab, 
          laborum id eos temporibus, doloribus eveniet ratione debitis sed accusamus magni s
          int odio voluptas odit excepturi qui natus cum ut.
        </p>

        <Section title="Links úteis">
          <Links>
            <li><a href="#">https://www.rocketseat.com.br</a></li>
            <li><a href="#">https://www.rocketseat.com.br</a></li>
          </Links>
        </Section>

        <Section title ="Marcadores">
        <Tag title="express"/>
        <Tag title="nodejs"/>
        </Section>


        <Button title="Voltar">
        </Button>
      </Content>
      </main>

    </Container>
  )
}