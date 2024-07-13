# @khopha/img-player

A lightweight JavaScript library that renders image sequences with video-like controls.

[![npm version](https://img.shields.io/npm/v/@khopha/img-player)](https://npmjs.com/package/@khopha/img-player)
[![npm license](https://img.shields.io/npm/l/@khopha/img-player)](https://npmjs.com/package/@khopha/img-player)

## Installation

```bash
npm i @khopha/img-player
```

## Usage

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

## License

MIT
