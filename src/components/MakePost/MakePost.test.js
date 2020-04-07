import React from 'react';
import ReactDOM from 'react-dom';
import MakePost from './MakePost';
import renderer from 'react-test-renderer';

describe('MakePost component', () => {
    
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MakePost/>, div);
    ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
          .create(<MakePost/>)
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });
});