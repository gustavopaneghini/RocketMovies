import { Container } from "./styles";

export function Button({ icon, children }) {
  return (
    <Container >
      {icon}
      {children}
    </Container>
  )
}
