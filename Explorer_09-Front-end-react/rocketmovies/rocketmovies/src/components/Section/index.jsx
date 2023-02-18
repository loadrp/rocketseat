import { Container } from './styles';

export function Section({title, children, isPrincipal}){
  return(
    <Container isPrincipal={isPrincipal}>
      <h2 className={ isPrincipal ? 'font-size-h1' : 'font-size-h2'} >{title}</h2>
      {children}
    </Container>

  )

}