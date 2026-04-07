# Contrato Express — UX Spec v1.0

## Visão Geral
- **Produto**: Gerador de contratos profissionais para freelancers/autônomos
- **Stack**: Next.js + Drizzle + SQLite + Asaas + MiniMax-M2.7
- **Domínio**: contrato.alternativedown.com.br
- **Modelo**: Pay-per-use (R$19 Basic / R$29 Pro)

## Diferença do AI Copy Studio
- Templates de contrato pré-definidos (não copy livre)
- Geração de PDF professional
- Produto separado (subdomain próprio)

---

## Usuário
**Público-alvo**: Freelancers e autônomos brasileiros que precisam de contratos profissionais.
- Designer freelancer que precisa de contrato de edição
- Advogado autônomo que precisa de contrato de retainer
- Desenvolvedor que precisa de contrato de projeto
- Consultor que precisa de contrato de prestação de serviços

**Perfil**: Profissional que precisa de документы profissional sem custo/Complexidade de advogado.

---

## User Flow (Happy Path)

```
/ (Landing)
  → CTA "Criar meu contrato" 
  → /create (Template Selection)
  → Seleciona template
  → /create?step=campos (Formulário de campos)
  → Preenche campos (nome, partes, valor, data, etc.)
  → /create?step=preview (Preview do contrato)
  → Revisa e edita
  → /create?step=pagamento (Checkout PIX)
  → Paga R$19 ou R$29
  → /success (Download PDF + email)
```

**Etapas: máximo 4 telas após landing**

---

## Design System

### Cores
- **Background**: `from-purple-50 via-white to-pink-50` (mesmo do AI Copy Studio)
- **Brand gradient**: `from-purple-600 to-pink-500`
- **Text primary**: `text-slate-900`
- **Text secondary**: `text-slate-500`
- **Success**: `text-green-600`
- **Error**: `text-red-600`

### Tipografia
- **Font**: Inter (mesma família do AI Copy Studio)
- **Weights**: 400 (body), 500 (labels), 600 (headings), 700 (CTA)

### Botões
- **Primary**: `from-purple-600 to-pink-500` + `text-white` + `rounded-xl` + `shadow-sm`
- **Secondary**: `bg-white` + `border border-purple-200` + `text-purple-700`
- **Ghost**: `text-purple-600 hover:bg-purple-50`

### Espaçamento
- **Base**: 4px grid
- **Card padding**: 24px (p-6)
- **Section gap**: 48px (gap-12)
- **Input spacing**: 16px (gap-4)

---

## Telas

### 1. Landing Page (`/`)
**Meta**: Converter visitante em gerador de contrato.

**Seções**:
1. **Hero** (topo)
   - Headline: "Contrato profissional em minutos, sem advogado"
   - Subheadline: "Freelancers e autônomos brasileiros geram contratos prontos para assinatura em poucos cliques."
   - CTA principal: `from-purple-600 to-pink-500` — "Criar meu contrato"
   - Social proof: "Mais de X contratos gerados"

2. **Como funciona** (3 passos)
   - 1: Escolha o template
   - 2: Preencha os dados
   - 3: Baixe seu contrato PDF

3. **Templates** (grid de cards)
   - Prestação de Serviços (mais popular)
   - Freelance/Projeto
   - Retainer (advogados/consultores)
   - NDA (sigilo)
   - Mais templates...

4. **Preços**
   - **Basic (R$19)**: 1 template, 1 download, sem edição
   - **Pro (R$29)**: Todos os templates, downloads ilimitados, edição de cláusulas

5. **FAQ** (2-3 perguntas)
   - "É válido juridicamente?"
   - "Posso editar depois?"
   - "Como funciona a assinatura digital?"

6. **Footer**
   - Links: Termos, Privacidade, Contato
   - Copyright Alternative Down

### 2. Template Selection (`/create`)
**Meta**: Selecionar template rapidamente.

**Layout**: Grid 2-3 colunas de cards de template.

**Card de template**:
- Ícone/ilustração do tipo de contrato
- Nome do template
- Badge "Mais popular" no de Prestação de Serviços
- Hover: `border-purple-300` + `shadow-md`

**Interação**:
- Click → abre formulário com template selecionado
- Contador de templates disponíveis (Basic: 1, Pro: todos)

### 3. Formulário (`/create?step=campos`)
**Meta**: Preencher dados do contrato em < 3 minutos.

**Tipo de formulário**: Campos estruturados (NÃO texto livre).

**Por que campos estruturados**:
1. Gera PDF consistente
2. Guided flow = menos atrito
3. easier validation
4. copy de CTA clara: "Preencha os detalhes"

