import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
 
 *{
   
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
 -webkit-font-smoothing: antialiased !important;
  }
  .link{
    text-decoration:none;
    width:16%;
    padding: 14px 10px 14px 10px;
    height: 10%;
    background-color: #408acf;
    color: #fffefe;
    text-align: center;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: bold;
    box-shadow: 0px 3px grey;
    margin-right:25px;
  }
  .link:hover{
    width:16%;
    padding: 14px 10px 14px 10px;
    height: 10%;
    background-color: #40c2ff;
    color: #fffefe;
    text-align: center;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: bold;
    box-shadow: 0px 1px grey;
    margin-right:25px;
  }
  body{
    background-color:#2f2f2f;
    background-size: cover;
  }

    h1{
    font-size: 35pt;
  }
  button {
    box-shadow: 4px 4px grey;
    font-size: 18px;
    display: inline-block;
    margin: 10px;
    padding: 10px 10px 10px 10px;
    color: black;
    margin-bottom: 5px;
    width: 170px;
    border-radius: 1px;
    border: 1px;
    text-align: center;
    cursor: pointer;
  }
  button:hover {
    font-size: 18px;
    box-shadow: 2px 2px grey;
    display: inline-block;
    margin: 10px;
    margin-bottom: 5px;
    padding: 10px 10px 10px 10px;
    color: black;
    width: 170px;
    border-radius: 1px;
    border: 1px;
    text-align: center;
    cursor: pointer;
  }
  section{
    border-radius:5px;
  }
  h1{
    color:white;
  }
  ::-webkit-input-placeholder {
   color: #aaaaaa;
}
@media only screen and (max-width: 800px) {
 
  }
`;
