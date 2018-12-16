import React, { PureComponent } from "react";
import { StaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";
import Container from "../container";

const titleQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

class Page extends PureComponent {
  render() {
    const { title, children } = this.props;
    return (
      <StaticQuery
        query={titleQuery}
        render={data => {
          const siteTitle = data.site.siteMetadata.title;
          const pageTitle = title ? `${siteTitle} | ${title}` : siteTitle;

          return (
            <div>
              <Helmet htmlAttributes={{ lang: "en" }} title={pageTitle} />
              <Container>{children}</Container>
            </div>
          );
        }}
      />
    );
  }
}

export default Page;
