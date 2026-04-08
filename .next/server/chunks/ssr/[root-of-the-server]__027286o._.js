module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},6956,(a,b,c)=>{b.exports=a.r(18622)},47233,a=>{a.n(a.i(54652))},12371,a=>{a.n(a.i(94995))},34174,a=>{a.n(a.i(98462))},42086,a=>{a.n(a.i(7774))},80502,a=>{a.n(a.i(87724))},29002,a=>{a.n(a.i(91276))},64265,a=>{a.n(a.i(35058))},86090,a=>{a.n(a.i(60197))},74531,a=>{a.n(a.i(41528))},23943,a=>{a.n(a.i(78267))},55488,a=>{a.n(a.i(97149))},52054,a=>{a.n(a.i(44299))},91734,a=>{a.n(a.i(95938))},83807,a=>{a.n(a.i(88677))},84891,a=>{a.n(a.i(53271))},69637,a=>{a.n(a.i(71114))},75074,a=>{a.n(a.i(3362))},85648,a=>{a.n(a.i(23941))},82974,a=>{a.n(a.i(89787))},52975,a=>{a.n(a.i(22116))},19217,a=>{a.n(a.i(67139))},18882,a=>{a.n(a.i(11551))},10407,a=>{a.n(a.i(59357))},50189,a=>{a.n(a.i(99351))},87968,a=>{a.n(a.i(30880))},18947,a=>{a.n(a.i(58637))},49759,a=>{a.n(a.i(67738))},16711,a=>{a.n(a.i(10249))},12768,a=>{a.n(a.i(36715))},60517,a=>{a.n(a.i(7492))},1085,a=>{a.n(a.i(637))},3002,a=>{a.n(a.i(12988))},62589,a=>{a.n(a.i(91314))},46464,(a,b,c)=>{"use strict";function d(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(d=function(a){return a?c:b})(a)}c._=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=d(b);if(c&&c.has(a))return c.get(a);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=f?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(e,g,h):e[g]=a[g]}return e.default=a,c&&c.set(a,e),e}},40064,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(45638);a.n(d("[project]/workspaces/4b8fc867-30e0-4537-88b1-31d717c188a7/workspace/contrato-express/node_modules/next/dist/client/app-dir/link.js <module evaluation>"))},20756,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(45638);a.n(d("[project]/workspaces/4b8fc867-30e0-4537-88b1-31d717c188a7/workspace/contrato-express/node_modules/next/dist/client/app-dir/link.js"))},31043,a=>{"use strict";a.i(40064);var b=a.i(20756);a.n(b)},34515,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return i},useLinkStatus:function(){return h.useLinkStatus}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(46464),g=a.r(56089),h=f._(a.r(31043));function i(a){let b=a.legacyBehavior,c="string"==typeof a.children||"number"==typeof a.children||"string"==typeof a.children?.type,d=a.children?.type?.$$typeof===Symbol.for("react.client.reference");return!b||c||d||(a.children?.type?.$$typeof===Symbol.for("react.lazy")?console.error("Using a Lazy Component as a direct child of `<Link legacyBehavior>` from a Server Component is not supported. If you need legacyBehavior, wrap your Lazy Component in a Client Component that renders the Link's `<a>` tag."):console.error("Using a Server Component as a direct child of `<Link legacyBehavior>` is not supported. If you need legacyBehavior, wrap your Server Component in a Client Component that renders the Link's `<a>` tag.")),(0,g.jsx)(h.default,{...a})}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},65287,a=>{"use strict";let b=[{id:"prestador-servicos",name:"Contrato de Prestação de Serviços",description:"Contrato geral para prestação de serviços entre prestador e contratante.",category:"Contratos Gerais",planType:"basic",price:19,fields:[{name:"prestador_nome",label:"Nome do Prestador",type:"text",required:!0},{name:"prestador_cpf",label:"CPF do Prestador",type:"cpf",required:!0},{name:"prestador_endereco",label:"Endereço do Prestador",type:"text",required:!0},{name:"contratante_nome",label:"Nome do Contratante",type:"text",required:!0},{name:"contratante_cnpj",label:"CNPJ do Contratante",type:"cnpj",required:!0},{name:"contratante_endereco",label:"Endereço do Contratante",type:"text",required:!0},{name:"servico_descricao",label:"Descrição do Serviço",type:"textarea",required:!0},{name:"servico_valor",label:"Valor do Serviço (R$)",type:"currency",required:!0},{name:"servico_prazo",label:"Prazo de Entrega",type:"text",required:!0},{name:"data_inicio",label:"Data de Início",type:"date",required:!0}],content:`CONTRATO DE PRESTA\xc7\xc3O DE SERVI\xc7OS

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
[RECEPTOR_NOME]`}];a.s(["TEMPLATES",0,b,"getTemplateById",0,function(a){return b.find(b=>b.id===a)||null}])},19230,a=>{"use strict";var b=a.i(56089),c=a.i(34515),d=a.i(65287);a.s(["default",0,function({params:a,searchParams:e}){let f=(0,d.getTemplateById)(a.templateId),g=e.paymentId;return(0,b.jsx)("div",{className:"min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center px-4",children:(0,b.jsxs)("div",{className:"max-w-md w-full text-center",children:[(0,b.jsx)("div",{className:"w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6",children:(0,b.jsx)("svg",{className:"w-8 h-8 text-green-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),(0,b.jsx)("h1",{className:"text-2xl font-bold text-slate-900 mb-4",children:"Pagamento iniciado!"}),(0,b.jsx)("p",{className:"text-slate-600 mb-6",children:"O QR Code PIX foi gerado. Complete o pagamento no app do seu banco para receber o contrato por email."}),f&&(0,b.jsxs)("div",{className:"bg-white rounded-xl border border-purple-100 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-medium text-slate-900",children:f.name}),(0,b.jsxs)("p",{className:"text-sm text-slate-500",children:["R$ ",f.price]})]}),(0,b.jsxs)("div",{className:"bg-slate-100 rounded-xl p-4 mb-6 text-left",children:[(0,b.jsxs)("p",{className:"text-sm text-slate-600",children:[(0,b.jsx)("strong",{children:"Payment ID:"})," ",g||"N/A"]}),(0,b.jsx)("p",{className:"text-xs text-slate-400 mt-2",children:"Em modo sandbox, o pagamento não será processado automaticamente."})]}),(0,b.jsx)(c.default,{href:"/app",className:"block w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition",children:"Acompanhar Meus Contratos"}),(0,b.jsx)(c.default,{href:"/templates",className:"block mt-3 text-purple-600 hover:text-purple-700 text-sm font-medium",children:"Gerar mais contratos"})]})})}])},34649,a=>{a.n(a.i(19230))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__027286o._.js.map