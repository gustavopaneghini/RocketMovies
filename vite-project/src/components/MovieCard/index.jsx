import { Container } from "./styles";

import { Rating } from '../../components/Rating'
import { Tags } from "../../components/Tags";



export function MovieCard({ title, description }) {
  return (
    <Container>
      <h2>{title}</h2>
      <Rating />
      <p>{description}</p>
      <ul>
        <Tags ><p>Ficção Científica</p></Tags>
        <Tags ><p>Drama</p></Tags>
        <Tags ><p>Família</p></Tags>
        <Tags ><p>Emocionante</p></Tags>
      </ul>
    </Container>
  );
}