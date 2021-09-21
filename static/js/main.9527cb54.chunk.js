(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var s=c(8),i=c.n(s),n=(c(14),c(9)),a=c(3),r=c(1),l=(c(15),c(16),c(17),c(0)),j=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.Plot,Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("strong",{children:"imdbID: "}),t.imdbID,Object(l.jsx)("br",{})]})]})]})},o=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(j,{movie:e},e.imdbID)}))})},d=c(2),b=c.n(d),m=c(6),u=(c(20),function(){var e=Object(m.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://www.omdbapi.com/?apikey=b2947ed2","&t=").concat(t));case 2:return c=e.sent,e.abrupt("return",c.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v=function(e){var t=e.addMovie,c=Object(r.useState)(null),s=Object(a.a)(c,2),i=s[0],n=s[1],o=Object(r.useState)(""),d=Object(a.a)(o,2),v=d[0],O=d[1],h=Object(r.useState)(!1),x=Object(a.a)(h,2),f=x[0],p=x[1],N=function(){var e=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(v);case 2:if("False"!==(t=e.sent).Response){e.next=7;break}return n(null),p(!1),e.abrupt("return");case 7:n(t),p(!0);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),N()},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-danger",value:v,onChange:function(e){O(e.target.value)}})}),!f&&Object(l.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit",className:"button is-light",children:"Find a movie"})}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"button",className:"button is-primary",disabled:!i,onClick:function(){t(i),n(null)},children:"Add to the list"})})]})]}),i&&Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),i&&Object(l.jsx)(j,{movie:i})]})]})},O=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(o,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(v,{addMovie:function(e){c.find((function(t){return t.imdbID===e.imdbID}))||s([].concat(Object(n.a)(c),[e]))}})})]})};i.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.9527cb54.chunk.js.map