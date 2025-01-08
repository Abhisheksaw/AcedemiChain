const express = require('express');
const router = express.Router();
const {registerUser,loginUser} = require("../controllers/userControllers")
const path = require('path');
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'login.html'));
  });
  router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'login.html'));
  });
  
module.exports = router;