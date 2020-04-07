import React from 'react';
import ReactDOM from 'react-dom';
import MyPosts from './MyPosts';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'

describe('MyPosts component', () => {
    
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                        <MyPosts
                          posts={[]}
                          images={[]}
                        />
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
          .create(
                <BrowserRouter>
                    <MyPosts
                      posts={[]}
                      images={[]}
                    />
                </BrowserRouter>)
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });
});