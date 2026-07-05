import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig } from '@config';
import styled from 'styled-components';
import { media } from '@styles';

const INK = '#111110';
const CREAM = '#ECE7DA';
const ACCENT = '#FF4D23';

const MARQUEE_ITEMS = [
  'React',
  'Next.js',
  'TypeScript',
  'Framer Motion',
  'TanStack Query',
  'GraphQL',
  'React Native',
  'PWA',
];

const StyledCursorRing = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  border: 2px solid ${ACCENT};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-100px, -100px);
  mix-blend-mode: difference;
  display: none;
  ${media.tablet`display: none !important;`};
`;

const StyledSection = styled.section`
  position: relative;
  overflow: hidden;
  min-height: calc(100vh - 59px);
  padding: 48px 34px 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StyledBlob = styled.div`
  position: absolute;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  background: ${ACCENT};
  mix-blend-mode: multiply;
  pointer-events: none;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%);
  will-change: transform;
  opacity: 0;
  filter: blur(2px);
`;
const StyledInner = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1500px;
  margin: 0 auto;
  width: 100%;
`;
const StyledEyebrow = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 14px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${ACCENT};
`;
const StyledEyebrowLine = styled.span`
  width: 42px;
  height: 2px;
  background: currentColor;
  display: inline-block;
`;
const StyledEyebrowInk = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  gap: 14px;
  color: ${INK};
  clip-path: circle(0px at -999px -999px);
  pointer-events: none;
`;
const StyledName = styled.h1`
  margin: 18px 0 0;
  color: ${INK};
  font-weight: 800;
  letter-spacing: -0.045em;
  line-height: 0.82;
  text-transform: uppercase;
`;
const StyledNameLine = styled.span`
  display: block;
  font-size: clamp(64px, 13.5vw, 232px);
`;
const StyledNameLineStroke = styled(StyledNameLine)`
  color: transparent;
  -webkit-text-stroke: clamp(1.5px, 0.32vw, 4px) ${INK};
`;
const StyledIntroRow = styled.div`
  margin-top: 34px;
  display: flex;
  gap: 44px;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
`;
const StyledIntro = styled.p`
  margin: 0;
  max-width: 560px;
  font-size: clamp(17px, 1.7vw, 21px);
  font-weight: 500;
  line-height: 1.45;
  color: #1c1b18;
  mark {
    background: ${ACCENT};
    color: inherit;
    padding: 0 6px;
  }
`;
const StyledCta = styled.a`
  flex: none;
  display: inline-flex;
  align-items: center;
  gap: 14px;
  background: ${INK};
  color: ${CREAM};
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 18px 26px;
  text-decoration: none;
  box-shadow: 7px 7px 0 ${ACCENT};
  transition: transform 0.2s cubic-bezier(0.34, 1.3, 0.4, 1),
    box-shadow 0.2s cubic-bezier(0.34, 1.3, 0.4, 1), color 0.2s ease;
  &:hover {
    box-shadow: 0px 0px 0 ${ACCENT};
    transform: translate(7px, 7px);
    color: ${ACCENT};
  }
  &:active {
    transform: translate(7px, 7px) scale(0.95);
    box-shadow: 0 0 0 transparent;
  }
`;
const StyledArrow = styled.span`
  display: inline-block;
  transition: transform 0.24s cubic-bezier(0.3, 1.5, 0.4, 1);
  ${StyledCta}:hover & {
    transform: translate(4px, 4px);
  }
`;
const StyledStatStrip = styled.div`
  position: relative;
  z-index: 2;
  margin-top: auto;
  padding-top: 40px;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #6b685f;
  span.sep {
    color: ${ACCENT};
  }
`;
const StyledMarqueeOuter = styled.div`
  background: ${ACCENT};
  color: ${INK};
  border-top: 2px solid ${INK};
  border-bottom: 2px solid ${INK};
  padding: 18px 0;
  overflow: hidden;
`;
const StyledMarqueeInner = styled.div`
  display: flex;
  gap: 30px;
  width: max-content;
  font-weight: 800;
  font-size: clamp(26px, 3.4vw, 46px);
  letter-spacing: -0.02em;
  text-transform: uppercase;
  white-space: nowrap;
  will-change: transform;
