"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[341],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68725:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>s});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],p={},c="\u652f\u6301\u7528\u6237",u={unversionedId:"introduction/support",id:"introduction/support",title:"\u652f\u6301\u7528\u6237",description:"\u76ee\u524d\u4e3b\u8981\u652f\u6301\u4ee5Java\u5f00\u53d1\u4e3a\u4e3b,\u5e76\u4e14\u662f\u4f9d\u8d56\u4e8e\u5927\u73af\u5883\u4e0b\u4f7f\u7528\u7684Spring MVC\u3001Spring Boot\u3001Spring Cloud\u6846\u67b6.",source:"@site/docs/introduction/support.md",sourceDirName:"introduction",slug:"/introduction/support",permalink:"/docs/introduction/support",draft:!1,tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1660470595,formattedLastUpdatedAt:"2022\u5e748\u670814\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"\u9879\u76ee\u80cc\u666f",permalink:"/docs/introduction/introduction-background"},next:{title:"\u754c\u9762\u8d4f\u9274",permalink:"/docs/introduction/ui"}},l={},s=[],d={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u652f\u6301\u7528\u6237"},"\u652f\u6301\u7528\u6237"),(0,i.kt)("p",null,"\u76ee\u524d\u4e3b\u8981\u652f\u6301\u4ee5Java\u5f00\u53d1\u4e3a\u4e3b,\u5e76\u4e14\u662f\u4f9d\u8d56\u4e8e\u5927\u73af\u5883\u4e0b\u4f7f\u7528\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Spring MVC"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"Spring Boot"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"Spring Cloud"),"\u6846\u67b6."),(0,i.kt)("p",null,"\u5f53\u7136,",(0,i.kt)("inlineCode",{parentName:"p"},"Knife4j"),"\u4e5f\u63d0\u4f9b\u4e86\u79bb\u7ebf\u7248\u672c,\u53ea\u8981\u662f\u7b26\u5408Swagger\u7684OpenAPI\u7248\u672c\u7684\u89c4\u8303JSON,\u90fd\u53ef\u4ee5\u901a\u8fc7\u7b80\u5355\u7684\u914d\u7f6e\u8fdb\u884c\u9002\u914d\uff0c\u79bb\u7ebf\u7248\u672c\u662f\u9002\u5408\u4e8e\u4efb\u4f55\u8bed\u8a00\u4e2d\u4f7f\u7528Swagger\u7684,\u975e\u5e38\u7684\u7075\u6d3b\u3001\u65b9\u4fbf\u3002"))}f.isMDXComponent=!0}}]);