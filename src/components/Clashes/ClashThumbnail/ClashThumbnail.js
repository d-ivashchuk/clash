import React, { Component } from 'react';
import styled from 'styled-components';
import Link from '../../../ui/Link/Link.js';

import { shadow } from '../../../styles/utils/shadow.js';
import { borderRadius } from '../../../styles/utils/borderRadius.js';

const calcFract = (numerator, denominator) => {
  return Math.round(numerator / denominator * 100);
};

const StyledBalance = styled.div`
  margin-top: 10px;
  position: relative;
  min-width: 200px;
  min-height: 5px;
  max-width: 200px;
  max-height: 5px;
  background-image: linear-gradient(
    to right,
    ${props => props.theme.main},
    ${props => props.theme.main}
      ${props => calcFract(props.votes.first, props.votes.total)}%,
    #ccc ${props => calcFract(props.votes.first, props.votes.total)}%,
    #ccc
      ${props =>
        calcFract(props.votes.first, props.votes.total) +
        calcFract(props.votes.draw, props.votes.total)}%,
    ${props => props.theme.secondary}
      ${props =>
        calcFract(props.votes.first, props.votes.total) +
        calcFract(props.votes.draw, props.votes.total)}%
  );
  opacity: 0.6;
  filter: alpha(opacity=60);
`;

const StyledClashThumbnail = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px;
  flex-direction: column;
  min-width: 200px;
  min-height: 150px;
  max-width: 200px;
  max-height: 150px;
  background: white;
  ${shadow};
  ${borderRadius};

  p {
    text-transform: uppercase;
    font-weight: bold;
    color: #888;
    margin-bottom: 20px;
  }
  span {
    color: #ccc;
  }
`;

class ClashThumbnail extends Component {
  render() {
    const { names, votes, id } = this.props;
    return (
      <StyledClashThumbnail>
        <p>
          {names.first} <span>vs</span> {names.second}
        </p>
        <StyledBalance color="red" votes={votes} />
        <Link route={`/clash${id}`} label="to clash" />
      </StyledClashThumbnail>
    );
  }
}

export default ClashThumbnail;
