import React from 'react';
import ReactDOM from 'react-dom';
import ViewPost from './ViewPost';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'

describe('ViewPost component', () => {
    
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                        <ViewPost/>
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
          .create(
                <BrowserRouter>
                    <ViewPost/>
                </BrowserRouter>)
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });
});