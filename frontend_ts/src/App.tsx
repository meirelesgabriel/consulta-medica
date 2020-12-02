import React, {useState, useEffect } from 'react';
//import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import api from './services/api';
import Routes from './routes'

const App: React.FC = () => (
    <>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
        <GlobalStyle/>
    </>
);

export default App;
