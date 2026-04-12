/**
 * Biblioteca de Cláusulas — default clauses provided by the product.
 * Crescendo copy spec: acquisition-strategy/CONTRATO-CLAUSE-LIBRARY-COPY.md
 *
 * 26 clauses across 7 categories.
 */

import type { Clause, ClauseCategory } from '@/components/ClauseLibrary'

export const DEFAULT_CLAUSES: Clause[] = [
  // ── 1. Pagamento e Finanças ──────────────────────────────────────
  {
    id: 'pag-1',
    title: 'Juros por Atraso',
    description: 'Multa de 2% + juros de mora de 1% ao mês sobre valores atrasados.',
    content: 'CLÁUSULA — JUROS POR ATRASO\n\nEm caso de atraso no pagamento, incidirão sobre o valor devido: (a) multa contratual de 2% (dois por cento); e (b) juros de mora de 1% (um por cento) ao mês, pro rata die, contados da data de vencimento até a data do efetivo pagamento.',
    category: 'pagamento',
  },
  {
    id: 'pag-2',
    title: 'Multa por Inadimplência',
    description: 'Multa de 10% sobre o valor total do contrato em caso de inadimplência.',
    content: 'CLÁUSULA — MULTA POR INADIMPLÊNCIA\n\nEm caso de inadimplência total ou parcial das obrigações pactuadas, a parte inadimplente ficará sujeita à multa de 10% (dez por cento) sobre o valor total do contrato, além da correção monetária pelo IPCA/IBGE e juros de mora de 1% ao mês.',
    category: 'pagamento',
  },
  {
    id: 'pag-3',
    title: 'Parcelamento',
    description: 'Permite dividir o pagamento em até 3 parcelas iguais, sem juros.',
    content: 'CLÁUSULA — PARCELAMENTO\n\nO pagamento poderá ser realizado em até 3 (três) parcelas mensais iguais e sucessivas, sem incidência de juros, desde que acordado entre as partes antes da formalização deste instrumento.\n\nParágrafo único: O não pagamento de qualquer parcela no vencimento implicará na incidência imediata das demais cláusulas penalizadoras deste contrato.',
    category: 'pagamento',
  },
  {
    id: 'pag-4',
    title: 'Forma de Pagamento',
    description: 'Pagamento via PIX, transferência ou boleto bancário, conforme acordado.',
    content: 'CLÁUSULA — FORMA DE PAGAMENTO\n\nO pagamento dos valores pactuados deverá ser realizado via: (a) PIX, mediante chave CNPJ ou CPF a ser informada pela parte credora; (b) transferência bancária para conta indicada; ou (c) boleto bancário emitido pela parte credora.\n\nParágrafo único: Os dados bancários para pagamento serão informados em até 2 (dois) dias úteis após a assinatura deste instrumento.',
    category: 'pagamento',
  },
  {
    id: 'pag-5',
    title: 'Recibo',
    description: 'Emissão de recibo por cada pagamento realizado, servindo como comprovante.',
    content: 'CLÁUSULA — RECIBO\n\nA parte credora emitirá recibo comprobatório de cada pagamento realizado, o qual poderá ser substituído por comprovante bancário. O recibo substitui, para todos os fins, a quitação plena e definitiva do valor recebido.',
    category: 'pagamento',
  },

  // ── 2. Propriedade Intelectual ─────────────────────────────────
  {
    id: 'pi-1',
    title: 'Cessão de Direitos Autorais',
    description: 'Todos os direitos autorais sobre entregas são cedidos ao contratante após pagamento integral.',
    content: 'CLÁUSULA — CESSÃO DE DIREITOS AUTORAIS\n\nMediante o pagamento integral dos valores pactuados, o PRESTADOR cede ao CONTRATANTE todos os direitos autorais sobre as entregas realizadas no âmbito deste contrato, incluindo, sem limitação, textos, layouts, projetos, códigos-fonte e materiais intelectuais produzidos.\n\nParágrafo único: A cessão é plena, exclusiva e irrevogável, vigorando em caráter perpétuo e em todo o território nacional.',
    category: 'propriedade_intelectual',
  },
  {
    id: 'pi-2',
    title: 'Materiais de Terceiros',
    description: 'Responsabilidade por licenciamento de materiais de terceiros utilizados nas entregas.',
    content: 'CLÁUSULA — MATERIAIS DE TERCEIROS\n\nO PRESTADOR é responsável por assegurar que todos os materiais de terceiros utilizados nas entregas (imagens, bancos de dados, plugins, bibliotecas de código) estejam devidamente licenciados para uso comercial.\n\nParágrafo único: Quaisquer custos adicionais decorrentes de licenciamento de terceiros serão previamente comunicados ao CONTRATANTE.',
    category: 'propriedade_intelectual',
  },
  {
    id: 'pi-3',
    title: 'Portfólio do Prestador',
    description: 'Direito do prestador de exibir o trabalho em portfólio, salvo vedação expressa.',
    content: 'CLÁUSULA — PORTFÓLIO DO PRESTADOR\n\nFica assegurado ao PRESTADOR o direito de mencionar e exibir, em seu portfólio profissional e materiais de divulgação, a natureza dos serviços prestados ao CONTRATANTE, vedada a divulgação de informações confidenciais.\n\nParágrafo único: O CONTRATANTE poderá vetar expressamente esta disposição mediante comunicação escrita no ato da assinatura.',
    category: 'propriedade_intelectual',
  },

  // ── 3. Rescisão e Cancelamento ──────────────────────────────────
  {
    id: 'resc-1',
    title: 'Cancelamento pelo Contratante',
    description: 'Contratante pode cancelar mediante aviso prévio de 15 dias e pagamento pelos serviços prestados.',
    content: 'CLÁUSULA — CANCELAMENTO PELO CONTRATANTE\n\nO CONTRATANTE poderá cancelar o presente contrato a qualquer tempo, mediante aviso prévio por escrito com antecedência mínima de 15 (quinze) dias, ficando obrigado ao pagamento dos serviços já realizados até a data do cancelamento, conforme apuração por métricas de acompanhamento.',
    category: 'rescisao',
  },
  {
    id: 'resc-2',
    title: 'Cancelamento pelo Prestador',
    description: 'Prestador pode cancelar em caso de inadimplência, mediante aviso prévio de 30 dias.',
    content: 'CLÁUSULA — CANCELAMENTO PELO PRESTADOR\n\nO PRESTADOR poderá cancelar o presente contrato nas seguintes hipóteses: (a) inadimplência do CONTRATANTE por período superior a 15 (quinze) dias; (b) impossibilidade técnica superveniente; ou (c) por vontade própria, mediante aviso prévio mínimo de 30 (trinta) dias, obrigando-se à conclusão dos serviços em andamento.',
    category: 'rescisao',
  },
  {
    id: 'resc-3',
    title: 'Rescisão por Atraso',
    description: 'Direito de rescisão quando entregas atrasam mais de 30 dias sem justificativa.',
    content: 'CLÁUSULA — RESCISÃO POR ATRASO\n\nO atraso injustificado na entrega das mercadorias ou serviços por prazo superior a 30 (trinta) dias corridos confere à parte inocente o direito de rescindir o presente contrato, sem prejuízo da apuração de danos causados.\n\nParágrafo único: Consideram-se justificativas válidas: caso fortuito, força maior, alterações de escopo solicitadas pelo CONTRATANTE, ou fato imputável ao CONTRATANTE.',
    category: 'rescisao',
  },
  {
    id: 'resc-4',
    title: 'Suspensão por Inadimplência',
    description: 'Prestador pode suspender entregas durante período de inadimplência do contratante.',
    content: 'CLÁUSULA — SUSPENSÃO POR INADIMPLÊNCIA\n\nO PRESTADOR poderá suspender a execução dos serviços enquanto perdurar a inadimplência do CONTRATANTE, sem que isso configure descumprimento contratual ou gere direito a indenização.\n\nParágrafo único: O prazo de entrega será automaticamente prorrogado pelo período de duração da suspensão.',
    category: 'rescisao',
  },

  // ── 4. Confidencialidade ───────────────────────────────────────
  {
    id: 'conf-1',
    title: 'NDA Mútuo',
    description: 'Ambas as partes se comprometem a manter sigilo sobre informações confidenciais trocadas.',
    content: 'CLÁUSULA — CONFIDENCIALIDADE MÚTUA\n\nAs partes obrigam-se a manter rigoroso sigilo sobre todas as informações confidenciais trocadas em razão deste contrato, incluindo, sem limitação: dados financeiros, estratégias comerciais, listas de clientes, segredos técnicos eKnow-how.\n\nParágrafo único: O dever de confidencialidade vigorará pelo prazo de 5 (cinco) anos contados da assinatura deste instrumento.',
    category: 'confidencialidade',
  },
  {
    id: 'conf-2',
    title: 'NDA Unilateral (Prestador)',
    description: 'Apenas o prestador assina compromisso de confidencialidade sobre informações do contratante.',
    content: 'CLÁUSULA — CONFIDENCIALIDADE UNILATERAL\n\nO PRESTADOR obriga-se a manter rigoroso sigilo sobre todas as informações do CONTRATANTE às quais tiver acesso em razão deste contrato, sendo vedada a utilização para qualquer finalidade que não a estrita execução dos serviços pactuados.\n\nParágrafo único: O descumprimento desta cláusula sujeitará o PRESTADOR às indenizações por danos causados, sem prejuízo de outras medidas cabíveis.',
    category: 'confidencialidade',
  },
  {
    id: 'conf-3',
    title: 'Exceção Informações Públicas',
    description: 'Não se aplica confidencialidade a informações que sejam de conhecimento público.',
    content: 'CLÁUSULA — EXCEÇÃO DE INFORMAÇÕES PÚBLICAS\n\nAs obrigações de confidencialidade previstas neste contrato não se aplicam a informações que: (a) sejam ou se tornem de domínio público por meio que não seja violatingação do dever de sigilo; (b) já sejam de conhecimento da parte receptora antes da comunicação confidencial; ou (c) sejam recebidas de terceiros licitamente e sem restrição.',
    category: 'confidencialidade',
  },

  // ── 5. Escopo e Revisões ───────────────────────────────────────
  {
    id: 'esc-1',
    title: 'Limite de Revisões',
    description: 'Define número de revisões incluídas no escopo (1, 3, 5 ou ilimitadas).',
    content: 'CLÁUSULA — LIMITE DE REVISÕES\n\nEstão incluídas no valor pactuado até [QUANTIDADE] revisão(ões) das entregas realizadas. Revisões adicionais serão cobradas à parte, mediante orçamento prévio aprovado pelo CONTRATANTE.\n\nParágrafo único: Entendem-se por revisão as alterações solicitadas sobre entrega já apresentada, que não configurem mudança de escopo.',
    category: 'escopo',
  },
  {
    id: 'esc-2',
    title: 'Mudanças de Escopo',
    description: 'Procedimento para alteração de escopo: orçamento adicional e prazo renegociado.',
    content: 'CLÁUSULA — MUDANÇAS DE ESCOPO\n\nQualquer alteração no escopo dos serviços ora pactuados deverá ser comunicada por escrito e estará sujeita a: (a) elaboração de orçamento complementar pelo PRESTADOR; (b) aprovação expressa do CONTRATANTE; e (c) ajuste do prazo de entrega.\n\nParágrafo único: Mudanças de escopo não solicitadas formalmente não gerarão obrigações adicionais para o PRESTADOR.',
    category: 'escopo',
  },
  {
    id: 'esc-3',
    title: 'Escopo Fixo',
    description: 'Escopo previamente definido e bloqueado, sem margem para alterações.',
    content: 'CLÁUSULA — ESCOPO FIXO\n\nO escopo dos serviços está previamente definido na descrição do objeto deste contrato, não comportando alterações sem a formalização de aditivo contratual. Qualquer mudança de escopo ensejará a rescisão do presente instrumento e a formalização de novo contrato.',
    category: 'escopo',
  },
  {
    id: 'esc-4',
    title: 'Reuniões Incluídas',
    description: 'Quantidade de reuniões online incluídas no valor do contrato.',
    content: 'CLÁUSULA — REUNIÕES\n\nEstão incluídas no valor pactuado até [QUANTIDADE] reunião(ões) online de acompanhamento, com duração máxima de [DURAÇÃO] minutos cada. Reuniões adicionais serão cobradas à parte, conforme taxa horária vigente do PRESTADOR.',
    category: 'escopo',
  },

  // ── 6. Responsabilidade ─────────────────────────────────────────
  {
    id: 'resp-1',
    title: 'Limitação de Responsabilidade',
    description: 'Responsabilidade limitada ao valor total do contrato, excluindo lucros cessantes.',
    content: 'CLÁUSULA — LIMITAÇÃO DE RESPONSABILIDADE\n\nA responsabilidade de qualquer das partes por danos, seja a que título for, limitar-se-á ao valor total efetivamente pago ou a pagar no âmbito deste contrato, excluindo-se, em qualquer caso, lucros cessantes, danos indiretos ou consequenciais.\n\nParágrafo único: Esta limitação não se aplica em casos de dolo, má-fé ou violação de obrigação legal indisponível.',
    category: 'responsabilidade',
  },
  {
    id: 'resp-2',
    title: 'Garantia de Correção',
    description: 'Prazo para correção de defeitos encontrados nas entregas (15, 30 ou 60 dias).',
    content: 'CLÁUSULA — GARANTIA DE CORREÇÃO\n\nO PRESTADOR garante a correção de defeitos, erros ou inconsistências identificados nas entregas pelo prazo de [PRAZO] dias corridos após a entrega final. Correções solicitadas após este período serão tratadas como novo projeto, sujeitas a orçamento adicional.',
    category: 'responsabilidade',
  },
  {
    id: 'resp-3',
    title: 'Responsabilidade por Dados',
    description: 'Cada parte é responsável pela integridade dos dados que fornece à outra.',
    content: 'CLÁUSULA — RESPONSABILIDADE POR DADOS\n\nCada parte é exclusivamente responsável pela veracidade, integridade e segurança dos dados e informações que fornecer no âmbito deste contrato. O PRESTADOR não será responsável por perdas de dados, interrupções de serviço ou danos decorrentes de informações incorretas fornecidas pelo CONTRATANTE.',
    category: 'responsabilidade',
  },

  // ── 7. Entrega e Prazos ─────────────────────────────────────────
  {
    id: 'ent-1',
    title: 'Prazo de Entrega',
    description: 'Define prazo total para conclusão dos serviços em dias corridos.',
    content: 'CLÁUSULA — PRAZO DE ENTREGA\n\nO PRESTADOR obriga-se a entregar os serviços pactuados no prazo de [PRAZO] dias corridos, contados a partir da data de recebimento integral do pagamento inicial e da aprovação formal do briefing.\n\nParágrafo único: O prazo poderá ser prorrogado em caso de alteração de escopo, força maior ou fatos imputáveis ao CONTRATANTE.',
    category: 'entrega',
  },
  {
    id: 'ent-2',
    title: 'Período de Aprovação',
    description: 'Prazo para que o contratante aprove ou solicite correções nas entregas.',
    content: 'CLÁUSULA — PERÍODO DE APROVAÇÃO\n\nO CONTRATANTE disporá de [PRAZO] dias corridos, contados da data de entrega, para aprovar os serviços ou formular demandas de revisão. Findo este prazo sem manifestação, a entrega será considerada tacitamente aprovada.',
    category: 'entrega',
  },
  {
    id: 'ent-3',
    title: 'Entregas Parciais',
    description: 'Possibilidade de entregas em etapas, com aprovação separada de cada uma.',
    content: 'CLÁUSULA — ENTREGAS PARCIAIS\n\nMediante acordo prévio entre as partes, os serviços poderão ser executados e entregues de forma parcelada. Cada etapa entregue e aprovada será objeto de recibo específico, não exonerando as partes das obrigações relativas às etapas subsequentes.',
    category: 'entrega',
  },
  {
    id: 'ent-4',
    title: 'Formato dos Arquivos',
    description: 'Formatos de entrega dos materiais finais (PDF, editáveis, código, etc.).',
    content: 'CLÁUSULA — FORMATO DOS ARQUIVOS\n\nOs arquivos finais serão entregues nos formatos: [FORMATOS]. Arquivos em formatos diferentes dos pactuados ou em versões editáveis (source files) dependerão de negociação específica e pagamento adicional.\n\nParágrafo único: Entrega de código-fonte, quando aplicável, será objeto de negociação específica e aditivo a este instrumento.',
    category: 'entrega',
  },
]

/**
 * Group clauses by category.
 */
export function groupClausesByCategory(
  clauses: Clause[]
): Map<ClauseCategory, Clause[]> {
  const map = new Map<ClauseCategory, Clause[]>()
  for (const c of clauses) {
    const list = map.get(c.category) ?? []
    list.push(c)
    map.set(c.category, list)
  }
  return map
}
