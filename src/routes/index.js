import React from 'react';
import { BrowserRouter, Switch} from 'react-router-dom';

import Route from './Route';

import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";



export default function Routes(){
  return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Cadastro" component={Cadastro} />
          <Route path="/Home" component={Home} isPrivate/>

        </Switch>
      </BrowserRouter>

      
  );
  }