import * as React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "files" } }) {
      nodes {
        relativePath
        publicURL
        prettySize
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

  return (
    <section>
      <h1>Сайт в разработке</h1>
      {cats.map((c) => {
        return (
          <p key={c.name}>
            <a href={c.url}>
              {c.name} - {c.size}
            </a>
          </p>
        );
      })}
    </section>
  );
};

export default IndexPage;
