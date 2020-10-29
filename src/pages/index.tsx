import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Gallery from "../components/PresetsGallery";

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

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta name="description" content="" />
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
        <meta property="og:image" content="" />

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
        <meta property="twitter:image" content="" />
      </Helmet>
      <Gallery />
    </Layout>
  );
};

export default IndexPage;
