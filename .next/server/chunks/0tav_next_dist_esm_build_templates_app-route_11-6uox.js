module.exports=[88716,e=>{"use strict";var a=e.i(22698),t=e.i(3308),r=e.i(90173),o=e.i(90606),n=e.i(98517),i=e.i(76038),s=e.i(20248),d=e.i(24134),_=e.i(82803),l=e.i(48170),c=e.i(2534),p=e.i(63926),u=e.i(64995),E=e.i(41422),R=e.i(32961),m=e.i(93695);e.i(27456);var O=e.i(46387),A=e.i(39228);let x=[{id:"prestador-servicos",name:"Contrato de Prestação de Serviços",description:"Contrato geral para prestação de serviços entre prestador e contratante.",category:"Contratos Gerais",planType:"basic",price:19,fields:[{name:"prestador_nome",label:"Nome do Prestador",type:"text",required:!0},{name:"prestador_cpf",label:"CPF do Prestador",type:"cpf",required:!0},{name:"prestador_endereco",label:"Endereço do Prestador",type:"text",required:!0},{name:"contratante_nome",label:"Nome do Contratante",type:"text",required:!0},{name:"contratante_cnpj",label:"CNPJ do Contratante",type:"cnpj",required:!0},{name:"contratante_endereco",label:"Endereço do Contratante",type:"text",required:!0},{name:"servico_descricao",label:"Descrição do Serviço",type:"textarea",required:!0},{name:"servico_valor",label:"Valor do Serviço (R$)",type:"currency",required:!0},{name:"servico_prazo",label:"Prazo de Entrega",type:"text",required:!0},{name:"data_inicio",label:"Data de Início",type:"date",required:!0}],content:`CONTRATO DE PRESTA\xc7\xc3O DE SERVI\xc7OS

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
[RECEPTOR_NOME]`}];async function C(e){let{searchParams:a}=new URL(e.url),t=a.get("plan")||"basic",r=x.filter(e=>e.planType===t);return A.NextResponse.json({templates:r})}async function N(e){try{let{templateId:a,formData:t}=await e.json(),r=x.find(e=>e.id===a)||null;if(!r)return A.NextResponse.json({error:"Template não encontrado"},{status:404});let o=function(e,a){let t=e.content;for(let[e,r]of Object.entries(a)){let a=`[${e.toUpperCase()}]`;t=t.replace(RegExp(a,"g"),r||"[não informado]")}return t}(r,t);return A.NextResponse.json({content:o,templateId:a,templateName:r.name})}catch(e){return console.error("Template render error:",e),A.NextResponse.json({error:"Erro ao renderizar template"},{status:500})}}e.s(["GET",0,C,"POST",0,N],72223);var T=e.i(72223);let P=new a.AppRouteRouteModule({definition:{kind:t.RouteKind.APP_ROUTE,page:"/api/templates/route",pathname:"/api/templates",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/workspaces/4b8fc867-30e0-4537-88b1-31d717c188a7/workspace/contrato-express/src/app/api/templates/route.ts",nextConfigOutput:"",userland:T,...{}}),{workAsyncStorage:D,workUnitAsyncStorage:v,serverHooks:f}=P;async function S(e,a,r){r.requestMeta&&(0,o.setRequestMeta)(e,r.requestMeta),P.isDev&&(0,o.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let A="/api/templates/route";A=A.replace(/\/index$/,"")||"/";let x=await P.prepare(e,a,{srcPage:A,multiZoneDraftMode:!1});if(!x)return a.statusCode=400,a.end("Bad Request"),null==r.waitUntil||r.waitUntil.call(r,Promise.resolve()),null;let{buildId:C,params:N,nextConfig:T,parsedUrl:D,isDraftMode:v,prerenderManifest:f,routerServerContext:S,isOnDemandRevalidate:I,revalidateOnlyGenerated:b,resolvedPathname:h,clientReferenceManifest:y,serverActionsManifest:g}=x,q=(0,s.normalizeAppPath)(A),M=!!(f.dynamicRoutes[q]||f.routes[h]),L=async()=>((null==S?void 0:S.render404)?await S.render404(e,a,D,!1):a.end("This page could not be found"),null);if(M&&!v){let e=!!f.routes[h],a=f.dynamicRoutes[q];if(a&&!1===a.fallback&&!e){if(T.adapterPath)return await L();throw new m.NoFallbackError}}let F=null;!M||P.isDev||v||(F="/index"===(F=h)?"/":F);let w=!0===P.isDev||!M,U=M&&!w;g&&y&&(0,i.setManifestsSingleton)({page:A,clientReferenceManifest:y,serverActionsManifest:g});let j=e.method||"GET",V=(0,n.getTracer)(),J=V.getActiveScopeSpan(),z=!!(null==S?void 0:S.isWrappedByNextServer),H=!!(0,o.getRequestMeta)(e,"minimalMode"),$=(0,o.getRequestMeta)(e,"incrementalCache")||await P.getIncrementalCache(e,T,f,H);null==$||$.resetRequestCache(),globalThis.__incrementalCache=$;let k={params:N,previewProps:f.preview,renderOpts:{experimental:{authInterrupts:!!T.experimental.authInterrupts},cacheComponents:!!T.cacheComponents,supportsDynamicResponse:w,incrementalCache:$,cacheLifeProfiles:T.cacheLife,waitUntil:r.waitUntil,onClose:e=>{a.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(a,t,r,o)=>P.onRequestError(e,a,r,o,S)},sharedContext:{buildId:C}},G=new d.NodeNextRequest(e),B=new d.NodeNextResponse(a),K=_.NextRequestAdapter.fromNodeNextRequest(G,(0,_.signalFromNodeResponse)(a));try{let o,i=async e=>P.handle(K,k).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":a.statusCode,"next.rsc":!1});let t=V.getRootSpanAttributes();if(!t)return;if(t.get("next.span_type")!==l.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${t.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let r=t.get("next.route");if(r){let a=`${j} ${r}`;e.setAttributes({"next.route":r,"http.route":r,"next.span_name":a}),e.updateName(a),o&&o!==e&&(o.setAttribute("http.route",r),o.updateName(a))}else e.updateName(`${j} ${A}`)}),s=async o=>{var n,s;let d=async({previousCacheEntry:t})=>{try{if(!H&&I&&b&&!t)return a.statusCode=404,a.setHeader("x-nextjs-cache","REVALIDATED"),a.end("This page could not be found"),null;let n=await i(o);e.fetchMetrics=k.renderOpts.fetchMetrics;let s=k.renderOpts.pendingWaitUntil;s&&r.waitUntil&&(r.waitUntil(s),s=void 0);let d=k.renderOpts.collectedTags;if(!M)return await (0,p.sendResponse)(G,B,n,k.renderOpts.pendingWaitUntil),null;{let e=await n.blob(),a=(0,u.toNodeOutgoingHttpHeaders)(n.headers);d&&(a[R.NEXT_CACHE_TAGS_HEADER]=d),!a["content-type"]&&e.type&&(a["content-type"]=e.type);let t=void 0!==k.renderOpts.collectedRevalidate&&!(k.renderOpts.collectedRevalidate>=R.INFINITE_CACHE)&&k.renderOpts.collectedRevalidate,r=void 0===k.renderOpts.collectedExpire||k.renderOpts.collectedExpire>=R.INFINITE_CACHE?void 0:k.renderOpts.collectedExpire;return{value:{kind:O.CachedRouteKind.APP_ROUTE,status:n.status,body:Buffer.from(await e.arrayBuffer()),headers:a},cacheControl:{revalidate:t,expire:r}}}}catch(a){throw(null==t?void 0:t.isStale)&&await P.onRequestError(e,a,{routerKind:"App Router",routePath:A,routeType:"route",revalidateReason:(0,c.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:I})},!1,S),a}},_=await P.handleResponse({req:e,nextConfig:T,cacheKey:F,routeKind:t.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:f,isRoutePPREnabled:!1,isOnDemandRevalidate:I,revalidateOnlyGenerated:b,responseGenerator:d,waitUntil:r.waitUntil,isMinimalMode:H});if(!M)return null;if((null==_||null==(n=_.value)?void 0:n.kind)!==O.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==_||null==(s=_.value)?void 0:s.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});H||a.setHeader("x-nextjs-cache",I?"REVALIDATED":_.isMiss?"MISS":_.isStale?"STALE":"HIT"),v&&a.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let l=(0,u.fromNodeOutgoingHttpHeaders)(_.value.headers);return H&&M||l.delete(R.NEXT_CACHE_TAGS_HEADER),!_.cacheControl||a.getHeader("Cache-Control")||l.get("Cache-Control")||l.set("Cache-Control",(0,E.getCacheControlHeader)(_.cacheControl)),await (0,p.sendResponse)(G,B,new Response(_.value.body,{headers:l,status:_.value.status||200})),null};z&&J?await s(J):(o=V.getActiveScopeSpan(),await V.withPropagatedContext(e.headers,()=>V.trace(l.BaseServerSpan.handleRequest,{spanName:`${j} ${A}`,kind:n.SpanKind.SERVER,attributes:{"http.method":j,"http.target":e.url}},s),void 0,!z))}catch(a){if(a instanceof m.NoFallbackError||await P.onRequestError(e,a,{routerKind:"App Router",routePath:q,routeType:"route",revalidateReason:(0,c.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:I})},!1,S),M)throw a;return await (0,p.sendResponse)(G,B,new Response(null,{status:500})),null}}e.s(["handler",0,S,"patchFetch",0,function(){return(0,r.patchFetch)({workAsyncStorage:D,workUnitAsyncStorage:v})},"routeModule",0,P,"serverHooks",0,f,"workAsyncStorage",0,D,"workUnitAsyncStorage",0,v],88716)}];

//# sourceMappingURL=0tav_next_dist_esm_build_templates_app-route_11-6uox.js.map