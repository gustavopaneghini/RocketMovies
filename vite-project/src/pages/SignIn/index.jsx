import backgroundImg from '/home/gpaneghini/rocketmovies/vite-project/src/public/Group 15.png'
import { Container } from './styles';

import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { FaLongArrowAltLeft } from "react-icons/fa";



export function SignIn() {
  return (
    <Container>
      <section>
        <div className="logo">
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>


        <h2>Crie sua conta</h2>
        <div className="inputSection">

          <div className="inputWrapper">
            <IoPerson size={20} color='#948f99' />
            <input type="email" placeholder='Nome' />
          </div>
          <div className="inputWrapper">

            <MdOutlineEmail size={20} color='#948f99' />
            <input type="email" placeholder='Email' />
          </div>
          <div className="inputWrapper">
            <RiLockPasswordLine size={20} color='#948f99' />
            <input type="password" placeholder='Senha' />
          </div>
        </div>
        <button>Cadastrar</button>

        <button className='signIn'>
          <FaLongArrowAltLeft size={16} />
          Voltar para o login
        </button >

      </section>


      <span className='backgroundImg'>
        <img src={backgroundImg} alt="" />
      </span>

    </Container >
  )
}