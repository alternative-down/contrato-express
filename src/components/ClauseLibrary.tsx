'use client'

import { useState, useMemo } from 'react'
import { Search, X, Plus, Check, ChevronDown } from 'lucide-react'

export type ClauseCategory =
  | 'pagamento'
  | 'propriedade_intelectual'
  | 'rescisao'
  | 'confidencialidade'
  | 'escopo'
  | 'responsabilidade'
  | 'entrega'

export interface Clause {
  id: string
  title: string
  description: string
  content: string
  category: ClauseCategory
}

export interface ClauseLibraryProps {
  clauses: Clause[]
  selectedIds: string[]
  onToggle: (id: string) => void
  open: boolean
  onClose: () => void
}

const CATEGORY_LABELS: Record<ClauseCategory, string> = {
  pagamento: 'Pagamento',
  propriedade_intelectual: 'Propriedade Intelectual',
  rescisao: 'Rescisão',
  confidencialidade: 'Confidencialidade',
  escopo: 'Escopo',
  responsabilidade: 'Responsabilidade',
  entrega: 'Entrega',
}

const CATEGORY_ORDER: ClauseCategory[] = [
  'pagamento',
  'propriedade_intelectual',
  'rescisao',
  'confidencialidade',
  'escopo',
  'responsabilidade',
  'entrega',
]

// Clause cards sorted by category for the library view
interface ClauseCardProps {
  clause: Clause
  selected: boolean
  onToggle: () => void
}

function ClauseCard({ clause, selected, onToggle }: ClauseCardProps) {
  return (
    <div
      className={`
        relative rounded-xl border p-4 transition-all cursor-pointer group
        ${selected
          ? 'border-purple-500 bg-purple-50 shadow-sm'
          : 'border-purple-100 bg-white hover:border-purple-300 hover:shadow-sm'
        }
      `}
      onClick={onToggle}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`
                inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full
                ${selected ? 'bg-purple-500 text-white' : 'bg-purple-100 text-purple-700'}
              `}
            >
              {CATEGORY_LABELS[clause.category]}
            </span>
          </div>
          <h4 className="font-semibold text-slate-900 text-sm mt-1.5 leading-snug">
            {clause.title}
          </h4>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
            {clause.description}
          </p>
        </div>

        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onToggle() }}
          className={`
            flex-shrink-0 w-7 h-7 rounded-lg border-2 flex items-center justify-center
            transition-all text-xs font-bold
            ${selected
              ? 'border-purple-500 bg-purple-500 text-white'
              : 'border-slate-200 bg-white text-slate-400 group-hover:border-purple-400 group-hover:text-purple-600'
            }
          `}
          aria-label={selected ? 'Remover cláusula' : 'Adicionar cláusula'}
        >
          {selected ? <Check size={13} /> : <Plus size={13} />}
        </button>
      </div>
    </div>
  )
}

// Mobile filter pills
function CategoryFilter({
  selected,
  onChange,
}: {
  selected: ClauseCategory | null
  onChange: (cat: ClauseCategory | null) => void
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none">
      <button
        type="button"
        onClick={() => onChange(null)}
        className={`
          flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-all whitespace-nowrap
          ${selected === null
            ? 'bg-purple-600 text-white border-purple-600'
            : 'bg-white text-slate-600 border-slate-200 hover:border-purple-300'
          }
        `}
      >
        Todas
      </button>
      {CATEGORY_ORDER.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onChange(cat)}
          className={`
            flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-all whitespace-nowrap
            ${selected === cat
              ? 'bg-purple-600 text-white border-purple-600'
              : 'bg-white text-slate-600 border-slate-200 hover:border-purple-300'
            }
          `}
        >
          {CATEGORY_LABELS[cat]}
        </button>
      ))}
    </div>
  )
}

export default function ClauseLibrary({
  clauses,
  selectedIds,
  onToggle,
  open,
  onClose,
}: ClauseLibraryProps) {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<ClauseCategory | null>(null)

  const filtered = useMemo(() => {
    return clauses.filter((c) => {
      const matchSearch =
        !search ||
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.description.toLowerCase().includes(search.toLowerCase())
      const matchCat = !activeCategory || c.category === activeCategory
      return matchSearch && matchCat
    })
  }, [clauses, search, activeCategory])

  // Group by category for desktop view
  const grouped = useMemo(() => {
    const map = new Map<ClauseCategory, Clause[]>()
    for (const cat of CATEGORY_ORDER) map.set(cat, [])
    for (const c of filtered) {
      const list = map.get(c.category) ?? []
      list.push(c)
      map.set(c.category, list)
    }
    return map
  }, [filtered])

  const hasContent = filtered.length > 0
  const selectedCount = selectedIds.length

  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`
          fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl
          flex flex-col transition-transform duration-300 ease-out
          md:static md:shadow-none md:border md:border-purple-100 md:rounded-xl md:max-w-none
          ${open ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
        `}
      >
        {/* Header */}
        <div className="flex-shrink-0 px-4 py-4 border-b border-purple-100 bg-white rounded-t-xl">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="font-semibold text-slate-900 text-base">
                Cláusulas
              </h3>
              {selectedCount > 0 && (
                <p className="text-xs text-purple-600 font-medium mt-0.5">
                  {selectedCount} selecionada{selectedCount !== 1 ? 's' : ''}
                </p>
              )}
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition md:hidden"
              aria-label="Fechar"
            >
              <X size={18} />
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar cláusula..."
              className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-purple-200 bg-purple-50 focus:bg-white focus:border-purple-500 focus:outline-none transition placeholder:text-slate-400"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X size={13} />
              </button>
            )}
          </div>

          {/* Category filter */}
          <div className="mt-3">
            <CategoryFilter
              selected={activeCategory}
              onChange={setActiveCategory}
            />
          </div>
        </div>

        {/* Clause list */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
          {!hasContent ? (
            <div className="text-center py-12">
              <p className="text-sm text-slate-500 mb-1">Nenhuma cláusula encontrada</p>
              <p className="text-xs text-slate-400">Tente outro termo ou categoria</p>
            </div>
          ) : (
            // Mobile: flat list
            <div className="flex flex-col gap-2 md:hidden">
              {filtered.map((clause) => (
                <ClauseCard
                  key={clause.id}
                  clause={clause}
                  selected={selectedIds.includes(clause.id)}
                  onToggle={() => onToggle(clause.id)}
                />
              ))}
            </div>
          )}

          {/* Desktop: grouped by category */}
          {CATEGORY_ORDER.map((cat) => {
            const items = grouped.get(cat) ?? []
            if (items.length === 0) return null
            return (
              <div key={cat}>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  {CATEGORY_LABELS[cat]}
                </h4>
                <div className="flex flex-col gap-2">
                  {items.map((clause) => (
                    <ClauseCard
                      key={clause.id}
                      clause={clause}
                      selected={selectedIds.includes(clause.id)}
                      onToggle={() => onToggle(clause.id)}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
