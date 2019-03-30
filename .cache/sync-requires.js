const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/tatianascott 1/AllThingsCode/PersonalProjects/Personal-Website/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/tatianascott 1/AllThingsCode/PersonalProjects/Personal-Website/src/pages/About.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/tatianascott 1/AllThingsCode/PersonalProjects/Personal-Website/src/pages/Contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/tatianascott 1/AllThingsCode/PersonalProjects/Personal-Website/src/pages/index.js"))),
  "component---src-pages-other-interests-js": hot(preferDefault(require("/Users/tatianascott 1/AllThingsCode/PersonalProjects/Personal-Website/src/pages/OtherInterests.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/tatianascott 1/AllThingsCode/PersonalProjects/Personal-Website/src/pages/Projects.js"))),
  "component---src-pages-thanks-js": hot(preferDefault(require("/Users/tatianascott 1/AllThingsCode/PersonalProjects/Personal-Website/src/pages/Thanks.js")))
}

