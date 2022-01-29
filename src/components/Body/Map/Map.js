import React from 'react';
import styled from "styled-components";
import MapImg from "../../../images/MainBody/Map/Map.png"

console.log(MapImg)
const Map = () => {
    return (
        <>
                <Image src={MapImg} alt="Map"/>
        </>
    );
};

export default Map;

const Image = styled.img`
  margin-top: 20px;
  width: 830px;
  height: 1135px;
  @media (max-width: 600px) {
    width: auto;
    height: auto;
    margin: 0;
  }
`