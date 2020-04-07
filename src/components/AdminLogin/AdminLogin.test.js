import React from 'react';
import ReactDOM from 'react-dom';
import AdminLogin from './AdminLogin';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'

describe('AdminLogin component', () => {
    
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                        <AdminLogin/>
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
          .create(
                <BrowserRouter>
                    <AdminLogin/>
                </BrowserRouter>)
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });
});