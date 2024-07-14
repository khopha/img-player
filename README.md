# @khopha/img-player

A lightweight JavaScript library that renders image sequences with video-like controls.

[![npm version](https://img.shields.io/npm/v/@khopha/img-player)](https://npmjs.com/package/@khopha/img-player)
[![npm license](https://img.shields.io/npm/l/@khopha/img-player)](https://npmjs.com/package/@khopha/img-player)

## Installation

To install the library, run:

```bash
npm i @khopha/img-player
```

## Usage

Create an imgPlayer object by passing an HTML element and options, then call the play function to start playback. That's it!

```js
import { imgPlayer } from '@khopha/img-player'

const element = document.getElementById('foo')

const images = [
  'path/to/image/1',
  'path/to/image/2',
]

const player = imgPlayer(element, {
  srcList: images
})

player.play()
```

## Options

These are the available options for creating an imgPlayer object:

```js
const player = imgPlayer(element, {

  // List of image sources. Default is an empty array.
  srcList: [],

  // Automatically play the player after creating an object. Default is false.
  autoplay: true,

  // Playback speed of the player. Default is 1.
  playbackSpeed: 1,

  // Event triggered when play is called.
  onPlay: () => {
    console.log('play')
  },

  // Event triggered when pause is called.
  onPause: () => {
    console.log('pause')
  },

  // Event triggered when stop is called.
  onStop: () => {
    console.log('stop')
  },

  // Event triggered when the index is updated, with the index of the image passed as a parameter.
  onIndexUpdate: (index) => {
    console.log(index)
  },
})
```

## Functions

You can call these functions on an imgPlayer object:

```js
// Play
player.play()

// Pause
player.pause()

// Stop
player.stop()

// Get the current image index
player.getIndex()

// Set the current image to a specific index
player.setIndex(index)

// Set playback speed
player.setPlaybackSpeed(1.5)
```

## License

MIT
