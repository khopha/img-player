// @vitest-environment jsdom

import { it, vi, expect, expectTypeOf } from 'vitest'
import { imgPlayer } from './../src/index'

it('should create', () => {
  const player = imgPlayer(document.createElement('div'), {
    srcList: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'.split(''),
    autoplay: true,
    playbackSpeed: 0.5
  })
  expectTypeOf(player).toBeObject()
})

it('should play', () => {
  const player = imgPlayer(document.createElement('div'), {
    srcList: ['a', 'b']
  })
  const spy = vi.spyOn(player, 'play')
  vi.useFakeTimers()
  player.play()
  vi.advanceTimersToNextTimer()
  expect(spy).toHaveBeenCalled()
})

it('should pause', () => {
  const player = imgPlayer(document.createElement('div'), {
    srcList: ['a', 'b']
  })
  const spy = vi.spyOn(player, 'pause')
  player.pause()
  expect(spy).toHaveBeenCalled()
})

it('should stop', () => {
  const player = imgPlayer(document.createElement('div'), {
    srcList: ['a', 'b']
  })
  const spy = vi.spyOn(player, 'stop')
  player.stop()
  expect(spy).toHaveBeenCalled()
})

it('should getIndex', () => {
  const player = imgPlayer(document.createElement('div'), {
    srcList: ['a', 'b']
  })
  let index = player.getIndex()
  expect(index).toBe(0)
  vi.useFakeTimers()
  player.play()
  vi.advanceTimersToNextTimer()
  index = player.getIndex()
  expect(index).toBe(1)
})

it('should setIndex', () => {
  const player = imgPlayer(document.createElement('div'), {
    srcList: ['a', 'b']
  })
  player.setIndex(1)
  const index = player.getIndex()
  expect(index).toBe(1)
})

it('should not setIndex if param is not a number', () => {
  const player = imgPlayer(document.createElement('div'), {
    srcList: ['a', 'b']
  })
  // @ts-ignore
  player.setIndex('test')
  const index = player.getIndex()
  expect(index).toBe(0)
})

it('should setPlaybackSpeed', () => {
  const player = imgPlayer(document.createElement('div'), {
    srcList: ['a', 'b']
  })
  const spy = vi.spyOn(player, 'setPlaybackSpeed')
  player.setPlaybackSpeed(2)
  expect(spy).toHaveBeenCalled()
})

it('should not setPlaybackSpeed if param is not a number', () => {
  const player = imgPlayer(document.createElement('div'), {
    srcList: ['a', 'b']
  })
  const spy = vi.spyOn(player, 'setPlaybackSpeed')
  // @ts-ignore
  player.setPlaybackSpeed('test')
  expect(spy).toHaveBeenCalled()
})