`;

const Hero = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { eyebrow, nameLine1, nameLine2, buttonText, stats } = frontmatter;

  const sectionRef = useRef(null);
  const blobRef = useRef(null);
  const cursorRef = useRef(null);
  const eyebrowRef = useRef(null);
  const eyebrowInkRef = useRef(null);
  const name1Ref = useRef(null);
  const name2Ref = useRef(null);
  const marqueeRef = useRef(null);
  const revealRefs = useRef([]);
  revealRefs.current = [];
  const addReveal = el => el && revealRefs.current.push(el);

  useEffect(() => {
    revealRefs.current.forEach((el, i) => sr.reveal(el, srConfig(i * 100)));
  }, []);

  // Custom cursor ring + hero blob + eyebrow ink-clip + headline parallax.
  useEffect(() => {
    let cx = -100,
      cy = -100,
      rx = -100,
      ry = -100;
    let scale = 1,
      targetScale = 1;
    let raf;
    let shown = false;

    const onMove = e => {
      cx = e.clientX;
      cy = e.clientY;
      if (!shown && cursorRef.current) {
        cursorRef.current.style.display = 'block';
        shown = true;
      }
      const t = e.target;
      const hit = t && t.closest && t.closest('a, [data-work], [data-row], .skill');
      targetScale = hit ? 2.1 : 1;
    };
    window.addEventListener('pointermove', onMove);

    const loop = () => {
      rx += (cx - rx) * 0.18;
      ry += (cy - ry) * 0.18;
      scale += (targetScale - scale) * 0.14;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${rx - 15}px,${ry - 15}px) scale(${scale.toFixed(3)})`;
      }
      if (eyebrowRef.current && eyebrowInkRef.current && blobRef.current) {
        if (blobRef.current.style.opacity !== '0') {
          const er = eyebrowRef.current.getBoundingClientRect();
          const R = (blobRef.current.getBoundingClientRect().width / 2) * 0.94;
          eyebrowInkRef.current.style.clipPath = `circle(${R.toFixed(1)}px at ${(rx - er.left).toFixed(1)}px ${(ry - er.top).toFixed(1)}px)`;
        } else {
          eyebrowInkRef.current.style.clipPath = 'circle(0px at -999px -999px)';
        }
      }
      if (sectionRef.current && blobRef.current) {
        const r = sectionRef.current.getBoundingClientRect();
        const inside = cy >= r.top && cy <= r.bottom;
        blobRef.current.style.opacity = inside ? '1' : '0';
        blobRef.current.style.transform = `translate(${rx - r.left}px,${ry - r.top}px) translate(-50%,-50%)`;
        const px = cx / window.innerWidth - 0.5;
        const py = cy / Math.max(r.height, 1) - 0.5;
        if (name1Ref.current) {
          name1Ref.current.style.transform = `translate(${(-px * 14).toFixed(1)}px,${(-py * 14 * 0.4).toFixed(1)}px)`;
        }
        if (name2Ref.current) {
          name2Ref.current.style.transform = `translate(${(-px * 26).toFixed(1)}px,${(-py * 26 * 0.4).toFixed(1)}px)`;
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Marquee ticker: crawl to a slow speed while hovered.
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return undefined;
    const dir = -1;
    const speed = 60;
    const half = () => el.scrollWidth / 2;
    let x = 0;
    let last = performance.now();
    let mult = 1,
      targetMult = 1;
    let raf;

    const onEnter = () => {
      targetMult = 0.14;
    };
    const onLeave = () => {
      targetMult = 1;
    };
    el.addEventListener('pointerenter', onEnter);
    el.addEventListener('pointerleave', onLeave);

    const loop = now => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      mult += (targetMult - mult) * 0.07;
      x += dir * speed * mult * dt;
      const h = half();
      if (-x >= h) x += h;
      el.style.transform = `translateX(${x.toFixed(2)}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      el.removeEventListener('pointerenter', onEnter);
      el.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <StyledCursorRing ref={cursorRef} />
      <StyledSection ref={sectionRef} data-hero>
        <StyledBlob ref={blobRef} />
        <StyledInner>
          <StyledEyebrow
            ref={el => {
              addReveal(el);
              eyebrowRef.current = el;
            }}>
            <StyledEyebrowLine />
            {eyebrow}
            <StyledEyebrowInk ref={eyebrowInkRef} aria-hidden="true">
              <StyledEyebrowLine />
              {eyebrow}
            </StyledEyebrowInk>
          </StyledEyebrow>

          <StyledName>
            <StyledNameLine ref={name1Ref}>{nameLine1}</StyledNameLine>
            <StyledNameLineStroke ref={name2Ref}>{nameLine2}</StyledNameLineStroke>
          </StyledName>

          <StyledIntroRow ref={addReveal}>
            <StyledIntro dangerouslySetInnerHTML={{ __html: html }} />
            <StyledCta href="#work">
              {buttonText} <StyledArrow>↘</StyledArrow>
            </StyledCta>
          </StyledIntroRow>
        </StyledInner>

        <StyledStatStrip ref={addReveal}>
          {stats &&
            stats.map((stat, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="sep">/</span>}
                <span>{stat}</span>
              </React.Fragment>
            ))}
        </StyledStatStrip>
      </StyledSection>

      <StyledMarqueeOuter>
        <StyledMarqueeInner ref={marqueeRef}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <React.Fragment key={i}>
              <span>{item}</span>
              <span>✦</span>
            </React.Fragment>
          ))}
        </StyledMarqueeInner>
      </StyledMarqueeOuter>
    </>
  );
};

Hero.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hero;
