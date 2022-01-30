import react, { useState } from "react";
import Box from "./components/Box";
import styled from "styled-components";

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: lightcyan;
  margin: -8px;
  user-select: none;
  overflow: hidden;
`;
const CounterContainer = styled.div`
  display: flex;
  width: 100vw;
  min-height: 90vh;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 1em;
`;
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ResetButton = styled.button`
  background: darkgray;
  color: white;
  border: none;
  padding: 0.5em 1em;
  margin: 10px;
  border-radius: 15px;
  :active {
    background: black;
  }
`;
const InputStyled = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid darkblue;
  width: 50%;
  text-align: center;
  padding-bottom: 5px;

  :focus {
    outline: none;
  }
`;
const PlayButtonStyled = styled.button`
  background: darkgray;
  color: white;
  border: none;
  padding: 0.5em 1em;
  margin: 10px;
  border-radius: 15px;
  :active {
    background: black;
  }
`;
const QuestionStyled = styled.h4`
  font-family: helvetica;
  font-weight: bolder;
  font-size: 20px;
`;
function App() {
  const [numberOfPlayers, setNumberOfPlayers] = useState(0);
  const [respuesta, setRespuesta] = useState("");
  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    return setNumberOfPlayers(Array.from(Array(parseInt(respuesta))));
  };
  const handleChange = (e) => {
    setRespuesta(e.target.value);
    console.log(respuesta);
  };
  return (
    <AppStyled>
      {numberOfPlayers === 0 ? (
        <>
          <QuestionStyled>How many counters are needed?</QuestionStyled>
          <FormStyled onSubmit={handleSubmit}>
            <InputStyled
              type="text"
              value={respuesta}
              onChange={handleChange}
            />
            <PlayButtonStyled type="submit">play!</PlayButtonStyled>
          </FormStyled>
        </>
      ) : (
        <>
          <h1>Counters</h1>
          <ResetButton
            onClick={() => {
              setNumberOfPlayers(0);
              setRespuesta("");
            }}
          >
            Reset!
          </ResetButton>
          <CounterContainer>
            {numberOfPlayers.map((v, i) => (
              <Box key={i}></Box>
            ))}
          </CounterContainer>
        </>
      )}
    </AppStyled>
  );
}

export default App;
