import React from 'react';
import styled from "styled-components"
const PopularCitiesTemp = (props) => {
    return (
        <div>
            <Image src={props.city} />
            <Names>{props.name}</Names>
        </div>
    );
};

export default PopularCitiesTemp;

const Names = styled.p`
  position: relative;
  top: -55px;
  left: 27px;
  color: white;
  font-size: 25px;
  font-weight: bold;
    `

const Image = styled.img`
  width: 320px;
  height: 250px;
  padding: 10px;
  @media (max-width: 600px) {
    width: 100%
  ;
    height: auto;
    padding: 0;
  }
  
    `
