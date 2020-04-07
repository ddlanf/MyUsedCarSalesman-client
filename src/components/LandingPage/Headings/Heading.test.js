import React from 'react';
import ReactDOM from 'react-dom';
import Headings from './Headings';
import renderer from 'react-test-renderer';

describe('Headings component', () => {
    
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Headings/>, div);
    ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
          .create(<Headings/>)
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });
});