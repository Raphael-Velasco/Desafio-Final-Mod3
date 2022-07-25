import React, {Component} from 'react'
import styled from 'styled-components'


const AboutMeContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background-color: black;
    color: white;
    height:100%;
    @media(max-width:1080px){
        flex-direction: column;
        height:100%;
    }

    
`
const AboutContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:40vh;
    font-size:15px;
    margin:55px;
    margin-top:100px;
    @media(max-width:1080px){
        height:600px;
        flex-direction: column;
        margin:50px;
        
    }
`
const CareerContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:40vh;
    font-size:15px;
    margin:55px;
    @media(max-width:1080px){
        height:500px;
        flex-direction: column;
        margin:50px;
    }
`
const WhereILiveContainer =styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:40vh;
    font-size:15px;
    margin:55px;
    @media(max-width:1080px){
        height:500px;
        flex-direction: column;
        margin:50px;
    }
`
const AboutMeImg = styled.img`
    width:24vw;
    height:50vh;
    box-shadow: 10px 10px #d2232a;
    @media(max-width:1080px){
       width:50%;
    }
`
const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:60vw;
    text-align: center;
    @media(max-width:1080px){
        margin:40px;
        width:500px;
    }
`
const AboutMeTitle = styled.h2`
    text-transform: uppercase;
`
const Lines = styled.hr`
    width:100px;
    height:2px;
    background-color:gold;
    border: none;
`
const AboutMeP = styled.p`
    width:600px;
    height:150px;
    margin:30px;
    background-color:#d2232a ;
    color:black;
    font-size:14px;
    @media(max-width:1080px) {
        width:50%;
        height:160px;
        font-size: 10px;}
        
`
export default class AboutMe extends Component{
    render(){
        return(
            <AboutMeContainer>

                <AboutContainer>
                <AboutMeImg src="https://scontent-gig2-1.xx.fbcdn.net/v/t39.30808-6/217945957_2568082416671293_2530383331009959991_n.jpg?stp=dst-jpg_s206x206&_nc_cat=101&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeHdzJ2o2s7xetbQgeFiPw-to1UOzLnCrymjVQ7MucKvKbTBjjHjkZk37Lo5pvppxIhQZO1auTBmHzS8vti55xX_&_nc_ohc=cHa-mWCqTXAAX9ZYKu1&tn=dC8Zd8qRTjboNVaK&_nc_ht=scontent-gig2-1.xx&oh=00_AT8vBKuzYsXiaLcwO_tPof6b353phtCxy_Ow2V08R7uEwg&oe=62E082FE" alt=""/>
                <TextContainer>
                <AboutMeTitle>About</AboutMeTitle>
                <Lines></Lines>
                <AboutMeP>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</AboutMeP>
                </TextContainer>
                </AboutContainer>

                <CareerContainer>
                <AboutMeImg src="https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/93721558_2093581207454752_5673677481920430080_n.jpg?stp=dst-jpg_p206x206&_nc_cat=109&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeEWKKi-Gko6ank2knOmE0rbnPijFyIkdzmc-KMXIiR3OZGuKzSdUDONTD5t_7mV6D6_42Le3XNd-ti8P1k28V6D&_nc_ohc=Bgi0zd8_3pEAX_cM_oY&_nc_ht=scontent-gig2-1.xx&oh=00_AT8PXcfdb8py8v13UsWbi7vKVg71TasHj5ZMuRHCLY7YJg&oe=62FE6A50" alt=""/>
                <TextContainer>
                <AboutMeTitle>Career</AboutMeTitle>
                <Lines></Lines>
                <AboutMeP>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</AboutMeP>
                </TextContainer>
                
                </CareerContainer>

                <WhereILiveContainer>
                <AboutMeImg src="https://clicknagalera.com.br/wp-content/uploads/2021/07/IMG_20210707_102308075_HDR.jpg" alt=""/>
                <TextContainer>
                <AboutMeTitle>Where I Live</AboutMeTitle>
                <Lines></Lines>
                <AboutMeP>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</AboutMeP>
                </TextContainer>
                </WhereILiveContainer>
            
            </AboutMeContainer>
        )
    }
}