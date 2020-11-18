import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import GallerySection from "../components/GallerySection";
import { dissectPresentImages } from "../utils/helpers";

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "podarki" }
        extension: { eq: "jpg" }
      }
    ) {
      nodes {
        relativePath
        prettySize
        childImageSharp {
          fluid(
            sizes: "[50,200,500,1200]"
            srcSetBreakpoints: [50, 200, 500, 1200]
          ) {
            src
            srcSet
            base64
            aspectRatio
            originalImg
            sizes
          }
        }
      }
    }
    file(relativePath: { eq: "2021_image.png" }) {
      relativePath
      childImageSharp {
        fluid(maxWidth: 500) {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
    }
  }
`;

const IndexPage: React.FC<any> = ({ data }) => {
  const imageData = dissectPresentImages(data?.allFile?.nodes);
  const bannerImage = data?.file?.childImageSharp;
  return (
    <Layout>
      <Helmet>
        <title>Сказка - Новогодние подарки и кульки 2021</title>
        <meta
          name="title"
          content="Сказка - Новогодние подарки и кульки 2021"
        />
        <meta
          name="description"
          content="Детские новогодние подарки, новогодние кульки со сладостями в г. Кокшетау, г. Костанай и г. Петропавловск. Новогодние кульки с конфетами и шоколадом из Казахстана и России"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skazka-podarki.kz/" />
        <meta
          property="og:title"
          content="Сказка - Новогодние подарки и кульки 2021"
        />
        <meta
          property="og:description"
          content="Детские новогодние подарки, новогодние кульки со сладостями в г. Кокшетау, г. Костанай и г. Петропавловск. Новогодние кульки с конфетами и шоколадом из Казахстана и России"
        />
        <meta
          property="og:image"
          content="https://skazka-podarki.kz/share_image_wide.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://skazka-podarki.kz/" />
        <meta
          property="twitter:title"
          content="Сказка - Новогодние подарки и кульки 2021"
        />
        <meta
          property="twitter:description"
          content="Детские новогодние подарки, новогодние кульки со сладостями в г. Кокшетау, г. Костанай и г. Петропавловск. Новогодние кульки с конфетами и шоколадом из Казахстана и России"
        />
        <meta
          property="twitter:image"
          content="https://skazka-podarki.kz/share_image_wide.png"
        />
      </Helmet>
      <GallerySection imageData={imageData} bannerImage={bannerImage} />
    </Layout>
  );
};

export default IndexPage;
