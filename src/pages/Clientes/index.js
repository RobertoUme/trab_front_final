import React, { useState } from "react";

import api from "../../services/api";

import logo from "../../assets/logo.png";
import { Container } from "./style.js";
import { Link } from "react-router-dom";
export default function Cadastro({ history }) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [telefone, setTelefone] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.post("/cliente", {
        nome,
        cpf,
        cidade,
        estado,
        telefone
      });
      history.push("/Home");
      alert("Cadastrado com sucesso");
    } catch (err) {
      alert("O CPF informado já foi cadastrado");
    }
  }

  return (
    <Container>
      <div className="Cadastrar_Cliente MatcSreen">
        <nav className="Box_1">
          <img src={logo} className="image" />
          <Link className="link" to="../Home">
            Voltar{" "}
          </Link>
        </nav>
        <div className="Box">
          <section>
            <h1>Cadastrar Cliente</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                required
                placeholder="Nome do Cliente"
                id="nome"
                onChange={event => setNome(event.target.value)}
              />
              <input
                type="number"
                required
                placeholder="CPF do Cliente"
                id="cpf"
                onChange={event => setCpf(event.target.value)}
              />
              <input
                type="text"
                required
                placeholder="Cidade do Cliente"
                id="cidade"
                onChange={event => setCidade(event.target.value)}
              />
              <input
                type="text"
                required
                placeholder="Estado do Cliente"
                id="Estado"
                onChange={event => setEstado(event.target.value)}
              />
              <input
                type="text"
                required
                placeholder="Telefone do Cliente"
                id="telefone"
                onChange={event => setTelefone(event.target.value)}
              />
              <button className="enviar">
                <p>Cadastrar</p>
              </button>
            </form>
          </section>
        </div>
      </div>
    </Container>
  );
}
