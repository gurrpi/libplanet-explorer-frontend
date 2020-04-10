(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5,8],{319:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(386),c=t(182),i=t(357),u=t(377),o=t(373),s=t(363),d=t(358),m=t(359),E=function(e){var n=e.txs,t=[{key:"columnId",name:"Id",fieldName:"id",minWidth:50,maxWidth:300,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"string",isPadded:!0,onRender:function(e){var n=e.id;return r.a.createElement(l.a,{href:"../transaction/?"+n},n)}},{key:"columnSigner",name:"Signer",fieldName:"signer",minWidth:50,maxWidth:250,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!1,data:"string",isPadded:!0,onRender:function(e){var n=e.signer;return r.a.createElement(l.a,{href:"../account/?"+n},n)}},{key:"columnTimestamp",name:"Timestamp",fieldName:"timestamp",minWidth:50,maxWidth:200,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"string",isPadded:!0,onRender:function(e){var n=e.timestamp;return r.a.createElement(m.a,{timestamp:n})}},{key:"columnActionNumber",name:"Action #",minWidth:20,maxWidth:40,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!1,data:"number",isPadded:!0,onRender:function(e){return r.a.createElement(r.a.Fragment,null,e.actions?e.actions.length:"--")}}];return r.a.createElement(u.a,{items:n,columns:t,selectionMode:o.b.none,getKey:function(e){return e.id},setKey:"set",layoutMode:s.e.justified,isHeaderVisible:!0,onItemInvoked:function(e){return Object(c.navigate)("../transaction/?"+e.id)}})};n.default=function(e){var n=e.location,t=Object(i.a)(n),a=t[0],c=(t[1],a);return r.a.createElement(d.a,{variables:{hash:c}},function(e){var n=e.data,t=e.loading,a=e.error;if(t)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Block Details"),r.a.createElement("p",null,"Loading…"));if(a)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Block Details"),r.a.createElement("p",null,"Failed to load ",c," - ",JSON.stringify(a.message)));var i=n.blockQuery.block;if(!i)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Block Details"),r.a.createElement("p",null,"No such block: ",r.a.createElement("code",null,c)));var u="../account/?"+i.miner;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Block Details"),r.a.createElement("dl",null,r.a.createElement("dt",null,"Index"),r.a.createElement("dd",null,i.index),r.a.createElement("dt",null,"Hash"),r.a.createElement("dd",null,r.a.createElement("code",null,i.hash)),r.a.createElement("dt",null,"Nonce"),r.a.createElement("dd",null,r.a.createElement("code",null,i.nonce)),r.a.createElement("dt",null,"Miner"),r.a.createElement("dd",null,r.a.createElement(l.a,{href:u},r.a.createElement("code",null,i.miner))),r.a.createElement("dt",null,"Timestamp"),r.a.createElement("dd",null,r.a.createElement(m.a,{timestamp:i.timestamp})),r.a.createElement("dt",null,"Previous hash"),r.a.createElement("dd",null,i.previousBlock?r.a.createElement(l.a,{href:"./?"+i.previousBlock.hash},r.a.createElement("code",null,i.previousBlock.hash)):"N/A"),r.a.createElement("dt",null,"Difficulty"),r.a.createElement("dd",null,i.difficulty),r.a.createElement("dt",null,"Transactions"),i.transactions.length>0?r.a.createElement(E,{txs:i.transactions}):r.a.createElement("dd",null,r.a.createElement("i",null,"There is no transactions in this block."))))})}},320:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(357),c=t(358),i=t(386),u=t(359);n.default=function(e){var n=e.location,t=Object(l.a)(n),a=t[0],o=(t[1],a);return r.a.createElement(c.c,{variables:{id:o}},function(e){var n=e.data,t=e.loading,a=e.error;if(t)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Transaction Details"),r.a.createElement("p",null,"Loading…"));if(a)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Transaction Details"),r.a.createElement("p",null,"Failed to load ",o," - ",JSON.stringify(a.message)));var l=n.transactionQuery.transaction;if(!l)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Transaction Details"),r.a.createElement("p",null,"No such transaction: ",r.a.createElement("code",null,o)));var c="../account/?"+l.signer;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Transaction Details"),r.a.createElement("dl",null,r.a.createElement("dt",null,"Id"),r.a.createElement("dd",null,r.a.createElement("code",null,l.id)),r.a.createElement("dt",null,"Nonce"),r.a.createElement("dd",null,l.nonce," "),r.a.createElement("dt",null,"Public Key"),r.a.createElement("dd",null,r.a.createElement("code",null,l.publicKey)),r.a.createElement("dt",null,"Signature"),r.a.createElement("dd",null,r.a.createElement("code",null,l.signature)),r.a.createElement("dt",null,"Signer"),r.a.createElement("dd",null,r.a.createElement(i.a,{href:c},r.a.createElement("code",null,l.signer))),r.a.createElement("dt",null,"Timestamp"),r.a.createElement("dd",null,r.a.createElement(u.a,{timestamp:l.timestamp})),r.a.createElement("dt",null,"Updated Addresses"),l.updatedAddresses.map(function(e,n){return r.a.createElement("dd",{key:n},r.a.createElement(i.a,{href:"../account/?"+e},r.a.createElement("code",null,e)))}),r.a.createElement("dt",null,"Actions"),l.actions.map(function(e,n){return r.a.createElement("dd",{key:n},r.a.createElement("dl",null,e.arguments.map(function(e){return r.a.createElement(r.a.Fragment,{key:e.key},r.a.createElement("dt",null,e.key),r.a.createElement("dd",null,r.a.createElement("code",null," ",JSON.stringify(e.value)," ")))})))})))})}},322:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(357),c=t(319),i=t(320);n.default=function(e){var n=e.location,t=Object(l.a)(n);t[0],t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Results"),r.a.createElement(c.default,{location:n}),r.a.createElement(i.default,{location:n}))}},357:function(e,n,t){"use strict";t.d(n,"a",function(){return l});t(183);var a=t(0),r=t(182);function l(e){return[Object(a.useMemo)(function(){return e.search.substr(1)},[e]),Object(a.useCallback)(function(n){var t=e.pathname.substr(Object(r.withPrefix)("/").length-1);Object(r.navigate)(t+(n?"?"+n:""))},[e,r.navigate])]}},358:function(e,n,t){"use strict";t.d(n,"b",function(){return y}),t.d(n,"a",function(){return p}),t.d(n,"c",function(){return T}),t.d(n,"d",function(){return $});t(49);var a=t(184),r=t.n(a),l=t(0),c=t(361);t(362);function i(){var e=f(["\n    query TransactionsByAccount($involvedAddress: Address) {\n  transactionQuery {\n    transactions(involvedAddress: $involvedAddress, desc: true) {\n      ...TransactionCommon\n    }\n  }\n}\n    ",""]);return i=function(){return e},e}function u(){var e=f(["\n    query TransactionById($id: ID) {\n  transactionQuery {\n    transaction(id: $id) {\n      ...TransactionCommon\n    }\n  }\n}\n    ",""]);return u=function(){return e},e}function o(){var e=f(["\n    query TransactionList($signer: Address, $involvedAddress: Address, $desc: Boolean!, $offset: Int!, $limit: Int!) {\n  transactionQuery {\n    transactions(signer: $signer, involvedAddress: $involvedAddress, desc: $desc, offset: $offset, limit: $limit) {\n      ...TransactionCommon\n    }\n  }\n}\n    ",""]);return o=function(){return e},e}function s(){var e=f(["\n    query BlockByHash($hash: ID) {\n  blockQuery {\n    block(hash: $hash) {\n      ...BlockCommon\n      miner\n      nonce\n      previousBlock {\n        hash\n      }\n      transactions {\n        ...TransactionCommon\n      }\n    }\n  }\n}\n    ","\n",""]);return s=function(){return e},e}function d(){var e=f(["\n    query BlockList($offset: Int!, $limit: Int!, $excludeEmptyTxs: Boolean!) {\n  blockQuery {\n    blocks(desc: true, offset: $offset, limit: $limit, excludeEmptyTxs: $excludeEmptyTxs) {\n      ...BlockCommon\n      miner\n      transactions {\n        id\n      }\n    }\n  }\n}\n    ",""]);return d=function(){return e},e}function m(){var e=f(["\n    fragment TransactionCommon on Transaction {\n  actions {\n    arguments {\n      key\n      value\n    }\n  }\n  id\n  nonce\n  publicKey\n  signature\n  signer\n  timestamp\n  updatedAddresses\n}\n    "]);return m=function(){return e},e}function E(){var e=f(["\n    fragment BlockCommon on Block {\n  hash\n  index\n  difficulty\n  timestamp\n}\n    "]);return E=function(){return e},e}function f(e,n){return n||(n=e.slice(0)),e.raw=n,e}var g=r()(E()),h=r()(m()),v=r()(d(),g),y=function(e){return l.createElement(c.b,Object.assign({query:v},e))};var b=r()(s(),g,h),p=function(e){return l.createElement(c.b,Object.assign({query:b},e))};r()(o(),h);var k=r()(u(),h),T=function(e){return l.createElement(c.b,Object.assign({query:k},e))};var S=r()(i(),h),$=function(e){return l.createElement(c.b,Object.assign({query:S},e))}},359:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){var n=e.timestamp,t=new Date(n),a={dateStyle:"short",timeStyle:"short"},l=new Date,c=t.toLocaleString(void 0,a);return l.getFullYear()==t.getFullYear()&&l.getMonth()==t.getMonth()&&l.getDate()==t.getDate()&&(c=t.toLocaleTimeString(void 0,a)),r.a.createElement("time",{dateTime:t.toISOString(),title:t.toLocaleString()},c)}}}]);
//# sourceMappingURL=component---src-subpages-search-tsx-90e5b78b16e90f1b2a51.js.map