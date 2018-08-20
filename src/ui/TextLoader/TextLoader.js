import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const animate = keyframes`
0%{
      background-position: -468px 0
  }
  100%{
      background-position: 468px 0
  }
`;

const StyledTextLoader = styled.div`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  background: #ccc;
  margin:10px auto 0 auto;
  border-radius: 20px;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${animate}
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
`;

const TextLoader = props => {
  const lines = parseInt(props.lines, 10);
  const elements = [...Array(lines).keys()];
  return (
    <React.Fragment>
      {elements.map(element => (
        <StyledTextLoader
          key={element}
          width={props.width}
          height={props.height}
        />
      ))}
    </React.Fragment>
  );
};

export default TextLoader;
