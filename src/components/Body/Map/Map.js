import React from 'react';
import styled from "styled-components";
import MapImg from "../../../images/MainBody/Map/Map.png"

console.log(MapImg)
const Map = () => {
    return (
        <div>
                <MapImage src={MapImg} alt="Map"/>
        </div>
    );
};

export default Map;

const MapImage = styled.img `
  width: 611px;
  height: 711px;
`