import React from 'react';
import ReactDOM from 'react-dom';
import Register from './Register';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'

describe('Register component', () => {
    
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                        <Register
                          isUserLoggedIn={false} 
                          userLogIn={function(){}}
                          userIsAtLoginOrRegister={function(){}}
                          userIsNotAtLoginOrRegister={function(){}}
                          isUserAtLoginOrRegister={false}
                        />
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
          .create(
            <BrowserRouter>
                <Register
                isUserLoggedIn={false} 
                userLogIn={function(){}}
                userIsAtLoginOrRegister={function(){}}
                userIsNotAtLoginOrRegister={function(){}}
                isUserAtLoginOrRegister={false}
                />
            </BrowserRouter>)
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });
});