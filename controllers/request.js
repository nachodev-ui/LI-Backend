const { create } = require('../services/users/request')

async function _create(maintenance) {
    return await create(maintenance)
}

module.exports = {
    _create,
}