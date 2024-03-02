import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <h1>Rocket Movies</h1>
      <input
        type="text"
        placeholder="Pesquisar por título"
      />

      <div className="profile">
        <div className="named">

          <p>Gustavo Paneghini</p>
          <button>sair</button>
        </div>
        <img
          src="https://github.com/gustavopaneghini.png"
        />
      </div>

    </Container>
  )
}