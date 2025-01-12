import type { HeadFC, PageProps } from "gatsby";
import type { FC } from "react";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage: FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <p>hoge</p>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
