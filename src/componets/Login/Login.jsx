import {FaUser, FaLock} from 'react-icons/fa'

import { useState } from 'react';

import './login.css'

const Login = () => {

    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = (e)=>{
        if (userName !== "mirca@bit.com" || password !== "bitcoin") {
        e.preventDefault()
        } else {
            window.open("https://youtu.be/300AFps_XoY")
        }

    }

  return (
    <div>
      <div className="container">
        <form action="" onSubmit={handleSubmit}>
          <h1>Acesse o sistema</h1>
          <div className='input-field'>
            <input type="email" placeholder="seu email..." required onChange={(e)=>setUserName(e.target.value)} />
            <FaUser className='icon'/>
          </div>
          <div className='input-field'>
            <input type="password" placeholder="Sua senha..." required onChange={(e)=>setPassword(e.target.value)}/>
            <FaLock className='icon'/>
          </div>

            <div className="recall-forget">
                <label htmlFor="t">
                    <input type="checkbox" name="" id="t" />
                    Lembre de min
                </label>
                <a href="">Esqueceu a senha?</a>
            </div>

            <div className="singup-link">
                <p>Não tem uma conta? <a href="">Registrar</a></p>
            </div>

          <button>Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
