import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
export default function Rotas({ component: Component, ...rest}) {

  return (
  
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <PrivateRoute path="/home" component={Home} />
    </BrowserRouter>
    
  );
}
