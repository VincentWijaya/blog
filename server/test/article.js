process.env.NODE_ENV = 'test'
var app  = require('../app.js')
var chai = require('chai')
var expect = chai.expect
var Article = require('../models/Article')

describe('Articles', () => {
  
  beforeEach((done) => {
    let newArticle = {
      title: 'Article 1',
      content: 'iagioajsogjasogjoiajgijasgjsagiasgjlkjl'
    }
    
    Article.create(newArticle)
      .then(() => {
        done()
      })
  })
  
  afterEach((done) => {
    Article.remove({}, () => {
      done()
    })
  })
  
  it('GET /articles should return all article', (done) => {
    chai.request(app)
      .get('/articles')
      .end((err, result) => {
        expect(result).to.have.status(200)
        expect(result.body).to.be.a('array')
        expect(result.body).to.have.lengthOf(1)
        expect(result.body[0]).to.have.property('title')
        expect(result.body[0].title).to.equal('Article 1')
        done()
      })
  })
  
  it('POST /articles should return new article')
  
  it('DELETE /articles should return deleted article id')
  
  it('PUT /articles should return updated article')
  
})