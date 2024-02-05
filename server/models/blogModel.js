const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  blog_text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

BlogSchema.statics.New = async function (user_id, caption, blog_text) {
  console.log(user_id, caption, blog_text);
};

const blog = mongoose.model("blogs", BlogSchema);

module.exports = blog;
