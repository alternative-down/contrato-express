import { describe, it, expect } from 'vitest'
import { TEMPLATES, getTemplateById, getTemplatesByPlan, renderTemplate } from '../templates'

describe('templates', () => {
  describe('TEMPLATES', () => {
    it('is not empty', () => {
      expect(TEMPLATES.length).toBeGreaterThan(0)
    })

    it('every template has required fields', () => {
      TEMPLATES.forEach(t => {
        expect(typeof t.id).toBe('string')
        expect(t.id.length).toBeGreaterThan(0)
        expect(typeof t.name).toBe('string')
        expect(t.name.length).toBeGreaterThan(0)
        expect(['basic', 'pro']).toContain(t.planType)
        expect(typeof t.price).toBe('number')
        expect(t.price).toBeGreaterThanOrEqual(0)
        expect(Array.isArray(t.fields)).toBe(true)
        expect(typeof t.content).toBe('string')
        expect(t.content.length).toBeGreaterThan(0)
      })
    })

    it('all template IDs are unique', () => {
      const ids = TEMPLATES.map(t => t.id)
      const uniqueIds = new Set(ids)
      expect(uniqueIds.size).toBe(TEMPLATES.length)
    })
  })

  describe('getTemplateById', () => {
    it('returns template when id exists', () => {
      const template = getTemplateById('freelancer')
      expect(template).not.toBeNull()
      expect(template?.id).toBe('freelancer')
    })

    it('returns null when id does not exist', () => {
      expect(getTemplateById('nonexistent-id')).toBeNull()
    })

    it('returned template has all required fields', () => {
      const t = getTemplateById('retainer')!
      expect(t).toHaveProperty('id', 'retainer')
      expect(t).toHaveProperty('name')
      expect(t).toHaveProperty('description')
      expect(t).toHaveProperty('category')
      expect(t).toHaveProperty('planType', 'pro')
      expect(t).toHaveProperty('price', 29)
      expect(Array.isArray(t.fields)).toBe(true)
      expect(t.fields.length).toBeGreaterThan(0)
    })
  })

  describe('getTemplatesByPlan', () => {
    it('returns only basic plan templates', () => {
      getTemplatesByPlan('basic').forEach(t => expect(t.planType).toBe('basic'))
    })

    it('returns only pro plan templates', () => {
      getTemplatesByPlan('pro').forEach(t => expect(t.planType).toBe('pro'))
    })

    it('returns at least one template per plan', () => {
      expect(getTemplatesByPlan('basic').length).toBeGreaterThan(0)
      expect(getTemplatesByPlan('pro').length).toBeGreaterThan(0)
    })

    it('basic + pro covers all templates', () => {
      expect(TEMPLATES.length).toBe(
        getTemplatesByPlan('basic').length + getTemplatesByPlan('pro').length
      )
    })
  })

  describe('renderTemplate', () => {
    it('replaces placeholders with form data', () => {
      const template = getTemplateById('retainer')!
      const result = renderTemplate(template, {
        prestador_nome: 'Teste',
        prestador_cpf: '00000000000',
        cliente_nome: 'Empresa',
        cliente_documento: '00000000000',
        servico_descricao: 'Servico de TI',
        retainer_horas: '40',
        retainer_valor: '5000',
        vigencia_meses: '12',
        data_inicio: '2025-01-01',
      })

      expect(result).toContain('Teste')
      expect(result).toContain('00000000000')
      expect(result).toContain('Empresa')
      expect(result).toContain('Servico de TI')
      expect(result).toContain('5000')
      expect(result).toContain('2025-01-01')
    })

    it('uses fallback for empty string values', () => {
      const template = getTemplateById('retainer')!
      const result = renderTemplate(template, {
        prestador_nome: '',
        prestador_cpf: '',
        cliente_nome: '',
        cliente_documento: '',
        servico_descricao: '',
        retainer_horas: '',
        retainer_valor: '',
        vigencia_meses: '',
        data_inicio: '',
      })
      expect(result).toContain('[não informado]')
    })

    it('preserves template heading structure', () => {
      const template = getTemplateById('retainer')!
      const result = renderTemplate(template, {
        prestador_nome: 'X',
        prestador_cpf: '0',
        cliente_nome: 'Y',
        cliente_documento: '0',
        servico_descricao: 'Z',
        retainer_horas: '1',
        retainer_valor: '1',
        vigencia_meses: '1',
        data_inicio: '2025',
      })

      expect(result).toContain('CONTRATO DE RETAINER')
      expect(result).toContain('DO OBJETO')
      expect(result).toContain('DAS HORAS')
    })
  })
})
