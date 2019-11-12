import React, {useState} from "react";

import api from "../../services/api";

import { Container } from "./style.js";
import { Link } from "react-router-dom";
import login from "../../assets/login.svg";
export default function Cadastro({history}) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  async function handleSubmit(event){
    event.preventDefault()
    try{
    await api.post("/u", {
      nome,
      email,
      password
    })
    history.push("./")
  }
  catch(err){
    alert("O e-mail já existe");
  }
}

  return (
    <Container>
      <section>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" required placeholder="Seu nome" id ="nome" onChange={event => setNome(event.target.value)}/>
          <input type="email" required placeholder="Seu e-mail" id="email" onChange={event => setEmail(event.target.value)}/>
          <input type="password" required placeholder="Sua senha" id="password" onChange={event => setPassword(event.target.value)}/>
          <div>
            <button>
              <p>Criar Conta</p>
            </button>
          </div>
        </form>
        <nav>
          <Link className="link" to="../">
            <img src={login} alt="Login" />
            <p>Voltar a login</p>
          </Link>
        </nav>
      </section>
    </Container>
  );
}
