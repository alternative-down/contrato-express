import { db } from '@/db';
import { contractTemplates } from '@/db/schema';

export const TEMPLATES = [
  {
    id: 'prestador-servicos',
    name: 'Contrato de Prestação de Serviços',
    description: 'Contrato geral para prestação de serviços entre prestador e contratante.',
    category: 'Contratos Gerais',
    planType: 'basic',
    price: 19,
    fields: [
      { name: 'prestador_nome', label: 'Nome do Prestador', type: 'text', required: true },
      { name: 'prestador_cpf', label: 'CPF do Prestador', type: 'cpf', required: true },
      { name: 'prestador_endereco', label: 'Endereço do Prestador', type: 'text', required: true },
      { name: 'contratante_nome', label: 'Nome do Contratante', type: 'text', required: true },
      { name: 'contratante_cnpj', label: 'CNPJ do Contratante', type: 'cnpj', required: true },
      { name: 'contratante_endereco', label: 'Endereço do Contratante', type: 'text', required: true },
      { name: 'servico_descricao', label: 'Descrição do Serviço', type: 'textarea', required: true },
      { name: 'servico_valor', label: 'Valor do Serviço (R$)', type: 'currency', required: true },
      { name: 'servico_prazo', label: 'Prazo de Entrega', type: 'text', required: true },
      { name: 'data_inicio', label: 'Data de Início', type: 'date', required: true },
    ],
    content: `CONTRATO DE PRESTAÇÃO DE SERVIÇOS

Por este instrumento particular, [PRESTADOR_NOME], portador(a) do CPF [PRESTADOR_CPF], residente e domiciliado(a) em [PRESTADOR_ENDERECO], daqui por diante denominado(a) PRESTADOR(A), e [CONTRATANTE_NOME], pessoa jurídica, portadora do CNPJ [CONTRATANTE_CNPJ], com sede em [CONTRATANTE_ENDERECO], daqui por diante denominada CONTRATANTE, têm entre si justo e acordado o seguinte:

CLÁUSULA 1ª - DO OBJETO
O presente contrato tem por objeto a prestação dos seguintes serviços: [SERVICO_DESCRICAO]

CLÁUSULA 2ª - DO VALOR E FORMA DE PAGAMENTO
O valor total dos serviços contratados é de R$ [SERVICO_VALOR], a serem pagos conforme acordado entre as partes.

CLÁUSULA 3ª - DO PRAZO
O serviço deverá ser prestado no prazo de [SERVICO_PRAZO], com início em [DATA_INICIO].

CLÁUSULA 4ª - DAS OBRIGAÇÕES DO(A) PRESTADOR(A)
a) Realizar os serviços com dedicação e esmero;
b) Manter sigilo sobre informações confidenciais;
c) Entregar o trabalho no prazo acordado.

CLÁUSULA 5ª - DAS OBRIGAÇÕES DA CONTRATANTE
a) Efetuar o pagamento no prazo acordado;
b) Fornecer informações e materiais necessários para a execução dos serviços.

CLÁUSULA 6ª - DO RESCISÃO
Qualquer das partes poderá rescindir o presente contrato, mediante aviso prévio de 15 (quinze) dias, respeitadas as obrigações já assumidas.

CLÁUSULA 7ª - DO FORO
As partes elegem o foro da comarca de [PRESTADOR_ENDERECO] para dirimir quaisquer controvérsias.

E por estarem de pleno acordo, as partes assinam o presente instrumento em duas vias de igual teor.

[PRESTADOR_ENDERECO], [DATA_INICIO].

______________________________
[PRESTADOR_NOME]
CPF: [PRESTADOR_CPF]

______________________________
[CONTRATANTE_NOME]
CNPJ: [CONTRATANTE_CNPJ]`,
  },
  {
    id: 'freelancer',
    name: 'Contrato Freelancer',
    description: 'Contrato para trabalhos freelancers com definição clara de escopo e prazos.',
    category: 'Trabalho Freelance',
    planType: 'basic',
    price: 19,
    fields: [
      { name: 'freelancer_nome', label: 'Nome do Freelancer', type: 'text', required: true },
      { name: 'freelancer_cpf', label: 'CPF do Freelancer', type: 'cpf', required: true },
      { name: 'freelancer_email', label: 'Email do Freelancer', type: 'email', required: true },
      { name: 'cliente_nome', label: 'Nome do Cliente', type: 'text', required: true },
      { name: 'cliente_documento', label: 'CPF ou CNPJ do Cliente', type: 'text', required: true },
      { name: 'projeto_nome', label: 'Nome do Projeto', type: 'text', required: true },
      { name: 'projeto_escopo', label: 'Escopo do Projeto', type: 'textarea', required: true },
      { name: 'projeto_valor', label: 'Valor do Projeto (R$)', type: 'currency', required: true },
      { name: 'projeto_prazo', label: 'Prazo de Entrega', type: 'text', required: true },
      { name: 'data_inicio', label: 'Data de Início', type: 'date', required: true },
    ],
    content: `CONTRATO DE PRESTAÇÃO DE SERVIÇOS freelancer

IDENTIFICAÇÃO DAS PARTES

FREELANCER: [FREELANCER_NOME], CPF [FREELANCER_CPF], email [FREELANCER_EMAIL]

CLIENTE: [CLIENTE_NOME], CPF/CNPJ [CLIENTE_DOCUMENTO]

PROJETO: [PROJETO_NOME]

1. DO OBJETO
O presente contrato regula a prestação de serviços de [PROJETO_NOME], conforme escopo detalhado:
[PROJETO_ESCOPO]

2. DO VALOR
O valor total do projeto é de R$ [PROJETO_VALOR],pagáveis conforme descrito neste contrato.

3. DO PRAZO
O projeto terá prazo de entrega em [PROJETO_PRAZO], com início em [DATA_INICIO].

4. DOS DIREITOS DO FREELANCER
- Autorização para mencionar o projeto no portfólio (com согласие do cliente)
- Recebimento integral do valor acordado
- Créditos pelo trabalho realizado

5. DOS DIREITOS DO CLIENTE
- Propriedade do produto final交付
- Revisões conforme acordado no escopo
- Entrega dentro do prazo

6. DA RESCISÃO
Em caso de rescisão por iniciativa do cliente, todos os trabalhos realizados até a data da rescisão deverão ser pagos integralmente.

[DATA_INICIO]

______________________________
[FREELANCER_NOME]

______________________________
[CLIENTE_NOME]`,
  },
  {
    id: 'retainer',
    name: 'Contrato de Retainer',
    description: 'Contrato de retainer para serviços continuados.',
    category: 'Contratos de Retainer',
    planType: 'pro',
    price: 29,
    fields: [
      { name: 'prestador_nome', label: 'Nome do Prestador', type: 'text', required: true },
      { name: 'prestador_cpf', label: 'CPF do Prestador', type: 'cpf', required: true },
      { name: 'cliente_nome', label: 'Nome do Cliente', type: 'text', required: true },
      { name: 'cliente_documento', label: 'CPF ou CNPJ do Cliente', type: 'text', required: true },
      { name: 'servico_descricao', label: 'Descrição dos Serviços', type: 'textarea', required: true },
      { name: 'retainer_horas', label: 'Horas Mensais', type: 'number', required: true },
      { name: 'retainer_valor', label: 'Valor Mensal (R$)', type: 'currency', required: true },
      { name: 'vigencia_meses', label: 'Vigência (meses)', type: 'number', required: true },
      { name: 'data_inicio', label: 'Data de Início', type: 'date', required: true },
    ],
    content: `CONTRATO DE RETAINER

CONTRATADO: [PRESTADOR_NOME], CPF [PRESTADOR_CPF]
CONTRATANTE: [CLIENTE_NOME], CPF/CNPJ [CLIENTE_DOCUMENTO]

1. DO OBJETO
Prestação contínua de serviços de: [SERVICO_DESCRICAO]

2. DAS HORAS CONTRATADAS
[b] retainer_horas] horas mensais de serviços.

3. DO VALOR
Valor mensal: R$ [RETAINER_VALOR]
Pagamento até o dia 10 de cada mês.

4. DA VIGÊNCIA
Período de [VIGENCIA_MESES] meses, com início em [DATA_INICIO].
Renovação automática por igual período, salvo aviso prévio de 30 dias.

5. DA RESCISÃO
Qualquer parte pode rescindir mediante aviso prévio de 30 dias.

[DATA_INICIO]

______________________________
[PRESTADOR_NOME]

______________________________
[CLIENTE_NOME]`,
  },
  {
    id: 'ndah-contrato',
    name: 'NDA - Acordo de Confidencialidade',
    description: 'Acordo de não divulgação para proteger informações confidenciais.',
    category: 'NDA e Confidencialidade',
    planType: 'basic',
    price: 19,
    fields: [
      { name: 'revelador_nome', label: 'Nome da Parte Reveladora', type: 'text', required: true },
      { name: 'revelador_documento', label: 'CPF ou CNPJ', type: 'text', required: true },
      { name: 'receptor_nome', label: 'Nome da Parte Receptora', type: 'text', required: true },
      { name: 'receptor_documento', label: 'CPF ou CNPJ', type: 'text', required: true },
      { name: 'informacoes_descricao', label: 'Descrição das Informações Confidenciais', type: 'textarea', required: true },
      { name: 'vigencia_meses', label: 'Vigência (meses)', type: 'number', required: true },
      { name: 'data_assinatura', label: 'Data de Assinatura', type: 'date', required: true },
    ],
    content: `ACORDO DE CONFIDENCIALIDADE (NDA)

REVELADORA: [REVELADOR_NOME], [REVELADOR_DOCUMENTO]
RECEPTORA: [RECEPTOR_NOME], [RECEPTOR_DOCUMENTO]

1. DAS INFORMAÇÕES CONFIDENCIAIS
São consideradas confidenciais as seguintes informações:
[INFORMACOES_DESCRICAO]

2. DAS OBRIGAÇÕES DA PARTE RECEPTORA
- Manter sigilo sobre todas as informações compartilhadas
- Não copiar, reproduzir ou transmitir as informações a terceiros
- Utilizar as informações exclusivamente para o propósito acordado

3. DA VIGÊNCIA
Este acordo tem vigência de [VIGENCIA_MESES] meses a partir de [DATA_ASSINATURA].

4. DA VIOLAÇÃO
Em caso de violação deste acordo, a parte reveladora poderá buscar as medidas judiciais cabíveis.

[DATA_ASSINATURA]

______________________________
[REVELADOR_NOME]

______________________________
[RECEPTOR_NOME]`,
  },
];

export function getTemplatesByPlan(planType: 'basic' | 'pro') {
  return TEMPLATES.filter(t => t.planType === planType);
}

export function getTemplateById(id: string) {
  return TEMPLATES.find(t => t.id === id) || null;
}

export function renderTemplate(template: typeof TEMPLATES[0], formData: Record<string, string>) {
  let content = template.content;
  for (const [key, value] of Object.entries(formData)) {
    const placeholder = `[${key.toUpperCase()}]`;
    content = content.replace(new RegExp(placeholder, 'g'), value || '[não informado]');
  }
  return content;
}