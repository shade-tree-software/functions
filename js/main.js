$.get('.netlify/functions/messages',function(data){
  let messages = JSON.parse(data).sort((a, b) => (a.number - b.number))
  for (let message of messages) {
    $('#messages').append(`<p>${message.data.who}: ${message.data.message}</p>`)
  }
})
