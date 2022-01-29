import React from 'react';
import styled from "styled-components"
const PopularCitiesTemp = (props) => {
    return (
        <>
            <Image src={props.city} />
            {/*<Names>{props.name}</Names>*/}
        </>
    );
};

export default PopularCitiesTemp;

const Names = styled.p`
  position: relative;
  top: -59px;
  left: 27px;
  color: white;
  font-size: 25px;
  font-weight: bold;
  
    `

const Image = styled.img`
  width: 320px;
  height: 250px;
  margin-right: 10px;
  &:last-child {
    margin-right: 0px;
  }
  @media (max-width: 600px) {
    width: auto;
    margin-right: 0;
    margin-bottom: 20px;
  }
    `
