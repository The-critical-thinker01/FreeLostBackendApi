const mongoose = require("mongoose");
const schema = mongoose.Schema;

const categorySchema = schema({
    categoryname : {type: String, required:true, unique:true}
});

const Category = mongoose.model("category",categorySchema);

module.exports = Category;