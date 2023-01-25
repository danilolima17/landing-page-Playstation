import styled from 'styled-components';
import { useState, useEffect } from "react";

function Header() {
  const checkWindowWidth = (n) => {
    return window.innerWidth <= n;
  };
  const [mobileNav, setMobileNav] = useState(false);
  const [isMobile, setIsMobile] = useState(checkWindowWidth(700));

  const handleIconClick = (e) => {
    setMobileNav(!mobileNav);
    console.log(mobileNav);
  };

  useEffect(() => {
    window.addEventListener("resize", () => setIsMobile(checkWindowWidth(700)));
  }, []);

  return (
    <HeaderBar>
      <Logo src="./imgs/logo.png" alt="logo" />
      <NavBar>
        <Nav>
          {!isMobile && (
            <ul>
              <li>
                <a href="#">Jogos</a>
              </li>
              <li>
                <a href="#">Hardware</a>
              </li>
              <li>
                <a href="#">Serviços</a>
              </li>
              <li>
                <a href="#">Loja</a>
              </li>
            </ul>
          )}
          {isMobile && (
            <ul style={{ maxHeight: mobileNav ? "150px" : "0" }}>
              <li>
                <a href="#">Jogos</a>
              </li>
              <li>
                <a href="#">Hardware</a>
              </li>
              <li>
                <a href="#">Serviços</a>
              </li>
              <li>
                <a href="#">Loja</a>
              </li>
            </ul>
          )}
        </Nav>
      </NavBar>
      <NavIcon
        onClick={() => handleIconClick()}
        className="nav-icon"
        src="./imgs/menu.png"
        alt="nav icon"
      />
    </HeaderBar>
  );
}

export default Header;

const HeaderBar = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 50px;
  cursor: pointer;
  margin: 30px 0;
`;

const NavBar = styled.div`
  flex: 1;
  text-align: right;
`;
const Nav = styled.nav`
  ul {
    list-style-type: none;
    overflow: hidden;

    @media only screen and (max-width: 700px) {
      position: absolute;
      top: 75px;
      width: 100%;
      right: 0;
      background: linear-gradient(#000077, #000077);
      z-index: 2;
      transition: 0.5s;
      width: 100%;
    }
  }
  ul li {
    display: inline-block;
    margin-right: 30px;

    @media only screen and (max-width: 700px) {
      display: block;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }

  ul li a {
    text-decoration: none;
    color: black;
    @media only screen and (max-width: 700px) {
      color: white;
    }
  }

  ul li a:hover {
    color: #000077;
  }
`;

const NavIcon = styled.img`
  width: 30px;
  cursor: pointer;
  display: none;

  @media only screen and (max-width: 700px) {
    display: block;
  }
`;
