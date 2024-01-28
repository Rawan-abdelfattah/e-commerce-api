const express = require('express');
const router =express.Router()

const {createCategory ,getAllCategories ,getOneCategory ,deleteCategory ,updateCategory} = require('../controller/category.controller');
const { getCategoryValidator , createCategoryValidator,updateCategoryValidator,deleteCategoryValidator } = require('../utils/validator/category.validator');

router.route('/')
        .get(getAllCategories)
        .post(createCategoryValidator,createCategory) 
router.route('/:id')
      .get(getCategoryValidator,getOneCategory)
      .delete(deleteCategoryValidator,deleteCategory)
      .patch(updateCategoryValidator,updateCategory)

module.exports =router;