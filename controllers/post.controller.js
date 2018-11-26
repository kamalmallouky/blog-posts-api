var Post = require('../models/post.model');
var logger = require('morgan');
var crypto = require('crypto');

exports.getAll = function (req,res) {
  Post.find({}, function(err,posts) {
    if(err) {
      console.error(err.stack);
      res.status(500).send('Something broke!');
    }
    res.send(posts)
  })
};

exports.getPostById = function(req,res) {
  const postId = req.param('id');
  if (!postId) {
    res.status(400).send('request param id is missing');
  }
  Post.findOne({identifier: postId}, function savePost(err,post) {
    if(err) {
      console.error(err.stack);
      res.status(500).send('oups!! Something broke!');
    }
    res.send(post);
  });
};

exports.save = function (req,res) {
  // generate random id
  var postId = crypto.randomBytes(32);
  // find if a document exists with the generated id
  Post.findOne({identifier: postId}, function savePost(err,post) {
    if(err) { // return a 500 status if error occured while find request
      console.error(err.stack);
      res.status(500).send('Something broke!');
    }
    if (post) { // try with another genrated id if the first id match with a post id
      postId = crypto.randomBytes(32);
      Post.findOne({identifier: postId}, savePost);
    } else { // save the post otherwise
      var postToSave = new Post(req.body);
      postToSave.identifier = postId.toString('Hex');
      postToSave.save(function(err) {
        if(err) {
          console.error(err.stack);
          res.status(500).send('Problem encoured while saving');
        }
        res.status(200).send();
      });
    }
  });
}