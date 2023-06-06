import{r as h}from"./index-8db94870.js";import{g as E}from"./_commonjsHelpers-042e6b4d.js";var b={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=h,k=Symbol.for("react.element"),C=Symbol.for("react.fragment"),N=Object.prototype.hasOwnProperty,R=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function g(s,t,o){var e,a={},r=null,n=null;o!==void 0&&(r=""+o),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(n=t.ref);for(e in t)N.call(t,e)&&!w.hasOwnProperty(e)&&(a[e]=t[e]);if(s&&s.defaultProps)for(e in t=s.defaultProps,t)a[e]===void 0&&(a[e]=t[e]);return{$$typeof:k,type:s,key:r,ref:n,props:a,_owner:R.current}}c.Fragment=C;c.jsx=g;c.jsxs=g;b.exports=c;var P=b.exports,x={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(s){(function(){var t={}.hasOwnProperty;function o(){for(var e=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var n=typeof r;if(n==="string"||n==="number")e.push(r);else if(Array.isArray(r)){if(r.length){var p=o.apply(null,r);p&&e.push(p)}}else if(n==="object"){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var u in r)t.call(r,u)&&r[u]&&e.push(u)}}}return e.join(" ")}s.exports?(o.default=o,s.exports=o):window.classNames=o})()})(x);var q=x.exports;const L=E(q);const V=({label:s,color:t="primary",disabled:o=!1,loading:e=!1,onClick:a})=>P.jsx("button",{className:L("button",`button-${o?"disabled":t}`,{[`button-${t}-loading`]:!o&&e}),disabled:o||e,onClick:()=>{console.log("Fire",o),!o&&a()},"data-testid":"button-test",children:!o&&e?"Loading...":s});try{button.displayName="button",button.__docgenInfo={description:"",displayName:"button",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'},{value:'"success"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}const F=["primary","secondary","danger","success","disabled"],$={title:"Button",component:V},S={color:{control:"select",options:F},onClick:{action:"clicked"}},O={label:"Click me",color:"primary",disabled:!1,loading:!1},l={argTypes:S,args:{...O,color:"primary"}},i={argTypes:S,args:{...O,color:"secondary"}};var d,m,f;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    color: "primary"
  }
}`,...(f=(m=l.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var y,v,_;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    color: "secondary"
  }
}`,...(_=(v=i.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const A=["Primary","Secondary"];export{l as Primary,i as Secondary,A as __namedExportsOrder,$ as default};
//# sourceMappingURL=Button.stories-2ed82414.js.map
