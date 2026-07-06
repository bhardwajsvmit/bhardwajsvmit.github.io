'use client';

import styled, { keyframes } from 'styled-components';
import { media } from '@/lib/media';
import { navLinks } from '@/data/content';

const INK = '#111110';
const CREAM = '#ECE7DA';
const ACCENT = '#FF4D23';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 60;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 16px 34px;
  background: ${CREAM};
  border-bottom: 2px solid ${INK};
  ${media.phablet`padding: 14px 20px;`};
`;
const StyledLogo = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.02em;
  span {
    color: ${ACCENT};
  }
`;
const StyledNav = styled.nav`
  margin-left: auto;
  display: flex;
  gap: 26px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12.5px;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  ${media.thone`display: none;`};
`;
const StyledNavLink = styled.a`
  color: inherit;
  text-decoration: none;
  padding-bottom: 3px;
  background: linear-gradient(${ACCENT}, ${ACCENT}) no-repeat left bottom / 0 2px;
  transition: color 0.2s ease, background-size 0.28s cubic-bezier(0.2, 0.7, 0.2, 1);
  &:hover {
    color: ${ACCENT};
    background-size: 100% 2px;
  }
`;
const pulse = keyframes`
  0%, 100% { transform: scale(0.7); }
  50% { transform: scale(1); }
`;
const StyledBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: ${INK};
  color: ${CREAM};
  ${media.thone`margin-left: auto;`};
  padding: 7px 13px;
  border-radius: 100px;
`;
const StyledPulseDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${ACCENT};
  animation: ${pulse} 1.6s ease-in-out infinite;
`;

const Header = () => (
  <StyledHeader>
    <StyledLogo>
      SUMIT.B<span>✦</span>
    </StyledLogo>
    <StyledNav>
      {navLinks.map(({ name, url }, i) => (
        <StyledNavLink key={i} href={url}>
          {name}
        </StyledNavLink>
      ))}
    </StyledNav>
    <StyledBadge>
      <StyledPulseDot />
      Open to work
    </StyledBadge>
  </StyledHeader>
);

export default Header;
