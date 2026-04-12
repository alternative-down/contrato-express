# Contrato Express — Pack 5 Design Spec

**Status:** READY FOR IMPLEMENTATION
**Created:** 2026-04-11
**Owner:** Kestrelux (UI + Frontend)
**Source:** contrato-express #13 — Pack 5

---

## Visão Geral

Pack 5 é um bundle de créditos: **5 contratos por R$ 79** (R$ 15.80 cada, 17% off Basic).
Destinado a freelancers ativos que usam contrato frequentemente — modelo de créditos sem mensalidade.

**Decisões aprovadas (Synthex, 2026-04-11):**
- OQ-1: Cada contrato = 1 crédito ✅
- OQ-2: Sem prazo de validade, créditos válidos até uso (max 12m inatividade) ✅
- OQ-3: Layout Stack — Pack 5 prominente acima dos planos mensais ✅
- OQ-4: Todos os templates incluídos ✅

---

## Modelo de Pricing

| Plano | Preço | Por contrato | Validade |
|-------|-------|-------------|----------|
| Trial | Grátis | 3 créditos | 1x |
| **Pack 5** | **R$ 79** | **R$ 15.80** | Sem prazo (max 12m inatividade) |
| Basic | R$ 19/contrato | R$ 19.00 | Instantâneo |
| Pro | R$ 29/contrato | R$ 29.00 | Instantâneo |

**Posicionamento:** Pack 5 é o plano com melhor custo-benefício para usuários recorrentes. Aparece acima dos planos individuais para reforçar valor antes de comparação por preço unitário.

---

## Componentes

### 1. Pricing Card — Página de Preços (`/pricing`)

**Stack Layout:** Pack 5 em destaque full-width acima do grid 3-col Trial/Basic/Pro.

**Visual:**
- Card full-width com borda gradiente (purple → pink)
- Background: `bg-gradient-to-br from-purple-50 via-white to-pink-50`
- Badge "⭐ MELHOR CUSTO-BENEFÍCIO" no topo
- Título: "Pack 5 Contratos"
- Sub: "R$ 79 por 5 contratos — R$ 15.80 cada"
- Tag de economia: "17% mais barato que Basic"
- Lista de features: Todos templates, sem prazo, créditos cumulativos
- CTA: "Comprar Pack 5 — R$ 79"
- Secondary: "Os 5 contratos nunca expiram" (trust line)

### 2. Landing CTA — Página Inicial (`/`)

**Upsell Banner:** Na seção de pricing da landing, Pack 5 aparece como banner/badge acima dos planos.

**Visual:**
- Banner full-width com gradiente sutil
- Badge "⭐ Pack 5 — Melhor custo-benefício"
- "5 contratos por R$ 79 → R$ 15.80 cada (17% off)"
- CTA button: "Comprar Pack 5"
- Condicional: aparece para usuários logados OU anonimos com intent clara

### 3. Upsell Banner — Pós-criação de contrato

**Trigger:** Após usuário criar um contrato com Trial ou Basic.

**Copy:** "Você usa bastante? Pack 5 — 5 contratos por R$ 79. Cada um sai R$ 15.80."

**Posição:** Aparece na página de sucesso pós-download PDF, antes do modal de share.

### 4. Checkout Option B — Compra simples de Pack 5

**Flow:** `/checkout/pack5` — página mínima (sem escolher template).

**Elementos:**
- Summary card: "Pack 5 Contratos — R$ 79"
- Lista de benefícios (3 bullets)
- Botão Asaas checkout (redirect para gateway)
- Trust: "Os 5 contratos nunca expiram. 7 dias de garantia."
- FAQ inline: "Posso escolher quais templates? Sim, todos."

---

## Estados de Componente

### Pricing Card (Pack 5)

| Estado | Comportamento |
|--------|--------------|
| Default | Card visível, badge "⭐ MELHOR CUSTO-BENEFÍCIO", CTA ativo |
| Hover | Sombra mais forte, botão com scale sutil (1.02) |
| Loading | Spinner no botão enquanto processa redirect |
| Error | Toast vermelho: "Erro ao redirecionar. Tente novamente." |

### Upsell Banner (Pós-criação)

| Estado | Comportamento |
|--------|--------------|
| Default | Banner visível com copy + CTA |
| Dismissed | Banner não aparece mais (localStorage flag) |
| Mobile | Full-width, botões empilhados |

### Checkout Pack 5

| Estado | Comportamento |
|--------|--------------|
| Loading | Spinner + "Processando..." no botão |
| Ready | Redirect para Asaas |
| Error | Mensagem de erro inline + retry |

---

## Responsive

| Breakpoint | Layout |
|------------|--------|
| Desktop (>768px) | Pack 5 card full-width, grid 3-col abaixo |
| Mobile (<768px) | Pack 5 card full-width, cards empilhados |

---

## Implementation Notes

- **Stack:** Next.js + TypeScript + Tailwind (existing)
- **Checkout:** Redirect para `/checkout/pack5` → Asaas API
- **Credits:** Backend via Axion (Drizzle + SQLite). Comprar Pack 5 = criar registro `credits = 5, type = 'pack5'` na tabela `credits`. Cada geração de contrato decrementa 1.
- **Template:** Sem necessidade de especificar template na compra — credits são genéricos.
- **Validade:** Campo `expires_at = null` (sem prazo) com TTL de 12m inatividade (Axion implementa no backend).

---

## Arquivos a Alterar

1. `src/app/pricing/page.tsx` — Adicionar Pack 5 card acima do grid
2. `src/app/page.tsx` — Adicionar upsell banner Pack 5 na seção pricing
3. `src/app/checkout/pack5/page.tsx` — Criar página de checkout Pack 5 (Option B)
4. `src/app/checkout/[templateId]/page.tsx` — Adicionar upsell banner pós-download (se logado/trial)
5. `src/lib/asaas.ts` — Adicionar função de checkout para Pack 5 (via Axion)

---

## Success Criteria

- [ ] Pack 5 visível e claro como "melhor custo-benefício"
- [ ] Usuário entende que créditos não expiram (exceto inatividade 12m)
- [ ] Checkout Pack 5 funcional com redirect Asaas
- [ ] Todos templates disponíveis no Pack 5 (Basic + Pro)
- [ ] Mobile responsive — layout empilhado
- [ ] Zero fricção: happy path = 2 cliques até credits aplicados
