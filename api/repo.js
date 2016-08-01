import {serverErrorLog,serverConnectionFailed,serverConnected} from '../actions/server'
import {deleteSessionComplete} from '../actions/session'
import swal from 'sweetalert2'

export function startSignlar(store) {
  var connection = $.hubConnection('http://localhost:8085');
  var proxy = connection.createHubProxy('commandHub');

  proxy.on('dummy', message => store.dispatch({type:'DUMMY',message}));

  connection
    .start({ jsonp: false })
    .done(() => store.dispatch(serverConnected(proxy, connection.id)))
    .fail((e)=> store.dispatch(serverConnectionFailed(e)));

  var normalize = (event) => (event && event.data && event.data.length == 1 ? {type:event.type, data:event.data[0]}:{type:'EMPTY_EVENT'})
  proxy.on('event', (data)=> store.dispatch(normalize(data)));
  proxy.on('update', (data)=> store.dispatch({type:'RECIEVE_UPDATE',data}));
  proxy.on('log', (message) => store.dispatch(serverErrorLog(message)));
}

export default {
  register(data,user,call){
    proxy.invoke('register', data, user).done((e)=> call(data,user))
  }
}
