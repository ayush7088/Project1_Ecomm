import React from 'react'
import styled from 'styled-components';
import { Button } from './styles/Button';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <Wrapper>
            <div className="container">
                <div>
                    <h2><i> Error 404</i></h2>
                    <h3>Uh Oh! Seems the you are lost</h3>
                    <p>The page you are looking for is either corrupt or does not exist. Click on the below Home Button to redirect to the Home Page.</p>
                    <NavLink to="/">
                        <Button>
                            Go Back to Home
                        </Button>
                    </NavLink>
                </div>
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;

    h2 {
      font-size: 10rem;
    }

    h3 {
      font-size: 4.2rem;
    }

    p {
      margin: 2rem 0;
    }
  }
`;

export default ErrorPage;
