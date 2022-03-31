import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Main>
        <Title>나만의 단어장</Title>
      </Main>
      <AddBtn>
        <Link to="/addcard" style={{ textDecoration: "none", color:"white" }}>
          단어추가
        </Link>
      </AddBtn>
    </>
  );
}

const Main = styled.div`
  background-color: #fff5ee;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "NanumMyeongjo";
  border-radius: 0 0 8px 8px;
  border-bottom: 1px solid #dcdcdc;
`;

const Title = styled.h1`
  color: blue;
  margin-top: 0;
  margin-bottom: 0;
  color: #da70d6;
`;

const AddBtn = styled.div`
  :hover {
    background-color: #ff8cff;
  }
  font-size: 20px;
  font-weight: bolder;
  position: fixed;
  width: 2em;
  height: 2em;
  background-color: #d8bfd8;
  padding: 20px;
  border: 1px solid #d8bfd8;
  border-radius: 90px;
  float: right;
  bottom: 5vh;
  right: 5vw;
  font-family: "NanumMyeongjo";
  box-shadow: 0px 0px 10px 1px #FFB9F0;
`;

export default Header;
