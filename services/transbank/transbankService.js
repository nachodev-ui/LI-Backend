const axios = require('axios')

const transbankAPIKey = '597055555532'
const transbankAPISecret = '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C'

const transbank = axios.create({
  baseURL: 'https://webpay3gint.transbank.cl',
  timeout: 1000,
  headers: {
    'Tbk-Api-Key-Id': transbankAPIKey,
    'Tbk-Api-Key-Secret': transbankAPISecret,
    'Content-Type': 'application/json',
  },
})

exports.createTransaction = (body) => {
  return transbank.post(
    '/rswebpaytransaction/api/webpay/v1.2/transactions',
    body
  )
}

exports.putTransactionStatus = (token) => {
  return transbank.put(
    `/rswebpaytransaction/api/webpay/v1.2/transactions/${token}`
  )
}

exports.getTransaction = (token) => {
  return transbank.get(
    `/rswebpaytransaction/api/webpay/v1.2/transactions/${token}`
  )
}
