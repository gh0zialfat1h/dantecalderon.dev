require('dotenv').config()
const aboutData = require('./about')

module.exports = {
  pathPrefix: `/`,
  ...aboutData,
  mapping: {
    'MarkdownRemark.frontmatter.author': `AuthorYaml`,
    'Mdx.frontmatter.author': `AuthorYaml`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-yaml',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          'gatsby-remark-embed-video',
          {
            resolve: 'gatsby-remark-code-titles',
            options: {
              className: 'gatsby-remark-code-title'
            }
          },
          {
            resolve: 'gatsby-remark-embed-gist',
            options: {
              username: 'dantehemerson',
              includeDefaultCss: true
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2000,
              quality: 100,
              showCaptions: true,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `80`
            }
          },
          {
            resolve: 'gatsby-remark-emojis',
            options: {
              active: true,
              class: 'emoji-icon',
              size: 64,
              styles: {
                display: 'inline',
                margin: '0',
                position: 'relative'
              }
            }
          },
          'gatsby-remark-external-links',
          'gatsby-remark-prismjs',
          'gatsby-remark-smartypants'
        ]
      }
    },
    `gatsby-plugin-catch-links`,
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.ANALITYCS_ID,
        head: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'dantecalderon.dev',
        cookieName: 'gaDanteCalderon',
        cookieExpires: 86400
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
        generateMatchPathRewrites: true
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#1976d2',
        showSpinner: false
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Dante Calderón',
        short_name: 'Dante C.',
        start_url: '/',
        icon: 'src/assets/images/logo.png',
        background_color: '#1976d2',
        theme_color: '#1976d2',
        display: 'standalone'
      }
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_LIST || ''
      }
    }
  ]
}
