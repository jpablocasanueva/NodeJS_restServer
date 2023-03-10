const { Router }  = require('express');
const { usersGet,
        usersPost,
        usersPut,
        usersDelete,
        usersPatch } = require('../controllers/users.controller');

const router = Router();

router.get('/', usersGet);

router.put('/:id', usersPut);

router.post('/', usersPost);

router.patch('/', usersPatch)

router.delete('/', usersDelete);

module.exports = router;