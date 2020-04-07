import React from 'react';
import ReactDOM from 'react-dom';
import UserPosts from './UserPosts';
import renderer from 'react-test-renderer';

describe('UserPosts component', () => {
    
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserPosts
        users={[]} 
        posts={[]}
        updatePosts={function(){}}
        />, div);
    ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
          .create(<UserPosts
            users={[]} 
            posts={[]}
            updatePosts={function(){}}
            />)
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });
});