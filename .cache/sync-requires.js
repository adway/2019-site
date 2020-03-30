const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Volumes/Samsung_T5/dev/WebDevelopment/2019-site/.cache/dev-404-page.js"))),
  "component---src-pages-goals-js": hot(preferDefault(require("/Volumes/Samsung_T5/dev/WebDevelopment/2019-site/src/pages/goals.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Volumes/Samsung_T5/dev/WebDevelopment/2019-site/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Volumes/Samsung_T5/dev/WebDevelopment/2019-site/src/pages/projects.js")))
}

