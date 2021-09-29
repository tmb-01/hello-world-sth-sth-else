import styled, { keyframes } from "styled-components";

export const Logo = styled.div`
  width: 200px;
  margin: auto;
  padding: 20px;
`;

export const Title = styled.div`
  width: fit-content;
  margin: auto;
  font-size: 40px;
  font-weight: bold;
`;

export const FullNameInputWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
  display: flex;
`;

export const FullNameInputBox = styled.form`
  margin: auto;
  width: 400px;
  height: auto;
  padding: 20px;
  /* border: 1px solid black; */
  box-shadow: 0 0 10px #ffbf2b;
  border-radius: 10px;
  input {
    display: block;
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    font-size: 20px;
    outline-color: #ffbf2b;
    border: 1px solid #ffbf2b;
    border-radius: 5px;
    &:first-child {
      margin-top: 0;
    }
  }
  button {
    width: 200px;
    padding: 10px;
    font-size: 20px;
    margin: auto;
    display: block;
    background-color: #ffbf2b44;
    color: #ffbf2b;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #ffbf2b55;
    }
  }
`;

export const FullName = styled.div`
  font-size: 30px;
  font-weight: bold;
  width: fit-content;
  margin: auto;
`;

export const TestWrapper = styled.div`
  width: 700px;
  margin: auto;
  padding: 20px;
`;

export const TestBox = styled.div`
  width: 100%;
  margin: 20px 0;
`;

export const Question = styled.p`
  width: 100%;
  font-weight: bold;
  font-size: 20px;
`;

export const Option = styled.label`
  width: 100%;
  display: block;
  margin: 10px 0;
  display: flex;
  align-items: center;
  input[type="radio"] {
    /* background-color: red; */
    appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid lightgray;
    border-radius: 50%;
    margin-right: 5px;
    &:checked {
      border: 5px solid #ffbf2b;
    }
  }
`;

const loading = keyframes`
  from{
      transform:rotate(0deg);
  }
  to{
    transform:rotate(360deg);
  }
`;

export const Loading = styled.div`
  width: 40px;
  height: 40px;
  border: 5px solid black;
  border-top-color: transparent;
  border-radius: 50%;
  animation-name: ${loading};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  margin: auto;
`;

export const FinishedButton = styled.button`
  display: block;
  width: 200px;
  margin-bottom: 20px;
  padding: 15px;
  margin: 0 auto 20px;
  background-color: ${({ process: { loading, error, success } }) =>
    loading
      ? "lightgrey"
      : error
      ? "lightpink"
      : success
      ? "lightgreen"
      : "#ffbf2b55"};
  color: ${({ process: { loading, error, success } }) =>
    loading ? "black" : error ? "red" : success ? "green" : "#ffbf2b"};
  border: 0;
  border-radius: 5px;
  font-weight: bold;
`;

export const TimeOut = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  background-color: #3490dc;
  img {
    width: 400px;
    display: block;
    margin: auto;
  }
`;
