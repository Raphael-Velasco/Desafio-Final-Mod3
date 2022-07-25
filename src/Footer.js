import React, {Component} from 'react'
import styled from "styled-components";

const Footer = styled.div`
    width:100vw;
    height:25vh;
    background-image:linear-gradient(to right bottom, purple, blue);
`

export default class FooterApp extends Component{
    render(){
        return(
            <Footer>
                <p>Lorem Ipsum</p>
            </Footer>
        )
    }
}