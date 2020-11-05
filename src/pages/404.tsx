import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Layout from "../components/Layout";

const PageSection = styled.section`
  text-align: center;
`;

const Header = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`;
const Paragraph = styled.p`
  text-align: center;
  margin-bottom: 1rem;
`;

const PageNotFoundPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>
          Страница не найдена. Сказка - Новогодние подарки и кульки 2021
        </title>
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
      <PageSection>
        <Header>Страница не найдена</Header>
        <Paragraph>Похоже что вы не нашли то, что искали.</Paragraph>
        <Link to="/">Каталог подарков 2021</Link>
      </PageSection>
    </Layout>
  );
};

export default PageNotFoundPage;
