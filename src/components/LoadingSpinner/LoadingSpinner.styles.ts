import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  height: 100%;
  width: 100%;
`;

export const SpinnerSVG = styled.svg`
  animation: ${spin} 1s linear infinite;
  width: 48px;
  height: 48px;
  stroke: #ffcc00; /* cor do spinner */
`;