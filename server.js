require.paths.unshift("node-code-blog");
require("node-code-blog");


config({ 
    root:       __dirname,
    theme:      'crwdg',
    title:      'Costa Rica Web Developers Group',
    domain:     'http://crwebdev.heroku.com/',
    desciption: 'Grupo de web developers de Costa Rica',
    analytics:  ''
});

// GET "/license" - diplays the WTFPL
get('/license', function() {
    var fs = require('fs')
    ,   path = require('path');
    return fs.readFileSync( path.normalize( path.join( __dirname, 'LICENSE' )));
});

// GET "/fac"
get("/faq", function(){
    this.display("faq.html.ejs");
});

init();