import React, { useMemo, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

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
  max-width: 760px;
  color: rgba(255, 255, 255, 0.55);
  font-size: 14px;
  line-height: 1.6;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 26px;
  animation: ${fadeUp} 0.85s ease forwards;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.button`
  border: 0;
  text-align: left;
  cursor: pointer;
  border-radius: 22px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(12px);
  padding: 0;
  display: grid;
  grid-template-rows: 160px auto;
  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(168, 85, 247, 0.26);
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.55);
  }
`;

const Preview = styled.div`
  position: relative;
  background:
    radial-gradient(
      900px 260px at 60% 0%,
      rgba(168, 85, 247, 0.65),
      transparent 70%
    ),
    radial-gradient(
      800px 260px at 20% 0%,
      rgba(236, 72, 153, 0.28),
      transparent 70%
    ),
    linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(0, 0, 0, 0.45));
`;

const PreviewImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.78;
  filter: saturate(1.05) contrast(1.02);
`;

const PreviewOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.62));
`;

const ChipRow = styled.div`
  position: absolute;
  left: 14px;
  bottom: 12px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Chip = styled.span`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.72);
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
`;

const CornerBtn = styled.div`
  position: absolute;
  right: 12px;
  top: 12px;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(0, 0, 0, 0.18);
  display: grid;
  place-items: center;
  color: rgba(255, 255, 255, 0.78);
`;

const Body = styled.div`
  padding: 18px 18px 20px;
`;

const CardTitle = styled.div`
  font-weight: 900;
  font-size: 16px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.93);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const IconBox = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: rgba(168, 85, 247, 0.12);
  border: 1px solid rgba(168, 85, 247, 0.22);
  color: rgba(168, 85, 247, 0.95);
  flex: 0 0 auto;
`;

const CardText = styled.div`
  color: rgba(255, 255, 255, 0.55);
  font-size: 13px;
  line-height: 1.6;
`;

const Modal = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.72);
  display: grid;
  place-items: center;
  padding: 26px;
`;

const ModalPanel = styled.div`
  width: min(1050px, 100%);
  max-height: min(86vh, 860px);
  overflow: hidden;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(14px);
  display: grid;
  grid-template-rows: auto 1fr;
`;

const ModalHeader = styled.div`
  padding: 16px 16px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const ModalTitle = styled.div`
  color: rgba(255, 255, 255, 0.92);
  font-weight: 900;
  letter-spacing: -0.02em;
  font-size: 16px;
`;

const CloseBtn = styled.button`
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.85);
  border-radius: 12px;
  padding: 8px 10px;
  cursor: pointer;
`;

const Viewer = styled.div`
  position: relative;
  padding: 14px 16px 16px;
  display: grid;
  gap: 12px;
  overflow: auto;
`;

const Big = styled.div`
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.02);
  min-height: 320px;
  display: grid;
  place-items: center;
  position: relative;
`;

const BigImg = styled.img`
  width: 100%;
  height: min(52vh, 520px);
  object-fit: contain;
  background: rgba(0, 0, 0, 0.25);
`;

const Empty = styled.div`
  padding: 34px 18px;
  color: rgba(255, 255, 255, 0.62);
  text-align: center;
  font-size: 14px;
  line-height: 1.6;
`;

const Thumbs = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Thumb = styled.button`
  width: 110px;
  height: 72px;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid
    ${(p) =>
      p.$active ? "rgba(168, 85, 247, 0.35)" : "rgba(255, 255, 255, 0.10)"};
  background: rgba(255, 255, 255, 0.03);
  cursor: pointer;
  padding: 0;
`;

const ThumbImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
`;

const Nav = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(p) => (p.$dir === "left" ? "left: 14px;" : "right: 14px;")}
  width: 42px;
  height: 42px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(0, 0, 0, 0.22);
  color: rgba(255, 255, 255, 0.88);
  display: grid;
  place-items: center;
  cursor: pointer;
