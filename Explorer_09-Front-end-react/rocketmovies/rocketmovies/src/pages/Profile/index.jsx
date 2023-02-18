import { Container, Form, Avatar} from './styles'
import { Input } from '../../components/Input'
import { FiMail, FiCamera, FiUser, FiLock, FiArrowLeft} from 'react-icons/fi'
import { Button } from '../../components/Button'

export function Profile() {
    return(
      
      <Container>
        <header>
        </header>
        <Form>
        <Avatar>
          <img src="https://github.com/loadrp.png" alt="Foto do usuário"/>
          <label htmlFor="avatar">
            <FiCamera/>
            <input id="avatar" type="file"/>
          </label>
        </Avatar>
        
          <Input icon={FiUser} placeholder="Nome do usuário" type="text"/>
          <Input icon={FiMail} placeholder="E-mail" type="email"/>
          <Input icon={FiLock} type="password" placeholder="Senha atual"/>
          <Input icon={FiLock} type="password" placeholder="Nova senha"/>
          <Button title="Salvar"/>
        </Form>
      

      </Container>
      
      
  )
}