import { Container, Profile, Input } from "./styles";


export function Header(){

  return(
    <Container>
      <h2>RocketMovies</h2>
      <Input type="text" placeholder="Pesquisar pelo título"/>
      <Profile>
        <img src="https://github.com/loadrp.png" alt="Imagem do perfil" />
        <div>
        <span>Lucas Prado</span>
        <a href="/">Sair</a>
        </div>
      </Profile>

    </Container>

  )

}