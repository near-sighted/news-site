// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  /**
   * Manipulates the given excerpt
   */
  api.loadSource((addSchemaResolvers) => {
  //   addSchemaResolvers({
  //     Article: {
  //       excerpt (obj) {
  //         var longText = (obj.excerpt.length > 200) ? '...' : '';
  //         return obj.excerpt.replace(/^(.{200}[^\s]*).*/, '$1' + longText);
  //       }
  //     },
  //     // News: {
  //     //   excerpt (obj) {
  //     //     var longText = (obj.excerpt.length > 200) ? '...' : '';
  //     //     return obj.excerpt.replace(/^(.{200}[^\s]*).*/, '$1' + longText);
  //     //   }
  //     // }
  //   });
  });

  api.onCreateNode(options => {
    // if (options.internal.typeName === 'Article') {
    //   options.recordType = options.internal.typeName;
    //   options.tags = (typeof options.tags === 'string') ? options.tags.split(',').map(string => string.trim()) : options.tags;
    //   return {
    //     ...options
    //   };
    // }

    // if (options.internal.typeName === 'News') {
    //   options.recordType = options.internal.typeName;
    //   options.tags = (typeof options.tags === 'string') ? options.tags.split(',').map(string => string.trim()) : options.tags;
    //   return {
    //     ...options
    //   };
    // }

    // if (options.internal.typeName === 'Tag') {
    //   options.recordType = options.internal.typeName;
    //   return {
    //     ...options
    //   };
    // }

    if (options.internal.typeName === 'Resource') {
      options.recordType = options.internal.typeName;
      options.type = (typeof options.type === 'string') ? options.type.split(',').map(string => string.trim()) : options.type;
      options.tags = (typeof options.tags === 'string') ? options.tags.split(',').map(string => string.trim()) : options.tags;
      return {
        ...options
      };
    }

    // if (options.internal.typeName === 'CustomPage') {
    //   options.recordType = options.internal.typeName;
    //   options.sidebar = !!(options.sidebar);
    //   return {
    //     ...options
    //   };
    // }
  });

  api.createPages(async ({ graphql, createPage }) => {

    const thread = await graphql(`{
      allThread {
        edges {
          node {
            id
            path: issueDate
            summaryComplete
          }
        }
      }
    }`)

    thread.data.allThread.edges.forEach(({ node }) => {
      createPage({
        path: `/threads/${node.path}`,
        component: './src/pages/ThreadsByDate.vue',
        context: {
          id: node.id,
          path: node.path,
          date: node.path,
          summaryComplete: node.summaryComplete
        }
      })

    })



    const tag = await graphql(`{
      allTag {
        edges {
          node {
            id
            name
            path: slug
            pastTwoWeeks
          }
        }
      }
    }`)
    // const tag = await graphql(`{
    //   allTag (filter: {pastTwoWeeks: {gt: 0}}) {
    //     edges {
    //       node {
    //         id
    //         name
    //         path: slug
    //         pastTwoWeeks
    //       }
    //     }
    //   }
    // }`)



    tag.data.allTag.edges.forEach(({ node }) => {
      createPage({
        path: `/tags/${node.path.toLowerCase()}`,
        component: './src/templates/Tag.vue',
        context: {
          id: node.id,
          name: node.name,
          path: node.path
        }
      })

    })

  })
}
