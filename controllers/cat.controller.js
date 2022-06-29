const {createCategory} = require("../queries/category.queries");


exports.categoryCreate= async(req,res, next) => {
    const body = req.body;

    try{
        const newCategory = await createCategory(body);
        res.json(newCategory);

    }catch(e){
        res.json({"error" : [e.message]});
        next(e);
    }
}