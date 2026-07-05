import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Layout, HeaderV2, Hero, Impact, Featured, Jobs, About, Contact } from '@components';
import styled from 'styled-components';

const ACCENT = '#FF4D23';

const StyledRoot = styled.div`
  background: #ece7da;
  color: #111110;
  font-family: 'Bricolage Grotesque', sans-serif;
  -webkit-font-smoothing: antialiased;
  position: relative;

  ::selection {
    background: ${ACCENT};
    color: #111110;
  }
`;

const IndexPage = ({ location, data }) => (
  <Layout location={location} bare>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=JetBrains+Mono:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <StyledRoot>
      <HeaderV2 />
      <Hero data={data.hero.edges} />
      <Impact />
      <Featured data={data.featured.edges} />
      <Jobs data={data.jobs.edges} />
      <About data={data.about.edges} />
      <Contact data={data.contact.edges} />
    </StyledRoot>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            eyebrow
            nameLine1
            nameLine2
            buttonText
            stats
          }
          html
        }
      }
    }
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      edges {
        node {
          frontmatter {
            title
            skillGroups {
              label
              items
            }
          }
          html
        }
      }
    }
    jobs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/jobs/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            company
            range
          }
          html
        }
      }
    }
    featured: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/featured/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            year
            tech
          }
          html
        }
      }
    }
    contact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
      edges {
        node {
          frontmatter {
            title
            buttonText
          }
        }
      }
    }
  }
`;
