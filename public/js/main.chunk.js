(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{320:function(e,t,a){},479:function(e,t){},497:function(e,t,a){e.exports=a(972)},659:function(e,t){},661:function(e,t){},693:function(e,t){},694:function(e,t){},878:function(e,t,a){var r={"./geojson.json":458,"./table-schema.json":879,"./topojson.json":459};function n(e){var t=c(e);return a(t)}function c(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=c,e.exports=n,n.id=878},963:function(e,t){},964:function(e,t){},968:function(e,t){},969:function(e,t){},972:function(e,t,a){"use strict";a.r(t);var r=a(4),n=a.n(r),c=a(117),i=a.n(c),o=a(231),s=a(118),u=a(481),p=a(482),l=function(e){return JSON.parse(JSON.stringify(e))},d=Object(s.combineReducers)({widgets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DATA_VIEW_CHART_BUILDER_ACTION":var a=l(e);return a=a.map(function(e){return"simple"===e.datapackage.views[0].specType&&(e.datapackage.views[0]=t.payload),e}),Object.assign(l(e),a);case"DATA_VIEW_MAP_BUILDER_ACTION":var r=l(e);return r=r.map(function(e){return"tabularmap"===e.datapackage.views[0].specType&&(e.datapackage.views[0]=t.payload),e}),Object.assign(l(e),r);case"SELECT_TAB":case"FETCH_DATA_BEGIN":case"FETCH_DATA_SUCCESS":case"FETCH_DATA_FAILURE":return t.payload.widgets;default:return e}},datastoreFilters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch((arguments.length>1?arguments[1]:void 0).type){case"FILTER_UI_ACTION":default:return e}},datapackage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DATAPACKAGE_LOAD":return t.payload.datapackage;default:return e}}}),f={datastoreFilters:{},datapackage:{},widgets:[]};a(320);var v=a(30),g=a(483),m=a(487),w=a.n(m),b=a(488),y=function(e){var t=e.datapackage.views;return n.a.createElement(w.a,{loaded:!e.loading,style:{position:"relative"}},n.a.createElement("div",null,t.map(function(e){return n.a.createElement(b.DataView,{key:Math.random(),datapackage:{views:[e]}})})))},O=a(493),k=a(494),h=a(235),E=a(59),A=a.n(E),j=a(148),N=a(495),T=a(414);function S(e){try{return JSON.parse(e)}catch(t){return e}}var x=function(){var e=Object(j.a)(A.a.mark(function e(t){var a,r,n;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=S(t),r=["csv","tsv","dsv","xls","xlsx"],e.prev=2,e.next=5,N.Dataset.load(a);case 5:return n=e.sent,e.next=8,Promise.all(n.resources.map(function(){var e=Object(j.a)(A.a.mark(function e(t){var a,n,c,i,o,s;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("FileInline"!==t.displayName){e.next=4;break}return e.abrupt("return");case 4:if(!t.descriptor.path||!t.descriptor.path.includes("datastore_search")){e.next=17;break}return e.next=7,fetch(t.descriptor.path);case 7:if((a=e.sent).ok){e.next=11;break}return t.descriptor.unavailable=!0,e.abrupt("return");case 11:return e.next=13,a.json();case 13:n=e.sent,t.descriptor.data=n.result.records,e.next=60;break;case 17:if("FileRemote"!==t.displayName||!r.includes(t.descriptor.format)){e.next=36;break}return e.prev=18,e.next=21,t.rows({size:100,keyed:!0});case 21:return c=e.sent,e.next=24,T(c);case 24:return(i=e.sent).length>0?t.descriptor.data=i:t.descriptor.unavailable=!0,e.next=28,t.addSchema();case 28:e.next=34;break;case 30:e.prev=30,e.t0=e.catch(18),console.warn(e.t0),t.descriptor.unavailable=!0;case 34:e.next=60;break;case 36:if(!t.descriptor.format.toLowerCase().includes("json")){e.next=55;break}return e.next=39,fetch(t.descriptor.path);case 39:if((o=e.sent).ok){e.next=43;break}return t.descriptor.unavailable=!0,e.abrupt("return");case 43:return e.next=45,o.json();case 45:if(s=e.sent,!["Feature","FeatureCollection","Point","MultiPoint","LineString","MultiLineString","Polygon","MultiPolygon","GeometryCollection"].includes(s.type)){e.next=51;break}t.descriptor.data=s,e.next=53;break;case 51:return t.descriptor.unavailable=!0,e.abrupt("return");case 53:e.next=60;break;case 55:if("pdf"!==t.descriptor.format.toLowerCase()){e.next=59;break}return e.abrupt("return");case 59:t.descriptor.unavailable=!0;case 60:case"end":return e.stop()}},e,null,[[18,30]])}));return function(t){return e.apply(this,arguments)}}()));case 8:return e.abrupt("return",n.descriptor);case 11:return e.prev=11,e.t0=e.catch(2),console.warn("Failed to load a Dataset from provided datapackage id\n"+e.t0),e.abrupt("return",a);case 15:case"end":return e.stop()}},e,null,[[2,11]])}));return function(t){return e.apply(this,arguments)}}(),_=a(230);function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(a,!0).forEach(function(t){Object(v.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var J=function(e){return{type:"SELECT_TAB",payload:C({},e)}},P=function(e){return{type:"DATAPACKAGE_LOAD",payload:C({},e)}},I=function(e){return{type:"FETCH_DATA_BEGIN",payload:C({},e)}},B=function(e){return{type:"FETCH_DATA_SUCCESS",payload:C({},e)}};function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}var L=Object(o.b)(function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(a,!0).forEach(function(t){Object(v.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e)},function(e){return{filterUIAction:function(t){return e(function(e){return function(){var t=Object(j.a)(A.a.mark(function t(a,r){var n,c,i,o,s,u;return A.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.parse(JSON.stringify(r().datapackage)),c=JSON.parse(JSON.stringify(e)),(i=Object.assign(n,{resources:[c]})).resources[0].datastore_active&&delete i.resources[0].data,a(P({datapackage:i})),o=JSON.parse(JSON.stringify(r().widgets)).map(function(e){return e.loading=!0,e}),a(I({widgets:o})),n=JSON.parse(JSON.stringify(r().datapackage)),t.next=10,x(n);case 10:s=t.sent,a(P({datapackage:s})),u=JSON.parse(JSON.stringify(r().widgets)).map(function(e){return e.datapackage.views=e.datapackage.views.map(function(e){return Object(_.compileView)(e,s)}),e.loading=!1,e}),a(B({widgets:u}));case 14:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()}(t))},fetchDataAction:function(t){return e(function(e){return function(){var t=Object(j.a)(A.a.mark(function t(a){var r,n,c,i;return A.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=JSON.parse(JSON.stringify(e.widgets)).map(function(e){return e.loading=!0,e}),a(I({widgets:r})),n=JSON.parse(JSON.stringify(e.datapackage)),t.next=5,x(n);case 5:c=t.sent,a(P({datapackage:c})),i=JSON.parse(JSON.stringify(e.widgets)).map(function(e){return e.datapackage.views=e.datapackage.views.map(function(e){return Object(_.compileView)(e,c)}),e}),a(B({widgets:i}));case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}(t))},dataViewBuilderAction:function(t){return e(function(e){return function(t){var a;"simple"===e.specType?a="DATA_VIEW_CHART_BUILDER_ACTION":"tabularmap"===e.specType&&(a="DATA_VIEW_MAP_BUILDER_ACTION"),t({type:a,payload:e})}}(t))},selectTabAction:function(t){return e(function(e){return function(t,a){var r=JSON.parse(JSON.stringify(a().widgets));r.forEach(function(t,a){r[a].active=!1,t.name===e&&(r[a].active=!0)}),t(J({widgets:r}))}}(t))}}})(function(e){Object(r.useEffect)(function(){var t={datapackage:e.datapackage,widgets:e.widgets};e.fetchDataAction(t)},[]);var t,a=e.widgets.find(function(e){return e.active}),c=a?a.name:e.widgets[0].name,i=e.widgets.map(function(e){return n.a.createElement(h.TabLink,{to:e.name,className:"mr-4"},e.name)}),o=e.widgets.map(function(t){return n.a.createElement(h.TabContent,{for:t.name},n.a.createElement("div",{className:"container flex py-6"},n.a.createElement("div",{className:"w-3/4 py-3 mr-4"},n.a.createElement(y,t)),n.a.createElement("div",{className:"w-1/4"},n.a.createElement("div",{className:"w-full"},n.a.createElement("div",{className:"p-4 mr-4"},"simple"===t.datapackage.views[0].specType?n.a.createElement(O.ChartBuilder,{view:t.datapackage.views[0],dataViewBuilderAction:e.dataViewBuilderAction}):"","tabularmap"===t.datapackage.views[0].specType?n.a.createElement(k.MapBuilder,{view:t.datapackage.views[0],dataViewBuilderAction:e.dataViewBuilderAction}):"")))))});return n.a.createElement("div",{className:"ml-6"},n.a.createElement("div",{className:"container py-4"},n.a.createElement("div",{className:"datastore-query-builder"},e.datapackage.resources[0].datastore_active?n.a.createElement(g.QueryBuilder,{resource:(t=e.datapackage,t?t.resources[0]:{}),filterBuilderAction:e.filterUIAction}):"")),n.a.createElement(h.Tabs,{renderActiveTabContentOnly:!0,handleSelect:function(t){e.selectTabAction(t)},selectedTab:c},i,o))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=document.getElementsByClassName("data-explorer"),V=!0,M=!1,R=void 0;try{for(var H,W=U[Symbol.iterator]();!(V=(H=W.next()).done);V=!0){var G=H.value;try{!function(){var e=JSON.parse(G.getAttribute("data-datapackage")),t=JSON.parse(JSON.stringify(e.views));delete e.views;var a,r={table:"Table",tabularmap:"Map",map:"Map",simple:"Chart"},c=t.map(function(e,t){return{active:0===t,name:r[e.specType],datapackage:{views:[e]}}});i.a.render(n.a.createElement(o.a,{store:(a={widgets:c,datapackage:e},Object(s.createStore)(d,Object.assign({},f,a),Object(u.composeWithDevTools)(Object(s.applyMiddleware)(p.a))))},n.a.createElement(L,null)),document.getElementById(G.id))}()}catch(K){console.warn("Failed to render data-explorer",K)}}}catch(q){M=!0,R=q}finally{try{V||null==W.return||W.return()}finally{if(M)throw R}}"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[497,1,2]]]);
//# sourceMappingURL=main.84526ff1.chunk.js.map