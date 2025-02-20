const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/add', userController.addUser);
router.get('/get-all', userController.getAllUsers);
router.post('/get-by-scholar-no', userController.getUserByScholarNo);
router.post('/edit', userController.editUser);
router.post('/delete', userController.deleteUser);

module.exports = router;