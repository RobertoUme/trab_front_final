import { createGlobalStyle } from "styled-components";
import bg from "../assets/bg.png";
import bgp from "../assets/bgp.png";
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Rozha+One&display=swap');
 
 *{
   
    margin: 0;
    padding: 0;
    font-family: 'Rozha One', serif;
 -webkit-font-smoothing: antialiased !important;
  }
  body{
    background: url(${bg}) no-repeat right;
    background-size: cover;
  }

    h1{
    font-size: 40pt;
  }
  button {
    box-shadow: 4px 4px grey;
    font-size: 18px;
    display: inline-block;
    background: #ac1900;
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
    background: #e65100;
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
  body{
  background: url(${bgp}) no-repeat right;}
  }
`;
