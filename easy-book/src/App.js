import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import { Globalstyle } from './style';
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Write from "./pages/write";
function App () {
  return (
    <div className="App">
      <Globalstyle />
      {/* react-redux通过provider接管组件的store */}
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/detail" component={Detail}></Route>
          <Route exact path="/write" component={Write}></Route>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
