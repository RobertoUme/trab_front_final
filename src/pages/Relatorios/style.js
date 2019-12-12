import styled from "styled-components";
export const Container = styled.div`
  height: 100%;
  width: 100%;
  section {
    width:80%;
    margin-top: 50px;
    margin: 100px auto 50px auto;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 3px 3px 10px 2px rgba(0, 0, 0, 0.5);
    text-align: left;
    align-content: center;
    align-items: center;
    overflow-x:auto
  }
  .image{
    height:15%;
    width:15%;
    margin-right:30%;
    margin-left:2%;
  }
  h1{
    font-size: 30pt;
    margin-bottom:5%;
    margin-top:10%;
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
  .Cadastrar_Cliente .PButton{
    background-color: #408acf;
    color: #fffefe;
    text-align: center;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 18px;
    width:16%;
    font-weight: bold;
    padding: 14px 10px 14px 10px;
    height: 10%;
    box-shadow: 0px 1px grey;
  }
  .enviar{
    margin-top:20%;
    background-color: #408acf;
    color: #fffefe;
    width:60%;
  }
  .enviar:hover{
    margin-top:20%;
    background-color: #408acf;
    color: #fffefe;
    width:60%;
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
  form{
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
  td{
    padding:5px;
  }
th {
  font-size: 12pt;
  padding:7px;
  color: #fff;
  line-height: 1.4;
  background-color: #6c7ae0;
}

tr:nth-child(odd) {
  color: #000;
  background-color: rgb(248,246,255);
}
tr:nth-child(even) {
  color: #000;
  background-color: #e7e6ff;
}
table{
  width: 100%;
  min-width:1000px;
  border-collapse: collapse;
}
table th, table td:last-child {
     border-right: 0;
  }
  .link {
    font-size: 18px;
    margin: 10px;
    margin-left:30%;
    padding: 10px 20px 10px 20px;
    margin-bottom: 5px;
    width: 200px;
    text-align: center;
    cursor: pointer;
    
  }

  .link:hover {
    font-size: 18px;
    margin: 10px;
    margin-left:30%;
    padding: 10px 20px 10px 20px;
    margin-bottom: 5px;
    width: 200px;
    text-align: center;
    cursor: pointer;
  }
  @media (max-width: 500px) {
  .link {
    margin-left:15%;
  }

  .link:hover {
    margin-left:15%;
  }}
`;
