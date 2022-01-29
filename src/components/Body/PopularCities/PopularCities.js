import React from 'react';
import newYork from "../../../images/MainBody/PopularCities/new-york.jpg"
import rome from "../../../images/MainBody/PopularCities/rome.jpg"
import sanFrancisco from "../../../images/MainBody/PopularCities/san-francisco.jpg"
import telAviv from "../../../images/MainBody/PopularCities/tel-aviv.jpg"

import PopularCitiesTemp from "./PopularCitiesTemp";
import styled from "styled-components";

const citiesAndNames = [
    {city: newYork, name: "New York"},
    {city: rome, name: "Rome"},
    {city: sanFrancisco, name: "San Francisco"},
    {city: telAviv, name: "Tel Aviv"}
]

const PopularCities = () => {
    return (
        <>

            <Cities>Popular Cities</Cities>
            <Div>
                {
                    citiesAndNames.map(item => {
                        return <PopularCitiesTemp name={item.name} city={item.city}/>
                    })
                }
            </Div>
        </>
    );
};

export default PopularCities;


const Div = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1365px;
  @media (max-width: 600px) {
    flex-direction: column;
    width: auto;
  }
    `
const Cities = styled.h1`
  margin-bottom: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #004152;
  font-weight: bold;
`