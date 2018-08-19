import React, { Component } from 'react';
import styled from 'styled-components';

import Icon from '../../../ui/Icon/Icon.js';

const StyledIconSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px auto 20px auto;
`;

class IconSection extends Component {
  render() {
    return (
      <StyledIconSection>
        <Icon src={this.props.firstIcon} width="100px" height="100px" />
        <Icon src={this.props.secondIcon} width="100px" height="100px" />
      </StyledIconSection>
    );
  }
}

export default IconSection;
