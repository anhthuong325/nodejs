const express = require('express');
const {getHomepage, getHTMLPage} = require('../controllers/homeController');
const router = express.Router();
// --------------------------------------------------------------- //

router.get('/', getHomepage);
router.get('/lat', getHTMLPage);

// --------------------------------------------------------------- //
module.exports = router;