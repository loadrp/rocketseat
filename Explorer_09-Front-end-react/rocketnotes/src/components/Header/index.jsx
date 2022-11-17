import { Container, Profile, Logout } from "./styles";
import {RiShutDownLine} from 'react-icons/ri'

export function Header() {
  return(
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/loadrp.png" alt="profile photo"/>
        
        <div>
          <span>Bem-vindo</span>
          <strong>Lucas Prado</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine>

        </RiShutDownLine>
      </Logout>
    </Container>
  )
}