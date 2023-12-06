



module.exports = {
 
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    }, 
    {
      resolve: 'gatsby-alias-imports',
      options: {
        aliases: {
         /*  '@theme': `${__dirname}/config/theme.ts`,
          '@utils': `${__dirname}/src/common/utils`,
          '@hooks': `${__dirname}/src/common/hooks`, */
          '@theme': `${__dirname}/src/theme`,
          '@style': `${__dirname}/src/components/common/style`,
          '@icons': `${__dirname}/src/components/common/icons`,
          '@components': `${__dirname}/src/components/`,
          '@assets': `${__dirname}/src/components/common/assets`,

        }
      }
    }
  ]
}

