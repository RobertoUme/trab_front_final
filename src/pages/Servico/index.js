import React, { useState, useEffect } from "react";

import api from "../../services/api";
import logo from "../../assets/logo.png";
import { Container } from "./style.js";
import { Link } from "react-router-dom";

export default function Servico({ history }) {
  const [cliente1, setCliente1] = useState([]);

  const [cliente, setCliente] = useState([]);

  const [dia, setDia] = useState([]);
  const [valor, setValor] = useState([]);
  const [tipodeservico, setTipodeservico] = useState([]);
  const [tamanho, setTamanho] = useState([]);

  useEffect(() => {
    const populateClientes = async () => {
      const requisicao = await api.get(`/cliente`);
      setCliente1(requisicao.data);
    };
    populateClientes();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.post("/service", {
        cliente,
        dia,
        valor,
        tipodeservico,
        tamanho
      });
      history.push("/Home");
      alert("Cadastrado com sucesso");
    } 
    catch (err) {
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
            <h1>Cadastrar Serviço</h1>
            <form onSubmit={handleSubmit}>
              <select
                id="cliente"
                name="cliente"
                onChange={event => setCliente(event.target.value)}
              >
                {cliente1 &&
                  cliente1.map(({ _id, nome }) => (
                    <option key={_id} value={_id}>
                      {nome}
                    </option>
                  ))}
              </select>

              <input
                type="Number"
                required
                placeholder="Valor do Serviço"
                id="valor"
                onChange={event => setValor(event.target.value)}
              />
              <input
                type="Number"
                required
                placeholder="Tamanho do Poço"
                id="tamanho"
                onChange={event => setTamanho(event.target.value)}
              />
              <select
                id="tipodeservico"
                onChange={event => setTipodeservico(event.target.value)}
              >
                <option value="Conserto do Painel">Conserto do Painel</option>
                <option value="Retirar Bomba">Retirar Bomba</option>
                <option value="Instalar Bomba">Instalar Bomba</option>
                <option value="Manutenção do Poço">Manutenção do Poço</option>
                <option value="Trocar a Fiação">Trocar a Fiação</option>
                <option value="Trocar os Canos">Trocar os Canos</option>
              </select>
              <input
                type="date"
                required
                id="data"
                onChange={event => setDia(event.target.value)}
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
