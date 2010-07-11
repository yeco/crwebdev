
// add the vendored express to the require path
require.paths.unshift("vendor/express/lib")

// require express and its plugins
require("express")
require("express/plugins")

//require the actual express app
require ("./lib/app")
