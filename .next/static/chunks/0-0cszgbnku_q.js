(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,41049,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={formatUrl:function(){return i},formatWithValidation:function(){return d},urlObjectKeys:function(){return l}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let n=e.r(9426)._(e.r(21663)),s=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:r}=e,a=e.protocol||"",o=e.pathname||"",i=e.hash||"",l=e.query||"",d=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?d=t+e.host:r&&(d=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(d+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let c=e.search||l&&`?${l}`||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||s.test(a))&&!1!==d?(d="//"+(d||""),o&&"/"!==o[0]&&(o="/"+o)):d||(d=""),i&&"#"!==i[0]&&(i="#"+i),c&&"?"!==c[0]&&(c="?"+c),o=o.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${a}${d}${o}${c}${i}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function d(e){return i(e)}},3715,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let a=e.r(58337);function o(e,t){let r=(0,a.useRef)(null),o=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=n(e,a)),t&&(o.current=n(t,a))},[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},55033,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return n}});let a=e.r(79419),o=e.r(83473);function n(e){if(!(0,a.isAbsoluteUrl)(e))return!0;try{let t=(0,a.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},36525,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},73339,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return E},useLinkStatus:function(){return h}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let n=e.r(9426),s=e.r(57472),i=n._(e.r(58337)),l=e.r(41049),d=e.r(589),c=e.r(3715),p=e.r(79419),_=e.r(24862);e.r(9901);let u=e.r(16828),m=e.r(23109),x=e.r(55033),f=e.r(22050);function E(t){var r,a;let o,n,E,[h,b]=(0,i.useOptimistic)(m.IDLE_LINK_STATUS),N=(0,i.useRef)(null),{href:R,as:C,children:A,prefetch:y=null,passHref:T,replace:v,shallow:P,scroll:g,onClick:S,onMouseEnter:D,onTouchStart:j,legacyBehavior:I=!1,onNavigate:L,transitionTypes:M,ref:q,unstable_dynamicOnHover:F,...w}=t;o=A,I&&("string"==typeof o||"number"==typeof o)&&(o=(0,s.jsx)("a",{children:o}));let U=i.default.useContext(d.AppRouterContext),V=!1!==y,k=!1!==y?null===(a=y)||"auto"===a?f.FetchStrategy.PPR:f.FetchStrategy.Full:f.FetchStrategy.PPR,z="string"==typeof(r=C||R)?r:(0,l.formatUrl)(r);if(I){if(o?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=i.default.Children.only(o)}let J=I?n&&"object"==typeof n&&n.ref:q,$=i.default.useCallback(e=>(null!==U&&(N.current=(0,m.mountLinkInstance)(e,z,U,k,V,b)),()=>{N.current&&((0,m.unmountLinkForCurrentNavigation)(N.current),N.current=null),(0,m.unmountPrefetchableInstance)(e)}),[V,z,U,k,b]),B={ref:(0,c.useMergedRef)($,J),onClick(t){I||"function"!=typeof S||S(t),I&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(t),!U||t.defaultPrevented||function(t,r,a,o,n,s,l){if("u">typeof window){let d,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((d=t.currentTarget.getAttribute("target"))&&"_self"!==d||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,x.isLocalURL)(r)){o&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:p}=e.r(57509);i.default.startTransition(()=>{p(r,o?"replace":"push",!1===n?u.ScrollBehavior.NoScroll:u.ScrollBehavior.Default,a.current,l)})}}(t,z,N,v,g,L,M)},onMouseEnter(e){I||"function"!=typeof D||D(e),I&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),U&&V&&(0,m.onNavigationIntent)(e.currentTarget,!0===F)},onTouchStart:function(e){I||"function"!=typeof j||j(e),I&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),U&&V&&(0,m.onNavigationIntent)(e.currentTarget,!0===F)}};return(0,p.isAbsoluteUrl)(z)?B.href=z:I&&!T&&("a"!==n.type||"href"in n.props)||(B.href=(0,_.addBasePath)(z)),E=I?i.default.cloneElement(n,B):(0,s.jsx)("a",{...w,...B,children:o}),(0,s.jsx)(O.Provider,{value:h,children:E})}e.r(36525);let O=(0,i.createContext)(m.IDLE_LINK_STATUS),h=()=>(0,i.useContext)(O);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},57893,(e,t,r)=>{t.exports=e.r(44735)},40709,e=>{"use strict";var t=e.i(57472),r=e.i(58337),a=e.i(73339),o=e.i(57893);let n=[{id:"prestador-servicos",name:"Contrato de Prestação de Serviços",description:"Contrato geral para prestação de serviços entre prestador e contratante.",category:"Contratos Gerais",planType:"basic",price:19,fields:[{name:"prestador_nome",label:"Nome do Prestador",type:"text",required:!0},{name:"prestador_cpf",label:"CPF do Prestador",type:"cpf",required:!0},{name:"prestador_endereco",label:"Endereço do Prestador",type:"text",required:!0},{name:"contratante_nome",label:"Nome do Contratante",type:"text",required:!0},{name:"contratante_cnpj",label:"CNPJ do Contratante",type:"cnpj",required:!0},{name:"contratante_endereco",label:"Endereço do Contratante",type:"text",required:!0},{name:"servico_descricao",label:"Descrição do Serviço",type:"textarea",required:!0},{name:"servico_valor",label:"Valor do Serviço (R$)",type:"currency",required:!0},{name:"servico_prazo",label:"Prazo de Entrega",type:"text",required:!0},{name:"data_inicio",label:"Data de Início",type:"date",required:!0}],content:`CONTRATO DE PRESTA\xc7\xc3O DE SERVI\xc7OS

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
[RECEPTOR_NOME]`}];e.s(["default",0,function({params:e}){var s;let i=(0,o.useRouter)(),l=(s=e.templateId,n.find(e=>e.id===s)||null),[d,c]=(0,r.useState)({}),[p,_]=(0,r.useState)(!1),[u,m]=(0,r.useState)(""),[x,f]=(0,r.useState)("");if(!l)return(0,t.jsx)("div",{className:"min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center",children:(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("h1",{className:"text-2xl font-bold text-slate-900 mb-4",children:"Template não encontrado"}),(0,t.jsx)(a.default,{href:"/templates",className:"text-purple-600 hover:text-purple-700",children:"Voltar aos templates"})]})});let E=(e,t)=>{c(r=>({...r,[e]:t}))},O=async()=>{_(!0),f("");try{let e=await fetch("/api/templates",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({templateId:l.id,formData:d})});if(e.ok){let t=await e.json();m(t.content)}else f("Erro ao gerar preview")}catch{f("Erro de conexão")}finally{_(!1)}},h=async()=>{_(!0),f("");try{let e=await fetch("/api/checkout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({templateId:l.id,formData:d,planType:l.planType,amount:l.price}),credentials:"include"});if(e.ok){let t=await e.json();t.encodedImage?i.push(`/checkout/${l.id}?paymentId=${t.paymentId}`):f("QR Code não disponível em modo sandbox")}else f("Erro ao iniciar checkout")}catch{f("Erro de conexão")}finally{_(!1)}};return(0,t.jsxs)("div",{className:"min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50",children:[(0,t.jsx)("header",{className:"sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100",children:(0,t.jsxs)("div",{className:"max-w-6xl mx-auto px-6 py-4 flex items-center justify-between",children:[(0,t.jsxs)(a.default,{href:"/",className:"flex items-center gap-2",children:[(0,t.jsx)("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center",children:(0,t.jsx)("svg",{className:"w-5 h-5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),(0,t.jsx)("span",{className:"font-bold text-slate-900",children:"Contrato Express"})]}),(0,t.jsxs)("nav",{className:"flex items-center gap-4",children:[(0,t.jsx)(a.default,{href:"/templates",className:"text-slate-600 hover:text-purple-600 text-sm font-medium",children:"Templates"}),(0,t.jsx)(a.default,{href:"/pricing",className:"text-slate-600 hover:text-purple-600 text-sm font-medium",children:"Preços"})]})]})}),(0,t.jsxs)("main",{className:"max-w-5xl mx-auto px-6 py-12",children:[(0,t.jsxs)("div",{className:"mb-8",children:[(0,t.jsx)(a.default,{href:"/templates",className:"text-sm text-purple-600 hover:text-purple-700 flex items-center gap-1 mb-4",children:"← Voltar aos templates"}),(0,t.jsxs)("div",{className:"flex items-start justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:`text-xs font-medium px-2 py-1 rounded-full ${"basic"===l.planType?"bg-purple-50 text-purple-600":"bg-pink-50 text-pink-600"}`,children:l.planType.toUpperCase()}),(0,t.jsx)("h1",{className:"text-2xl font-bold text-slate-900 mt-3",children:l.name}),(0,t.jsx)("p",{className:"text-slate-500 mt-1",children:l.description})]}),(0,t.jsxs)("div",{className:"text-right",children:[(0,t.jsxs)("span",{className:"text-2xl font-bold text-slate-900",children:["R$ ",l.price]}),(0,t.jsx)("p",{className:"text-sm text-slate-500",children:"por contrato"})]})]})]}),(0,t.jsxs)("div",{className:"grid lg:grid-cols-2 gap-8",children:[(0,t.jsxs)("div",{className:"bg-white rounded-2xl shadow-sm border border-purple-100 p-6",children:[(0,t.jsx)("h2",{className:"font-semibold text-slate-900 mb-4",children:"Preencha os dados"}),(0,t.jsxs)("div",{className:"space-y-4",children:[l.fields.map(e=>(0,t.jsxs)("div",{children:[(0,t.jsxs)("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:[e.label,e.required&&(0,t.jsx)("span",{className:"text-red-500 ml-1",children:"*"})]}),"textarea"===e.type?(0,t.jsx)("textarea",{value:d[e.name]||"",onChange:t=>E(e.name,t.target.value),rows:3,className:"w-full px-4 py-3 bg-white border border-purple-200 rounded-xl focus:outline-none focus:border-purple-500 resize-none"}):(0,t.jsx)("input",{type:"date"===e.type?"date":"number"===e.type?"number":"text",value:d[e.name]||"",onChange:t=>E(e.name,t.target.value),placeholder:e.label,className:"w-full px-4 py-3 bg-white border border-purple-200 rounded-xl focus:outline-none focus:border-purple-500"})]},e.name)),x&&(0,t.jsx)("div",{className:"p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm",children:x}),(0,t.jsxs)("div",{className:"flex gap-3 pt-2",children:[(0,t.jsx)("button",{onClick:O,disabled:p,className:"flex-1 py-3 bg-white border border-purple-200 text-purple-700 font-semibold rounded-xl hover:border-purple-300 transition disabled:opacity-50",children:p?"Gerando...":"Ver Preview"}),(0,t.jsx)("button",{onClick:h,disabled:p,className:"flex-1 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition disabled:opacity-50",children:p?"Processando...":`Gerar por R$ ${l.price}`})]})]})]}),(0,t.jsxs)("div",{className:"bg-white rounded-2xl shadow-sm border border-purple-100 p-6",children:[(0,t.jsx)("h2",{className:"font-semibold text-slate-900 mb-4",children:"Preview do Contrato"}),(0,t.jsx)("div",{className:"bg-slate-50 rounded-xl p-6 min-h-[400px]",children:u?(0,t.jsx)("pre",{className:"text-sm text-slate-700 whitespace-pre-wrap font-sans",children:u}):(0,t.jsx)("p",{className:"text-slate-400 text-center py-12",children:'Preencha os campos e clique em "Ver Preview" para visualizar o contrato.'})})]})]})]})]})}],40709)}]);