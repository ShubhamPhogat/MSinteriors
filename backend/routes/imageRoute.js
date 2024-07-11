const express = require('express');
const {
  getAllImages,
  addImage,
  getImageById,
} = require('../controllers/imageControllers');

const router = express.Router();

// Image routes
router.post('/images', addImage);
router.get('/images', getAllImages);
router.get('/images/:id', getImageById);

module.exports = router;
