"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[536],{480:function(e,n,t){t.d(n,{Ej:function(){return p},IQ:function(){return f},Jh:function(){return l},XT:function(){return s},qP:function(){return d}});var r=t(861),a=t(757),c=t.n(a),u=t(243),i="https://api.themoviedb.org/3/",o={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWJlMzdhOTBjOTBkZjdkYjEwZGRjYmUwMjcxYzlmOCIsInN1YiI6IjY1MzU2MzE4YzE0ZmVlMDEwMGU5YTE1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6Vl5Z9QPs0Kljgk0gLQ9VVSoJ4UBj9z4GMeWwep9b4w"}},s=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"trending/movie/day?language=en-US"),o);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"movie/").concat(n,"?language=en-US"),o);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"movie/").concat(n,"/credits?language=en-US"),o);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"movie/").concat(n,"/reviews?language=en-US"),o);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"search/movie?query=").concat(n,"&include_adult=false&language=en-US&page=1"),o);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},536:function(e,n,t){t.r(n);var r,a,c,u=t(861),i=t(439),o=t(168),s=t(757),p=t.n(s),f=t(87),l=t(689),d=t(791),h=t(444),m=t(480),v=t(184),x=h.ZP.ul(r||(r=(0,o.Z)(["\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  li {\n    font-size: 18px;\n    font-weight: 600;\n  }\n"]))),g=h.ZP.section(a||(a=(0,o.Z)(["\n  padding: 20px;\n  background-color: #fff;\n"]))),Z=h.ZP.p(c||(c=(0,o.Z)(["\n  margin-top: 20px;\n  color: red;\n"])));n.default=function(){var e=(0,f.lr)(),n=(0,i.Z)(e,2),t=n[0],r=n[1],a=(0,d.useState)([]),c=(0,i.Z)(a,2),o=c[0],s=c[1],h=(0,d.useState)(null),w=(0,i.Z)(h,2),j=w[0],k=w[1],y=(0,d.useState)(""),b=(0,i.Z)(y,2),I=b[0],S=b[1],J=(0,l.TH)();(0,d.useEffect)((function(){var e=t.get("filmName");if(e){var n=function(){var n=(0,u.Z)(p().mark((function n(){var t,r;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,m.qP)(e);case 3:t=n.sent,(r=t.results).length?(s(r),k(null)):(k("\u0424\u0456\u043b\u044c\u043c\u0438 \u0437\u0456 \u0441\u043b\u043e\u0432\u043e\u043c ".concat(e," \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u0456")),s([]),S("rejected")),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),k(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}}),[t]);return(0,v.jsxs)(g,{children:[(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.target.elements.query.value;if(""===n)return r({});r({filmName:n})},children:[(0,v.jsx)("input",{type:"text",name:"query",placeholder:"Search movies...",autoComplete:"off"}),(0,v.jsx)("button",{type:"submit",children:"Search"})]}),"rejected"===I&&(0,v.jsx)(Z,{children:j}),(0,v.jsx)(x,{children:o.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsx)(f.rU,{to:"".concat(e.id),state:{from:J},children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=536.fb15583f.chunk.js.map