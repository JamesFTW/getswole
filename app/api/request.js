
//havent tested this yet for prod, but this works for testing
require('es6-promise').polyfill()
require('isomorphic-fetch')

const SAME_ORIGIN = 'same-origin'
const CONTENT_TYPE = 'Content-Type'
const POST = 'POST'

const request = ({ endpoint, body, method = POST, headers }) => {
  const newHeaders = new Headers()

  if (headers) {
    newHeaders.append(CONTENT_TYPE, headers)
  }

  return (
    fetch(endpoint, {
      method: method,
      headers: newHeaders,
      credentials: SAME_ORIGIN,
      body: body
    })
  )
}

module.exports = { request }