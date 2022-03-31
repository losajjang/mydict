import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import data from "./Data";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { loadCardList } from "./redux/modules/cardModule";
import { db } from "./firebase";
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";

function Cards(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCardList());
  }, []);

  // useEffect(async () => {
  //   // console.log(db, "mydict");

  //   // //파이어스토어에 있는 데이터 삭제하기.
  //   // const docRef = doc(db, "mydict", "e4WQbvUloevxV9O4afiw");
  //   // deleteDoc(docRef);

  //   // //파이어스토어에 있는 데이터 수정하기.
  //   // const docRef = doc(db, "mydict", "fbwmy2b0GHTaDd0shZK3");
  //   // updateDoc(docRef, { ex: "The iPhone is made by Apple" });

  //   // //파이어스토어에 데이터 추가하기.
  //   // addDoc(collection(db, "mydict"), { word: "game", mean: "게임", ex: "let the games begin" });

  //   // //파이어스토어 작동 확인하기.
  //   // const query = await getDocs(collection(db, "mydict"));
  //   // console.log(query);
  //   // query.forEach((doc) => {
  //   //   console.log(doc.id, doc.data());
  //   // });
  // }, []);

  // const mydict = firestore.collection('mydict')

  // let [단어, 단어변경] = useState(data);

  // const id = useParams();
  // const cardIndex = id;
  const cardList = useSelector((state) => state.addingCard.data);

  console.log(cardList);

  return (
    <>
      {cardList.map((a, i) => {
        return (
          <All>
            <Content cards={cardList[i]} i={i} key={i}></Content>
          </All>
        );
      })}
    </>
  );

  // function Content() {
  //   return (
  //     <Box>
  //       <UnderlineFont>단어</UnderlineFont>
  //       <MainText>{cardList.word}</MainText>
  //       <UnderlineFont>설명</UnderlineFont>
  //       <MainText>{cardList.mean}</MainText>
  //       <UnderlineFont>예시</UnderlineFont>
  //       <MainText style={{ color: "#00bfff", marginBottom: "0" }}>{cardList.ex}</MainText>
  //     </Box>
  //   );
  // }
}
function Content(props) {
  let history = useHistory();

  return (
    // <Box>
    //   <UnderlineFont>단어</UnderlineFont>
    //   <MainText>{props.cardList[props.cardIndex].word}</MainText>
    //   <UnderlineFont>설명</UnderlineFont>
    //   <MainText>{props.cardList[props.cardIndex].mean}</MainText>
    //   <UnderlineFont>예시</UnderlineFont>
    //   <MainText style={{ color: "#00bfff", marginBottom: "0" }}>{props.cardList[props.cardIndex].ex}</MainText>
    // </Box>
    <Box>
      <UnderlineFont>단어</UnderlineFont>
      <MainText>{props.cards.word}</MainText>
      <UnderlineFont>설명</UnderlineFont>
      <MainText>{props.cards.mean}</MainText>
      <UnderlineFont>예시</UnderlineFont>
      <MainText style={{ color: "#00bfff", marginBottom: "0" }}>{props.cards.ex}</MainText>
      <DetailBtn
        onClick={() => {
          history.push("/carddetail/" + props.i);
        }}
      >
        상세
      </DetailBtn>
    </Box>
  );
}

const All = styled.div`
  display: inline-block;
`;

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

const DetailBtn = styled.button`
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

export default Cards;
