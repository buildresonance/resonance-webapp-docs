"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[19744],{19744:(e,o,n)=>{n.r(o),n.d(o,{a:()=>u,d:()=>l});var t=n(97480),r=Object.defineProperty,i=(e,o)=>r(e,"name",{value:o,configurable:!0});function a(e,o){return o.forEach((function(o){o&&"string"!=typeof o&&!Array.isArray(o)&&Object.keys(o).forEach((function(n){if("default"!==n&&!(n in e)){var t=Object.getOwnPropertyDescriptor(o,n);Object.defineProperty(e,n,t.get?t:{enumerable:!0,get:function(){return o[n]}})}}))})),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}i(a,"_mergeNamespaces");var u={exports:{}};!function(e){function o(o,n,t){var r,i=o.getWrapperElement();return(r=i.appendChild(document.createElement("div"))).className=t?"CodeMirror-dialog CodeMirror-dialog-bottom":"CodeMirror-dialog CodeMirror-dialog-top","string"==typeof n?r.innerHTML=n:r.appendChild(n),e.addClass(i,"dialog-opened"),r}function n(e,o){e.state.currentNotificationClose&&e.state.currentNotificationClose(),e.state.currentNotificationClose=o}i(o,"dialogDiv"),i(n,"closeNotification"),e.defineExtension("openDialog",(function(t,r,a){a||(a={}),n(this,null);var u=o(this,t,a.bottom),l=!1,c=this;function s(o){if("string"==typeof o)d.value=o;else{if(l)return;l=!0,e.rmClass(u.parentNode,"dialog-opened"),u.parentNode.removeChild(u),c.focus(),a.onClose&&a.onClose(u)}}i(s,"close");var f,d=u.getElementsByTagName("input")[0];return d?(d.focus(),a.value&&(d.value=a.value,!1!==a.selectValueOnOpen&&d.select()),a.onInput&&e.on(d,"input",(function(e){a.onInput(e,d.value,s)})),a.onKeyUp&&e.on(d,"keyup",(function(e){a.onKeyUp(e,d.value,s)})),e.on(d,"keydown",(function(o){a&&a.onKeyDown&&a.onKeyDown(o,d.value,s)||((27==o.keyCode||!1!==a.closeOnEnter&&13==o.keyCode)&&(d.blur(),e.e_stop(o),s()),13==o.keyCode&&r(d.value,o))})),!1!==a.closeOnBlur&&e.on(u,"focusout",(function(e){null!==e.relatedTarget&&s()}))):(f=u.getElementsByTagName("button")[0])&&(e.on(f,"click",(function(){s(),c.focus()})),!1!==a.closeOnBlur&&e.on(f,"blur",s),f.focus()),s})),e.defineExtension("openConfirm",(function(t,r,a){n(this,null);var u=o(this,t,a&&a.bottom),l=u.getElementsByTagName("button"),c=!1,s=this,f=1;function d(){c||(c=!0,e.rmClass(u.parentNode,"dialog-opened"),u.parentNode.removeChild(u),s.focus())}i(d,"close"),l[0].focus();for(var p=0;p<l.length;++p){var g=l[p];!function(o){e.on(g,"click",(function(n){e.e_preventDefault(n),d(),o&&o(s)}))}(r[p]),e.on(g,"blur",(function(){--f,setTimeout((function(){f<=0&&d()}),200)})),e.on(g,"focus",(function(){++f}))}})),e.defineExtension("openNotification",(function(t,r){n(this,s);var a,u=o(this,t,r&&r.bottom),l=!1,c=r&&void 0!==r.duration?r.duration:5e3;function s(){l||(l=!0,clearTimeout(a),e.rmClass(u.parentNode,"dialog-opened"),u.parentNode.removeChild(u))}return i(s,"close"),e.on(u,"click",(function(o){e.e_preventDefault(o),s()})),c&&(a=setTimeout(s,c)),s}))}(t.a.exports);var l=a({__proto__:null,default:u.exports},[u.exports])}}]);