import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { db } from './firebase';
import * as routes from './constants/routes.js';

import theme from './styles/theme/theme.js';

import ClashCard from './components/ClashCard/ClashCard.js';
import Clashes from './components/Clashes/Clashes.js';
import Layout from './components/Layout/Layout.js';
import Loader from 'react-loader-spinner';
import Logo from './ui/Logo/Logo.js';
import LogoWrapper from './ui/Logo/LogoWrapper/Logowrapper.js';

import clash from './assets/clash.svg';

import { ThemeProvider, injectGlobal } from 'styled-components';
import styled from 'styled-components';

injectGlobal`
*{
  margin:0;
  padding:0;
}
body{
  font-family: "brandon-grotesque", "Brandon Grotesque", "Source Sans Pro", "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif;
  text-rendering: optimizeLegibility;
  );
}
h1{
  font-size: 32px;
}
@media(max-width:500px){
  h1{
    font-size: 26px;
  }
}
`;
const StyledBackground = styled.div`
  background: ${props => props.theme.main};
  background: -webkit-linear-gradient(
    to right,
    ${props => props.theme.main},
    ${props => props.theme.secondary}
  );
  background: linear-gradient(
    to right,
    ${props => props.theme.main},
    ${props => props.theme.secondary}
  );
  background-position: 50%;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

class App extends Component {
  state = {
    clashes: null
  };

  componentDidMount() {
    db.onceGetClashes().then(snapshot =>
      this.setState({
        clashes: Object.entries(snapshot.val()).map(e =>
          Object.assign(
            e[1],
            { key: e[0] },
            {
              voted: false,
              voteChoice: null
            }
          )
        )
      })
    );
  }

  handleVote = (id, voteChoice) => {
    const updatedArray = this.state.clashes.map(e => {
      if (e.key === id) {
        return { ...e, voted: !e.voted, voteChoice: voteChoice };
      } else {
        return e;
      }
    });
    this.setState({ ...this.state, clashes: updatedArray });
  };

  render() {
    const { clashes } = this.state;

    const loader = (
      <LogoWrapper>
        <Logo src={clash} width="200px" height="200px" />
        <Loader type="TailSpin" color="white" height={80} width={80} />
      </LogoWrapper>
    );
    const logo = (
      <LogoWrapper>
        <Logo src={clash} width="120px" height="120px" />
      </LogoWrapper>
    );

    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <React.Fragment>
            <StyledBackground />
            <Layout>
              <Route
                exact
                path={'/clash:id'}
                render={() => {
                  return clashes ? (
                    <React.Fragment>
                      {logo}
                      <ClashCard
                        clashes={clashes}
                        handleVote={this.handleVote}
                      />
                    </React.Fragment>
                  ) : (
                    loader
                  );
                }}
              />
              <Route
                exact
                path={routes.LANDING}
                render={() => {
                  return clashes ? <Clashes /> : loader;
                }}
              />
              <Route path={'/clash:id'} component={Clashes} />
            </Layout>
          </React.Fragment>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}
export default App;
