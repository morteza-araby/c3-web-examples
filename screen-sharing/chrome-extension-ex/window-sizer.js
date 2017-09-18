
var loaded

if (!loaded) {
  function makeThrottler(ms, callback) {
    var timeoutId
    return (...args) => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          timeoutId = 0
          callback()
        }, ms)
      }
    }
  }

  let onConnect = port => {
    let onDisconnect = () => {
      window.removeEventListener('resize', onWindowResize)
    }

    let onWindowResize = makeThrottler(40, () => {
      port.postMessage({type: 'size', content: {
        w: window.innerWidth,
        h: window.innerHeight,
      }})
    })
    window.addEventListener('resize', onWindowResize)
    onWindowResize()
  }

  chrome.runtime.onConnect.addListener(onConnect)
}

loaded = true
