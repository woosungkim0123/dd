"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{3633:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var i=n(7294),r=n(6771),a=n(3431);var l=(0,r.Z)("div",{target:"e1obh3b21"})({name:"martjc",styles:"width:100%;height:400px;background-color:pink;@media (min-width: 768px){height:350px;}"}),o=(0,r.Z)("img",{target:"e1obh3b20"})({name:"3ihh8r",styles:"width:100%;max-width:1200px;margin:0 auto;display:none;@media (min-width: 768px){display:block;}"}),s=function(){return(0,a.tZ)(l,null,(0,a.tZ)(o,null))},d=n(7462),u=n(1597),g=n(396);var p=(0,r.Z)("div",{target:"e1eg5kak8"})({name:"1d3w5wq",styles:"width:100%"}),c=(0,r.Z)(u.rU,{target:"e1eg5kak7"})({name:"18niw0i",styles:"margin:20px;display:flex"}),m=(0,r.Z)(g.G,{target:"e1eg5kak6"})({name:"alnlos",styles:"height:200px;width:45%;margin-right:20px;@media (min-width: 768px){height:250px;width:50%;}"}),f=(0,r.Z)("div",{target:"e1eg5kak5"})({name:"x03il2",styles:"width:55%;height:200px;@media (min-width: 768px){height:250px;width:50%;}"}),h=(0,r.Z)("div",{target:"e1eg5kak4"})({name:"1ydyuvw",styles:"display:flex;overflow:hidden;flex-wrap:wrap"}),x=(0,r.Z)("span",{target:"e1eg5kak3"})({name:"1t30vsh",styles:"font-size:12px;margin-right:10px;@media (min-width: 768px){font-size:15px;}"}),w=(0,r.Z)("h4",{target:"e1eg5kak2"})({name:"1w9597c",styles:"font-size:25px;font-weight:bold;margin:5px 0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;max-height:200px;@media (min-width: 768px){font-size:28px;margin:10px 0;}"}),k=(0,r.Z)("p",{target:"e1eg5kak1"})({name:"z22bmm",styles:"font-size:16px;margin:5px 0;@media (min-width: 768px){font-size:17px;margin:5px 0;}"}),y=(0,r.Z)("p",{target:"e1eg5kak0"})({name:"12hhlea",styles:"font-size:15px;margin:10px 0;line-height:1.5;max-width:200px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;word-wrap:break-word;@media (min-width: 768px){-webkit-line-clamp:5;font-size:16px;}"}),Z=function(e){var t=e.title,n=e.date,i=e.categories,r=e.summary,l=e.thumbnail.childImageSharp.gatsbyImageData,o=e.link;return(0,a.tZ)(p,null,(0,a.tZ)(c,{to:o},(0,a.tZ)(m,{image:l,alt:"Post Item Image"}),(0,a.tZ)(f,null,(0,a.tZ)(w,null,t),(0,a.tZ)(k,null,n),(0,a.tZ)(y,null,r),(0,a.tZ)(h,null,i.map((function(e){return(0,a.tZ)(x,{key:e},"#",e)}))))))},v=function(e,t){var n,r=(0,i.useRef)(null),a=(0,i.useState)(1),l=a[0],o=a[1],s=(0,i.useMemo)((function(){return t.filter((function(t){var n=t.node.frontmatter.categories;return"All"===e||n.includes(e)}))}),[e]);return n=new IntersectionObserver((function(e,t){e[0].isIntersecting&&(o((function(e){return e+1})),t.disconnect())})),(0,i.useEffect)((function(){return o(1)}),[e]),(0,i.useEffect)((function(){9*l>=s.length||null===r.current||0===r.current.children.length||n.observe(r.current.children[r.current.children.length-1])}),[l,e]),{containerRef:r,postList:s.slice(0,9*l)}};var b=(0,r.Z)("div",{target:"es8e92y0"})({name:"14zflly",styles:"display:grid;grid-template-columns:1fr;grid-gap:10px;padding-top:10px;width:100%;@media (min-width: 768px){grid-template-columns:1fr 1fr;}@media (min-width: 1200px){grid-template-columns:1fr 1fr 1fr;}"}),C=function(e){var t=e.selectedCategory,n=e.posts,i=v(t,n),r=i.containerRef,l=i.postList;return(0,a.tZ)(b,{ref:r},l.map((function(e){var t=e.node,n=t.id,i=t.fields.slug,r=t.frontmatter;return(0,a.tZ)(Z,(0,d.Z)({},r,{link:i,key:n}))})))};var z=(0,r.Z)("div",{target:"e10yt380"})({name:"d2xfih",styles:"max-width:1200px;margin:0 auto;background-color:#fff"}),I=function(e){var t=e.posts,n=e.selectedCategory;return(0,a.tZ)(z,null,(0,a.tZ)(C,{selectedCategory:n,posts:t}))};var q=(0,r.Z)("div",{target:"e1kn8q5k2"})("margin-right:15px;padding:5px 10px;border:solid 1px #d3d3d3;border-radius:30px;font-size:15px;font-weight:",(function(e){return e.active?"800":"400"}),";cursor:pointer;background-color:",(function(e){return e.active?"pink":"#fff"}),";color:",(function(e){return e.active?"white":"black"}),";&:last-of-type{margin-right:0;}"),A=(0,r.Z)("div",{target:"e1kn8q5k1"})({name:"1o4nbck",styles:"margin:0 auto;max-width:1200px"}),L=(0,r.Z)("div",{target:"e1kn8q5k0"})({name:"md83mh",styles:"display:flex;margin:10px 10px;overflow:auto;-ms-overflow-style:none;::-webkit-scrollbar{display:none;}"}),R=function(e){var t=e.selectedCategory,n=e.categoryList,r=e.selectedCategoryChange;return(0,a.tZ)(i.Fragment,null,(0,a.tZ)(A,null,(0,a.tZ)(L,null,Object.entries(n).map((function(e){var n=e[0];return(0,a.tZ)(q,{active:n===t,onClick:function(){r(n)},key:n},n)})))))},_=n(185),E=function(e){var t=e.data.allMarkdownRemark.edges,n=(0,i.useState)("All"),r=n[0],l=n[1],o=(0,i.useMemo)((function(){return t.reduce((function(e,t){return t.node.frontmatter.categories.forEach((function(t){void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})}),[]);return(0,a.tZ)(i.Fragment,null,(0,a.tZ)(_.Z,null,(0,a.tZ)(s,null),(0,a.tZ)(R,{selectedCategory:r,selectedCategoryChange:l,categoryList:o}),(0,a.tZ)(I,{posts:t,selectedCategory:r})))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-945009aae8a8b1e444e4.js.map