
var connection = $.hubConnection('http://localhost:9000');
var proxy = connection.createHubProxy('nfcHub');

proxy.on('update', function(message) {
    console.log(message);
});

connection.start({ jsonp: false })
  .done(function(){ console.log('Now connected, connection ID=' + connection.id); })
  .fail(function(e){ console.log('Could not connect',e); });

export default {
  getSessions(call) {
    proxy.on('update', function(data) {
      console.log('update',data)
      call(data)
    })
  },
  update(data,call) {
    proxy.invoke('commentOn', data.id, data.message, data.ticket, data.type).done((e)=> call(e));
  },
  submitTime(id,call) {
    console.log('submit',id)
    proxy.invoke('submitTimeEntry', id).done((e)=> call(e));
  },
  remove(id,call) {
    proxy.invoke('remove', id).done((e)=> call(e));
  }
}
