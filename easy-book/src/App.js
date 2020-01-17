import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import 'bootstrap/dist/js/bootstrap.js';
import './styles/index.scss';
import {GlobalStyle} from './styles/style';
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Write from "./pages/write";
function App () {
  return (
    <div className="App">
      <GlobalStyle />
      {/* react-redux通过provider接管组件的store */}
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/detail/:id" component={Detail}></Route>
          <Route exact path="/write" component={Write}></Route>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
