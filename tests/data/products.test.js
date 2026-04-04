// tests/data/products.test.js
// @vitest-environment node
import { products } from '../../src/data/products.js'

test('exports exactly 3 products', () => {
  expect(products).toHaveLength(3)
})

test('each product has required fields', () => {
  products.forEach(p => {
    expect(p).toHaveProperty('id')
    expect(p).toHaveProperty('name')
    expect(p).toHaveProperty('nameJp')
    expect(p).toHaveProperty('description')
    expect(p).toHaveProperty('price')
    expect(p).toHaveProperty('aspect')
  })
})

test('price is a positive number', () => {
  products.forEach(p => {
    expect(typeof p.price).toBe('number')
    expect(p.price).toBeGreaterThan(0)
  })
})
