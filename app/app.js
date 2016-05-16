/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Dashboard = __webpack_require__(2);
	var UserList = __webpack_require__(15);

	var Router = window.ReactRouter.Router;
	var Route = window.ReactRouter.Route;
	var IndexRoute = window.ReactRouter.IndexRoute;
	var Link = window.ReactRouter.Link;
	var hashHistory = window.ReactRouter.hashHistory;

	var ImportUsers = React.createClass({
	    displayName: 'ImportUsers',

	    render: function render() {
	        return React.createElement(
	            'a',
	            { href: '#', onClick: this.importUsers },
	            React.createElement('i', { className: 'fa fa-circle-o text-red' }),
	            ' ',
	            React.createElement(
	                'span',
	                null,
	                'Import users'
	            )
	        );
	    },
	    importUsers: function importUsers() {
	        this.magic.server.importUsers();
	    }
	});

	var App = React.createClass({
	    displayName: 'App',

	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            this.props.children
	        );
	    }
	});

	ReactDOM.render(React.createElement(
	    Router,
	    { history: hashHistory },
	    React.createElement(
	        Route,
	        { path: '/', component: App },
	        React.createElement(IndexRoute, { component: Dashboard }),
	        React.createElement(Route, { path: 'users', component: UserList })
	    ),
	    React.createElement(Route, { path: '/sessions', component: Dashboard }),
	    React.createElement(Route, { path: '/settings', component: Dashboard }),
	    React.createElement(Route, { path: '/notifications', component: Dashboard })
	), document.getElementById('dashboard'));

	// TODO create sidebar component
	ReactDOM.render(React.createElement(ImportUsers, null), document.getElementById('import-users'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var SessionStore = __webpack_require__(3);
	var SessionForm = __webpack_require__(13);

	var PanelHeader = React.createClass({
	    displayName: 'PanelHeader',

	    render: function render() {
	        var data = this.props.session.Value;
	        return React.createElement(
	            'div',
	            { className: 'box-header with-border' },
	            React.createElement(
	                'h3',
	                { className: 'box-title' },
	                React.createElement(
	                    'strong',
	                    null,
	                    data.Name
	                )
	            ),
	            React.createElement(
	                'div',
	                { className: 'box-tools pull-right' },
	                React.createElement('span', { 'data-toggle': 'tooltip', title: '3 New Messages', className: 'badge bg-green' }),
	                React.createElement(
	                    'button',
	                    { type: 'button', className: 'btn btn-box-tool', 'data-widget': 'collapse' },
	                    React.createElement('i', { className: 'fa fa-minus' })
	                ),
	                React.createElement(
	                    'button',
	                    { type: 'button', className: 'btn btn-box-tool remove-session', 'data-widget': 'remove', onClick: this.deleteSession },
	                    React.createElement('i', { className: 'fa fa-times' })
	                )
	            )
	        );
	    },
	    deleteSession: function deleteSession(e) {
	        this.props.deleteSession(this.props.session.Key);
	    }
	});

	var SessionPanelList = React.createClass({
	    displayName: 'SessionPanelList',

	    render: function render() {
	        var magic = this.props.magic;
	        var sessions = this.props.data.map(function (session) {
	            return React.createElement(SessionPanel, { session: session, key: session.Key, magic: magic });
	        });
	        return React.createElement(
	            'div',
	            { className: 'col-xs-12' },
	            sessions
	        );
	    }
	});

	var SessionDetails = React.createClass({
	    displayName: 'SessionDetails',

	    render: function render() {
	        var data = this.props.session.Value;
	        data.Start = moment(data.Transaction.Started, moment.ISO_8601).fromNow();
	        data.End = moment(data.Transaction.Ended, moment.ISO_8601).fromNow();
	        data.Duration = moment.duration(data.Transaction.Duration).humanize();
	        return React.createElement(
	            'table',
	            { className: 'table text-muted table-striped table-hover' },
	            React.createElement(
	                'tbody',
	                null,
	                React.createElement(
	                    'tr',
	                    null,
	                    React.createElement(
	                        'td',
	                        null,
	                        'Duration'
	                    ),
	                    React.createElement(
	                        'th',
	                        null,
	                        data.Duration
	                    )
	                ),
	                React.createElement(
	                    'tr',
	                    null,
	                    React.createElement(
	                        'td',
	                        null,
	                        'Started'
	                    ),
	                    React.createElement(
	                        'td',
	                        null,
	                        data.Start
	                    )
	                ),
	                React.createElement(
	                    'tr',
	                    null,
	                    React.createElement(
	                        'td',
	                        null,
	                        'Ended'
	                    ),
	                    React.createElement(
	                        'td',
	                        null,
	                        data.End
	                    )
	                ),
	                React.createElement(
	                    'tr',
	                    null,
	                    React.createElement(
	                        'td',
	                        null,
	                        'Ticket'
	                    ),
	                    React.createElement(
	                        'td',
	                        null,
	                        data.Ticket
	                    )
	                ),
	                React.createElement(
	                    'tr',
	                    null,
	                    React.createElement(
	                        'td',
	                        null,
	                        'TimeEntryId'
	                    ),
	                    React.createElement(
	                        'td',
	                        null,
	                        data.TimeEntryId
	                    )
	                ),
	                React.createElement(
	                    'tr',
	                    null,
	                    React.createElement(
	                        'td',
	                        null,
	                        'Tx'
	                    ),
	                    React.createElement(
	                        'td',
	                        null,
	                        data.Transaction.TransactionId
	                    )
	                )
	            )
	        );
	    }
	});

	var SessionPanel = React.createClass({
	    displayName: 'SessionPanel',

	    render: function render() {
	        var session = this.props.session;
	        return React.createElement(
	            'div',
	            { className: 'box box-info' },
	            React.createElement(PanelHeader, { session: session, deleteSession: this.props.magic.server.remove }),
	            React.createElement(
	                'div',
	                { className: 'box-body' },
	                React.createElement(
	                    'h3',
	                    null,
	                    ' ',
	                    this.props.session.Value.Message
	                )
	            ),
	            React.createElement(SessionForm, { session: this.props.session, commentOn: this.props.magic.server.commentOn }),
	            React.createElement(SessionDetails, { session: this.props.session })
	        );
	    }
	});

	var Sessions = React.createClass({
	    displayName: 'Sessions',

	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(SessionPanelList, { data: this.props.data, magic: this.props.magic })
	        );
	    }
	});

	function geState() {
	    return {
	        data: SessionStore.getAll(),
	        magic: SessionStore.getHub()
	    };
	}

	var Dashboard = React.createClass({
	    displayName: 'Dashboard',

	    getInitialState: function getInitialState() {
	        return geState();
	    },
	    onChange: function onChange() {
	        this.setState(geState());
	    },
	    componentDidMount: function componentDidMount() {
	        SessionStore.addChangeListener(this.onChange);
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        SessionStore.removeChangeListener(this.onChange);
	    },
	    render: function render() {
	        console.log('dash', this.state);
	        return React.createElement(
	            'div',
	            { className: 'row' },
	            React.createElement(
	                'div',
	                { className: 'col-lg-4 col-sm-12' },
	                React.createElement(
	                    'div',
	                    null,
	                    React.createElement(
	                        'h3',
	                        null,
	                        'Not processed sessions'
	                    )
	                ),
	                React.createElement(
	                    'section',
	                    { className: 'row', id: 'missing-message' },
	                    React.createElement(Sessions, { data: this.state.data.new_sessions, magic: this.state.magic })
	                )
	            ),
	            React.createElement(
	                'div',
	                { className: 'col-lg-4 col-sm-12' },
	                React.createElement(
	                    'div',
	                    null,
	                    React.createElement(
	                        'h3',
	                        null,
	                        'Ready to be submitted'
	                    )
	                ),
	                React.createElement(
	                    'section',
	                    { className: 'row', id: 'missing-ticket' },
	                    React.createElement(Sessions, { data: this.state.data.ready_to_submit, magic: this.state.magic })
	                )
	            ),
	            React.createElement(
	                'div',
	                { className: 'col-lg-4 col-sm-12' },
	                React.createElement(
	                    'div',
	                    null,
	                    React.createElement(
	                        'h3',
	                        null,
	                        'Submitted'
	                    )
	                ),
	                React.createElement(
	                    'section',
	                    { clasName: 'row', id: 'complete' },
	                    React.createElement(Sessions, { data: this.state.data.complete, magic: this.state.magic })
	                )
	            ),
	            React.createElement('div', null)
	        );
	    }
	});

	module.exports = Dashboard;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Dispatcher = __webpack_require__(4);
	var EventEmitter = __webpack_require__(9).EventEmitter;
	var SessionConstants = __webpack_require__(10);
	var assign = __webpack_require__(12);

	var CHANGE_EVENT = 'change';

	var _sessions = { new_sessions: [], ready_to_submit: [], complete: [], users: [] };
	var _hub = {};

	function update(id, message, ticket, state) {
	    console.log('update', message, ticket, state);
	    _hub.server.commentOn(id, message, ticket, state);
	}

	function submitEntry(id) {
	    console.log('submitTimeEntry', id);
	    _hub.server.submitTimeEntry(id);
	    SessionStore.emitChange();
	}

	function reload(data) {
	    console.log("reload session", data);
	    _sessions = data;
	    SessionStore.emitChange();
	}

	$(function () {
	    var _hub = $.connection.nfcHub;
	    _hub.client.update = reload;
	});

	var SessionStore = assign({}, EventEmitter.prototype, {

	    getAll: function getAll() {
	        return _sessions;
	    },
	    getHub: function getHub() {
	        return _hub;
	    },

	    emitChange: function emitChange() {
	        this.emit(CHANGE_EVENT);
	    },

	    addChangeListener: function addChangeListener(callback) {
	        this.on(CHANGE_EVENT, callback);
	    },

	    removeChangeListener: function removeChangeListener(callback) {
	        this.removeListener(CHANGE_EVENT, callback);
	    }
	});

	Dispatcher.register(function (action) {

	    switch (action.actionType) {
	        case SessionConstants.SESSION_UPDATE:
	            update(action.id, action.text, action.ticket, action.status);
	            SessionStore.emitChange();
	            break;

	        case SessionConstants.SESSION_SUBMIT:
	            submitEntry(action.id);
	            SessionStore.emitChange();
	            break;

	        default:
	        // no op
	    }
	});

	module.exports = SessionStore;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Dispatcher = __webpack_require__(5).Dispatcher;

	module.exports = new Dispatcher();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	module.exports.Dispatcher = __webpack_require__(6);


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 * 
	 * @preventMunge
	 */

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var invariant = __webpack_require__(8);

	var _prefix = 'ID_';

	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *         case 'city-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */

	var Dispatcher = (function () {
	  function Dispatcher() {
	    _classCallCheck(this, Dispatcher);

	    this._callbacks = {};
	    this._isDispatching = false;
	    this._isHandled = {};
	    this._isPending = {};
	    this._lastID = 1;
	  }

	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   */

	  Dispatcher.prototype.register = function register(callback) {
	    var id = _prefix + this._lastID++;
	    this._callbacks[id] = callback;
	    return id;
	  };

	  /**
	   * Removes a callback based on its token.
	   */

	  Dispatcher.prototype.unregister = function unregister(id) {
	    !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	    delete this._callbacks[id];
	  };

	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   */

	  Dispatcher.prototype.waitFor = function waitFor(ids) {
	    !this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this._isPending[id]) {
	        !this._isHandled[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
	        continue;
	      }
	      !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	      this._invokeCallback(id);
	    }
	  };

	  /**
	   * Dispatches a payload to all registered callbacks.
	   */

	  Dispatcher.prototype.dispatch = function dispatch(payload) {
	    !!this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
	    this._startDispatching(payload);
	    try {
	      for (var id in this._callbacks) {
	        if (this._isPending[id]) {
	          continue;
	        }
	        this._invokeCallback(id);
	      }
	    } finally {
	      this._stopDispatching();
	    }
	  };

	  /**
	   * Is this Dispatcher currently dispatching.
	   */

	  Dispatcher.prototype.isDispatching = function isDispatching() {
	    return this._isDispatching;
	  };

	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
	    this._isPending[id] = true;
	    this._callbacks[id](this._pendingPayload);
	    this._isHandled[id] = true;
	  };

	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
	    for (var id in this._callbacks) {
	      this._isPending[id] = false;
	      this._isHandled[id] = false;
	    }
	    this._pendingPayload = payload;
	    this._isDispatching = true;
	  };

	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
	    delete this._pendingPayload;
	    this._isDispatching = false;
	  };

	  return Dispatcher;
	})();

	module.exports = Dispatcher;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 7 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	"use strict";

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function (condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 9 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var keyMirror = __webpack_require__(11);

	module.exports = keyMirror({
	    SESSIONS_UPDATED: null,
	    SESSION_START: null,
	    SESSION_END: null,
	    SESSION_UPDATE: null,
	    SESSION_SUBMIT: null
	});

/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 */

	"use strict";

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function(obj) {
	  var ret = {};
	  var key;
	  if (!(obj instanceof Object && !Array.isArray(obj))) {
	    throw new Error('keyMirror(...): Argument must be an object.');
	  }
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;


/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var SessionActions = __webpack_require__(14);

	var SessionForm = React.createClass({
	    displayName: 'SessionForm',

	    render: function render() {
	        var items = [];
	        var session = this.props.session.Value;
	        if (session.IsMissingTicket) {
	            items.push(React.createElement(
	                'div',
	                { className: 'form-group', key: 'ticket' },
	                React.createElement('input', { type: 'number', ref: 'ticket', className: 'form-control', placeholder: 'Tickt id' })
	            ));
	        } else {
	            items.push(React.createElement('input', { type: 'hidden', ref: 'ticket', value: session.Ticket, key: 'ticket' }));
	        }
	        if (session.IsMissingMessage) {
	            items.push(React.createElement(
	                'div',
	                { className: 'form-group', key: 'message' },
	                React.createElement('textarea', { type: 'text', ref: 'message', className: 'form-control', placeholder: 'Message..' })
	            ));
	        } else {
	            items.push(React.createElement('input', { type: 'hidden', ref: 'message', value: session.Message, key: 'message' }));
	        }
	        if (!session.IsValid) {
	            items.push(React.createElement(
	                'div',
	                { className: 'box-footer', key: 'submit-button' },
	                React.createElement(
	                    'div',
	                    { className: 'text-right' },
	                    React.createElement(
	                        'button',
	                        { type: 'button', className: 'btn btn-flat', onClick: this.onSubmit },
	                        'Save'
	                    )
	                )
	            ));
	        } else if (!session.IsSubmitted) {

	            items.push(React.createElement(
	                'div',
	                { className: 'box-footer', key: 'submit-button' },
	                React.createElement(
	                    'div',
	                    { className: 'text-right' },
	                    React.createElement(
	                        'button',
	                        { type: 'submit', className: 'btn btn-info btn-flat', onClick: this.onSubmitEntry },
	                        'Submit'
	                    )
	                )
	            ));
	        }
	        return React.createElement(
	            'div',
	            { className: 'box-body' },
	            React.createElement(
	                'form',
	                { onSubmit: this.onSubmit },
	                items
	            )
	        );
	    },
	    onSubmit: function onSubmit(e) {
	        e.preventDefault();
	        var session = this.props.session;
	        var ticket = this.refs.ticket.value.trim();
	        var message = this.refs.message.value.trim();

	        SessionActions.update(session.Value.Transaction.TransactionId, message, ticket, 1);
	    },
	    onSubmitEntry: function onSubmitEntry(e) {
	        e.preventDefault();
	        var session = this.props.session;
	        SessionActions.submitEntry(session.Key);
	    }
	});

	module.exports = SessionForm;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var AppDispatcher = __webpack_require__(4);
	var SessionConstants = __webpack_require__(10);

	var SessionActions = {
	    update: function update(id, text, ticket, status) {
	        AppDispatcher.dispatch({
	            actionType: SessionConstants.SESSION_UPDATE,
	            id: id,
	            text: text,
	            ticket: ticket,
	            status: status
	        });
	    },
	    submitEntry: function submitEntry(id) {
	        AppDispatcher.dispatch({
	            actionType: SessionConstants.SESSION_SUBMIT,
	            id: id
	        });
	    }
	};

	module.exports = SessionActions;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var UserStore = __webpack_require__(17);
	var User = __webpack_require__(16);

	function geState() {
	    return {
	        data: UserStore.getAll()
	    };
	}

	var UserList = React.createClass({
	    displayName: 'UserList',

	    getInitialState: function getInitialState() {
	        console.log('init');
	        return geState();
	    },
	    onChange: function onChange() {
	        console.log('change');
	        this.setState(geState());
	    },
	    componentDidMount: function componentDidMount() {
	        UserStore.addChangeListener(this.onChange);
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        UserStore.removeChangeListener(this.onChange);
	    },
	    render: function render() {
	        console.log('users');

	        var users = this.state.data.users.map(function (user) {
	            return React.createElement(User, { user: user, key: user.Username });
	        });
	        console.log('users 2');

	        return React.createElement(
	            'div',
	            { className: 'col-xs-12' },
	            users
	        );
	    }
	});

	module.exports = UserList;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);

	var User = React.createClass({
	    displayName: "User",

	    render: function render() {
	        var data = this.props.user;
	        return React.createElement(
	            "div",
	            { className: "box box-info" },
	            React.createElement(
	                "div",
	                { className: "box-body" },
	                React.createElement(
	                    "h3",
	                    null,
	                    " ",
	                    data.Name
	                )
	            )
	        );
	    }
	});

	module.exports = User;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Dispatcher = __webpack_require__(4);
	var EventEmitter = __webpack_require__(9).EventEmitter;
	var UserConstants = __webpack_require__(18);
	var assign = __webpack_require__(12);

	var CHANGE_EVENT = 'change';

	var _users = { users: [] };
	function assignCard(id, user) {
	    console.log('assign card', id, user);
	    //_hub.server.assignCard(id, user)
	    UserStore.emitChange();
	}
	function reload(data) {
	    console.log('reload user', data.users);
	    _users.users = data.users;
	    UserStore.emitChange();
	}

	$(function () {
	    var _hub = $.connection.nfcHub;
	    _hub.client.update = reload;
	});

	var UserStore = assign({}, EventEmitter.prototype, {

	    getAll: function getAll() {
	        console.log('get all', _users);
	        return _users;
	    },

	    emitChange: function emitChange() {
	        this.emit(CHANGE_EVENT);
	    },

	    addChangeListener: function addChangeListener(callback) {
	        this.on(CHANGE_EVENT, callback);
	    },

	    removeChangeListener: function removeChangeListener(callback) {
	        this.removeListener(CHANGE_EVENT, callback);
	    }
	});

	Dispatcher.register(function (action) {

	    switch (action.actionType) {
	        case UserConstants.USER_ASSIGN_CARD:
	            assignCard(action.id, action.user);
	            UserStore.emitChange();
	            break;

	        default:
	        // no op
	    }
	});

	module.exports = UserStore;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var keyMirror = __webpack_require__(11);

	module.exports = keyMirror({
	    USER_IMPORT: null,
	    USER_UPDATE: null,
	    USER_ASSIGN_CARD: null,
	    USER_REMOVE_CARD: null
	});

/***/ }
/******/ ]);