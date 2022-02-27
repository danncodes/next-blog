import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema({
  username: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  image: { type: String },
  tags: { type: Array },
},
  {timestamps: true}
)

module.exports = mongoose.models.Blog || mongoose.model('Blog', BlogSchema)