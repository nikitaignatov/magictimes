
var connection = $.hubConnection('http://localhost:9000');
var proxy = connection.createHubProxy('nfcHub');
import {changeSettingsComplete,recieveUpdate,logFromServer,connected,connectionFailed} from '../actions'
import {toastr} from 'react-redux-toastr'


proxy.on('update', function(message) {
    console.log(message);
});
proxy.on('log', function(message) {
    logFromServer(message);
});
proxy.on('changeSettingsComplete', function(data) {
  changeSettingsComplete(data)
});

proxy.on('register', function(data) {
  console.log('who is:', data)
  proxy.invoke('register', data, prompt('Who is this?', '')).done((e)=> console.log('registered',e));
});

connection.start({ jsonp: false })
  .done(function(){ console.log('Now connected, connection ID=' + connection.id); connected()  })
  .fail(function(e){
    console.log('Could not connect',e);
    connectionFailed('Could not connect to server.')
  });

export default {
  recieveUpdate(call) {
    proxy.on('update', function(data) {
      console.log('update',data)
      call(data)
    })
  },
  update(data,call) {
    proxy.invoke('commentOn', data.id, data.message, data.ticket, data.type).done((e)=> call(e));
  },
  submitTime(id,who,call) {
    console.log('submit',id,who)
    proxy.invoke('submitTimeEntry', id,who).done((e)=> call(e));
  },
  remove(id,call) {
    proxy.invoke('remove', id).done((e)=> call(e));
  },
  changeSettings(settings,call) {
    proxy.invoke('changeSettings', settings).done((e)=> console.log('changeSettings done',e));
  }
}
