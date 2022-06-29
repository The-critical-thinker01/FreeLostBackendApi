const Category = require("../database/models/category.model");


exports.createCategory = async(category) =>{
    try {
        const newCategory = new Category({categoryname: category.categoryname});

        return newCategory.save();
    }catch(e){
    throw e;
   }

}
exports.findCategoryPerName = async(name)=>{
    return Category.findOne({'name':name}).exec();
}

