!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){},function(e,t,r){"use strict";r.r(t);r(0);var o=document.querySelector(".slicer__button"),n=document.querySelector(".author__phone_button"),u=document.querySelector(".slicer__data_input"),c=document.querySelector(".slicer__data_output"),i=function(e){e.preventDefault();var t=function(e){const t={source:"TextProcessor error. Invalid input data format",processed:["TextProcessor error. Invalid input data format"]};return"string"!=typeof e?(console.log("TextProcessor error. Invalid input data format"),t):(t.source=e.replace(/[^A-Za-zА-Яа-яЁё,\d]/g,""),t.source=t.source.toLocaleLowerCase(),t.processed=t.source.split(","),t.processed=t.processed.map(e=>{let t="";for(;0!=e.length;)t+=e[0],e=e.split(e[0]).join("");return t}),t)}(u.value);u.value=t.source,c.value=t.processed};o.addEventListener("click",(function(e){return i(e)})),n.addEventListener("click",(function(e){return function e(t){t.target.classList.add("author__phone_hidden"),t.target.removeEventListener("click",e)}(e)}),{once:!0})}]);