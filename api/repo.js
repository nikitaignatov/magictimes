import {serverErrorLog,serverConnectionFailed,serverConnected} from '../actions/server'
import {changeSettingsComplete} from '../actions/settings'
import {deleteSessionComplete} from '../actions/session'
import {registerUser} from '../actions/users'
import swal from 'sweetalert2'

export function startSignlar(store) {
  var connection = $.hubConnection('http://localhost:9000');
  var proxy = connection.createHubProxy('nfcHub');

  proxy.on('dummy', message => store.dispatch({type:'DUMMY',message}));

  connection
    .start({ jsonp: false })
    .done(() => store.dispatch(serverConnected(proxy, connection.id)))
    .fail((e)=> store.dispatch(serverConnectionFailed(e)));

  proxy.on('update', (data)=> store.dispatch({type:'RECIEVE_UPDATE',data}));
  proxy.on('log', (message) => store.dispatch(serverErrorLog(message)));
  proxy.on('changeSettingsComplete', (data) => store.dispatch(changeSettingsComplete(data)));
  proxy.on('register', (data) => store.dispatch(registerUser(data)));
  proxy.on('sessionDeleteComplete', (data) => store.dispatch(deleteSessionComplete(data)));
}

export default {
  register(data,user,call){
    proxy.invoke('register', data, user).done((e)=> call(data,user))
  }
}
