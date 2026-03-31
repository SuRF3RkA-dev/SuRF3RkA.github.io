import React from "react";
import styled, { keyframes } from "styled-components";
import { FaGraduationCap, FaUser } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { HiSparkles } from "react-icons/hi2";

const AboutSection = styled.section`
  padding: 110px 5vw;
  position: relative;
  z-index: 2;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
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

const Heading = styled.h2`
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
  background: linear-gradient(
    90deg,
    transparent,
    rgba(168, 85, 247, 0.7),
    transparent
  );
  opacity: 0.9;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 26px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  display: grid;
  gap: 26px;
  animation: ${fadeUp} 0.85s ease forwards;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  padding: 22px;
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(12px);
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
`;

const CardIcon = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: rgba(168, 85, 247, 0.12);
  border: 1px solid rgba(168, 85, 247, 0.22);
  color: rgba(168, 85, 247, 0.95);
`;

const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.9);
`;

const BodyText = styled.p`
  color: rgba(255, 255, 255, 0.62);
  line-height: 1.65;
  font-size: 14px;
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 18px;
`;

const StatBox = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 14px;
  padding: 14px 12px;
  text-align: center;
`;

const StatNumber = styled.div`
  font-weight: 900;
  font-size: 20px;
  color: var(--accent);
`;

const StatLabel = styled.div`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.42);
  margin-top: 4px;
`;

const Row = styled.div`
  display: grid;
  gap: 14px;
`;

const ProgressRow = styled.div`
  display: grid;
  gap: 10px;
`;

const ProgressTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.72);

  .left {
    display: inline-flex;
    gap: 10px;
    align-items: center;
  }

  .code {
    color: rgba(255, 255, 255, 0.42);
    font-weight: 700;
    width: 22px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .right {
    color: rgba(255, 255, 255, 0.35);
    font-weight: 700;
  }
`;

const Track = styled.div`
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
`;

const Fill = styled.div`
  height: 100%;
  width: ${(props) => props.value}%;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  border-radius: 999px;
  box-shadow: 0 0 22px rgba(168, 85, 247, 0.22);
`;

const Pills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 2px;
`;

const Pill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.62);
  font-size: 12px;
`;

const MiniBadges = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 12px;
`;

const MiniBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 999px;
  background: rgba(168, 85, 247, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.22);
  color: rgba(255, 255, 255, 0.82);
  font-size: 12px;
  font-weight: 700;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Head>
          <Kicker>GET TO KNOW ME</Kicker>
          <Heading>
            About <Accent>Me</Accent>
          </Heading>
          <Divider />
        </Head>

        <Layout>
          <Column>
            <Card>
              <CardHeader>
                <CardIcon>
                  <FaUser />
                </CardIcon>
                <CardTitle>Who am I?</CardTitle>
              </CardHeader>

              <BodyText>
                I build modern web applications, combining frontend, backend,
                and basic UX/UI principles. I focus on creating solutions that
                are not only functional but also clean and user-friendly.
                <br />
                <br />I develop my skills through personal projects and
                internships, where I gained experience working in teams and
                building real-world applications. I enjoy learning new
                technologies and continuously improving my skills within the
                JavaScript ecosystem.
              </BodyText>

              <Stats>
                <StatBox>
                  <StatNumber>5+</StatNumber>
                  <StatLabel>Projects</StatLabel>
                </StatBox>
                <StatBox>
                  <StatNumber>15+</StatNumber>
                  <StatLabel>Technologies</StatLabel>
                </StatBox>
              </Stats>
            </Card>

            <Card>
              <CardHeader>
                <CardIcon>
                  <FaGraduationCap />
                </CardIcon>
                <CardTitle>Education</CardTitle>
              </CardHeader>

              <Row>
                <div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.85)",
                      fontWeight: 800,
                      fontSize: 13,
                    }}
                  >
                    Technical Secondary School
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.45)",
                      fontSize: 12,
                      marginTop: 4,
                    }}
                  >
                    Software Developer
                  </div>
                </div>
              </Row>

              <MiniBadges>
                <MiniBadge>✅ INF.03</MiniBadge>
                <MiniBadge>✅ INF.04</MiniBadge>
              </MiniBadges>
            </Card>
          </Column>

          <Column>
            <Card>
              <CardHeader>
                <CardIcon>
                  <MdLanguage />
                </CardIcon>
                <CardTitle>Languages</CardTitle>
              </CardHeader>

              <ProgressRow>
                <div>
                  <ProgressTop>
                    <div className="left">
                      <span className="code">PL</span>
                      <span>Polish</span>
                    </div>
                    <div className="right">Native</div>
                  </ProgressTop>
                  <Track>
                    <Fill value={92} />
                  </Track>
                </div>

                <div>
                  <ProgressTop>
                    <div className="left">
                      <span className="code">GB</span>
                      <span>English</span>
                    </div>
                    <div className="right">Communicative</div>
                  </ProgressTop>
                  <Track>
                    <Fill value={76} />
                  </Track>
                </div>
              </ProgressRow>
            </Card>

            <Card>
              <CardHeader>
                <CardIcon>
                  <HiSparkles />
                </CardIcon>
                <CardTitle>Currently Learning</CardTitle>
              </CardHeader>

              <ProgressRow>
                <div>
                  <ProgressTop>
                    <div className="left">
                      <span style={{ opacity: 0.9 }}>🧠</span>
                      <span>Advanced React Patterns</span>
                    </div>
                    <div className="right">70%</div>
                  </ProgressTop>
                  <Track>
                    <Fill value={70} />
                  </Track>
                </div>
                <div>
                  <ProgressTop>
                    <div className="left">
                      <span style={{ opacity: 0.9 }}>🤖</span>
                      <span>Fullstack Chatbots</span>
                    </div>
                    <div className="right">55%</div>
                  </ProgressTop>
                  <Track>
                    <Fill value={55} />
                  </Track>
                </div>
                <div>
                  <ProgressTop>
                    <div className="left">
                      <span style={{ opacity: 0.9 }}>🎨</span>
                      <span>UX/UI for Web Apps</span>
                    </div>
                    <div className="right">80%</div>
                  </ProgressTop>
                  <Track>
                    <Fill value={80} />
                  </Track>
                </div>
              </ProgressRow>
            </Card>

            <Pills>
              <Pill>🧩 Detail-oriented</Pill>
              <Pill>⚡ Fast learner</Pill>
              <Pill>💡 Creative thinker</Pill>
              <Pill>🤝 Team player</Pill>
              <Pill>🌙 Night owl</Pill>
            </Pills>
          </Column>
        </Layout>
      </Container>
    </AboutSection>
  );
};

export default About;
