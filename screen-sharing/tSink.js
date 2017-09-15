var sinkSource = null
var _proxySourceForwarder = null
var _mediaSourceForwarder = null
var haveStream = false


function connectCall () {
	return PeerConnecter.clientInCall(client).then(function (connecter) {
		call = connecter.call

		call.on('connectionState', function (connectionState) {
			if (connectionState === 'connected') {
				el.exampleStatus.textContent = 'Sharing enabled'

			} else {
				el.exampleStatus.textContent = ''
				el.tabReceiveButton.disabled = false
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

function handleReceiveTabButtonClick () {
	console.log('tab sharing Received started')
	if (sinkSource) {
		el.tabReceiveButton.textContent = RECEIVE_TAB_SHARING
		sinkWillUnmount()
		sinkSource = null
		call.getRemoteSource('media').disconnect()
		call.hangup()
		return
	}

	el.tabReceiveButton.textContent = STOP_RECEIVE_TAB_SHARING
	el.tabReceiveButton.disabled = false
	connectCall().then(call => {
		sinkWillMount({
			extensionId,
			call
		})
	})
}




function sinkWillMount ({ extensionId, call }) {
	sinkSource = new cct.StreamSource()
	let tabSink = new cct.HtmlSink()
	tabSink.target = el.tabSharingVideo
	el.video.style.display = 'none'

	const onStream = () => {
		let stream1 = _proxySourceForwarder.stream
		let stream2 = _mediaSourceForwarder.stream
		let stream = stream1 || stream2 || null
		el.button.textContent = START_SHARING_TEXT
		el.button.disabled = false
		sinkSource.setStream(stream)
		sinkSource.connect(tabSink)
		haveStream = !!stream
	}

	_proxySource = new cct.ProxySource({
		connectionConfig: {
			iceServers,
			iceCandidateFilter (info) {
				return info.type === 'relay'
			},
		},
	})

	_proxySourceForwarder = new cct.StreamSink({ onStream })
	_proxySource.connect(_proxySourceForwarder)
	call.attach('content-proxy', _proxySource)

	_streamSource = new cct.PeerMediaPipe()
	//if (isChrome) {
	_dummySource = new cct.DummySource({ video: true }) // So that recvonly chrome -> firefox works
	_dummySource.connect(_streamSource)
	//}
	_mediaSourceForwarder = new cct.StreamSink({ onStream })
	_streamSource.connect(_mediaSourceForwarder)
	call.attach('content-stream', _streamSource)

	_remoteVideoSizer = new cct.DataShare()
	_remoteVideoSizer.on('update:size', _onRemoteVideoSize)
	call.attach('content-size', _remoteVideoSizer)

	_scroller = new cct.DataShare()
	call.attach('scroller', _scroller)
	_scroller.set('scroll', { x: 0, y: 0 })

	window.addEventListener('resize', _handleWindowResize)
}

function sinkWillUnmount () {
	el.video.style.display = 'block'
	window.removeEventListener('resize', _handleWindowResize)
	if (_dummySource) {
		_dummySource.disconnect(_streamSource)
		try {
			_dummySource.stop()
		} catch (error) { /* libcct 0.18.7 is a bit broken */ }
		_dummySource = null
	}
	_proxySource.disconnect(_proxySourceForwarder)
	_streamSource.disconnect(_mediaSourceForwarder)
	if (!call.closed) {
		call.detach('scroller', _scroller)
		call.detach('content-proxy', _proxySource)
		call.detach('content-stream', _streamSource)
		call.detach('content-size', _remoteVideoSizer)
	}
	_remoteVideoSizer.off('update:size', _onRemoteVideoSize)
	_remoteVideoSizer = null
	_source = null
	_scroller = null
	_proxySource = null
	_streamSource = null
	_proxySourceForwarder = null
	_mediaSourceForwarder = null
}

function _handleWindowResize () {
}

function _onRemoteVideoSize () {

}