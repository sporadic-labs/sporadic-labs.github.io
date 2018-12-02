import React, { PureComponent } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import PageLayout from "../components/page-layout/";

class ToolTemplate extends PureComponent {
  render() {
    const post = this.props.data.markdownRemark;
    // const { previous, next } = this.props.pageContext;

    return (
      <PageLayout title={post.frontmatter.title}>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </PageLayout>
    );
  }
}

export default ToolTemplate;

export const pageQuery = graphql`
  query ToolBySlug($slug: String!) {
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
