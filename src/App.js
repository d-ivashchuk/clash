import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { db } from './firebase';
import * as routes from './constants/routes.js';

import theme from './styles/theme/theme.js';

import Logo from './ui/Logo/Logo.js';
import ClashCard from './components/ClashCard/ClashCard.js';
import Clashes from './components/Clashes/Clashes.js';
import Layout from './components/Layout/Layout.js';
import Loader from 'react-loader-spinner';
import LogoWrapper from './ui/Logo/LogoWrapper/Logowrapper.js';

import clash from './assets/clash.svg';

import { injectGlobal, ThemeProvider } from 'styled-components';

injectGlobal`
*{
  margin:0;
  padding:0;
}
body{
  font-family: "brandon-grotesque", "Brandon Grotesque", "Source Sans Pro", "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif;
  text-rendering: optimizeLegibility;
}
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

    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <Route
              exact
              path={'/clash:id'}
              render={() => {
                return clashes ? (
                  <ClashCard clashes={clashes} handleVote={this.handleVote} />
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
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}
export default App;
