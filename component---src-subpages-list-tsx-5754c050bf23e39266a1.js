(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{324:function(e,n,t){"use strict";t.r(n);t(112),t(49);var a=t(0),r=t.n(a),i=t(378),s=t(182),o=t(355),c=t(387),l=t(386),u=t(373),d=t(363),m=t(385),f=t(358),b=t(374),v=t.n(b),g=t(357);var h=t(359);function y(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n                    margin-right: 5px;\n                  "]);return y=function(){return e},e}var k=function(e){var n=e.blocks,t=e.loading,a=[{key:"columnIndex",name:"Index",fieldName:"index",iconName:"NumberSymbol",isIconOnly:!0,minWidth:5,maxWidth:40,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"number",isPadded:!0},{key:"columnHash",name:"Block Hash",fieldName:"hash",minWidth:5,maxWidth:450,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!1,data:"string",isPadded:!0,onRender:function(e){var n=e.hash;return r.a.createElement(l.a,{href:"./block/?"+n},n)}},{key:"columnTimestamp",name:"Timestamp",fieldName:"timestamp",minWidth:100,maxWidth:200,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"string",isPadded:!0,onRender:function(e){var n=e.timestamp;return r.a.createElement(h.a,{timestamp:n})}},{key:"coulmnMiner",name:"Miner",fieldName:"miner",minWidth:123,maxWidth:450,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"string",isPadded:!0},{key:"columnTimeTaken",name:"Time Taken",minWidth:50,maxWidth:200,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"string",isPadded:!0,onRender:function(e,t){var a=n[Math.min(t+1,n.length-1)],i=Date.parse(a.timestamp),s=Date.parse(e.timestamp);return r.a.createElement(r.a.Fragment,null,(s-i)/1e3)}},{key:"columnDifficulty",name:"Difficulty",minWidth:50,maxWidth:200,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"string",isPadded:!0,onRender:function(e){var n=e.difficulty;return r.a.createElement(r.a.Fragment,null,n)}},{key:"columnTxNumber",name:"Tx #",minWidth:5,maxWidth:20,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!1,data:"number",isPadded:!0,onRender:function(e){var n=e.transactions;return r.a.createElement(r.a.Fragment,null,n.length)}}];return r.a.createElement(m.a,{setKey:"set",items:t?[]:n.slice(0,-1),columns:a,selectionMode:u.b.none,layoutMode:d.e.justified,isHeaderVisible:!0,enableShimmer:t,onItemInvoked:function(e){return Object(s.navigate)("/search/?"+e.hash)}})};n.default=function(e){var n=e.location,t=function(e){var n=Object(g.a)(e),t=n[0],a=n[1];return[v.a.parse(t),function(e){return a(v.a.stringify(e))}]}(n),s=t[0],l=t[1],u=s.offset,d=void 0===u?0:u,m=function(e){if(e<1){var n=Object.assign({},s);delete n.offset,l(n)}else l(Object.assign({},s,{offset:e}))},b=function(){m(+d+21)},h=function(){m(+d-21)},p=Object(a.useState)(!1),E=p[0],x=p[1];return r.a.createElement("div",null,r.a.createElement(o.a,{label:"Include blocks having any tx",checked:E,onChange:function(e,n){x(!!n)}}),r.a.createElement(f.b,{variables:{offset:d,limit:21,excludeEmptyTxs:E},pollInterval:2e3},function(e){var n=e.data,t=e.loading;if(e.error)return r.a.createElement("p",null,"error!");var a=n&&n.blockQuery&&n.blockQuery.blocks?n.blockQuery.blocks.map(function(e){return new Date(e.timestamp)}):null,s=a?0:null;if(null!=s&&a){for(var o=0;o<a.length-1;o++)s+=+a[o]-+a[o+1];s/=1e3*(a.length-1)}var l=n&&n.blockQuery&&n.blockQuery.blocks?n.blockQuery.blocks.map(function(e){return e.difficulty}):null,u=0;null!=u&&l&&(u=l.reduce(function(e,n){return e+n},0)/l.length);var m=n&&n.blockQuery&&n.blockQuery.blocks?n.blockQuery.blocks.map(function(e){return e.transactions.length}):null,f=0;return null!=u&&l&&(f=m.reduce(function(e,n){return e+n},0)),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cards"},r.a.createElement("div",{className:"card",key:"interval"},r.a.createElement("strong",null,s)," sec",r.a.createElement("p",null,"Average interval in this page")),r.a.createElement("div",{className:"card",key:"difficulty"},r.a.createElement("strong",null,Number(parseInt(u)).toLocaleString()),r.a.createElement("p",null,"Average difficulty in this page")),r.a.createElement("div",{className:"card",key:"total-tx-number"},r.a.createElement("strong",null,Number(f).toLocaleString()),r.a.createElement("p",null,"Total txs in this page"))),r.a.createElement("div",{className:"nav"},r.a.createElement(c.a,{onClick:h,disabled:t||d<1,className:Object(i.a)(y())},"← Newer"),r.a.createElement(c.a,{disabled:t,onClick:b},"Older →")),r.a.createElement(k,{blocks:t?[]:n.blockQuery.blocks,loading:t}))}))}},357:function(e,n,t){"use strict";t.d(n,"a",function(){return i});t(183);var a=t(0),r=t(182);function i(e){return[Object(a.useMemo)(function(){return e.search.substr(1)},[e]),Object(a.useCallback)(function(n){var t=e.pathname.substr(Object(r.withPrefix)("/").length-1);Object(r.navigate)(t+(n?"?"+n:""))},[e,r.navigate])]}},358:function(e,n,t){"use strict";t.d(n,"b",function(){return y}),t.d(n,"a",function(){return p}),t.d(n,"c",function(){return x}),t.d(n,"d",function(){return T});t(49);var a=t(184),r=t.n(a),i=t(0),s=t(361);t(362);function o(){var e=b(["\n    query TransactionsByAccount($involvedAddress: Address) {\n  transactionQuery {\n    transactions(involvedAddress: $involvedAddress, desc: true) {\n      ...TransactionCommon\n    }\n  }\n}\n    ",""]);return o=function(){return e},e}function c(){var e=b(["\n    query TransactionById($id: ID) {\n  transactionQuery {\n    transaction(id: $id) {\n      ...TransactionCommon\n    }\n  }\n}\n    ",""]);return c=function(){return e},e}function l(){var e=b(["\n    query TransactionList($signer: Address, $involvedAddress: Address, $desc: Boolean!, $offset: Int!, $limit: Int!) {\n  transactionQuery {\n    transactions(signer: $signer, involvedAddress: $involvedAddress, desc: $desc, offset: $offset, limit: $limit) {\n      ...TransactionCommon\n    }\n  }\n}\n    ",""]);return l=function(){return e},e}function u(){var e=b(["\n    query BlockByHash($hash: ID) {\n  blockQuery {\n    block(hash: $hash) {\n      ...BlockCommon\n      miner\n      nonce\n      previousBlock {\n        hash\n      }\n      transactions {\n        ...TransactionCommon\n      }\n    }\n  }\n}\n    ","\n",""]);return u=function(){return e},e}function d(){var e=b(["\n    query BlockList($offset: Int!, $limit: Int!, $excludeEmptyTxs: Boolean!) {\n  blockQuery {\n    blocks(desc: true, offset: $offset, limit: $limit, excludeEmptyTxs: $excludeEmptyTxs) {\n      ...BlockCommon\n      miner\n      transactions {\n        id\n      }\n    }\n  }\n}\n    ",""]);return d=function(){return e},e}function m(){var e=b(["\n    fragment TransactionCommon on Transaction {\n  actions {\n    arguments {\n      key\n      value\n    }\n  }\n  id\n  nonce\n  publicKey\n  signature\n  signer\n  timestamp\n  updatedAddresses\n}\n    "]);return m=function(){return e},e}function f(){var e=b(["\n    fragment BlockCommon on Block {\n  hash\n  index\n  difficulty\n  timestamp\n}\n    "]);return f=function(){return e},e}function b(e,n){return n||(n=e.slice(0)),e.raw=n,e}var v=r()(f()),g=r()(m()),h=r()(d(),v),y=function(e){return i.createElement(s.b,Object.assign({query:h},e))};var k=r()(u(),v,g),p=function(e){return i.createElement(s.b,Object.assign({query:k},e))};r()(l(),g);var E=r()(c(),g),x=function(e){return i.createElement(s.b,Object.assign({query:E},e))};var S=r()(o(),g),T=function(e){return i.createElement(s.b,Object.assign({query:S},e))}},359:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){var n=e.timestamp,t=new Date(n),a={dateStyle:"short",timeStyle:"short"},i=new Date,s=t.toLocaleString(void 0,a);return i.getFullYear()==t.getFullYear()&&i.getMonth()==t.getMonth()&&i.getDate()==t.getDate()&&(s=t.toLocaleTimeString(void 0,a)),r.a.createElement("time",{dateTime:t.toISOString(),title:t.toLocaleString()},s)}}}]);
//# sourceMappingURL=component---src-subpages-list-tsx-5754c050bf23e39266a1.js.map