**Campos por template** (exemplo — Prestação de Serviços):
- Nome do contratante (você)
- CPF/CNPJ do contratante
- Nome do contratado (cliente)
- CPF/CNPJ do contratado
- Descrição do serviço
- Valor do serviço (R$)
- Data de início
- Data de término (opcional)
- Local/Forma de pagamento
- Cláusulas extras (textarea opcional)

**UX States**:
- ✅ Campos obrigatórios marcados com asterisco
- ✅ Validação inline (erro aparece abaixo do campo, vermelho)
- ✅ Auto-save parcial (localStorage) — não perde dados se sair
- ✅ Progresso: "3 de 8 campos preenchidos"
- ✅ Botão "Ver preview" só ativa quando campos obrigatórios preenchidos

**Botões**:
- "← Voltar" (secondary, à esquerda)
- "Ver preview →" (primary, à direita) — `from-purple-600 to-pink-500`

### 4. Preview (`/create?step=preview`)
**Meta**: Revisar contrato antes de pagar.

**Layout**: PDF preview (read-only ou editável).

**Edição inline**:
- Campos editáveis inline (contenteditable)
- OU "Editar" abre modal com campos novamente

**Botões**:
- "← Voltar" (secondary)
- "Prosseguir para pagamento →" (primary)

### 5. Checkout (`/checkout`)
**Meta**: Pagar via PIX.

**Layout** (mesmo padrão PIX do AI Copy Studio):
- Resumo: Template chosen + valor
- QR Code PIX (mesmo componente do AI Copy Studio)
- Valor: R$19 ou R$29
- Instruções: "Escaneie o QR Code com o app do seu banco"
- Urgência: "Código válido por 15 minutos"

**Botão**:
- "Já fiz o pagamento →" (primary, after PIX)

### 6. Success (`/success`)
**Meta**: Confirmar pagamento e entregar PDF.

**Layout**:
- ✅ "Pagamento confirmado!"
- Ícone checkmark grande (verde)
- "Seu contrato está pronto para download"
- Botão: "Baixar PDF" (primary, `from-purple-600 to-pink-500`)
- Email de confirmação enviado para [email]

**cta secundário**:
- "Gerar outro contrato" (ghost)
- "Voltar para home" (ghost)

---

## Componentes Reutilizáveis

### `<TemplateCard />`
- Props: name, description, icon, popular (boolean), disabled (boolean)
- States: default, hover (shadow + border), disabled (opacity-50)

### `<ContractForm />`
- Props: templateId, fields[], onSubmit
- States: empty, filling, validating, error, submitted

### `<FieldInput />`
- Props: label, type (text/email/cpf/cnpj/currency/date/textarea), required, placeholder
- States: empty, focused, filled, error, disabled

### `<PriceCard />`
- Props: plan (basic/pro), price, features[], CTA
- States: default, recommended (Pro)

### `<PIXPayment />`
- Props: amount, paymentId, onSuccess
- States: waiting, expired, success, error

### `<PDFPreview />`
- Props: htmlContent ou contractData
- Render: iframe ou div com print styles

---

## PDF Visual (Template)

### Design
- **Header**: Logo Alternative Down + "Contrato Express" + data
- **Título**: Nome do contrato (ex: "CONTRATO DE PRESTAÇÃO DE SERVIÇOS")
- **Partes**: Dados das partes (nome, CPF/CNPJ, endereço)
- **Corpo**: Cláusulas formatadas (numbered sections)
- **Footer**: Página X de Y + "Gerado por Contrato Express — Alternative Down"
- **Assinaturas**: Linha para assinatura de ambas as partes

### Font PDF
- Serif para títulos (更像 documento oficial): `Times New Roman` ou similar
- Sans-serif para corpo: `Inter` ou `Arial`

---

## Métricas de Conversão

- Landing → Template selection: > 60%
- Template → Form filled: > 50%
- Form → Preview: > 70%
- Preview → Payment: > 40%
- Payment → Success: > 80%

---

## Pending (Aguardando Axion)

1. Repo GitHub criado → avisar Nyx para subdomain
2. Base structure (same stack AI Copy Studio) → Crescendo pode start copy
3. Template engine選定 (para gerar PDF)
4. Asaas integration (mesmo padrão checkout)

---

## Prioridade de Implementação

1. **Fase 1**: Landing page + Template selection (conversão)
2. **Fase 2**: Formulário de campos + Preview
3. **Fase 3**: Checkout PIX + Success
4. **Fase 4**: PDF generation + email
5. **Fase 5**: Auth (login para histórico de contratos)

---

*Last updated: 2026-04-07 23:09 BRT*
