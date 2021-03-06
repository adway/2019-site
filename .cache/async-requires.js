// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-goals-js": () => import("./../src/pages/goals.js" /* webpackChunkName: "component---src-pages-goals-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-projects-js": () => import("./../src/pages/projects.js" /* webpackChunkName: "component---src-pages-projects-js" */)
}

