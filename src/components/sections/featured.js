import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig } from '@config';
import styled from 'styled-components';

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
  color: ${INK};
  font-weight: 800;
  font-size: clamp(34px, 5vw, 72px);
  letter-spacing: -0.03em;
  line-height: 0.95;
`;
const StyledList = styled.div`
  border-top: 2px solid ${INK};
`;
const StyledWorkTitle = styled.h3`
  margin: 0;
  color: inherit;
  font-weight: 800;
  font-size: clamp(30px, 4.2vw, 60px);
  letter-spacing: -0.03em;
  line-height: 0.95;
  transition: transform 0.34s cubic-bezier(0.2, 0.7, 0.2, 1);
`;
const StyledArrow = styled.div`
  font-size: 26px;
  margin-top: 8px;
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.3, 1.4, 0.4, 1), color 0.3s ease;
`;
const StyledRow = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 30px;
  align-items: start;
  padding: 36px 8px;
  border-bottom: 2px solid ${INK};
  cursor: pointer;
  transition: background 0.3s cubic-bezier(0.2, 0.7, 0.2, 1), color 0.3s cubic-bezier(0.2, 0.7, 0.2, 1),
    padding 0.3s cubic-bezier(0.2, 0.7, 0.2, 1);

  &:hover {
    background: ${INK};
    color: ${CREAM};
    padding-left: 24px;
    padding-right: 24px;
    ${StyledWorkTitle} {
      transform: translateX(12px);
    }
    ${StyledArrow} {
      transform: translate(7px, -7px);
      color: ${ACCENT};
    }
  }
`;
const StyledIndex = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  font-size: 15px;
  color: ${ACCENT};
`;
const StyledContent = styled.div`
  min-width: 0;
`;
const StyledDescription = styled.p`
  margin: 14px 0 0;
  max-width: 680px;
  font-size: 15.5px;
  font-weight: 500;
  line-height: 1.6;
`;
const StyledTags = styled.div`
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11.5px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;
const StyledTag = styled.span`
  border: 1.5px solid currentColor;
  padding: 5px 11px;
  border-radius: 100px;
`;
const StyledYear = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  text-align: right;
  white-space: nowrap;
`;

const Featured = ({ data }) => {
  const revealTitle = useRef(null);
  const revealRows = useRef([]);
  revealRows.current = [];
  const addReveal = el => el && revealRows.current.push(el);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealRows.current.forEach((el, i) => sr.reveal(el, srConfig(i * 80)));
  }, []);

  const items = data.filter(({ node }) => node);

  return (
    <StyledSection id="work">
      <StyledInner>
        <StyledEyebrow>[ 02 ] Selected work</StyledEyebrow>
        <StyledTitle ref={revealTitle}>Things I&rsquo;ve built &amp; owned.</StyledTitle>
        <StyledList>
          {items.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { title, year, tech } = frontmatter;
            return (
              <StyledRow key={i} ref={addReveal} data-work>
                <StyledIndex>{String(i + 1).padStart(2, '0')}</StyledIndex>
                <StyledContent>
                  <StyledWorkTitle>{title}</StyledWorkTitle>
                  <StyledDescription dangerouslySetInnerHTML={{ __html: html }} />
                  {tech && (
                    <StyledTags>
                      {tech.map((t, j) => (
                        <StyledTag key={j}>{t}</StyledTag>
                      ))}
                    </StyledTags>
                  )}
                </StyledContent>
                <StyledYear>
                  {year}
                  <StyledArrow>↗</StyledArrow>
                </StyledYear>
              </StyledRow>
            );
          })}
        </StyledList>
      </StyledInner>
    </StyledSection>
  );
};

Featured.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Featured;
