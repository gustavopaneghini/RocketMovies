import { Container } from './styles';
import { Rating } from '../Rating';

export function Cards({ title, children }) {
  return (
    <Container className='cardsComponents'>
      <div>
        <h2>{title}</h2>
        <Rating />
      </div>
      {children}
    </Container>
  )
}