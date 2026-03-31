import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  padding: 110px 5vw;
  position: relative;
  z-index: 2;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Head = styled.div`
  text-align: center;
  margin-bottom: 46px;
  animation: ${fadeUp} 0.8s ease forwards;
`;

const Kicker = styled.div`
  font-size: 12px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: clamp(2.3rem, 4.2vw, 3.2rem);
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: rgba(255, 255, 255, 0.95);
`;

const Accent = styled.span`
  color: var(--accent);
`;

const Sub = styled.p`
  margin: 14px auto 0;
  max-width: 720px;
  color: rgba(255, 255, 255, 0.55);
  font-size: 14px;
  line-height: 1.6;
`;

const Divider = styled.div`
  width: 110px;
  height: 2px;
  margin: 16px auto 0;
  background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.7), transparent);
  opacity: 0.9;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 26px;
  animation: ${fadeUp} 0.85s ease forwards;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.a`
  display: grid;
  grid-template-rows: 190px auto;
  text-decoration: none;
  border-radius: 22px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.10);
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(12px);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(168, 85, 247, 0.26);
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.55);
  }
`;

const Cover = styled.div`
  position: relative;
  background:
    radial-gradient(900px 260px at 60% 0%, rgba(168, 85, 247, 0.65), transparent 70%),
    radial-gradient(800px 260px at 20% 0%, rgba(236, 72, 153, 0.40), transparent 68%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(0, 0, 0, 0.35));
`;

const CoverOverlay = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.35;
  background-image:
    radial-gradient(circle, rgba(255, 255, 255, 0.8) 1px, transparent 1.6px),
    radial-gradient(circle, rgba(255, 255, 255, 0.55) 1px, transparent 2px);
  background-size: 180px 180px, 280px 280px;
  background-position: 10px 20px, 60px 90px;
  filter: blur(0.2px);
`;

const Corner = styled.div`
  position: absolute;
  left: 18px;
  top: 16px;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
`;

const TopRight = styled.div`
  position: absolute;
  right: 16px;
  top: 14px;
  display: inline-flex;
  gap: 10px;
  opacity: 0.9;
`;

const Dot = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(0, 0, 0, 0.18);
  display: grid;
  place-items: center;
  color: rgba(255, 255, 255, 0.8);
`;

const Body = styled.div`
  padding: 18px 18px 20px;
`;

const Small = styled.div`
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(168, 85, 247, 0.75);
  margin-bottom: 8px;
`;

const H3 = styled.div`
  font-weight: 900;
  font-size: 20px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.93);
  margin-bottom: 10px;
`;

const Desc = styled.div`
  color: rgba(255, 255, 255, 0.55);
  font-size: 13px;
  line-height: 1.6;
  margin-bottom: 14px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.span`
  padding: 8px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.10);
  color: rgba(255, 255, 255, 0.62);
  font-size: 12px;
`;

const projects = [
  {
    kicker: 'PERSONAL WEBSITE',
    category: 'Personal Website',
    title: "Transl'arte",
    desc:
      "A fully featured personal translation website combining Astro’s blazing speed with Firebase’s real-time database. Features modern UI, content management, and a seamless fullstack architecture.",
    tags: ['Astro', 'Firebase', 'TypeScript', 'CSS'],
    href: 'https://translarte.pl',
    coverVariant: 'pink',
  },
  {
    kicker: 'CHATBOT APPLICATION',
    category: 'Chatbot Application',
    title: 'Chatbot App UI',
    desc:
      "A modern chatbot interface focused on top-notch UX. Built with Vite and React, featuring smooth message animations, typing indicators, and a polished conversational flow.",
    tags: ['React', 'Vite', 'TypeScript', 'SCSS'],
    href: 'https://github.com/SuRF3RkA',
    coverVariant: 'purple',
  },
  {
    kicker: 'E-LEARNING PLATFORM',
    category: 'E-learning Platform',
    title: 'Eagle Weber',
    desc:
      "A comprehensive e-learning platform built with Next.js on the frontend and C# on the backend, containerized with Docker. Supports courses, quizzes, and student progress tracking.",
    tags: ['Next.js', 'C#', 'Docker', 'MySQL'],
    href: 'https://github.com/ZuzannaLe10/Eagle-Weber-2.0-Frontend',
    coverVariant: 'mid',
  },
  {
    kicker: 'FINANCE APP',
    category: 'Finance App',
    title: 'Expense Tracker',
    desc:
      "A smart expense tracking app with real-time data sync via Firebase. Features interactive charts, categorized spending, budget alerts, and a beautifully crafted SCSS-powered UI.",
    tags: ['React', 'Firebase', 'SCSS'],
    href: 'https://github.com/SuRF3RkA-dev/Expense_tracker',
    coverVariant: 'light',
  },
];

function coverStyles(variant) {
  if (variant === 'light') {
    return {
      background:
        'linear-gradient(180deg, rgba(255,255,255,0.75), rgba(255,255,255,0.08)), radial-gradient(900px 260px at 55% 0%, rgba(168, 85, 247, 0.35), transparent 70%), radial-gradient(900px 260px at 15% 0%, rgba(236, 72, 153, 0.22), transparent 70%)',
    };
  }
  if (variant === 'mid') {
    return {
      background:
        'radial-gradient(900px 260px at 60% 0%, rgba(168, 85, 247, 0.58), transparent 70%), radial-gradient(800px 260px at 20% 0%, rgba(99, 102, 241, 0.32), transparent 70%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.35))',
    };
  }
  if (variant === 'pink') {
    return {
      background:
        'radial-gradient(900px 260px at 60% 0%, rgba(236, 72, 153, 0.62), transparent 72%), radial-gradient(900px 260px at 20% 0%, rgba(168, 85, 247, 0.52), transparent 70%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.35))',
    };
  }
  return {
    background:
      'radial-gradient(900px 260px at 60% 0%, rgba(168, 85, 247, 0.65), transparent 70%), radial-gradient(800px 260px at 20% 0%, rgba(236, 72, 153, 0.28), transparent 70%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.35))',
  };
}

export default function Projects() {
  return (
    <Section id="projects">
      <Container>
        <Head>
          <Kicker>WHAT I’VE BUILT</Kicker>
          <Title>
            My <Accent>Projects</Accent>
          </Title>
          <Sub>Real projects, real impact. Each one crafted with intention.</Sub>
          <Divider />
        </Head>

        <Grid>
          {projects.map((p) => (
            <Card key={p.title} href={p.href} target="_blank" rel="noopener noreferrer">
              <Cover style={coverStyles(p.coverVariant)}>
                <CoverOverlay />
                <Corner>{p.kicker}</Corner>
                <TopRight>
                  <Dot aria-hidden="true">
                    <FaArrowUpRightFromSquare />
                  </Dot>
                </TopRight>
              </Cover>
              <Body>
                <Small>{p.category}</Small>
                <H3>{p.title}</H3>
                <Desc>{p.desc}</Desc>
                <Tags>
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </Tags>
              </Body>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}