interface ImgPlayerOptions {
  srcList: string[]
  autoplay?: boolean
  playbackSpeed?: number
  onPlay?: () => void
  onPause?: () => void
  onStop?: () => void
  onIndexUpdate?: (index: number) => void
}

export function imgPlayer(imgContainer: HTMLElement, options: ImgPlayerOptions) {
  const {
    srcList = [],
    autoplay = false,
    playbackSpeed = 1,
    onPlay = () => {},
    onPause = () => {},
    onStop = () => {},
    onIndexUpdate = () => {},
  } = options

  let index = 0
  let speed = 1000/playbackSpeed
  let currentInterval: number = 0
  const imgList: HTMLImageElement[] = []
  const bufferLimit = 30

  function _init() {
    const img = _loadImage(0)
    imgContainer.replaceChildren(img)
    _loadBuffer()
    if (autoplay) {
      play()
    }
  }

  function _setCurrentIndex(val = 0) {
    if (val >= srcList.length || val < 0) {
      index = 0
    } else {
      index = val
    }
    _loadBuffer()
  }

  function _loadBuffer() {
    const curIndex = index
    const amount = Math.round(bufferLimit * playbackSpeed) < bufferLimit ? bufferLimit : Math.round(bufferLimit * playbackSpeed)
    const toIndex = (curIndex + amount) > srcList.length ? srcList.length : curIndex + amount
    for (let i = curIndex; i < toIndex; i++) {
      _loadImage(i)
    }
  }

  function _loadImage(i: number) {
    if (!imgList[i]) {
      const img = new Image()
      img.src = srcList[i]
      imgList[i] = img
    }
    return imgList[i]
  }

  function _removeInterval() {
    clearInterval(currentInterval)
    currentInterval = 0
  }

  function play() {
    if (!currentInterval) {
      currentInterval = window.setInterval(() => {
        const img = _loadImage(index)
        imgContainer.replaceChildren(img)
        onIndexUpdate(index)
        _setCurrentIndex(index + 1)
      }, speed)
      onPlay()
    }
  }

  function pause() {
    _removeInterval()
    onPause()
  }

  function stop() {
    _removeInterval()
    setIndex(0)
    onStop()
  }

  function getIndex() {
    return index
  }

  function setIndex(val: number) {
    if (typeof val !== 'number') {
      return
    }
    _setCurrentIndex(val)
    const img = _loadImage(index)
    imgContainer.replaceChildren(img)
  }

  function setPlaybackSpeed(val: number) {
    if (typeof val !== 'number') {
      return
    }
    speed = 1000/val
    _removeInterval()
  }

  _init()

  return {
    play,
    pause,
    stop,
    getIndex,
    setIndex,
    setPlaybackSpeed,
  }
}
