var call = null
var tabSource = null
var _scroller = null
var _contentSize = null
var port = null
//var extensionId = 'cecejnhbkmfgeealnbgbmgfcpdllgaao' // Spaces Tab Sharing
//var extensionId = extensionId // My test extension 
let pageActionConditions = [{
	pageUrl: { hostEquals: '*', schemes: ['https'] },
}]

var client = new cct.Client()
let sender = false;
let receiver = false;

function connectCall () {
	return PeerConnecter.clientInCall(client).then(function (connecter) {
		call = connecter.call

		call.on('connectionState', function (connectionState) {
			if (connectionState === 'connected') {
				el.exampleStatus.textContent = 'Sharing enabled'

			} else {
				el.exampleStatus.textContent = ''
			}
		})

		//call.attach('data', data)
		window.call = call;
		console.log('### Call is : ', call)
		return call

	}).catch(function (error) {
		cct.log.error('example', '' + error)
		console.log('Error: ', error)
	})
}


function getExtensionVersion () {
	return new Promise((resolve, reject) => {
		console.log('sending version query to extension')
		sendChromeMessage({ type: 'version' }).then(message => {
			let version = message && message.version
			if (version) {
				resolve(version)
			} else {
				let error = new Error(`Extension '${extensionId}' is not installed`)
				error.name = 'ExtensionNotInstalledError'
				reject(error)
			}
		})
	})
}

function uninstallExtension () {
	return new Promise((resolve, reject) => {
		console.log('sending version query to extension')
		sendChromeMessage({ message: 'uninstall' }).then(message => {
			if (message) {
				resolve(messge)
			} else {
				let error = new Error(`Extension '${extensionId}' is not installed`)
				error.name = 'ExtensionNotInstalledError'
				reject(error)
			}
		})
	})
}


function handleTabButtonClick () {
	// getExtensionVersion().then(version => {
	// 	console.log('### version is: ', version)
	// })
	// uninstallExtension().then(result => {
	// 	console.log('#### result: ', result)
	// }).catch(error => {
	// 	console.log('### unsinstalled ')
	// })
	// return

	console.log('tab sharing started')
	if (call) {
		stopTabSharing()
		call.hangup()
		call = null
		el.tabButton.textContent = START_TAB_SHARING
		return
	}
	el.tabButton.disabled = true
	connectCall().then(call => {

		if (!call.closed) {
			_scroller = new cct.DataShare()
			call.attach('scroller', _scroller)
			//_scroller.on('update:scroll', _onRemoteScroll)

			_contentSize = new cct.DataShare()
			call.attach('content-size', _contentSize)

			// chrome extension passes window size from content script
			// if (!window.chrome) {
			//   this._stopWindowSizeObserver = startWindowSizeObserver(this._contentSize)
			// }
		}


		startTabSharing({
			extensionId,
			call
		})
	})
}

function startTabSharing ({ extensionId, call }) {
	el.video.style.display = 'none'
	el.tabButton.textContent = STOP_TAB_SHARING
	el.tabButton.disabled = false

	return getExtensionVersion().then(() => {
		console.log('#### Extension OK')
		let options = {
			showOwnTabAction: true,//!!this.props.showOwnTabAction,
			pageActionConditions: pageActionConditions,
		}

		port = window.chrome.runtime.connect(extensionId, {
			name: `options:${JSON.stringify(options)}`
		})

		let proxySink = new cct.ProxySink()

		port.onMessage.addListener((msg) => {
			console.debug('TabSharing', 'proxy message:', msg)
			if (msg.type === 'haveStream') {
				port.postMessage({
					type: 'startCall',
					content: iceServers,
				})
			} else if (msg.type === 'offer') {
				proxySink.setOffer(msg.content)
			} else if (msg.type === 'candidate') {
				proxySink.addCandidate(msg.content)
			} else if (msg.type === 'lostStream') {
				proxySink.setOffer(null)
				//setState({state: 'ready'})
				console.info('TabSharing', ' lostStream')
			} else if (msg.type === 'size') {
				if (_contentSize) {
					_contentSize.set('size', msg.content)
				}
			}
		})

		proxySink.on('candidate', (candidate) => {
			console.debug('TabSharing', 'proxy candidate:', candidate)
			port.postMessage({
				type: 'candidate',
				content: candidate,
			})
		})

		proxySink.on('answer', (answer) => {
			console.debug('TabSharing', 'proxy answer:', answer)
			port.postMessage({
				type: 'answer',
				content: answer,
			})
			// props.onStartSharing && props.onStartSharing()
			// setState({state: 'sharing'})			
		})

		proxySink.on('connected', () => {
			port.postMessage({
				type: 'startCall',
				content: iceServers,
			})
			console.info('TabSharing', 'startCall')
		})

		port.onDisconnect.addListener(() => {
			console.error('TabSharing', 'port disconnected')
			port = null
		})

		call.attach('content-proxy', proxySink)
		console.log('################### CONNECT TO CALL')


	}).catch(error => {
		if (error.name === 'ExtensionNotInstalledError') {
			el.error.textContent = 'No Extenstion detected'
		} else {
			el.error.textContent = 'chrome screen sharing failed:' + JSON.stringify(error)
		}
	})
}

