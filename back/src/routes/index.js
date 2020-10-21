const router = require('express').Router();

const users = require('./users');
const users_import = require('./users-import');

router.use('/users',users);
router.use('/users-import',users_import);

module.exports = router;