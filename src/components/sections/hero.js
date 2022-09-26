import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { email } from '@config';
import styled, { keyframes } from 'styled-components';
import { theme, mixins, media, Section } from '@styles';
const { colors, fontSizes, fonts, navDelay, loaderDelay } = theme;



const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
`;
const StyledOverline = styled.h1`
  color: ${colors.green};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.md};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.sm};`};
  ${media.tablet`font-size: ${fontSizes.smish};`};
`;

const pulsate = keyframes`
 0%, 18%, 22%, 25%, 53%, 57%, 100% {
    /* Larger blur radius */
    text-shadow:
      0 0 7px #fff,
      0 0 10px #0fa,
      0 0 21px #0fa,
      0 0 42px #0fa,
      0 0 82px #0fa;
  }
  20%, 24%, 55%  {
    /* Smaller blur radius */
    text-shadow:
      0 0 2px #fff,
      0 0 4px #0fa,
      0 0 6px #0fa;
      /* 0 0 10px #0fa,
      0 0 17px #0fa; */
      /* 0 0 45px #0fa,
      0 0 55px #0fa,
      0 0 70px #0fa,
      0 0 80px #0fa; */
  }
`

const StyledTitle = styled.h2`

color : white;
/* text-shadow:
      0 0 7px #fff,
      0 0 10px #0fa,
      0 0 21px #0fa,
      0 0 42px #0fa,
      0 0 82px #0fa; */
      /* 0 0 92px #0fa,
      0 0 102px #0fa,
      0 0 151px #0fa; */

  animation: ${pulsate} 2s infinite alternate;   

  font-size: 80px;
  /* font-weight: 600; */
  line-height: 1.1;
  margin: 0;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const StyledSubtitle = styled.h3`
  font-size: 80px;
  line-height: 1.1;
  color: ${colors.slate};
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const StyledDescription = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
  a {
    ${mixins.inlineLink};
  }
`;
const StyledEmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`;

const Hero = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const { frontmatter, html } = data[0].node;

  const one = () => (
    <StyledOverline style={{ transitionDelay: '100ms' }}>{frontmatter.title}</StyledOverline>
  );
  const two = () => (
    <StyledTitle style={{ transitionDelay: '200ms' }}>{frontmatter.name}.</StyledTitle>
  );
  const three = () => (
    <StyledSubtitle style={{ transitionDelay: '300ms' }}>{frontmatter.subtitle}</StyledSubtitle>
  );
  const four = () => (
    <StyledDescription
      style={{ transitionDelay: '400ms' }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
  const five = () => (
    <div style={{ transitionDelay: '500ms' }}>
      <StyledEmailLink href={`mailto:${email}`}>Contact Me</StyledEmailLink>
    </div>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledContainer>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              {item}
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledContainer>
  );
};

Hero.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hero;
