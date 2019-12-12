import styled from "styled-components";
export const Container = styled.div`
  height: 100%;
  width: 100%;

  .image {
    height: 15%;
    width: 15%;
    margin-right: 30%;
    margin-left: 2%;
  }
  .icon {
    height: 100px;
    width: 100px;
    margin-top: 35px;
  }
  h1 {
    font-size: 24pt;
  }
  body {
    margin: 0px;
    font-family: "Source Sans Pro", "Helvetica Neue", "Helvetica", sans-serif;
  }
  div {
    margin: 0px;
  }
  .Tela {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  .Tela .Box_1 {
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
    width: 60%;
  }
  .enviar:hover {
    margin-top: 20%;
    background-color: #408acf;
    color: #fffefe;
    width: 60%;
  }
  button {
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
  .lugar {
    display: inline-block;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 45%;
    height: 250px;
    font-size: 14px;
    text-decoration: none;
    text-align: center;
    margin: 10px;
    text-shadow: 2px 2px 4px #666;
    color: #fff;
    background-color: rgba(80, 80, 80, 0.8);
    border-radius: 8px;
  }
  .a {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .se1 {
    margin: auto;
    margin-top: 3%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 1100px;
    height: 554px;
    z-index: 1;
  }
  .Tela .Box {
    color: #ffffff;
    text-align: center;
    align-content: center;
    align-items: center;
    font-size: 14px;
    display: flex;
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
  input[type="text"] {
    border-style: solid;
    border-color: white;
    border-width: 0 0 2px 0;
    padding-top: 25px;
    width: 60%;
    background: none;
    font-size: 16pt;
  }
  @media (max-width: 800px) {
    .lugar {
      display: inline-block;
      width: 90%;
      height: 100px;
      font-size: 14px;
      text-decoration: none;
      text-align: center;
      margin: 10px;
      text-shadow: 2px 2px 4px #666;
    }
    .a {
      padding-left: 10px;
      padding-top: 20px;
      flex-grow: 1;
      display: flex;
      flex-direction: row;
      justify-content: left;
      align-items: center;
    }
    .icon {
      height: 60px;
      width: 60px;
      margin-top: 0;
    }
    h1 {
      font-size: 24pt;
      margin-left: 10px;
    }
  }
`;
