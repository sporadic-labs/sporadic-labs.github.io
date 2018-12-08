import React, { PureComponent } from "react";
import { graphql, Link } from "gatsby";
import PageLayout from "../../components/page-layout";
import style from "./index.module.styl";

class Tools extends PureComponent {
  render() {
    const { data } = this.props;
    const pages = data.allMarkdownRemark.edges;

    return (
      <PageLayout title="Tools">
        <h1>Tools</h1>
        <ul className={style.toolsList}>
          {pages.map(({ node }) => {
            const { id, html, frontmatter } = node;
            return (
              <li key={id} className={style.tool}>
                <img className={style.toolImage} src={frontmatter.thumbnail.publicURL} alt="" />
                <div className={style.toolInfo}>
                  <h2 className={style.toolTitle}>{frontmatter.title}</h2>
                  <div
                    className={style.toolDescription}
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                  <a className={style.toolLink} href={frontmatter.link} target="_blank">
                    Repository
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </PageLayout>
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
