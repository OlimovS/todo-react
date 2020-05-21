import React, { Fragment } from 'react';
import Header from './components/Header/Header.js';
import { Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <Fragment>
     <BrowserRouter>
           <Route path='/' component={Header}/>
     </BrowserRouter>
    </Fragment>
  );
}

export default App;
