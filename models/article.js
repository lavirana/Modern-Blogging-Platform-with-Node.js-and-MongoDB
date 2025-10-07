const {Schema, model} = require('mongoose');
const { schema } = require('./user');

const blogSchema = new Schema({
title:{
type:String,
require: true,
},
body: {
    type: String,
    required: true
},
coverImageURL: {
    type: String,
    required: true,
},
createBy: {
    type: schema.Types.ObjectId,
    ref: 'user',
}
}, {timestamps: true});


const Blog = model('user',userSchema);

module.exports = Blog;