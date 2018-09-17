const Article = require('../models/Article')

class Controller {
  
  static getArticle(req, res) {
    Article.find()
      .populate('userId', '_id name email')
      .populate('comments', '_id comment')
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
  
  static deleteArticle(req, res) {
    Article.deleteOne({_id: req.params.id})
      .then(() => {
        res.status(200).json({message: 'Article deleted!', id: req.params.id})
      })
      .catch(err => {
        res.status(500).json({error: err.message})
      })
  }
  
  static update(req, res) {
    let newArticle = {
      title: req.body.title,
      content: req.body.content
    }
    
    Article.updateOne({_id: req.params.id}, newArticle)
      .then(article => {
        res.status(200).json({message: 'Article updated!', id: req.params.id})
      })
      .catch(err => {
        res.status(500).json({error: err.message})
      })
  }
  
  static findArticle(req, res) {
    Article.findById(req.params.id)
      .populate('userId', '_id name')
      .populate('comments', '_id comment')
      .then(article => {
        res.status(200).json(article)
      })
      .catch(err => {
        res.status(500).json({error: err.message})
      })
  }
  
}

module.exports = Controller