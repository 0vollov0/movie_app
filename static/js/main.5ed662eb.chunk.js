(this.webpackJsonpmoive_app=this.webpackJsonpmoive_app||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),s=n.n(o),c=(n(14),n(1)),i=n.n(c),u=n(2),l=n(5),m=n(6),v=n(7),p=n(8);n(16),n(17);function f(e){var t=e.poster,n=e.title;return r.a.createElement("img",{src:t,alt:n})}function d(e){var t=e.genre;return r.a.createElement("span",{className:"Movie_Genre"},t)}var h=function(e){var t=e.title,n=e.poster,a=e.genres,o=e.synopsis;return r.a.createElement("div",{className:"Movie"},r.a.createElement("div",{className:"Movie__Columns"},r.a.createElement(f,{poster:n,title:t})),r.a.createElement("div",{className:"Movie__Columns"},r.a.createElement("h1",null,t),r.a.createElement("div",{className:"Movie__Genres"},a.map((function(e,t){return r.a.createElement(d,{genre:e,key:t})})),r.a.createElement("p",{className:"Movie_Synopsis"},o))))},_=function(e){Object(p.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={},e._renderMovies=function(){return e.state.movies.map((function(e){return r.a.createElement(h,{title:e.title,poster:e.medium_cover_image,genres:e.genres,synopsis:e.synopsis,key:e.id})}))},e._getMovies=Object(u.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._callAPI();case 2:n=t.sent,e.setState({movies:n});case 4:case"end":return t.stop()}}),t)}))),e._callAPI=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://yts.mx/api/v2/list_movies.json?sort_by=like_count");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.data.movies);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",console.log(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this._getMovies()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.movies?this._renderMovies():"Loading")}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.5ed662eb.chunk.js.map