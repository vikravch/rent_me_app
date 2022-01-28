import React from 'react';
import styled from "styled-components";

const Search = () => {
    return (
        <Cities>
            <SearchInput type="text"/>
            <Button>Price</Button>
            <Button>Type</Button>
            <Button>Rooms</Button>
            <Button>Dates</Button>
            <Button>Amenities</Button>
        </Cities>
    );
};

export default Search;

const Cities = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #004152;
  font-weight: bold;
`

const SearchInput = styled.input`
width: 300px;
  margin-right: 20px;
`

const Button = styled.button`
  margin-right: 20px;
  width: 90px;
`