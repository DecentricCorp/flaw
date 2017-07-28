var jsonMakeHTML = require('json-make-html')
var calc = function(json, args, cb){
    return jsonMakeHTML.make(json, args || {}, function(html){
        if (cb) {
            return cb(html)
        } else {
            return html
        }
    })
}
var obj =  {
    init: function(){console.log("initialized")},
    calc : calc,
    jsonMakeHTML : jsonMakeHTML
}
module.exports = obj
