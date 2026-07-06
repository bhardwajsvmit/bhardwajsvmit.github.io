'use client';

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { getSr } from '@/lib/sr';
import { srConfig, stats, type Stat as StatData } from '@/data/content';
import { media } from '@/lib/media';

const INK = '#111110';
const CREAM = '#ECE7DA';
const ACCENT = '#FF4D23';
const RULE = '#2b2a27';

const StyledSection = styled.section`
  background: ${INK};
  color: ${CREAM};
  padding: 96px 34px;
`;
const StyledInner = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;
const StyledEyebrow = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${ACCENT};
  margin-bottom: 14px;
`;
const StyledTitle = styled.h2`
  margin: 0 0 56px;
  color: ${CREAM};
  font-weight: 800;
  font-size: clamp(34px, 5vw, 72px);
  letter-spacing: -0.03em;
  line-height: 0.95;
  max-width: 1100px;
`;
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 2px solid ${CREAM};
  ${media.tablet`grid-template-columns: repeat(2, 1fr);`};
`;
const StyledCell = styled.div`
  min-width: 0;
  padding: 34px 26px 30px;
  border-bottom: 2px solid ${CREAM};
  border-right: 2px solid ${RULE};
  &:nth-child(4n) {
    border-right: none;
  }
  ${media.tablet`
    &:nth-child(4n) {
      border-right: 2px solid ${RULE};
    }
    &:nth-child(2n) {
      border-right: none;
    }
  `};
`;
const StyledNumber = styled.div`
  font-weight: 800;
  font-size: clamp(48px, 6vw, 90px);
  letter-spacing: -0.04em;
  line-height: 1;
  color: ${ACCENT};
`;
const StyledLabel = styled.div`
  margin-top: 14px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12.5px;
  line-height: 1.6;
  color: #a7a499;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

const Stat = ({ value, prefix, suffix, label, delay }: StatData & { delay: number }) => {
  const numRef = useRef<HTMLSpanElement | null>(null);
  const revealRef = useRef<HTMLDivElement | null>(null);
  const doneRef = useRef(false);

  useEffect(() => {
    const sr = getSr();
    sr && sr.reveal(revealRef.current!, srConfig(delay));
  }, [delay]);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting || doneRef.current) return;
          doneRef.current = true;
          const dur = 1700;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(value * eased) + (p > 0.05 ? suffix || '' : '');
            if (p < 1) requestAnimationFrame(tick);
            else el.textContent = value + (suffix || '');
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix]);

  return (
    <StyledCell ref={revealRef}>
      <StyledNumber>
        {prefix}
        <span ref={numRef}>0</span>
      </StyledNumber>
      <StyledLabel>
        {label.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {i > 0 && <br />}
            {line}
          </React.Fragment>
        ))}
      </StyledLabel>
    </StyledCell>
  );
};

const Impact = () => {
  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const sr = getSr();
    sr && sr.reveal(eyebrowRef.current!, srConfig());
    sr && sr.reveal(titleRef.current!, srConfig(60));
  }, []);

  return (
    <StyledSection id="impact">
      <StyledInner>
        <StyledEyebrow ref={eyebrowRef}>[ 01 ] By the numbers</StyledEyebrow>
        <StyledTitle ref={titleRef}>Numbers from shipping at scale.</StyledTitle>
        <StyledGrid>
          {stats.map((stat, i) => (
            <Stat key={i} {...stat} delay={i * 90} />
          ))}
        </StyledGrid>
      </StyledInner>
    </StyledSection>
  );
};

export default Impact;
