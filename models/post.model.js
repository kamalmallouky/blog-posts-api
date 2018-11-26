var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var postSchema = new Schema({
  identifier: String,
  title: String,
  texte: String,
  publicationDate: Date,
  user: {
    username: String,
    firstname: String,
    lastname: String
  },
  content: String,
  comments: Schema.Types.Mixed
});

// the schema is useless so far
// we need to create a model using it
var post = mongoose.model('Post', postSchema, 'post');

// make this available to our users in our Node applications
module.exports = post;