import React, { useState } from "react";

import api from "../../services/api";

import { Container } from "./style.js";
import { Link } from "react-router-dom";
import login from "../../assets/login.svg";
export default function Cadastro({ history }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.post("/u", {
        nome,
        email,
        password
      });
      history.push("./");
    } catch (err) {
      alert("O e-mail já existe");
    }
  }

  return (
    <Container>
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            required
            placeholder="Insira o nome do cliente"
            onChange={(event) => setNome(event.target.value)}
          />
          <input
            type="text"
            required
            placeholder="Insira a cidade do cliente"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="text"
            required
            placeholder="Insira o estado do cliente"
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            type="text"
            required
            placeholder="Insira o tamanho do poço"
            onChange={(event) => setPassword(event.target.value)}
          />
          <div>
            <button>
              <p>Cadastrar cliente</p>
            </button>
          </div>
        </form>
        <nav>

        </nav>
      </section>
    </Container>
  );
}
