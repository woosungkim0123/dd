"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{3633:function(e,t,i){i.r(t),i.d(t,{default:function(){return M}});var n=i(7294),a=i(6771),r=i(3431);var l=(0,a.Z)("div",{target:"e1obh3b21"})({name:"martjc",styles:"width:100%;height:400px;background-color:pink;@media (min-width: 768px){height:350px;}"}),o=(0,a.Z)("img",{target:"e1obh3b20"})({name:"3ihh8r",styles:"width:100%;max-width:1200px;margin:0 auto;display:none;@media (min-width: 768px){display:block;}"}),s=function(){return(0,r.tZ)(l,null,(0,r.tZ)(o,null))},d=i(7462),g=i(1597),p=i(396);var m=(0,a.Z)("div",{target:"e1eg5kak8"})({name:"1d3w5wq",styles:"width:100%"}),u=(0,a.Z)(g.rU,{target:"e1eg5kak7"})({name:"18niw0i",styles:"margin:20px;display:flex"}),c=(0,a.Z)(p.G,{target:"e1eg5kak6"})({name:"alnlos",styles:"height:200px;width:45%;margin-right:20px;@media (min-width: 768px){height:250px;width:50%;}"}),f=(0,a.Z)("div",{target:"e1eg5kak5"})({name:"x03il2",styles:"width:55%;height:200px;@media (min-width: 768px){height:250px;width:50%;}"}),h=(0,a.Z)("div",{target:"e1eg5kak4"})({name:"1ydyuvw",styles:"display:flex;overflow:hidden;flex-wrap:wrap"}),x=(0,a.Z)("span",{target:"e1eg5kak3"})({name:"1t30vsh",styles:"font-size:12px;margin-right:10px;@media (min-width: 768px){font-size:15px;}"}),w=(0,a.Z)("h4",{target:"e1eg5kak2"})({name:"1w9597c",styles:"font-size:25px;font-weight:bold;margin:5px 0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;max-height:200px;@media (min-width: 768px){font-size:28px;margin:10px 0;}"}),k=(0,a.Z)("p",{target:"e1eg5kak1"})({name:"z22bmm",styles:"font-size:16px;margin:5px 0;@media (min-width: 768px){font-size:17px;margin:5px 0;}"}),y=(0,a.Z)("p",{target:"e1eg5kak0"})({name:"12hhlea",styles:"font-size:15px;margin:10px 0;line-height:1.5;max-width:200px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;word-wrap:break-word;@media (min-width: 768px){-webkit-line-clamp:5;font-size:16px;}"}),Z=function(e){var t=e.title,i=e.date,n=e.categories,a=e.summary,l=e.thumbnail.childImageSharp.gatsbyImageData,o=e.link;return(0,r.tZ)(m,null,(0,r.tZ)(u,{to:o},(0,r.tZ)(c,{image:l,alt:"Post Item Image"}),(0,r.tZ)(f,null,(0,r.tZ)(w,null,t),(0,r.tZ)(k,null,i),(0,r.tZ)(y,null,a),(0,r.tZ)(h,null,n.map((function(e){return(0,r.tZ)(x,{key:e},"#",e)}))))))},v=function(e,t){var i=(0,n.useRef)(null),a=(0,n.useState)(1),r=a[0],l=(a[1],(0,n.useMemo)((function(){return t.filter((function(t){var i=t.node.frontmatter.categories;return"All"===e||i.includes(e)}))}),[e]));return{containerRef:i,postList:l.slice(0,10*r)}};var b=(0,a.Z)("div",{target:"es8e92y0"})({name:"14zflly",styles:"display:grid;grid-template-columns:1fr;grid-gap:10px;padding-top:10px;width:100%;@media (min-width: 768px){grid-template-columns:1fr 1fr;}@media (min-width: 1200px){grid-template-columns:1fr 1fr 1fr;}"}),C=function(e){var t=e.selectedCategory,i=e.posts,n=v(t,i),a=n.containerRef,l=n.postList;return(0,r.tZ)(b,{ref:a},l.map((function(e){var t=e.node,i=t.id,n=t.frontmatter;return(0,r.tZ)(Z,(0,d.Z)({},n,{link:"https://www.google.co.kr/",key:i}))})))};var z=(0,a.Z)("div",{target:"e10yt380"})({name:"d2xfih",styles:"max-width:1200px;margin:0 auto;background-color:#fff"}),q=function(e){var t=e.posts,i=e.selectedCategory;return(0,r.tZ)(z,null,(0,r.tZ)(C,{selectedCategory:i,posts:t}))};var A=(0,a.Z)("div",{target:"e1kn8q5k2"})("margin-right:15px;padding:5px 10px;border:solid 1px #d3d3d3;border-radius:30px;font-size:15px;font-weight:",(function(e){return e.active?"800":"400"}),";cursor:pointer;background-color:",(function(e){return e.active?"pink":"#fff"}),";color:",(function(e){return e.active?"white":"black"}),";&:last-of-type{margin-right:0;}"),I=(0,a.Z)("div",{target:"e1kn8q5k1"})({name:"1o4nbck",styles:"margin:0 auto;max-width:1200px"}),L=(0,a.Z)("div",{target:"e1kn8q5k0"})({name:"md83mh",styles:"display:flex;margin:10px 10px;overflow:auto;-ms-overflow-style:none;::-webkit-scrollbar{display:none;}"}),R=function(e){var t=e.selectedCategory,i=e.categoryList,a=e.selectedCategoryChange;return(0,r.tZ)(n.Fragment,null,(0,r.tZ)(I,null,(0,r.tZ)(L,null,Object.entries(i).map((function(e){var i=e[0];return(0,r.tZ)(A,{active:i===t,onClick:function(){a(i)},key:i},i)})))))},_=i(185),M=function(e){var t=e.data.allMarkdownRemark.edges,i=(0,n.useState)("All"),a=i[0],l=i[1],o=(0,n.useMemo)((function(){return t.reduce((function(e,t){return t.node.frontmatter.categories.forEach((function(t){void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})}),[]);return(0,r.tZ)(n.Fragment,null,(0,r.tZ)(_.Z,null,(0,r.tZ)(s,null),(0,r.tZ)(R,{selectedCategory:a,selectedCategoryChange:l,categoryList:o}),(0,r.tZ)(q,{posts:t,selectedCategory:a})))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-cafaee05c2a206c4211a.js.map