function stopTabSharing () {
	if (!call.closed) {
		if (call.attachments['content-proxy']) {
			call.detach('content-proxy')
		}
		if (call.attachments['content-stream']) {
			call.detach('content-stream')
		}
		if (_contentSize) {
			call.detach('content-size', _contentSize)
		}
		if (_scroller) {
			call.detach('scroller', _scroller)
		}
	}
	// if (_scroller) {
	// 	_scroller.off('update:scroll', _onRemoteScroll)
	// }
	// if (_stopWindowSizeObserver) {
	// 	_stopWindowSizeObserver()
	// 	_stopWindowSizeObserver = null
	// }
	try {
		console.debug('Example', 'ending screen sharing')
		if (window.chrome) {
			if (port) {
				port.postMessage({
					type: 'endCall',
				})
				port.disconnect()
			}
			port = null
		} else {
			source.stop()
			_source = null
		}
	} catch (error) {
		console.error('Example', 'failed to disconnect screen sharing extension port:', error)
	}
}


/** This part is for screen sharing */
function startTabSharingXX (constraints) {
	let tabSink = new cct.HtmlSink()
	tabSink.target = el.tabSharingVideo

	el.tabButton.textContent = STOP_TAB_SHARING
	el.tabButton.disabled = false
	el.error.textContent = ''
	el.video.style.display = 'none'

	fetchChromeScreenSource()
		.then(source => {
			tabSource = source
			source.connect(new cct.StreamSink({
				onStream: stream => {
					if (!stream) { // Stream was removed
						onStopSharing()
						el.tabButton.textContent = 'Start Tab Sharing'
					}
					source.connect(tabSink)
					console.info('example', 'screen sharing started successfully')
				},
			}))
		}).catch(error => {
			if (error.name === 'NotFoundError') {
				console.error('Not found extension:', error)
			} else {
				console.error('Failed to do tab sharing: ', error)
			}
		})
}
function onStopSharing () {
	//call.setLocalSource('content', null)
	if (tabSource) {
		tabSource.stop()
		tabSource = null
	}
}

function fetchChromeScreenSource () {
	return sendChromeMessage({
		type: 'requestMediaSourceId',
		sourceTypes: ['window'],
	}).then(({ sourceId }) => {
		let source = new cct.DeviceSource({
			video: {
				chromeMediaSourceId: { exact: sourceId },
				chromeMediaSource: { exact: 'desktop' },
				width: { max: window.screen.width },
				height: { max: window.screen.height },
				frameRate: 5,
			},
		})
		return source.promise.then(() => source)
	})
}


function sendChromeMessage (message) {
	//let extensionId = 'cecejnhbkmfgeealnbgbmgfcpdllgaao' // Spaces Tab Sharing
	//let extensionId = extensionId // My test extension
	return new Promise((resolve, reject) => {
		chrome.runtime.sendMessage(extensionId, message, response => {
			if (response) {
				resolve(response)
			} else {
				let error = new Error('No response received')
				error.name = 'NotFoundError'
				reject(error)
			}
		})
	})
}
