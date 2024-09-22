const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin-controller')
const categoryController = require('../../controllers/category-controller')
const upload = require('../../middleware/multer')

router.get('/restaurants/create', adminController.createRestaurants) // 順序在:id之前，以免被解讀成create
router.get('/restaurants/:id/edit', adminController.editRestaurant) // 嚴格往上放
router.get('/restaurants/:id', adminController.getRestaurant)
router.put('/restaurants/:id', upload.single('image'), adminController.putRestaurant)
router.delete('/restaurants/:id', adminController.deleteRestaurant)
router.get('/restaurants', adminController.getRestaurants)
router.get('/users', adminController.getUsers)
router.get('/categories', categoryController.getCategories)
router.post('/categories', categoryController.postCategories)

router.patch('/users/:id', adminController.patchUser)
router.post('/restaurants', upload.single('image'), adminController.postRestaurant)
router.use('/', (req, res) => res.redirect('/admin/restaurants'))
module.exports = router
