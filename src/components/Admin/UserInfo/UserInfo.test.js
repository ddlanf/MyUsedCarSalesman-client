import React from 'react';
import ReactDOM from 'react-dom';
import UserInfo from './UserInfo';
import renderer from 'react-test-renderer';

describe('UserInfo component', () => {
    
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserInfo
        users={[]} 
        updateUsers={function(){}}
        />, div);
    ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
          .create(<UserInfo
            users={[]} 
            updateUsers={function(){}}
            />)
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });
});