import React from 'react';
import ReactDOM from 'react-dom';
import UserComplaintsAndReports from './UserComplaintsAndReports';
import renderer from 'react-test-renderer';

describe('UserComplaintsAndReports component', () => {
    
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserComplaintsAndReports reports={[]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
          .create(<UserComplaintsAndReports reports={[]}/>)
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });
});