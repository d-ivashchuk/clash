import React, { Component } from 'react';
import ClashThumbnail from './ClashThumbnail/ClashThumbnail.js';
import { db } from '../../firebase';

class Clashes extends Component {
  state = {
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

  render() {
    const { clashes } = this.state;
    return clashes
      ? clashes.map(clash => (
          <ClashThumbnail
            key={clash.key}
            names={clash.names}
            votes={clash.votes}
            id={clash.key}
          />
        ))
      : null;
  }
}

export default Clashes;
