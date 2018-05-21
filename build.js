const stealTools = require("steal-tools");
return stealTools.optimize({
  main: ["steal-slim/web/main1.js"],
  config: __dirname + "/package.json!npm"
}, {
  minify: false,
  debug: true,
  dest: __dirname + "/assets/js"
});