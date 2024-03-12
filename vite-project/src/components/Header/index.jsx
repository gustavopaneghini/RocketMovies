import { Container } from "./styles";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <Link className='link' to='/'>
        <h1>Rocket Movies</h1>
      </Link>
      <input
        type="text"
        placeholder="Pesquisar por título"
      />

      <div className="profile">
        <div className="named">
          <Link className='link'>
            <p>Gustavo Paneghini</p>
          </Link>
          <button>sair</button>
        </div>
        <img
          src="https://github.com/gustavopaneghini.png"
        />
      </div>

    </Container >
  )
}