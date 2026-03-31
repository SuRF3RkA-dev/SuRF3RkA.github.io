import React from 'react';
import styled, { keyframes } from 'styled-components';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 0 90px;
  position: relative;
  overflow: hidden;
`;

const twinkle = keyframes`
  0%, 100% { opacity: 0.75; transform: translateZ(0) scale(1); }
  50% { opacity: 1; transform: translateZ(0) scale(1.08); }
`;

const floatUp = keyframes`
  0% { transform: translateY(10px); opacity: 0; }
  20% { opacity: 1; }
  100% { transform: translateY(-60px); opacity: 0; }
`;

const shoot = keyframes`
  0% { transform: translate3d(-20vw, -12vh, 0); opacity: 0; }
  15% { opacity: 1; }
  100% { transform: translate3d(120vw, 70vh, 0); opacity: 0; }
`;

const Starfield = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    radial-gradient(800px 380px at 50% 25%, rgba(168, 85, 247, 0.18), transparent 65%),
    radial-gradient(900px 520px at 20% 40%, rgba(236, 72, 153, 0.10), transparent 62%),
    radial-gradient(900px 520px at 80% 70%, rgba(99, 102, 241, 0.10), transparent 60%),
    linear-gradient(180deg, rgba(5, 4, 12, 0.6), rgba(7, 6, 26, 0.72));

  &::before {
    content: '';
    position: absolute;
    inset: -20%;
    background-image:
      radial-gradient(circle, rgba(255, 255, 255, 0.9) 1px, transparent 1.6px),
      radial-gradient(circle, rgba(255, 255, 255, 0.55) 1px, transparent 1.8px),
      radial-gradient(circle, rgba(168, 85, 247, 0.55) 1px, transparent 2px);
    background-size: 220px 220px, 320px 320px, 420px 420px;
    background-position: 0 0, 40px 110px, 160px 70px;
    opacity: 0.22;
    animation: ${twinkle} 4.5s ease-in-out infinite;
    filter: blur(0.2px);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 75% 62%, rgba(168, 85, 247, 0.22), transparent 52%),
      radial-gradient(circle at 25% 58%, rgba(236, 72, 153, 0.10), transparent 56%);
    filter: blur(34px);
    opacity: 0.9;
    pointer-events: none;
  }
`;

const ShootingStar = styled.div`
  position: absolute;
  left: -20vw;
  top: 18vh;
  width: 260px;
  height: 2px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(168, 85, 247, 0.85), rgba(255, 255, 255, 0));
  filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.5));
  opacity: 0;
  transform: rotate(12deg);
  animation: ${shoot} 7s ease-in-out infinite;
`;

const ShootingStar2 = styled(ShootingStar)`
  top: 54vh;
  animation-duration: 9.5s;
  animation-delay: 1.8s;
  filter: drop-shadow(0 0 10px rgba(236, 72, 153, 0.45));
  background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(236, 72, 153, 0.75), rgba(255, 255, 255, 0));
`;

const AmbientDot = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: rgba(168, 85, 247, 0.75);
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.55);
  animation: ${floatUp} 6.5s ease-in-out infinite;
  opacity: 0;
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 980px;
  position: relative;
  z-index: 1;
  padding: 0 18px;
`;

const TinyLogo = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;

  img {
    width: 58px;
    height: 58px;
    object-fit: contain;
    opacity: 0.9;
    filter: drop-shadow(0 0 14px rgba(168, 85, 247, 0.25));
  }
`;

const Eyebrow = styled.div`
  font-size: 12px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: clamp(2.6rem, 6vw, 5.4rem);
  color: rgba(255, 255, 255, 0.94);
  margin-bottom: 14px;
  line-height: 1.05;
  letter-spacing: -0.03em;
  font-weight: 900;
  text-shadow: 0 18px 55px rgba(0, 0, 0, 0.55);
`;

const AccentName = styled.span`
  color: #a855f7;
  text-shadow: none;
`;

const Wave = styled.span`
  margin-left: 10px;
  font-size: 0.6em;
  vertical-align: middle;
`;

const RoleLine = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(10px);
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
  margin: 8px 0 16px;

  .icon {
    color: rgba(168, 85, 247, 0.95);
    font-weight: 900;
  }

  .divider {
    opacity: 0.35;
  }
`;

const Subtitle = styled.p`
  font-size: clamp(0.98rem, 1.8vw, 1.12rem);
  color: rgba(255, 255, 255, 0.62);
  max-width: 640px;
  margin: 0 auto 26px;
  line-height: 1.6;
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 6px;
`;

const PrimaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  min-width: 168px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 800;
  color: #070612;
  background: linear-gradient(90deg, #a855f7, #ec4899);
  box-shadow: 0 16px 46px rgba(168, 85, 247, 0.22);
  border: 1px solid rgba(255, 255, 255, 0.12);

  &:hover { filter: brightness(1.05); transform: translateY(-1px); }
`;

const SecondaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  min-width: 168px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(12px);

  &:hover { background: rgba(255, 255, 255, 0.06); transform: translateY(-1px); }
`;

const ScrollHint = styled.div`
  position: absolute;
  left: 50%;
  bottom: 22px;
  transform: translateX(-50%);
  display: grid;
  gap: 10px;
  place-items: center;
  z-index: 1;
  color: rgba(255, 255, 255, 0.28);
  letter-spacing: 0.24em;
  font-size: 11px;
  text-transform: uppercase;

  .mouse {
    width: 22px;
    height: 34px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.20);
    position: relative;
    background: rgba(255, 255, 255, 0.02);
  }

  .mouse::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 8px;
    width: 4px;
    height: 4px;
    border-radius: 999px;
    transform: translateX(-50%);
    background: rgba(168, 85, 247, 0.75);
    box-shadow: 0 0 14px rgba(168, 85, 247, 0.35);
    animation: ${floatUp} 1.8s ease-in-out infinite;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <Starfield />
      <ShootingStar />
      <ShootingStar2 />

      <AmbientDot style={{ left: '12%', top: '62%', animationDelay: '0.2s' }} />
      <AmbientDot style={{ left: '86%', top: '68%', animationDelay: '1.4s' }} />
      <AmbientDot style={{ left: '72%', top: '42%', animationDelay: '0.9s' }} />

      <HeroContent data-aos="fade-up">
        <TinyLogo>
          <img src="SuRF3Rk_A2.png" alt="Logo" />
        </TinyLogo>

        <Eyebrow>WELCOME TO MY PORTFOLIO</Eyebrow>

        <Title>
          Hi, I’m <AccentName>SuRF3RkA</AccentName>
          <Wave>👋</Wave>
        </Title>

        <RoleLine>
          <span className="icon">{'</>'}</span>
          <span>Graphic Design</span>
          <span className="divider">|</span>
        </RoleLine>

        <Subtitle>
          🌍 I create unique digital experiences — from design, through frontend, to back end.
        </Subtitle>

        <Buttons>
          <PrimaryBtn href="#projects">View Projects</PrimaryBtn>
          <SecondaryBtn href="#contact">Contact Me</SecondaryBtn>
        </Buttons>
      </HeroContent>

      <ScrollHint aria-hidden="true">
        <div>SCROLL</div>
        <div className="mouse" />
      </ScrollHint>
    </HeroSection>
  );
};

export default Hero; 