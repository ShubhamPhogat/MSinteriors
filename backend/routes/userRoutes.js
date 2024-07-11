const express = require('express');
const { registerUser, loginUser } = require('../controllers/userControllers');
const { getAllUsers, deleteUser } = require('../controllers/adminControllers');
const {
  getAllImages,
  addImage,
  getImageById,
} = require('../controllers/imageControllers');

const router = express.Router();

// user
router.post('/register', registerUser);
router.post('/login', loginUser);

// admin
router.get('/user', getAllUsers);
router.delete('/user-delete', deleteUser);

// Image routes
router.post('/images', addImage);
router.get('/images', getAllImages);
router.get('/images/:id', getImageById);

module.exports = router;
