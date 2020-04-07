import React from 'react';
import ReactDOM from 'react-dom';
import Admin from './Admin';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'

describe('Admin component', () => {
    
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                        <Admin/>
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
          .create(
                <BrowserRouter>
                    <Admin/>
                </BrowserRouter>)
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });
});