module.exports=[34026,(a,b,c)=>{"use strict";function d(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(d=function(a){return a?c:b})(a)}c._=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=d(b);if(c&&c.has(a))return c.get(a);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=f?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(e,g,h):e[g]=a[g]}return e.default=a,c&&c.set(a,e),e}},50550,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"InvariantError",{enumerable:!0,get:function(){return d}});class d extends Error{constructor(a,b){super(`Invariant: ${a.endsWith(".")?a:a+"."} This is a bug in Next.js.`,b),this.name="InvariantError"}}},77712,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={DEFAULT_SEGMENT_KEY:function(){return l},NOT_FOUND_SEGMENT_KEY:function(){return m},PAGE_SEGMENT_KEY:function(){return k},addSearchParamsIfPageSegment:function(){return i},computeSelectedLayoutSegment:function(){return j},getSegmentValue:function(){return f},getSelectedLayoutSegmentPath:function(){return function a(b,c,d=!0,e=[]){let g;if(d)g=b[1][c];else{let a=b[1];g=a.children??Object.values(a)[0]}if(!g)return e;let h=f(g[0]);return!h||h.startsWith(k)?e:(e.push(h),a(g,c,!1,e))}},isGroupSegment:function(){return g},isParallelRouteSegment:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});function f(a){return Array.isArray(a)?a[1]:a}function g(a){return"("===a[0]&&a.endsWith(")")}function h(a){return a.startsWith("@")&&"@children"!==a}function i(a,b){if(a.includes(k)){let a=JSON.stringify(b);return"{}"!==a?k+"?"+a:k}return a}function j(a,b){if(!a||0===a.length)return null;let c="children"===b?a[0]:a[a.length-1];return c===l?null:c}let k="__PAGE__",l="__DEFAULT__",m="/_not-found"},44807,(a,b,c)=>{"use strict";function d(){let a,b,c=new Promise((c,d)=>{a=c,b=d});return{resolve:a,reject:b,promise:c}}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"createPromiseWithResolvers",{enumerable:!0,get:function(){return d}})},81873,a=>{"use strict";var b=a.i(82724),c=a.i(65378),d=a.i(12824),e=a.i(43675);let f=[{id:"prestador-servicos",name:"Contrato de Prestação de Serviços",description:"Contrato geral para prestação de serviços entre prestador e contratante.",category:"Contratos Gerais",planType:"basic",price:19,fields:[{name:"prestador_nome",label:"Nome do Prestador",type:"text",required:!0},{name:"prestador_cpf",label:"CPF do Prestador",type:"cpf",required:!0},{name:"prestador_endereco",label:"Endereço do Prestador",type:"text",required:!0},{name:"contratante_nome",label:"Nome do Contratante",type:"text",required:!0},{name:"contratante_cnpj",label:"CNPJ do Contratante",type:"cnpj",required:!0},{name:"contratante_endereco",label:"Endereço do Contratante",type:"text",required:!0},{name:"servico_descricao",label:"Descrição do Serviço",type:"textarea",required:!0},{name:"servico_valor",label:"Valor do Serviço (R$)",type:"currency",required:!0},{name:"servico_prazo",label:"Prazo de Entrega",type:"text",required:!0},{name:"data_inicio",label:"Data de Início",type:"date",required:!0}],content:`CONTRATO DE PRESTA\xc7\xc3O DE SERVI\xc7OS

Por este instrumento particular, [PRESTADOR_NOME], portador(a) do CPF [PRESTADOR_CPF], residente e domiciliado(a) em [PRESTADOR_ENDERECO], daqui por diante denominado(a) PRESTADOR(A), e [CONTRATANTE_NOME], pessoa jur\xeddica, portadora do CNPJ [CONTRATANTE_CNPJ], com sede em [CONTRATANTE_ENDERECO], daqui por diante denominada CONTRATANTE, t\xeam entre si justo e acordado o seguinte:

CL\xc1USULA 1\xaa - DO OBJETO
O presente contrato tem por objeto a presta\xe7\xe3o dos seguintes servi\xe7os: [SERVICO_DESCRICAO]

CL\xc1USULA 2\xaa - DO VALOR E FORMA DE PAGAMENTO
O valor total dos servi\xe7os contratados \xe9 de R$ [SERVICO_VALOR], a serem pagos conforme acordado entre as partes.

CL\xc1USULA 3\xaa - DO PRAZO
O servi\xe7o dever\xe1 ser prestado no prazo de [SERVICO_PRAZO], com in\xedcio em [DATA_INICIO].

CL\xc1USULA 4\xaa - DAS OBRIGA\xc7\xd5ES DO(A) PRESTADOR(A)
a) Realizar os servi\xe7os com dedica\xe7\xe3o e esmero;
b) Manter sigilo sobre informa\xe7\xf5es confidenciais;
c) Entregar o trabalho no prazo acordado.

CL\xc1USULA 5\xaa - DAS OBRIGA\xc7\xd5ES DA CONTRATANTE
a) Efetuar o pagamento no prazo acordado;
b) Fornecer informa\xe7\xf5es e materiais necess\xe1rios para a execu\xe7\xe3o dos servi\xe7os.

CL\xc1USULA 6\xaa - DO RESCIS\xc3O
Qualquer das partes poder\xe1 rescindir o presente contrato, mediante aviso pr\xe9vio de 15 (quinze) dias, respeitadas as obriga\xe7\xf5es j\xe1 assumidas.

CL\xc1USULA 7\xaa - DO FORO
As partes elegem o foro da comarca de [PRESTADOR_ENDERECO] para dirimir quaisquer controv\xe9rsias.

E por estarem de pleno acordo, as partes assinam o presente instrumento em duas vias de igual teor.

[PRESTADOR_ENDERECO], [DATA_INICIO].

______________________________
[PRESTADOR_NOME]
CPF: [PRESTADOR_CPF]

______________________________
[CONTRATANTE_NOME]
CNPJ: [CONTRATANTE_CNPJ]`},{id:"freelancer",name:"Contrato Freelancer",description:"Contrato para trabalhos freelancers com definição clara de escopo e prazos.",category:"Trabalho Freelance",planType:"basic",price:19,fields:[{name:"freelancer_nome",label:"Nome do Freelancer",type:"text",required:!0},{name:"freelancer_cpf",label:"CPF do Freelancer",type:"cpf",required:!0},{name:"freelancer_email",label:"Email do Freelancer",type:"email",required:!0},{name:"cliente_nome",label:"Nome do Cliente",type:"text",required:!0},{name:"cliente_documento",label:"CPF ou CNPJ do Cliente",type:"text",required:!0},{name:"projeto_nome",label:"Nome do Projeto",type:"text",required:!0},{name:"projeto_escopo",label:"Escopo do Projeto",type:"textarea",required:!0},{name:"projeto_valor",label:"Valor do Projeto (R$)",type:"currency",required:!0},{name:"projeto_prazo",label:"Prazo de Entrega",type:"text",required:!0},{name:"data_inicio",label:"Data de Início",type:"date",required:!0}],content:`CONTRATO DE PRESTA\xc7\xc3O DE SERVI\xc7OS freelancer

IDENTIFICA\xc7\xc3O DAS PARTES

FREELANCER: [FREELANCER_NOME], CPF [FREELANCER_CPF], email [FREELANCER_EMAIL]

CLIENTE: [CLIENTE_NOME], CPF/CNPJ [CLIENTE_DOCUMENTO]

PROJETO: [PROJETO_NOME]

1. DO OBJETO
O presente contrato regula a presta\xe7\xe3o de servi\xe7os de [PROJETO_NOME], conforme escopo detalhado:
[PROJETO_ESCOPO]

2. DO VALOR
O valor total do projeto \xe9 de R$ [PROJETO_VALOR],pag\xe1veis conforme descrito neste contrato.

3. DO PRAZO
O projeto ter\xe1 prazo de entrega em [PROJETO_PRAZO], com in\xedcio em [DATA_INICIO].

4. DOS DIREITOS DO FREELANCER
- Autoriza\xe7\xe3o para mencionar o projeto no portf\xf3lio (com согласие do cliente)
- Recebimento integral do valor acordado
- Cr\xe9ditos pelo trabalho realizado

5. DOS DIREITOS DO CLIENTE
- Propriedade do produto final交付
- Revis\xf5es conforme acordado no escopo
- Entrega dentro do prazo

6. DA RESCIS\xc3O
Em caso de rescis\xe3o por iniciativa do cliente, todos os trabalhos realizados at\xe9 a data da rescis\xe3o dever\xe3o ser pagos integralmente.

[DATA_INICIO]

______________________________
[FREELANCER_NOME]

______________________________
[CLIENTE_NOME]`},{id:"retainer",name:"Contrato de Retainer",description:"Contrato de retainer para serviços continuados.",category:"Contratos de Retainer",planType:"pro",price:29,fields:[{name:"prestador_nome",label:"Nome do Prestador",type:"text",required:!0},{name:"prestador_cpf",label:"CPF do Prestador",type:"cpf",required:!0},{name:"cliente_nome",label:"Nome do Cliente",type:"text",required:!0},{name:"cliente_documento",label:"CPF ou CNPJ do Cliente",type:"text",required:!0},{name:"servico_descricao",label:"Descrição dos Serviços",type:"textarea",required:!0},{name:"retainer_horas",label:"Horas Mensais",type:"number",required:!0},{name:"retainer_valor",label:"Valor Mensal (R$)",type:"currency",required:!0},{name:"vigencia_meses",label:"Vigência (meses)",type:"number",required:!0},{name:"data_inicio",label:"Data de Início",type:"date",required:!0}],content:`CONTRATO DE RETAINER

CONTRATADO: [PRESTADOR_NOME], CPF [PRESTADOR_CPF]
CONTRATANTE: [CLIENTE_NOME], CPF/CNPJ [CLIENTE_DOCUMENTO]

1. DO OBJETO
Presta\xe7\xe3o cont\xednua de servi\xe7os de: [SERVICO_DESCRICAO]

2. DAS HORAS CONTRATADAS
[b] retainer_horas] horas mensais de servi\xe7os.

3. DO VALOR
Valor mensal: R$ [RETAINER_VALOR]
Pagamento at\xe9 o dia 10 de cada m\xeas.

4. DA VIG\xcaNCIA
Per\xedodo de [VIGENCIA_MESES] meses, com in\xedcio em [DATA_INICIO].
Renova\xe7\xe3o autom\xe1tica por igual per\xedodo, salvo aviso pr\xe9vio de 30 dias.

5. DA RESCIS\xc3O
Qualquer parte pode rescindir mediante aviso pr\xe9vio de 30 dias.

[DATA_INICIO]

______________________________
[PRESTADOR_NOME]

______________________________
[CLIENTE_NOME]`},{id:"ndah-contrato",name:"NDA - Acordo de Confidencialidade",description:"Acordo de não divulgação para proteger informações confidenciais.",category:"NDA e Confidencialidade",planType:"basic",price:19,fields:[{name:"revelador_nome",label:"Nome da Parte Reveladora",type:"text",required:!0},{name:"revelador_documento",label:"CPF ou CNPJ",type:"text",required:!0},{name:"receptor_nome",label:"Nome da Parte Receptora",type:"text",required:!0},{name:"receptor_documento",label:"CPF ou CNPJ",type:"text",required:!0},{name:"informacoes_descricao",label:"Descrição das Informações Confidenciais",type:"textarea",required:!0},{name:"vigencia_meses",label:"Vigência (meses)",type:"number",required:!0},{name:"data_assinatura",label:"Data de Assinatura",type:"date",required:!0}],content:`ACORDO DE CONFIDENCIALIDADE (NDA)

REVELADORA: [REVELADOR_NOME], [REVELADOR_DOCUMENTO]
RECEPTORA: [RECEPTOR_NOME], [RECEPTOR_DOCUMENTO]

1. DAS INFORMA\xc7\xd5ES CONFIDENCIAIS
S\xe3o consideradas confidenciais as seguintes informa\xe7\xf5es:
[INFORMACOES_DESCRICAO]

2. DAS OBRIGA\xc7\xd5ES DA PARTE RECEPTORA
- Manter sigilo sobre todas as informa\xe7\xf5es compartilhadas
- N\xe3o copiar, reproduzir ou transmitir as informa\xe7\xf5es a terceiros
- Utilizar as informa\xe7\xf5es exclusivamente para o prop\xf3sito acordado

3. DA VIG\xcaNCIA
Este acordo tem vig\xeancia de [VIGENCIA_MESES] meses a partir de [DATA_ASSINATURA].

4. DA VIOLA\xc7\xc3O
Em caso de viola\xe7\xe3o deste acordo, a parte reveladora poder\xe1 buscar as medidas judiciais cab\xedveis.

[DATA_ASSINATURA]

______________________________
[REVELADOR_NOME]

______________________________
[RECEPTOR_NOME]`}];a.s(["default",0,function({params:a}){var g;let h=(0,e.useRouter)(),i=(g=a.templateId,f.find(a=>a.id===g)||null),[j,k]=(0,c.useState)({}),[l,m]=(0,c.useState)(!1),[n,o]=(0,c.useState)(""),[p,q]=(0,c.useState)("");if(!i)return(0,b.jsx)("div",{className:"min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center",children:(0,b.jsxs)("div",{className:"text-center",children:[(0,b.jsx)("h1",{className:"text-2xl font-bold text-slate-900 mb-4",children:"Template não encontrado"}),(0,b.jsx)(d.default,{href:"/templates",className:"text-purple-600 hover:text-purple-700",children:"Voltar aos templates"})]})});let r=(a,b)=>{k(c=>({...c,[a]:b}))},s=async()=>{m(!0),q("");try{let a=await fetch("/api/templates",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({templateId:i.id,formData:j})});if(a.ok){let b=await a.json();o(b.content)}else q("Erro ao gerar preview")}catch{q("Erro de conexão")}finally{m(!1)}},t=async()=>{m(!0),q("");try{let a=await fetch("/api/checkout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({templateId:i.id,formData:j,planType:i.planType,amount:i.price}),credentials:"include"});if(a.ok){let b=await a.json();b.encodedImage?h.push(`/checkout/${i.id}?paymentId=${b.paymentId}`):q("QR Code não disponível em modo sandbox")}else q("Erro ao iniciar checkout")}catch{q("Erro de conexão")}finally{m(!1)}};return(0,b.jsxs)("div",{className:"min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50",children:[(0,b.jsx)("header",{className:"sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100",children:(0,b.jsxs)("div",{className:"max-w-6xl mx-auto px-6 py-4 flex items-center justify-between",children:[(0,b.jsxs)(d.default,{href:"/",className:"flex items-center gap-2",children:[(0,b.jsx)("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center",children:(0,b.jsx)("svg",{className:"w-5 h-5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),(0,b.jsx)("span",{className:"font-bold text-slate-900",children:"Contrato Express"})]}),(0,b.jsxs)("nav",{className:"flex items-center gap-4",children:[(0,b.jsx)(d.default,{href:"/templates",className:"text-slate-600 hover:text-purple-600 text-sm font-medium",children:"Templates"}),(0,b.jsx)(d.default,{href:"/pricing",className:"text-slate-600 hover:text-purple-600 text-sm font-medium",children:"Preços"})]})]})}),(0,b.jsxs)("main",{className:"max-w-5xl mx-auto px-6 py-12",children:[(0,b.jsxs)("div",{className:"mb-8",children:[(0,b.jsx)(d.default,{href:"/templates",className:"text-sm text-purple-600 hover:text-purple-700 flex items-center gap-1 mb-4",children:"← Voltar aos templates"}),(0,b.jsxs)("div",{className:"flex items-start justify-between",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:`text-xs font-medium px-2 py-1 rounded-full ${"basic"===i.planType?"bg-purple-50 text-purple-600":"bg-pink-50 text-pink-600"}`,children:i.planType.toUpperCase()}),(0,b.jsx)("h1",{className:"text-2xl font-bold text-slate-900 mt-3",children:i.name}),(0,b.jsx)("p",{className:"text-slate-500 mt-1",children:i.description})]}),(0,b.jsxs)("div",{className:"text-right",children:[(0,b.jsxs)("span",{className:"text-2xl font-bold text-slate-900",children:["R$ ",i.price]}),(0,b.jsx)("p",{className:"text-sm text-slate-500",children:"por contrato"})]})]})]}),(0,b.jsxs)("div",{className:"grid lg:grid-cols-2 gap-8",children:[(0,b.jsxs)("div",{className:"bg-white rounded-2xl shadow-sm border border-purple-100 p-6",children:[(0,b.jsx)("h2",{className:"font-semibold text-slate-900 mb-4",children:"Preencha os dados"}),(0,b.jsxs)("div",{className:"space-y-4",children:[i.fields.map(a=>(0,b.jsxs)("div",{children:[(0,b.jsxs)("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:[a.label,a.required&&(0,b.jsx)("span",{className:"text-red-500 ml-1",children:"*"})]}),"textarea"===a.type?(0,b.jsx)("textarea",{value:j[a.name]||"",onChange:b=>r(a.name,b.target.value),rows:3,className:"w-full px-4 py-3 bg-white border border-purple-200 rounded-xl focus:outline-none focus:border-purple-500 resize-none"}):(0,b.jsx)("input",{type:"date"===a.type?"date":"number"===a.type?"number":"text",value:j[a.name]||"",onChange:b=>r(a.name,b.target.value),placeholder:a.label,className:"w-full px-4 py-3 bg-white border border-purple-200 rounded-xl focus:outline-none focus:border-purple-500"})]},a.name)),p&&(0,b.jsx)("div",{className:"p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm",children:p}),(0,b.jsxs)("div",{className:"flex gap-3 pt-2",children:[(0,b.jsx)("button",{onClick:s,disabled:l,className:"flex-1 py-3 bg-white border border-purple-200 text-purple-700 font-semibold rounded-xl hover:border-purple-300 transition disabled:opacity-50",children:l?"Gerando...":"Ver Preview"}),(0,b.jsx)("button",{onClick:t,disabled:l,className:"flex-1 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition disabled:opacity-50",children:l?"Processando...":`Gerar por R$ ${i.price}`})]})]})]}),(0,b.jsxs)("div",{className:"bg-white rounded-2xl shadow-sm border border-purple-100 p-6",children:[(0,b.jsx)("h2",{className:"font-semibold text-slate-900 mb-4",children:"Preview do Contrato"}),(0,b.jsx)("div",{className:"bg-slate-50 rounded-xl p-6 min-h-[400px]",children:n?(0,b.jsx)("pre",{className:"text-sm text-slate-700 whitespace-pre-wrap font-sans",children:n}):(0,b.jsx)("p",{className:"text-slate-400 text-center py-12",children:'Preencha os campos e clique em "Ver Preview" para visualizar o contrato.'})})]})]})]})]})}],81873)}];

//# sourceMappingURL=0t9d_4b8fc867-30e0-4537-88b1-31d717c188a7_workspace_contrato-express_0o54huk._.js.map