import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './Utils/ScrollToTop/ScrollToTop'
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop>
             <App/>
        </ScrollToTop>
    </BrowserRouter>,
 document.getElementById('root')
);