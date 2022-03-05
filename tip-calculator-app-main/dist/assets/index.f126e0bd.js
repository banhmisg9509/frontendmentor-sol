import{j as p,r as a,R as y,a as b}from"./vendor.25271dff.js";const S=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}};S();var T="/assets/logo.dba8a83d.svg";const t=p.exports.jsx,l=p.exports.jsxs,C=p.exports.Fragment;function g({value:i,onChange:o,step:r=.1,min:c=0,isInvalid:e=!1}){return t("input",{className:`input ${e?"invalid":""}`,type:"number",step:r,min:c,value:i,onChange:o})}function j({handleSelect:i,value:o}){const r=a.exports.useRef(),[c,e]=a.exports.useState(0);a.exports.useEffect(()=>{o===0&&(r.current.value=null,e(0))},[o]);const n=s=>{let u=s===c?0:s;i(u),e(u)};return l("ul",{className:"tip__percent",children:[[5,10,15,25,50].map(s=>t("li",{className:c===s?"selected__tip":"",onClick:()=>n(s),children:l("span",{children:[s,"%"]})},s)),t("li",{className:"tip__percent__custom",children:t("input",{className:"input",placeholder:"Custom",type:"number",ref:r,onClick:s=>{e(0),i(+s.target.value)},onChange:s=>i(+s.target.value)})})]})}function A(){const[i,o]=a.exports.useState(0),[r,c]=a.exports.useState(0),[e,n]=a.exports.useState(0),[s,u]=a.exports.useState(0),[v,m]=a.exports.useState(0),x=()=>{o(0),c(0),n(0),u(0),m(0)};return a.exports.useEffect(()=>{e!==0&&r!==0&&((N,_,R)=>{let h=N/r,f=_/100*h;m(f.toFixed(2)),u((f+h).toFixed(2))})(e,i)},[e,i,r]),l(C,{children:[t("div",{className:"logo",children:t("img",{src:T,alt:"logo"})}),l("div",{className:"container",children:[l("div",{className:"left",children:[l("div",{className:"bill",children:[t("h4",{children:"Bill"}),t(g,{value:e,onChange:d=>n(d.target.value)})]}),l("div",{className:"tip",children:[t("h4",{children:"Select Tip %"}),t(j,{value:i,handleSelect:o})]}),l("div",{className:"people",children:[t("h4",{children:"Number of People"}),t(g,{isInvalid:e>0&&r===0,value:r,onChange:d=>c(+d.target.value),step:1}),e>0&&r===0&&t("h4",{className:"people__invalid",children:"Can't be zero"})]})]}),l("div",{className:"result",children:[l("div",{className:"result__amount",children:[l("h5",{children:["Tip Amount ",t("span",{children:"/ person"})]}),l("span",{children:["$",v]})]}),l("div",{className:"result__amount",children:[l("h5",{children:["Total ",t("span",{children:"/ person"})]}),l("span",{children:["$",s]})]}),t("button",{onClick:x,children:"reset"})]})]})]})}y.render(t(b.StrictMode,{children:t(A,{})}),document.getElementById("root"));
