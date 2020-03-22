import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom'
import  { PostProvider } from './contexts/PostContext'
import ScrollToTop from './Utils/ScrollToTop/ScrollToTop'
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <PostProvider>
            <ScrollToTop>
                <App/>
            </ScrollToTop>
        </PostProvider>
    </BrowserRouter>,
 document.getElementById('root')
);