(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{341:function(t,n,e){"use strict";var strong=e(386),r=e(351);t.exports=e(387)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var n=strong.getEntry(r(this,"Map"),t);return n&&n.v},set:function(t,n){return strong.def(r(this,"Map"),0===t?0:t,n)}},strong,!0)},351:function(t,n,e){var r=e(29);t.exports=function(t,n){if(!r(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},386:function(t,n,e){"use strict";var r=e(36).f,o=e(94),c=e(196),l=e(62),f=e(194),v=e(195),d=e(138),h=e(197),y=e(139),_=e(30),j=e(135).fastKey,w=e(351),O=_?"_s":"size",k=function(t,n){var e,r=j(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,d){var h=t((function(t,r){f(t,h,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[O]=0,null!=r&&v(r,e,t[d],t)}));return c(h.prototype,{clear:function(){for(var t=w(this,n),data=t._i,e=t._f;e;e=e.n)e.r=!0,e.p&&(e.p=e.p.n=void 0),delete data[e.i];t._f=t._l=void 0,t[O]=0},delete:function(t){var e=w(this,n),r=k(e,t);if(r){var o=r.n,c=r.p;delete e._i[r.i],r.r=!0,c&&(c.n=o),o&&(o.p=c),e._f==r&&(e._f=o),e._l==r&&(e._l=c),e[O]--}return!!r},forEach:function(t){w(this,n);for(var e,r=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!k(w(this,n),t)}}),_&&r(h.prototype,"size",{get:function(){return w(this,n)[O]}}),h},def:function(t,n,e){var r,o,c=k(t,n);return c?c.v=e:(t._l=c={i:o=j(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=c),r&&(r.n=c),t[O]++,"F"!==o&&(t._i[o]=c)),t},getEntry:k,setStrong:function(t,n,e){d(t,n,(function(t,e){this._t=w(t,n),this._k=e,this._l=void 0}),(function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?h(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,h(1))}),e?"entries":"values",!e,!0),y(n)}}},387:function(t,n,e){"use strict";var r=e(22),o=e(14),c=e(38),l=e(196),meta=e(135),f=e(195),v=e(194),d=e(29),h=e(31),y=e(137),_=e(93),j=e(140);t.exports=function(t,n,e,w,O,k){var m=r[t],S=m,C=O?"set":"add",E=S&&S.prototype,x={},P=function(t){var n=E[t];c(E,t,"delete"==t||"has"==t?function(a){return!(k&&!d(a))&&n.call(this,0===a?0:a)}:"get"==t?function(a){return k&&!d(a)?void 0:n.call(this,0===a?0:a)}:"add"==t?function(a){return n.call(this,0===a?0:a),this}:function(a,b){return n.call(this,0===a?0:a,b),this})};if("function"==typeof S&&(k||E.forEach&&!h((function(){(new S).entries().next()})))){var D=new S,M=D[C](k?{}:-0,1)!=D,B=h((function(){D.has(1)})),F=y((function(t){new S(t)})),G=!k&&h((function(){for(var t=new S,n=5;n--;)t[C](n,n);return!t.has(-0)}));F||((S=n((function(n,e){v(n,S,t);var r=j(new m,n,S);return null!=e&&f(e,O,r[C],r),r}))).prototype=E,E.constructor=S),(B||G)&&(P("delete"),P("has"),O&&P("get")),(G||M)&&P(C),k&&E.clear&&delete E.clear}else S=w.getConstructor(n,t,O,C),l(S.prototype,e),meta.NEED=!0;return _(S,t),x[t]=S,o(o.G+o.W+o.F*(S!=m),x),k||w.setStrong(S,t,O),S}},459:function(t,n,e){"use strict";e(10),e(8);var r=e(2),o=(e(44),e(341),e(48),e(5),e(4),e(9),e(40),e(41),e(193),e(0)),c=e(60),l=e(1);function f(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var d=["sm","md","lg","xl"],h=["start","end","center"];function y(t,n){return d.reduce((function(e,r){return e[t+Object(l.D)(r)]=n(),e}),{})}var _=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},j=y("align",(function(){return{type:String,default:null,validator:_}})),w=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},O=y("justify",(function(){return{type:String,default:null,validator:w}})),k=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},m=y("alignContent",(function(){return{type:String,default:null,validator:k}})),S={align:Object.keys(j),justify:Object.keys(O),alignContent:Object.keys(m)},C={align:"align",justify:"justify",alignContent:"align-content"};function E(t,n,e){var r=C[t];if(null!=e){if(n){var o=n.replace(t,"");r+="-".concat(o)}return(r+="-".concat(e)).toLowerCase()}}var x=new Map;n.a=o.a.extend({name:"v-row",functional:!0,props:v(v(v({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:_}},j),{},{justify:{type:String,default:null,validator:w}},O),{},{alignContent:{type:String,default:null,validator:k}},m),render:function(t,n){var e=n.props,data=n.data,o=n.children,l="";for(var f in e)l+=String(e[f]);var v=x.get(l);return v||function(){var t,n;for(n in v=[],S)S[n].forEach((function(t){var r=e[t],o=E(n,t,r);o&&v.push(o)}));v.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(r.a)(t,"align-".concat(e.align),e.align),Object(r.a)(t,"justify-".concat(e.justify),e.justify),Object(r.a)(t,"align-content-".concat(e.alignContent),e.alignContent),t)),x.set(l,v)}(),t(e.tag,Object(c.a)(data,{staticClass:"row",class:v}),o)}})},650:function(t,n,e){"use strict";e.r(n);var r={layout:"empty",methods:{click:function(){this.$axios.$post("https://play.clickhouse.tech/api/v20.3/?database=datasets&user=playground&password=clickhouse","select * from hits_v1 limit 1000 format JSON")}}},o=e(49),c=e(71),l=e.n(c),f=e(143),v=e(320),d=e(459),component=Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-btn",{on:{click:this.click}},[this._v("\n      click\n    ")])],1)],1)}),[],!1,null,null,null);n.default=component.exports;l()(component,{VBtn:f.a,VContainer:v.a,VRow:d.a})}}]);