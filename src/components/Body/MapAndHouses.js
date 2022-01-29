import React from 'react';
import Houses from "./Houses/Houses";
import Map from "./Map/Map";
import styled from "styled-components";

const MapAndHouses = () => {
    return (
        <Container>
                <Houses />
                <Map />
        </Container>
    );
};

export default MapAndHouses;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  width: 1365px;
  //background: black;
  @media (max-width: 600px) {
    flex-direction: column;
    width: auto;
  }
    `