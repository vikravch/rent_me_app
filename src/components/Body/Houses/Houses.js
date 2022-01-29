import React from 'react';
import PentHouseImg from "../../../images/MainBody/Houses/Eighty Seven Park Penthouse Family Room.webp"
import styled from "styled-components";
import {FaHouseUser, FaBed, FaBath} from "react-icons/fa"

const houseData = [
    {
        img: PentHouseImg,
        about: "Executive House in Prestigious Area",
        data: [
            {
                picture: <FaHouseUser />,
                description: "245 m2"
            },
            {
                picture: <FaBed />,
                description: "5 bdr"
            },
            {
                picture: <FaBath />,
                description: "2 bath"
            },
        ],
        price: 3000
    },
    {
        img: PentHouseImg,
        about: "Executive House in Prestigious Area",
        data: [
            {
                picture: <FaHouseUser />,
                description: "245 m2"
            },
            {
                picture: <FaBed />,
                description: "5 bdr"
            },
            {
                picture: <FaBath />,
                description: "2 bath"
            },
        ],
        price: 2000
    },
    {
        img: PentHouseImg,
        about: "Executive House in Prestigious Area",
        data: [
            {
                picture: <FaHouseUser />,
                description: "245 m2"
            },
            {
                picture: <FaBed />,
                description: "5 bdr"
            },
            {
                picture: <FaBath />,
                description: "2 bath"
            },
        ],
        price: 4000
    },
    {
        img: PentHouseImg,
        about: "Executive House in Prestigious Area",
        data: [
            {
                picture: <FaHouseUser />,
                description: "245 m2"
            },
            {
                picture: <FaBed />,
                description: "5 bdr"
            },
            {
                picture: <FaBath />,
                description: "2 bath"
            },
        ],
        price: 5000
    }
]
const Houses = () => {
    return (
        <HousesContainer>

                {
                    houseData.map(item => {
                        const {img, about, data, price} = item;
                        return <div>
                            <House src={img} alt="..."/>

                            <HouseInfo>
                                <p>{about}</p>
                                <p>{data.map(dt => {
                                    return <Div>
                                        <P>{dt.picture}</P>
                                        <P>{dt.description}d</P>
                                    </Div>
                                })}</p>
                                <p>&#8362;{price}</p>
                            </HouseInfo>


                        </div>
                    })
                }

        </HousesContainer>
    );
};

export default Houses;

{/*<div className="col-sm-12 col-md-6" key={price}>*/}
{/*    <img src={img} alt=""/>*/}
{/*    <Paragraph>*/}
{/*        <About className={"mx-auto"}>{about}</About>*/}
{/*        <p className={"mx-auto"}>{data.map(dt => {*/}
{/*            return <Div>*/}
{/*                <P>{dt.picture}</P>*/}
{/*                <P>{dt.description}d</P>*/}
{/*            </Div>*/}
{/*        })}</p>*/}
{/*        <p className={"mx-auto"}>&#8362;{price}</p>*/}
{/*    </Paragraph>*/}
{/*</div>*/}

const HousesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  //background: black;
  @media (max-width: 600px) {
    width: auto;
    `


const P = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3px;

`

const Div = styled.div`
  display: flex;
  flex-direction: row;

`

const House = styled.img`
  &:first-child {
    margin-top: 20px;
  }
  width: 500px;
  height: 200px;
  @media (max-width: 600px) {
    width: 100%;
    &:first-child {
      margin: 0;
    }
  }
    `
const HouseInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 500px;
  height: 100px;
  background: #0f4c81;
  color: white;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    width: auto;
  }
    `