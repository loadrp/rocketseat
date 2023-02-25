import { Container, Profile, Logout } from "./styles";
import {RiShutDownLine} from 'react-icons/ri'
import { useAuth } from "../../hooks/auth";

export function Header() {
  const {signOut} = useAuth();
  return(
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/loadrp.png" alt="profile photo"/>
        
        <div>
          <span>Bem-vindo</span>
          <strong>Lucas Prado</strong>
        </div>
      </Profile>
      <Logout onClick={signOut}>
        <RiShutDownLine />

      </Logout>
    </Container>
  )
}