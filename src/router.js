import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './container/home';
import Features from './container/Features';
import Download from './container/download';
import Blog from './container/blog';
import Header from './components/header';


const Router = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/Features">
            <Features/>
          </Route>
          <Route exact path="/Download">
            <Download/>
          </Route>
          <Route exact path="/blog">
            <Blog/>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default Router;
