import React, { Component } from 'react';
import Layout from './components/Layout/Layout.js';
import VoteCard from './components/VoteCard/VoteCard.js';
import ResultCard from './components/ResultCard/ResultCard.js';
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
    voteChoice: null
  };

  voteHandler = voteChoice => {
    this.setState({
      ...this.state,
      voted: !this.state.voted,
      voteChoice: voteChoice
    });
  };
  render() {
    const { voted, voteChoice } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          {!voted ? (
            <VoteCard
              first="Firebase"
              second="Node"
              firstIcon={firebase}
              secondIcon={node}
              voteHandler={this.voteHandler}
            />
          ) : (
            <ResultCard
              voteChoice={voteChoice}
              voteHandler={this.voteHandler}
            />
          )}
        </Layout>
      </ThemeProvider>
    );
  }
}

export default App;
