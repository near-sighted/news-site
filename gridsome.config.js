var embedConfig = {
  enabledProviders: ['Youtube', 'Vimeo', 'Gist', 'Codepen', 'JSFiddle', 'Giphy'],
  Youtube: {
    template: './src/embedTemplates/Youtube.hbs'
  },
  Vimeo: {
    template: './src/embedTemplates/Vimeo.hbs'
  },
  Giphy: {
    template: './src/embedTemplates/Giphy.hbs'
  },
  JSFiddle: {
    template: './src/embedTemplates/JSFiddle.hbs',
    secureConnection: true
  },
  Codepen: {
    template: './src/embedTemplates/Codepen.hbs'
  },
  Gist: {
    omitStylesheet: false
  }

};

module.exports = {
  siteName: 'NEAR Sighted',
  permalinks: {
    trailingSlash: false
  },
  icon: {
    favicon: {
      src: './src/favicon.png',
      sizes: [16, 32, 96]
    },
    touchicon: {
      src: './src/favicon.png',
      sizes: [76, 152, 120, 167],
      precomposed: true
    }
  },
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js'
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'G-PDGH7X2V73'
      }
    },
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     typeName: 'CustomPage',
    //     baseDir: './content/pages',
    //     path: '*.md'
    //   }
    // },
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     typeName: 'Article',
    //     baseDir: './content/articles',
    //     path: '**/*.md',
    //     refs: {
    //       tags: {
    //         typeName: 'Tag',
    //         create: true
    //       }
    //     }
    //   }
    // },
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     typeName: 'News',
    //     baseDir: './content/news',
    //     path: '*.md',
    //     refs: {
    //       tags: {
    //         typeName: 'Tag',
    //         create: true
    //       }
    //     }
    //   }
    // },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Credit',
        baseDir: './content/credits',
        path: '*.md'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Resource',
        baseDir: './content/resources',
        path: '*.md',
        refs: {
          tags: {
            typeName: 'ResourceTag',
            create: true
          },
          type: {
            typeName: 'ResourceType',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        searchFields: ['name', 'date', 'tags'],
        collections: [
          {
            typeName: 'Thread',
            indexName: 'Thread',
            fields: ['name', 'issueDate', 'date', 'tags'],
          },
          {
            typeName: 'Tag',
            indexName: 'Tag',
            fields: ['name', 'slug']
          },
          // {
          //   typeName: 'News',
          //   indexName: 'News',
          //   fields: ['name', 'content', 'path']
          // }
        ]
      }
    },
    {
      use: "@gridsome/source-airtable",
      options: {
        // Add these to a .env file
        // Details on finding these values can be found at:
        // https://gridsome.org/plugins/@gridsome/source-airtable
        apiKey: process.env.AIRTABLE_KEY, //required
        baseId: process.env.AIRTABLE_BASE, //required
        tables: [
          {
            name: "Conversations",
            typeName: "Thread", //required - needs to match template name
            select: {"view" : "gridsome-source-airtable"}, //optional
            links: [
              {
                fieldName: "tags",
                typeName: "Tag"
              }
            ], //optional

          },
          {
            name: "Insights",
            typeName: "Tag",
            select: { "view": "gridsome-source-airtable" }
          }

        ],
        tableName: "Conversations"
      },
    },
  ],
  templates: {
    // Thread: [{
    //   path: '/threads/:id'
    // }],
    // Tag: [
    //   {
    //     path: '/tag/:slug',
    //     component: './src/templates/Tag.vue'
    //   }
    // ],
    // News: [
    //   {
    //     path: '/news/:name',
    //     component: './src/templates/News.vue'
    //   }
    // ],
    // CustomPage: [
    //   {
    //     path: '/pages/:name',
    //     component: './src/templates/CustomPage.vue'
    //   }
    // ],
    ResourceType: [
      {
        name: 'resourcesByType',
        path: '/resources/filter/type/:name',
        component: './src/templates/ResourceTypeFilter.vue'
      }
    ],
    ResourceTag: [
      {
        name: 'resourcesByType',
        path: '/resources/filter/tag/:name',
        component: './src/templates/ResourceTagFilter.vue'
      }
    ]
  },
  transformers: {
    remark: {
      plugins: [
        ['@noxify/gridsome-plugin-remark-embed', embedConfig],
        ['gridsome-plugin-remark-prismjs-all', {
          noInlineHighlight: false,
          showLineNumbers: true
        }]
      ]
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('@customPageImage', '@/../content/pages');
  }
}
