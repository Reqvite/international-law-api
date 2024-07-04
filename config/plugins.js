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
          "api::global.global": true,
          "api::page.page": true,
          "api::law.law": true,
          "api::article.article": true,
          "api::literature.literature": true,
          "api::faculty.faculty": true,
          "api::article-category.article-category": true,
          "api::contact-us-submission.contact-us-submission": true,

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
