import React, { Component } from 'react';
import styled from 'styled-components';

const StyledCurrentBalance = styled.div`
  display: flex;
  margin: auto;
  width: 85%;
  justify-content: center;
  align-items: flex-start;
`;

const Bar = styled.div`
margin-right:2px;
width:${props => props.width}
height:20px;
background-color:${props => (props.active ? props.theme.main : '#ccc')}
border-radius:6px;
`;
const Label = styled.div`
  width: ${props => props.width};
  text-align: center;
  color: #999;
`;

const calcFract = (numerator, denominator) => {
  return Math.round(numerator / denominator * 100);
};

class CurrentBalance extends Component {
  render() {
    const { first, second, draw, total } = this.props.votes;
    const { active, labeled } = this.props;

    const firstFraction = `${calcFract(first, total)}%`;
    const secondFraction = `${calcFract(second, total)}%`;
    const drawFraction = `${calcFract(draw, total)}%`;

    return (
      <React.Fragment>
        <StyledCurrentBalance>
          <Bar
            width={firstFraction}
            active={active === 'first' ? true : false}
          />
          <Bar width={drawFraction} active={active === 'draw' ? true : false} />
          <Bar
            width={secondFraction}
            active={active === 'second' ? true : false}
          />
        </StyledCurrentBalance>
        {labeled ? (
          <StyledCurrentBalance>
            <Label width={firstFraction}>{firstFraction}</Label>
            <Label width={drawFraction}>{drawFraction}</Label>
            <Label width={secondFraction}>{secondFraction}</Label>
          </StyledCurrentBalance>
        ) : null}
      </React.Fragment>
    );
  }
}

export default CurrentBalance;
