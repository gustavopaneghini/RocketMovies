/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function GenericButton({ children }) {
  return (
    <Container className='genericButton'>
      {children}
    </Container>
  );
}