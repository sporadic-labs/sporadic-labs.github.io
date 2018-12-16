import React, { PureComponent } from "react";
import { graphql } from "gatsby";
import Page from "../../components/page";
import style from "./index.module.styl";
import resizeEvent from "../../utils/resize-event";

class GameTemplate extends PureComponent {
  iframeRef = React.createRef();

  componentDidMount() {
    this.onResize();
    resizeEvent.addListener(this.onResize);
  }

  componentWillUnmount() {
    resizeEvent.removeListener(this.onResize);
  }

  onResize = () => {
    const post = this.props.data.markdownRemark;
    const { maxGameWidth, maxGameHeight, gameAspectRatio } = post.frontmatter;

    // Figure out a scale factor that fits the window size while respecting the aspect ratio and max
    // width and height
    const widthScale = Math.min(maxGameWidth, innerWidth) / gameAspectRatio;
    const heightScale = Math.min(maxGameHeight, innerHeight);
    const scale = Math.min(widthScale, heightScale);
    const width = gameAspectRatio * scale;
    const height = width / gameAspectRatio;
    this.iframeRef.current.width = width;
    this.iframeRef.current.height = height;
  };

  render() {
    const post = this.props.data.markdownRemark;
    const { gameSource, title, date } = post.frontmatter;
    // const { previous, next } = this.props.pageContext;

    return (
      <Page title={title}>
        <iframe className={style.iframe} ref={this.iframeRef} src={gameSource} frameBorder="0" />
        <h1>{title}</h1>
        <p>{date}</p>
        <div className={style.markdownContent} dangerouslySetInnerHTML={{ __html: post.html }} />
      </Page>
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
        maxGameWidth
        maxGameHeight
        gameAspectRatio
        gameSource
      }
    }
  }
`;
