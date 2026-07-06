'use client';

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { getSr } from '@/lib/sr';
import { srConfig, about } from '@/data/content';
import { media } from '@/lib/media';

const INK = '#111110';
const CREAM = '#ECE7DA';
const ACCENT = '#FF4D23';

const StyledSection = styled.section`
  background: ${CREAM};
  padding: 96px 34px;
`;
const StyledInner = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 60px;
  align-items: start;
  ${media.tablet`grid-template-columns: 1fr;`};
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
  margin: 0;
  color: ${INK};
  font-weight: 800;
  font-size: clamp(30px, 4vw, 58px);
  letter-spacing: -0.03em;
  line-height: 0.98;
  mark {
    background: none;
    color: ${ACCENT};
  }
`;
const StyledBody = styled.div`
  p {
    margin: 26px 0 0;
    max-width: 600px;
    font-size: 17px;
    font-weight: 500;
    line-height: 1.6;
    color: #1c1b18;
  }
`;
const StyledSkills = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${INK};
`;
const StyledSkillGroup = styled.div`
  padding: 20px 22px;
  border-bottom: 2px solid ${INK};
  transition: background 0.24s ease, color 0.24s ease;
  &:last-of-type {
    border-bottom: none;
  }
  &:hover {
    background: ${INK};
    color: ${CREAM};
  }
`;
const StyledSkillLabel = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${ACCENT};
`;
const StyledSkillItems = styled.div`
  margin-top: 8px;
  font-weight: 600;
  font-size: 15px;
`;

const About = () => {
  const { skillGroups, html } = about;
  const revealContainer = useRef(null);

  useEffect(() => {
    const sr = getSr();
    sr && sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledSection id="about" ref={revealContainer}>
      <StyledInner>
        <div>
          <StyledEyebrow>[ 04 ] About</StyledEyebrow>
          <StyledTitle>
            Solo architect <mark>&amp;</mark> team lead.
          </StyledTitle>
          <StyledBody dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <StyledSkills>
          {skillGroups &&
            skillGroups.map((group, i) => (
              <StyledSkillGroup key={i} className="skill">
                <StyledSkillLabel>{group.label}</StyledSkillLabel>
                <StyledSkillItems>{group.items.join(' · ')}</StyledSkillItems>
              </StyledSkillGroup>
            ))}
        </StyledSkills>
      </StyledInner>
    </StyledSection>
  );
};

export default About;
