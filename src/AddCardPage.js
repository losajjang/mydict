import React, { useRef, useState } from "react";
import styled from "styled-components";
import data from "./Data";
import { useDispatch } from "react-redux";
import { createCard, addCardOne } from "./redux/modules/cardModule";
import { useHistory } from "react-router-dom";

function AddCard() {
  let history = useHistory();
  const [add, setAdd] = useState(data);
  // console.log(add)

  const wordRef = useRef(null);
  const meanRef = useRef(null);
  const exRef = useRef(null);

  const dispatch = useDispatch();

  const addNewCard = () => {
    // console.log(wordRef.current.value);
    // console.log(meanRef.current.value);
    // console.log(exRef.current.value);
    // dispatch(createCard({ word: wordRef.current.value, mean: meanRef.current.value, ex: exRef.current.value }));
    
    dispatch(addCardOne({ word: wordRef.current.value, mean: meanRef.current.value, ex: exRef.current.value }))
    
    
    // dispatch(createCard(meanRef.current.value));
    // dispatch(createCard(exRef.current.value));
  };
  // console.log(addNewCard);
  // console.log(wordRef);

  // window.setTimeout(() => {
  //   console.log(wordRef.current.value);

  // }, 1000);

  return (
    <Container>
      <ContainerBox>
        <InputComponent>
          <InputLabel>단어</InputLabel>
          <InputBox type="text" ref={wordRef} />
        </InputComponent>
        <InputComponent>
          <InputLabel>설명</InputLabel>
          <InputBox type="text" ref={meanRef} />
        </InputComponent>
        <InputComponent>
          <InputLabel>예시</InputLabel>
          <InputBox type="text" ref={exRef} />
        </InputComponent>
        <AddButton
          onClick={() => {
            addNewCard();
            history.push("/");
          }}
        >
          추가하기
        </AddButton>
      </ContainerBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  font-family: "NanumMyeongjo";
  padding: 20px;
  /* height: 100vh; */
`;

const ContainerBox = styled.div`
  align-items: center;
  width: auto;
  height: auto;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  padding: 20px 20px 40px 20px;
  box-shadow: 0px 0px 10px 1px #dcdcdc;
`;

const InputComponent = styled.div`
  background-color: #d8bfd8;
  display: table;
  padding: 10px;
  margin: 0 0 10px 0;
  min-width: 200px;
  width: 20vw;
  border-radius: 6px;
  height: auto;
`;

const InputLabel = styled.p`
  margin: 0 0 5px 0;
  text-decoration: underline;
  text-align: left;
`;

const InputBox = styled.input`
  height: 40px;
  width: 95%;
  border-radius: 6px;
  border-top: 0;
  border-left: 0;
`;

const AddButton = styled.div`
  :hover {
    background-color: #dda0dd;
  }
  :active {
    box-shadow: none;
  }
  background-color: #d8bfd8;
  cursor: pointer;
  margin: 10px;
  min-width: 200px;
  width: 20vw;
  padding: 10px;
  font-size: 1.3rem;
  color: white;
  border-radius: 6px;
  box-shadow: 3px 3px 3px lightgray;
  margin: auto;
`;

export default AddCard;
