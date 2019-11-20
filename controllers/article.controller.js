var Article = require('./../models/article.model')

module.exports.form = function(request, response){
    response.render('form.ejs')
  }

module.exports.new = function(request, response){
    //save(request.body)
    let article = new Article(request.body)
    article.save(function(err,data){
      if(err){
            response.status(400).json({msg:"All fiels are required"})
      }
      response.status(200).json({article:data})
    })
}

module.exports.read = function(request, response){
    if(request.params.index){
      //response.json(articles[request.params])
      //response.render('article.ejs',{article:articles[request.params.index]})
      Article.find({'_id': request.params.index},function(err,data){
        if(err){
          console.log(err)
          return response.status(400).json({msg:'could not not query the id'})
   
        }
        return response.render('article.ejs',{article:data[0]})
      })
    }
    else{
      return response.json({msg:"Article not found"})
    }
   }
