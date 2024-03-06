import backgroundImg from '/home/gpaneghini/rocketmovies/vite-project/src/public/Group 15.png'
import { Container } from './styles';

import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

export function SignIn() {
  return (
    <Container>
      <section>
        <div className="logo">
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>

        <h2>Faça seu login</h2>

        <div className="inputWrapper">
          <MdOutlineEmail size={20} color='#948f99' />
          <input type="email" placeholder='Email' />
        </div>
        <div className="inputWrapper">
          <RiLockPasswordLine size={20} color='#948f99' />
          <input type="password" placeholder='Senha' />
        </div>

        <button>Entrar</button>
        <button className='signUp'>
          Criar conta
        </button >
      </section>


      <div>
        <img src={backgroundImg} alt="" />
      </div>

    </Container>
  )
}