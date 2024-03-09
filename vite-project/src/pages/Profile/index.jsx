import { Container } from "./styles";
import { CiCamera } from "react-icons/ci";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

export function Profile() {
  return (
    <Container>
      <header>
        <button>
          <FaLongArrowAltLeft />
          <p>Voltar</p>
        </button>
      </header>
      <main>
        <div className="profilePicture">
          <img src="https://github.com/gustavopaneghini.png" alt="" />
          <button><CiCamera size={20} /></button>
        </div>

        <form action="">

          <span className="updateNameEmail">
            <span className="inputWrapper">
              <IoPerson size={20} color="#948F99" />
              <input type="text" placeholder="Gustavo Paneghini" />
            </span>
            <span className="inputWrapper">
              <MdOutlineEmail size={20} color="#948F99" />
              <input type="email" placeholder="gustavo@email.com" />
            </span>
          </span>

          <span className="updatePassword">
            <span className="inputWrapper">
              <RiLockPasswordLine size={20} color="#948F99" />
              <input type="password" placeholder="Senha Atual" />
            </span>
            <span className="inputWrapper">
              <RiLockPasswordLine size={20} color="#948F99" />
              <input type="password" placeholder="Nova Senha" />
            </span>
          </span>


          <button>
            Salvar
          </button>
        </form>
      </main>

    </Container>
  )
}

