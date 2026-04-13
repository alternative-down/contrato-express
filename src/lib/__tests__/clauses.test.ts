import { describe, it, expect } from 'vitest'
import { DEFAULT_CLAUSES } from '../clauses'

const VALID_CATEGORIES = [
  'pagamento',
  'propriedade_intelectual',
  'rescisao',
  'confidencialidade',
  'escopo',
  'responsabilidade',
  'entrega',
]

describe('DEFAULT_CLAUSES', () => {
  it('is not empty', () => {
    expect(DEFAULT_CLAUSES.length).toBeGreaterThan(0)
  })

  it('every clause has a non-empty id', () => {
    DEFAULT_CLAUSES.forEach(clause => {
      expect(typeof clause.id).toBe('string')
      expect(clause.id.length).toBeGreaterThan(0)
    })
  })

  it('every clause has a non-empty title', () => {
    DEFAULT_CLAUSES.forEach(clause => {
      expect(clause.title.length).toBeGreaterThan(0)
    })
  })

  it('every clause has a non-empty description', () => {
    DEFAULT_CLAUSES.forEach(clause => {
      expect(clause.description.length).toBeGreaterThan(0)
    })
  })

  it('every clause has a non-empty content', () => {
    DEFAULT_CLAUSES.forEach(clause => {
      expect(clause.content.length).toBeGreaterThan(0)
    })
  })

  it('every clause has a valid category', () => {
    DEFAULT_CLAUSES.forEach(clause => {
      expect(VALID_CATEGORIES).toContain(clause.category)
    })
  })

  it('all clause IDs are unique', () => {
    const ids = DEFAULT_CLAUSES.map(c => c.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(DEFAULT_CLAUSES.length)
  })

  it('covers all 7 expected categories', () => {
    const categories = new Set(DEFAULT_CLAUSES.map(c => c.category))
    expect(categories.size).toBe(VALID_CATEGORIES.length)
  })

  it('has at least one clause per category', () => {
    const byCategory = {}
    DEFAULT_CLAUSES.forEach(c => {
      byCategory[c.category] = (byCategory[c.category] || 0) + 1
    })
    Object.entries(byCategory).forEach(([cat, count]) => {
      expect(count).toBeGreaterThan(0)
    })
  })

  it('content contains CLÁUSULA keyword', () => {
    DEFAULT_CLAUSES.forEach(clause => {
      expect(clause.content).toContain('CLÁUSULA')
    })
  })
})
