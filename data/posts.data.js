const BaseData = require('./base/base.data');
const Post = require('../models/post.model');

class PostsData extends BaseData {
  constructor(db) {
    super(db, Post, Post);
  }

  _isModelValid(model) {
    // custom validation
    return super._isModelValid(model);
  }

  searchPosts(text) {
    return this.collection
      .createIndex({'content': 'text'})
      .then(() => {
        return this.collection.find({$text: {$search: text}})
          .toArray();
      })
  }
}

module.exports = PostsData;
