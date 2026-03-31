import React from 'react';
import styled from 'styled-components';
import { FaArrowUp, FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  padding: 3.4rem 5vw 2.2rem;
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

const FooterContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

const FooterLogo = styled.img`
  width: 34px;
  height: 34px;
  object-fit: contain;
  opacity: 0.9;
  margin-bottom: 10px;
`;

const Brand = styled.div`
  color: rgba(255, 255, 255, 0.92);
  font-size: 1.9rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  margin-bottom: 10px;
`;

const Tagline = styled.p`
  color: rgba(255, 255, 255, 0.52);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.4rem;
`;

const FooterDivider = styled.div`
  width: min(460px, 100%);
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(168, 85, 247, 0.5),
    transparent
  );
  margin: 0 auto 1.1rem;
`;

const Meta = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  flex-wrap: wrap;
  color: rgba(255, 255, 255, 0.35);
  font-size: 0.82rem;
  margin-bottom: 1.3rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo src="SuRF3Rk_A2.png" alt="SuRF3RkA logo" />
        <Brand>SuRF3RkA</Brand>
        <Tagline>From idea and design to a fully working fullstack application 🚀</Tagline>
        <FooterDivider />
        <Meta>
          <span>© {currentYear} SuRF3RkA, All rights reserved.</span>
          <span>•</span>
          <span>Crafted with <FaHeart style={{ color: '#a855f7' }} /> in Poland</span>
        </Meta>
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            width: 34,
            height: 34,
            borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.16)',
            background: 'rgba(255,255,255,0.03)',
            color: 'rgba(255,255,255,0.7)',
            cursor: 'pointer',
          }}
        >
          <FaArrowUp />
        </button>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 