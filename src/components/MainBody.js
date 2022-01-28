import React from 'react';
import PopularCities from "./Body/PopularCities/PopularCities";
import Search from "./Body/Search/Search";
import MapAndHouses from "./Body/MapAndHouses";
import styled from "styled-components";

const MainBody = () => {
    return (
        <>
            <PopularCities />
            {/*<Search />*/}
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

const Container = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1365px;
`