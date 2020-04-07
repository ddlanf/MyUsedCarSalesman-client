import React from 'react';
import ReactDOM from 'react-dom';
import Posts from './Posts';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'

describe('Posts component', () => {
    
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                        <Posts
                            posts={[]}
                            images={[]}/>
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
          .create(
                <BrowserRouter>
                    <Posts
                      posts={[]}
                      images={[]}/>
                </BrowserRouter>)
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });
});