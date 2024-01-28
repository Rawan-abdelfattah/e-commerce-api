const mongoose = require('mongoose')

const {Schema} = mongoose 

const subCategorySchem = new Schema({
    name:{
        type:String,
        trim:true,
        unique:[true ,'sub category must be unique'],
        required:true,
        minlength:[3 , 'sub category must be at least 3 characters'],
        maxlength:[32,'sub category must be at most 32 characters']

    },
    slug:{
        type:String,
        lowercase:true,
    },
    image:{
        type:String
    },
    parentCategory:{
        type:mongoose.Schema.ObjectId,
        ref:'Category',
        required:[true , 'Sub Category must be specified to one of super category']
    }

},{timestamps:true})

const SubCategoryModel =mongoose.model('SubCategoryModel' , subCategorySchema)

module.exports = SubCategoryModel