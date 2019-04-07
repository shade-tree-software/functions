
exports.handler = function(event, context, callback) {

  var url = "https://api.netlify.com/api/v1/forms/wonderful-bassi-177437/submissions/?access_token=" + process.env.API_AUTH;

  request(url, function(err, response, body){
    callback(null, {
      statusCode: 200,
      body
    })
  })
}
