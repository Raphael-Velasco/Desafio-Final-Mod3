import React, {Component} from 'react'
import Header from './Header'
import Main from './Main'
import AboutMe from './RouterPages/AboutMe'
import Onu from './RouterPages/Onu'
import Projects from './RouterPages/Projects'
import { BrowserRouter as Router,Routes, Route,} from "react-router-dom";
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    list-style:none;
    font-family: 'Oswald', sans-serif;
  }
`;

export default class  BlogApp  extends Component{
    render(){
        return(
            <>
                <GlobalStyle/>
                <Router>
                  <Header/>
                  <Routes>
                    <Route path="/AboutMe" element={<AboutMe/>} />
                    <Route path="/" element={<Main/>}/>
                    <Route path="/Onu" element={<Onu/>} />
                    <Route path="Projects" element={<Projects/>}/>
                  </Routes>
                </Router>
                
            </>
        )
    }
}
