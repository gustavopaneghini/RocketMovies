import { Container } from './styles.js';

import { LuPlus, LuX } from "react-icons/lu";
import { FaArrowLeft } from "react-icons/fa";

import { Header } from '../../components/Header';
import { GenericButton } from '../../components/GenericButton';
import { Tags } from '../../components/Tags';
export function CreateMovie() {
  return (
    <Container>
      <Header />
      <div>
        <span className='headerContent'>
          <GenericButton >
            <FaArrowLeft size={16} />
            Voltar
          </GenericButton>
          <h1>Novo Filme</h1>
        </span>
        <div className="inputWrapper">
          <input type="text" placeholder='Título' />
          <input type="text" placeholder='Sua nota (de 0 a 5)' />
        </div>
        <textarea placeholder='Observações' />

        <div className="links">

          <h2>
            Marcadores
          </h2>

          <ul className="links-area">
            <Tags >
              <p>React</p>
              <LuX color='#ff859b' size={22} />
            </Tags>

            <button>
              <p>Novo marcador</p>
              <LuPlus color='#ff859b' />
            </button>
          </ul>
        </div>

        <div className="actionButton">
          <GenericButton>
            Excluir filme
          </GenericButton>
          <GenericButton>
            Salvar alterações
          </GenericButton>
        </div>
      </div>
    </Container>
  )
}