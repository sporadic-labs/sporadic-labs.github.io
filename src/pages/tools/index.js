import React, { PureComponent } from "react";
import { graphql, Link } from "gatsby";
import Page from "../../components/page";
import style from "./index.module.styl";

class Tools extends PureComponent {
  render() {
    const { data } = this.props;
    const pages = data.allMarkdownRemark.edges;

    return (
      <Page title="Tools">
        <ul className={style.toolsList}>
          {pages.map(({ node }) => {
            const { id, html, frontmatter } = node;
            return (
              <li key={id} className={style.tool}>
                <div className={style.toolImage}>
                  <img src={frontmatter.thumbnail.publicURL} alt="" />
                </div>
                <div className={style.toolInfo}>
                  <div className={style.toolTitle}>{frontmatter.title}</div>
                  <div
                    className={style.toolDescription}
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                  <a
                    className={style.toolLink}
                    href={frontmatter.link}
                    target="_blank"
                    alt="Link to the Github Repository for this project."
                  >
                    Repository
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </Page>
    );
  }
}

export default Tools;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { postType: { eq: "tool" } } }
    ) {
      edges {
        node {
          id
          html
          fields {
            postType
            slug
          }
          frontmatter {
            title
            date(formatString: "MM/DD/YY")
            link
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`;
