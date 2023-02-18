import { Container } from "./styles";

export function Button({icon: Icon, title, loading = false, ...rest}) {
  return (
  <Container icon type="button" disabled={loading} {...rest}>
    {Icon && <Icon size={18}/>}
    { loading ? 'Carregando..':  title}
    
  </Container>
)}