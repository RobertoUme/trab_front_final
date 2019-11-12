import React, { useState } from "react";

import api from "../../services/api";

import { Container } from "./style.js";
import { Link } from "react-router-dom";
import plus from "../../assets/plus.svg";
export default function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.post("/sessions", {
        email,
        password
      });
      history.push("/home");
    } catch (err) {
      alert("Os dados inseridos são incorretos!");
    }
  }
  return (
    <Container>
      <section>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Seu e-mail"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            required
            placeholder="Sua senha"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <div>
            <button>
              <p>Entrar</p>
            </button>
          </div>
        </form>

        <nav>
          <Link className="link" to="../Cadastro">
            <img src={plus} alt="Plus" />
            <p>Cadastre-se</p>
          </Link>
        </nav>
      </section>
    </Container>
  );
}
