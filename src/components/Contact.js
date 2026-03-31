import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactSection = styled.section`
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
  margin-bottom: 42px;
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

const Subtitle = styled.p`
  margin: 14px auto 0;
  max-width: 760px;
  color: rgba(255, 255, 255, 0.55);
  font-size: 14px;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 26px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(12px);
`;

const CardTitle = styled.h3`
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.85rem;
  margin-bottom: 8px;
  letter-spacing: -0.02em;
`;

const CardText = styled.p`
  color: rgba(255, 255, 255, 0.58);
  line-height: 1.65;
  font-size: 14px;
  margin-bottom: 18px;
`;

const InfoItem = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  padding: 12px 14px;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.78);

  small {
    display: block;
    color: rgba(255, 255, 255, 0.45);
    margin-bottom: 4px;
    font-size: 12px;
  }
`;

const FindMe = styled.div`
  margin-top: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  padding: 14px;
`;

const FindMeTitle = styled.div`
  color: rgba(255, 255, 255, 0.42);
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const Socials = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Social = styled.a`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 10px 12px;
  font-size: 13px;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.07);
  }
`;

const Form = styled.form`
  width: 100%;
`;

const FormGroup = styled.div`
  margin-bottom: 14px;
`;

const TwoCols = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.4rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  color: rgba(255, 255, 255, 0.9);
  
  &:focus {
    outline: none;
    border-color: rgba(168, 85, 247, 0.5);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  color: rgba(255, 255, 255, 0.9);
  min-height: 140px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: rgba(168, 85, 247, 0.5);
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  color: rgba(255, 255, 255, 0.95);
  padding: 0.95rem 1.6rem;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 12px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 800;
  width: 100%;
  
  &:hover {
    filter: brightness(1.03);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      );
      
      if (response.status === 200) {
        alert('Wiadomość została wysłana!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        e.target.reset();
      }
    } catch (error) {
      console.error('Błąd:', error);
      alert('Wystąpił błąd podczas wysyłania wiadomości.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <ContactSection id="contact">
      <Container>
        <Head>
          <Kicker>LET&apos;S WORK TOGETHER</Kicker>
          <Title>
            Get in <Accent>Touch</Accent>
          </Title>
          <Subtitle>Have a project in mind? Let&apos;s build something amazing together.</Subtitle>
        </Head>

        <Grid>
          <Card>
            <CardTitle>Say hello 👋</CardTitle>
            <CardText>
              Whether you&apos;re looking for a freelancer, want to discuss a project, or just want
              to chat about tech and design — I&apos;m always open to new opportunities.
            </CardText>

            <InfoItem>
              <small>Email</small>
              surfrkaa@gmail.com
            </InfoItem>
            <InfoItem>
              <small>Location</small>
              Poland 🇵🇱
            </InfoItem>
            <InfoItem>
              <small>Open to</small>
              Freelance &amp; Remote
            </InfoItem>

            <FindMe>
              <FindMeTitle>Find me on</FindMeTitle>
              <Socials>
                <Social href="https://github.com/SuRF3RkA-dev" target="_blank" rel="noopener noreferrer">GitHub</Social>
                <Social href="https://www.linkedin.com/in/zuzanna-lepak-a005673b5/" target="_blank" rel="noopener noreferrer">LinkedIn</Social>
                <Social href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</Social>
              </Socials>
            </FindMe>
          </Card>

          <Card>
            <CardTitle style={{ fontSize: '1.6rem' }}>Send a Message</CardTitle>
            <Form ref={form} onSubmit={handleSubmit}>
              <input type="hidden" name="to_email" value="surfrkaa@gmail.com" />
              <TwoCols>
                <FormGroup>
                  <Label>Name</Label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </FormGroup>
              </TwoCols>

              <FormGroup>
                <Label>Subject</Label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry, collaboration..."
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Message /500</Label>
                <TextArea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={500}
                  placeholder="Tell me about your project..."
                  required
                />
              </FormGroup>

              <SubmitButton whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} type="submit">
                ✈ Send Message
              </SubmitButton>
            </Form>
          </Card>
        </Grid>
      </Container>
    </ContactSection>
  );
};

export default Contact; 