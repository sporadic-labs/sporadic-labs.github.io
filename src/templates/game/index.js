import React, { PureComponent } from "react";
import { graphql } from "gatsby";
import PageLayout from "../../components/page-layout";
import style from "./index.module.styl";

class GameTemplate extends PureComponent {
  componentDidMount() {
    const iframe = document.querySelector(`.${style.markdownContent} iframe`);
    iframe.width = iframe.offsetWidth;
    iframe.height = iframe.width;
  }

  render() {
    const post = this.props.data.markdownRemark;
    // const { previous, next } = this.props.pageContext;

    return (
      <PageLayout title={post.frontmatter.title}>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div className={style.markdownContent} dangerouslySetInnerHTML={{ __html: post.html }} />
      </PageLayout>
    );
  }
}

export default GameTemplate;

export const pageQuery = graphql`
  query GameBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
