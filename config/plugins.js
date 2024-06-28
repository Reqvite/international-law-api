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
          "api::article-category.article-category": true,
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
