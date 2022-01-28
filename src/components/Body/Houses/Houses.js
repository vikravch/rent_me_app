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
        <div>

                {
                    houseData.map(item => {
                        const {img, about, data, price} = item;
                        return <div>
                            <img src={img} alt="..."/>

                            <div>
                                <div>
                                        <p>{about}</p>
                                            <p>{data.map(dt => {
                                                return <Div>
                                                    <P>{dt.picture}</P>
                                                    <P>{dt.description}d</P>
                                                </Div>
                                            })}</p>
                                        <p>&#8362;{price}</p>
                                </div>
                            </div>
                        </div>
                    })
                }

        </div>
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

const Image = styled.img`
  width: 300px;
  height: 110px;

  
    `
const Paragraph = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
  height: 60px;
  background-color: #1d3993;
  margin-bottom: 10px;
  font-size: 10px;
  color: white;
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
const About = styled.div`
  font-size: 11px;
  word-break: break-all;
`