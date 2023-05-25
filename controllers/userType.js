const { createType } = require('../services/type_user/createType')

async function _createType(type) {
    return await createType(type)
}

module.exports = {
    _createType
}