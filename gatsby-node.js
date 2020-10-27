const path = require("path")


module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //get path to template
  const blogTemplate = path.resolve("./src/templates/blog.js")
  //get markdown data
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `) 
  //create new pages
  res.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
          component: blogTemplate,
          path: `/blog/${edge.node.fields.slug}`,
          context: {
              slug: edge.node.fields.slug
          }
      })
  });
 
}
