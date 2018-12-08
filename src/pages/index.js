import React, { PureComponent } from "react";
import { graphql, Link } from "gatsby";
import PageLayout from "../components/page-layout";
import style from "./index.module.styl";

class Games extends PureComponent {
  render() {
    const { data } = this.props;
    const pages = data.allMarkdownRemark.edges;

    return (
      <PageLayout title="Games">
        <ul className={style.gamesList}>
          {pages.map(({ node }) => {
            return (
              <li key={node.id} className={style.game}>
                <Link to={node.fields.slug}>
                  <img
                    className={style.gameImage}
                    src={node.frontmatter.thumbnail.publicURL}
                    alt=""
                  />
                  <div className={style.gameTitle}>{node.frontmatter.title}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </PageLayout>
    );
  }
}

export default Games;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { postType: { eq: "game" } } }
    ) {
      edges {
        node {
          id
          excerpt
          html
          fields {
            postType
            slug
          }
          frontmatter {
            title
            date(formatString: "MM/DD/YY")
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`;
