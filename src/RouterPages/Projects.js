import React, {Component} from 'react'
import styled from 'styled-components'
import img1 from './img/Screenshot_51.png'
import img2 from './img/Screenshot_52.png'
import img3 from './img/Screenshot_53.png'
import img4 from './img/Screenshot_54.png'
import img5 from './img/811a2452-3110-483f-afb1-8f7f8a646544.jpeg'
import img6 from './img/Screenshot_56.png'
const ProjectsContainer = styled.div`
    background-color:black;
    color:white;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    text-transform:uppercase;
    width:100%;
    min-height:100vh;
    @media(max-width:1050px){
    }

`
const HR = styled.hr`
    width:100px;
    height:2px;
    background-color:gold;
    border: none;
`
const Projects = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-wrap: wrap;
    @media(max-width:1050px){
        height:30%;
        width:50%;
    }
`
const Project1 = styled.div``
const Project2 = styled.div``
const Project3 = styled.div``
const Project4 = styled.div``
const Project5 = styled.div``
const Project6 = styled.div``
const ProjectImg = styled.img`
    width:28vw;
    height:28vh;
    margin:10px;
    box-shadow: 10px 10px #d2232a;
    @media(max-width:1050px){
        width:200px;
    }
`
const ProjectTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin:10px;

`


export default class ProjectsApp extends Component{
    render(){
        return(
             <ProjectsContainer>

                <Projects> 
                <Project1> 
                <ProjectTitle>               
                <h3>Project-Finn</h3>
                <HR></HR>
                </ProjectTitle>
                <a href='https://github.com/Raphael-Velasco/Desafio-do-Finn'><ProjectImg src={img1} alt=""/></a>
                </Project1>
                
                
                <Project2>
                <ProjectTitle>
                <h3>Project-Portflow</h3>
                <HR></HR>
                </ProjectTitle>
                <a href='https://github.com/Raphael-Velasco/Desafio-final'><ProjectImg src={img2} alt=""/></a>
                </Project2>
                
                
                <Project3>
                <ProjectTitle>
                <h3>Todoflix-Project</h3>
                <HR></HR>
                </ProjectTitle>
                <a href='https://github.com/Raphael-Velasco/Desafio-Final-Mod2'><ProjectImg src={img6} alt=""/></a>
                </Project3>
                
                
                <Project4>
                <ProjectTitle>
                <h3>Flamengo-Project</h3>
                <HR></HR>
                </ProjectTitle>
                <a href='https://github.com/Raphael-Velasco/flamengo-project'><ProjectImg src={img3} alt=""/></a>
                </Project4>
                
                <Project5>
                <ProjectTitle>
                <h3>Da-Vinci-Project</h3>
                <HR></HR>
                </ProjectTitle>
                <a href='https://github.com/Raphael-Velasco/Desafio-de-Ingl-s'><ProjectImg src={img4} alt=""/></a>
                </Project5>
                
                <Project6>
                <ProjectTitle>
                <h3>Dog-Api-Project</h3>
                <HR></HR>
                </ProjectTitle>
                <a href='https://github.com/Raphael-Velasco/Dog-API'><ProjectImg src={img5} alt=""/></a>
                </Project6>
                </Projects>
             </ProjectsContainer> 
        )
    }
}