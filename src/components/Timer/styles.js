import styled from "styled-components";

export const TimerWrapper = styled.div`
  width: fit-content;
  position: fixed;
  right: 0;
  bottom: 10px;
  font-size: 50px;
  font-family: digital-font, sans-serif;
`;

export const Progress = styled.div`
  width: 100%;
  height: 10px;
  background-color: lightgray;
  margin-left: auto;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ProgressBar = styled.div`
  width: ${({width})=>width}%;
  background-color: #ffbf2b;
  height: 100%;
`;