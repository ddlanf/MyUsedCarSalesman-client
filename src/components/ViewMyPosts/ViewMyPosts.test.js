import React from 'react';
import ReactDOM from 'react-dom';
import ViewMyPosts from './ViewMyPosts';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'

describe('ViewMyPosts component', () => {
    
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                        <ViewMyPosts/>
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
          .create(
                <BrowserRouter>
                    <ViewMyPosts/>
                </BrowserRouter>)
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });
});