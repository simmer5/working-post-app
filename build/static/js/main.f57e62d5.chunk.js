(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{14:function(e,t,n){e.exports=n(36)},36:function(e,t,n){"use strict";n.r(t);var l=n(0),r=n.n(l),a=n(11),u=n.n(a),c=n(13),o=function(e){var t=e.blog;return r.a.createElement("div",null,r.a.createElement("h2",null,"Title:")," ",r.a.createElement("p",null,t.title," "),r.a.createElement("p",null,"Author: ",t.author))},i=n(12),s=n.n(i),f=function(){return s.a.get("/api/blogs").then((function(e){return e.data}))},p=function(){var e=Object(l.useState)([]),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(l.useEffect)((function(){f().then((function(e){return a(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"My Blogs Lis App"),n.map((function(e){return r.a.createElement(o,{key:e.id,blog:e})})))};u.a.render(r.a.createElement(p,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f57e62d5.chunk.js.map