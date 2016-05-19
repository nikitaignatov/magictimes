
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
    remove(id,call) {
      proxy.invoke('remove', id).done((e)=> call(e));
    }
}