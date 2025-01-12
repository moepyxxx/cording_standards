import { graphql, type HeadFC, type PageProps } from "gatsby";
import type { FC } from "react";
import Seo from "../components/seo";

type QueryData = {
  allFile: {
    nodes: {
      name: string;
    }[];
  };
};

const IndexPage: FC<PageProps<QueryData>> = ({ data }) => {
  return (
    <main>
      <p>all guidelines</p>
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title="Home" />;
