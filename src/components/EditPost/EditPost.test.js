import React from 'react';
import ReactDOM from 'react-dom';
import EditPost from './EditPost';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'

describe('EditPost component', () => {
    
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                        <EditPost/>
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
          .create(
                <BrowserRouter>
                    <EditPost/>
                </BrowserRouter>)
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });
});