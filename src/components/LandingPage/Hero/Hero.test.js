import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './Hero';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'

describe('Hero component', () => {
    
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                        <Hero/>
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
          .create(
                <BrowserRouter>
                    <Hero/>
                </BrowserRouter>)
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });
});