`;

function safeSrc(src) {
  if (!src) return "";
  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("/")
  )
    return src;
  return `/${src}`;
}

export default function Design() {
  const categories = useMemo(
    () => [
      {
        id: "identity",
        icon: "👤",
        title: "Visual Identity & Logo",
        desc: "Crafting unique brand identities and logos that tell a story.",
        chips: ["Branding", "Logo", "Identity"],
        preview: "/design/ad-banners/preview.jpg",
        images: [
          "/logo_v2.png",
          "/vrentis.png",
          "/Algorytmiczni_komandosi.png",
          "wizytowka_vrentis.png",
          "florist_wizytowka_tlo.png",
        ],
      },
      {
        id: "social",
        icon: "◎",
        title: "Social Media Graphics",
        desc: "Eye-catching posts, stories, and cover art that drive engagement.",
        chips: ["Social Media", "Posts", "Stories"],
        preview: "/design/social/preview.jpg",
        images: [
          "flower_beauty.png",
          "Vrentis_post.png",
          "SpeedXpress_post.png",
          "czystaaura_post.png",
        ],
      },
      {
        id: "ads",
        icon: "▣",
        title: "Advertising Materials",
        desc: "Banners, flyers, and promotional materials designed to capture attention.",
        chips: ["Banners", "Flyers", "Print"],
        preview: "/design/ads/preview.jpg",
        images: ["pencil.png", "kubek_kawa.png", "vrentis_kubki.png"],
      },
      {
        id: "merch",
        icon: "⌁",
        title: "Clothing & Merchandise",
        desc: "From T-shirt graphics to full merch collections — designs that people actually want to wear.",
        chips: ["Merch", "Apparel", "Print"],
        preview: "/design/merch/preview.jpg",
        images: [
          "vrentis_koszulka.png",
          "komandosi.png",
          "kawa_koszulka.png",
          "bluza_no_motivation.png",
        ],
      },
      // NOWE SEKCJE
      {
        id: "invitations",
        icon: "✉️",
        title: "Invitations & Event Design",
        desc: "Elegant invitations for events, parties, and celebrations.",
        chips: ["Invitations", "Events", "Cards"],
        preview: "/design/invitations/preview.jpg",
        images: ["18_urodziny.png", "chrzciny.png", "wedding_zaproszenie.png"],
      },
      {
        id: "ad-banners",
        icon: "📢",
        title: "Advertising Banners",
        desc: "Impactful advertising banners for online campaigns and websites.",
        chips: ["Banners", "Advertising", "Marketing"],
        preview: "/design/ad-banners/preview.jpg",
        images: ["vrentis_baner.png"],
      },
    ],
    [],
  );

  const [open, setOpen] = useState(null);
  const [idx, setIdx] = useState(0);

  const active = open ? categories.find((c) => c.id === open) : null;
  const images = active?.images ?? [];
  const hasImages = images.length > 0;
  const current = hasImages
    ? images[Math.max(0, Math.min(idx, images.length - 1))]
    : null;

  const goPrev = (e) => {
    e?.stopPropagation?.();
    if (!hasImages) return;
    setIdx((v) => (v === 0 ? images.length - 1 : v - 1));
  };
  const goNext = (e) => {
    e?.stopPropagation?.();
    if (!hasImages) return;
    setIdx((v) => (v === images.length - 1 ? 0 : v + 1));
  };

  return (
    <Section id="design">
      <Container>
        <Head>
          <Kicker>CREATIVE WORK</Kicker>
          <Title>
            Design <Accent>Skills</Accent>
          </Title>
          <Sub>Where code meets creativity. I don't just build — I design.</Sub>
          <Divider />
        </Head>

        <Grid>
          {categories.map((c) => (
            <Card
              key={c.id}
              type="button"
              onClick={() => {
                setOpen(c.id);
                setIdx(0);
              }}
            >
              <Preview>
                <PreviewImg
                  src={safeSrc(c.preview)}
                  alt=""
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <PreviewOverlay />
                <ChipRow>
                  {c.chips.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </ChipRow>
                <CornerBtn aria-hidden="true">
                  <FaArrowUpRightFromSquare />
                </CornerBtn>
              </Preview>
              <Body>
                <CardTitle>
                  <IconBox aria-hidden="true">{c.icon}</IconBox>
                  {c.title}
                </CardTitle>
                <CardText>{c.desc}</CardText>
              </Body>
            </Card>
          ))}
        </Grid>
      </Container>

      {active && (
        <Modal
          role="dialog"
          aria-modal="true"
          onClick={() => {
            setOpen(null);
            setIdx(0);
          }}
        >
          <ModalPanel onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>{active.title}</ModalTitle>
              <CloseBtn
                type="button"
                onClick={() => {
                  setOpen(null);
                  setIdx(0);
                }}
              >
                Close
              </CloseBtn>
            </ModalHeader>

            <Viewer>
              {!hasImages ? (
                <Empty>
                  No images for this section.
                  <br />
                  Add files to <b>`public/design/{active.id}/`</b> (e.g.,{" "}
                  <b>`1.jpg`</b>, <b>`2.jpg`</b>) and optionally{" "}
                  <b>`preview.jpg`</b>.
                </Empty>
              ) : (
                <>
                  <Big>
                    <BigImg
                      src={safeSrc(current)}
                      alt=""
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    {images.length > 1 && (
                      <>
                        <Nav
                          type="button"
                          $dir="left"
                          onClick={goPrev}
                          aria-label="Previous"
                        >
                          <FaArrowLeft />
                        </Nav>
                        <Nav
                          type="button"
                          $dir="right"
                          onClick={goNext}
                          aria-label="Next"
                        >
                          <FaArrowRight />
                        </Nav>
                      </>
                    )}
                  </Big>
                  <Thumbs>
                    {images.map((src, i) => (
                      <Thumb
                        key={src}
                        type="button"
                        $active={i === idx}
                        onClick={() => setIdx(i)}
                        aria-label={`Image ${i + 1}`}
                      >
                        <ThumbImg
                          src={safeSrc(src)}
                          alt=""
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      </Thumb>
                    ))}
                  </Thumbs>
                </>
              )}
            </Viewer>
          </ModalPanel>
        </Modal>
      )}
    </Section>
  );
}
