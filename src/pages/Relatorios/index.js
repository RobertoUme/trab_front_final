import React, { useState, useEffect } from "react";

import api from "../../services/api";
import Relatorio from "../../components/Relatorios";
import logo from "../../assets/logo.png";
import { Container } from "./style.js";
import { Link } from "react-router-dom";

export default function Relatorios({ history }) {
  const [relatorios, setRelatorios] = useState([]);

  useEffect(() => {
    async function loadRelatorios() {
      const response = await api.get("/service");
      setRelatorios(response.data);
    }
    loadRelatorios();
  }, [relatorios]);

  return (
    <Container>
      <div className="Cadastrar_Cliente MatcSreen">
        <nav className="Box_1">
          <img src={logo} className="image" />
          <Link className="link" to="../Home">
            Voltar
          </Link>
        </nav>
        <div className="Box">
          <section>
            <table>
              <tr>
                <th>Nome do Cliente</th>
                <th>CPF</th>
                <th>Telefone</th>
                <th>Tamanho do Poço</th>
                <th>Serviço Realizado</th>
                <th>Data do Serviço</th>
                <th>Valor Cobrado</th>
              </tr>
              {relatorios &&
                relatorios.map(relatorio => (
                  <Relatorio
                    nome={relatorio.cliente.nome}
                    cpf={relatorio.cliente.cpf}
                    telefone={relatorio.cliente.telefone}
                    tamanho={relatorio.tamanho}
                    tipodeservico={relatorio.tipodeservico}
                    dia={relatorio.dia}
                    valor={relatorio.valor}
                  />
                ))}
            </table>
          </section>
        </div>
      </div>
    </Container>
  );
}
