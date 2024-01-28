const Category = require('../model/category.model')
const slugify = require('slugify')
const asyncHandler = require('express-async-handler');
const ApiError = require('../utils/apiError');

exports.getAllCategories=asyncHandler (async(req,res) => {
    const page =req.query.page *1 || 1;
    const limit =req.query.limit*1 || 5;
    const skip = (page -1)*limit;
    const categories = await Category.find({}).skip(skip).limit(limit)
    res.status(200).json({result : categories.length , page ,  data : categories})
})

exports.createCategory =asyncHandler (async (req , res , next) =>{
    const name = req.body.name; 
        const category = await Category.create({name , slug:slugify(name)})
        res.status(201).json({data : category})
})

exports.getOneCategory = asyncHandler( async (req, res , next)=>{
    const {id }= req.params
    const category = await Category.findById(id)
    if (!category){
        // res.status(404).json({message : 'Category not found for this id '})
        return next(ApiError(`Category not found for this id : ${id}` ), 404)
    }
    res.status(200).json({data : category})
})

exports.deleteCategory = asyncHandler( async (req, res ,next)=>{
    const {id }= req.params
    const category = await Category.findByIdAndDelete(id)
    if (!category){
        return next(ApiError(`Category not found for this id : ${id}` ), 404)
    }
    res.status(204).json({message : 'Category deleted successfully'})
})

exports.updateCategory = asyncHandler(async (req, res, next) => {
    const {id} = req.params
    const {name} = req.body
    const category = await Category.findOneAndUpdate({_id : id},{name , slug:slugify(name)},{new: true})
    if(!category){
        return next(ApiError(`Category not found for this id : ${id}` ), 404)
    }
    res.status(200).json({message : 'Category updated successfully' , data : category})
})


//promise then catch 
// exports.createCategory = (req , res , next) =>{
//     const name = req.body.name; 
//     Category.create({name , slug:slugify(name)}).then((category)=>{
//         res.status(201).json({data : category})
//     }).catch((error)=>{
//         res.status(400).send({error})
//     })
// }

//async await
// exports.createCategory =async (req , res , next) =>{
//     const name = req.body.name; 
//     try {
//         const category = await Category.create({name , slug:slugify(name)})
//         res.status(201).json({data : category})
//     }catch(error){
//         res.status(400).send({error})
//     }
// }

