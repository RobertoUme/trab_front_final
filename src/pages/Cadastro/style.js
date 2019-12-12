import styled from "styled-components";
export const Container = styled.div`
  height: 100%;
  width: 100%;
  section {
    height: 500px;
    width: 401px;
    margin-top: 50px;
    margin: 100px auto 50px auto;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 3px 3px 10px 2px rgba(0, 0, 0, 0.5);
    text-align: center;
    align-content: center;
    align-items: center;
  }
  .image {
    height: 15%;
    width: 15%;
    margin-right: 30%;
    margin-left: 2%;
  }
  h1 {
    font-size: 30pt;
    margin-bottom: 5%;
    margin-top: 10%;
  }
  body {
    margin: 0px;
    font-family: "Source Sans Pro", "Helvetica Neue", "Helvetica", sans-serif;
  }
  div {
    margin: 0px;
  }
  .Cadastrar_Cliente {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  .Cadastrar_Cliente .Box_1 {
    background-color: #000000;
    color: #ffffff;
    text-align: left;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 1.4;
    box-shadow: 0px 3px 10px 2px rgba(0, 0, 0, 0.5);
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: inline;
    align-items: center;
    margin-right: 0%;
    margin-left: 0%;
    min-height: 78px;
    margin-top: -1px;
  }

  .enviar {
    margin-top: 20%;
    background-color: #408acf;
    color: #fffefe;
    width: 200px;
  }
  .enviar:hover {
    margin-top: 20%;
    background-color: #408acf;
    color: #fffefe;
    width: 200px;
  }
  button {
    font-size: 18px;
    margin: 10px;
    padding: 10px 20px 10px 20px;
    color: black;
    margin-bottom: 5px;
    width: 100%;
    border-radius: 0px;
    border: 0px;
    text-align: center;
    cursor: pointer;
  }

  button:hover {
    font-size: 18px;
    margin: 10px;
    padding: 10px 10px 10px 10px;
    color: black;
    margin-bottom: 5px;
    width: 100%;
    border-radius: 0px;
    border: 0px;
    text-align: center;
    cursor: pointer;
  }
  .Cadastrar_Cliente .Box {
    color: #ffffff;
    text-align: left;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 1.4;
    display: flex;
    flex-direction: column;
    padding: 10%, 50%, 10%, 50%;
  }
  form {
    color: black;
    display: inline-block;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input[type="text"],
  [type="password"],
  [type="email"] {
    border-style: solid;
    border-color: white;
    border-width: 0 0 2px 0;
    padding-top: 25px;
    width: 60%;
    background: none;
    font-size: 16pt;
  }
  .link {
    font-size: 18px;
    margin: 10px;
    margin-left: 30%;
    padding: 10px 20px 10px 20px;
    margin-bottom: 5px;
    width: 200px;
    text-align: center;
    cursor: pointer;
  }

  .link:hover {
    font-size: 18px;
    margin: 10px;
    margin-left: 30%;
    padding: 10px 20px 10px 20px;
    margin-bottom: 5px;
    width: 200px;
    text-align: center;
    cursor: pointer;
  }
  @media (max-width: 500px) {
    section {
      width: 100%;
      height: 100vh;
      color: white;
      margin: 0;
      border-radius: 0;
      padding-bottom: 50px;
    }
    h1 {
      color: white;
      margin-bottom: 5%;
      margin-top: 30%;
      font-size: 50pt;
    }
    form {
      color: white;
      height: 50%;
    }
    input[type="text"],
    [type="password"],
    [type="email"] {
      width: 70%;
      border-color: white;
      padding-top: 40px;
    }
    .enviar {
      margin-top: 27%;
      background-color: #408acf;
      color: #fffefe;
      width: 300px;
    }
    .enviar:hover {
      margin-top: 27%;
      background-color: #408acf;
      color: #fffefe;
      width: 300px;
    }
    .image {
      height: 40%;
      width: 40%;
      margin-right: 10%;
      margin-left: 2%;
    }
    .link {
      margin-left: 15%;
    }

    .link:hover {
      margin-left: 15%;
    }
  }
`;
