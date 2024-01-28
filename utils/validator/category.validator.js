const { check } = require('express-validator');
const validatorMiddleware = require('../../middleware/validator.middleware');

exports.getCategoryValidator =[
    check('id').isMongoId().withMessage('invalid id format'),
    validatorMiddleware
];

exports.updateCategoryValidator = [
    check('id').isMongoId().withMessage('invalid id format'),
    validatorMiddleware
];

exports.deleteCategoryValidator = [
    check('id').isMongoId().withMessage('invalid id format'),
    validatorMiddleware
];

exports.createCategoryValidator =[
    check('name').notEmpty().withMessage('name must not be empty')
    .isLength({min:3}).withMessage("Categories min length must 3")
    .isLength({max:32}).withMessage('Categories max length must 32'),
    validatorMiddleware

];