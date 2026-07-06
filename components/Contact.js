'use client';

import styled from 'styled-components';
import { email, phone, phoneDisplay, socialMedia, contact } from '@/data/content';

const INK = '#111110';
const CREAM = '#ECE7DA';
const ACCENT = '#FF4D23';

const StyledSection = styled.section`
  background: ${ACCENT};
  color: ${INK};
  padding: 110px 34px 40px;
  border-top: 2px solid ${INK};
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
  margin-bottom: 18px;
`;
const StyledTitle = styled.h2`
  margin: 0;
  color: ${INK};
  font-weight: 800;
  font-size: clamp(48px, 9vw, 150px);
  letter-spacing: -0.045em;
  line-height: 0.84;
  text-transform: uppercase;
`;
const StyledCtaRow = styled.div`
  margin-top: 46px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: center;
`;
const StyledEmailLink = styled.a`
  display: inline-block;
  background: ${INK};
  color: ${CREAM};
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
  font-size: clamp(15px, 1.6vw, 19px);
  padding: 18px 30px;
  text-decoration: none;
  box-shadow: 7px 7px 0 ${INK};
  transition: transform 0.2s cubic-bezier(0.34, 1.3, 0.4, 1), box-shadow 0.2s cubic-bezier(0.34, 1.3, 0.4, 1),
    color 0.2s ease;
  &:hover {
    transform: translate(7px, 7px);
    box-shadow: 0 0 0 ${INK};
    color: ${ACCENT};
  }
`;
const StyledPhoneLink = styled.a`
  display: inline-block;
  border: 2px solid ${INK};
  background: transparent;
  color: ${INK};
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
  font-size: clamp(15px, 1.6vw, 19px);
  padding: 18px 28px;
  text-decoration: none;
  box-shadow: 6px 6px 0 ${INK};
  transition: transform 0.2s cubic-bezier(0.34, 1.3, 0.4, 1), box-shadow 0.2s cubic-bezier(0.34, 1.3, 0.4, 1),
    background 0.2s ease, color 0.2s ease;
  &:hover {
    background: ${INK};
    color: ${ACCENT};
    transform: translate(6px, 6px);
    box-shadow: 0 0 0 ${INK};
  }
`;
const StyledFooterRow = styled.div`
  margin-top: 70px;
  padding-top: 22px;
  border-top: 2px solid ${INK};
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;
const StyledFooterLink = styled.a`
  color: inherit;
  text-decoration: none;
  padding-bottom: 2px;
  background: linear-gradient(${INK}, ${INK}) no-repeat left bottom / 0 2px;
  transition: background-size 0.28s cubic-bezier(0.2, 0.7, 0.2, 1), letter-spacing 0.28s ease;
  &:hover {
    background-size: 100% 2px;
    letter-spacing: 0.09em;
  }
`;
const StyledCopyright = styled.span`
  margin-left: auto;
  opacity: 0.7;
`;

const Contact = () => {
  const { title, buttonText } = contact;
  const github = socialMedia.find(s => s.name === 'GitHub');
  const linkedin = socialMedia.find(s => s.name === 'Linkedin');

  return (
    <StyledSection id="contact">
      <StyledInner>
        <StyledEyebrow>[ 05 ] Let&rsquo;s talk</StyledEyebrow>
        <StyledTitle dangerouslySetInnerHTML={{ __html: title }} />
        <StyledCtaRow>
          <StyledEmailLink href={`mailto:${email}`}>
            {buttonText} <span>({email})</span> ↘
          </StyledEmailLink>
          <StyledPhoneLink href={`tel:${phone}`}>{phoneDisplay}</StyledPhoneLink>
        </StyledCtaRow>
        <StyledFooterRow>
          {github && (
            <StyledFooterLink href={github.url} target="_blank" rel="nofollow noopener noreferrer">
              GitHub ↗
            </StyledFooterLink>
          )}
          {linkedin && (
            <StyledFooterLink href={linkedin.url} target="_blank" rel="nofollow noopener noreferrer">
              LinkedIn ↗
            </StyledFooterLink>
          )}
          <StyledCopyright>© {new Date().getFullYear()} Sumit Bhardwaj</StyledCopyright>
        </StyledFooterRow>
      </StyledInner>
    </StyledSection>
  );
};

export default Contact;
