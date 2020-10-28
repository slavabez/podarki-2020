import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import UnderConstructionPage from "../components/UnderConstructionPage";

export const query = graphql`
  query {
    allFile(filter: { extension: { eq: "pdf" } }) {
      nodes {
        relativePath
        publicURL
        prettySize
      }
    }
    file(relativePath: { eq: "2021_image.png" }) {
      relativePath
      childImageSharp {
        fluid(maxHeight: 400) {
          aspectRatio
          base64
          originalImg
          originalName
          presentationHeight
          presentationWidth
          sizes
          src
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const cats = [
    {
      name: `Каталог подарков 2021`,
      size: data.allFile.nodes[1].prettySize,
      url: data.allFile.nodes[1].publicURL,
    },
    {
      name: `Каталог подарков 2021 (сжатый)`,
      size: data.allFile.nodes[0].prettySize,
      url: data.allFile.nodes[0].publicURL,
    },
  ];
  const mainImage = data?.file?.childImageSharp?.fluid;

  return (
    <Layout>
      <UnderConstructionPage cats={cats} bannerImage={mainImage} />
    </Layout>
  );
};

export default IndexPage;
