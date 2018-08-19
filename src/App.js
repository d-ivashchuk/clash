import React, { Component } from 'react';
import Layout from './components/Layout/Layout.js';
import VoteCard from './components/VoteCard/VoteCard.js';
import { injectGlobal } from 'styled-components';

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

class App extends Component {
  render() {
    return (
      <Layout>
        <VoteCard
          first="Firebase"
          second="Node"
          firstIcon={node}
          secondIcon={firebase}
        />
      </Layout>
    );
  }
}

export default App;
