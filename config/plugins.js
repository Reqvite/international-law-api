module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  transformer: {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
      requestTransforms: {
        wrapBodyWithDataKey: true,
      },
      contentTypeFilter: {
        mode: "allow",
        uids: {
          "api::article.article": true,
          "api::literature.literature": true,
        },
      },
      plugins: {
        ids: {
          slugify: true,
        },
      },
    },
  },
});
