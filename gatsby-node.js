const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

const POST_TYPES = { GAME: "game", TOOL: "tool" };
const gameTemplate = path.resolve("./src/templates/game.js");
const isPathGame = path => path.match(/\/games\/.*\.md/); // Markdown file located in /games/
const toolTemplate = path.resolve("./src/templates/tool.js");
const isPathTool = path => path.match(/\/tools\/.*\.md/); // Markdown file located in /tools/

// Create pages in the graphql database for games/ and tools/ markdown fiels
// See: https://www.gatsbyjs.org/tutorial/part-seven/
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
              edges {
                node {
                  fileAbsolutePath
                  fields {
                    slug
                    postType
                  }
                  frontmatter {
                    title
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create the game and tool pages from the query
        const markdownPosts = result.data.allMarkdownRemark.edges;

        // Separate out the game and tool pages via absolute path containing /games/ or /tools/
        const games = markdownPosts.filter(post => post.node.fields.postType === POST_TYPES.GAME);
        const tools = markdownPosts.filter(post => post.node.fields.postType === POST_TYPES.TOOL);

        games.forEach((post, i) => {
          const previous = i === games.length - 1 ? null : games[i + 1].node;
          const next = i === 0 ? null : games[i - 1].node;

          createPage({
            path: post.node.fields.slug,
            component: gameTemplate,

            // Additional data can be made available, in this case, next & prev pages
            context: {
              slug: post.node.fields.slug,
              previous,
              next
            }
          });
        });

        tools.forEach((post, i) => {
          const previous = i === tools.length - 1 ? null : tools[i + 1].node;
          const next = i === 0 ? null : tools[i - 1].node;

          createPage({
            path: post.node.fields.slug,
            component: toolTemplate,

            // Additional data can be made available, in this case, next & prev pages
            context: {
              slug: post.node.fields.slug,
              previous,
              next
            }
          });
        });
      })
    );
  });
};

// Creating additional fields on the DB entries for the markdown pages:
//  - "slug" for our game and tool pages in the form: /games/sample-game and /tools/sample-tool
//  - A "postType" field for sorting and querying later
// See: https://www.gatsbyjs.org/tutorial/part-seven/
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const type = isPathGame(node.fileAbsolutePath) ? POST_TYPES.GAME : POST_TYPES.TOOL;
    const filePath = createFilePath({ node, getNode });
    createNodeField({ name: `slug`, node, value: filePath });
    createNodeField({ name: `postType`, node, value: type });
  }
};
