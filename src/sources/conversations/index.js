const Airtable = require('airtable');

module.exports = function (api, opts) {
  const base = new Airtable({ apiKey: opts.apiKey }).base(opts.base);

  api.loadSource(async store => {
    const contentType = store.addContentType({
      typeName: 'Threads',
      route: '/threads/:path',
    });

    contentType.addSchemaField('issueDate', ({ graphql }) => ({
      type: graphql.GraphQLFloat,
      resolve(node) {
        return node.fields.issueDate;
      }
    }));

    await base('NEAR Sighted Q&A Bank').select().eachPage((records, fetchNextPage) => {
      records.forEach((record) => {
        const item = record._rawJson;

        contentType.addNode({
          id: item.id,
          title: item.fields.Name,
          fields: item.fields,
          content: item.fields.Description,
        });
      });
      fetchNextPage();
    });
  });
};