import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import GlobalStyle from './styles/GlobalStyle';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Design from './components/Design';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer';

const AppContainer = styled.div`
  color: var(--text);
`;

const ContentWrapper = styled.div`
  padding: clamp(16px, 3vw, 32px);
`;

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);

  return (
    <AppContainer>
      <GlobalStyle />
      <ContentWrapper>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Design />
        <Contact />
        <Footer />
      </ContentWrapper>
    </AppContainer>
  );
}

export default App;
