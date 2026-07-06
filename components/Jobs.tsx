'use client';

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { getSr } from '@/lib/sr';
import { srConfig, jobs } from '@/data/content';
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
  margin: 0 0 50px;
  color: ${CREAM};
  font-weight: 800;
  font-size: clamp(34px, 5vw, 72px);
  letter-spacing: -0.03em;
  line-height: 0.95;
`;
const StyledList = styled.div`
  border-top: 2px solid ${RULE};
`;
const StyledRow = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 24px;
  padding: 26px 10px;
  border-bottom: 2px solid ${RULE};
  transition: background 0.26s cubic-bezier(0.2, 0.7, 0.2, 1), color 0.26s cubic-bezier(0.2, 0.7, 0.2, 1),
    padding-left 0.26s cubic-bezier(0.2, 0.7, 0.2, 1);
  ${media.thone`grid-template-columns: 1fr;`};

  &:hover {
    background: ${ACCENT};
    color: ${INK};
    padding-left: 22px;
  }
`;
const StyledDate = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 12.5px;
  letter-spacing: 0.03em;
`;
const StyledJobTitle = styled.div`
  font-weight: 700;
  font-size: clamp(20px, 2.2vw, 28px);
  letter-spacing: -0.01em;
`;
const StyledCompany = styled.span`
  opacity: 0.6;
  font-weight: 400;
`;
const StyledDescription = styled.div`
  margin: 8px 0 0;
  max-width: 820px;
  font-size: 14.5px;
  font-weight: 500;
  line-height: 1.55;
  opacity: 0.82;
`;

const Jobs = () => {
  const revealTitle = useRef<HTMLHeadingElement | null>(null);
  const revealMap = useRef(new Map<number, HTMLElement>());
  const addReveal = (key: number, el: HTMLElement | null) => {
    if (el) revealMap.current.set(key, el);
    else revealMap.current.delete(key);
  };

  useEffect(() => {
    const sr = getSr();
    sr && sr.reveal(revealTitle.current!, srConfig());
    Array.from(revealMap.current.values()).forEach((el, i) => sr && sr.reveal(el, srConfig(i * 80)));
  }, []);

  return (
    <StyledSection id="timeline">
      <StyledInner>
        <StyledEyebrow>[ 03 ] Experience</StyledEyebrow>
        <StyledTitle ref={revealTitle}>Five years, four teams.</StyledTitle>
        <StyledList>
          {jobs.map((item, i) => {
            const { title, company, range, html } = item;
            return (
              <StyledRow key={i} ref={el => addReveal(i, el)} data-row>
                <StyledDate>{range.toUpperCase()}</StyledDate>
                <div>
                  <StyledJobTitle>
                    {title} <StyledCompany>— {company}</StyledCompany>
                  </StyledJobTitle>
                  <StyledDescription dangerouslySetInnerHTML={{ __html: html }} />
                </div>
              </StyledRow>
            );
          })}
        </StyledList>
      </StyledInner>
    </StyledSection>
  );
};

export default Jobs;
