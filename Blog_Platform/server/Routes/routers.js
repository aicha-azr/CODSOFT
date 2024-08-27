const { Router } = require("express");
const router = Router();
const Controllers = require('../Controllers/UserControllers');
router.post('/api/signup',Controllers.Signup);
router.post('/api/login',Controllers.Login);
module.exports= router;