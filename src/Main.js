import React, { Component } from "react";
import styled from "styled-components";

const Main = styled.div`
  height: 85vh;
  display: flex;
  justify-content:space-evenly;
  align-items: center;
  background-color: black;
  color:white;

  @media (max-width: 1050px){
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    height: 100%;
  }
`;
const PerfilContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    border-radius:100px;
    flex-direction: column;
    width: 25vw;
    height:55vh;
`   
const Perfil = styled.img`
  width: 350px;
  margin: 20px;
  box-shadow: 10px 10px #d2232a;
  

  @media(max-width:1050px){
    width: 200px;
    
  }
    
  
`;
const TextContainer = styled.div`
    text-align: center;
    margin:15px;
    display: flex;
    justify-content:flex;
    align-items: center;
    flex-direction: column;
`;
const Name = styled.h1`
    font-size:50px;
    text-transform: uppercase;

    &:hover{
    transition: color 1s;
    color: #d2232a;
    }
`
const Line = styled.hr`
    width:300px;
    height:2px;
    background-color:gold;
    border: none;
`
const Profession = styled.h2`
    background-color: #d2232a;
    width:250px;
    font-size:30px;
    color:black;
    margin:20px;
    text-transform: uppercase;
`
const IconsContainer = styled.div`
    width:100px;
    height:100px;
    display: flex;
    justify-content:center;
    align-items:flex-start;
    
`
const Icon = styled.img`
    width:5vw;
    margin:15px;

    @media (max-width:1050px){
      width:8vw;
    }
`

export default class MainApp extends Component {
  render() {
    return (
      <Main>


          <PerfilContainer>
            <Perfil src="https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/118213195_2229847463828125_1891797140543820346_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHchO5DRrwanrr7xzMl7JHuVnuKMDwJkr9We4owPAmSv5wG5hIgT8I6wpZ4CFt3rhsjzj6pNLcZhpIv9wNrtH0D&_nc_ohc=PAQz5Ujd-GsAX_wlGNj&tn=dC8Zd8qRTjboNVaK&_nc_ht=scontent-gig2-1.xx&oh=00_AT8ItxyyXVYsd4IRA9cPr5ahl3VbDhQ7cA3dw9lU88eMlA&oe=62FCC609"alt=""/>
            </PerfilContainer>
        <TextContainer>
        <Name>Raphael Velasco</Name>
        <Line></Line>
        <Profession>Web Developer</Profession>
        <IconsContainer>
        <a href="https://www.instagram.com/_raphaelvelasco/"><Icon src="https://cdn-icons.flaticon.com/png/512/3955/premium/3955024.png?token=exp=1658422859~hmac=467fe449def275458cbd63d8397a684e" alt=""></Icon></a>
        <a href="https://www.facebook.com/raphael.velasco.7140/"><Icon src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt=""></Icon></a>
        <a href="https://www.linkedin.com/in/raphael-de-paula-velasco-951724232/"><Icon src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt=""></Icon></a>
        <a href="https://github.com/Raphael-Velasco"><Icon src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt=""></Icon></a>
        <a href="https://twitter.com/RaphaelVelasco6"><Icon src="https://cdn-icons-png.flaticon.com/512/145/145812.png" alt=""></Icon></a>
        </IconsContainer>
        </TextContainer>

        
      </Main>
    );
  }
}
