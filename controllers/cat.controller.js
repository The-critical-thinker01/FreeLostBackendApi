const Category = require("../database/models/category.model");
const {createCategory, deleteCategory,editCategory,findAllCategories,findCategoryPerName,findCategoryPerId} = require("../queries/category.queries");


exports.categoryCreate= async(req, res, next) => {
    const body = req.body;

    try{
        const newCategory = await createCategory(body);
        res.json(newCategory);

    }catch(e){
        res.json({"error" : [e.message]});
        next(e);
    }
}

exports.categoryDelete = async(req,res,next) =>{
    const catId = req.params.catId;
    try{
        const deleteCat = await deleteCategory(catId);
        res.json(deleteCat);
    }catch(e){
        res.json({"error": [e.message]});
        next(e);
    }
    
}


exports.categoryEdit = async(req, res, next)=>{
    const catId = req.params.catId;
    const body = req.body;
    try{
        const editCat = await editCategory(catId,body);
        res.json(editCat);
    }catch(e){
        res.json({"error":[e.message]});
        next(e);
    }
}

exports.categoryFindAll=async(req,res,next) =>{
    try{
        const categories = await findAllCategories();
        res.json(categories);   
     }catch(e){
        res.json({"error" : [e.message]});
        next(e);
     }
    
}

exports.categoryFindByName = async(req,res,next) =>{
    const catName= req.params.catName;
    try{
        const categorie = await findCategoryPerName(catName);
        res.json(categorie);

    }catch(e){
        res.json({"error": [e.message]});
        next(e);
    }
}

exports.categoryFindById = async(req, res, next) =>{
    const catId = req.params.catId; 
    try{
        const categorie = await findCategoryPerId(catId);
        res.json(categorie);
    }catch(e){
        res.json({"error" : [e.message]});
        next(e);
    }
}