import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: ${props => (props.scrolled ? 'rgba(7, 6, 18, 0.9)' : 'rgba(7, 6, 18, 0.72)')};
  padding: 0.7rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1400;
  border-bottom: 1px solid rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(14px);
  box-shadow: 0 10px 34px rgba(0, 0, 0, 0.3);
`;

const NavContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoImage = styled.img`
  height: 34px;
  width: auto;
  opacity: 0.95;
  transition: transform 0.25s ease;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    height: 30px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.75rem;
  align-items: center;

  @media (max-width: 980px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  font-size: 0.93rem;
  font-weight: 600;
  transition: color 0.25s ease;
  position: relative;

  &:hover {
    color: rgba(255, 255, 255, 0.98);
  }
`;

const HireButton = styled.a`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.95);
  font-size: 0.9rem;
  font-weight: 800;
  padding: 10px 16px;
  border-radius: 999px;
  background: linear-gradient(90deg, #a855f7, #ec4899);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 14px 34px rgba(168, 85, 247, 0.22);
  transition: transform 0.2s ease, filter 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.04);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.9);
  width: 42px;
  height: 42px;
  border-radius: 12px;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 980px) {
    display: grid;
    place-items: center;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 68px;
  left: 14px;
  right: 14px;
  background: rgba(7, 6, 18, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1rem 1.2rem;
  backdrop-filter: blur(14px);
  transform: translateY(${props => props.isOpen ? '0' : '-100%'});
  transition: transform 0.25s ease;
  z-index: 1500;

  @media (max-width: 980px) {
    display: block;
  }
`;

const MobileNavLink = styled(NavLink)`
  display: block;
  padding: 1rem 0;
  text-align: center;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.86);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  &:after {
    display: none;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo href="#home">
          <LogoImage 
            src="SuRF3Rk_A2.png" // Upewnij się, że ścieżka do logo jest poprawna
            alt="Logo"
          />
        </Logo>

        <NavLinks>
          <NavLink href="#about">About Me</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#design">Design</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <HireButton href="#contact">Hire Me</HireButton>
        </NavLinks>

        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </MobileMenuButton>

        <MobileMenu isOpen={mobileMenuOpen}>
          <MobileNavLink href="#about" onClick={() => setMobileMenuOpen(false)}>O mnie</MobileNavLink>
          <MobileNavLink href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</MobileNavLink>
          <MobileNavLink href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</MobileNavLink>
          <MobileNavLink href="#design" onClick={() => setMobileMenuOpen(false)}>Design</MobileNavLink>
          <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>Kontakt</MobileNavLink>
          <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>Hire Me</MobileNavLink>
        </MobileMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 