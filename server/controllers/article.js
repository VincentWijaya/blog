const Article = require('../models/Article')

class Controller {
  
  static getArticle(req, res) {
    Article.find()
      .then(articles => {
        res.status(200).json(articles)
      })
      .catch(err => {
        res.status(500).json({error: err.message})
      })
  }
  
  static createArticle(req, res) {
    let newArticle = {
      title: req.body.title,
      content: req.body.content,
      userId: req.decoded.id
    }
    
    Article.create(newArticle)
      .then(article => {
        res.status(201).json(newArticle)
      })
      .catch(err => {
        res.status(500).json({error: err.message})
      })
  }
  
}

module.exports = Controller