var express = require('express');
var router = express.Router();
const siteControllers = require('../app/controllers/SiteControllers');

router.use('/search', siteControllers.search);
router.use('/', siteControllers.home);

module.exports = router;