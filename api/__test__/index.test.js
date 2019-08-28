const sum = require('../db/sum');

describe('Testing Sum', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
  test('adds 2 + 2 to equal 3', () => {
    expect(sum(2, 2)).toBe(4)
  })
  test('adds 3 + 2 to equal 3', () => {
    expect(sum(3, 2)).toBe(5)
  })
  test('adds 5 + 2 to equal 3', () => {
    expect(sum(5, 2)).toBe(7)
  })
})

describe('Testing Sum Again', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
  test('adds 2 + 2 to equal 3', () => {
    expect(sum(2, 2)).toBe(4)
  })
  test('adds 3 + 2 to equal 3', () => {
    expect(sum(3, 2)).toBe(5)
  })
  test('adds 5 + 2 to equal 3', () => {
    expect(sum(5, 2)).toBe(7)
  })
})