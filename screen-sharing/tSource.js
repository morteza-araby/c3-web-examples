var call = null
var tabSource = null
var _scroller = null
var _contentSize = null
var port = null
var tabSharingExtensionLink = null
var _stopWindowSizeObserver = null
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
		}).catch(error => {
			reject(error)
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

function startWindowSizeObserver(contentSize) {
  let onWindowResize = makeThrottler(40, () => {
    contentSize.set('size', {
      w: window.innerWidth,
      h: window.innerHeight,
    })
  })
  let stop = () => {
    window.removeEventListener('resize', onWindowResize)
  }
  window.addEventListener('resize', onWindowResize)
  onWindowResize()
  return stop
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
			_scroller.on('update:scroll', _onRemoteScroll)

			_contentSize = new cct.DataShare()
			call.attach('content-size', _contentSize)

			// chrome extension passes window size from content script
			  if (!window.chrome) {
			    _stopWindowSizeObserver = startWindowSizeObserver(this._contentSize)
			 }
		}


		startTabSharing({
			extensionId,
			call
		})
	})
}

function startTabSharing ({ extensionId, call }) {	
	el.tabButton.textContent = STOP_TAB_SHARING
	el.tabButton.disabled = false
	el.tabReceiveButton.disabled = true

	return getExtensionVersion().then(() => {
		console.log('#### Extension OK')
		let options = {
			showOwnTabAction: true,//!!this.props.showOwnTabAction,
			pageActionConditions: pageActionConditions,
		}


		tabSharingExtensionLink = new cct.TabSharingExtensionLink({extensionId, options, iceServers})
		tabSharingExtensionLink.startShare()
		tabSharingExtensionLink.on('contentSize', function(size){
			if(_contentSize){
				_contentSize.set('size',size)
			}
		})


		call.attach('content-proxy', tabSharingExtensionLink)
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
	if (_scroller) {
		_scroller.off('update:scroll', _onRemoteScroll)
	}
	if (_stopWindowSizeObserver) {
		_stopWindowSizeObserver()
		_stopWindowSizeObserver = null
	}
	try {
		console.debug('Example', 'ending screen sharing')
		if (window.chrome) {
			tabSharingExtensionLink.endShare()
		} 
		el.tabReceiveButton.disabled = false
	} catch (error) {
		console.error('Example', 'failed to disconnect screen sharing extension port:', error)
	}
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
				error.name = 'ExtensionNotInstalledError'
				reject(error)
			}
		})
	})
}

function _onRemoteScroll(value) {
	let {x, y} = value
	// Some extra input validation since it's a sensitive area
	x = Number(x)
	y = Number(y)
	let msg = {
		type: 'scrollBy',
		content: {x, y},
	}

	//Send to extension to handle
	tabSharingExtensionLink.sendMessage(msg)
	
}
