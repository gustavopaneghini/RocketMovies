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
        <Tags tagName={'Ficção Científica'} />
        <Tags tagName={'Drama'} />
        <Tags tagName={'Família'} />
        <Tags tagName={'Espaço'} />
        <Tags tagName={'Emocionante'} />
      </ul>
    </Container>
  );
}