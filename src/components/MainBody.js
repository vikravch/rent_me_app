import React from 'react';
import PopularCities from "./Body/PopularCities/PopularCities";
import Search from "./Body/Search/Search";
import MapAndHouses from "./Body/MapAndHouses";
import styled from "styled-components";

const MainBody = () => {
    return (
        <>
            <PopularCities />
            <Margin/>
            <Search />
            {/*<MapAndHouses />*/}
        </>
    );
};

export default MainBody;

// const MapHouses = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//
// `

const Margin = styled.div `
  margin: 20px 0;
  @media (max-width: 600px) {
    margin: 0;
  }
`