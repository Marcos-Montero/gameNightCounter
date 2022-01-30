import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BotonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 80px;
  width: 80px;
  background: lightgray;
  border-radius: 50%;
  margin-bottom: 2em;
  transition-duration: 0.3s;
  box-shadow: 0px 0px 30px lightblue;
  color: black;
  margin: 1em;
  :hover {
    background: white;
    transform: scale(1.05);
  }
  :active {
    background: rgb(240, 200, 255);
    transform: scale(1.02);
  }
`;
const ContainerStyled = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InputStyled = styled.input`
  border: 1px solid transparent;
  border-bottom: 1px solid darkblue;
  background: transparent;
  text-align: center;
  font-weight: bolder;
  padding-bottom: 5px;

  width: 40%;
  :focus {
    outline: none;
  }
`;
const CuentaStyled = styled.p`
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 40px;
  user-select: none;
`;
const Box = (props) => {
  const [count, setCount] = useState(0);
  const handleClickLeft = () => {
    setCount(count + 1);
  };
  const handleClickRight = (e) => {
    e.preventDefault();
    setCount(count - 1);
  };
  return (
    <ContainerStyled>
      <InputStyled type="text" />
      <BotonStyled onClick={handleClickLeft} onContextMenu={handleClickRight}>
        <CuentaStyled>{count}</CuentaStyled>
      </BotonStyled>
    </ContainerStyled>
  );
};

export default Box;
