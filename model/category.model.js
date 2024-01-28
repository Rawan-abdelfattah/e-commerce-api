const mongoose = require('mongoose')
const { Schema } = mongoose;


const categorySchema = new Schema({
  name:{
    type: String,
    required: true   ,
    unique:[true , 'Categories must be unique'],
    minlength:[3, 'Categories min length must 3'],
    maxlength:[32, 'Categories max length must 32']
  },
  slug:{
    type:String
  },
  images: {
    type: String
  }
  
},{timestamps: true});

const CategoryModel= mongoose.model('Category', categorySchema)

module.exports=CategoryModel;

 