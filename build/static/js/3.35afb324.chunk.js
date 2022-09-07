/*! For license information please see 3.35afb324.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[3],{38:function(t,e,r){"use strict";function n(t,e,r,n,o,c,a){try{var i=t[c](a),u=i.value}catch(s){return void r(s)}i.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,c){var a=t.apply(e,r);function i(t){n(a,o,c,i,u,"next",t)}function u(t){n(a,o,c,i,u,"throw",t)}i(void 0)}))}}r.d(e,"a",(function(){return o}))},39:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r.d(e,"a",(function(){return c}))},40:function(t,e,r){"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,c="function"==typeof Symbol?Symbol:{},a=c.iterator||"@@iterator",i=c.asyncIterator||"@@asyncIterator",u=c.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(k){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,c=Object.create(o.prototype),a=new _(n||[]);return c._invoke=function(t,e,r){var n="suspendedStart";return function(o,c){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw c;return N()}for(r.method=o,r.arg=c;;){var a=r.delegate;if(a){var i=x(a,r);if(i){if(i===h)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),c}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=l;var h={};function p(){}function d(){}function m(){}var b={};s(b,a,(function(){return this}));var j=Object.getPrototypeOf,y=j&&j(j(S([])));y&&y!==e&&r.call(y,a)&&(b=y);var v=m.prototype=p.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){function o(c,a,i,u){var s=f(t[c],t,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==n(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,i,u)}),(function(t){o("throw",t,i,u)})):e.resolve(h).then((function(t){l.value=t,i(l)}),(function(t){return o("throw",t,i,u)}))}u(s.arg)}var c;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return c=c?c.then(n,n):n()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return d.prototype=m,s(v,"constructor",m),s(m,"constructor",d),d.displayName=s(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},O(g.prototype),s(g.prototype,i,(function(){return this})),t.AsyncIterator=g,t.async=function(e,r,n,o,c){void 0===c&&(c=Promise);var a=new g(l(e,r,n,o),c);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(v),s(v,u,"Generator"),s(v,a,(function(){return this})),s(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],a=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var i=r.call(c,"catchLoc"),u=r.call(c,"finallyLoc");if(i&&u){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(i){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var c=o;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=e&&e<=c.finallyLoc&&(c=null);var a=c?c.completion:{};return a.type=t,a.arg=e,c?(this.method="next",this.next=c.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}r.d(e,"a",(function(){return o}))},41:function(t,e,r){"use strict";var n=r(39),o=r(40),c=r(38),a=r(43),i=r(0);function u(t,e){return"SEND"===e.type?{data:null,error:null,status:"pending"}:"SUCCESS"===e.type?{data:e.responseData,error:null,status:"completed"}:"ERROR"===e.type?{data:null,error:e.errorMessage,status:"completed"}:t}e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=Object(i.useReducer)(u,{status:e?"pending":null,data:null,error:null}),s=Object(a.a)(r,2),l=s[0],f=s[1],h=Object(i.useCallback)(function(){var e=Object(c.a)(Object(o.a)().mark((function e(r){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f({type:"SEND"}),e.prev=1,e.next=4,t(r);case 4:n=e.sent,f({type:"SUCCESS",responseData:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),f({type:"ERROR",errorMessage:e.t0.message||"Something went wrong!"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(n.a)({sendRequest:h},l)}},42:function(t,e,r){"use strict";r.d(e,"d",(function(){return i})),r.d(e,"e",(function(){return s})),r.d(e,"b",(function(){return f})),r.d(e,"a",(function(){return p})),r.d(e,"c",(function(){return m}));var n=r(40),o=r(39),c=r(38),a="https://react-router-project-63129-default-rtdb.firebaseio.com";function i(){return u.apply(this,arguments)}function u(){return(u=Object(c.a)(Object(n.a)().mark((function t(){var e,r,c,i,u;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/quotes.json"));case 2:return e=t.sent,t.next=5,e.json();case 5:if(r=t.sent,e.ok){t.next=8;break}throw new Error(r.message||"Could not fetch quotes.");case 8:for(i in c=[],r)u=Object(o.a)({id:i},r[i]),c.push(u);return t.abrupt("return",c);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(t){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(Object(n.a)().mark((function t(e){var r,c,i;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/quotes/").concat(e,".json"));case 2:return r=t.sent,t.next=5,r.json();case 5:if(c=t.sent,r.ok){t.next=8;break}throw new Error(c.message||"Could not fetch quote.");case 8:return i=Object(o.a)({id:e},c),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(Object(n.a)().mark((function t(e){var r,o;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/quotes.json"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 2:return r=t.sent,t.next=5,r.json();case 5:if(o=t.sent,r.ok){t.next=8;break}throw new Error(o.message||"Could not create quote.");case 8:return t.abrupt("return",null);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(Object(n.a)().mark((function t(e){var r,o;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/comments/").concat(e.quoteId,".json"),{method:"POST",body:JSON.stringify(e.commentData),headers:{"Content-Type":"application/json"}});case 2:return r=t.sent,t.next=5,r.json();case 5:if(o=t.sent,r.ok){t.next=8;break}throw new Error(o.message||"Could not add comment.");case 8:return t.abrupt("return",{commentId:o.name});case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(Object(n.a)().mark((function t(e){var r,c,i,u,s;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/comments/").concat(e,".json"));case 2:return r=t.sent,t.next=5,r.json();case 5:if(c=t.sent,r.ok){t.next=8;break}throw new Error(c.message||"Could not get comments.");case 8:for(u in i=[],c)s=Object(o.a)({id:u},c[u]),i.push(s);return t.abrupt("return",i);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},43:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,c=[],a=!0,i=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(c.push(n.value),!e||c.length!==e);a=!0);}catch(u){i=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return o}))},46:function(t,e,r){t.exports={quote:"HighlightedQuote_quote__3tLMe"}},47:function(t,e,r){t.exports={comments:"Comments_comments__tSFHE"}},48:function(t,e,r){t.exports={form:"NewCommentForm_form__3HGFc",loading:"NewCommentForm_loading__1N6a4",control:"NewCommentForm_control__2B4PL",actions:"NewCommentForm_actions__2jGPc"}},49:function(t,e,r){t.exports={item:"CommentItem_item__2txS7"}},50:function(t,e,r){t.exports={comments:"CommentsList_comments__37maQ"}},55:function(t,e,r){"use strict";r.r(e);var n=r(2),o=r(8),c=r(46),a=r.n(c),i=r(1),u=function(t){return Object(i.jsxs)("figure",{className:a.a.quote,children:[Object(i.jsx)("p",{children:t.text}),Object(i.jsx)("figcaption",{children:t.author})]})},s=r(43),l=r(0),f=r(42),h=r(47),p=r.n(h),d=r(41),m=r(14),b=r(48),j=r.n(b),y=function(t){var e=Object(l.useRef)(),r=Object(d.a)(f.a),n=r.sendRequest,o=r.status,c=r.error,a=t.onAddedComment;Object(l.useEffect)((function(){"completed"!==o||c||a()}),[o,c,a]);var u=function(r){r.preventDefault();var o=e.current.value;n({commentData:{text:o},quoteId:t.quoteId})};return Object(i.jsxs)("form",{className:j.a.form,onSubmit:u,children:["pending"===o&&Object(i.jsx)("div",{className:"centered",children:Object(i.jsx)(m.a,{})}),Object(i.jsxs)("div",{className:j.a.control,onSubmit:u,children:[Object(i.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(i.jsx)("textarea",{id:"comment",rows:"5",ref:e})]}),Object(i.jsx)("div",{className:j.a.actions,children:Object(i.jsx)("button",{className:"btn",children:"Add Comment"})})]})},v=r(49),O=r.n(v),g=function(t){return Object(i.jsx)("li",{className:O.a.item,children:Object(i.jsx)("p",{children:t.text})})},x=r(50),w=r.n(x),E=function(t){return Object(i.jsx)("ul",{className:w.a.comments,children:t.comments.map((function(t){return Object(i.jsx)(g,{text:t.text},t.id)}))})},_=function(){var t=Object(l.useState)(!1),e=Object(s.a)(t,2),r=e[0],o=e[1],c=Object(n.j)().quoteId,a=Object(d.a)(f.c),u=a.sendRequest,h=a.status,b=a.data;Object(l.useEffect)((function(){u(c)}),[u,c]);var j,v=Object(l.useCallback)((function(){u(c)}),[u,c]);return"pending"===h&&(j=Object(i.jsx)("div",{className:"centered",children:Object(i.jsx)(m.a,{})})),"completed"===h&&b&&b.length>0&&(j=Object(i.jsx)(E,{comments:b})),"completed"!==h||b&&0!==b.length||(j=Object(i.jsx)("p",{className:"centered",children:"No comments where added yet"})),Object(i.jsxs)("section",{className:p.a.comments,children:[Object(i.jsx)("h2",{children:"User Comments"}),!r&&Object(i.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Add a Comment"}),r&&Object(i.jsx)(y,{quoteId:c,onAddedComment:v}),j]})};e.default=function(){var t=Object(n.k)(),e=Object(n.j)().quoteId,r=Object(d.a)(f.e,!0),c=r.sendRequest,a=r.status,s=r.data,h=r.error;return Object(l.useEffect)((function(){c(e)}),[c,e]),"pending"===a?Object(i.jsx)("div",{className:"centered",children:Object(i.jsx)(m.a,{})}):h?Object(i.jsx)("p",{className:"centered",children:h}):s.text?Object(i.jsxs)("section",{children:[Object(i.jsx)(u,{text:s.text,author:s.author}),Object(i.jsx)(n.c,{path:t.path,exact:!0,children:Object(i.jsx)("div",{className:"centered",children:Object(i.jsx)(o.b,{className:"btm--flat",to:"".concat(t.url,"/comments"),children:"Load Comments"})})}),Object(i.jsx)(n.c,{path:"".concat(t.path,"/comments"),children:Object(i.jsx)(_,{})})]}):Object(i.jsx)("p",{children:"No quote found"})}}}]);
//# sourceMappingURL=3.35afb324.chunk.js.map