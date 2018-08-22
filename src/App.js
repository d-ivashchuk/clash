import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { db } from './firebase';
import * as routes from './constants/routes.js';

import Clashes from './components/Clashes/Clashes.js';
import Layout from './components/Layout/Layout.js';
import VoteCard from './components/VoteCard/VoteCard.js';
import ResultCard from './components/ResultCard/ResultCard.js';
import Loader from 'react-loader-spinner';

import { injectGlobal, ThemeProvider } from 'styled-components';

import node from './assets/node.svg';
import firebase from './assets/firebase.svg';

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
const theme = {
  main: '#8f94fb',
  secondary: '#4e54c8'
};

class App extends Component {
  state = {
    voted: false,
    voteChoice: null,
    clashes: null
  };

  componentDidMount() {
    db.onceGetClashes().then(snapshot =>
      this.setState({
        clashes: Object.entries(snapshot.val()).map(e =>
          Object.assign(e[1], { key: e[0] })
        )
      })
    );
  }

  voteHandler = voteChoice => {
    this.setState({
      ...this.state,
      voted: !this.state.voted,
      voteChoice: voteChoice
    });
  };

  render() {
    const { voted, voteChoice, clashes } = this.state;
    console.log(clashes);
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <Route
              exact
              path={routes.LANDING}
              render={() => {
                return clashes ? (
                  !voted ? (
                    <VoteCard
                      first={clashes[0].names.first}
                      second={clashes[0].names.second}
                      firstIcon={firebase}
                      secondIcon={node}
                      voteHandler={this.voteHandler}
                    />
                  ) : (
                    <ResultCard
                      voteChoice={voteChoice}
                      voteHandler={this.voteHandler}
                    />
                  )
                ) : (
                  <Loader
                    type="TailSpin"
                    color="white"
                    height={80}
                    width={80}
                  />
                );
              }}
            />
            <Route exact path={routes.LANDING} component={Clashes} />
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
