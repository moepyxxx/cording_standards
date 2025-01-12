import { graphql, useStaticQuery } from "gatsby";
import type { FC } from "react";

type Props = {
  title: string;
};
const Seo: FC<Props> = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {title} | {data.site.siteMetadata.title}
    </title>
  );
};

export default Seo;
