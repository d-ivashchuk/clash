import React, { Component } from 'react';
import styled from 'styled-components';
import ClashThumbnail from './ClashThumbnail/ClashThumbnail.js';
import { db } from '../../firebase';

const StyledClashesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 5px;
  max-width: 700px;
`;

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
    return (
      <StyledClashesWrapper>
        {clashes
          ? clashes.map(clash => (
              <ClashThumbnail
                key={clash.key}
                names={clash.names}
                votes={clash.votes}
                id={clash.key}
              />
            ))
          : null}
      </StyledClashesWrapper>
    );
  }
}

export default Clashes;
