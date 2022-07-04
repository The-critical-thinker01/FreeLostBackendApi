const { models } = require("mongoose");
const Category = require("../database/models/category.model");

//Creer une catégorie
exports.createCategory = async(category) =>{
    try {
        const newCategory = new Category({categoryname: category.categoryname});

        return newCategory.save();
    }catch(e){
    throw e;
   }

}

//Chercher une categorie par son id 
exports.findCategoryPerId=async(categoryId)=>{
 return Category.findById({'_id':categoryId}).exec();
}

//Chercher une catégorie avec son nom
exports.findCategoryPerName = async(name)=>{
    return Category.findOne({'categoryname':name}).exec();
}


//Supprimer une catégorie 
exports.deleteCategory = async(categoryId)=>{

        return Category.deleteOne({'_id':categoryId}).exec();
}

//Modifier une catégorie
exports.editCategory = async(cateId, name) =>{
    return Category.findByIdAndUpdate(cateId, {$set:name}).exec();
}

//afficher toutes les catégories 
exports.findAllCategories = async()=>{
    return Category.find().exec();
}

 