import React from 'react';
import ReactDOM from 'react-dom';
import AuthBoxes from './AuthBoxes';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'

describe('AuthBoxes component', () => {
    
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                        <AuthBoxes/>
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
          .create(
                <BrowserRouter>
                    <AuthBoxes/>
                </BrowserRouter>)
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });
});