const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query blogposts {
      allMarkdownRemark {
        nodes {
          frontmatter {
            path
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: `/blog/${node.frontmatter.path}`,
      component: path.resolve("./src/template/post.jsx"),
      context: { slug: node.frontmatter.path },
    });
  });
};
