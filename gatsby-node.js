// gatsby-node.js
exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: '/en/broker/*',
    toPath: '/en/broker'
  })
  createRedirect({
    fromPath: '/en/prequal/*',
    toPath: '/en/prequal'
  })
  createRedirect({
    fromPath: '/en/resume/*',
    toPath: '/en/resume'
  })
}

// exports.onCreateDevServer = ({ app }) => {
//   app.get('/check', function (req, res) {
//     res.json({ ok: true })
//   })
// }

// exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
//   if (getConfig().mode === 'production') {
//     actions.setWebpackConfig({
//       devtool: false
//     })
//   }
// }

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: false
  })
}
