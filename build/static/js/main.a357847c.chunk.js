(this["webpackJsonpmy-profile"]=this["webpackJsonpmy-profile"]||[]).push([[0],{37:function(e,t,i){},38:function(e,t,i){},43:function(e,t,i){},44:function(e,t,i){},45:function(e,t,i){"use strict";i.r(t);var n=i(2),a=i(0),c=i.n(a),r=i(13),s=i.n(r),o=(i(37),i(20)),j=(i(38),i(24)),l=i(80),d=i(67),b=i(77),u=i(69),h=i(78),p=i(71),m=i(68),O=i(70),x=i(72),f=i(73),v=i(74),g=i(75),w=i(65),y=i(79),I=i(11),C=Object(w.a)((function(e){return Object(y.a)({search:Object(j.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(I.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(I.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(j.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})})})),M=function(e){var t=C(),i=Object(a.useState)(""),c=Object(o.a)(i,2),r=c[0],s=c[1];return Object(n.jsx)(l.a,{position:"static",children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(b.a,{edge:"start",color:"inherit","aria-label":"open drawer",children:Object(n.jsx)(m.a,{})}),Object(n.jsx)(u.a,{variant:"h6",noWrap:!0,children:"Movie Store"}),Object(n.jsxs)("div",{className:t.search,children:[Object(n.jsx)("div",{className:t.searchIcon,children:Object(n.jsx)(O.a,{})}),Object(n.jsx)(h.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},onChange:function(t){return i=t.target.value,s(i),void e.setMovies(e.movies.filter((function(e){return e.title.toLowerCase().includes(i)})));var i},value:r,inputProps:{"aria-label":"search"}})]}),Object(n.jsx)("div",{style:{flexGrow:1}}),Object(n.jsxs)("div",{children:[Object(n.jsx)(b.a,{"aria-label":"show 4 new mails",color:"inherit",children:Object(n.jsx)(p.a,{badgeContent:4,color:"secondary",children:Object(n.jsx)(x.a,{})})}),Object(n.jsx)(b.a,{"aria-label":"show 17 new notifications",color:"inherit",children:Object(n.jsx)(p.a,{badgeContent:17,color:"secondary",children:Object(n.jsx)(f.a,{})})}),Object(n.jsx)(b.a,{edge:"end","aria-label":"account of current user","aria-haspopup":"true",color:"inherit",children:Object(n.jsx)(v.a,{})})]}),Object(n.jsx)("div",{children:Object(n.jsx)(b.a,{"aria-label":"show more","aria-haspopup":"true",color:"inherit",children:Object(n.jsx)(g.a,{})})})]})})},k=(i(43),function(e){return console.log(e),Object(n.jsxs)("div",{className:"movie",children:[Object(n.jsx)("h2",{children:e.title}),Object(n.jsx)("img",{src:e.image}),Object(n.jsx)("h3",{children:e.year})]})}),S=(i(44),i(76)),N=["avengers","ironman","fast and furious","harry potter"],R=function(e){return Object(a.useEffect)((function(){var t=N.map((function(e){return fetch("http://www.omdbapi.com/?s=".concat(encodeURIComponent(e),"&apikey=").concat("4a3d4c85","&page=1")).then((function(e){return e.json()}))}));Promise.all(t).then((function(t){var i=t.map((function(e){return e.Search})).flat(2).map((function(e){return{title:e.Title,year:e.Year,image:e.Poster,imdb:e.imdbID}}));e.setMovies(i),e.setTempMovies(i)}))}),[]),0===e.movies.length?Object(n.jsx)("div",{className:"loader",children:Object(n.jsx)(S.a,{})}):Object(n.jsx)("div",{className:"movies",children:e.movies.flat(2).map((function(e){return Object(n.jsx)(k,{title:e.title,year:e.year,image:e.image},e.imdbID)}))})},L=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),i=t[0],c=t[1],r=Object(a.useState)([]),s=Object(o.a)(r,2),j=s[0],l=s[1];return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(M,{movies:i,setMovies:l}),Object(n.jsx)(R,{movies:j,setMovies:c,setTempMovies:l})]})};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(L,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.a357847c.chunk.js.map