import React from 'react';
import Global from './styles/global';
import Routes from './routes/routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Global />
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
