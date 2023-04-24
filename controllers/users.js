const { create } = require('../services/users/create');
const { findByUsername, findAll } = require('../services/users/find');

async function _create(user) {
    return await create(user);
}

async function _findByUsername(username) {
    return await findByUsername(username);
}

async function _findAll() {
    return await findAll();
}

module.exports = {
    _create, _findByUsername, _findAll
}