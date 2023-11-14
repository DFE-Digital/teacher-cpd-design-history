module.exports = function (eleventyConfig) {
  // Options to customise the appearance of your design history
  // https://x-govuk.github.io/govuk-eleventy-plugin/options/
  eleventyConfig.addPlugin(require('@x-govuk/govuk-eleventy-plugin'), {
    stylesheets: [
      '/styles/application.css'
    ],
    headingPermalinks: true,
    header: {
      organisationLogo: false,
      productName: 'Teacher CPD design history',
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap'
      }
    },
    url: process.env.GITHUB_ACTIONS ? 'https://teacher-cpd.design-history.education.gov.uk/' : false
  })

  // Collections of posts for each service
  eleventyConfig.addCollection('manage-training', collection => {
    return collection.getFilteredByGlob('app/posts/manage-training/*.md')
  })

  eleventyConfig.addCollection('manage-cpd-delivery', collection => {
    return collection.getFilteredByGlob('app/posts/manage-cpd-delivery/*.md')
  })

  eleventyConfig.addCollection('register-for-an-npq', collection => {
    return collection.getFilteredByGlob('app/posts/register-for-an-npq/*.md')
  })

  eleventyConfig.addCollection('support-for-cpd', collection => {
    return collection.getFilteredByGlob('app/posts/support-for-cpd/*.md')
  })

  eleventyConfig.addCollection('support-for-early-career-teachers', collection => {
    return collection.getFilteredByGlob('app/posts/support-for-early-career-teachers/*.md')
  })

  // Browser Sync
  eleventyConfig.setBrowserSyncConfig({
    rewriteRules: [{
      match: /\/image\/(\d+)(x)?(\d+)?/g,
      replace: '/images'
    }],
    serveStaticOptions: {
      extensions: ['html']
    }
  })

  // Template libraries
  eleventyConfig.setLibrary('njk', require('./lib/libraries/nunjucks'))
  eleventyConfig.setLibrary('md', require('./lib/libraries/markdown'))

  // Filters
  eleventyConfig.addFilter('date', require('./lib/filters/date'))
  eleventyConfig.addFilter('fixed', require('./lib/filters/fixed'))
  eleventyConfig.addFilter('includes', require('./lib/filters/includes'))
  eleventyConfig.addFilter('markdown', require('./lib/filters/markdown'))
  eleventyConfig.addFilter('pretty', require('./lib/filters/pretty'))
  eleventyConfig.addFilter('sort', require('./lib/filters/sort'))
  eleventyConfig.addFilter('tokenize', require('./lib/filters/tokenize'))
  eleventyConfig.addFilter('totalFromRows', require('./lib/filters/total-from-rows'))
  eleventyConfig.addFilter('widont', require('./lib/filters/widont'))

  // Transforms

  // Collections

  // Passthrough
  eleventyConfig.addPassthroughCopy('./app/documents')
  eleventyConfig.addPassthroughCopy({ './app/images': '.' })
  eleventyConfig.addPassthroughCopy({ 'node_modules/govuk-frontend/govuk/assets': 'assets' })

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      layouts: '_layouts',
      includes: '_components'
    },
    templateFormats: ['njk', 'md', '11ty.js']
  }
}
