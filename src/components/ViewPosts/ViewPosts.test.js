import React from 'react';
import ReactDOM from 'react-dom';
import ViewPosts from './ViewPosts';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'

describe('ViewPosts component', () => {
    
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                        <ViewPosts/>
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
          .create(
                <BrowserRouter>
                    <ViewPosts/>
                </BrowserRouter>)
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });
});