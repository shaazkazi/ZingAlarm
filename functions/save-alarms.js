exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }
  
  const data = JSON.parse(event.body)
  // Handle alarm data storage here
  
  return {
    statusCode: 200,
    body: JSON.stringify({ status: 'success' })
  }
}
