import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
// import { removeCardOne } from "./redux/modules/bucket";

function CardDetail(props) {
  // const dispatch = useDispatch();
  // const history = useHistory();

  const { id } = useParams();
  const cardIndex = id;
  const cardList = useSelector((state) => state.addingCard.data);
  console.log(cardList);
  console.log(id);
  console.log(cardList[cardIndex]);
  console.log(cardList[cardIndex].word);

  return (
    //   <>{cardList[cardIndex]}</>
    <Box>
      <UnderlineFont>단어</UnderlineFont>
      <MainText>{cardList[cardIndex].word}</MainText>
      <UnderlineFont>설명</UnderlineFont>
      <MainText>{cardList[cardIndex].mean}</MainText>
      <UnderlineFont>예시</UnderlineFont>
      <MainText style={{ color: "#00bfff", marginBottom: "0" }}>{cardList[cardIndex].ex}</MainText>
      {/* <DeleteBtn
        onClick={() => {
          dispatch(removeCardOne(cardIndex));
          history.goBack();
        }}
      >
        삭제
      </DeleteBtn> */}
    </Box>
  );
}
const Box = styled.div`
  background-color: #d8bfd8;
  display: inline-block;
  /* float: left; */
  margin: 10px 20px;
  padding: 20px;
  width: 1fr;
  text-align: left;
  border-radius: 10px;
  box-sizing: border-box;
  border-right: 2px solid #dcdcdc;
  border-bottom: 2px solid #dcdcdc;
`;

const UnderlineFont = styled.p`
  text-decoration: underline;
  margin: 0;
  font-family: "NanumMyeongjo";
`;

const MainText = styled.p`
  /* font-weight: bold; */
  font-size: 2rem;
  margin: 0 0 20px 0;
  font-family: "NanumMyeongjo";
`;

const DeleteBtn = styled.button`
  :hover {
    background-color: lightgray;
  }
  :active {
    box-shadow: none;
  }
  font-family: "NanumMyeongjo";
  border: none;
  border-radius: 20px;
  width: 3em;
  height: 3em;
  cursor: pointer;
  justify-content: top;
  float: right;
  box-shadow: 0px 0px 10px 1px lightgray;
`;

export default CardDetail;
