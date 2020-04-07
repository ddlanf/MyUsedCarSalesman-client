import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'

describe('Login component', () => {

    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                       <Login
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
                    <Login
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