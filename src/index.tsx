import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { fontStyle } from './constants/style';
import Nav from './components/Nav';
import Home from './components/Home';
import Details from './components/Details';
import Map from './components/Map';
import Accommodations from './components/Accommodations';
import * as serviceWorker from './serviceWorker';

const App = (): ReactElement => {
  return (
    <div style={fontStyle}>
      <Nav />
      <Home />
      <Details />
      <Map />
      <Accommodations />
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

serviceWorker.unregister();
