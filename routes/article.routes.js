module.exports = function(app){
    var articleController = require('./../controllers/article.controller')

    app.get('/new', articleController.form)
    app.post('/submit',articleController.new)      
    app.get('/article/:index',articleController.read)
}