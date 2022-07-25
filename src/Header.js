import { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import img1 from "./RouterPages/img/menu.png";
import img2 from "./RouterPages/img/close.png";

const Header = styled.div`
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
`;
const Logo = styled.img`
  width: 80px;
  margin: 25px;
  border-radius: 500px;
`;
const Menu = styled.ul`
  margin: 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 720px) {
    margin:0px;
    display: ${props => props.showMobile ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color:black;
    position: absolute;
    right: 0;
    top: 25px;
    
  }
`;
const MenuText = styled.li`
  margin: 30px;
  text-transform: uppercase;
  color: white;
  text-decoration: underline gold;

  &:hover {
    transition: color 0.8s;
    color: #d2232a;
  }


`;
const Burger = styled.img`
  display: none;
  @media (max-width: 720px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right:10px;
    
  }
`;

export default function HeaderApp() {
  const [showMenuMobile, setShowMenuMobile] = useState(false)
  const toggleMenu = () => {
    setShowMenuMobile(!showMenuMobile);
  };
  return (
    <Header>
      <a>
        <Link to="/">
          <Logo
            src="https://t4.ftcdn.net/jpg/04/66/23/57/360_F_466235707_1u4EiKwQRenMZFkAxXYdyWvrzRniAqGo.jpg"
            alt=""
          />
        </Link>
      </a>
      <Menu showMobile={showMenuMobile}>
      <Burger src={img2} onClick={toggleMenu} />
        <Link to="/">
          <MenuText>Home</MenuText>
        </Link>
        <Link to="/AboutMe">
          <MenuText>About Me</MenuText>
        </Link>
        <Link to="/Onu">
          <MenuText>Onu</MenuText>
        </Link>
        <Link to="/Projects">
          <MenuText>Projects</MenuText>
        </Link>
      </Menu>
      {/* Botão menu mobile */}
      <Burger src={img1} onClick={toggleMenu} />
        <Router>
          <Router>
        <Route></Route>
        </Router>
        </Router>
    </Header>

  );
}
