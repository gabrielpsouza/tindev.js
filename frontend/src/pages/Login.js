import  React from 'react';
import logo from  '../assests/logo.svg';
import './Login.css'

export default function Login() {
    return (
        <div className="login-container">
    <form>
        <img src={logo} alt="Tindev" />
        <input
            placeholder="Digite seu usuário do GitHub"
        />
        <button type="submit">Enviar</button>
        </form>
    </div>
    );
}