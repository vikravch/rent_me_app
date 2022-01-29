import React from 'react';
import styled from "styled-components";

const Search = () => {
    return (
        <ContainerSearch>
            <MainInput type="text" placeholder="Why do you want to find? Type here!"/>
            <Button>Price</Button>
            <Button>Type</Button>
            <Button>Rooms</Button>
            <Button>Dates</Button>
            <Button>Amenities</Button>
        </ContainerSearch>
    );
};

export default Search;


const MainInput = styled.input`
  width: 500px;
  height: 50px;
  @media (max-width: 600px) {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid red;
  }
`

const Button = styled.button`

  background-color: #ffffff;
  border: 1px solid #0f4c81;
  color: #0f4c81;
  //padding: 15px 32px;
  width: 150px;
  height: 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 10px;
  }
`

const ContainerSearch = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1365px;
  //background: black;
  @media (max-width: 600px) {
    width: auto;
    flex-direction: column-reverse;
  }
    `