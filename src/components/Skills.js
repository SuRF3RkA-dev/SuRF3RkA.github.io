import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaAngular,
  FaBootstrap,
  FaPhp,
  FaDocker,
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiAstro, SiVite, SiFirebase, SiMysql, SiDbeaver, SiCplusplus } from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import { TbBrandCSharp } from 'react-icons/tb';

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

const Divider = styled.div`
  width: 110px;
  height: 2px;
  margin: 16px auto 0;
  background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.7), transparent);
  opacity: 0.9;
`;

const Stack = styled.div`
  display: grid;
  gap: 22px;
  animation: ${fadeUp} 0.85s ease forwards;
`;

const GroupCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(12px);
`;

const GroupHead = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  color: rgba(255, 255, 255, 0.86);
  font-weight: 800;
  font-size: 14px;
`;

const GroupIcon = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: rgba(168, 85, 247, 0.12);
  border: 1px solid rgba(168, 85, 247, 0.22);
  color: rgba(168, 85, 247, 0.95);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  @media (max-width: 820px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const Tile = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 14px;
  height: 78px;
  display: grid;
  place-items: center;
  gap: 8px;
  padding: 10px 8px;
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(180deg, rgba(168, 85, 247, 0.10), rgba(255, 255, 255, 0.03));
    border-color: rgba(168, 85, 247, 0.22);
    box-shadow: 0 14px 40px rgba(168, 85, 247, 0.10);
  }
`;

const IconWrap = styled.div`
  font-size: 22px;
  line-height: 1;
  opacity: 0.95;
  color: rgba(255, 255, 255, 0.78);

  ${Tile}:hover & {
    color: rgba(255, 255, 255, 0.92);
  }
`;

const Label = styled.div`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.55);
`;

const groups = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: '🖥️',
    items: [
      { label: 'HTML5', icon: <FaHtml5 style={{ color: '#E44D26' }} /> },
      { label: 'CSS3', icon: <FaCss3Alt style={{ color: '#1572B6' }} /> },
      { label: 'SCSS', icon: <FaSass style={{ color: '#CC6699' }} /> },
      { label: 'JavaScript', icon: <FaJs style={{ color: '#F7DF1E' }} /> },
      { label: 'TypeScript', icon: <SiTypescript style={{ color: '#3178C6' }} /> },
      { label: 'React', icon: <FaReact style={{ color: '#61DAFB' }} /> },
      { label: 'Angular', icon: <FaAngular style={{ color: '#DD0031' }} /> },
      { label: 'Bootstrap', icon: <FaBootstrap style={{ color: '#7952B3' }} /> },
      { label: 'Next.js', icon: <SiNextdotjs style={{ color: 'rgba(255,255,255,0.9)' }} /> },
      { label: 'Astro', icon: <SiAstro style={{ color: '#FF5D01' }} /> },
      { label: 'Vite', icon: <SiVite style={{ color: '#646CFF' }} /> },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Databases',
    icon: '⚙️',
    items: [
      { label: 'PHP', icon: <FaPhp style={{ color: '#777BB4' }} /> },
      { label: 'Firebase', icon: <SiFirebase style={{ color: '#FFCA28' }} /> },
      { label: 'MySQL', icon: <SiMysql style={{ color: '#4479A1' }} /> },
      { label: 'Docker', icon: <FaDocker style={{ color: '#2496ED' }} /> },
      { label: 'DBeaver', icon: <SiDbeaver style={{ color: 'rgba(255,255,255,0.85)' }} /> },
    ],
  },
  {
    id: 'langs',
    title: 'Programming Languages',
    icon: '🧾',
    items: [
      { label: 'C++', icon: <SiCplusplus style={{ color: '#00599C' }} /> },
      { label: 'Java', icon: <FaJava style={{ color: '#E11D48' }} /> },
      { label: 'C#', icon: <TbBrandCSharp style={{ color: '#A855F7' }} /> },
    ],
  },
];

export default function Skills() {
  return (
    <Section id="skills">
      <Container>
        <Head>
          <Kicker>WHAT I WORK WITH</Kicker>
          <Title>
            Technologies &amp; <Accent>Skills</Accent>
          </Title>
          <Divider />
        </Head>

        <Stack>
          {groups.map((g) => (
            <GroupCard key={g.id}>
              <GroupHead>
                <GroupIcon aria-hidden="true">{g.icon}</GroupIcon>
                <div>{g.title}</div>
              </GroupHead>
              <Grid>
                {g.items.map((it) => (
                  <Tile key={it.label}>
                    <IconWrap aria-hidden="true">{it.icon}</IconWrap>
                    <Label>{it.label}</Label>
                  </Tile>
                ))}
              </Grid>
            </GroupCard>
          ))}
        </Stack>
      </Container>
    </Section>
  );
}

