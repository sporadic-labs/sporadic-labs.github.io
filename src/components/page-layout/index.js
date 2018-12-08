import React, { PureComponent } from "react";
import { StaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";
import Nav from "../nav/";
import style from "./index.module.styl";

const titleQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

class PageLayout extends PureComponent {
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
              <Nav />
              <div className={style.container}>{children}</div>
            </div>
          );
        }}
      />
    );
  }
}

export default PageLayout;
