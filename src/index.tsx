import React, { ReactElement, CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Details from './components/Details';
import Accommodations from './components/Accommodations';
import * as serviceWorker from './serviceWorker';

export const blockStyle: CSSProperties = {
  textAlign: 'center',
  fontSize: '20px',
  height: '600px',
  padding: '100px 0',
};

const App = (): ReactElement => {
  return (
    <div>
      <Nav />
      <Home />
      <Details />
      <Accommodations />
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root')
);

serviceWorker.unregister();
