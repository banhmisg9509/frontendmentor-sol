const d=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}};d();const l=document.getElementById("menu-btn"),c=document.getElementById("menu"),p=document.getElementById("list"),n=document.querySelectorAll("#controls button");l.addEventListener("click",function(){this.classList.toggle("open"),c.classList.toggle("flex"),c.classList.toggle("hidden")});function w(o){p.style.transform=`translate(-${o*443}px)`}n.forEach(o=>{o.addEventListener("click",function(){n.forEach(a=>a.classList.remove("bg-brightRed")),this.classList.add("bg-brightRed");const r=Array.from(n).findIndex(a=>a===this);w(r)})});
