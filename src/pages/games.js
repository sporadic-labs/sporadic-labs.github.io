import React, { PureComponent } from "react";
import { graphql, Link } from "gatsby";
import PageLayout from "../components/page-layout/";

class Games extends PureComponent {
  render() {
    const { data } = this.props;
    const pages = data.allMarkdownRemark.edges;

    return (
      <PageLayout title="Games">
        <h1>Games</h1>
        <ul>
          {pages.map(({ node }) => {
            return (
              <li key={node.id}>
                <Link to={node.fields.slug}>
                  <figure>
                    <img width="300" src={node.frontmatter.thumbnail.publicURL} alt="" />
                    <figcaption>{node.frontmatter.title}</figcaption>
                  </figure>
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
