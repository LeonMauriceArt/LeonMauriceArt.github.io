(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Lc(n,e){const t=new Set(n.split(","));return i=>t.has(i)}const mt={},Xs=[],An=()=>{},hg=()=>!1,Io=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ic=n=>n.startsWith("onUpdate:"),It=Object.assign,Pc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},fg=Object.prototype.hasOwnProperty,Qe=(n,e)=>fg.call(n,e),Oe=Array.isArray,js=n=>Po(n)==="[object Map]",Bd=n=>Po(n)==="[object Set]",We=n=>typeof n=="function",bt=n=>typeof n=="string",gs=n=>typeof n=="symbol",gt=n=>n!==null&&typeof n=="object",kd=n=>(gt(n)||We(n))&&We(n.then)&&We(n.catch),Vd=Object.prototype.toString,Po=n=>Vd.call(n),dg=n=>Po(n).slice(8,-1),Hd=n=>Po(n)==="[object Object]",Nc=n=>bt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Wr=Lc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),No=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},pg=/-(\w)/g,Qs=No(n=>n.replace(pg,(e,t)=>t?t.toUpperCase():"")),mg=/\B([A-Z])/g,mr=No(n=>n.replace(mg,"-$1").toLowerCase()),zd=No(n=>n.charAt(0).toUpperCase()+n.slice(1)),el=No(n=>n?`on${zd(n)}`:""),Hi=(n,e)=>!Object.is(n,e),tl=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Gd=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},gg=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Iu;const Wd=()=>Iu||(Iu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Dc(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=bt(i)?Mg(i):Dc(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(bt(n)||gt(n))return n}const _g=/;(?![^(]*\))/g,vg=/:([^]+)/,xg=/\/\*[^]*?\*\//g;function Mg(n){const e={};return n.replace(xg,"").split(_g).forEach(t=>{if(t){const i=t.split(vg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Uc(n){let e="";if(bt(n))e=n;else if(Oe(n))for(let t=0;t<n.length;t++){const i=Uc(n[t]);i&&(e+=i+" ")}else if(gt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Sg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yg=Lc(Sg);function Xd(n){return!!n||n===""}const zt=n=>bt(n)?n:n==null?"":Oe(n)||gt(n)&&(n.toString===Vd||!We(n.toString))?JSON.stringify(n,jd,2):String(n),jd=(n,e)=>e&&e.__v_isRef?jd(n,e.value):js(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[nl(i,r)+" =>"]=s,t),{})}:Bd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>nl(t))}:gs(e)?nl(e):gt(e)&&!Oe(e)&&!Hd(e)?String(e):e,nl=(n,e="")=>{var t;return gs(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pn;class $d{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pn,!e&&Pn&&(this.index=(Pn.scopes||(Pn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Pn;try{return Pn=this,e()}finally{Pn=t}}}on(){Pn=this}off(){Pn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Eg(n){return new $d(n)}function Tg(n,e=Pn){e&&e.active&&e.effects.push(n)}function bg(){return Pn}let ds;class Oc{constructor(e,t,i,s){this.fn=e,this.trigger=t,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Tg(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Xi();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(Ag(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ji()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Bi,t=ds;try{return Bi=!0,ds=this,this._runnings++,Pu(this),this.fn()}finally{Nu(this),this._runnings--,ds=t,Bi=e}}stop(){var e;this.active&&(Pu(this),Nu(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Ag(n){return n.value}function Pu(n){n._trackId++,n._depsLength=0}function Nu(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)Yd(n.deps[e],n);n.deps.length=n._depsLength}}function Yd(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let Bi=!0,Kl=0;const qd=[];function Xi(){qd.push(Bi),Bi=!1}function ji(){const n=qd.pop();Bi=n===void 0?!0:n}function Fc(){Kl++}function Bc(){for(Kl--;!Kl&&Zl.length;)Zl.shift()()}function Kd(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const i=n.deps[n._depsLength];i!==e?(i&&Yd(i,n),n.deps[n._depsLength++]=e):n._depsLength++}}const Zl=[];function Zd(n,e,t){Fc();for(const i of n.keys()){let s;i._dirtyLevel<e&&(s??(s=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(s??(s=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&Zl.push(i.scheduler)))}Bc()}const Jd=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},Jl=new WeakMap,ps=Symbol(""),Ql=Symbol("");function fn(n,e,t){if(Bi&&ds){let i=Jl.get(n);i||Jl.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=Jd(()=>i.delete(t))),Kd(ds,s)}}function mi(n,e,t,i,s,r){const a=Jl.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Oe(n)){const l=Number(i);a.forEach((c,u)=>{(u==="length"||!gs(u)&&u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Oe(n)?Nc(t)&&o.push(a.get("length")):(o.push(a.get(ps)),js(n)&&o.push(a.get(Ql)));break;case"delete":Oe(n)||(o.push(a.get(ps)),js(n)&&o.push(a.get(Ql)));break;case"set":js(n)&&o.push(a.get(ps));break}Fc();for(const l of o)l&&Zd(l,4);Bc()}const wg=Lc("__proto__,__v_isRef,__isVue"),Qd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(gs)),Du=Rg();function Rg(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=at(this);for(let r=0,a=this.length;r<a;r++)fn(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(at)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Xi(),Fc();const i=at(this)[e].apply(this,t);return Bc(),ji(),i}}),n}function Cg(n){gs(n)||(n=String(n));const e=at(this);return fn(e,"has",n),e.hasOwnProperty(n)}class ep{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?zg:sp:r?ip:np).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Oe(e);if(!s){if(a&&Qe(Du,t))return Reflect.get(Du,t,i);if(t==="hasOwnProperty")return Cg}const o=Reflect.get(e,t,i);return(gs(t)?Qd.has(t):wg(t))||(s||fn(e,"get",t),r)?o:ln(o)?a&&Nc(t)?o:o.value:gt(o)?s?rp(o):Hc(o):o}}class tp extends ep{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=ta(r);if(!po(i)&&!ta(i)&&(r=at(r),i=at(i)),!Oe(e)&&ln(r)&&!ln(i))return l?!1:(r.value=i,!0)}const a=Oe(e)&&Nc(t)?Number(t)<e.length:Qe(e,t),o=Reflect.set(e,t,i,s);return e===at(s)&&(a?Hi(i,r)&&mi(e,"set",t,i):mi(e,"add",t,i)),o}deleteProperty(e,t){const i=Qe(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&mi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!gs(t)||!Qd.has(t))&&fn(e,"has",t),i}ownKeys(e){return fn(e,"iterate",Oe(e)?"length":ps),Reflect.ownKeys(e)}}class Lg extends ep{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Ig=new tp,Pg=new Lg,Ng=new tp(!0);const kc=n=>n,Do=n=>Reflect.getPrototypeOf(n);function Ea(n,e,t=!1,i=!1){n=n.__v_raw;const s=at(n),r=at(e);t||(Hi(e,r)&&fn(s,"get",e),fn(s,"get",r));const{has:a}=Do(s),o=i?kc:t?Gc:na;if(a.call(s,e))return o(n.get(e));if(a.call(s,r))return o(n.get(r));n!==s&&n.get(e)}function Ta(n,e=!1){const t=this.__v_raw,i=at(t),s=at(n);return e||(Hi(n,s)&&fn(i,"has",n),fn(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function ba(n,e=!1){return n=n.__v_raw,!e&&fn(at(n),"iterate",ps),Reflect.get(n,"size",n)}function Uu(n){n=at(n);const e=at(this);return Do(e).has.call(e,n)||(e.add(n),mi(e,"add",n,n)),this}function Ou(n,e){e=at(e);const t=at(this),{has:i,get:s}=Do(t);let r=i.call(t,n);r||(n=at(n),r=i.call(t,n));const a=s.call(t,n);return t.set(n,e),r?Hi(e,a)&&mi(t,"set",n,e):mi(t,"add",n,e),this}function Fu(n){const e=at(this),{has:t,get:i}=Do(e);let s=t.call(e,n);s||(n=at(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&mi(e,"delete",n,void 0),r}function Bu(){const n=at(this),e=n.size!==0,t=n.clear();return e&&mi(n,"clear",void 0,void 0),t}function Aa(n,e){return function(i,s){const r=this,a=r.__v_raw,o=at(a),l=e?kc:n?Gc:na;return!n&&fn(o,"iterate",ps),a.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function wa(n,e,t){return function(...i){const s=this.__v_raw,r=at(s),a=js(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?kc:e?Gc:na;return!e&&fn(r,"iterate",l?Ql:ps),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:o?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Mi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Dg(){const n={get(r){return Ea(this,r)},get size(){return ba(this)},has:Ta,add:Uu,set:Ou,delete:Fu,clear:Bu,forEach:Aa(!1,!1)},e={get(r){return Ea(this,r,!1,!0)},get size(){return ba(this)},has:Ta,add:Uu,set:Ou,delete:Fu,clear:Bu,forEach:Aa(!1,!0)},t={get(r){return Ea(this,r,!0)},get size(){return ba(this,!0)},has(r){return Ta.call(this,r,!0)},add:Mi("add"),set:Mi("set"),delete:Mi("delete"),clear:Mi("clear"),forEach:Aa(!0,!1)},i={get(r){return Ea(this,r,!0,!0)},get size(){return ba(this,!0)},has(r){return Ta.call(this,r,!0)},add:Mi("add"),set:Mi("set"),delete:Mi("delete"),clear:Mi("clear"),forEach:Aa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=wa(r,!1,!1),t[r]=wa(r,!0,!1),e[r]=wa(r,!1,!0),i[r]=wa(r,!0,!0)}),[n,t,e,i]}const[Ug,Og,Fg,Bg]=Dg();function Vc(n,e){const t=e?n?Bg:Fg:n?Og:Ug;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Qe(t,s)&&s in i?t:i,s,r)}const kg={get:Vc(!1,!1)},Vg={get:Vc(!1,!0)},Hg={get:Vc(!0,!1)};const np=new WeakMap,ip=new WeakMap,sp=new WeakMap,zg=new WeakMap;function Gg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wg(n){return n.__v_skip||!Object.isExtensible(n)?0:Gg(dg(n))}function Hc(n){return ta(n)?n:zc(n,!1,Ig,kg,np)}function Xg(n){return zc(n,!1,Ng,Vg,ip)}function rp(n){return zc(n,!0,Pg,Hg,sp)}function zc(n,e,t,i,s){if(!gt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const a=Wg(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function Xr(n){return ta(n)?Xr(n.__v_raw):!!(n&&n.__v_isReactive)}function ta(n){return!!(n&&n.__v_isReadonly)}function po(n){return!!(n&&n.__v_isShallow)}function ap(n){return n?!!n.__v_raw:!1}function at(n){const e=n&&n.__v_raw;return e?at(e):n}function jg(n){return Object.isExtensible(n)&&Gd(n,"__v_skip",!0),n}const na=n=>gt(n)?Hc(n):n,Gc=n=>gt(n)?rp(n):n;class op{constructor(e,t,i,s){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Oc(()=>e(this._value),()=>ro(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=at(this);return(!e._cacheable||e.effect.dirty)&&Hi(e._value,e._value=e.effect.run())&&ro(e,4),lp(e),e.effect._dirtyLevel>=2&&ro(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function $g(n,e,t=!1){let i,s;const r=We(n);return r?(i=n,s=An):(i=n.get,s=n.set),new op(i,s,r||!s,t)}function lp(n){var e;Bi&&ds&&(n=at(n),Kd(ds,(e=n.dep)!=null?e:n.dep=Jd(()=>n.dep=void 0,n instanceof op?n:void 0)))}function ro(n,e=4,t){n=at(n);const i=n.dep;i&&Zd(i,e)}function ln(n){return!!(n&&n.__v_isRef===!0)}function Fs(n){return up(n,!1)}function cp(n){return up(n,!0)}function up(n,e){return ln(n)?n:new Yg(n,e)}class Yg{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:at(e),this._value=t?e:na(e)}get value(){return lp(this),this._value}set value(e){const t=this.__v_isShallow||po(e)||ta(e);e=t?e:at(e),Hi(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:na(e),ro(this,4))}}function Gt(n){return ln(n)?n.value:n}const qg={get:(n,e,t)=>Gt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return ln(s)&&!ln(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function hp(n){return Xr(n)?n:new Proxy(n,qg)}/**
* @vue/runtime-core v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ki(n,e,t,i){try{return i?n(...i):n()}catch(s){Uo(s,e,t)}}function kn(n,e,t,i){if(We(n)){const s=ki(n,e,t,i);return s&&kd(s)&&s.catch(r=>{Uo(r,e,t)}),s}if(Oe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(kn(n[r],e,t,i));return s}}function Uo(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const a=e.proxy,o=`https://vuejs.org/error-reference/#runtime-${t}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Xi(),ki(l,null,10,[n,a,o]),ji();return}}Kg(n,t,s,i)}function Kg(n,e,t,i=!0){console.error(n)}let ia=!1,ec=!1;const Xt=[];let $n=0;const $s=[];let Ci=null,cs=0;const fp=Promise.resolve();let Wc=null;function Zg(n){const e=Wc||fp;return n?e.then(this?n.bind(this):n):e}function Jg(n){let e=$n+1,t=Xt.length;for(;e<t;){const i=e+t>>>1,s=Xt[i],r=sa(s);r<n||r===n&&s.pre?e=i+1:t=i}return e}function Xc(n){(!Xt.length||!Xt.includes(n,ia&&n.allowRecurse?$n+1:$n))&&(n.id==null?Xt.push(n):Xt.splice(Jg(n.id),0,n),dp())}function dp(){!ia&&!ec&&(ec=!0,Wc=fp.then(mp))}function Qg(n){const e=Xt.indexOf(n);e>$n&&Xt.splice(e,1)}function e_(n){Oe(n)?$s.push(...n):(!Ci||!Ci.includes(n,n.allowRecurse?cs+1:cs))&&$s.push(n),dp()}function ku(n,e,t=ia?$n+1:0){for(;t<Xt.length;t++){const i=Xt[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;Xt.splice(t,1),t--,i()}}}function pp(n){if($s.length){const e=[...new Set($s)].sort((t,i)=>sa(t)-sa(i));if($s.length=0,Ci){Ci.push(...e);return}for(Ci=e,cs=0;cs<Ci.length;cs++)Ci[cs]();Ci=null,cs=0}}const sa=n=>n.id==null?1/0:n.id,t_=(n,e)=>{const t=sa(n)-sa(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function mp(n){ec=!1,ia=!0,Xt.sort(t_);try{for($n=0;$n<Xt.length;$n++){const e=Xt[$n];e&&e.active!==!1&&ki(e,null,14)}}finally{$n=0,Xt.length=0,pp(),ia=!1,Wc=null,(Xt.length||$s.length)&&mp()}}function n_(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||mt;let s=t;const r=e.startsWith("update:"),a=r&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:h,trim:f}=i[u]||mt;f&&(s=t.map(d=>bt(d)?d.trim():d)),h&&(s=t.map(gg))}let o,l=i[o=el(e)]||i[o=el(Qs(e))];!l&&r&&(l=i[o=el(mr(e))]),l&&kn(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,kn(c,n,6,s)}}function gp(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!We(n)){const l=c=>{const u=gp(c,e,!0);u&&(o=!0,It(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(gt(n)&&i.set(n,null),null):(Oe(r)?r.forEach(l=>a[l]=null):It(a,r),gt(n)&&i.set(n,a),a)}function Oo(n,e){return!n||!Io(e)?!1:(e=e.slice(2).replace(/Once$/,""),Qe(n,e[0].toLowerCase()+e.slice(1))||Qe(n,mr(e))||Qe(n,e))}let sn=null,Fo=null;function mo(n){const e=sn;return sn=n,Fo=n&&n.type.__scopeId||null,e}function jc(n){Fo=n}function $c(){Fo=null}function St(n,e=sn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&qu(-1);const r=mo(e);let a;try{a=n(...s)}finally{mo(r),i._d&&qu(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function il(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:_,inheritAttrs:v}=n,g=mo(n);let m,b;try{if(t.shapeFlag&4){const S=s||i,I=S;m=Xn(c.call(I,S,u,h,d,f,_)),b=o}else{const S=e;m=Xn(S.length>1?S(h,{attrs:o,slots:a,emit:l}):S(h,null)),b=e.props?o:i_(o)}}catch(S){Kr.length=0,Uo(S,n,1),m=tt(er)}let x=m;if(b&&v!==!1){const S=Object.keys(b),{shapeFlag:I}=x;S.length&&I&7&&(r&&S.some(Ic)&&(b=s_(b,r)),x=tr(x,b))}return t.dirs&&(x=tr(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),m=x,mo(g),m}const i_=n=>{let e;for(const t in n)(t==="class"||t==="style"||Io(t))&&((e||(e={}))[t]=n[t]);return e},s_=(n,e)=>{const t={};for(const i in n)(!Ic(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function r_(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Vu(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(a[f]!==i[f]&&!Oo(c,f))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Vu(i,a,c):!0:!!a;return!1}function Vu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Oo(t,r))return!0}return!1}function a_({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const o_=Symbol.for("v-ndc"),l_=n=>n.__isSuspense;function c_(n,e){e&&e.pendingBranch?Oe(n)?e.effects.push(...n):e.effects.push(n):e_(n)}const u_=Symbol.for("v-scx"),h_=()=>qr(u_);function f_(n,e){return Yc(n,null,e)}const Ra={};function Ys(n,e,t){return Yc(n,e,t)}function Yc(n,e,{immediate:t,deep:i,flush:s,once:r,onTrack:a,onTrigger:o}=mt){if(e&&r){const y=e;e=(...C)=>{y(...C),I()}}const l=jt,c=y=>i===!0?y:ks(y,i===!1?1:void 0);let u,h=!1,f=!1;if(ln(n)?(u=()=>n.value,h=po(n)):Xr(n)?(u=()=>c(n),h=!0):Oe(n)?(f=!0,h=n.some(y=>Xr(y)||po(y)),u=()=>n.map(y=>{if(ln(y))return y.value;if(Xr(y))return c(y);if(We(y))return ki(y,l,2)})):We(n)?e?u=()=>ki(n,l,2):u=()=>(d&&d(),kn(n,l,3,[_])):u=An,e&&i){const y=u;u=()=>ks(y())}let d,_=y=>{d=x.onStop=()=>{ki(y,l,4),d=x.onStop=void 0}},v;if(ko)if(_=An,e?t&&kn(e,l,3,[u(),f?[]:void 0,_]):u(),s==="sync"){const y=h_();v=y.__watcherHandles||(y.__watcherHandles=[])}else return An;let g=f?new Array(n.length).fill(Ra):Ra;const m=()=>{if(!(!x.active||!x.dirty))if(e){const y=x.run();(i||h||(f?y.some((C,U)=>Hi(C,g[U])):Hi(y,g)))&&(d&&d(),kn(e,l,3,[y,g===Ra?void 0:f&&g[0]===Ra?[]:g,_]),g=y)}else x.run()};m.allowRecurse=!!e;let b;s==="sync"?b=m:s==="post"?b=()=>un(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),b=()=>Xc(m));const x=new Oc(u,An,b),S=bg(),I=()=>{x.stop(),S&&Pc(S.effects,x)};return e?t?m():g=x.run():s==="post"?un(x.run.bind(x),l&&l.suspense):x.run(),v&&v.push(I),I}function d_(n,e,t){const i=this.proxy,s=bt(n)?n.includes(".")?_p(i,n):()=>i[n]:n.bind(i,i);let r;We(e)?r=e:(r=e.handler,t=e);const a=da(this),o=Yc(s,r.bind(i),t);return a(),o}function _p(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function ks(n,e,t=0,i){if(!gt(n)||n.__v_skip)return n;if(e&&e>0){if(t>=e)return n;t++}if(i=i||new Set,i.has(n))return n;if(i.add(n),ln(n))ks(n.value,e,t,i);else if(Oe(n))for(let s=0;s<n.length;s++)ks(n[s],e,t,i);else if(Bd(n)||js(n))n.forEach(s=>{ks(s,e,t,i)});else if(Hd(n))for(const s in n)ks(n[s],e,t,i);return n}function Ki(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(Xi(),kn(l,t,8,[n.el,o,n,e]),ji())}}/*! #__NO_SIDE_EFFECTS__ */function qc(n,e){return We(n)?It({name:n.name},e,{setup:n}):n}const jr=n=>!!n.type.__asyncLoader,vp=n=>n.type.__isKeepAlive;function p_(n,e){xp(n,"a",e)}function m_(n,e){xp(n,"da",e)}function xp(n,e,t=jt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Bo(e,i,t),t){let s=t.parent;for(;s&&s.parent;)vp(s.parent.vnode)&&g_(i,e,t,s),s=s.parent}}function g_(n,e,t,i){const s=Bo(e,n,i,!0);Kc(()=>{Pc(i[e],s)},t)}function Bo(n,e,t=jt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;Xi();const o=da(t),l=kn(e,t,n,a);return o(),ji(),l});return i?s.unshift(r):s.push(r),r}}const _i=n=>(e,t=jt)=>(!ko||n==="sp")&&Bo(n,(...i)=>e(...i),t),Mp=_i("bm"),Sp=_i("m"),__=_i("bu"),v_=_i("u"),x_=_i("bum"),Kc=_i("um"),M_=_i("sp"),S_=_i("rtg"),y_=_i("rtc");function E_(n,e=jt){Bo("ec",n,e)}function T_(n,e,t,i){let s;const r=t;if(Oe(n)||bt(n)){s=new Array(n.length);for(let a=0,o=n.length;a<o;a++)s[a]=e(n[a],a,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(gt(n))if(n[Symbol.iterator])s=Array.from(n,(a,o)=>e(a,o,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];s[o]=e(n[c],c,o,r)}}else s=[];return s}function Rr(n,e,t={},i,s){if(sn.isCE||sn.parent&&jr(sn.parent)&&sn.parent.isCE)return e!=="default"&&(t.name=e),tt("slot",t,i);let r=n[e];r&&r._c&&(r._d=!1),Dt();const a=r&&yp(r(t)),o=X_(tn,{key:t.key||a&&a.key||`_${e}`},a||[],a&&n._===1?64:-2);return r&&r._c&&(r._d=!0),o}function yp(n){return n.some(e=>_o(e)?!(e.type===er||e.type===tn&&!yp(e.children)):!0)?n:null}const tc=n=>n?Bp(n)?eu(n)||n.proxy:tc(n.parent):null,$r=It(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>tc(n.parent),$root:n=>tc(n.root),$emit:n=>n.emit,$options:n=>Zc(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,Xc(n.update)}),$nextTick:n=>n.n||(n.n=Zg.bind(n.proxy)),$watch:n=>d_.bind(n)}),sl=(n,e)=>n!==mt&&!n.__isScriptSetup&&Qe(n,e),b_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(sl(i,e))return a[e]=1,i[e];if(s!==mt&&Qe(s,e))return a[e]=2,s[e];if((c=n.propsOptions[0])&&Qe(c,e))return a[e]=3,r[e];if(t!==mt&&Qe(t,e))return a[e]=4,t[e];nc&&(a[e]=0)}}const u=$r[e];let h,f;if(u)return e==="$attrs"&&fn(n.attrs,"get",""),u(n);if((h=o.__cssModules)&&(h=h[e]))return h;if(t!==mt&&Qe(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,Qe(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return sl(s,e)?(s[e]=t,!0):i!==mt&&Qe(i,e)?(i[e]=t,!0):Qe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},a){let o;return!!t[a]||n!==mt&&Qe(n,a)||sl(e,a)||(o=r[0])&&Qe(o,a)||Qe(i,a)||Qe($r,a)||Qe(s.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Qe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Hu(n){return Oe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let nc=!0;function A_(n){const e=Zc(n),t=n.proxy,i=n.ctx;nc=!1,e.beforeCreate&&zu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:_,activated:v,deactivated:g,beforeDestroy:m,beforeUnmount:b,destroyed:x,unmounted:S,render:I,renderTracked:y,renderTriggered:C,errorCaptured:U,serverPrefetch:E,expose:T,inheritAttrs:W,components:$,directives:F,filters:ne}=e;if(c&&w_(c,i,null),a)for(const ie in a){const X=a[ie];We(X)&&(i[ie]=X.bind(t))}if(s){const ie=s.call(t,t);gt(ie)&&(n.data=Hc(ie))}if(nc=!0,r)for(const ie in r){const X=r[ie],ce=We(X)?X.bind(t,t):We(X.get)?X.get.bind(t,t):An,ue=!We(X)&&We(X.set)?X.set.bind(t):An,ge=Dn({get:ce,set:ue});Object.defineProperty(i,ie,{enumerable:!0,configurable:!0,get:()=>ge.value,set:Re=>ge.value=Re})}if(o)for(const ie in o)Ep(o[ie],i,t,ie);if(l){const ie=We(l)?l.call(t):l;Reflect.ownKeys(ie).forEach(X=>{N_(X,ie[X])})}u&&zu(u,n,"c");function ae(ie,X){Oe(X)?X.forEach(ce=>ie(ce.bind(t))):X&&ie(X.bind(t))}if(ae(Mp,h),ae(Sp,f),ae(__,d),ae(v_,_),ae(p_,v),ae(m_,g),ae(E_,U),ae(y_,y),ae(S_,C),ae(x_,b),ae(Kc,S),ae(M_,E),Oe(T))if(T.length){const ie=n.exposed||(n.exposed={});T.forEach(X=>{Object.defineProperty(ie,X,{get:()=>t[X],set:ce=>t[X]=ce})})}else n.exposed||(n.exposed={});I&&n.render===An&&(n.render=I),W!=null&&(n.inheritAttrs=W),$&&(n.components=$),F&&(n.directives=F)}function w_(n,e,t=An){Oe(n)&&(n=ic(n));for(const i in n){const s=n[i];let r;gt(s)?"default"in s?r=qr(s.from||i,s.default,!0):r=qr(s.from||i):r=qr(s),ln(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function zu(n,e,t){kn(Oe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ep(n,e,t,i){const s=i.includes(".")?_p(t,i):()=>t[i];if(bt(n)){const r=e[n];We(r)&&Ys(s,r)}else if(We(n))Ys(s,n.bind(t));else if(gt(n))if(Oe(n))n.forEach(r=>Ep(r,e,t,i));else{const r=We(n.handler)?n.handler.bind(t):e[n.handler];We(r)&&Ys(s,r,n)}}function Zc(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>go(l,c,a,!0)),go(l,e,a)),gt(e)&&r.set(e,l),l}function go(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&go(n,r,t,!0),s&&s.forEach(a=>go(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=R_[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const R_={data:Gu,props:Wu,emits:Wu,methods:Hr,computed:Hr,beforeCreate:Kt,created:Kt,beforeMount:Kt,mounted:Kt,beforeUpdate:Kt,updated:Kt,beforeDestroy:Kt,beforeUnmount:Kt,destroyed:Kt,unmounted:Kt,activated:Kt,deactivated:Kt,errorCaptured:Kt,serverPrefetch:Kt,components:Hr,directives:Hr,watch:L_,provide:Gu,inject:C_};function Gu(n,e){return e?n?function(){return It(We(n)?n.call(this,this):n,We(e)?e.call(this,this):e)}:e:n}function C_(n,e){return Hr(ic(n),ic(e))}function ic(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Kt(n,e){return n?[...new Set([].concat(n,e))]:e}function Hr(n,e){return n?It(Object.create(null),n,e):e}function Wu(n,e){return n?Oe(n)&&Oe(e)?[...new Set([...n,...e])]:It(Object.create(null),Hu(n),Hu(e??{})):e}function L_(n,e){if(!n)return e;if(!e)return n;const t=It(Object.create(null),n);for(const i in e)t[i]=Kt(n[i],e[i]);return t}function Tp(){return{app:null,config:{isNativeTag:hg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let I_=0;function P_(n,e){return function(i,s=null){We(i)||(i=It({},i)),s!=null&&!gt(s)&&(s=null);const r=Tp(),a=new WeakSet;let o=!1;const l=r.app={_uid:I_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:iv,get config(){return r.config},set config(c){},use(c,...u){return a.has(c)||(c&&We(c.install)?(a.add(c),c.install(l,...u)):We(c)&&(a.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!o){const f=tt(i,s);return f.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(f,c):n(f,c,h),o=!0,l._container=c,c.__vue_app__=l,eu(f.component)||f.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){const u=Yr;Yr=l;try{return c()}finally{Yr=u}}};return l}}let Yr=null;function N_(n,e){if(jt){let t=jt.provides;const i=jt.parent&&jt.parent.provides;i===t&&(t=jt.provides=Object.create(i)),t[n]=e}}function qr(n,e,t=!1){const i=jt||sn;if(i||Yr){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Yr._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&We(e)?e.call(i&&i.proxy):e}}const bp={},Ap=()=>Object.create(bp),wp=n=>Object.getPrototypeOf(n)===bp;function D_(n,e,t,i=!1){const s={},r=Ap();n.propsDefaults=Object.create(null),Rp(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:Xg(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function U_(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=at(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Oo(n.emitsOptions,f))continue;const d=e[f];if(l)if(Qe(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const _=Qs(f);s[_]=sc(l,o,_,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{Rp(n,e,s,r)&&(c=!0);let u;for(const h in o)(!e||!Qe(e,h)&&((u=mr(h))===h||!Qe(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=sc(l,o,h,void 0,n,!0)):delete s[h]);if(r!==o)for(const h in r)(!e||!Qe(e,h))&&(delete r[h],c=!0)}c&&mi(n.attrs,"set","")}function Rp(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Wr(l))continue;const c=e[l];let u;s&&Qe(s,u=Qs(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:Oo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=at(t),c=o||mt;for(let u=0;u<r.length;u++){const h=r[u];t[h]=sc(s,l,h,c[h],n,!Qe(c,h))}}return a}function sc(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=Qe(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&We(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=da(s);i=c[t]=l.call(null,e),u()}}else i=l}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===mr(t))&&(i=!0))}return i}function Cp(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!We(n)){const u=h=>{l=!0;const[f,d]=Cp(h,e,!0);It(a,f),d&&o.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return gt(n)&&i.set(n,Xs),Xs;if(Oe(r))for(let u=0;u<r.length;u++){const h=Qs(r[u]);Xu(h)&&(a[h]=mt)}else if(r)for(const u in r){const h=Qs(u);if(Xu(h)){const f=r[u],d=a[h]=Oe(f)||We(f)?{type:f}:It({},f);if(d){const _=Yu(Boolean,d.type),v=Yu(String,d.type);d[0]=_>-1,d[1]=v<0||_<v,(_>-1||Qe(d,"default"))&&o.push(h)}}}const c=[a,o];return gt(n)&&i.set(n,c),c}function Xu(n){return n[0]!=="$"&&!Wr(n)}function ju(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function $u(n,e){return ju(n)===ju(e)}function Yu(n,e){return Oe(e)?e.findIndex(t=>$u(t,n)):We(e)&&$u(e,n)?0:-1}const Lp=n=>n[0]==="_"||n==="$stable",Jc=n=>Oe(n)?n.map(Xn):[Xn(n)],O_=(n,e,t)=>{if(e._n)return e;const i=St((...s)=>Jc(e(...s)),t);return i._c=!1,i},Ip=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Lp(s))continue;const r=n[s];if(We(r))e[s]=O_(s,r,i);else if(r!=null){const a=Jc(r);e[s]=()=>a}}},Pp=(n,e)=>{const t=Jc(e);n.slots.default=()=>t},F_=(n,e)=>{const t=n.slots=Ap();if(n.vnode.shapeFlag&32){const i=e._;i?(It(t,e),Gd(t,"_",i)):Ip(e,t)}else e&&Pp(n,e)},B_=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=mt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:(It(s,e),!t&&o===1&&delete s._):(r=!e.$stable,Ip(e,s)),a=e}else e&&(Pp(n,e),a={default:1});if(r)for(const o in s)!Lp(o)&&a[o]==null&&delete s[o]};function rc(n,e,t,i,s=!1){if(Oe(n)){n.forEach((f,d)=>rc(f,e&&(Oe(e)?e[d]:e),t,i,s));return}if(jr(i)&&!s)return;const r=i.shapeFlag&4?eu(i.component)||i.component.proxy:i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===mt?o.refs={}:o.refs,h=o.setupState;if(c!=null&&c!==l&&(bt(c)?(u[c]=null,Qe(h,c)&&(h[c]=null)):ln(c)&&(c.value=null)),We(l))ki(l,o,12,[a,u]);else{const f=bt(l),d=ln(l);if(f||d){const _=()=>{if(n.f){const v=f?Qe(h,l)?h[l]:u[l]:l.value;s?Oe(v)&&Pc(v,r):Oe(v)?v.includes(r)||v.push(r):f?(u[l]=[r],Qe(h,l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else f?(u[l]=a,Qe(h,l)&&(h[l]=a)):d&&(l.value=a,n.k&&(u[n.k]=a))};a?(_.id=-1,un(_,t)):_()}}}const un=c_;function k_(n){return V_(n)}function V_(n,e){const t=Wd();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=An,insertStaticContent:_}=n,v=(P,A,B,Y=null,Z=null,re=null,w=void 0,p=null,M=!!A.dynamicChildren)=>{if(P===A)return;P&&!Cr(P,A)&&(Y=fe(P),Re(P,Z,re,!0),P=null),A.patchFlag===-2&&(M=!1,A.dynamicChildren=null);const{type:R,ref:D,shapeFlag:H}=A;switch(R){case fa:g(P,A,B,Y);break;case er:m(P,A,B,Y);break;case ao:P==null&&b(A,B,Y,w);break;case tn:$(P,A,B,Y,Z,re,w,p,M);break;default:H&1?I(P,A,B,Y,Z,re,w,p,M):H&6?F(P,A,B,Y,Z,re,w,p,M):(H&64||H&128)&&R.process(P,A,B,Y,Z,re,w,p,M,z)}D!=null&&Z&&rc(D,P&&P.ref,re,A||P,!A)},g=(P,A,B,Y)=>{if(P==null)i(A.el=o(A.children),B,Y);else{const Z=A.el=P.el;A.children!==P.children&&c(Z,A.children)}},m=(P,A,B,Y)=>{P==null?i(A.el=l(A.children||""),B,Y):A.el=P.el},b=(P,A,B,Y)=>{[P.el,P.anchor]=_(P.children,A,B,Y,P.el,P.anchor)},x=({el:P,anchor:A},B,Y)=>{let Z;for(;P&&P!==A;)Z=f(P),i(P,B,Y),P=Z;i(A,B,Y)},S=({el:P,anchor:A})=>{let B;for(;P&&P!==A;)B=f(P),s(P),P=B;s(A)},I=(P,A,B,Y,Z,re,w,p,M)=>{A.type==="svg"?w="svg":A.type==="math"&&(w="mathml"),P==null?y(A,B,Y,Z,re,w,p,M):E(P,A,Z,re,w,p,M)},y=(P,A,B,Y,Z,re,w,p)=>{let M,R;const{props:D,shapeFlag:H,transition:j,dirs:N}=P;if(M=P.el=a(P.type,re,D&&D.is,D),H&8?u(M,P.children):H&16&&U(P.children,M,null,Y,Z,rl(P,re),w,p),N&&Ki(P,null,Y,"created"),C(M,P,P.scopeId,w,Y),D){for(const le in D)le!=="value"&&!Wr(le)&&r(M,le,null,D[le],re,P.children,Y,Z,pe);"value"in D&&r(M,"value",null,D.value,re),(R=D.onVnodeBeforeMount)&&Wn(R,Y,P)}N&&Ki(P,null,Y,"beforeMount");const O=H_(Z,j);O&&j.beforeEnter(M),i(M,A,B),((R=D&&D.onVnodeMounted)||O||N)&&un(()=>{R&&Wn(R,Y,P),O&&j.enter(M),N&&Ki(P,null,Y,"mounted")},Z)},C=(P,A,B,Y,Z)=>{if(B&&d(P,B),Y)for(let re=0;re<Y.length;re++)d(P,Y[re]);if(Z){let re=Z.subTree;if(A===re){const w=Z.vnode;C(P,w,w.scopeId,w.slotScopeIds,Z.parent)}}},U=(P,A,B,Y,Z,re,w,p,M=0)=>{for(let R=M;R<P.length;R++){const D=P[R]=p?Li(P[R]):Xn(P[R]);v(null,D,A,B,Y,Z,re,w,p)}},E=(P,A,B,Y,Z,re,w)=>{const p=A.el=P.el;let{patchFlag:M,dynamicChildren:R,dirs:D}=A;M|=P.patchFlag&16;const H=P.props||mt,j=A.props||mt;let N;if(B&&Zi(B,!1),(N=j.onVnodeBeforeUpdate)&&Wn(N,B,A,P),D&&Ki(A,P,B,"beforeUpdate"),B&&Zi(B,!0),R?T(P.dynamicChildren,R,p,B,Y,rl(A,Z),re):w||X(P,A,p,null,B,Y,rl(A,Z),re,!1),M>0){if(M&16)W(p,A,H,j,B,Y,Z);else if(M&2&&H.class!==j.class&&r(p,"class",null,j.class,Z),M&4&&r(p,"style",H.style,j.style,Z),M&8){const O=A.dynamicProps;for(let le=0;le<O.length;le++){const ee=O[le],de=H[ee],Ce=j[ee];(Ce!==de||ee==="value")&&r(p,ee,de,Ce,Z,P.children,B,Y,pe)}}M&1&&P.children!==A.children&&u(p,A.children)}else!w&&R==null&&W(p,A,H,j,B,Y,Z);((N=j.onVnodeUpdated)||D)&&un(()=>{N&&Wn(N,B,A,P),D&&Ki(A,P,B,"updated")},Y)},T=(P,A,B,Y,Z,re,w)=>{for(let p=0;p<A.length;p++){const M=P[p],R=A[p],D=M.el&&(M.type===tn||!Cr(M,R)||M.shapeFlag&70)?h(M.el):B;v(M,R,D,null,Y,Z,re,w,!0)}},W=(P,A,B,Y,Z,re,w)=>{if(B!==Y){if(B!==mt)for(const p in B)!Wr(p)&&!(p in Y)&&r(P,p,B[p],null,w,A.children,Z,re,pe);for(const p in Y){if(Wr(p))continue;const M=Y[p],R=B[p];M!==R&&p!=="value"&&r(P,p,R,M,w,A.children,Z,re,pe)}"value"in Y&&r(P,"value",B.value,Y.value,w)}},$=(P,A,B,Y,Z,re,w,p,M)=>{const R=A.el=P?P.el:o(""),D=A.anchor=P?P.anchor:o("");let{patchFlag:H,dynamicChildren:j,slotScopeIds:N}=A;N&&(p=p?p.concat(N):N),P==null?(i(R,B,Y),i(D,B,Y),U(A.children||[],B,D,Z,re,w,p,M)):H>0&&H&64&&j&&P.dynamicChildren?(T(P.dynamicChildren,j,B,Z,re,w,p),(A.key!=null||Z&&A===Z.subTree)&&Np(P,A,!0)):X(P,A,B,D,Z,re,w,p,M)},F=(P,A,B,Y,Z,re,w,p,M)=>{A.slotScopeIds=p,P==null?A.shapeFlag&512?Z.ctx.activate(A,B,Y,w,M):ne(A,B,Y,Z,re,w,M):te(P,A,M)},ne=(P,A,B,Y,Z,re,w)=>{const p=P.component=Z_(P,Y,Z);if(vp(P)&&(p.ctx.renderer=z),J_(p),p.asyncDep){if(Z&&Z.registerDep(p,ae),!P.el){const M=p.subTree=tt(er);m(null,M,A,B)}}else ae(p,P,A,B,Z,re,w)},te=(P,A,B)=>{const Y=A.component=P.component;if(r_(P,A,B))if(Y.asyncDep&&!Y.asyncResolved){ie(Y,A,B);return}else Y.next=A,Qg(Y.update),Y.effect.dirty=!0,Y.update();else A.el=P.el,Y.vnode=A},ae=(P,A,B,Y,Z,re,w)=>{const p=()=>{if(P.isMounted){let{next:D,bu:H,u:j,parent:N,vnode:O}=P;{const ye=Dp(P);if(ye){D&&(D.el=O.el,ie(P,D,w)),ye.asyncDep.then(()=>{P.isUnmounted||p()});return}}let le=D,ee;Zi(P,!1),D?(D.el=O.el,ie(P,D,w)):D=O,H&&tl(H),(ee=D.props&&D.props.onVnodeBeforeUpdate)&&Wn(ee,N,D,O),Zi(P,!0);const de=il(P),Ce=P.subTree;P.subTree=de,v(Ce,de,h(Ce.el),fe(Ce),P,Z,re),D.el=de.el,le===null&&a_(P,de.el),j&&un(j,Z),(ee=D.props&&D.props.onVnodeUpdated)&&un(()=>Wn(ee,N,D,O),Z)}else{let D;const{el:H,props:j}=A,{bm:N,m:O,parent:le}=P,ee=jr(A);if(Zi(P,!1),N&&tl(N),!ee&&(D=j&&j.onVnodeBeforeMount)&&Wn(D,le,A),Zi(P,!0),H&&be){const de=()=>{P.subTree=il(P),be(H,P.subTree,P,Z,null)};ee?A.type.__asyncLoader().then(()=>!P.isUnmounted&&de()):de()}else{const de=P.subTree=il(P);v(null,de,B,Y,P,Z,re),A.el=de.el}if(O&&un(O,Z),!ee&&(D=j&&j.onVnodeMounted)){const de=A;un(()=>Wn(D,le,de),Z)}(A.shapeFlag&256||le&&jr(le.vnode)&&le.vnode.shapeFlag&256)&&P.a&&un(P.a,Z),P.isMounted=!0,A=B=Y=null}},M=P.effect=new Oc(p,An,()=>Xc(R),P.scope),R=P.update=()=>{M.dirty&&M.run()};R.id=P.uid,Zi(P,!0),R()},ie=(P,A,B)=>{A.component=P;const Y=P.vnode.props;P.vnode=A,P.next=null,U_(P,A.props,Y,B),B_(P,A.children,B),Xi(),ku(P),ji()},X=(P,A,B,Y,Z,re,w,p,M=!1)=>{const R=P&&P.children,D=P?P.shapeFlag:0,H=A.children,{patchFlag:j,shapeFlag:N}=A;if(j>0){if(j&128){ue(R,H,B,Y,Z,re,w,p,M);return}else if(j&256){ce(R,H,B,Y,Z,re,w,p,M);return}}N&8?(D&16&&pe(R,Z,re),H!==R&&u(B,H)):D&16?N&16?ue(R,H,B,Y,Z,re,w,p,M):pe(R,Z,re,!0):(D&8&&u(B,""),N&16&&U(H,B,Y,Z,re,w,p,M))},ce=(P,A,B,Y,Z,re,w,p,M)=>{P=P||Xs,A=A||Xs;const R=P.length,D=A.length,H=Math.min(R,D);let j;for(j=0;j<H;j++){const N=A[j]=M?Li(A[j]):Xn(A[j]);v(P[j],N,B,null,Z,re,w,p,M)}R>D?pe(P,Z,re,!0,!1,H):U(A,B,Y,Z,re,w,p,M,H)},ue=(P,A,B,Y,Z,re,w,p,M)=>{let R=0;const D=A.length;let H=P.length-1,j=D-1;for(;R<=H&&R<=j;){const N=P[R],O=A[R]=M?Li(A[R]):Xn(A[R]);if(Cr(N,O))v(N,O,B,null,Z,re,w,p,M);else break;R++}for(;R<=H&&R<=j;){const N=P[H],O=A[j]=M?Li(A[j]):Xn(A[j]);if(Cr(N,O))v(N,O,B,null,Z,re,w,p,M);else break;H--,j--}if(R>H){if(R<=j){const N=j+1,O=N<D?A[N].el:Y;for(;R<=j;)v(null,A[R]=M?Li(A[R]):Xn(A[R]),B,O,Z,re,w,p,M),R++}}else if(R>j)for(;R<=H;)Re(P[R],Z,re,!0),R++;else{const N=R,O=R,le=new Map;for(R=O;R<=j;R++){const Ze=A[R]=M?Li(A[R]):Xn(A[R]);Ze.key!=null&&le.set(Ze.key,R)}let ee,de=0;const Ce=j-O+1;let ye=!1,Me=0;const Ne=new Array(Ce);for(R=0;R<Ce;R++)Ne[R]=0;for(R=N;R<=H;R++){const Ze=P[R];if(de>=Ce){Re(Ze,Z,re,!0);continue}let Le;if(Ze.key!=null)Le=le.get(Ze.key);else for(ee=O;ee<=j;ee++)if(Ne[ee-O]===0&&Cr(Ze,A[ee])){Le=ee;break}Le===void 0?Re(Ze,Z,re,!0):(Ne[Le-O]=R+1,Le>=Me?Me=Le:ye=!0,v(Ze,A[Le],B,null,Z,re,w,p,M),de++)}const Xe=ye?z_(Ne):Xs;for(ee=Xe.length-1,R=Ce-1;R>=0;R--){const Ze=O+R,Le=A[Ze],k=Ze+1<D?A[Ze+1].el:Y;Ne[R]===0?v(null,Le,B,k,Z,re,w,p,M):ye&&(ee<0||R!==Xe[ee]?ge(Le,B,k,2):ee--)}}},ge=(P,A,B,Y,Z=null)=>{const{el:re,type:w,transition:p,children:M,shapeFlag:R}=P;if(R&6){ge(P.component.subTree,A,B,Y);return}if(R&128){P.suspense.move(A,B,Y);return}if(R&64){w.move(P,A,B,z);return}if(w===tn){i(re,A,B);for(let H=0;H<M.length;H++)ge(M[H],A,B,Y);i(P.anchor,A,B);return}if(w===ao){x(P,A,B);return}if(Y!==2&&R&1&&p)if(Y===0)p.beforeEnter(re),i(re,A,B),un(()=>p.enter(re),Z);else{const{leave:H,delayLeave:j,afterLeave:N}=p,O=()=>i(re,A,B),le=()=>{H(re,()=>{O(),N&&N()})};j?j(re,O,le):le()}else i(re,A,B)},Re=(P,A,B,Y=!1,Z=!1)=>{const{type:re,props:w,ref:p,children:M,dynamicChildren:R,shapeFlag:D,patchFlag:H,dirs:j}=P;if(p!=null&&rc(p,null,B,P,!0),D&256){A.ctx.deactivate(P);return}const N=D&1&&j,O=!jr(P);let le;if(O&&(le=w&&w.onVnodeBeforeUnmount)&&Wn(le,A,P),D&6)he(P.component,B,Y);else{if(D&128){P.suspense.unmount(B,Y);return}N&&Ki(P,null,A,"beforeUnmount"),D&64?P.type.remove(P,A,B,Z,z,Y):R&&(re!==tn||H>0&&H&64)?pe(R,A,B,!1,!0):(re===tn&&H&384||!Z&&D&16)&&pe(M,A,B),Y&&Ke(P)}(O&&(le=w&&w.onVnodeUnmounted)||N)&&un(()=>{le&&Wn(le,A,P),N&&Ki(P,null,A,"unmounted")},B)},Ke=P=>{const{type:A,el:B,anchor:Y,transition:Z}=P;if(A===tn){Q(B,Y);return}if(A===ao){S(P);return}const re=()=>{s(B),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(P.shapeFlag&1&&Z&&!Z.persisted){const{leave:w,delayLeave:p}=Z,M=()=>w(B,re);p?p(P.el,re,M):M()}else re()},Q=(P,A)=>{let B;for(;P!==A;)B=f(P),s(P),P=B;s(A)},he=(P,A,B)=>{const{bum:Y,scope:Z,update:re,subTree:w,um:p}=P;Y&&tl(Y),Z.stop(),re&&(re.active=!1,Re(w,P,A,B)),p&&un(p,A),un(()=>{P.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},pe=(P,A,B,Y=!1,Z=!1,re=0)=>{for(let w=re;w<P.length;w++)Re(P[w],A,B,Y,Z)},fe=P=>P.shapeFlag&6?fe(P.component.subTree):P.shapeFlag&128?P.suspense.next():f(P.anchor||P.el);let De=!1;const Fe=(P,A,B)=>{P==null?A._vnode&&Re(A._vnode,null,null,!0):v(A._vnode||null,P,A,null,null,null,B),De||(De=!0,ku(),pp(),De=!1),A._vnode=P},z={p:v,um:Re,m:ge,r:Ke,mt:ne,mc:U,pc:X,pbc:T,n:fe,o:n};let Je,be;return{render:Fe,hydrate:Je,createApp:P_(Fe,Je)}}function rl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Zi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function H_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Np(n,e,t=!1){const i=n.children,s=e.children;if(Oe(i)&&Oe(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=Li(s[r]),o.el=a.el),t||Np(a,o)),o.type===fa&&(o.el=a.el)}}function z_(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function Dp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Dp(e)}const G_=n=>n.__isTeleport,tn=Symbol.for("v-fgt"),fa=Symbol.for("v-txt"),er=Symbol.for("v-cmt"),ao=Symbol.for("v-stc"),Kr=[];let On=null;function Dt(n=!1){Kr.push(On=n?null:[])}function W_(){Kr.pop(),On=Kr[Kr.length-1]||null}let ra=1;function qu(n){ra+=n}function Up(n){return n.dynamicChildren=ra>0?On||Xs:null,W_(),ra>0&&On&&On.push(n),n}function $t(n,e,t,i,s,r){return Up(Ye(n,e,t,i,s,r,!0))}function X_(n,e,t,i,s){return Up(tt(n,e,t,i,s,!0))}function _o(n){return n?n.__v_isVNode===!0:!1}function Cr(n,e){return n.type===e.type&&n.key===e.key}const Op=({key:n})=>n??null,oo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?bt(n)||ln(n)||We(n)?{i:sn,r:n,k:e,f:!!t}:n:null);function Ye(n,e=null,t=null,i=0,s=null,r=n===tn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Op(e),ref:e&&oo(e),scopeId:Fo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:sn};return o?(Qc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=bt(t)?8:16),ra>0&&!a&&On&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&On.push(l),l}const tt=j_;function j_(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===o_)&&(n=er),_o(n)){const o=tr(n,e,!0);return t&&Qc(o,t),ra>0&&!r&&On&&(o.shapeFlag&6?On[On.indexOf(n)]=o:On.push(o)),o.patchFlag|=-2,o}if(nv(n)&&(n=n.__vccOpts),e){e=$_(e);let{class:o,style:l}=e;o&&!bt(o)&&(e.class=Uc(o)),gt(l)&&(ap(l)&&!Oe(l)&&(l=It({},l)),e.style=Dc(l))}const a=bt(n)?1:l_(n)?128:G_(n)?64:gt(n)?4:We(n)?2:0;return Ye(n,e,t,i,s,a,r,!0)}function $_(n){return n?ap(n)||wp(n)?It({},n):n:null}function tr(n,e,t=!1){const{props:i,ref:s,patchFlag:r,children:a}=n,o=e?Y_(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&Op(o),ref:e&&e.ref?t&&s?Oe(s)?s.concat(oo(e)):[s,oo(e)]:oo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==tn?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&tr(n.ssContent),ssFallback:n.ssFallback&&tr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Ni(n=" ",e=0){return tt(fa,null,n,e)}function Fp(n,e){const t=tt(ao,null,n);return t.staticCount=e,t}function Xn(n){return n==null||typeof n=="boolean"?tt(er):Oe(n)?tt(tn,null,n.slice()):typeof n=="object"?Li(n):tt(fa,null,String(n))}function Li(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:tr(n)}function Qc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Oe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Qc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!wp(e)?e._ctx=sn:s===3&&sn&&(sn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:sn},t=32):(e=String(e),i&64?(t=16,e=[Ni(e)]):t=8);n.children=e,n.shapeFlag|=t}function Y_(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Uc([e.class,i.class]));else if(s==="style")e.style=Dc([e.style,i.style]);else if(Io(s)){const r=e[s],a=i[s];a&&r!==a&&!(Oe(r)&&r.includes(a))&&(e[s]=r?[].concat(r,a):a)}else s!==""&&(e[s]=i[s])}return e}function Wn(n,e,t,i=null){kn(n,e,7,[t,i])}const q_=Tp();let K_=0;function Z_(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||q_,r={uid:K_++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new $d(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cp(i,s),emitsOptions:gp(i,s),emit:null,emitted:null,propsDefaults:mt,inheritAttrs:i.inheritAttrs,ctx:mt,data:mt,props:mt,attrs:mt,slots:mt,refs:mt,setupState:mt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=n_.bind(null,r),n.ce&&n.ce(r),r}let jt=null;const aa=()=>jt||sn;let vo,ac;{const n=Wd(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};vo=e("__VUE_INSTANCE_SETTERS__",t=>jt=t),ac=e("__VUE_SSR_SETTERS__",t=>ko=t)}const da=n=>{const e=jt;return vo(n),n.scope.on(),()=>{n.scope.off(),vo(e)}},Ku=()=>{jt&&jt.scope.off(),vo(null)};function Bp(n){return n.vnode.shapeFlag&4}let ko=!1;function J_(n,e=!1){e&&ac(e);const{props:t,children:i}=n.vnode,s=Bp(n);D_(n,t,s,e),F_(n,i);const r=s?Q_(n,e):void 0;return e&&ac(!1),r}function Q_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,b_);const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?tv(n):null,r=da(n);Xi();const a=ki(i,n,0,[n.props,s]);if(ji(),r(),kd(a)){if(a.then(Ku,Ku),e)return a.then(o=>{Zu(n,o,e)}).catch(o=>{Uo(o,n,0)});n.asyncDep=a}else Zu(n,a,e)}else kp(n,e)}function Zu(n,e,t){We(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:gt(e)&&(n.setupState=hp(e)),kp(n,t)}let Ju;function kp(n,e,t){const i=n.type;if(!n.render){if(!e&&Ju&&!i.render){const s=i.template||Zc(n).template;if(s){const{isCustomElement:r,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=It(It({isCustomElement:r,delimiters:o},a),l);i.render=Ju(s,c)}}n.render=i.render||An}{const s=da(n);Xi();try{A_(n)}finally{ji(),s()}}}const ev={get(n,e){return fn(n,"get",""),n[e]}};function tv(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,ev),slots:n.slots,emit:n.emit,expose:e}}function eu(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(hp(jg(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in $r)return $r[t](n)},has(e,t){return t in e||t in $r}}))}function nv(n){return We(n)&&"__vccOpts"in n}const Dn=(n,e)=>$g(n,e,ko);function Vp(n,e,t){const i=arguments.length;return i===2?gt(e)&&!Oe(e)?_o(e)?tt(n,null,[e]):tt(n,e):tt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&_o(t)&&(t=[t]),tt(n,e,t))}const iv="3.4.25";/**
* @vue/runtime-dom v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const sv="http://www.w3.org/2000/svg",rv="http://www.w3.org/1998/Math/MathML",Ii=typeof document<"u"?document:null,Qu=Ii&&Ii.createElement("template"),av={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Ii.createElementNS(sv,n):e==="mathml"?Ii.createElementNS(rv,n):Ii.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Ii.createTextNode(n),createComment:n=>Ii.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ii.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Qu.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const o=Qu.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ov=Symbol("_vtc");function lv(n,e,t){const i=n[ov];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const eh=Symbol("_vod"),cv=Symbol("_vsh"),uv=Symbol(""),hv=/(^|;)\s*display\s*:/;function fv(n,e,t){const i=n.style,s=bt(t);let r=!1;if(t&&!s){if(e)if(bt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&lo(i,o,"")}else for(const a in e)t[a]==null&&lo(i,a,"");for(const a in t)a==="display"&&(r=!0),lo(i,a,t[a])}else if(s){if(e!==t){const a=i[uv];a&&(t+=";"+a),i.cssText=t,r=hv.test(t)}}else e&&n.removeAttribute("style");eh in n&&(n[eh]=r?i.display:"",n[cv]&&(i.display="none"))}const th=/\s*!important$/;function lo(n,e,t){if(Oe(t))t.forEach(i=>lo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=dv(n,e);th.test(t)?n.setProperty(mr(i),t.replace(th,""),"important"):n[i]=t}}const nh=["Webkit","Moz","ms"],al={};function dv(n,e){const t=al[e];if(t)return t;let i=Qs(e);if(i!=="filter"&&i in n)return al[e]=i;i=zd(i);for(let s=0;s<nh.length;s++){const r=nh[s]+i;if(r in n)return al[e]=r}return e}const ih="http://www.w3.org/1999/xlink";function pv(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(ih,e.slice(6,e.length)):n.setAttributeNS(ih,e,t);else{const r=yg(e);t==null||r&&!Xd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}function mv(n,e,t,i,s,r,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,s,r),n[e]=t??"";return}const o=n.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?n.getAttribute("value")||"":n.value,u=t??"";(c!==u||!("_value"in n))&&(n.value=u),t==null&&n.removeAttribute(e),n._value=t;return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Xd(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function gv(n,e,t,i){n.addEventListener(e,t,i)}function _v(n,e,t,i){n.removeEventListener(e,t,i)}const sh=Symbol("_vei");function vv(n,e,t,i,s=null){const r=n[sh]||(n[sh]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=xv(e);if(i){const c=r[e]=yv(i,s);gv(n,o,c,l)}else a&&(_v(n,o,a,l),r[e]=void 0)}}const rh=/(?:Once|Passive|Capture)$/;function xv(n){let e;if(rh.test(n)){e={};let i;for(;i=n.match(rh);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):mr(n.slice(2)),e]}let ol=0;const Mv=Promise.resolve(),Sv=()=>ol||(Mv.then(()=>ol=0),ol=Date.now());function yv(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;kn(Ev(i,t.value),e,5,[i])};return t.value=n,t.attached=Sv(),t}function Ev(n,e){if(Oe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const ah=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Tv=(n,e,t,i,s,r,a,o,l)=>{const c=s==="svg";e==="class"?lv(n,i,c):e==="style"?fv(n,t,i):Io(e)?Ic(e)||vv(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bv(n,e,i,c))?mv(n,e,i,r,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),pv(n,e,i,c))};function bv(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&ah(e)&&We(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ah(e)&&bt(t)?!1:e in n}const Av=It({patchProp:Tv},av);let oh;function wv(){return oh||(oh=k_(Av))}const Rv=(...n)=>{const e=wv().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Lv(i);if(!s)return;const r=e._component;!We(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const a=t(s,!1,Cv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Cv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Lv(n){return bt(n)?document.querySelector(n):n}const Iv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAgMAAADQNkYNAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAlQTFRFSn3//////lZKWKvIHwAAAENJREFUeJztyzERAEAIA8FHxPtBBP610Ken25Q32Xqxmgi/84EgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgyA1Z1C+FmaEoiWQAAAAASUVORK5CYII=",Pv="/assets/en-icon-C8qOLLyK.png";/*!
  * shared v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const xo=typeof window<"u",$i=(n,e=!1)=>e?Symbol.for(n):Symbol(n),Nv=(n,e,t)=>Dv({l:n,k:e,s:t}),Dv=n=>JSON.stringify(n).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Et=n=>typeof n=="number"&&isFinite(n),Uv=n=>zp(n)==="[object Date]",zi=n=>zp(n)==="[object RegExp]",Vo=n=>Ue(n)&&Object.keys(n).length===0,Ut=Object.assign;let lh;const fi=()=>lh||(lh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ch(n){return n.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const Ov=Object.prototype.hasOwnProperty;function Mo(n,e){return Ov.call(n,e)}const dt=Array.isArray,ut=n=>typeof n=="function",_e=n=>typeof n=="string",$e=n=>typeof n=="boolean",rt=n=>n!==null&&typeof n=="object",Fv=n=>rt(n)&&ut(n.then)&&ut(n.catch),Hp=Object.prototype.toString,zp=n=>Hp.call(n),Ue=n=>{if(!rt(n))return!1;const e=Object.getPrototypeOf(n);return e===null||e.constructor===Object},Bv=n=>n==null?"":dt(n)||Ue(n)&&n.toString===Hp?JSON.stringify(n,null,2):String(n);function kv(n,e=""){return n.reduce((t,i,s)=>s===0?t+i:t+e+i,"")}function Ho(n){let e=n;return()=>++e}function Vv(n,e){typeof console<"u"&&(console.warn("[intlify] "+n),e&&console.warn(e.stack))}const Ca=n=>!rt(n)||dt(n);function co(n,e){if(Ca(n)||Ca(e))throw new Error("Invalid value");const t=[{src:n,des:e}];for(;t.length;){const{src:i,des:s}=t.pop();Object.keys(i).forEach(r=>{Ca(i[r])||Ca(s[r])?s[r]=i[r]:t.push({src:i[r],des:s[r]})})}}/*!
  * message-compiler v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */function Hv(n,e,t){return{line:n,column:e,offset:t}}function So(n,e,t){return{start:n,end:e}}const zv=/\{([0-9a-zA-Z]+)\}/g;function Gp(n,...e){return e.length===1&&Gv(e[0])&&(e=e[0]),(!e||!e.hasOwnProperty)&&(e={}),n.replace(zv,(t,i)=>e.hasOwnProperty(i)?e[i]:"")}const Wp=Object.assign,uh=n=>typeof n=="string",Gv=n=>n!==null&&typeof n=="object";function Xp(n,e=""){return n.reduce((t,i,s)=>s===0?t+i:t+e+i,"")}const tu={USE_MODULO_SYNTAX:1,__EXTEND_POINT__:2},Wv={[tu.USE_MODULO_SYNTAX]:"Use modulo before '{{0}}'."};function Xv(n,e,...t){const i=Gp(Wv[n],...t||[]),s={message:String(i),code:n};return e&&(s.location=e),s}const Ie={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},jv={[Ie.EXPECTED_TOKEN]:"Expected token: '{0}'",[Ie.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[Ie.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[Ie.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[Ie.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[Ie.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[Ie.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[Ie.EMPTY_PLACEHOLDER]:"Empty placeholder",[Ie.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[Ie.INVALID_LINKED_FORMAT]:"Invalid linked format",[Ie.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[Ie.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[Ie.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[Ie.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[Ie.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[Ie.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function gr(n,e,t={}){const{domain:i,messages:s,args:r}=t,a=Gp((s||jv)[n]||"",...r||[]),o=new SyntaxError(String(a));return o.code=n,e&&(o.location=e),o.domain=i,o}function $v(n){throw n}const ii=" ",Yv="\r",Jt=`
`,qv="\u2028",Kv="\u2029";function Zv(n){const e=n;let t=0,i=1,s=1,r=0;const a=C=>e[C]===Yv&&e[C+1]===Jt,o=C=>e[C]===Jt,l=C=>e[C]===Kv,c=C=>e[C]===qv,u=C=>a(C)||o(C)||l(C)||c(C),h=()=>t,f=()=>i,d=()=>s,_=()=>r,v=C=>a(C)||l(C)||c(C)?Jt:e[C],g=()=>v(t),m=()=>v(t+r);function b(){return r=0,u(t)&&(i++,s=0),a(t)&&t++,t++,s++,e[t]}function x(){return a(t+r)&&r++,r++,e[t+r]}function S(){t=0,i=1,s=1,r=0}function I(C=0){r=C}function y(){const C=t+r;for(;C!==t;)b();r=0}return{index:h,line:f,column:d,peekOffset:_,charAt:v,currentChar:g,currentPeek:m,next:b,peek:x,reset:S,resetPeek:I,skipToPeek:y}}const Si=void 0,Jv=".",hh="'",Qv="tokenizer";function e0(n,e={}){const t=e.location!==!1,i=Zv(n),s=()=>i.index(),r=()=>Hv(i.line(),i.column(),i.index()),a=r(),o=s(),l={currentType:14,offset:o,startLoc:a,endLoc:a,lastType:14,lastOffset:o,lastStartLoc:a,lastEndLoc:a,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function h(p,M,R,...D){const H=c();if(M.column+=R,M.offset+=R,u){const j=t?So(H.startLoc,M):null,N=gr(p,j,{domain:Qv,args:D});u(N)}}function f(p,M,R){p.endLoc=r(),p.currentType=M;const D={type:M};return t&&(D.loc=So(p.startLoc,p.endLoc)),R!=null&&(D.value=R),D}const d=p=>f(p,14);function _(p,M){return p.currentChar()===M?(p.next(),M):(h(Ie.EXPECTED_TOKEN,r(),0,M),"")}function v(p){let M="";for(;p.currentPeek()===ii||p.currentPeek()===Jt;)M+=p.currentPeek(),p.peek();return M}function g(p){const M=v(p);return p.skipToPeek(),M}function m(p){if(p===Si)return!1;const M=p.charCodeAt(0);return M>=97&&M<=122||M>=65&&M<=90||M===95}function b(p){if(p===Si)return!1;const M=p.charCodeAt(0);return M>=48&&M<=57}function x(p,M){const{currentType:R}=M;if(R!==2)return!1;v(p);const D=m(p.currentPeek());return p.resetPeek(),D}function S(p,M){const{currentType:R}=M;if(R!==2)return!1;v(p);const D=p.currentPeek()==="-"?p.peek():p.currentPeek(),H=b(D);return p.resetPeek(),H}function I(p,M){const{currentType:R}=M;if(R!==2)return!1;v(p);const D=p.currentPeek()===hh;return p.resetPeek(),D}function y(p,M){const{currentType:R}=M;if(R!==8)return!1;v(p);const D=p.currentPeek()===".";return p.resetPeek(),D}function C(p,M){const{currentType:R}=M;if(R!==9)return!1;v(p);const D=m(p.currentPeek());return p.resetPeek(),D}function U(p,M){const{currentType:R}=M;if(!(R===8||R===12))return!1;v(p);const D=p.currentPeek()===":";return p.resetPeek(),D}function E(p,M){const{currentType:R}=M;if(R!==10)return!1;const D=()=>{const j=p.currentPeek();return j==="{"?m(p.peek()):j==="@"||j==="%"||j==="|"||j===":"||j==="."||j===ii||!j?!1:j===Jt?(p.peek(),D()):$(p,!1)},H=D();return p.resetPeek(),H}function T(p){v(p);const M=p.currentPeek()==="|";return p.resetPeek(),M}function W(p){const M=v(p),R=p.currentPeek()==="%"&&p.peek()==="{";return p.resetPeek(),{isModulo:R,hasSpace:M.length>0}}function $(p,M=!0){const R=(H=!1,j="",N=!1)=>{const O=p.currentPeek();return O==="{"?j==="%"?!1:H:O==="@"||!O?j==="%"?!0:H:O==="%"?(p.peek(),R(H,"%",!0)):O==="|"?j==="%"||N?!0:!(j===ii||j===Jt):O===ii?(p.peek(),R(!0,ii,N)):O===Jt?(p.peek(),R(!0,Jt,N)):!0},D=R();return M&&p.resetPeek(),D}function F(p,M){const R=p.currentChar();return R===Si?Si:M(R)?(p.next(),R):null}function ne(p){const M=p.charCodeAt(0);return M>=97&&M<=122||M>=65&&M<=90||M>=48&&M<=57||M===95||M===36}function te(p){return F(p,ne)}function ae(p){const M=p.charCodeAt(0);return M>=97&&M<=122||M>=65&&M<=90||M>=48&&M<=57||M===95||M===36||M===45}function ie(p){return F(p,ae)}function X(p){const M=p.charCodeAt(0);return M>=48&&M<=57}function ce(p){return F(p,X)}function ue(p){const M=p.charCodeAt(0);return M>=48&&M<=57||M>=65&&M<=70||M>=97&&M<=102}function ge(p){return F(p,ue)}function Re(p){let M="",R="";for(;M=ce(p);)R+=M;return R}function Ke(p){g(p);const M=p.currentChar();return M!=="%"&&h(Ie.EXPECTED_TOKEN,r(),0,M),p.next(),"%"}function Q(p){let M="";for(;;){const R=p.currentChar();if(R==="{"||R==="}"||R==="@"||R==="|"||!R)break;if(R==="%")if($(p))M+=R,p.next();else break;else if(R===ii||R===Jt)if($(p))M+=R,p.next();else{if(T(p))break;M+=R,p.next()}else M+=R,p.next()}return M}function he(p){g(p);let M="",R="";for(;M=ie(p);)R+=M;return p.currentChar()===Si&&h(Ie.UNTERMINATED_CLOSING_BRACE,r(),0),R}function pe(p){g(p);let M="";return p.currentChar()==="-"?(p.next(),M+=`-${Re(p)}`):M+=Re(p),p.currentChar()===Si&&h(Ie.UNTERMINATED_CLOSING_BRACE,r(),0),M}function fe(p){return p!==hh&&p!==Jt}function De(p){g(p),_(p,"'");let M="",R="";for(;M=F(p,fe);)M==="\\"?R+=Fe(p):R+=M;const D=p.currentChar();return D===Jt||D===Si?(h(Ie.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,r(),0),D===Jt&&(p.next(),_(p,"'")),R):(_(p,"'"),R)}function Fe(p){const M=p.currentChar();switch(M){case"\\":case"'":return p.next(),`\\${M}`;case"u":return z(p,M,4);case"U":return z(p,M,6);default:return h(Ie.UNKNOWN_ESCAPE_SEQUENCE,r(),0,M),""}}function z(p,M,R){_(p,M);let D="";for(let H=0;H<R;H++){const j=ge(p);if(!j){h(Ie.INVALID_UNICODE_ESCAPE_SEQUENCE,r(),0,`\\${M}${D}${p.currentChar()}`);break}D+=j}return`\\${M}${D}`}function Je(p){return p!=="{"&&p!=="}"&&p!==ii&&p!==Jt}function be(p){g(p);let M="",R="";for(;M=F(p,Je);)R+=M;return R}function P(p){let M="",R="";for(;M=te(p);)R+=M;return R}function A(p){const M=R=>{const D=p.currentChar();return D==="{"||D==="%"||D==="@"||D==="|"||D==="("||D===")"||!D||D===ii?R:(R+=D,p.next(),M(R))};return M("")}function B(p){g(p);const M=_(p,"|");return g(p),M}function Y(p,M){let R=null;switch(p.currentChar()){case"{":return M.braceNest>=1&&h(Ie.NOT_ALLOW_NEST_PLACEHOLDER,r(),0),p.next(),R=f(M,2,"{"),g(p),M.braceNest++,R;case"}":return M.braceNest>0&&M.currentType===2&&h(Ie.EMPTY_PLACEHOLDER,r(),0),p.next(),R=f(M,3,"}"),M.braceNest--,M.braceNest>0&&g(p),M.inLinked&&M.braceNest===0&&(M.inLinked=!1),R;case"@":return M.braceNest>0&&h(Ie.UNTERMINATED_CLOSING_BRACE,r(),0),R=Z(p,M)||d(M),M.braceNest=0,R;default:{let H=!0,j=!0,N=!0;if(T(p))return M.braceNest>0&&h(Ie.UNTERMINATED_CLOSING_BRACE,r(),0),R=f(M,1,B(p)),M.braceNest=0,M.inLinked=!1,R;if(M.braceNest>0&&(M.currentType===5||M.currentType===6||M.currentType===7))return h(Ie.UNTERMINATED_CLOSING_BRACE,r(),0),M.braceNest=0,re(p,M);if(H=x(p,M))return R=f(M,5,he(p)),g(p),R;if(j=S(p,M))return R=f(M,6,pe(p)),g(p),R;if(N=I(p,M))return R=f(M,7,De(p)),g(p),R;if(!H&&!j&&!N)return R=f(M,13,be(p)),h(Ie.INVALID_TOKEN_IN_PLACEHOLDER,r(),0,R.value),g(p),R;break}}return R}function Z(p,M){const{currentType:R}=M;let D=null;const H=p.currentChar();switch((R===8||R===9||R===12||R===10)&&(H===Jt||H===ii)&&h(Ie.INVALID_LINKED_FORMAT,r(),0),H){case"@":return p.next(),D=f(M,8,"@"),M.inLinked=!0,D;case".":return g(p),p.next(),f(M,9,".");case":":return g(p),p.next(),f(M,10,":");default:return T(p)?(D=f(M,1,B(p)),M.braceNest=0,M.inLinked=!1,D):y(p,M)||U(p,M)?(g(p),Z(p,M)):C(p,M)?(g(p),f(M,12,P(p))):E(p,M)?(g(p),H==="{"?Y(p,M)||D:f(M,11,A(p))):(R===8&&h(Ie.INVALID_LINKED_FORMAT,r(),0),M.braceNest=0,M.inLinked=!1,re(p,M))}}function re(p,M){let R={type:14};if(M.braceNest>0)return Y(p,M)||d(M);if(M.inLinked)return Z(p,M)||d(M);switch(p.currentChar()){case"{":return Y(p,M)||d(M);case"}":return h(Ie.UNBALANCED_CLOSING_BRACE,r(),0),p.next(),f(M,3,"}");case"@":return Z(p,M)||d(M);default:{if(T(p))return R=f(M,1,B(p)),M.braceNest=0,M.inLinked=!1,R;const{isModulo:H,hasSpace:j}=W(p);if(H)return j?f(M,0,Q(p)):f(M,4,Ke(p));if($(p))return f(M,0,Q(p));break}}return R}function w(){const{currentType:p,offset:M,startLoc:R,endLoc:D}=l;return l.lastType=p,l.lastOffset=M,l.lastStartLoc=R,l.lastEndLoc=D,l.offset=s(),l.startLoc=r(),i.currentChar()===Si?f(l,14):re(i,l)}return{nextToken:w,currentOffset:s,currentPosition:r,context:c}}const t0="parser",n0=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function i0(n,e,t){switch(n){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||t,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function s0(n={}){const e=n.location!==!1,{onError:t,onWarn:i}=n;function s(x,S,I,y,...C){const U=x.currentPosition();if(U.offset+=y,U.column+=y,t){const E=e?So(I,U):null,T=gr(S,E,{domain:t0,args:C});t(T)}}function r(x,S,I,y,...C){const U=x.currentPosition();if(U.offset+=y,U.column+=y,i){const E=e?So(I,U):null;i(Xv(S,E,C))}}function a(x,S,I){const y={type:x};return e&&(y.start=S,y.end=S,y.loc={start:I,end:I}),y}function o(x,S,I,y){e&&(x.end=S,x.loc&&(x.loc.end=I))}function l(x,S){const I=x.context(),y=a(3,I.offset,I.startLoc);return y.value=S,o(y,x.currentOffset(),x.currentPosition()),y}function c(x,S){const I=x.context(),{lastOffset:y,lastStartLoc:C}=I,U=a(5,y,C);return U.index=parseInt(S,10),x.nextToken(),o(U,x.currentOffset(),x.currentPosition()),U}function u(x,S,I){const y=x.context(),{lastOffset:C,lastStartLoc:U}=y,E=a(4,C,U);return E.key=S,I===!0&&(E.modulo=!0),x.nextToken(),o(E,x.currentOffset(),x.currentPosition()),E}function h(x,S){const I=x.context(),{lastOffset:y,lastStartLoc:C}=I,U=a(9,y,C);return U.value=S.replace(n0,i0),x.nextToken(),o(U,x.currentOffset(),x.currentPosition()),U}function f(x){const S=x.nextToken(),I=x.context(),{lastOffset:y,lastStartLoc:C}=I,U=a(8,y,C);return S.type!==12?(s(x,Ie.UNEXPECTED_EMPTY_LINKED_MODIFIER,I.lastStartLoc,0),U.value="",o(U,y,C),{nextConsumeToken:S,node:U}):(S.value==null&&s(x,Ie.UNEXPECTED_LEXICAL_ANALYSIS,I.lastStartLoc,0,Rn(S)),U.value=S.value||"",o(U,x.currentOffset(),x.currentPosition()),{node:U})}function d(x,S){const I=x.context(),y=a(7,I.offset,I.startLoc);return y.value=S,o(y,x.currentOffset(),x.currentPosition()),y}function _(x){const S=x.context(),I=a(6,S.offset,S.startLoc);let y=x.nextToken();if(y.type===9){const C=f(x);I.modifier=C.node,y=C.nextConsumeToken||x.nextToken()}switch(y.type!==10&&s(x,Ie.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Rn(y)),y=x.nextToken(),y.type===2&&(y=x.nextToken()),y.type){case 11:y.value==null&&s(x,Ie.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Rn(y)),I.key=d(x,y.value||"");break;case 5:y.value==null&&s(x,Ie.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Rn(y)),I.key=u(x,y.value||"");break;case 6:y.value==null&&s(x,Ie.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Rn(y)),I.key=c(x,y.value||"");break;case 7:y.value==null&&s(x,Ie.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Rn(y)),I.key=h(x,y.value||"");break;default:{s(x,Ie.UNEXPECTED_EMPTY_LINKED_KEY,S.lastStartLoc,0);const C=x.context(),U=a(7,C.offset,C.startLoc);return U.value="",o(U,C.offset,C.startLoc),I.key=U,o(I,C.offset,C.startLoc),{nextConsumeToken:y,node:I}}}return o(I,x.currentOffset(),x.currentPosition()),{node:I}}function v(x){const S=x.context(),I=S.currentType===1?x.currentOffset():S.offset,y=S.currentType===1?S.endLoc:S.startLoc,C=a(2,I,y);C.items=[];let U=null,E=null;do{const $=U||x.nextToken();switch(U=null,$.type){case 0:$.value==null&&s(x,Ie.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Rn($)),C.items.push(l(x,$.value||""));break;case 6:$.value==null&&s(x,Ie.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Rn($)),C.items.push(c(x,$.value||""));break;case 4:E=!0;break;case 5:$.value==null&&s(x,Ie.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Rn($)),C.items.push(u(x,$.value||"",!!E)),E&&(r(x,tu.USE_MODULO_SYNTAX,S.lastStartLoc,0,Rn($)),E=null);break;case 7:$.value==null&&s(x,Ie.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Rn($)),C.items.push(h(x,$.value||""));break;case 8:{const F=_(x);C.items.push(F.node),U=F.nextConsumeToken||null;break}}}while(S.currentType!==14&&S.currentType!==1);const T=S.currentType===1?S.lastOffset:x.currentOffset(),W=S.currentType===1?S.lastEndLoc:x.currentPosition();return o(C,T,W),C}function g(x,S,I,y){const C=x.context();let U=y.items.length===0;const E=a(1,S,I);E.cases=[],E.cases.push(y);do{const T=v(x);U||(U=T.items.length===0),E.cases.push(T)}while(C.currentType!==14);return U&&s(x,Ie.MUST_HAVE_MESSAGES_IN_PLURAL,I,0),o(E,x.currentOffset(),x.currentPosition()),E}function m(x){const S=x.context(),{offset:I,startLoc:y}=S,C=v(x);return S.currentType===14?C:g(x,I,y,C)}function b(x){const S=e0(x,Wp({},n)),I=S.context(),y=a(0,I.offset,I.startLoc);return e&&y.loc&&(y.loc.source=x),y.body=m(S),n.onCacheKey&&(y.cacheKey=n.onCacheKey(x)),I.currentType!==14&&s(S,Ie.UNEXPECTED_LEXICAL_ANALYSIS,I.lastStartLoc,0,x[I.offset]||""),o(y,S.currentOffset(),S.currentPosition()),y}return{parse:b}}function Rn(n){if(n.type===14)return"EOF";const e=(n.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function r0(n,e={}){const t={ast:n,helpers:new Set};return{context:()=>t,helper:r=>(t.helpers.add(r),r)}}function fh(n,e){for(let t=0;t<n.length;t++)nu(n[t],e)}function nu(n,e){switch(n.type){case 1:fh(n.cases,e),e.helper("plural");break;case 2:fh(n.items,e);break;case 6:{nu(n.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function a0(n,e={}){const t=r0(n);t.helper("normalize"),n.body&&nu(n.body,t);const i=t.context();n.helpers=Array.from(i.helpers)}function o0(n){const e=n.body;return e.type===2?dh(e):e.cases.forEach(t=>dh(t)),n}function dh(n){if(n.items.length===1){const e=n.items[0];(e.type===3||e.type===9)&&(n.static=e.value,delete e.value)}else{const e=[];for(let t=0;t<n.items.length;t++){const i=n.items[t];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===n.items.length){n.static=Xp(e);for(let t=0;t<n.items.length;t++){const i=n.items[t];(i.type===3||i.type===9)&&delete i.value}}}}const l0="minifier";function Bs(n){switch(n.t=n.type,n.type){case 0:{const e=n;Bs(e.body),e.b=e.body,delete e.body;break}case 1:{const e=n,t=e.cases;for(let i=0;i<t.length;i++)Bs(t[i]);e.c=t,delete e.cases;break}case 2:{const e=n,t=e.items;for(let i=0;i<t.length;i++)Bs(t[i]);e.i=t,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=n;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=n;Bs(e.key),e.k=e.key,delete e.key,e.modifier&&(Bs(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=n;e.i=e.index,delete e.index;break}case 4:{const e=n;e.k=e.key,delete e.key;break}default:throw gr(Ie.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:l0,args:[n.type]})}delete n.type}const c0="parser";function u0(n,e){const{sourceMap:t,filename:i,breakLineCode:s,needIndent:r}=e,a=e.location!==!1,o={filename:i,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:s,needIndent:r,indentLevel:0};a&&n.loc&&(o.source=n.loc.source);const l=()=>o;function c(g,m){o.code+=g}function u(g,m=!0){const b=m?s:"";c(r?b+"  ".repeat(g):b)}function h(g=!0){const m=++o.indentLevel;g&&u(m)}function f(g=!0){const m=--o.indentLevel;g&&u(m)}function d(){u(o.indentLevel)}return{context:l,push:c,indent:h,deindent:f,newline:d,helper:g=>`_${g}`,needIndent:()=>o.needIndent}}function h0(n,e){const{helper:t}=n;n.push(`${t("linked")}(`),nr(n,e.key),e.modifier?(n.push(", "),nr(n,e.modifier),n.push(", _type")):n.push(", undefined, _type"),n.push(")")}function f0(n,e){const{helper:t,needIndent:i}=n;n.push(`${t("normalize")}([`),n.indent(i());const s=e.items.length;for(let r=0;r<s&&(nr(n,e.items[r]),r!==s-1);r++)n.push(", ");n.deindent(i()),n.push("])")}function d0(n,e){const{helper:t,needIndent:i}=n;if(e.cases.length>1){n.push(`${t("plural")}([`),n.indent(i());const s=e.cases.length;for(let r=0;r<s&&(nr(n,e.cases[r]),r!==s-1);r++)n.push(", ");n.deindent(i()),n.push("])")}}function p0(n,e){e.body?nr(n,e.body):n.push("null")}function nr(n,e){const{helper:t}=n;switch(e.type){case 0:p0(n,e);break;case 1:d0(n,e);break;case 2:f0(n,e);break;case 6:h0(n,e);break;case 8:n.push(JSON.stringify(e.value),e);break;case 7:n.push(JSON.stringify(e.value),e);break;case 5:n.push(`${t("interpolate")}(${t("list")}(${e.index}))`,e);break;case 4:n.push(`${t("interpolate")}(${t("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:n.push(JSON.stringify(e.value),e);break;case 3:n.push(JSON.stringify(e.value),e);break;default:throw gr(Ie.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:c0,args:[e.type]})}}const m0=(n,e={})=>{const t=uh(e.mode)?e.mode:"normal",i=uh(e.filename)?e.filename:"message.intl",s=!!e.sourceMap,r=e.breakLineCode!=null?e.breakLineCode:t==="arrow"?";":`
`,a=e.needIndent?e.needIndent:t!=="arrow",o=n.helpers||[],l=u0(n,{mode:t,filename:i,sourceMap:s,breakLineCode:r,needIndent:a});l.push(t==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(a),o.length>0&&(l.push(`const { ${Xp(o.map(h=>`${h}: _${h}`),", ")} } = ctx`),l.newline()),l.push("return "),nr(l,n),l.deindent(a),l.push("}"),delete n.helpers;const{code:c,map:u}=l.context();return{ast:n,code:c,map:u?u.toJSON():void 0}};function g0(n,e={}){const t=Wp({},e),i=!!t.jit,s=!!t.minify,r=t.optimize==null?!0:t.optimize,o=s0(t).parse(n);return i?(r&&o0(o),s&&Bs(o),{ast:o,code:""}):(a0(o,t),m0(o,t))}/*!
  * core-base v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */function _0(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(fi().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(fi().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(fi().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}const Yi=[];Yi[0]={w:[0],i:[3,0],"[":[4],o:[7]};Yi[1]={w:[1],".":[2],"[":[4],o:[7]};Yi[2]={w:[2],i:[3,0],0:[3,0]};Yi[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};Yi[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};Yi[5]={"'":[4,0],o:8,l:[5,0]};Yi[6]={'"':[4,0],o:8,l:[6,0]};const v0=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function x0(n){return v0.test(n)}function M0(n){const e=n.charCodeAt(0),t=n.charCodeAt(n.length-1);return e===t&&(e===34||e===39)?n.slice(1,-1):n}function S0(n){if(n==null)return"o";switch(n.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return n;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function y0(n){const e=n.trim();return n.charAt(0)==="0"&&isNaN(parseInt(n))?!1:x0(e)?M0(e):"*"+e}function E0(n){const e=[];let t=-1,i=0,s=0,r,a,o,l,c,u,h;const f=[];f[0]=()=>{a===void 0?a=o:a+=o},f[1]=()=>{a!==void 0&&(e.push(a),a=void 0)},f[2]=()=>{f[0](),s++},f[3]=()=>{if(s>0)s--,i=4,f[0]();else{if(s=0,a===void 0||(a=y0(a),a===!1))return!1;f[1]()}};function d(){const _=n[t+1];if(i===5&&_==="'"||i===6&&_==='"')return t++,o="\\"+_,f[0](),!0}for(;i!==null;)if(t++,r=n[t],!(r==="\\"&&d())){if(l=S0(r),h=Yi[i],c=h[l]||h.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=f[c[1]],u&&(o=r,u()===!1))))return;if(i===7)return e}}const ph=new Map;function T0(n,e){return rt(n)?n[e]:null}function b0(n,e){if(!rt(n))return null;let t=ph.get(e);if(t||(t=E0(e),t&&ph.set(e,t)),!t)return null;const i=t.length;let s=n,r=0;for(;r<i;){const a=s[t[r]];if(a===void 0||ut(s))return null;s=a,r++}return s}const A0=n=>n,w0=n=>"",R0="text",C0=n=>n.length===0?"":kv(n),L0=Bv;function mh(n,e){return n=Math.abs(n),e===2?n?n>1?1:0:1:n?Math.min(n,2):0}function I0(n){const e=Et(n.pluralIndex)?n.pluralIndex:-1;return n.named&&(Et(n.named.count)||Et(n.named.n))?Et(n.named.count)?n.named.count:Et(n.named.n)?n.named.n:e:e}function P0(n,e){e.count||(e.count=n),e.n||(e.n=n)}function N0(n={}){const e=n.locale,t=I0(n),i=rt(n.pluralRules)&&_e(e)&&ut(n.pluralRules[e])?n.pluralRules[e]:mh,s=rt(n.pluralRules)&&_e(e)&&ut(n.pluralRules[e])?mh:void 0,r=m=>m[i(t,m.length,s)],a=n.list||[],o=m=>a[m],l=n.named||{};Et(n.pluralIndex)&&P0(t,l);const c=m=>l[m];function u(m){const b=ut(n.messages)?n.messages(m):rt(n.messages)?n.messages[m]:!1;return b||(n.parent?n.parent.message(m):w0)}const h=m=>n.modifiers?n.modifiers[m]:A0,f=Ue(n.processor)&&ut(n.processor.normalize)?n.processor.normalize:C0,d=Ue(n.processor)&&ut(n.processor.interpolate)?n.processor.interpolate:L0,_=Ue(n.processor)&&_e(n.processor.type)?n.processor.type:R0,g={list:o,named:c,plural:r,linked:(m,...b)=>{const[x,S]=b;let I="text",y="";b.length===1?rt(x)?(y=x.modifier||y,I=x.type||I):_e(x)&&(y=x||y):b.length===2&&(_e(x)&&(y=x||y),_e(S)&&(I=S||I));const C=u(m)(g),U=I==="vnode"&&dt(C)&&y?C[0]:C;return y?h(y)(U,I):U},message:u,type:_,interpolate:d,normalize:f,values:Ut({},a,l)};return g}let oa=null;function D0(n){oa=n}function U0(n,e,t){oa&&oa.emit("i18n:init",{timestamp:Date.now(),i18n:n,version:e,meta:t})}const O0=F0("function:translate");function F0(n){return e=>oa&&oa.emit(n,e)}const jp=tu.__EXTEND_POINT__,Ji=Ho(jp),B0={NOT_FOUND_KEY:jp,FALLBACK_TO_TRANSLATE:Ji(),CANNOT_FORMAT_NUMBER:Ji(),FALLBACK_TO_NUMBER_FORMAT:Ji(),CANNOT_FORMAT_DATE:Ji(),FALLBACK_TO_DATE_FORMAT:Ji(),EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:Ji(),__EXTEND_POINT__:Ji()},$p=Ie.__EXTEND_POINT__,Qi=Ho($p),Fn={INVALID_ARGUMENT:$p,INVALID_DATE_ARGUMENT:Qi(),INVALID_ISO_DATE_ARGUMENT:Qi(),NOT_SUPPORT_NON_STRING_MESSAGE:Qi(),NOT_SUPPORT_LOCALE_PROMISE_VALUE:Qi(),NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:Qi(),NOT_SUPPORT_LOCALE_TYPE:Qi(),__EXTEND_POINT__:Qi()};function qn(n){return gr(n,null,void 0)}function iu(n,e){return e.locale!=null?gh(e.locale):gh(n.locale)}let ll;function gh(n){if(_e(n))return n;if(ut(n)){if(n.resolvedOnce&&ll!=null)return ll;if(n.constructor.name==="Function"){const e=n();if(Fv(e))throw qn(Fn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return ll=e}else throw qn(Fn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw qn(Fn.NOT_SUPPORT_LOCALE_TYPE)}function k0(n,e,t){return[...new Set([t,...dt(e)?e:rt(e)?Object.keys(e):_e(e)?[e]:[t]])]}function Yp(n,e,t){const i=_e(t)?t:ir,s=n;s.__localeChainCache||(s.__localeChainCache=new Map);let r=s.__localeChainCache.get(i);if(!r){r=[];let a=[t];for(;dt(a);)a=_h(r,a,e);const o=dt(e)||!Ue(e)?e:e.default?e.default:null;a=_e(o)?[o]:o,dt(a)&&_h(r,a,!1),s.__localeChainCache.set(i,r)}return r}function _h(n,e,t){let i=!0;for(let s=0;s<e.length&&$e(i);s++){const r=e[s];_e(r)&&(i=V0(n,e[s],t))}return i}function V0(n,e,t){let i;const s=e.split("-");do{const r=s.join("-");i=H0(n,r,t),s.splice(-1,1)}while(s.length&&i===!0);return i}function H0(n,e,t){let i=!1;if(!n.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const s=e.replace(/!/g,"");n.push(s),(dt(t)||Ue(t))&&t[s]&&(i=t[s])}return i}const z0="9.13.1",zo=-1,ir="en-US",vh="",xh=n=>`${n.charAt(0).toLocaleUpperCase()}${n.substr(1)}`;function G0(){return{upper:(n,e)=>e==="text"&&_e(n)?n.toUpperCase():e==="vnode"&&rt(n)&&"__v_isVNode"in n?n.children.toUpperCase():n,lower:(n,e)=>e==="text"&&_e(n)?n.toLowerCase():e==="vnode"&&rt(n)&&"__v_isVNode"in n?n.children.toLowerCase():n,capitalize:(n,e)=>e==="text"&&_e(n)?xh(n):e==="vnode"&&rt(n)&&"__v_isVNode"in n?xh(n.children):n}}let qp;function Mh(n){qp=n}let Kp;function W0(n){Kp=n}let Zp;function X0(n){Zp=n}let Jp=null;const j0=n=>{Jp=n},$0=()=>Jp;let Qp=null;const Sh=n=>{Qp=n},Y0=()=>Qp;let yh=0;function q0(n={}){const e=ut(n.onWarn)?n.onWarn:Vv,t=_e(n.version)?n.version:z0,i=_e(n.locale)||ut(n.locale)?n.locale:ir,s=ut(i)?ir:i,r=dt(n.fallbackLocale)||Ue(n.fallbackLocale)||_e(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:s,a=Ue(n.messages)?n.messages:{[s]:{}},o=Ue(n.datetimeFormats)?n.datetimeFormats:{[s]:{}},l=Ue(n.numberFormats)?n.numberFormats:{[s]:{}},c=Ut({},n.modifiers||{},G0()),u=n.pluralRules||{},h=ut(n.missing)?n.missing:null,f=$e(n.missingWarn)||zi(n.missingWarn)?n.missingWarn:!0,d=$e(n.fallbackWarn)||zi(n.fallbackWarn)?n.fallbackWarn:!0,_=!!n.fallbackFormat,v=!!n.unresolving,g=ut(n.postTranslation)?n.postTranslation:null,m=Ue(n.processor)?n.processor:null,b=$e(n.warnHtmlMessage)?n.warnHtmlMessage:!0,x=!!n.escapeParameter,S=ut(n.messageCompiler)?n.messageCompiler:qp,I=ut(n.messageResolver)?n.messageResolver:Kp||T0,y=ut(n.localeFallbacker)?n.localeFallbacker:Zp||k0,C=rt(n.fallbackContext)?n.fallbackContext:void 0,U=n,E=rt(U.__datetimeFormatters)?U.__datetimeFormatters:new Map,T=rt(U.__numberFormatters)?U.__numberFormatters:new Map,W=rt(U.__meta)?U.__meta:{};yh++;const $={version:t,cid:yh,locale:i,fallbackLocale:r,messages:a,modifiers:c,pluralRules:u,missing:h,missingWarn:f,fallbackWarn:d,fallbackFormat:_,unresolving:v,postTranslation:g,processor:m,warnHtmlMessage:b,escapeParameter:x,messageCompiler:S,messageResolver:I,localeFallbacker:y,fallbackContext:C,onWarn:e,__meta:W};return $.datetimeFormats=o,$.numberFormats=l,$.__datetimeFormatters=E,$.__numberFormatters=T,__INTLIFY_PROD_DEVTOOLS__&&U0($,t,W),$}function su(n,e,t,i,s){const{missing:r,onWarn:a}=n;if(r!==null){const o=r(n,t,e,s);return _e(o)?o:e}else return e}function Lr(n,e,t){const i=n;i.__localeChainCache=new Map,n.localeFallbacker(n,t,e)}function K0(n,e){return n===e?!1:n.split("-")[0]===e.split("-")[0]}function Z0(n,e){const t=e.indexOf(n);if(t===-1)return!1;for(let i=t+1;i<e.length;i++)if(K0(n,e[i]))return!0;return!1}function cl(n){return t=>J0(t,n)}function J0(n,e){const t=e.b||e.body;if((t.t||t.type)===1){const i=t,s=i.c||i.cases;return n.plural(s.reduce((r,a)=>[...r,Eh(n,a)],[]))}else return Eh(n,t)}function Eh(n,e){const t=e.s||e.static;if(t)return n.type==="text"?t:n.normalize([t]);{const i=(e.i||e.items).reduce((s,r)=>[...s,oc(n,r)],[]);return n.normalize(i)}}function oc(n,e){const t=e.t||e.type;switch(t){case 3:{const i=e;return i.v||i.value}case 9:{const i=e;return i.v||i.value}case 4:{const i=e;return n.interpolate(n.named(i.k||i.key))}case 5:{const i=e;return n.interpolate(n.list(i.i!=null?i.i:i.index))}case 6:{const i=e,s=i.m||i.modifier;return n.linked(oc(n,i.k||i.key),s?oc(n,s):void 0,n.type)}case 7:{const i=e;return i.v||i.value}case 8:{const i=e;return i.v||i.value}default:throw new Error(`unhandled node type on format message part: ${t}`)}}const em=n=>n;let Vs=Object.create(null);const sr=n=>rt(n)&&(n.t===0||n.type===0)&&("b"in n||"body"in n);function tm(n,e={}){let t=!1;const i=e.onError||$v;return e.onError=s=>{t=!0,i(s)},{...g0(n,e),detectError:t}}const Q0=(n,e)=>{if(!_e(n))throw qn(Fn.NOT_SUPPORT_NON_STRING_MESSAGE);{$e(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||em)(n),s=Vs[i];if(s)return s;const{code:r,detectError:a}=tm(n,e),o=new Function(`return ${r}`)();return a?o:Vs[i]=o}};function ex(n,e){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&_e(n)){$e(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||em)(n),s=Vs[i];if(s)return s;const{ast:r,detectError:a}=tm(n,{...e,location:!1,jit:!0}),o=cl(r);return a?o:Vs[i]=o}else{const t=n.cacheKey;if(t){const i=Vs[t];return i||(Vs[t]=cl(n))}else return cl(n)}}const Th=()=>"",Tn=n=>ut(n);function bh(n,...e){const{fallbackFormat:t,postTranslation:i,unresolving:s,messageCompiler:r,fallbackLocale:a,messages:o}=n,[l,c]=lc(...e),u=$e(c.missingWarn)?c.missingWarn:n.missingWarn,h=$e(c.fallbackWarn)?c.fallbackWarn:n.fallbackWarn,f=$e(c.escapeParameter)?c.escapeParameter:n.escapeParameter,d=!!c.resolvedMessage,_=_e(c.default)||$e(c.default)?$e(c.default)?r?l:()=>l:c.default:t?r?l:()=>l:"",v=t||_!=="",g=iu(n,c);f&&tx(c);let[m,b,x]=d?[l,g,o[g]||{}]:nm(n,l,g,a,h,u),S=m,I=l;if(!d&&!(_e(S)||sr(S)||Tn(S))&&v&&(S=_,I=S),!d&&(!(_e(S)||sr(S)||Tn(S))||!_e(b)))return s?zo:l;let y=!1;const C=()=>{y=!0},U=Tn(S)?S:im(n,l,b,S,I,C);if(y)return S;const E=sx(n,b,x,c),T=N0(E),W=nx(n,U,T),$=i?i(W,l):W;if(__INTLIFY_PROD_DEVTOOLS__){const F={timestamp:Date.now(),key:_e(l)?l:Tn(S)?S.key:"",locale:b||(Tn(S)?S.locale:""),format:_e(S)?S:Tn(S)?S.source:"",message:$};F.meta=Ut({},n.__meta,$0()||{}),O0(F)}return $}function tx(n){dt(n.list)?n.list=n.list.map(e=>_e(e)?ch(e):e):rt(n.named)&&Object.keys(n.named).forEach(e=>{_e(n.named[e])&&(n.named[e]=ch(n.named[e]))})}function nm(n,e,t,i,s,r){const{messages:a,onWarn:o,messageResolver:l,localeFallbacker:c}=n,u=c(n,i,t);let h={},f,d=null;const _="translate";for(let v=0;v<u.length&&(f=u[v],h=a[f]||{},(d=l(h,e))===null&&(d=h[e]),!(_e(d)||sr(d)||Tn(d)));v++)if(!Z0(f,u)){const g=su(n,e,f,r,_);g!==e&&(d=g)}return[d,f,h]}function im(n,e,t,i,s,r){const{messageCompiler:a,warnHtmlMessage:o}=n;if(Tn(i)){const c=i;return c.locale=c.locale||t,c.key=c.key||e,c}if(a==null){const c=()=>i;return c.locale=t,c.key=e,c}const l=a(i,ix(n,t,s,i,o,r));return l.locale=t,l.key=e,l.source=i,l}function nx(n,e,t){return e(t)}function lc(...n){const[e,t,i]=n,s={};if(!_e(e)&&!Et(e)&&!Tn(e)&&!sr(e))throw qn(Fn.INVALID_ARGUMENT);const r=Et(e)?String(e):(Tn(e),e);return Et(t)?s.plural=t:_e(t)?s.default=t:Ue(t)&&!Vo(t)?s.named=t:dt(t)&&(s.list=t),Et(i)?s.plural=i:_e(i)?s.default=i:Ue(i)&&Ut(s,i),[r,s]}function ix(n,e,t,i,s,r){return{locale:e,key:t,warnHtmlMessage:s,onError:a=>{throw r&&r(a),a},onCacheKey:a=>Nv(e,t,a)}}function sx(n,e,t,i){const{modifiers:s,pluralRules:r,messageResolver:a,fallbackLocale:o,fallbackWarn:l,missingWarn:c,fallbackContext:u}=n,f={locale:e,modifiers:s,pluralRules:r,messages:d=>{let _=a(t,d);if(_==null&&u){const[,,v]=nm(u,d,e,o,l,c);_=a(v,d)}if(_e(_)||sr(_)){let v=!1;const m=im(n,d,e,_,d,()=>{v=!0});return v?Th:m}else return Tn(_)?_:Th}};return n.processor&&(f.processor=n.processor),i.list&&(f.list=i.list),i.named&&(f.named=i.named),Et(i.plural)&&(f.pluralIndex=i.plural),f}function Ah(n,...e){const{datetimeFormats:t,unresolving:i,fallbackLocale:s,onWarn:r,localeFallbacker:a}=n,{__datetimeFormatters:o}=n,[l,c,u,h]=cc(...e),f=$e(u.missingWarn)?u.missingWarn:n.missingWarn;$e(u.fallbackWarn)?u.fallbackWarn:n.fallbackWarn;const d=!!u.part,_=iu(n,u),v=a(n,s,_);if(!_e(l)||l==="")return new Intl.DateTimeFormat(_,h).format(c);let g={},m,b=null;const x="datetime format";for(let y=0;y<v.length&&(m=v[y],g=t[m]||{},b=g[l],!Ue(b));y++)su(n,l,m,f,x);if(!Ue(b)||!_e(m))return i?zo:l;let S=`${m}__${l}`;Vo(h)||(S=`${S}__${JSON.stringify(h)}`);let I=o.get(S);return I||(I=new Intl.DateTimeFormat(m,Ut({},b,h)),o.set(S,I)),d?I.formatToParts(c):I.format(c)}const sm=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function cc(...n){const[e,t,i,s]=n,r={};let a={},o;if(_e(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw qn(Fn.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();o=new Date(c);try{o.toISOString()}catch{throw qn(Fn.INVALID_ISO_DATE_ARGUMENT)}}else if(Uv(e)){if(isNaN(e.getTime()))throw qn(Fn.INVALID_DATE_ARGUMENT);o=e}else if(Et(e))o=e;else throw qn(Fn.INVALID_ARGUMENT);return _e(t)?r.key=t:Ue(t)&&Object.keys(t).forEach(l=>{sm.includes(l)?a[l]=t[l]:r[l]=t[l]}),_e(i)?r.locale=i:Ue(i)&&(a=i),Ue(s)&&(a=s),[r.key||"",o,r,a]}function wh(n,e,t){const i=n;for(const s in t){const r=`${e}__${s}`;i.__datetimeFormatters.has(r)&&i.__datetimeFormatters.delete(r)}}function Rh(n,...e){const{numberFormats:t,unresolving:i,fallbackLocale:s,onWarn:r,localeFallbacker:a}=n,{__numberFormatters:o}=n,[l,c,u,h]=uc(...e),f=$e(u.missingWarn)?u.missingWarn:n.missingWarn;$e(u.fallbackWarn)?u.fallbackWarn:n.fallbackWarn;const d=!!u.part,_=iu(n,u),v=a(n,s,_);if(!_e(l)||l==="")return new Intl.NumberFormat(_,h).format(c);let g={},m,b=null;const x="number format";for(let y=0;y<v.length&&(m=v[y],g=t[m]||{},b=g[l],!Ue(b));y++)su(n,l,m,f,x);if(!Ue(b)||!_e(m))return i?zo:l;let S=`${m}__${l}`;Vo(h)||(S=`${S}__${JSON.stringify(h)}`);let I=o.get(S);return I||(I=new Intl.NumberFormat(m,Ut({},b,h)),o.set(S,I)),d?I.formatToParts(c):I.format(c)}const rm=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function uc(...n){const[e,t,i,s]=n,r={};let a={};if(!Et(e))throw qn(Fn.INVALID_ARGUMENT);const o=e;return _e(t)?r.key=t:Ue(t)&&Object.keys(t).forEach(l=>{rm.includes(l)?a[l]=t[l]:r[l]=t[l]}),_e(i)?r.locale=i:Ue(i)&&(a=i),Ue(s)&&(a=s),[r.key||"",o,r,a]}function Ch(n,e,t){const i=n;for(const s in t){const r=`${e}__${s}`;i.__numberFormatters.has(r)&&i.__numberFormatters.delete(r)}}_0();/*!
  * vue-i18n v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const rx="9.13.1";function ax(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(fi().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(fi().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(fi().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(fi().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(fi().__INTLIFY_PROD_DEVTOOLS__=!1)}const am=B0.__EXTEND_POINT__,si=Ho(am);si(),si(),si(),si(),si(),si(),si(),si(),si();const om=Fn.__EXTEND_POINT__,cn=Ho(om),Tt={UNEXPECTED_RETURN_TYPE:om,INVALID_ARGUMENT:cn(),MUST_BE_CALL_SETUP_TOP:cn(),NOT_INSTALLED:cn(),NOT_AVAILABLE_IN_LEGACY_MODE:cn(),REQUIRED_VALUE:cn(),INVALID_VALUE:cn(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:cn(),NOT_INSTALLED_WITH_PROVIDE:cn(),UNEXPECTED_ERROR:cn(),NOT_COMPATIBLE_LEGACY_VUE_I18N:cn(),BRIDGE_SUPPORT_VUE_2_ONLY:cn(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:cn(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:cn(),__EXTEND_POINT__:cn()};function Ct(n,...e){return gr(n,null,void 0)}const hc=$i("__translateVNode"),fc=$i("__datetimeParts"),dc=$i("__numberParts"),lm=$i("__setPluralRules"),cm=$i("__injectWithOption"),pc=$i("__dispose");function la(n){if(!rt(n))return n;for(const e in n)if(Mo(n,e))if(!e.includes("."))rt(n[e])&&la(n[e]);else{const t=e.split("."),i=t.length-1;let s=n,r=!1;for(let a=0;a<i;a++){if(t[a]in s||(s[t[a]]={}),!rt(s[t[a]])){r=!0;break}s=s[t[a]]}r||(s[t[i]]=n[e],delete n[e]),rt(s[t[i]])&&la(s[t[i]])}return n}function Go(n,e){const{messages:t,__i18n:i,messageResolver:s,flatJson:r}=e,a=Ue(t)?t:dt(i)?{}:{[n]:{}};if(dt(i)&&i.forEach(o=>{if("locale"in o&&"resource"in o){const{locale:l,resource:c}=o;l?(a[l]=a[l]||{},co(c,a[l])):co(c,a)}else _e(o)&&co(JSON.parse(o),a)}),s==null&&r)for(const o in a)Mo(a,o)&&la(a[o]);return a}function um(n){return n.type}function hm(n,e,t){let i=rt(e.messages)?e.messages:{};"__i18nGlobal"in t&&(i=Go(n.locale.value,{messages:i,__i18n:t.__i18nGlobal}));const s=Object.keys(i);s.length&&s.forEach(r=>{n.mergeLocaleMessage(r,i[r])});{if(rt(e.datetimeFormats)){const r=Object.keys(e.datetimeFormats);r.length&&r.forEach(a=>{n.mergeDateTimeFormat(a,e.datetimeFormats[a])})}if(rt(e.numberFormats)){const r=Object.keys(e.numberFormats);r.length&&r.forEach(a=>{n.mergeNumberFormat(a,e.numberFormats[a])})}}}function Lh(n){return tt(fa,null,n,0)}const Ih="__INTLIFY_META__",Ph=()=>[],ox=()=>!1;let Nh=0;function Dh(n){return(e,t,i,s)=>n(t,i,aa()||void 0,s)}const lx=()=>{const n=aa();let e=null;return n&&(e=um(n)[Ih])?{[Ih]:e}:null};function ru(n={},e){const{__root:t,__injectWithOption:i}=n,s=t===void 0,r=n.flatJson,a=xo?Fs:cp,o=!!n.translateExistCompatible;let l=$e(n.inheritLocale)?n.inheritLocale:!0;const c=a(t&&l?t.locale.value:_e(n.locale)?n.locale:ir),u=a(t&&l?t.fallbackLocale.value:_e(n.fallbackLocale)||dt(n.fallbackLocale)||Ue(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:c.value),h=a(Go(c.value,n)),f=a(Ue(n.datetimeFormats)?n.datetimeFormats:{[c.value]:{}}),d=a(Ue(n.numberFormats)?n.numberFormats:{[c.value]:{}});let _=t?t.missingWarn:$e(n.missingWarn)||zi(n.missingWarn)?n.missingWarn:!0,v=t?t.fallbackWarn:$e(n.fallbackWarn)||zi(n.fallbackWarn)?n.fallbackWarn:!0,g=t?t.fallbackRoot:$e(n.fallbackRoot)?n.fallbackRoot:!0,m=!!n.fallbackFormat,b=ut(n.missing)?n.missing:null,x=ut(n.missing)?Dh(n.missing):null,S=ut(n.postTranslation)?n.postTranslation:null,I=t?t.warnHtmlMessage:$e(n.warnHtmlMessage)?n.warnHtmlMessage:!0,y=!!n.escapeParameter;const C=t?t.modifiers:Ue(n.modifiers)?n.modifiers:{};let U=n.pluralRules||t&&t.pluralRules,E;E=(()=>{s&&Sh(null);const N={version:rx,locale:c.value,fallbackLocale:u.value,messages:h.value,modifiers:C,pluralRules:U,missing:x===null?void 0:x,missingWarn:_,fallbackWarn:v,fallbackFormat:m,unresolving:!0,postTranslation:S===null?void 0:S,warnHtmlMessage:I,escapeParameter:y,messageResolver:n.messageResolver,messageCompiler:n.messageCompiler,__meta:{framework:"vue"}};N.datetimeFormats=f.value,N.numberFormats=d.value,N.__datetimeFormatters=Ue(E)?E.__datetimeFormatters:void 0,N.__numberFormatters=Ue(E)?E.__numberFormatters:void 0;const O=q0(N);return s&&Sh(O),O})(),Lr(E,c.value,u.value);function W(){return[c.value,u.value,h.value,f.value,d.value]}const $=Dn({get:()=>c.value,set:N=>{c.value=N,E.locale=c.value}}),F=Dn({get:()=>u.value,set:N=>{u.value=N,E.fallbackLocale=u.value,Lr(E,c.value,N)}}),ne=Dn(()=>h.value),te=Dn(()=>f.value),ae=Dn(()=>d.value);function ie(){return ut(S)?S:null}function X(N){S=N,E.postTranslation=N}function ce(){return b}function ue(N){N!==null&&(x=Dh(N)),b=N,E.missing=x}const ge=(N,O,le,ee,de,Ce)=>{W();let ye;try{__INTLIFY_PROD_DEVTOOLS__,s||(E.fallbackContext=t?Y0():void 0),ye=N(E)}finally{__INTLIFY_PROD_DEVTOOLS__,s||(E.fallbackContext=void 0)}if(le!=="translate exists"&&Et(ye)&&ye===zo||le==="translate exists"&&!ye){const[Me,Ne]=O();return t&&g?ee(t):de(Me)}else{if(Ce(ye))return ye;throw Ct(Tt.UNEXPECTED_RETURN_TYPE)}};function Re(...N){return ge(O=>Reflect.apply(bh,null,[O,...N]),()=>lc(...N),"translate",O=>Reflect.apply(O.t,O,[...N]),O=>O,O=>_e(O))}function Ke(...N){const[O,le,ee]=N;if(ee&&!rt(ee))throw Ct(Tt.INVALID_ARGUMENT);return Re(O,le,Ut({resolvedMessage:!0},ee||{}))}function Q(...N){return ge(O=>Reflect.apply(Ah,null,[O,...N]),()=>cc(...N),"datetime format",O=>Reflect.apply(O.d,O,[...N]),()=>vh,O=>_e(O))}function he(...N){return ge(O=>Reflect.apply(Rh,null,[O,...N]),()=>uc(...N),"number format",O=>Reflect.apply(O.n,O,[...N]),()=>vh,O=>_e(O))}function pe(N){return N.map(O=>_e(O)||Et(O)||$e(O)?Lh(String(O)):O)}const De={normalize:pe,interpolate:N=>N,type:"vnode"};function Fe(...N){return ge(O=>{let le;const ee=O;try{ee.processor=De,le=Reflect.apply(bh,null,[ee,...N])}finally{ee.processor=null}return le},()=>lc(...N),"translate",O=>O[hc](...N),O=>[Lh(O)],O=>dt(O))}function z(...N){return ge(O=>Reflect.apply(Rh,null,[O,...N]),()=>uc(...N),"number format",O=>O[dc](...N),Ph,O=>_e(O)||dt(O))}function Je(...N){return ge(O=>Reflect.apply(Ah,null,[O,...N]),()=>cc(...N),"datetime format",O=>O[fc](...N),Ph,O=>_e(O)||dt(O))}function be(N){U=N,E.pluralRules=U}function P(N,O){return ge(()=>{if(!N)return!1;const le=_e(O)?O:c.value,ee=Y(le),de=E.messageResolver(ee,N);return o?de!=null:sr(de)||Tn(de)||_e(de)},()=>[N],"translate exists",le=>Reflect.apply(le.te,le,[N,O]),ox,le=>$e(le))}function A(N){let O=null;const le=Yp(E,u.value,c.value);for(let ee=0;ee<le.length;ee++){const de=h.value[le[ee]]||{},Ce=E.messageResolver(de,N);if(Ce!=null){O=Ce;break}}return O}function B(N){const O=A(N);return O??(t?t.tm(N)||{}:{})}function Y(N){return h.value[N]||{}}function Z(N,O){if(r){const le={[N]:O};for(const ee in le)Mo(le,ee)&&la(le[ee]);O=le[N]}h.value[N]=O,E.messages=h.value}function re(N,O){h.value[N]=h.value[N]||{};const le={[N]:O};if(r)for(const ee in le)Mo(le,ee)&&la(le[ee]);O=le[N],co(O,h.value[N]),E.messages=h.value}function w(N){return f.value[N]||{}}function p(N,O){f.value[N]=O,E.datetimeFormats=f.value,wh(E,N,O)}function M(N,O){f.value[N]=Ut(f.value[N]||{},O),E.datetimeFormats=f.value,wh(E,N,O)}function R(N){return d.value[N]||{}}function D(N,O){d.value[N]=O,E.numberFormats=d.value,Ch(E,N,O)}function H(N,O){d.value[N]=Ut(d.value[N]||{},O),E.numberFormats=d.value,Ch(E,N,O)}Nh++,t&&xo&&(Ys(t.locale,N=>{l&&(c.value=N,E.locale=N,Lr(E,c.value,u.value))}),Ys(t.fallbackLocale,N=>{l&&(u.value=N,E.fallbackLocale=N,Lr(E,c.value,u.value))}));const j={id:Nh,locale:$,fallbackLocale:F,get inheritLocale(){return l},set inheritLocale(N){l=N,N&&t&&(c.value=t.locale.value,u.value=t.fallbackLocale.value,Lr(E,c.value,u.value))},get availableLocales(){return Object.keys(h.value).sort()},messages:ne,get modifiers(){return C},get pluralRules(){return U||{}},get isGlobal(){return s},get missingWarn(){return _},set missingWarn(N){_=N,E.missingWarn=_},get fallbackWarn(){return v},set fallbackWarn(N){v=N,E.fallbackWarn=v},get fallbackRoot(){return g},set fallbackRoot(N){g=N},get fallbackFormat(){return m},set fallbackFormat(N){m=N,E.fallbackFormat=m},get warnHtmlMessage(){return I},set warnHtmlMessage(N){I=N,E.warnHtmlMessage=N},get escapeParameter(){return y},set escapeParameter(N){y=N,E.escapeParameter=N},t:Re,getLocaleMessage:Y,setLocaleMessage:Z,mergeLocaleMessage:re,getPostTranslationHandler:ie,setPostTranslationHandler:X,getMissingHandler:ce,setMissingHandler:ue,[lm]:be};return j.datetimeFormats=te,j.numberFormats=ae,j.rt=Ke,j.te=P,j.tm=B,j.d=Q,j.n=he,j.getDateTimeFormat=w,j.setDateTimeFormat=p,j.mergeDateTimeFormat=M,j.getNumberFormat=R,j.setNumberFormat=D,j.mergeNumberFormat=H,j[cm]=i,j[hc]=Fe,j[fc]=Je,j[dc]=z,j}function cx(n){const e=_e(n.locale)?n.locale:ir,t=_e(n.fallbackLocale)||dt(n.fallbackLocale)||Ue(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:e,i=ut(n.missing)?n.missing:void 0,s=$e(n.silentTranslationWarn)||zi(n.silentTranslationWarn)?!n.silentTranslationWarn:!0,r=$e(n.silentFallbackWarn)||zi(n.silentFallbackWarn)?!n.silentFallbackWarn:!0,a=$e(n.fallbackRoot)?n.fallbackRoot:!0,o=!!n.formatFallbackMessages,l=Ue(n.modifiers)?n.modifiers:{},c=n.pluralizationRules,u=ut(n.postTranslation)?n.postTranslation:void 0,h=_e(n.warnHtmlInMessage)?n.warnHtmlInMessage!=="off":!0,f=!!n.escapeParameterHtml,d=$e(n.sync)?n.sync:!0;let _=n.messages;if(Ue(n.sharedMessages)){const y=n.sharedMessages;_=Object.keys(y).reduce((U,E)=>{const T=U[E]||(U[E]={});return Ut(T,y[E]),U},_||{})}const{__i18n:v,__root:g,__injectWithOption:m}=n,b=n.datetimeFormats,x=n.numberFormats,S=n.flatJson,I=n.translateExistCompatible;return{locale:e,fallbackLocale:t,messages:_,flatJson:S,datetimeFormats:b,numberFormats:x,missing:i,missingWarn:s,fallbackWarn:r,fallbackRoot:a,fallbackFormat:o,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:h,escapeParameter:f,messageResolver:n.messageResolver,inheritLocale:d,translateExistCompatible:I,__i18n:v,__root:g,__injectWithOption:m}}function mc(n={},e){{const t=ru(cx(n)),{__extender:i}=n,s={id:t.id,get locale(){return t.locale.value},set locale(r){t.locale.value=r},get fallbackLocale(){return t.fallbackLocale.value},set fallbackLocale(r){t.fallbackLocale.value=r},get messages(){return t.messages.value},get datetimeFormats(){return t.datetimeFormats.value},get numberFormats(){return t.numberFormats.value},get availableLocales(){return t.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(r){},get missing(){return t.getMissingHandler()},set missing(r){t.setMissingHandler(r)},get silentTranslationWarn(){return $e(t.missingWarn)?!t.missingWarn:t.missingWarn},set silentTranslationWarn(r){t.missingWarn=$e(r)?!r:r},get silentFallbackWarn(){return $e(t.fallbackWarn)?!t.fallbackWarn:t.fallbackWarn},set silentFallbackWarn(r){t.fallbackWarn=$e(r)?!r:r},get modifiers(){return t.modifiers},get formatFallbackMessages(){return t.fallbackFormat},set formatFallbackMessages(r){t.fallbackFormat=r},get postTranslation(){return t.getPostTranslationHandler()},set postTranslation(r){t.setPostTranslationHandler(r)},get sync(){return t.inheritLocale},set sync(r){t.inheritLocale=r},get warnHtmlInMessage(){return t.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(r){t.warnHtmlMessage=r!=="off"},get escapeParameterHtml(){return t.escapeParameter},set escapeParameterHtml(r){t.escapeParameter=r},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(r){},get pluralizationRules(){return t.pluralRules||{}},__composer:t,t(...r){const[a,o,l]=r,c={};let u=null,h=null;if(!_e(a))throw Ct(Tt.INVALID_ARGUMENT);const f=a;return _e(o)?c.locale=o:dt(o)?u=o:Ue(o)&&(h=o),dt(l)?u=l:Ue(l)&&(h=l),Reflect.apply(t.t,t,[f,u||h||{},c])},rt(...r){return Reflect.apply(t.rt,t,[...r])},tc(...r){const[a,o,l]=r,c={plural:1};let u=null,h=null;if(!_e(a))throw Ct(Tt.INVALID_ARGUMENT);const f=a;return _e(o)?c.locale=o:Et(o)?c.plural=o:dt(o)?u=o:Ue(o)&&(h=o),_e(l)?c.locale=l:dt(l)?u=l:Ue(l)&&(h=l),Reflect.apply(t.t,t,[f,u||h||{},c])},te(r,a){return t.te(r,a)},tm(r){return t.tm(r)},getLocaleMessage(r){return t.getLocaleMessage(r)},setLocaleMessage(r,a){t.setLocaleMessage(r,a)},mergeLocaleMessage(r,a){t.mergeLocaleMessage(r,a)},d(...r){return Reflect.apply(t.d,t,[...r])},getDateTimeFormat(r){return t.getDateTimeFormat(r)},setDateTimeFormat(r,a){t.setDateTimeFormat(r,a)},mergeDateTimeFormat(r,a){t.mergeDateTimeFormat(r,a)},n(...r){return Reflect.apply(t.n,t,[...r])},getNumberFormat(r){return t.getNumberFormat(r)},setNumberFormat(r,a){t.setNumberFormat(r,a)},mergeNumberFormat(r,a){t.mergeNumberFormat(r,a)},getChoiceIndex(r,a){return-1}};return s.__extender=i,s}}const au={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:n=>n==="parent"||n==="global",default:"parent"},i18n:{type:Object}};function ux({slots:n},e){return e.length===1&&e[0]==="default"?(n.default?n.default():[]).reduce((i,s)=>[...i,...s.type===tn?s.children:[s]],[]):e.reduce((t,i)=>{const s=n[i];return s&&(t[i]=s()),t},{})}function fm(n){return tn}const hx=qc({name:"i18n-t",props:Ut({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:n=>Et(n)||!isNaN(n)}},au),setup(n,e){const{slots:t,attrs:i}=e,s=n.i18n||Jn({useScope:n.scope,__useComponent:!0});return()=>{const r=Object.keys(t).filter(h=>h!=="_"),a={};n.locale&&(a.locale=n.locale),n.plural!==void 0&&(a.plural=_e(n.plural)?+n.plural:n.plural);const o=ux(e,r),l=s[hc](n.keypath,o,a),c=Ut({},i),u=_e(n.tag)||rt(n.tag)?n.tag:fm();return Vp(u,c,l)}}}),Uh=hx;function fx(n){return dt(n)&&!_e(n[0])}function dm(n,e,t,i){const{slots:s,attrs:r}=e;return()=>{const a={part:!0};let o={};n.locale&&(a.locale=n.locale),_e(n.format)?a.key=n.format:rt(n.format)&&(_e(n.format.key)&&(a.key=n.format.key),o=Object.keys(n.format).reduce((f,d)=>t.includes(d)?Ut({},f,{[d]:n.format[d]}):f,{}));const l=i(n.value,a,o);let c=[a.key];dt(l)?c=l.map((f,d)=>{const _=s[f.type],v=_?_({[f.type]:f.value,index:d,parts:l}):[f.value];return fx(v)&&(v[0].key=`${f.type}-${d}`),v}):_e(l)&&(c=[l]);const u=Ut({},r),h=_e(n.tag)||rt(n.tag)?n.tag:fm();return Vp(h,u,c)}}const dx=qc({name:"i18n-n",props:Ut({value:{type:Number,required:!0},format:{type:[String,Object]}},au),setup(n,e){const t=n.i18n||Jn({useScope:n.scope,__useComponent:!0});return dm(n,e,rm,(...i)=>t[dc](...i))}}),Oh=dx,px=qc({name:"i18n-d",props:Ut({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},au),setup(n,e){const t=n.i18n||Jn({useScope:n.scope,__useComponent:!0});return dm(n,e,sm,(...i)=>t[fc](...i))}}),Fh=px;function mx(n,e){const t=n;if(n.mode==="composition")return t.__getInstance(e)||n.global;{const i=t.__getInstance(e);return i!=null?i.__composer:n.global.__composer}}function gx(n){const e=a=>{const{instance:o,modifiers:l,value:c}=a;if(!o||!o.$)throw Ct(Tt.UNEXPECTED_ERROR);const u=mx(n,o.$),h=Bh(c);return[Reflect.apply(u.t,u,[...kh(h)]),u]};return{created:(a,o)=>{const[l,c]=e(o);xo&&n.global===c&&(a.__i18nWatcher=Ys(c.locale,()=>{o.instance&&o.instance.$forceUpdate()})),a.__composer=c,a.textContent=l},unmounted:a=>{xo&&a.__i18nWatcher&&(a.__i18nWatcher(),a.__i18nWatcher=void 0,delete a.__i18nWatcher),a.__composer&&(a.__composer=void 0,delete a.__composer)},beforeUpdate:(a,{value:o})=>{if(a.__composer){const l=a.__composer,c=Bh(o);a.textContent=Reflect.apply(l.t,l,[...kh(c)])}},getSSRProps:a=>{const[o]=e(a);return{textContent:o}}}}function Bh(n){if(_e(n))return{path:n};if(Ue(n)){if(!("path"in n))throw Ct(Tt.REQUIRED_VALUE,"path");return n}else throw Ct(Tt.INVALID_VALUE)}function kh(n){const{path:e,locale:t,args:i,choice:s,plural:r}=n,a={},o=i||{};return _e(t)&&(a.locale=t),Et(s)&&(a.plural=s),Et(r)&&(a.plural=r),[e,o,a]}function _x(n,e,...t){const i=Ue(t[0])?t[0]:{},s=!!i.useI18nComponentName;($e(i.globalInstall)?i.globalInstall:!0)&&([s?"i18n":Uh.name,"I18nT"].forEach(a=>n.component(a,Uh)),[Oh.name,"I18nN"].forEach(a=>n.component(a,Oh)),[Fh.name,"I18nD"].forEach(a=>n.component(a,Fh))),n.directive("t",gx(e))}function vx(n,e,t){return{beforeCreate(){const i=aa();if(!i)throw Ct(Tt.UNEXPECTED_ERROR);const s=this.$options;if(s.i18n){const r=s.i18n;if(s.__i18n&&(r.__i18n=s.__i18n),r.__root=e,this===this.$root)this.$i18n=Vh(n,r);else{r.__injectWithOption=!0,r.__extender=t.__vueI18nExtend,this.$i18n=mc(r);const a=this.$i18n;a.__extender&&(a.__disposer=a.__extender(this.$i18n))}}else if(s.__i18n)if(this===this.$root)this.$i18n=Vh(n,s);else{this.$i18n=mc({__i18n:s.__i18n,__injectWithOption:!0,__extender:t.__vueI18nExtend,__root:e});const r=this.$i18n;r.__extender&&(r.__disposer=r.__extender(this.$i18n))}else this.$i18n=n;s.__i18nGlobal&&hm(e,s,s),this.$t=(...r)=>this.$i18n.t(...r),this.$rt=(...r)=>this.$i18n.rt(...r),this.$tc=(...r)=>this.$i18n.tc(...r),this.$te=(r,a)=>this.$i18n.te(r,a),this.$d=(...r)=>this.$i18n.d(...r),this.$n=(...r)=>this.$i18n.n(...r),this.$tm=r=>this.$i18n.tm(r),t.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=aa();if(!i)throw Ct(Tt.UNEXPECTED_ERROR);const s=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,s.__disposer&&(s.__disposer(),delete s.__disposer,delete s.__extender),t.__deleteInstance(i),delete this.$i18n}}}function Vh(n,e){n.locale=e.locale||n.locale,n.fallbackLocale=e.fallbackLocale||n.fallbackLocale,n.missing=e.missing||n.missing,n.silentTranslationWarn=e.silentTranslationWarn||n.silentFallbackWarn,n.silentFallbackWarn=e.silentFallbackWarn||n.silentFallbackWarn,n.formatFallbackMessages=e.formatFallbackMessages||n.formatFallbackMessages,n.postTranslation=e.postTranslation||n.postTranslation,n.warnHtmlInMessage=e.warnHtmlInMessage||n.warnHtmlInMessage,n.escapeParameterHtml=e.escapeParameterHtml||n.escapeParameterHtml,n.sync=e.sync||n.sync,n.__composer[lm](e.pluralizationRules||n.pluralizationRules);const t=Go(n.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(t).forEach(i=>n.mergeLocaleMessage(i,t[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>n.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>n.mergeNumberFormat(i,e.numberFormats[i])),n}const xx=$i("global-vue-i18n");function Mx(n={},e){const t=__VUE_I18N_LEGACY_API__&&$e(n.legacy)?n.legacy:__VUE_I18N_LEGACY_API__,i=$e(n.globalInjection)?n.globalInjection:!0,s=__VUE_I18N_LEGACY_API__&&t?!!n.allowComposition:!0,r=new Map,[a,o]=Sx(n,t),l=$i("");function c(f){return r.get(f)||null}function u(f,d){r.set(f,d)}function h(f){r.delete(f)}{const f={get mode(){return __VUE_I18N_LEGACY_API__&&t?"legacy":"composition"},get allowComposition(){return s},async install(d,..._){if(d.__VUE_I18N_SYMBOL__=l,d.provide(d.__VUE_I18N_SYMBOL__,f),Ue(_[0])){const m=_[0];f.__composerExtend=m.__composerExtend,f.__vueI18nExtend=m.__vueI18nExtend}let v=null;!t&&i&&(v=Lx(d,f.global)),__VUE_I18N_FULL_INSTALL__&&_x(d,f,..._),__VUE_I18N_LEGACY_API__&&t&&d.mixin(vx(o,o.__composer,f));const g=d.unmount;d.unmount=()=>{v&&v(),f.dispose(),g()}},get global(){return o},dispose(){a.stop()},__instances:r,__getInstance:c,__setInstance:u,__deleteInstance:h};return f}}function Jn(n={}){const e=aa();if(e==null)throw Ct(Tt.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw Ct(Tt.NOT_INSTALLED);const t=yx(e),i=Tx(t),s=um(e),r=Ex(n,s);if(__VUE_I18N_LEGACY_API__&&t.mode==="legacy"&&!n.__useComponent){if(!t.allowComposition)throw Ct(Tt.NOT_AVAILABLE_IN_LEGACY_MODE);return Rx(e,r,i,n)}if(r==="global")return hm(i,n,s),i;if(r==="parent"){let l=bx(t,e,n.__useComponent);return l==null&&(l=i),l}const a=t;let o=a.__getInstance(e);if(o==null){const l=Ut({},n);"__i18n"in s&&(l.__i18n=s.__i18n),i&&(l.__root=i),o=ru(l),a.__composerExtend&&(o[pc]=a.__composerExtend(o)),wx(a,e,o),a.__setInstance(e,o)}return o}function Sx(n,e,t){const i=Eg();{const s=__VUE_I18N_LEGACY_API__&&e?i.run(()=>mc(n)):i.run(()=>ru(n));if(s==null)throw Ct(Tt.UNEXPECTED_ERROR);return[i,s]}}function yx(n){{const e=qr(n.isCE?xx:n.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw Ct(n.isCE?Tt.NOT_INSTALLED_WITH_PROVIDE:Tt.UNEXPECTED_ERROR);return e}}function Ex(n,e){return Vo(n)?"__i18n"in e?"local":"global":n.useScope?n.useScope:"local"}function Tx(n){return n.mode==="composition"?n.global:n.global.__composer}function bx(n,e,t=!1){let i=null;const s=e.root;let r=Ax(e,t);for(;r!=null;){const a=n;if(n.mode==="composition")i=a.__getInstance(r);else if(__VUE_I18N_LEGACY_API__){const o=a.__getInstance(r);o!=null&&(i=o.__composer,t&&i&&!i[cm]&&(i=null))}if(i!=null||s===r)break;r=r.parent}return i}function Ax(n,e=!1){return n==null?null:e&&n.vnode.ctx||n.parent}function wx(n,e,t){Sp(()=>{},e),Kc(()=>{const i=t;n.__deleteInstance(e);const s=i[pc];s&&(s(),delete i[pc])},e)}function Rx(n,e,t,i={}){const s=e==="local",r=cp(null);if(s&&n.proxy&&!(n.proxy.$options.i18n||n.proxy.$options.__i18n))throw Ct(Tt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const a=$e(i.inheritLocale)?i.inheritLocale:!_e(i.locale),o=Fs(!s||a?t.locale.value:_e(i.locale)?i.locale:ir),l=Fs(!s||a?t.fallbackLocale.value:_e(i.fallbackLocale)||dt(i.fallbackLocale)||Ue(i.fallbackLocale)||i.fallbackLocale===!1?i.fallbackLocale:o.value),c=Fs(Go(o.value,i)),u=Fs(Ue(i.datetimeFormats)?i.datetimeFormats:{[o.value]:{}}),h=Fs(Ue(i.numberFormats)?i.numberFormats:{[o.value]:{}}),f=s?t.missingWarn:$e(i.missingWarn)||zi(i.missingWarn)?i.missingWarn:!0,d=s?t.fallbackWarn:$e(i.fallbackWarn)||zi(i.fallbackWarn)?i.fallbackWarn:!0,_=s?t.fallbackRoot:$e(i.fallbackRoot)?i.fallbackRoot:!0,v=!!i.fallbackFormat,g=ut(i.missing)?i.missing:null,m=ut(i.postTranslation)?i.postTranslation:null,b=s?t.warnHtmlMessage:$e(i.warnHtmlMessage)?i.warnHtmlMessage:!0,x=!!i.escapeParameter,S=s?t.modifiers:Ue(i.modifiers)?i.modifiers:{},I=i.pluralRules||s&&t.pluralRules;function y(){return[o.value,l.value,c.value,u.value,h.value]}const C=Dn({get:()=>r.value?r.value.locale.value:o.value,set:A=>{r.value&&(r.value.locale.value=A),o.value=A}}),U=Dn({get:()=>r.value?r.value.fallbackLocale.value:l.value,set:A=>{r.value&&(r.value.fallbackLocale.value=A),l.value=A}}),E=Dn(()=>r.value?r.value.messages.value:c.value),T=Dn(()=>u.value),W=Dn(()=>h.value);function $(){return r.value?r.value.getPostTranslationHandler():m}function F(A){r.value&&r.value.setPostTranslationHandler(A)}function ne(){return r.value?r.value.getMissingHandler():g}function te(A){r.value&&r.value.setMissingHandler(A)}function ae(A){return y(),A()}function ie(...A){return r.value?ae(()=>Reflect.apply(r.value.t,null,[...A])):ae(()=>"")}function X(...A){return r.value?Reflect.apply(r.value.rt,null,[...A]):""}function ce(...A){return r.value?ae(()=>Reflect.apply(r.value.d,null,[...A])):ae(()=>"")}function ue(...A){return r.value?ae(()=>Reflect.apply(r.value.n,null,[...A])):ae(()=>"")}function ge(A){return r.value?r.value.tm(A):{}}function Re(A,B){return r.value?r.value.te(A,B):!1}function Ke(A){return r.value?r.value.getLocaleMessage(A):{}}function Q(A,B){r.value&&(r.value.setLocaleMessage(A,B),c.value[A]=B)}function he(A,B){r.value&&r.value.mergeLocaleMessage(A,B)}function pe(A){return r.value?r.value.getDateTimeFormat(A):{}}function fe(A,B){r.value&&(r.value.setDateTimeFormat(A,B),u.value[A]=B)}function De(A,B){r.value&&r.value.mergeDateTimeFormat(A,B)}function Fe(A){return r.value?r.value.getNumberFormat(A):{}}function z(A,B){r.value&&(r.value.setNumberFormat(A,B),h.value[A]=B)}function Je(A,B){r.value&&r.value.mergeNumberFormat(A,B)}const be={get id(){return r.value?r.value.id:-1},locale:C,fallbackLocale:U,messages:E,datetimeFormats:T,numberFormats:W,get inheritLocale(){return r.value?r.value.inheritLocale:a},set inheritLocale(A){r.value&&(r.value.inheritLocale=A)},get availableLocales(){return r.value?r.value.availableLocales:Object.keys(c.value)},get modifiers(){return r.value?r.value.modifiers:S},get pluralRules(){return r.value?r.value.pluralRules:I},get isGlobal(){return r.value?r.value.isGlobal:!1},get missingWarn(){return r.value?r.value.missingWarn:f},set missingWarn(A){r.value&&(r.value.missingWarn=A)},get fallbackWarn(){return r.value?r.value.fallbackWarn:d},set fallbackWarn(A){r.value&&(r.value.missingWarn=A)},get fallbackRoot(){return r.value?r.value.fallbackRoot:_},set fallbackRoot(A){r.value&&(r.value.fallbackRoot=A)},get fallbackFormat(){return r.value?r.value.fallbackFormat:v},set fallbackFormat(A){r.value&&(r.value.fallbackFormat=A)},get warnHtmlMessage(){return r.value?r.value.warnHtmlMessage:b},set warnHtmlMessage(A){r.value&&(r.value.warnHtmlMessage=A)},get escapeParameter(){return r.value?r.value.escapeParameter:x},set escapeParameter(A){r.value&&(r.value.escapeParameter=A)},t:ie,getPostTranslationHandler:$,setPostTranslationHandler:F,getMissingHandler:ne,setMissingHandler:te,rt:X,d:ce,n:ue,tm:ge,te:Re,getLocaleMessage:Ke,setLocaleMessage:Q,mergeLocaleMessage:he,getDateTimeFormat:pe,setDateTimeFormat:fe,mergeDateTimeFormat:De,getNumberFormat:Fe,setNumberFormat:z,mergeNumberFormat:Je};function P(A){A.locale.value=o.value,A.fallbackLocale.value=l.value,Object.keys(c.value).forEach(B=>{A.mergeLocaleMessage(B,c.value[B])}),Object.keys(u.value).forEach(B=>{A.mergeDateTimeFormat(B,u.value[B])}),Object.keys(h.value).forEach(B=>{A.mergeNumberFormat(B,h.value[B])}),A.escapeParameter=x,A.fallbackFormat=v,A.fallbackRoot=_,A.fallbackWarn=d,A.missingWarn=f,A.warnHtmlMessage=b}return Mp(()=>{if(n.proxy==null||n.proxy.$i18n==null)throw Ct(Tt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const A=r.value=n.proxy.$i18n.__composer;e==="global"?(o.value=A.locale.value,l.value=A.fallbackLocale.value,c.value=A.messages.value,u.value=A.datetimeFormats.value,h.value=A.numberFormats.value):s&&P(A)}),be}const Cx=["locale","fallbackLocale","availableLocales"],Hh=["t","rt","d","n","tm","te"];function Lx(n,e){const t=Object.create(null);return Cx.forEach(s=>{const r=Object.getOwnPropertyDescriptor(e,s);if(!r)throw Ct(Tt.UNEXPECTED_ERROR);const a=ln(r.value)?{get(){return r.value.value},set(o){r.value.value=o}}:{get(){return r.get&&r.get()}};Object.defineProperty(t,s,a)}),n.config.globalProperties.$i18n=t,Hh.forEach(s=>{const r=Object.getOwnPropertyDescriptor(e,s);if(!r||!r.value)throw Ct(Tt.UNEXPECTED_ERROR);Object.defineProperty(n.config.globalProperties,`$${s}`,r)}),()=>{delete n.config.globalProperties.$i18n,Hh.forEach(s=>{delete n.config.globalProperties[`$${s}`]})}}ax();__INTLIFY_JIT_COMPILATION__?Mh(ex):Mh(Q0);W0(b0);X0(Yp);if(__INTLIFY_PROD_DEVTOOLS__){const n=fi();n.__INTLIFY__=!0,D0(n.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const Ix={class:"languageswitcher"},Px=Ye("img",{src:Iv,alt:"French"},null,-1),Nx=[Px],Dx=Ye("img",{src:Pv,alt:"English"},null,-1),Ux=[Dx],Ox={__name:"LanguageSwitcher",setup(n){const{locale:e,t}=Jn(),i=s=>{e.value=s,localStorage.setItem("lang",s)};return f_(()=>{const s=localStorage.getItem("lang");s&&(e.value=s)}),(s,r)=>(Dt(),$t("div",Ix,[Ye("button",{onClick:r[0]||(r[0]=a=>i("fr")),class:"lang-button"},Nx),Ye("button",{onClick:r[1]||(r[1]=a=>i("en")),class:"lang-button"},Ux)]))}},xn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Fx=n=>(jc("data-v-46bf99d4"),n=n(),$c(),n),Bx={class:"navbar"},kx={class:"navbar-items"},Vx=Fx(()=>Ye("p",null,"Leonard Maurin Noblet",-1)),Hx=["onClick"],zx={class:"languageswitcher"};function Gx(){window.scrollTo({top:0,behavior:"smooth"})}const Wx={data(){return{sections:[{id:"section1",name:"Projects"},{id:"section2",name:"Contact"}]}},methods:{scrollToSection(n){const e=document.getElementById(n);e&&e.scrollIntoView({behavior:"smooth"})}}},Xx=Object.assign(Wx,{__name:"Navbar",setup(n){const{t:e}=Jn();return(t,i)=>(Dt(),$t("nav",Bx,[Ye("ul",kx,[Vx,Ye("li",null,[Ye("button",{onClick:i[0]||(i[0]=s=>Gx())},zt(Gt(e)("about")),1)]),(Dt(!0),$t(tn,null,T_(t.sections,(s,r)=>(Dt(),$t("li",{key:r},[Ye("button",{onClick:a=>t.scrollToSection(s.id)},zt(s.name),9,Hx)]))),128)),Ye("div",zx,[tt(Ox)])])]))}}),jx=xn(Xx,[["__scopeId","data-v-46bf99d4"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ou="164",$x=0,zh=1,Yx=2,pm=1,qx=2,hi=3,gi=0,hn=1,bn=2,Vn=0,qs=1,gc=2,Gh=3,Wh=4,Kx=5,us=100,Zx=101,Jx=102,Qx=103,eM=104,tM=200,nM=201,iM=202,sM=203,_c=204,vc=205,rM=206,aM=207,oM=208,lM=209,cM=210,uM=211,hM=212,fM=213,dM=214,pM=0,mM=1,gM=2,yo=3,_M=4,vM=5,xM=6,MM=7,Wo=0,SM=1,yM=2,Vi=0,EM=1,TM=2,bM=3,AM=4,wM=5,RM=6,CM=7,Xh="attached",LM="detached",mm=300,rr=301,ar=302,xc=303,Mc=304,Xo=306,or=1e3,Ui=1001,Eo=1002,rn=1003,gm=1004,zr=1005,gn=1006,uo=1007,di=1008,Gi=1009,IM=1010,PM=1011,_m=1012,vm=1013,lr=1014,Kn=1015,Nn=1016,xm=1017,Mm=1018,pa=1020,NM=35902,DM=1021,UM=1022,Bn=1023,OM=1024,FM=1025,Ks=1026,ca=1027,Sm=1028,ym=1029,BM=1030,Em=1031,Tm=1033,ul=33776,hl=33777,fl=33778,dl=33779,jh=35840,$h=35841,Yh=35842,qh=35843,Kh=36196,Zh=37492,Jh=37496,Qh=37808,ef=37809,tf=37810,nf=37811,sf=37812,rf=37813,af=37814,of=37815,lf=37816,cf=37817,uf=37818,hf=37819,ff=37820,df=37821,pl=36492,pf=36494,mf=36495,kM=36283,gf=36284,_f=36285,vf=36286,VM=2200,HM=2201,zM=2202,ua=2300,cr=2301,ml=2302,Hs=2400,zs=2401,To=2402,lu=2500,GM=2501,WM=0,bm=1,Sc=2,XM=3200,Am=3201,ma=0,jM=1,Di="",Qt="srgb",Ot="srgb-linear",cu="display-p3",jo="display-p3-linear",bo="linear",ft="srgb",Ao="rec709",wo="p3",xs=7680,xf=519,$M=512,YM=513,qM=514,wm=515,KM=516,ZM=517,JM=518,QM=519,yc=35044,Mf="300 es",pi=2e3,Ro=2001;class _s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sf=1234567;const Zr=Math.PI/180,ur=180/Math.PI;function Hn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function Wt(n,e,t){return Math.max(e,Math.min(t,n))}function uu(n,e){return(n%e+e)%e}function eS(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function tS(n,e,t){return n!==e?(t-n)/(e-n):0}function Jr(n,e,t){return(1-t)*n+t*e}function nS(n,e,t,i){return Jr(n,e,1-Math.exp(-t*i))}function iS(n,e=1){return e-Math.abs(uu(n,e*2)-e)}function sS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function rS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function aS(n,e){return n+Math.floor(Math.random()*(e-n+1))}function oS(n,e){return n+Math.random()*(e-n)}function lS(n){return n*(.5-Math.random())}function cS(n){n!==void 0&&(Sf=n);let e=Sf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uS(n){return n*Zr}function hS(n){return n*ur}function fS(n){return(n&n-1)===0&&n!==0}function dS(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function pS(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function mS(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),h=r((e-i)/2),f=a((e-i)/2),d=r((i-e)/2),_=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*h,l*f,o*c);break;case"YZY":n.set(l*f,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*f,o*u,o*c);break;case"XZX":n.set(o*u,l*_,l*d,o*c);break;case"YXY":n.set(l*d,o*u,l*_,o*c);break;case"ZYZ":n.set(l*_,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const gS={DEG2RAD:Zr,RAD2DEG:ur,generateUUID:Hn,clamp:Wt,euclideanModulo:uu,mapLinear:eS,inverseLerp:tS,lerp:Jr,damp:nS,pingpong:iS,smoothstep:sS,smootherstep:rS,randInt:aS,randFloat:oS,randFloatSpread:lS,seededRandom:cS,degToRad:uS,radToDeg:hS,isPowerOfTwo:fS,ceilPowerOfTwo:dS,floorPowerOfTwo:pS,setQuaternionFromProperEuler:mS,normalize:lt,denormalize:Un};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,s,r,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],_=i[8],v=s[0],g=s[3],m=s[6],b=s[1],x=s[4],S=s[7],I=s[2],y=s[5],C=s[8];return r[0]=a*v+o*b+l*I,r[3]=a*g+o*x+l*y,r[6]=a*m+o*S+l*C,r[1]=c*v+u*b+h*I,r[4]=c*g+u*x+h*y,r[7]=c*m+u*S+h*C,r[2]=f*v+d*b+_*I,r[5]=f*g+d*x+_*y,r[8]=f*m+d*S+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,_=t*h+i*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(s*c-u*i)*v,e[2]=(o*i-s*a)*v,e[3]=f*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(gl.makeScale(e,t)),this}rotate(e){return this.premultiply(gl.makeRotation(-e)),this}translate(e,t){return this.premultiply(gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gl=new Ge;function Rm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ha(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _S(){const n=ha("canvas");return n.style.display="block",n}const yf={};function Cm(n){n in yf||(yf[n]=!0,console.warn(n))}const Ef=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Tf=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),La={[Ot]:{transfer:bo,primaries:Ao,toReference:n=>n,fromReference:n=>n},[Qt]:{transfer:ft,primaries:Ao,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[jo]:{transfer:bo,primaries:wo,toReference:n=>n.applyMatrix3(Tf),fromReference:n=>n.applyMatrix3(Ef)},[cu]:{transfer:ft,primaries:wo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Tf),fromReference:n=>n.applyMatrix3(Ef).convertLinearToSRGB()}},vS=new Set([Ot,jo]),st={enabled:!0,_workingColorSpace:Ot,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!vS.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=La[e].toReference,s=La[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return La[n].primaries},getTransfer:function(n){return n===Di?bo:La[n].transfer}};function Zs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _l(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ms;class xS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ms===void 0&&(Ms=ha("canvas")),Ms.width=e.width,Ms.height=e.height;const i=Ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ms}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ha("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Zs(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zs(t[i]/255)*255):t[i]=Zs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let MS=0;class Lm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=Hn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(vl(s[a].image)):r.push(vl(s[a]))}else r=vl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function vl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xS.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let SS=0;class Lt extends _s{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=Ui,s=Ui,r=gn,a=di,o=Bn,l=Gi,c=Lt.DEFAULT_ANISOTROPY,u=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=Hn(),this.name="",this.source=new Lm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case or:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case Eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case or:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case Eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=mm;Lt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,i=0,s=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(_+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(d+1)/2,I=(m+1)/2,y=(u+f)/4,C=(h+v)/4,U=(_+g)/4;return x>S&&x>I?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=y/i,r=C/i):S>I?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=y/s,r=U/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=C/r,s=U/r),this.set(i,s,r,t),this}let b=Math.sqrt((g-_)*(g-_)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(g-_)/b,this.y=(h-v)/b,this.z=(f-u)/b,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yS extends _s{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Lt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Lm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class en extends yS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Im extends Lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ES extends Lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[a+0],d=r[a+1],_=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=v;return}if(h!==v||l!==f||c!==d||u!==_){let g=1-o;const m=l*f+c*d+u*_+h*v,b=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const I=Math.sqrt(x),y=Math.atan2(I,m*b);g=Math.sin(g*y)/I,o=Math.sin(o*y)/I}const S=o*b;if(l=l*g+f*S,c=c*g+d*S,u=u*g+_*S,h=h*g+v*S,g===1-o){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],f=r[a+1],d=r[a+2],_=r[a+3];return e[t]=o*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-o*d,e[t+2]=c*_+u*d+o*f-l*h,e[t+3]=u*_-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),f=l(i/2),d=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>h){const d=2*Math.sqrt(1+i-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-i-h);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xl.copy(this).projectOnVector(e),this.sub(xl)}reflect(e){return this.sub(xl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xl=new V,bf=new zn;class vi{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(r,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ia.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ia.copy(i.boundingBox)),Ia.applyMatrix4(e.matrixWorld),this.union(Ia)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),Pa.subVectors(this.max,Ir),Ss.subVectors(e.a,Ir),ys.subVectors(e.b,Ir),Es.subVectors(e.c,Ir),yi.subVectors(ys,Ss),Ei.subVectors(Es,ys),es.subVectors(Ss,Es);let t=[0,-yi.z,yi.y,0,-Ei.z,Ei.y,0,-es.z,es.y,yi.z,0,-yi.x,Ei.z,0,-Ei.x,es.z,0,-es.x,-yi.y,yi.x,0,-Ei.y,Ei.x,0,-es.y,es.x,0];return!Ml(t,Ss,ys,Es,Pa)||(t=[1,0,0,0,1,0,0,0,1],!Ml(t,Ss,ys,Es,Pa))?!1:(Na.crossVectors(yi,Ei),t=[Na.x,Na.y,Na.z],Ml(t,Ss,ys,Es,Pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new V,new V,new V,new V,new V,new V,new V,new V],Cn=new V,Ia=new vi,Ss=new V,ys=new V,Es=new V,yi=new V,Ei=new V,es=new V,Ir=new V,Pa=new V,Na=new V,ts=new V;function Ml(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ts.fromArray(n,r);const o=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),l=e.dot(ts),c=t.dot(ts),u=i.dot(ts);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const TS=new vi,Pr=new V,Sl=new V;class Qn{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):TS.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);const t=Pr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Pr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(Sl)),this.expandByPoint(Pr.copy(e.center).sub(Sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new V,yl=new V,Da=new V,Ti=new V,El=new V,Ua=new V,Tl=new V;class $o{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){yl.copy(e).add(t).multiplyScalar(.5),Da.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(yl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Da),o=Ti.dot(this.direction),l=-Ti.dot(Da),c=Ti.lengthSq(),u=Math.abs(1-a*a);let h,f,d,_;if(u>0)if(h=a*l-o,f=a*o-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const v=1/u;h*=v,f*=v,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(yl).addScaledVector(Da,f),d}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),s=ai.dot(ai)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,i,s,r){El.subVectors(t,e),Ua.subVectors(i,e),Tl.crossVectors(El,Ua);let a=this.direction.dot(Tl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ti.subVectors(this.origin,e);const l=o*this.direction.dot(Ua.crossVectors(Ti,Ua));if(l<0)return null;const c=o*this.direction.dot(El.cross(Ti));if(c<0||l+c>a)return null;const u=-o*Ti.dot(Tl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(e,t,i,s,r,a,o,l,c,u,h,f,d,_,v,g){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,h,f,d,_,v,g)}set(e,t,i,s,r,a,o,l,c,u,h,f,d,_,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ts.setFromMatrixColumn(e,0).length(),r=1/Ts.setFromMatrixColumn(e,1).length(),a=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,_=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=_+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,v=c*h;t[0]=f+v*o,t[4]=_*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,v=c*h;t[0]=f-v*o,t[4]=-a*h,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,_=o*u,v=o*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=v-f*h,t[8]=_*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-v*h}else if(e.order==="XZY"){const f=a*l,d=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=a*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bS,e,AS)}lookAt(e,t,i){const s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),bi.crossVectors(i,pn),bi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),bi.crossVectors(i,pn)),bi.normalize(),Oa.crossVectors(pn,bi),s[0]=bi.x,s[4]=Oa.x,s[8]=pn.x,s[1]=bi.y,s[5]=Oa.y,s[9]=pn.y,s[2]=bi.z,s[6]=Oa.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],_=i[2],v=i[6],g=i[10],m=i[14],b=i[3],x=i[7],S=i[11],I=i[15],y=s[0],C=s[4],U=s[8],E=s[12],T=s[1],W=s[5],$=s[9],F=s[13],ne=s[2],te=s[6],ae=s[10],ie=s[14],X=s[3],ce=s[7],ue=s[11],ge=s[15];return r[0]=a*y+o*T+l*ne+c*X,r[4]=a*C+o*W+l*te+c*ce,r[8]=a*U+o*$+l*ae+c*ue,r[12]=a*E+o*F+l*ie+c*ge,r[1]=u*y+h*T+f*ne+d*X,r[5]=u*C+h*W+f*te+d*ce,r[9]=u*U+h*$+f*ae+d*ue,r[13]=u*E+h*F+f*ie+d*ge,r[2]=_*y+v*T+g*ne+m*X,r[6]=_*C+v*W+g*te+m*ce,r[10]=_*U+v*$+g*ae+m*ue,r[14]=_*E+v*F+g*ie+m*ge,r[3]=b*y+x*T+S*ne+I*X,r[7]=b*C+x*W+S*te+I*ce,r[11]=b*U+x*$+S*ae+I*ue,r[15]=b*E+x*F+S*ie+I*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],v=e[7],g=e[11],m=e[15];return _*(+r*l*h-s*c*h-r*o*f+i*c*f+s*o*d-i*l*d)+v*(+t*l*d-t*c*f+r*a*f-s*a*d+s*c*u-r*l*u)+g*(+t*c*h-t*o*d-r*a*h+i*a*d+r*o*u-i*c*u)+m*(-s*o*u-t*l*h+t*o*f+s*a*h-i*a*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],v=e[13],g=e[14],m=e[15],b=h*g*c-v*f*c+v*l*d-o*g*d-h*l*m+o*f*m,x=_*f*c-u*g*c-_*l*d+a*g*d+u*l*m-a*f*m,S=u*v*c-_*h*c+_*o*d-a*v*d-u*o*m+a*h*m,I=_*h*l-u*v*l-_*o*f+a*v*f+u*o*g-a*h*g,y=t*b+i*x+s*S+r*I;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/y;return e[0]=b*C,e[1]=(v*f*r-h*g*r-v*s*d+i*g*d+h*s*m-i*f*m)*C,e[2]=(o*g*r-v*l*r+v*s*c-i*g*c-o*s*m+i*l*m)*C,e[3]=(h*l*r-o*f*r-h*s*c+i*f*c+o*s*d-i*l*d)*C,e[4]=x*C,e[5]=(u*g*r-_*f*r+_*s*d-t*g*d-u*s*m+t*f*m)*C,e[6]=(_*l*r-a*g*r-_*s*c+t*g*c+a*s*m-t*l*m)*C,e[7]=(a*f*r-u*l*r+u*s*c-t*f*c-a*s*d+t*l*d)*C,e[8]=S*C,e[9]=(_*h*r-u*v*r-_*i*d+t*v*d+u*i*m-t*h*m)*C,e[10]=(a*v*r-_*o*r+_*i*c-t*v*c-a*i*m+t*o*m)*C,e[11]=(u*o*r-a*h*r-u*i*c+t*h*c+a*i*d-t*o*d)*C,e[12]=I*C,e[13]=(u*v*s-_*h*s+_*i*f-t*v*f-u*i*g+t*h*g)*C,e[14]=(_*o*s-a*v*s-_*i*l+t*v*l+a*i*g-t*o*g)*C,e[15]=(a*h*s-u*o*s+u*i*l-t*h*l-a*i*f+t*o*f)*C,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,_=r*h,v=a*u,g=a*h,m=o*h,b=l*c,x=l*u,S=l*h,I=i.x,y=i.y,C=i.z;return s[0]=(1-(v+m))*I,s[1]=(d+S)*I,s[2]=(_-x)*I,s[3]=0,s[4]=(d-S)*y,s[5]=(1-(f+m))*y,s[6]=(g+b)*y,s[7]=0,s[8]=(_+x)*C,s[9]=(g-b)*C,s[10]=(1-(f+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ts.set(s[0],s[1],s[2]).length();const a=Ts.set(s[4],s[5],s[6]).length(),o=Ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ln.copy(this);const c=1/r,u=1/a,h=1/o;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,t.setFromRotationMatrix(Ln),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=pi){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let d,_;if(o===pi)d=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ro)d=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=pi){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(a-r),f=(t+e)*c,d=(i+s)*u;let _,v;if(o===pi)_=(a+r)*h,v=-2*h;else if(o===Ro)_=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ts=new V,Ln=new Ve,bS=new V(0,0,0),AS=new V(1,1,1),bi=new V,Oa=new V,pn=new V,Af=new Ve,wf=new zn;class wn{constructor(e=0,t=0,i=0,s=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Af.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Af,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wf.setFromEuler(this),this.setFromQuaternion(wf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class Pm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wS=0;const Rf=new V,bs=new zn,oi=new Ve,Fa=new V,Nr=new V,RS=new V,CS=new zn,Cf=new V(1,0,0),Lf=new V(0,1,0),If=new V(0,0,1),Pf={type:"added"},LS={type:"removed"},As={type:"childadded",child:null},bl={type:"childremoved",child:null};class _t extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new V,t=new wn,i=new zn,s=new V(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Ge}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(Cf,e)}rotateY(e){return this.rotateOnAxis(Lf,e)}rotateZ(e){return this.rotateOnAxis(If,e)}translateOnAxis(e,t){return Rf.copy(e).applyQuaternion(this.quaternion),this.position.add(Rf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cf,e)}translateY(e){return this.translateOnAxis(Lf,e)}translateZ(e){return this.translateOnAxis(If,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fa.copy(e):Fa.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Nr,Fa,this.up):oi.lookAt(Fa,Nr,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(oi),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pf),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(LS),bl.child=e,this.dispatchEvent(bl),bl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pf),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,RS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,CS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}_t.DEFAULT_UP=new V(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new V,li=new V,Al=new V,ci=new V,ws=new V,Rs=new V,Nf=new V,wl=new V,Rl=new V,Cl=new V;class Yn{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),In.subVectors(e,t),s.cross(In);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){In.subVectors(s,t),li.subVectors(i,t),Al.subVectors(e,t);const a=In.dot(In),o=In.dot(li),l=In.dot(Al),c=li.dot(li),u=li.dot(Al),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,_=(a*u-o*l)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static isFrontFacing(e,t,i,s){return In.subVectors(i,t),li.subVectors(e,t),In.cross(li).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),li.subVectors(this.a,this.b),In.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Yn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;ws.subVectors(s,i),Rs.subVectors(r,i),wl.subVectors(e,i);const l=ws.dot(wl),c=Rs.dot(wl);if(l<=0&&c<=0)return t.copy(i);Rl.subVectors(e,s);const u=ws.dot(Rl),h=Rs.dot(Rl);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(ws,a);Cl.subVectors(e,r);const d=ws.dot(Cl),_=Rs.dot(Cl);if(_>=0&&d<=_)return t.copy(r);const v=d*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Rs,o);const g=u*_-d*h;if(g<=0&&h-u>=0&&d-_>=0)return Nf.subVectors(r,s),o=(h-u)/(h-u+(d-_)),t.copy(s).addScaledVector(Nf,o);const m=1/(g+v+f);return a=v*m,o=f*m,t.copy(i).addScaledVector(ws,a).addScaledVector(Rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function Ll(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ae{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=uu(e,1),t=Wt(t,0,1),i=Wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ll(a,r,e+1/3),this.g=Ll(a,r,e),this.b=Ll(a,r,e-1/3)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=Qt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=Nm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}copyLinearToSRGB(e){return this.r=_l(e.r),this.g=_l(e.g),this.b=_l(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return st.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Wt(Ht.r*255,0,255))*65536+Math.round(Wt(Ht.g*255,0,255))*256+Math.round(Wt(Ht.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(Ht.copy(this),t);const i=Ht.r,s=Ht.g,r=Ht.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Qt){st.fromWorkingColorSpace(Ht.copy(this),e);const t=Ht.r,i=Ht.g,s=Ht.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(Ba);const i=Jr(Ai.h,Ba.h,t),s=Jr(Ai.s,Ba.s,t),r=Jr(Ai.l,Ba.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Ae;Ae.NAMES=Nm;let IS=0;class an extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=qs,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=vc,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(i.blending=this.blending),this.side!==gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_c&&(i.blendSrc=this.blendSrc),this.blendDst!==vc&&(i.blendDst=this.blendDst),this.blendEquation!==us&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fs extends an{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new V,ka=new Ee;class on{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Cm("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ka.fromBufferAttribute(this,t),ka.applyMatrix3(e),this.setXY(t,ka.x,ka.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yc&&(e.usage=this.usage),e}}class Dm extends on{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Um extends on{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Pt extends on{constructor(e,t,i){super(new Float32Array(e),t,i)}}let PS=0;const Sn=new Ve,Il=new _t,Cs=new V,mn=new vi,Dr=new vi,Rt=new V;class vn extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rm(e)?Um:Dm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return Il.lookAt(e),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Pt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Dr.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(mn.min,Dr.min),mn.expandByPoint(Rt),Rt.addVectors(mn.max,Dr.max),mn.expandByPoint(Rt)):(mn.expandByPoint(Dr.min),mn.expandByPoint(Dr.max))}mn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Rt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Rt.fromBufferAttribute(o,c),l&&(Cs.fromBufferAttribute(e,c),Rt.add(Cs)),s=Math.max(s,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new V,l[U]=new V;const c=new V,u=new V,h=new V,f=new Ee,d=new Ee,_=new Ee,v=new V,g=new V;function m(U,E,T){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,T),f.fromBufferAttribute(r,U),d.fromBufferAttribute(r,E),_.fromBufferAttribute(r,T),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const W=1/(d.x*_.y-_.x*d.y);isFinite(W)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(W),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(W),o[U].add(v),o[E].add(v),o[T].add(v),l[U].add(g),l[E].add(g),l[T].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,E=b.length;U<E;++U){const T=b[U],W=T.start,$=T.count;for(let F=W,ne=W+$;F<ne;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const x=new V,S=new V,I=new V,y=new V;function C(U){I.fromBufferAttribute(s,U),y.copy(I);const E=o[U];x.copy(E),x.sub(I.multiplyScalar(I.dot(E))).normalize(),S.crossVectors(y,E);const W=S.dot(l[U])<0?-1:1;a.setXYZW(U,x.x,x.y,x.z,W)}for(let U=0,E=b.length;U<E;++U){const T=b[U],W=T.start,$=T.count;for(let F=W,ne=W+$;F<ne;F+=3)C(e.getX(F+0)),C(e.getX(F+1)),C(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new V,r=new V,a=new V,o=new V,l=new V,c=new V,u=new V,h=new V;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let m=0;m<u;m++)f[_++]=c[d++]}return new on(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Df=new Ve,ns=new $o,Va=new Qn,Uf=new V,Ls=new V,Is=new V,Ps=new V,Pl=new V,Ha=new V,za=new Ee,Ga=new Ee,Wa=new Ee,Of=new V,Ff=new V,Bf=new V,Xa=new V,ja=new V;class Nt extends _t{constructor(e=new vn,t=new fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ha.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Pl.fromBufferAttribute(h,e),a?Ha.addScaledVector(Pl,u):Ha.addScaledVector(Pl.sub(t),u))}t.add(Ha)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(r),ns.copy(e.ray).recast(e.near),!(Va.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Va,Uf)===null||ns.origin.distanceToSquared(Uf)>(e.far-e.near)**2))&&(Df.copy(r).invert(),ns.copy(e.ray).applyMatrix4(Df),!(i.boundingBox!==null&&ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const g=f[_],m=a[g.materialIndex],b=Math.max(g.start,d.start),x=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let S=b,I=x;S<I;S+=3){const y=o.getX(S),C=o.getX(S+1),U=o.getX(S+2);s=$a(this,m,e,i,c,u,h,y,C,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=_,m=v;g<m;g+=3){const b=o.getX(g),x=o.getX(g+1),S=o.getX(g+2);s=$a(this,a,e,i,c,u,h,b,x,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const g=f[_],m=a[g.materialIndex],b=Math.max(g.start,d.start),x=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let S=b,I=x;S<I;S+=3){const y=S,C=S+1,U=S+2;s=$a(this,m,e,i,c,u,h,y,C,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=_,m=v;g<m;g+=3){const b=g,x=g+1,S=g+2;s=$a(this,a,e,i,c,u,h,b,x,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function NS(n,e,t,i,s,r,a,o){let l;if(e.side===hn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===gi,o),l===null)return null;ja.copy(o),ja.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ja);return c<t.near||c>t.far?null:{distance:c,point:ja.clone(),object:n}}function $a(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Ls),n.getVertexPosition(l,Is),n.getVertexPosition(c,Ps);const u=NS(n,e,t,i,Ls,Is,Ps,Xa);if(u){s&&(za.fromBufferAttribute(s,o),Ga.fromBufferAttribute(s,l),Wa.fromBufferAttribute(s,c),u.uv=Yn.getInterpolation(Xa,Ls,Is,Ps,za,Ga,Wa,new Ee)),r&&(za.fromBufferAttribute(r,o),Ga.fromBufferAttribute(r,l),Wa.fromBufferAttribute(r,c),u.uv1=Yn.getInterpolation(Xa,Ls,Is,Ps,za,Ga,Wa,new Ee)),a&&(Of.fromBufferAttribute(a,o),Ff.fromBufferAttribute(a,l),Bf.fromBufferAttribute(a,c),u.normal=Yn.getInterpolation(Xa,Ls,Is,Ps,Of,Ff,Bf,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new V,materialIndex:0};Yn.getNormal(Ls,Is,Ps,h.normal),u.face=h}return u}class ga extends vn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(h,2));function _(v,g,m,b,x,S,I,y,C,U,E){const T=S/C,W=I/U,$=S/2,F=I/2,ne=y/2,te=C+1,ae=U+1;let ie=0,X=0;const ce=new V;for(let ue=0;ue<ae;ue++){const ge=ue*W-F;for(let Re=0;Re<te;Re++){const Ke=Re*T-$;ce[v]=Ke*b,ce[g]=ge*x,ce[m]=ne,c.push(ce.x,ce.y,ce.z),ce[v]=0,ce[g]=0,ce[m]=y>0?1:-1,u.push(ce.x,ce.y,ce.z),h.push(Re/C),h.push(1-ue/U),ie+=1}}for(let ue=0;ue<U;ue++)for(let ge=0;ge<C;ge++){const Re=f+ge+te*ue,Ke=f+ge+te*(ue+1),Q=f+(ge+1)+te*(ue+1),he=f+(ge+1)+te*ue;l.push(Re,Ke,he),l.push(Ke,Q,he),X+=6}o.addGroup(d,X,E),d+=X,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Zt(n){const e={};for(let t=0;t<n.length;t++){const i=hr(n[t]);for(const s in i)e[s]=i[s]}return e}function DS(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Om(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const hu={clone:hr,merge:Zt};var US=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends an{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=US,this.fragmentShader=OS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=DS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Fm extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wi=new V,kf=new Ee,Vf=new Ee;class yt extends Fm{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,kf,Vf),t.subVectors(Vf,kf)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ns=-90,Ds=1;class FS extends _t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new yt(Ns,Ds,e,t);s.layers=this.layers,this.add(s);const r=new yt(Ns,Ds,e,t);r.layers=this.layers,this.add(r);const a=new yt(Ns,Ds,e,t);a.layers=this.layers,this.add(a);const o=new yt(Ns,Ds,e,t);o.layers=this.layers,this.add(o);const l=new yt(Ns,Ds,e,t);l.layers=this.layers,this.add(l);const c=new yt(Ns,Ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ro)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Bm extends Lt{constructor(e,t,i,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:rr,super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class BS extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Bm(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ga(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Vn});r.uniforms.tEquirect.value=t;const a=new Nt(s,r),o=t.minFilter;return t.minFilter===di&&(t.minFilter=gn),new FS(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const Nl=new V,kS=new V,VS=new Ge;class os{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Nl.subVectors(i,t).cross(kS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Nl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||VS.getNormalMatrix(e),s=this.coplanarPoint(Nl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new Qn,Ya=new V;class fu{constructor(e=new os,t=new os,i=new os,s=new os,r=new os,a=new os){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pi){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],_=s[9],v=s[10],g=s[11],m=s[12],b=s[13],x=s[14],S=s[15];if(i[0].setComponents(l-r,f-c,g-d,S-m).normalize(),i[1].setComponents(l+r,f+c,g+d,S+m).normalize(),i[2].setComponents(l+a,f+u,g+_,S+b).normalize(),i[3].setComponents(l-a,f-u,g-_,S-b).normalize(),i[4].setComponents(l-o,f-h,g-v,S-x).normalize(),t===pi)i[5].setComponents(l+o,f+h,g+v,S+x).normalize();else if(t===Ro)i[5].setComponents(o,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ya.x=s.normal.x>0?e.max.x:e.min.x,Ya.y=s.normal.y>0?e.max.y:e.min.y,Ya.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ya)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function km(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function HS(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(n.bindBuffer(c,o),h.count===-1&&f.length===0&&n.bufferSubData(c,0,u),f.length!==0){for(let d=0,_=f.length;d<_;d++){const v=f[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class _a extends vn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=e/o,f=t/l,d=[],_=[],v=[],g=[];for(let m=0;m<u;m++){const b=m*f-a;for(let x=0;x<c;x++){const S=x*h-r;_.push(S,-b,0),v.push(0,0,1),g.push(x/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){const x=b+c*m,S=b+c*(m+1),I=b+1+c*(m+1),y=b+1+c*m;d.push(x,S,y),d.push(S,I,y)}this.setIndex(d),this.setAttribute("position",new Pt(_,3)),this.setAttribute("normal",new Pt(v,3)),this.setAttribute("uv",new Pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.width,e.height,e.widthSegments,e.heightSegments)}}var zS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,WS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$S=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ZS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,JS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ey=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ty=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ny=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ly=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,py=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,my=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_y=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vy="gl_FragColor = linearToOutputTexel( gl_FragColor );",xy=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,My=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ey=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ty=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,by=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ay=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ry=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ly=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Py=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ny=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Dy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Uy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Oy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,By=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ky=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$y=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ky=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,iE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,sE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,rE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,aE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_E=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ME=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,TE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,AE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,CE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,IE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,UE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,OE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,YE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,qE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ZE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_T=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:zS,alphahash_pars_fragment:GS,alphamap_fragment:WS,alphamap_pars_fragment:XS,alphatest_fragment:jS,alphatest_pars_fragment:$S,aomap_fragment:YS,aomap_pars_fragment:qS,batching_pars_vertex:KS,batching_vertex:ZS,begin_vertex:JS,beginnormal_vertex:QS,bsdfs:ey,iridescence_fragment:ty,bumpmap_pars_fragment:ny,clipping_planes_fragment:iy,clipping_planes_pars_fragment:sy,clipping_planes_pars_vertex:ry,clipping_planes_vertex:ay,color_fragment:oy,color_pars_fragment:ly,color_pars_vertex:cy,color_vertex:uy,common:hy,cube_uv_reflection_fragment:fy,defaultnormal_vertex:dy,displacementmap_pars_vertex:py,displacementmap_vertex:my,emissivemap_fragment:gy,emissivemap_pars_fragment:_y,colorspace_fragment:vy,colorspace_pars_fragment:xy,envmap_fragment:My,envmap_common_pars_fragment:Sy,envmap_pars_fragment:yy,envmap_pars_vertex:Ey,envmap_physical_pars_fragment:Dy,envmap_vertex:Ty,fog_vertex:by,fog_pars_vertex:Ay,fog_fragment:wy,fog_pars_fragment:Ry,gradientmap_pars_fragment:Cy,lightmap_pars_fragment:Ly,lights_lambert_fragment:Iy,lights_lambert_pars_fragment:Py,lights_pars_begin:Ny,lights_toon_fragment:Uy,lights_toon_pars_fragment:Oy,lights_phong_fragment:Fy,lights_phong_pars_fragment:By,lights_physical_fragment:ky,lights_physical_pars_fragment:Vy,lights_fragment_begin:Hy,lights_fragment_maps:zy,lights_fragment_end:Gy,logdepthbuf_fragment:Wy,logdepthbuf_pars_fragment:Xy,logdepthbuf_pars_vertex:jy,logdepthbuf_vertex:$y,map_fragment:Yy,map_pars_fragment:qy,map_particle_fragment:Ky,map_particle_pars_fragment:Zy,metalnessmap_fragment:Jy,metalnessmap_pars_fragment:Qy,morphinstance_vertex:eE,morphcolor_vertex:tE,morphnormal_vertex:nE,morphtarget_pars_vertex:iE,morphtarget_vertex:sE,normal_fragment_begin:rE,normal_fragment_maps:aE,normal_pars_fragment:oE,normal_pars_vertex:lE,normal_vertex:cE,normalmap_pars_fragment:uE,clearcoat_normal_fragment_begin:hE,clearcoat_normal_fragment_maps:fE,clearcoat_pars_fragment:dE,iridescence_pars_fragment:pE,opaque_fragment:mE,packing:gE,premultiplied_alpha_fragment:_E,project_vertex:vE,dithering_fragment:xE,dithering_pars_fragment:ME,roughnessmap_fragment:SE,roughnessmap_pars_fragment:yE,shadowmap_pars_fragment:EE,shadowmap_pars_vertex:TE,shadowmap_vertex:bE,shadowmask_pars_fragment:AE,skinbase_vertex:wE,skinning_pars_vertex:RE,skinning_vertex:CE,skinnormal_vertex:LE,specularmap_fragment:IE,specularmap_pars_fragment:PE,tonemapping_fragment:NE,tonemapping_pars_fragment:DE,transmission_fragment:UE,transmission_pars_fragment:OE,uv_pars_fragment:FE,uv_pars_vertex:BE,uv_vertex:kE,worldpos_vertex:VE,background_vert:HE,background_frag:zE,backgroundCube_vert:GE,backgroundCube_frag:WE,cube_vert:XE,cube_frag:jE,depth_vert:$E,depth_frag:YE,distanceRGBA_vert:qE,distanceRGBA_frag:KE,equirect_vert:ZE,equirect_frag:JE,linedashed_vert:QE,linedashed_frag:eT,meshbasic_vert:tT,meshbasic_frag:nT,meshlambert_vert:iT,meshlambert_frag:sT,meshmatcap_vert:rT,meshmatcap_frag:aT,meshnormal_vert:oT,meshnormal_frag:lT,meshphong_vert:cT,meshphong_frag:uT,meshphysical_vert:hT,meshphysical_frag:fT,meshtoon_vert:dT,meshtoon_frag:pT,points_vert:mT,points_frag:gT,shadow_vert:_T,shadow_frag:vT,sprite_vert:xT,sprite_frag:MT},me={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},jn={basic:{uniforms:Zt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Zt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ae(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Zt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Zt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Zt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ae(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Zt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Zt([me.points,me.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Zt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Zt([me.common,me.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Zt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Zt([me.sprite,me.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Zt([me.common,me.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Zt([me.lights,me.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};jn.physical={uniforms:Zt([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const qa={r:0,b:0,g:0},ss=new wn,ST=new Ve;function yT(n,e,t,i,s,r,a){const o=new Ae(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function _(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?t:e).get(x)),x}function v(b){let x=!1;const S=_(b);S===null?m(o,l):S&&S.isColor&&(m(S,1),x=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil)}function g(b,x){const S=_(x);S&&(S.isCubeTexture||S.mapping===Xo)?(u===void 0&&(u=new Nt(new ga(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:hr(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,y,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ss.copy(x.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ST.makeRotationFromEuler(ss)),u.material.toneMapped=st.getTransfer(S.colorSpace)!==ft,(h!==S||f!==S.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,d=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Nt(new _a(2,2),new nn({name:"BackgroundMaterial",uniforms:hr(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=st.getTransfer(S.colorSpace)!==ft,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,x){b.getRGB(qa,Om(n)),i.buffers.color.setClear(qa.r,qa.g,qa.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(b,x=1){o.set(b),l=x,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(o,l)},render:v,addToRenderList:g}}function ET(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(T,W,$,F,ne){let te=!1;const ae=h(F,$,W);r!==ae&&(r=ae,c(r.object)),te=d(T,F,$,ne),te&&_(T,F,$,ne),ne!==null&&e.update(ne,n.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,S(T,W,$,F),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function u(T){return n.deleteVertexArray(T)}function h(T,W,$){const F=$.wireframe===!0;let ne=i[T.id];ne===void 0&&(ne={},i[T.id]=ne);let te=ne[W.id];te===void 0&&(te={},ne[W.id]=te);let ae=te[F];return ae===void 0&&(ae=f(l()),te[F]=ae),ae}function f(T){const W=[],$=[],F=[];for(let ne=0;ne<t;ne++)W[ne]=0,$[ne]=0,F[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:$,attributeDivisors:F,object:T,attributes:{},index:null}}function d(T,W,$,F){const ne=r.attributes,te=W.attributes;let ae=0;const ie=$.getAttributes();for(const X in ie)if(ie[X].location>=0){const ue=ne[X];let ge=te[X];if(ge===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(ge=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(ge=T.instanceColor)),ue===void 0||ue.attribute!==ge||ge&&ue.data!==ge.data)return!0;ae++}return r.attributesNum!==ae||r.index!==F}function _(T,W,$,F){const ne={},te=W.attributes;let ae=0;const ie=$.getAttributes();for(const X in ie)if(ie[X].location>=0){let ue=te[X];ue===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(ue=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(ue=T.instanceColor));const ge={};ge.attribute=ue,ue&&ue.data&&(ge.data=ue.data),ne[X]=ge,ae++}r.attributes=ne,r.attributesNum=ae,r.index=F}function v(){const T=r.newAttributes;for(let W=0,$=T.length;W<$;W++)T[W]=0}function g(T){m(T,0)}function m(T,W){const $=r.newAttributes,F=r.enabledAttributes,ne=r.attributeDivisors;$[T]=1,F[T]===0&&(n.enableVertexAttribArray(T),F[T]=1),ne[T]!==W&&(n.vertexAttribDivisor(T,W),ne[T]=W)}function b(){const T=r.newAttributes,W=r.enabledAttributes;for(let $=0,F=W.length;$<F;$++)W[$]!==T[$]&&(n.disableVertexAttribArray($),W[$]=0)}function x(T,W,$,F,ne,te,ae){ae===!0?n.vertexAttribIPointer(T,W,$,ne,te):n.vertexAttribPointer(T,W,$,F,ne,te)}function S(T,W,$,F){v();const ne=F.attributes,te=$.getAttributes(),ae=W.defaultAttributeValues;for(const ie in te){const X=te[ie];if(X.location>=0){let ce=ne[ie];if(ce===void 0&&(ie==="instanceMatrix"&&T.instanceMatrix&&(ce=T.instanceMatrix),ie==="instanceColor"&&T.instanceColor&&(ce=T.instanceColor)),ce!==void 0){const ue=ce.normalized,ge=ce.itemSize,Re=e.get(ce);if(Re===void 0)continue;const Ke=Re.buffer,Q=Re.type,he=Re.bytesPerElement,pe=Q===n.INT||Q===n.UNSIGNED_INT||ce.gpuType===vm;if(ce.isInterleavedBufferAttribute){const fe=ce.data,De=fe.stride,Fe=ce.offset;if(fe.isInstancedInterleavedBuffer){for(let z=0;z<X.locationSize;z++)m(X.location+z,fe.meshPerAttribute);T.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let z=0;z<X.locationSize;z++)g(X.location+z);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let z=0;z<X.locationSize;z++)x(X.location+z,ge/X.locationSize,Q,ue,De*he,(Fe+ge/X.locationSize*z)*he,pe)}else{if(ce.isInstancedBufferAttribute){for(let fe=0;fe<X.locationSize;fe++)m(X.location+fe,ce.meshPerAttribute);T.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let fe=0;fe<X.locationSize;fe++)g(X.location+fe);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let fe=0;fe<X.locationSize;fe++)x(X.location+fe,ge/X.locationSize,Q,ue,ge*he,ge/X.locationSize*fe*he,pe)}}else if(ae!==void 0){const ue=ae[ie];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(X.location,ue);break;case 3:n.vertexAttrib3fv(X.location,ue);break;case 4:n.vertexAttrib4fv(X.location,ue);break;default:n.vertexAttrib1fv(X.location,ue)}}}}b()}function I(){U();for(const T in i){const W=i[T];for(const $ in W){const F=W[$];for(const ne in F)u(F[ne].object),delete F[ne];delete W[$]}delete i[T]}}function y(T){if(i[T.id]===void 0)return;const W=i[T.id];for(const $ in W){const F=W[$];for(const ne in F)u(F[ne].object),delete F[ne];delete W[$]}delete i[T.id]}function C(T){for(const W in i){const $=i[W];if($[T.id]===void 0)continue;const F=$[T.id];for(const ne in F)u(F[ne].object),delete F[ne];delete $[T.id]}}function U(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:y,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:b}}function TT(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<h;d++)this.render(c[d],u[d]);else{f.multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,i,1)}}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let v=0;v<h;v++)_+=u[v];for(let v=0;v<f.length;v++)t.update(_,i,f[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function bT(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(y){return!(y!==Bn&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(y){const C=y===Nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==Gi&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==Kn&&!C)}function l(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=d>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:S,maxSamples:I}}function AT(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new os,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,m=n.get(h);if(!s||_===null||_.length===0||r&&!g)r?u(null):c();else{const b=r?0:i,x=b*4;let S=m.clippingState||null;l.value=S,S=u(_,f,x,d);for(let I=0;I!==x;++I)S[I]=t[I];m.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,_){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=l.value,_!==!0||g===null){const m=d+v*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,S=d;x!==v;++x,S+=4)a.copy(h[x]).applyMatrix4(b,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function wT(n){let e=new WeakMap;function t(a,o){return o===xc?a.mapping=rr:o===Mc&&(a.mapping=ar),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===xc||o===Mc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new BS(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Yo extends Fm{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gs=4,Hf=[.125,.215,.35,.446,.526,.582],hs=20,Dl=new Yo,zf=new Ae;let Ul=null,Ol=0,Fl=0,Bl=!1;const ls=(1+Math.sqrt(5))/2,Us=1/ls,Gf=[new V(-ls,Us,0),new V(ls,Us,0),new V(-Us,0,ls),new V(Us,0,ls),new V(0,ls,-Us),new V(0,ls,Us),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class Wf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ul=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ul,Ol,Fl),this._renderer.xr.enabled=Bl,e.scissorTest=!1,Ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rr||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ul=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Nn,format:Bn,colorSpace:Ot,depthBuffer:!1},s=Xf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xf(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RT(r)),this._blurMaterial=CT(r,e,t)}return s}_compileMaterial(e){const t=new Nt(this._lodPlanes[0],e);this._renderer.compile(t,Dl)}_sceneToCubeUV(e,t,i,s){const o=new yt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(zf),u.toneMapping=Vi,u.autoClear=!1;const d=new fs({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),_=new Nt(new ga,d);let v=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,v=!0):(d.color.copy(zf),v=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):b===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const x=this._cubeSize;Ka(s,b*x,m>2?x:0,x,x),u.setRenderTarget(s),v&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===rr||e.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$f()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jf());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Nt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ka(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Dl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Gf[(s-r-1)%Gf.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Nt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*hs-1),v=r/_,g=isFinite(r)?1+Math.floor(u*v):hs;g>hs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${hs}`);const m=[];let b=0;for(let C=0;C<hs;++C){const U=C/v,E=Math.exp(-U*U/2);m.push(E),C===0?b+=E:C<g&&(b+=2*E)}for(let C=0;C<m.length;C++)m[C]=m[C]/b;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const S=this._sizeLods[s],I=3*S*(s>x-Gs?s-x+Gs:0),y=4*(this._cubeSize-S);Ka(t,I,y,3*S,2*S),l.setRenderTarget(t),l.render(h,Dl)}}function RT(n){const e=[],t=[],i=[];let s=n;const r=n-Gs+1+Hf.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Gs?l=Hf[a-n+Gs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,v=3,g=2,m=1,b=new Float32Array(v*_*d),x=new Float32Array(g*_*d),S=new Float32Array(m*_*d);for(let y=0;y<d;y++){const C=y%3*2/3-1,U=y>2?0:-1,E=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];b.set(E,v*_*y),x.set(f,g*_*y);const T=[y,y,y,y,y,y];S.set(T,m*_*y)}const I=new vn;I.setAttribute("position",new on(b,v)),I.setAttribute("uv",new on(x,g)),I.setAttribute("faceIndex",new on(S,m)),e.push(I),s>Gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Xf(n,e,t){const i=new en(n,e,t);return i.texture.mapping=Xo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ka(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function CT(n,e,t){const i=new Float32Array(hs),s=new V(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function jf(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function $f(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function du(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function LT(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===xc||l===Mc,u=l===rr||l===ar;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Wf(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new Wf(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function IT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function PT(n,e,t,i){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let g=0,m=v.length;g<m;g++)e.remove(v[g])}f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const v=d[_];for(let g=0,m=v.length;g<m;g++)e.update(v[g],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let v=0;if(d!==null){const b=d.array;v=d.version;for(let x=0,S=b.length;x<S;x+=3){const I=b[x+0],y=b[x+1],C=b[x+2];f.push(I,y,y,C,C,I)}}else if(_!==void 0){const b=_.array;v=_.version;for(let x=0,S=b.length/3-1;x<S;x+=3){const I=x+0,y=x+1,C=x+2;f.push(I,y,y,C,C,I)}}else return;const g=new(Rm(f)?Um:Dm)(f,1);g.version=v;const m=r.get(h);m&&e.remove(m),r.set(h,g)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function NT(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*a),t.update(d,i,1)}function c(f,d,_){_!==0&&(n.drawElementsInstanced(i,d,r,f*a,_),t.update(d,i,_))}function u(f,d,_){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<_;g++)this.render(f[g]/a,d[g]);else{v.multiDrawElementsWEBGL(i,d,0,r,f,0,_);let g=0;for(let m=0;m<_;m++)g+=d[m];t.update(g,i,1)}}function h(f,d,_,v){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/a,d[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,v,0,_);let m=0;for(let b=0;b<_;b++)m+=d[b];for(let b=0;b<v.length;b++)t.update(m,i,v[b])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function DT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function UT(n,e,t){const i=new WeakMap,s=new ct;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let T=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",T)};var d=T;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),v===!0&&(S=2),g===!0&&(S=3);let I=o.attributes.position.count*S,y=1;I>e.maxTextureSize&&(y=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const C=new Float32Array(I*y*4*h),U=new Im(C,I,y,h);U.type=Kn,U.needsUpdate=!0;const E=S*4;for(let W=0;W<h;W++){const $=m[W],F=b[W],ne=x[W],te=I*y*4*W;for(let ae=0;ae<$.count;ae++){const ie=ae*E;_===!0&&(s.fromBufferAttribute($,ae),C[te+ie+0]=s.x,C[te+ie+1]=s.y,C[te+ie+2]=s.z,C[te+ie+3]=0),v===!0&&(s.fromBufferAttribute(F,ae),C[te+ie+4]=s.x,C[te+ie+5]=s.y,C[te+ie+6]=s.z,C[te+ie+7]=0),g===!0&&(s.fromBufferAttribute(ne,ae),C[te+ie+8]=s.x,C[te+ie+9]=s.y,C[te+ie+10]=s.z,C[te+ie+11]=ne.itemSize===4?s.w:1)}}f={count:h,texture:U,size:new Ee(I,y)},i.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function OT(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Vm extends Lt{constructor(e,t,i,s,r,a,o,l,c,u){if(u=u!==void 0?u:Ks,u!==Ks&&u!==ca)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ks&&(i=lr),i===void 0&&u===ca&&(i=pa),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Hm=new Lt,zm=new Vm(1,1);zm.compareFunction=wm;const Gm=new Im,Wm=new ES,Xm=new Bm,Yf=[],qf=[],Kf=new Float32Array(16),Zf=new Float32Array(9),Jf=new Float32Array(4);function _r(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Yf[s];if(r===void 0&&(r=new Float32Array(s),Yf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qo(n,e){let t=qf[e];t===void 0&&(t=new Int32Array(e),qf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function FT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function BT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function kT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function VT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function HT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;Jf.set(i),n.uniformMatrix2fv(this.addr,!1,Jf),wt(t,i)}}function zT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;Zf.set(i),n.uniformMatrix3fv(this.addr,!1,Zf),wt(t,i)}}function GT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;Kf.set(i),n.uniformMatrix4fv(this.addr,!1,Kf),wt(t,i)}}function WT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function XT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function jT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function $T(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function YT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function qT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function KT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function ZT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function JT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?zm:Hm;t.setTexture2D(e||r,s)}function QT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Wm,s)}function eb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Xm,s)}function tb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Gm,s)}function nb(n){switch(n){case 5126:return FT;case 35664:return BT;case 35665:return kT;case 35666:return VT;case 35674:return HT;case 35675:return zT;case 35676:return GT;case 5124:case 35670:return WT;case 35667:case 35671:return XT;case 35668:case 35672:return jT;case 35669:case 35673:return $T;case 5125:return YT;case 36294:return qT;case 36295:return KT;case 36296:return ZT;case 35678:case 36198:case 36298:case 36306:case 35682:return JT;case 35679:case 36299:case 36307:return QT;case 35680:case 36300:case 36308:case 36293:return eb;case 36289:case 36303:case 36311:case 36292:return tb}}function ib(n,e){n.uniform1fv(this.addr,e)}function sb(n,e){const t=_r(e,this.size,2);n.uniform2fv(this.addr,t)}function rb(n,e){const t=_r(e,this.size,3);n.uniform3fv(this.addr,t)}function ab(n,e){const t=_r(e,this.size,4);n.uniform4fv(this.addr,t)}function ob(n,e){const t=_r(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function lb(n,e){const t=_r(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function cb(n,e){const t=_r(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ub(n,e){n.uniform1iv(this.addr,e)}function hb(n,e){n.uniform2iv(this.addr,e)}function fb(n,e){n.uniform3iv(this.addr,e)}function db(n,e){n.uniform4iv(this.addr,e)}function pb(n,e){n.uniform1uiv(this.addr,e)}function mb(n,e){n.uniform2uiv(this.addr,e)}function gb(n,e){n.uniform3uiv(this.addr,e)}function _b(n,e){n.uniform4uiv(this.addr,e)}function vb(n,e,t){const i=this.cache,s=e.length,r=qo(t,s);At(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Hm,r[a])}function xb(n,e,t){const i=this.cache,s=e.length,r=qo(t,s);At(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Wm,r[a])}function Mb(n,e,t){const i=this.cache,s=e.length,r=qo(t,s);At(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Xm,r[a])}function Sb(n,e,t){const i=this.cache,s=e.length,r=qo(t,s);At(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Gm,r[a])}function yb(n){switch(n){case 5126:return ib;case 35664:return sb;case 35665:return rb;case 35666:return ab;case 35674:return ob;case 35675:return lb;case 35676:return cb;case 5124:case 35670:return ub;case 35667:case 35671:return hb;case 35668:case 35672:return fb;case 35669:case 35673:return db;case 5125:return pb;case 36294:return mb;case 36295:return gb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return vb;case 35679:case 36299:case 36307:return xb;case 35680:case 36300:case 36308:case 36293:return Mb;case 36289:case 36303:case 36311:case 36292:return Sb}}class Eb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=nb(t.type)}}class Tb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yb(t.type)}}class bb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const kl=/(\w+)(\])?(\[|\.)?/g;function Qf(n,e){n.seq.push(e),n.map[e.id]=e}function Ab(n,e,t){const i=n.name,s=i.length;for(kl.lastIndex=0;;){const r=kl.exec(i),a=kl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Qf(t,c===void 0?new Eb(o,n,e):new Tb(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new bb(o),Qf(t,h)),t=h}}}class ho{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Ab(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function ed(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const wb=37297;let Rb=0;function Cb(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Lb(n){const e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(n);let i;switch(e===t?i="":e===wo&&t===Ao?i="LinearDisplayP3ToLinearSRGB":e===Ao&&t===wo&&(i="LinearSRGBToLinearDisplayP3"),n){case Ot:case jo:return[i,"LinearTransferOETF"];case Qt:case cu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function td(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Cb(n.getShaderSource(e),a)}else return s}function Ib(n,e){const t=Lb(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Pb(n,e){let t;switch(e){case EM:t="Linear";break;case TM:t="Reinhard";break;case bM:t="OptimizedCineon";break;case AM:t="ACESFilmic";break;case RM:t="AgX";break;case CM:t="Neutral";break;case wM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Nb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function Db(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ub(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Gr(n){return n!==""}function nd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function id(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ob=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(n){return n.replace(Ob,Bb)}const Fb=new Map;function Bb(n,e){let t=ze[e];if(t===void 0){const i=Fb.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ec(t)}const kb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sd(n){return n.replace(kb,Vb)}function Vb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pm?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===qx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function zb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case rr:case ar:e="ENVMAP_TYPE_CUBE";break;case Xo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ar:e="ENVMAP_MODE_REFRACTION";break}return e}function Wb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Wo:e="ENVMAP_BLENDING_MULTIPLY";break;case SM:e="ENVMAP_BLENDING_MIX";break;case yM:e="ENVMAP_BLENDING_ADD";break}return e}function Xb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function jb(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Hb(t),c=zb(t),u=Gb(t),h=Wb(t),f=Xb(t),d=Nb(t),_=Db(r),v=s.createProgram();let g,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Gr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Gr).join(`
`),m.length>0&&(m+=`
`)):(g=[rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),m=[rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?ze.tonemapping_pars_fragment:"",t.toneMapping!==Vi?Pb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Ib("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gr).join(`
`)),a=Ec(a),a=nd(a,t),a=id(a,t),o=Ec(o),o=nd(o,t),o=id(o,t),a=sd(a),o=sd(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Mf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=b+g+a,S=b+m+o,I=ed(s,s.VERTEX_SHADER,x),y=ed(s,s.FRAGMENT_SHADER,S);s.attachShader(v,I),s.attachShader(v,y),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(W){if(n.debug.checkShaderErrors){const $=s.getProgramInfoLog(v).trim(),F=s.getShaderInfoLog(I).trim(),ne=s.getShaderInfoLog(y).trim();let te=!0,ae=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,I,y);else{const ie=td(s,I,"vertex"),X=td(s,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+$+`
`+ie+`
`+X)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(F===""||ne==="")&&(ae=!1);ae&&(W.diagnostics={runnable:te,programLog:$,vertexShader:{log:F,prefix:g},fragmentShader:{log:ne,prefix:m}})}s.deleteShader(I),s.deleteShader(y),U=new ho(s,v),E=Ub(s,v)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(v,wb)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rb++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=y,this}let $b=0;class Yb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new qb(e),t.set(e,i)),i}}class qb{constructor(e){this.id=$b++,this.code=e,this.usedTimes=0}}function Kb(n,e,t,i,s,r,a){const o=new Pm,l=new Yb,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,T,W,$,F){const ne=$.fog,te=F.geometry,ae=E.isMeshStandardMaterial?$.environment:null,ie=(E.isMeshStandardMaterial?t:e).get(E.envMap||ae),X=ie&&ie.mapping===Xo?ie.image.height:null,ce=_[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const ue=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ge=ue!==void 0?ue.length:0;let Re=0;te.morphAttributes.position!==void 0&&(Re=1),te.morphAttributes.normal!==void 0&&(Re=2),te.morphAttributes.color!==void 0&&(Re=3);let Ke,Q,he,pe;if(ce){const ot=jn[ce];Ke=ot.vertexShader,Q=ot.fragmentShader}else Ke=E.vertexShader,Q=E.fragmentShader,l.update(E),he=l.getVertexShaderID(E),pe=l.getFragmentShaderID(E);const fe=n.getRenderTarget(),De=F.isInstancedMesh===!0,Fe=F.isBatchedMesh===!0,z=!!E.map,Je=!!E.matcap,be=!!ie,P=!!E.aoMap,A=!!E.lightMap,B=!!E.bumpMap,Y=!!E.normalMap,Z=!!E.displacementMap,re=!!E.emissiveMap,w=!!E.metalnessMap,p=!!E.roughnessMap,M=E.anisotropy>0,R=E.clearcoat>0,D=E.dispersion>0,H=E.iridescence>0,j=E.sheen>0,N=E.transmission>0,O=M&&!!E.anisotropyMap,le=R&&!!E.clearcoatMap,ee=R&&!!E.clearcoatNormalMap,de=R&&!!E.clearcoatRoughnessMap,Ce=H&&!!E.iridescenceMap,ye=H&&!!E.iridescenceThicknessMap,Me=j&&!!E.sheenColorMap,Ne=j&&!!E.sheenRoughnessMap,Xe=!!E.specularMap,Ze=!!E.specularColorMap,Le=!!E.specularIntensityMap,k=N&&!!E.transmissionMap,oe=N&&!!E.thicknessMap,se=!!E.gradientMap,ve=!!E.alphaMap,Se=E.alphaTest>0,et=!!E.alphaHash,ht=!!E.extensions;let vt=Vi;E.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(vt=n.toneMapping);const Ft={shaderID:ce,shaderType:E.type,shaderName:E.name,vertexShader:Ke,fragmentShader:Q,defines:E.defines,customVertexShaderID:he,customFragmentShaderID:pe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Fe,instancing:De,instancingColor:De&&F.instanceColor!==null,instancingMorph:De&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ot,alphaToCoverage:!!E.alphaToCoverage,map:z,matcap:Je,envMap:be,envMapMode:be&&ie.mapping,envMapCubeUVHeight:X,aoMap:P,lightMap:A,bumpMap:B,normalMap:Y,displacementMap:f&&Z,emissiveMap:re,normalMapObjectSpace:Y&&E.normalMapType===jM,normalMapTangentSpace:Y&&E.normalMapType===ma,metalnessMap:w,roughnessMap:p,anisotropy:M,anisotropyMap:O,clearcoat:R,clearcoatMap:le,clearcoatNormalMap:ee,clearcoatRoughnessMap:de,dispersion:D,iridescence:H,iridescenceMap:Ce,iridescenceThicknessMap:ye,sheen:j,sheenColorMap:Me,sheenRoughnessMap:Ne,specularMap:Xe,specularColorMap:Ze,specularIntensityMap:Le,transmission:N,transmissionMap:k,thicknessMap:oe,gradientMap:se,opaque:E.transparent===!1&&E.blending===qs&&E.alphaToCoverage===!1,alphaMap:ve,alphaTest:Se,alphaHash:et,combine:E.combine,mapUv:z&&v(E.map.channel),aoMapUv:P&&v(E.aoMap.channel),lightMapUv:A&&v(E.lightMap.channel),bumpMapUv:B&&v(E.bumpMap.channel),normalMapUv:Y&&v(E.normalMap.channel),displacementMapUv:Z&&v(E.displacementMap.channel),emissiveMapUv:re&&v(E.emissiveMap.channel),metalnessMapUv:w&&v(E.metalnessMap.channel),roughnessMapUv:p&&v(E.roughnessMap.channel),anisotropyMapUv:O&&v(E.anisotropyMap.channel),clearcoatMapUv:le&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:ee&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&v(E.sheenRoughnessMap.channel),specularMapUv:Xe&&v(E.specularMap.channel),specularColorMapUv:Ze&&v(E.specularColorMap.channel),specularIntensityMapUv:Le&&v(E.specularIntensityMap.channel),transmissionMapUv:k&&v(E.transmissionMap.channel),thicknessMapUv:oe&&v(E.thicknessMap.channel),alphaMapUv:ve&&v(E.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Y||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!te.attributes.uv&&(z||ve),fog:!!ne,useFog:E.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:F.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Re,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:vt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:z&&E.map.isVideoTexture===!0&&st.getTransfer(E.map.colorSpace)===ft,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===bn,flipSided:E.side===hn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ht&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ht&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function m(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const W in E.defines)T.push(W),T.push(E.defines[W]);return E.isRawShaderMaterial===!1&&(b(T,E),x(T,E),T.push(n.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function b(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function x(E,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),E.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.alphaToCoverage&&o.enable(20),E.push(o.mask)}function S(E){const T=_[E.type];let W;if(T){const $=jn[T];W=hu.clone($.uniforms)}else W=E.uniforms;return W}function I(E,T){let W;for(let $=0,F=u.length;$<F;$++){const ne=u[$];if(ne.cacheKey===T){W=ne,++W.usedTimes;break}}return W===void 0&&(W=new jb(n,T,E,r),u.push(W)),W}function y(E){if(--E.usedTimes===0){const T=u.indexOf(E);u[T]=u[u.length-1],u.pop(),E.destroy()}}function C(E){l.remove(E)}function U(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:S,acquireProgram:I,releaseProgram:y,releaseShaderCache:C,programs:u,dispose:U}}function Zb(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Jb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ad(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function od(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h,f,d,_,v,g){let m=n[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:v,group:g},n[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=v,m.group=g),e++,m}function o(h,f,d,_,v,g){const m=a(h,f,d,_,v,g);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):t.push(m)}function l(h,f,d,_,v,g){const m=a(h,f,d,_,v,g);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||Jb),i.length>1&&i.sort(f||ad),s.length>1&&s.sort(f||ad)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Qb(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new od,n.set(i,[a])):s>=r.length?(a=new od,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function eA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Ae};break;case"SpotLight":t={position:new V,direction:new V,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function tA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let nA=0;function iA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function sA(n){const e=new eA,t=tA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const s=new V,r=new Ve,a=new Ve;function o(c,u){let h=0,f=0,d=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let _=0,v=0,g=0,m=0,b=0,x=0,S=0,I=0,y=0,C=0,U=0;c.sort(iA);const E=u===!0?Math.PI:1;for(let W=0,$=c.length;W<$;W++){const F=c[W],ne=F.color,te=F.intensity,ae=F.distance,ie=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=ne.r*te*E,f+=ne.g*te*E,d+=ne.b*te*E;else if(F.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(F.sh.coefficients[X],te);U++}else if(F.isDirectionalLight){const X=e.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity*E),F.castShadow){const ce=F.shadow,ue=t.get(F);ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,i.directionalShadow[_]=ue,i.directionalShadowMap[_]=ie,i.directionalShadowMatrix[_]=F.shadow.matrix,x++}i.directional[_]=X,_++}else if(F.isSpotLight){const X=e.get(F);X.position.setFromMatrixPosition(F.matrixWorld),X.color.copy(ne).multiplyScalar(te*E),X.distance=ae,X.coneCos=Math.cos(F.angle),X.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),X.decay=F.decay,i.spot[g]=X;const ce=F.shadow;if(F.map&&(i.spotLightMap[y]=F.map,y++,ce.updateMatrices(F),F.castShadow&&C++),i.spotLightMatrix[g]=ce.matrix,F.castShadow){const ue=t.get(F);ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,i.spotShadow[g]=ue,i.spotShadowMap[g]=ie,I++}g++}else if(F.isRectAreaLight){const X=e.get(F);X.color.copy(ne).multiplyScalar(te),X.halfWidth.set(F.width*.5,0,0),X.halfHeight.set(0,F.height*.5,0),i.rectArea[m]=X,m++}else if(F.isPointLight){const X=e.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity*E),X.distance=F.distance,X.decay=F.decay,F.castShadow){const ce=F.shadow,ue=t.get(F);ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,ue.shadowCameraNear=ce.camera.near,ue.shadowCameraFar=ce.camera.far,i.pointShadow[v]=ue,i.pointShadowMap[v]=ie,i.pointShadowMatrix[v]=F.shadow.matrix,S++}i.point[v]=X,v++}else if(F.isHemisphereLight){const X=e.get(F);X.skyColor.copy(F.color).multiplyScalar(te*E),X.groundColor.copy(F.groundColor).multiplyScalar(te*E),i.hemi[b]=X,b++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const T=i.hash;(T.directionalLength!==_||T.pointLength!==v||T.spotLength!==g||T.rectAreaLength!==m||T.hemiLength!==b||T.numDirectionalShadows!==x||T.numPointShadows!==S||T.numSpotShadows!==I||T.numSpotMaps!==y||T.numLightProbes!==U)&&(i.directional.length=_,i.spot.length=g,i.rectArea.length=m,i.point.length=v,i.hemi.length=b,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=I,i.spotShadowMap.length=I,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=I+y-C,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=U,T.directionalLength=_,T.pointLength=v,T.spotLength=g,T.rectAreaLength=m,T.hemiLength=b,T.numDirectionalShadows=x,T.numPointShadows=S,T.numSpotShadows=I,T.numSpotMaps=y,T.numLightProbes=U,i.version=nA++)}function l(c,u){let h=0,f=0,d=0,_=0,v=0;const g=u.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){const x=c[m];if(x.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),h++}else if(x.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),d++}else if(x.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function ld(n){const e=new sA(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(u){e.setup(t,u)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function rA(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new ld(n),e.set(s,[o])):r>=a.length?(o=new ld(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class jm extends an{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=XM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aA extends an{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const oA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cA(n,e,t){let i=new fu;const s=new Ee,r=new Ee,a=new ct,o=new jm({depthPacking:Am}),l=new aA,c={},u=t.maxTextureSize,h={[gi]:hn,[hn]:gi,[bn]:bn},f=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:oA,fragmentShader:lA}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new vn;_.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Nt(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pm;let m=this.type;this.render=function(y,C,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;const E=n.getRenderTarget(),T=n.getActiveCubeFace(),W=n.getActiveMipmapLevel(),$=n.state;$.setBlending(Vn),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const F=m!==hi&&this.type===hi,ne=m===hi&&this.type!==hi;for(let te=0,ae=y.length;te<ae;te++){const ie=y[te],X=ie.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const ce=X.getFrameExtents();if(s.multiply(ce),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ce.x),s.x=r.x*ce.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ce.y),s.y=r.y*ce.y,X.mapSize.y=r.y)),X.map===null||F===!0||ne===!0){const ge=this.type!==hi?{minFilter:rn,magFilter:rn}:{};X.map!==null&&X.map.dispose(),X.map=new en(s.x,s.y,ge),X.map.texture.name=ie.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const ue=X.getViewportCount();for(let ge=0;ge<ue;ge++){const Re=X.getViewport(ge);a.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),$.viewport(a),X.updateMatrices(ie,ge),i=X.getFrustum(),S(C,U,X.camera,ie,this.type)}X.isPointLightShadow!==!0&&this.type===hi&&b(X,U),X.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(E,T,W)};function b(y,C){const U=e.update(v);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new en(s.x,s.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(C,null,U,f,v,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(C,null,U,d,v,null)}function x(y,C,U,E){let T=null;const W=U.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(W!==void 0)T=W;else if(T=U.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const $=T.uuid,F=C.uuid;let ne=c[$];ne===void 0&&(ne={},c[$]=ne);let te=ne[F];te===void 0&&(te=T.clone(),ne[F]=te,C.addEventListener("dispose",I)),T=te}if(T.visible=C.visible,T.wireframe=C.wireframe,E===hi?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:h[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,U.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const $=n.properties.get(T);$.light=U}return T}function S(y,C,U,E,T){if(y.visible===!1)return;if(y.layers.test(C.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&T===hi)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,y.matrixWorld);const F=e.update(y),ne=y.material;if(Array.isArray(ne)){const te=F.groups;for(let ae=0,ie=te.length;ae<ie;ae++){const X=te[ae],ce=ne[X.materialIndex];if(ce&&ce.visible){const ue=x(y,ce,E,T);y.onBeforeShadow(n,y,C,U,F,ue,X),n.renderBufferDirect(U,null,F,ue,y,X),y.onAfterShadow(n,y,C,U,F,ue,X)}}}else if(ne.visible){const te=x(y,ne,E,T);y.onBeforeShadow(n,y,C,U,F,te,null),n.renderBufferDirect(U,null,F,te,y,null),y.onAfterShadow(n,y,C,U,F,te,null)}}const $=y.children;for(let F=0,ne=$.length;F<ne;F++)S($[F],C,U,E,T)}function I(y){y.target.removeEventListener("dispose",I);for(const U in c){const E=c[U],T=y.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function uA(n){function e(){let k=!1;const oe=new ct;let se=null;const ve=new ct(0,0,0,0);return{setMask:function(Se){se!==Se&&!k&&(n.colorMask(Se,Se,Se,Se),se=Se)},setLocked:function(Se){k=Se},setClear:function(Se,et,ht,vt,Ft){Ft===!0&&(Se*=vt,et*=vt,ht*=vt),oe.set(Se,et,ht,vt),ve.equals(oe)===!1&&(n.clearColor(Se,et,ht,vt),ve.copy(oe))},reset:function(){k=!1,se=null,ve.set(-1,0,0,0)}}}function t(){let k=!1,oe=null,se=null,ve=null;return{setTest:function(Se){Se?pe(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(Se){oe!==Se&&!k&&(n.depthMask(Se),oe=Se)},setFunc:function(Se){if(se!==Se){switch(Se){case pM:n.depthFunc(n.NEVER);break;case mM:n.depthFunc(n.ALWAYS);break;case gM:n.depthFunc(n.LESS);break;case yo:n.depthFunc(n.LEQUAL);break;case _M:n.depthFunc(n.EQUAL);break;case vM:n.depthFunc(n.GEQUAL);break;case xM:n.depthFunc(n.GREATER);break;case MM:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}se=Se}},setLocked:function(Se){k=Se},setClear:function(Se){ve!==Se&&(n.clearDepth(Se),ve=Se)},reset:function(){k=!1,oe=null,se=null,ve=null}}}function i(){let k=!1,oe=null,se=null,ve=null,Se=null,et=null,ht=null,vt=null,Ft=null;return{setTest:function(ot){k||(ot?pe(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(ot){oe!==ot&&!k&&(n.stencilMask(ot),oe=ot)},setFunc:function(ot,Gn,Yt){(se!==ot||ve!==Gn||Se!==Yt)&&(n.stencilFunc(ot,Gn,Yt),se=ot,ve=Gn,Se=Yt)},setOp:function(ot,Gn,Yt){(et!==ot||ht!==Gn||vt!==Yt)&&(n.stencilOp(ot,Gn,Yt),et=ot,ht=Gn,vt=Yt)},setLocked:function(ot){k=ot},setClear:function(ot){Ft!==ot&&(n.clearStencil(ot),Ft=ot)},reset:function(){k=!1,oe=null,se=null,ve=null,Se=null,et=null,ht=null,vt=null,Ft=null}}}const s=new e,r=new t,a=new i,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,_=!1,v=null,g=null,m=null,b=null,x=null,S=null,I=null,y=new Ae(0,0,0),C=0,U=!1,E=null,T=null,W=null,$=null,F=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,ae=0;const ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(ie)[1]),te=ae>=1):ie.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),te=ae>=2);let X=null,ce={};const ue=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),Re=new ct().fromArray(ue),Ke=new ct().fromArray(ge);function Q(k,oe,se,ve){const Se=new Uint8Array(4),et=n.createTexture();n.bindTexture(k,et),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ht=0;ht<se;ht++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(oe+ht,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return et}const he={};he[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),he[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),he[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),pe(n.DEPTH_TEST),r.setFunc(yo),B(!1),Y(zh),pe(n.CULL_FACE),P(Vn);function pe(k){c[k]!==!0&&(n.enable(k),c[k]=!0)}function fe(k){c[k]!==!1&&(n.disable(k),c[k]=!1)}function De(k,oe){return u[k]!==oe?(n.bindFramebuffer(k,oe),u[k]=oe,k===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=oe),k===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function Fe(k,oe){let se=f,ve=!1;if(k){se=h.get(oe),se===void 0&&(se=[],h.set(oe,se));const Se=k.textures;if(se.length!==Se.length||se[0]!==n.COLOR_ATTACHMENT0){for(let et=0,ht=Se.length;et<ht;et++)se[et]=n.COLOR_ATTACHMENT0+et;se.length=Se.length,ve=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,ve=!0);ve&&n.drawBuffers(se)}function z(k){return d!==k?(n.useProgram(k),d=k,!0):!1}const Je={[us]:n.FUNC_ADD,[Zx]:n.FUNC_SUBTRACT,[Jx]:n.FUNC_REVERSE_SUBTRACT};Je[Qx]=n.MIN,Je[eM]=n.MAX;const be={[tM]:n.ZERO,[nM]:n.ONE,[iM]:n.SRC_COLOR,[_c]:n.SRC_ALPHA,[cM]:n.SRC_ALPHA_SATURATE,[oM]:n.DST_COLOR,[rM]:n.DST_ALPHA,[sM]:n.ONE_MINUS_SRC_COLOR,[vc]:n.ONE_MINUS_SRC_ALPHA,[lM]:n.ONE_MINUS_DST_COLOR,[aM]:n.ONE_MINUS_DST_ALPHA,[uM]:n.CONSTANT_COLOR,[hM]:n.ONE_MINUS_CONSTANT_COLOR,[fM]:n.CONSTANT_ALPHA,[dM]:n.ONE_MINUS_CONSTANT_ALPHA};function P(k,oe,se,ve,Se,et,ht,vt,Ft,ot){if(k===Vn){_===!0&&(fe(n.BLEND),_=!1);return}if(_===!1&&(pe(n.BLEND),_=!0),k!==Kx){if(k!==v||ot!==U){if((g!==us||x!==us)&&(n.blendEquation(n.FUNC_ADD),g=us,x=us),ot)switch(k){case qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gc:n.blendFunc(n.ONE,n.ONE);break;case Gh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Gh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}m=null,b=null,S=null,I=null,y.set(0,0,0),C=0,v=k,U=ot}return}Se=Se||oe,et=et||se,ht=ht||ve,(oe!==g||Se!==x)&&(n.blendEquationSeparate(Je[oe],Je[Se]),g=oe,x=Se),(se!==m||ve!==b||et!==S||ht!==I)&&(n.blendFuncSeparate(be[se],be[ve],be[et],be[ht]),m=se,b=ve,S=et,I=ht),(vt.equals(y)===!1||Ft!==C)&&(n.blendColor(vt.r,vt.g,vt.b,Ft),y.copy(vt),C=Ft),v=k,U=!1}function A(k,oe){k.side===bn?fe(n.CULL_FACE):pe(n.CULL_FACE);let se=k.side===hn;oe&&(se=!se),B(se),k.blending===qs&&k.transparent===!1?P(Vn):P(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),r.setFunc(k.depthFunc),r.setTest(k.depthTest),r.setMask(k.depthWrite),s.setMask(k.colorWrite);const ve=k.stencilWrite;a.setTest(ve),ve&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),re(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function B(k){E!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),E=k)}function Y(k){k!==$x?(pe(n.CULL_FACE),k!==T&&(k===zh?n.cullFace(n.BACK):k===Yx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),T=k}function Z(k){k!==W&&(te&&n.lineWidth(k),W=k)}function re(k,oe,se){k?(pe(n.POLYGON_OFFSET_FILL),($!==oe||F!==se)&&(n.polygonOffset(oe,se),$=oe,F=se)):fe(n.POLYGON_OFFSET_FILL)}function w(k){k?pe(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function p(k){k===void 0&&(k=n.TEXTURE0+ne-1),X!==k&&(n.activeTexture(k),X=k)}function M(k,oe,se){se===void 0&&(X===null?se=n.TEXTURE0+ne-1:se=X);let ve=ce[se];ve===void 0&&(ve={type:void 0,texture:void 0},ce[se]=ve),(ve.type!==k||ve.texture!==oe)&&(X!==se&&(n.activeTexture(se),X=se),n.bindTexture(k,oe||he[k]),ve.type=k,ve.texture=oe)}function R(){const k=ce[X];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function D(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function H(){try{n.compressedTexImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function N(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function O(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function le(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ce(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(k){Re.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),Re.copy(k))}function Ne(k){Ke.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Ke.copy(k))}function Xe(k,oe){let se=l.get(oe);se===void 0&&(se=new WeakMap,l.set(oe,se));let ve=se.get(k);ve===void 0&&(ve=n.getUniformBlockIndex(oe,k.name),se.set(k,ve))}function Ze(k,oe){const ve=l.get(oe).get(k);o.get(oe)!==ve&&(n.uniformBlockBinding(oe,ve,k.__bindingPointIndex),o.set(oe,ve))}function Le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},X=null,ce={},u={},h=new WeakMap,f=[],d=null,_=!1,v=null,g=null,m=null,b=null,x=null,S=null,I=null,y=new Ae(0,0,0),C=0,U=!1,E=null,T=null,W=null,$=null,F=null,Re.set(0,0,n.canvas.width,n.canvas.height),Ke.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:pe,disable:fe,bindFramebuffer:De,drawBuffers:Fe,useProgram:z,setBlending:P,setMaterial:A,setFlipSided:B,setCullFace:Y,setLineWidth:Z,setPolygonOffset:re,setScissorTest:w,activeTexture:p,bindTexture:M,unbindTexture:R,compressedTexImage2D:D,compressedTexImage3D:H,texImage2D:Ce,texImage3D:ye,updateUBOMapping:Xe,uniformBlockBinding:Ze,texStorage2D:ee,texStorage3D:de,texSubImage2D:j,texSubImage3D:N,compressedTexSubImage2D:O,compressedTexSubImage3D:le,scissor:Me,viewport:Ne,reset:Le}}function hA(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,p){return d?new OffscreenCanvas(w,p):ha("canvas")}function v(w,p,M){let R=1;const D=re(w);if((D.width>M||D.height>M)&&(R=M/Math.max(D.width,D.height)),R<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const H=Math.floor(R*D.width),j=Math.floor(R*D.height);h===void 0&&(h=_(H,j));const N=p?_(H,j):h;return N.width=H,N.height=j,N.getContext("2d").drawImage(w,0,0,H,j),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+H+"x"+j+")."),N}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),w;return w}function g(w){return w.generateMipmaps&&w.minFilter!==rn&&w.minFilter!==gn}function m(w){n.generateMipmap(w)}function b(w,p,M,R,D=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let H=p;if(p===n.RED&&(M===n.FLOAT&&(H=n.R32F),M===n.HALF_FLOAT&&(H=n.R16F),M===n.UNSIGNED_BYTE&&(H=n.R8)),p===n.RED_INTEGER&&(M===n.UNSIGNED_BYTE&&(H=n.R8UI),M===n.UNSIGNED_SHORT&&(H=n.R16UI),M===n.UNSIGNED_INT&&(H=n.R32UI),M===n.BYTE&&(H=n.R8I),M===n.SHORT&&(H=n.R16I),M===n.INT&&(H=n.R32I)),p===n.RG&&(M===n.FLOAT&&(H=n.RG32F),M===n.HALF_FLOAT&&(H=n.RG16F),M===n.UNSIGNED_BYTE&&(H=n.RG8)),p===n.RG_INTEGER&&(M===n.UNSIGNED_BYTE&&(H=n.RG8UI),M===n.UNSIGNED_SHORT&&(H=n.RG16UI),M===n.UNSIGNED_INT&&(H=n.RG32UI),M===n.BYTE&&(H=n.RG8I),M===n.SHORT&&(H=n.RG16I),M===n.INT&&(H=n.RG32I)),p===n.RGB&&M===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),p===n.RGBA){const j=D?bo:st.getTransfer(R);M===n.FLOAT&&(H=n.RGBA32F),M===n.HALF_FLOAT&&(H=n.RGBA16F),M===n.UNSIGNED_BYTE&&(H=j===ft?n.SRGB8_ALPHA8:n.RGBA8),M===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),M===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function x(w,p){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==rn&&w.minFilter!==gn?Math.log2(Math.max(p.width,p.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?p.mipmaps.length:1}function S(w){const p=w.target;p.removeEventListener("dispose",S),y(p),p.isVideoTexture&&u.delete(p)}function I(w){const p=w.target;p.removeEventListener("dispose",I),U(p)}function y(w){const p=i.get(w);if(p.__webglInit===void 0)return;const M=w.source,R=f.get(M);if(R){const D=R[p.__cacheKey];D.usedTimes--,D.usedTimes===0&&C(w),Object.keys(R).length===0&&f.delete(M)}i.remove(w)}function C(w){const p=i.get(w);n.deleteTexture(p.__webglTexture);const M=w.source,R=f.get(M);delete R[p.__cacheKey],a.memory.textures--}function U(w){const p=i.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let R=0;R<6;R++){if(Array.isArray(p.__webglFramebuffer[R]))for(let D=0;D<p.__webglFramebuffer[R].length;D++)n.deleteFramebuffer(p.__webglFramebuffer[R][D]);else n.deleteFramebuffer(p.__webglFramebuffer[R]);p.__webglDepthbuffer&&n.deleteRenderbuffer(p.__webglDepthbuffer[R])}else{if(Array.isArray(p.__webglFramebuffer))for(let R=0;R<p.__webglFramebuffer.length;R++)n.deleteFramebuffer(p.__webglFramebuffer[R]);else n.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&n.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&n.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let R=0;R<p.__webglColorRenderbuffer.length;R++)p.__webglColorRenderbuffer[R]&&n.deleteRenderbuffer(p.__webglColorRenderbuffer[R]);p.__webglDepthRenderbuffer&&n.deleteRenderbuffer(p.__webglDepthRenderbuffer)}const M=w.textures;for(let R=0,D=M.length;R<D;R++){const H=i.get(M[R]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),a.memory.textures--),i.remove(M[R])}i.remove(w)}let E=0;function T(){E=0}function W(){const w=E;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),E+=1,w}function $(w){const p=[];return p.push(w.wrapS),p.push(w.wrapT),p.push(w.wrapR||0),p.push(w.magFilter),p.push(w.minFilter),p.push(w.anisotropy),p.push(w.internalFormat),p.push(w.format),p.push(w.type),p.push(w.generateMipmaps),p.push(w.premultiplyAlpha),p.push(w.flipY),p.push(w.unpackAlignment),p.push(w.colorSpace),p.join()}function F(w,p){const M=i.get(w);if(w.isVideoTexture&&Y(w),w.isRenderTargetTexture===!1&&w.version>0&&M.__version!==w.version){const R=w.image;if(R===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(R.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(M,w,p);return}}t.bindTexture(n.TEXTURE_2D,M.__webglTexture,n.TEXTURE0+p)}function ne(w,p){const M=i.get(w);if(w.version>0&&M.__version!==w.version){Re(M,w,p);return}t.bindTexture(n.TEXTURE_2D_ARRAY,M.__webglTexture,n.TEXTURE0+p)}function te(w,p){const M=i.get(w);if(w.version>0&&M.__version!==w.version){Re(M,w,p);return}t.bindTexture(n.TEXTURE_3D,M.__webglTexture,n.TEXTURE0+p)}function ae(w,p){const M=i.get(w);if(w.version>0&&M.__version!==w.version){Ke(M,w,p);return}t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+p)}const ie={[or]:n.REPEAT,[Ui]:n.CLAMP_TO_EDGE,[Eo]:n.MIRRORED_REPEAT},X={[rn]:n.NEAREST,[gm]:n.NEAREST_MIPMAP_NEAREST,[zr]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[uo]:n.LINEAR_MIPMAP_NEAREST,[di]:n.LINEAR_MIPMAP_LINEAR},ce={[$M]:n.NEVER,[QM]:n.ALWAYS,[YM]:n.LESS,[wm]:n.LEQUAL,[qM]:n.EQUAL,[JM]:n.GEQUAL,[KM]:n.GREATER,[ZM]:n.NOTEQUAL};function ue(w,p){if(p.type===Kn&&e.has("OES_texture_float_linear")===!1&&(p.magFilter===gn||p.magFilter===uo||p.magFilter===zr||p.magFilter===di||p.minFilter===gn||p.minFilter===uo||p.minFilter===zr||p.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,ie[p.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ie[p.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ie[p.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,X[p.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,X[p.minFilter]),p.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,ce[p.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===rn||p.minFilter!==zr&&p.minFilter!==di||p.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||i.get(p).__currentAnisotropy){const M=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,M.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,s.getMaxAnisotropy())),i.get(p).__currentAnisotropy=p.anisotropy}}}function ge(w,p){let M=!1;w.__webglInit===void 0&&(w.__webglInit=!0,p.addEventListener("dispose",S));const R=p.source;let D=f.get(R);D===void 0&&(D={},f.set(R,D));const H=$(p);if(H!==w.__cacheKey){D[H]===void 0&&(D[H]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,M=!0),D[H].usedTimes++;const j=D[w.__cacheKey];j!==void 0&&(D[w.__cacheKey].usedTimes--,j.usedTimes===0&&C(p)),w.__cacheKey=H,w.__webglTexture=D[H].texture}return M}function Re(w,p,M){let R=n.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(R=n.TEXTURE_2D_ARRAY),p.isData3DTexture&&(R=n.TEXTURE_3D);const D=ge(w,p),H=p.source;t.bindTexture(R,w.__webglTexture,n.TEXTURE0+M);const j=i.get(H);if(H.version!==j.__version||D===!0){t.activeTexture(n.TEXTURE0+M);const N=st.getPrimaries(st.workingColorSpace),O=p.colorSpace===Di?null:st.getPrimaries(p.colorSpace),le=p.colorSpace===Di||N===O?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,p.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,p.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let ee=v(p.image,!1,s.maxTextureSize);ee=Z(p,ee);const de=r.convert(p.format,p.colorSpace),Ce=r.convert(p.type);let ye=b(p.internalFormat,de,Ce,p.colorSpace,p.isVideoTexture);ue(R,p);let Me;const Ne=p.mipmaps,Xe=p.isVideoTexture!==!0,Ze=j.__version===void 0||D===!0,Le=H.dataReady,k=x(p,ee);if(p.isDepthTexture)ye=n.DEPTH_COMPONENT16,p.type===Kn?ye=n.DEPTH_COMPONENT32F:p.type===lr?ye=n.DEPTH_COMPONENT24:p.type===pa&&(ye=n.DEPTH24_STENCIL8),Ze&&(Xe?t.texStorage2D(n.TEXTURE_2D,1,ye,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,ye,ee.width,ee.height,0,de,Ce,null));else if(p.isDataTexture)if(Ne.length>0){Xe&&Ze&&t.texStorage2D(n.TEXTURE_2D,k,ye,Ne[0].width,Ne[0].height);for(let oe=0,se=Ne.length;oe<se;oe++)Me=Ne[oe],Xe?Le&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Me.width,Me.height,de,Ce,Me.data):t.texImage2D(n.TEXTURE_2D,oe,ye,Me.width,Me.height,0,de,Ce,Me.data);p.generateMipmaps=!1}else Xe?(Ze&&t.texStorage2D(n.TEXTURE_2D,k,ye,ee.width,ee.height),Le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee.width,ee.height,de,Ce,ee.data)):t.texImage2D(n.TEXTURE_2D,0,ye,ee.width,ee.height,0,de,Ce,ee.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){Xe&&Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,k,ye,Ne[0].width,Ne[0].height,ee.depth);for(let oe=0,se=Ne.length;oe<se;oe++)Me=Ne[oe],p.format!==Bn?de!==null?Xe?Le&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,Me.width,Me.height,ee.depth,de,Me.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,ye,Me.width,Me.height,ee.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?Le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,Me.width,Me.height,ee.depth,de,Ce,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,ye,Me.width,Me.height,ee.depth,0,de,Ce,Me.data)}else{Xe&&Ze&&t.texStorage2D(n.TEXTURE_2D,k,ye,Ne[0].width,Ne[0].height);for(let oe=0,se=Ne.length;oe<se;oe++)Me=Ne[oe],p.format!==Bn?de!==null?Xe?Le&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,Me.width,Me.height,de,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,ye,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?Le&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Me.width,Me.height,de,Ce,Me.data):t.texImage2D(n.TEXTURE_2D,oe,ye,Me.width,Me.height,0,de,Ce,Me.data)}else if(p.isDataArrayTexture)Xe?(Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,k,ye,ee.width,ee.height,ee.depth),Le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,de,Ce,ee.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,ee.width,ee.height,ee.depth,0,de,Ce,ee.data);else if(p.isData3DTexture)Xe?(Ze&&t.texStorage3D(n.TEXTURE_3D,k,ye,ee.width,ee.height,ee.depth),Le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,de,Ce,ee.data)):t.texImage3D(n.TEXTURE_3D,0,ye,ee.width,ee.height,ee.depth,0,de,Ce,ee.data);else if(p.isFramebufferTexture){if(Ze)if(Xe)t.texStorage2D(n.TEXTURE_2D,k,ye,ee.width,ee.height);else{let oe=ee.width,se=ee.height;for(let ve=0;ve<k;ve++)t.texImage2D(n.TEXTURE_2D,ve,ye,oe,se,0,de,Ce,null),oe>>=1,se>>=1}}else if(Ne.length>0){if(Xe&&Ze){const oe=re(Ne[0]);t.texStorage2D(n.TEXTURE_2D,k,ye,oe.width,oe.height)}for(let oe=0,se=Ne.length;oe<se;oe++)Me=Ne[oe],Xe?Le&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,de,Ce,Me):t.texImage2D(n.TEXTURE_2D,oe,ye,de,Ce,Me);p.generateMipmaps=!1}else if(Xe){if(Ze){const oe=re(ee);t.texStorage2D(n.TEXTURE_2D,k,ye,oe.width,oe.height)}Le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,Ce,ee)}else t.texImage2D(n.TEXTURE_2D,0,ye,de,Ce,ee);g(p)&&m(R),j.__version=H.version,p.onUpdate&&p.onUpdate(p)}w.__version=p.version}function Ke(w,p,M){if(p.image.length!==6)return;const R=ge(w,p),D=p.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+M);const H=i.get(D);if(D.version!==H.__version||R===!0){t.activeTexture(n.TEXTURE0+M);const j=st.getPrimaries(st.workingColorSpace),N=p.colorSpace===Di?null:st.getPrimaries(p.colorSpace),O=p.colorSpace===Di||j===N?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,p.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,p.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,O);const le=p.isCompressedTexture||p.image[0].isCompressedTexture,ee=p.image[0]&&p.image[0].isDataTexture,de=[];for(let se=0;se<6;se++)!le&&!ee?de[se]=v(p.image[se],!0,s.maxCubemapSize):de[se]=ee?p.image[se].image:p.image[se],de[se]=Z(p,de[se]);const Ce=de[0],ye=r.convert(p.format,p.colorSpace),Me=r.convert(p.type),Ne=b(p.internalFormat,ye,Me,p.colorSpace),Xe=p.isVideoTexture!==!0,Ze=H.__version===void 0||R===!0,Le=D.dataReady;let k=x(p,Ce);ue(n.TEXTURE_CUBE_MAP,p);let oe;if(le){Xe&&Ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,k,Ne,Ce.width,Ce.height);for(let se=0;se<6;se++){oe=de[se].mipmaps;for(let ve=0;ve<oe.length;ve++){const Se=oe[ve];p.format!==Bn?ye!==null?Xe?Le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve,0,0,Se.width,Se.height,ye,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve,Ne,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve,0,0,Se.width,Se.height,ye,Me,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve,Ne,Se.width,Se.height,0,ye,Me,Se.data)}}}else{if(oe=p.mipmaps,Xe&&Ze){oe.length>0&&k++;const se=re(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,k,Ne,se.width,se.height)}for(let se=0;se<6;se++)if(ee){Xe?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,de[se].width,de[se].height,ye,Me,de[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ne,de[se].width,de[se].height,0,ye,Me,de[se].data);for(let ve=0;ve<oe.length;ve++){const et=oe[ve].image[se].image;Xe?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve+1,0,0,et.width,et.height,ye,Me,et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve+1,Ne,et.width,et.height,0,ye,Me,et.data)}}else{Xe?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ye,Me,de[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ne,ye,Me,de[se]);for(let ve=0;ve<oe.length;ve++){const Se=oe[ve];Xe?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve+1,0,0,ye,Me,Se.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve+1,Ne,ye,Me,Se.image[se])}}}g(p)&&m(n.TEXTURE_CUBE_MAP),H.__version=D.version,p.onUpdate&&p.onUpdate(p)}w.__version=p.version}function Q(w,p,M,R,D,H){const j=r.convert(M.format,M.colorSpace),N=r.convert(M.type),O=b(M.internalFormat,j,N,M.colorSpace);if(!i.get(p).__hasExternalTextures){const ee=Math.max(1,p.width>>H),de=Math.max(1,p.height>>H);D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?t.texImage3D(D,H,O,ee,de,p.depth,0,j,N,null):t.texImage2D(D,H,O,ee,de,0,j,N,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),B(p)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,R,D,i.get(M).__webglTexture,0,A(p)):(D===n.TEXTURE_2D||D>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&D<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,R,D,i.get(M).__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(w,p,M){if(n.bindRenderbuffer(n.RENDERBUFFER,w),p.depthBuffer&&!p.stencilBuffer){let R=n.DEPTH_COMPONENT24;if(M||B(p)){const D=p.depthTexture;D&&D.isDepthTexture&&(D.type===Kn?R=n.DEPTH_COMPONENT32F:D.type===lr&&(R=n.DEPTH_COMPONENT24));const H=A(p);B(p)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,H,R,p.width,p.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,H,R,p.width,p.height)}else n.renderbufferStorage(n.RENDERBUFFER,R,p.width,p.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(p.depthBuffer&&p.stencilBuffer){const R=A(p);M&&B(p)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,R,n.DEPTH24_STENCIL8,p.width,p.height):B(p)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R,n.DEPTH24_STENCIL8,p.width,p.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,p.width,p.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{const R=p.textures;for(let D=0;D<R.length;D++){const H=R[D],j=r.convert(H.format,H.colorSpace),N=r.convert(H.type),O=b(H.internalFormat,j,N,H.colorSpace),le=A(p);M&&B(p)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,O,p.width,p.height):B(p)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,O,p.width,p.height):n.renderbufferStorage(n.RENDERBUFFER,O,p.width,p.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pe(w,p){if(p&&p.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(p.depthTexture).__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),F(p.depthTexture,0);const R=i.get(p.depthTexture).__webglTexture,D=A(p);if(p.depthTexture.format===Ks)B(p)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,R,0,D):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,R,0);else if(p.depthTexture.format===ca)B(p)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,R,0,D):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,R,0);else throw new Error("Unknown depthTexture format")}function fe(w){const p=i.get(w),M=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!p.__autoAllocateDepthBuffer){if(M)throw new Error("target.depthTexture not supported in Cube render targets");pe(p.__webglFramebuffer,w)}else if(M){p.__webglDepthbuffer=[];for(let R=0;R<6;R++)t.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer[R]),p.__webglDepthbuffer[R]=n.createRenderbuffer(),he(p.__webglDepthbuffer[R],w,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer=n.createRenderbuffer(),he(p.__webglDepthbuffer,w,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(w,p,M){const R=i.get(w);p!==void 0&&Q(R.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),M!==void 0&&fe(w)}function Fe(w){const p=w.texture,M=i.get(w),R=i.get(p);w.addEventListener("dispose",I);const D=w.textures,H=w.isWebGLCubeRenderTarget===!0,j=D.length>1;if(j||(R.__webglTexture===void 0&&(R.__webglTexture=n.createTexture()),R.__version=p.version,a.memory.textures++),H){M.__webglFramebuffer=[];for(let N=0;N<6;N++)if(p.mipmaps&&p.mipmaps.length>0){M.__webglFramebuffer[N]=[];for(let O=0;O<p.mipmaps.length;O++)M.__webglFramebuffer[N][O]=n.createFramebuffer()}else M.__webglFramebuffer[N]=n.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){M.__webglFramebuffer=[];for(let N=0;N<p.mipmaps.length;N++)M.__webglFramebuffer[N]=n.createFramebuffer()}else M.__webglFramebuffer=n.createFramebuffer();if(j)for(let N=0,O=D.length;N<O;N++){const le=i.get(D[N]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&B(w)===!1){M.__webglMultisampledFramebuffer=n.createFramebuffer(),M.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,M.__webglMultisampledFramebuffer);for(let N=0;N<D.length;N++){const O=D[N];M.__webglColorRenderbuffer[N]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,M.__webglColorRenderbuffer[N]);const le=r.convert(O.format,O.colorSpace),ee=r.convert(O.type),de=b(O.internalFormat,le,ee,O.colorSpace,w.isXRRenderTarget===!0),Ce=A(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,de,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+N,n.RENDERBUFFER,M.__webglColorRenderbuffer[N])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(M.__webglDepthRenderbuffer=n.createRenderbuffer(),he(M.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture),ue(n.TEXTURE_CUBE_MAP,p);for(let N=0;N<6;N++)if(p.mipmaps&&p.mipmaps.length>0)for(let O=0;O<p.mipmaps.length;O++)Q(M.__webglFramebuffer[N][O],w,p,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+N,O);else Q(M.__webglFramebuffer[N],w,p,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+N,0);g(p)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(j){for(let N=0,O=D.length;N<O;N++){const le=D[N],ee=i.get(le);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture),ue(n.TEXTURE_2D,le),Q(M.__webglFramebuffer,w,le,n.COLOR_ATTACHMENT0+N,n.TEXTURE_2D,0),g(le)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let N=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(N=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(N,R.__webglTexture),ue(N,p),p.mipmaps&&p.mipmaps.length>0)for(let O=0;O<p.mipmaps.length;O++)Q(M.__webglFramebuffer[O],w,p,n.COLOR_ATTACHMENT0,N,O);else Q(M.__webglFramebuffer,w,p,n.COLOR_ATTACHMENT0,N,0);g(p)&&m(N),t.unbindTexture()}w.depthBuffer&&fe(w)}function z(w){const p=w.textures;for(let M=0,R=p.length;M<R;M++){const D=p[M];if(g(D)){const H=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,j=i.get(D).__webglTexture;t.bindTexture(H,j),m(H),t.unbindTexture()}}}const Je=[],be=[];function P(w){if(w.samples>0){if(B(w)===!1){const p=w.textures,M=w.width,R=w.height;let D=n.COLOR_BUFFER_BIT;const H=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=i.get(w),N=p.length>1;if(N)for(let O=0;O<p.length;O++)t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+O,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,j.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+O,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,j.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,j.__webglFramebuffer);for(let O=0;O<p.length;O++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(D|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(D|=n.STENCIL_BUFFER_BIT)),N){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,j.__webglColorRenderbuffer[O]);const le=i.get(p[O]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,M,R,0,0,M,R,D,n.NEAREST),l===!0&&(Je.length=0,be.length=0,Je.push(n.COLOR_ATTACHMENT0+O),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Je.push(H),be.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,be)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),N)for(let O=0;O<p.length;O++){t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+O,n.RENDERBUFFER,j.__webglColorRenderbuffer[O]);const le=i.get(p[O]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,j.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+O,n.TEXTURE_2D,le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,j.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const p=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[p])}}}function A(w){return Math.min(s.maxSamples,w.samples)}function B(w){const p=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function Y(w){const p=a.render.frame;u.get(w)!==p&&(u.set(w,p),w.update())}function Z(w,p){const M=w.colorSpace,R=w.format,D=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||M!==Ot&&M!==Di&&(st.getTransfer(M)===ft?(R!==Bn||D!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",M)),p}function re(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=T,this.setTexture2D=F,this.setTexture2DArray=ne,this.setTexture3D=te,this.setTextureCube=ae,this.rebindTextures=De,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=B}function fA(n,e){function t(i,s=Di){let r;const a=st.getTransfer(s);if(i===Gi)return n.UNSIGNED_BYTE;if(i===xm)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Mm)return n.UNSIGNED_SHORT_5_5_5_1;if(i===NM)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===IM)return n.BYTE;if(i===PM)return n.SHORT;if(i===_m)return n.UNSIGNED_SHORT;if(i===vm)return n.INT;if(i===lr)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===Nn)return n.HALF_FLOAT;if(i===DM)return n.ALPHA;if(i===UM)return n.RGB;if(i===Bn)return n.RGBA;if(i===OM)return n.LUMINANCE;if(i===FM)return n.LUMINANCE_ALPHA;if(i===Ks)return n.DEPTH_COMPONENT;if(i===ca)return n.DEPTH_STENCIL;if(i===Sm)return n.RED;if(i===ym)return n.RED_INTEGER;if(i===BM)return n.RG;if(i===Em)return n.RG_INTEGER;if(i===Tm)return n.RGBA_INTEGER;if(i===ul||i===hl||i===fl||i===dl)if(a===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ul)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===dl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ul)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===dl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jh||i===$h||i===Yh||i===qh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===jh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$h)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kh||i===Zh||i===Jh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Kh||i===Zh)return a===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Jh)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Qh||i===ef||i===tf||i===nf||i===sf||i===rf||i===af||i===of||i===lf||i===cf||i===uf||i===hf||i===ff||i===df)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Qh)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ef)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===tf)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nf)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sf)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rf)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===af)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===of)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lf)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cf)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uf)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hf)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ff)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===df)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pl||i===pf||i===mf)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===pl)return a===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kM||i===gf||i===_f||i===vf)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===pl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===gf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_f)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===pa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class dA extends yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Oi extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pA={type:"move"};class Vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pA)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Oi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const mA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _A{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Lt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,s=new nn({vertexShader:mA,fragmentShader:gA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Nt(new _a(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class vA extends _s{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const v=new _A,g=t.getContextAttributes();let m=null,b=null;const x=[],S=[],I=new Ee;let y=null;const C=new yt;C.layers.enable(1),C.viewport=new ct;const U=new yt;U.layers.enable(2),U.viewport=new ct;const E=[C,U],T=new dA;T.layers.enable(1),T.layers.enable(2);let W=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=x[Q];return he===void 0&&(he=new Vl,x[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=x[Q];return he===void 0&&(he=new Vl,x[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=x[Q];return he===void 0&&(he=new Vl,x[Q]=he),he.getHandSpace()};function F(Q){const he=S.indexOf(Q.inputSource);if(he===-1)return;const pe=x[he];pe!==void 0&&(pe.update(Q.inputSource,Q.frame,c||a),pe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ne(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",ne),s.removeEventListener("inputsourceschange",te);for(let Q=0;Q<x.length;Q++){const he=S[Q];he!==null&&(S[Q]=null,x[Q].disconnect(he))}W=null,$=null,v.reset(),e.setRenderTarget(m),d=null,f=null,h=null,s=null,b=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",ne),s.addEventListener("inputsourceschange",te),g.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){const he={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new en(d.framebufferWidth,d.framebufferHeight,{format:Bn,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let he=null,pe=null,fe=null;g.depth&&(fe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=g.stencil?ca:Ks,pe=g.stencil?pa:lr);const De={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(De),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new en(f.textureWidth,f.textureHeight,{format:Bn,type:Gi,depthTexture:new Vm(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ke.setContext(s),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function te(Q){for(let he=0;he<Q.removed.length;he++){const pe=Q.removed[he],fe=S.indexOf(pe);fe>=0&&(S[fe]=null,x[fe].disconnect(pe))}for(let he=0;he<Q.added.length;he++){const pe=Q.added[he];let fe=S.indexOf(pe);if(fe===-1){for(let Fe=0;Fe<x.length;Fe++)if(Fe>=S.length){S.push(pe),fe=Fe;break}else if(S[Fe]===null){S[Fe]=pe,fe=Fe;break}if(fe===-1)break}const De=x[fe];De&&De.connect(pe)}}const ae=new V,ie=new V;function X(Q,he,pe){ae.setFromMatrixPosition(he.matrixWorld),ie.setFromMatrixPosition(pe.matrixWorld);const fe=ae.distanceTo(ie),De=he.projectionMatrix.elements,Fe=pe.projectionMatrix.elements,z=De[14]/(De[10]-1),Je=De[14]/(De[10]+1),be=(De[9]+1)/De[5],P=(De[9]-1)/De[5],A=(De[8]-1)/De[0],B=(Fe[8]+1)/Fe[0],Y=z*A,Z=z*B,re=fe/(-A+B),w=re*-A;he.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(w),Q.translateZ(re),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const p=z+re,M=Je+re,R=Y-w,D=Z+(fe-w),H=be*Je/M*p,j=P*Je/M*p;Q.projectionMatrix.makePerspective(R,D,H,j,p,M),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function ce(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;v.texture!==null&&(Q.near=v.depthNear,Q.far=v.depthFar),T.near=U.near=C.near=Q.near,T.far=U.far=C.far=Q.far,(W!==T.near||$!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),W=T.near,$=T.far,C.near=W,C.far=$,U.near=W,U.far=$,C.updateProjectionMatrix(),U.updateProjectionMatrix(),Q.updateProjectionMatrix());const he=Q.parent,pe=T.cameras;ce(T,he);for(let fe=0;fe<pe.length;fe++)ce(pe[fe],he);pe.length===2?X(T,C,U):T.projectionMatrix.copy(C.projectionMatrix),ue(Q,T,he)};function ue(Q,he,pe){pe===null?Q.matrix.copy(he.matrixWorld):(Q.matrix.copy(pe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(he.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ur*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null};let ge=null;function Re(Q,he){if(u=he.getViewerPose(c||a),_=he,u!==null){const pe=u.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let fe=!1;pe.length!==T.cameras.length&&(T.cameras.length=0,fe=!0);for(let Fe=0;Fe<pe.length;Fe++){const z=pe[Fe];let Je=null;if(d!==null)Je=d.getViewport(z);else{const P=h.getViewSubImage(f,z);Je=P.viewport,Fe===0&&(e.setRenderTargetTextures(b,P.colorTexture,f.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(b))}let be=E[Fe];be===void 0&&(be=new yt,be.layers.enable(Fe),be.viewport=new ct,E[Fe]=be),be.matrix.fromArray(z.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(z.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Je.x,Je.y,Je.width,Je.height),Fe===0&&(T.matrix.copy(be.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),fe===!0&&T.cameras.push(be)}const De=s.enabledFeatures;if(De&&De.includes("depth-sensing")){const Fe=h.getDepthInformation(pe[0]);Fe&&Fe.isValid&&Fe.texture&&v.init(e,Fe,s.renderState)}}for(let pe=0;pe<x.length;pe++){const fe=S[pe],De=x[pe];fe!==null&&De!==void 0&&De.update(fe,he,c||a)}v.render(e,T),ge&&ge(Q,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),_=null}const Ke=new km;Ke.setAnimationLoop(Re),this.setAnimationLoop=function(Q){ge=Q},this.dispose=function(){}}}const rs=new wn,xA=new Ve;function MA(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Om(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,b,x,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,S)):m.isMeshMatcapMaterial?(r(g,m),_(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,b,x):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===hn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===hn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const b=e.get(m),x=b.envMap,S=b.envMapRotation;if(x&&(g.envMap.value=x,rs.copy(S),rs.x*=-1,rs.y*=-1,rs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),g.envMapRotation.value.setFromMatrix4(xA.makeRotationFromEuler(rs)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;const I=n._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*I,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,b,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=x*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,b){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===hn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const b=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function SA(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,x){const S=x.program;i.uniformBlockBinding(b,S)}function c(b,x){let S=s[b.id];S===void 0&&(_(b),S=u(b),s[b.id]=S,b.addEventListener("dispose",g));const I=x.program;i.updateUBOMapping(b,I);const y=e.render.frame;r[b.id]!==y&&(f(b),r[b.id]=y)}function u(b){const x=h();b.__bindingPointIndex=x;const S=n.createBuffer(),I=b.__size,y=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,I,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const x=s[b.id],S=b.uniforms,I=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let y=0,C=S.length;y<C;y++){const U=Array.isArray(S[y])?S[y]:[S[y]];for(let E=0,T=U.length;E<T;E++){const W=U[E];if(d(W,y,E,I)===!0){const $=W.__offset,F=Array.isArray(W.value)?W.value:[W.value];let ne=0;for(let te=0;te<F.length;te++){const ae=F[te],ie=v(ae);typeof ae=="number"||typeof ae=="boolean"?(W.__data[0]=ae,n.bufferSubData(n.UNIFORM_BUFFER,$+ne,W.__data)):ae.isMatrix3?(W.__data[0]=ae.elements[0],W.__data[1]=ae.elements[1],W.__data[2]=ae.elements[2],W.__data[3]=0,W.__data[4]=ae.elements[3],W.__data[5]=ae.elements[4],W.__data[6]=ae.elements[5],W.__data[7]=0,W.__data[8]=ae.elements[6],W.__data[9]=ae.elements[7],W.__data[10]=ae.elements[8],W.__data[11]=0):(ae.toArray(W.__data,ne),ne+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,W.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,x,S,I){const y=b.value,C=x+"_"+S;if(I[C]===void 0)return typeof y=="number"||typeof y=="boolean"?I[C]=y:I[C]=y.clone(),!0;{const U=I[C];if(typeof y=="number"||typeof y=="boolean"){if(U!==y)return I[C]=y,!0}else if(U.equals(y)===!1)return U.copy(y),!0}return!1}function _(b){const x=b.uniforms;let S=0;const I=16;for(let C=0,U=x.length;C<U;C++){const E=Array.isArray(x[C])?x[C]:[x[C]];for(let T=0,W=E.length;T<W;T++){const $=E[T],F=Array.isArray($.value)?$.value:[$.value];for(let ne=0,te=F.length;ne<te;ne++){const ae=F[ne],ie=v(ae),X=S%I;X!==0&&I-X<ie.boundary&&(S+=I-X),$.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=S,S+=ie.storage}}}const y=S%I;return y>0&&(S+=I-y),b.__size=S,b.__cache={},this}function v(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function g(b){const x=b.target;x.removeEventListener("dispose",g);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(const b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}class vr{constructor(e={}){const{canvas:t=_S(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const d=new Uint32Array(4),_=new Int32Array(4);let v=null,g=null;const m=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this._useLegacyLights=!1,this.toneMapping=Vi,this.toneMappingExposure=1;const x=this;let S=!1,I=0,y=0,C=null,U=-1,E=null;const T=new ct,W=new ct;let $=null;const F=new Ae(0);let ne=0,te=t.width,ae=t.height,ie=1,X=null,ce=null;const ue=new ct(0,0,te,ae),ge=new ct(0,0,te,ae);let Re=!1;const Ke=new fu;let Q=!1,he=!1;const pe=new Ve,fe=new V,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return C===null?ie:1}let z=i;function Je(L,G){return t.getContext(L,G)}try{const L={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ou}`),t.addEventListener("webglcontextlost",k,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",se,!1),z===null){const G="webgl2";if(z=Je(G,L),z===null)throw Je(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let be,P,A,B,Y,Z,re,w,p,M,R,D,H,j,N,O,le,ee,de,Ce,ye,Me,Ne,Xe;function Ze(){be=new IT(z),be.init(),Me=new fA(z,be),P=new bT(z,be,e,Me),A=new uA(z),B=new DT(z),Y=new Zb,Z=new hA(z,be,A,Y,P,Me,B),re=new wT(x),w=new LT(x),p=new HS(z),Ne=new ET(z,p),M=new PT(z,p,B,Ne),R=new OT(z,M,p,B),de=new UT(z,P,Z),O=new AT(Y),D=new Kb(x,re,w,be,P,Ne,O),H=new MA(x,Y),j=new Qb,N=new rA(be),ee=new yT(x,re,w,A,R,f,l),le=new cA(x,R,P),Xe=new SA(z,B,P,A),Ce=new TT(z,be,B),ye=new NT(z,be,B),B.programs=D.programs,x.capabilities=P,x.extensions=be,x.properties=Y,x.renderLists=j,x.shadowMap=le,x.state=A,x.info=B}Ze();const Le=new vA(x,z);this.xr=Le,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const L=be.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=be.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(L){L!==void 0&&(ie=L,this.setSize(te,ae,!1))},this.getSize=function(L){return L.set(te,ae)},this.setSize=function(L,G,J=!0){if(Le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=L,ae=G,t.width=Math.floor(L*ie),t.height=Math.floor(G*ie),J===!0&&(t.style.width=L+"px",t.style.height=G+"px"),this.setViewport(0,0,L,G)},this.getDrawingBufferSize=function(L){return L.set(te*ie,ae*ie).floor()},this.setDrawingBufferSize=function(L,G,J){te=L,ae=G,ie=J,t.width=Math.floor(L*J),t.height=Math.floor(G*J),this.setViewport(0,0,L,G)},this.getCurrentViewport=function(L){return L.copy(T)},this.getViewport=function(L){return L.copy(ue)},this.setViewport=function(L,G,J,q){L.isVector4?ue.set(L.x,L.y,L.z,L.w):ue.set(L,G,J,q),A.viewport(T.copy(ue).multiplyScalar(ie).round())},this.getScissor=function(L){return L.copy(ge)},this.setScissor=function(L,G,J,q){L.isVector4?ge.set(L.x,L.y,L.z,L.w):ge.set(L,G,J,q),A.scissor(W.copy(ge).multiplyScalar(ie).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(L){A.setScissorTest(Re=L)},this.setOpaqueSort=function(L){X=L},this.setTransparentSort=function(L){ce=L},this.getClearColor=function(L){return L.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(L=!0,G=!0,J=!0){let q=0;if(L){let K=!1;if(C!==null){const xe=C.texture.format;K=xe===Tm||xe===Em||xe===ym}if(K){const xe=C.texture.type,Te=xe===Gi||xe===lr||xe===_m||xe===pa||xe===xm||xe===Mm,we=ee.getClearColor(),Pe=ee.getClearAlpha(),Be=we.r,He=we.g,je=we.b;Te?(d[0]=Be,d[1]=He,d[2]=je,d[3]=Pe,z.clearBufferuiv(z.COLOR,0,d)):(_[0]=Be,_[1]=He,_[2]=je,_[3]=Pe,z.clearBufferiv(z.COLOR,0,_))}else q|=z.COLOR_BUFFER_BIT}G&&(q|=z.DEPTH_BUFFER_BIT),J&&(q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",k,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",se,!1),j.dispose(),N.dispose(),Y.dispose(),re.dispose(),w.dispose(),R.dispose(),Ne.dispose(),Xe.dispose(),D.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",ot),Le.removeEventListener("sessionend",Gn),Yt.stop()};function k(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const L=B.autoReset,G=le.enabled,J=le.autoUpdate,q=le.needsUpdate,K=le.type;Ze(),B.autoReset=L,le.enabled=G,le.autoUpdate=J,le.needsUpdate=q,le.type=K}function se(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function ve(L){const G=L.target;G.removeEventListener("dispose",ve),Se(G)}function Se(L){et(L),Y.remove(L)}function et(L){const G=Y.get(L).programs;G!==void 0&&(G.forEach(function(J){D.releaseProgram(J)}),L.isShaderMaterial&&D.releaseShaderCache(L))}this.renderBufferDirect=function(L,G,J,q,K,xe){G===null&&(G=De);const Te=K.isMesh&&K.matrixWorld.determinant()<0,we=og(L,G,J,q,K);A.setMaterial(q,Te);let Pe=J.index,Be=1;if(q.wireframe===!0){if(Pe=M.getWireframeAttribute(J),Pe===void 0)return;Be=2}const He=J.drawRange,je=J.attributes.position;let xt=He.start*Be,Bt=(He.start+He.count)*Be;xe!==null&&(xt=Math.max(xt,xe.start*Be),Bt=Math.min(Bt,(xe.start+xe.count)*Be)),Pe!==null?(xt=Math.max(xt,0),Bt=Math.min(Bt,Pe.count)):je!=null&&(xt=Math.max(xt,0),Bt=Math.min(Bt,je.count));const dn=Bt-xt;if(dn<0||dn===1/0)return;Ne.setup(K,q,we,J,Pe);let ni,nt=Ce;if(Pe!==null&&(ni=p.get(Pe),nt=ye,nt.setIndex(ni)),K.isMesh)q.wireframe===!0?(A.setLineWidth(q.wireframeLinewidth*Fe()),nt.setMode(z.LINES)):nt.setMode(z.TRIANGLES);else if(K.isLine){let ke=q.linewidth;ke===void 0&&(ke=1),A.setLineWidth(ke*Fe()),K.isLineSegments?nt.setMode(z.LINES):K.isLineLoop?nt.setMode(z.LINE_LOOP):nt.setMode(z.LINE_STRIP)}else K.isPoints?nt.setMode(z.POINTS):K.isSprite&&nt.setMode(z.TRIANGLES);if(K.isBatchedMesh)K._multiDrawInstances!==null?nt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances):nt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)nt.renderInstances(xt,dn,K.count);else if(J.isInstancedBufferGeometry){const ke=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ar=Math.min(J.instanceCount,ke);nt.renderInstances(xt,dn,Ar)}else nt.render(xt,dn)};function ht(L,G,J){L.transparent===!0&&L.side===bn&&L.forceSinglePass===!1?(L.side=hn,L.needsUpdate=!0,ya(L,G,J),L.side=gi,L.needsUpdate=!0,ya(L,G,J),L.side=bn):ya(L,G,J)}this.compile=function(L,G,J=null){J===null&&(J=L),g=N.get(J),g.init(G),b.push(g),J.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),L!==J&&L.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),g.setupLights(x._useLegacyLights);const q=new Set;return L.traverse(function(K){const xe=K.material;if(xe)if(Array.isArray(xe))for(let Te=0;Te<xe.length;Te++){const we=xe[Te];ht(we,J,K),q.add(we)}else ht(xe,J,K),q.add(xe)}),b.pop(),g=null,q},this.compileAsync=function(L,G,J=null){const q=this.compile(L,G,J);return new Promise(K=>{function xe(){if(q.forEach(function(Te){Y.get(Te).currentProgram.isReady()&&q.delete(Te)}),q.size===0){K(L);return}setTimeout(xe,10)}be.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let vt=null;function Ft(L){vt&&vt(L)}function ot(){Yt.stop()}function Gn(){Yt.start()}const Yt=new km;Yt.setAnimationLoop(Ft),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(L){vt=L,Le.setAnimationLoop(L),L===null?Yt.stop():Yt.start()},Le.addEventListener("sessionstart",ot),Le.addEventListener("sessionend",Gn),this.render=function(L,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(G),G=Le.getCamera()),L.isScene===!0&&L.onBeforeRender(x,L,G,C),g=N.get(L,b.length),g.init(G),b.push(g),pe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ke.setFromProjectionMatrix(pe),he=this.localClippingEnabled,Q=O.init(this.clippingPlanes,he),v=j.get(L,m.length),v.init(),m.push(v),Eu(L,G,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(X,ce);const J=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1;J&&ee.addToRenderList(v,L),this.info.render.frame++,Q===!0&&O.beginShadows();const q=g.state.shadowsArray;le.render(q,L,G),Q===!0&&O.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=v.opaque,xe=v.transmissive;if(g.setupLights(x._useLegacyLights),G.isArrayCamera){const Te=G.cameras;if(xe.length>0)for(let we=0,Pe=Te.length;we<Pe;we++){const Be=Te[we];bu(K,xe,L,Be)}J&&ee.render(L);for(let we=0,Pe=Te.length;we<Pe;we++){const Be=Te[we];Tu(v,L,Be,Be.viewport)}}else xe.length>0&&bu(K,xe,L,G),J&&ee.render(L),Tu(v,L,G);C!==null&&(Z.updateMultisampleRenderTarget(C),Z.updateRenderTargetMipmap(C)),L.isScene===!0&&L.onAfterRender(x,L,G),Ne.resetDefaultState(),U=-1,E=null,b.pop(),b.length>0?(g=b[b.length-1],Q===!0&&O.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Eu(L,G,J,q){if(L.visible===!1)return;if(L.layers.test(G.layers)){if(L.isGroup)J=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(G);else if(L.isLight)g.pushLight(L),L.castShadow&&g.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Ke.intersectsSprite(L)){q&&fe.setFromMatrixPosition(L.matrixWorld).applyMatrix4(pe);const Te=R.update(L),we=L.material;we.visible&&v.push(L,Te,we,J,fe.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Ke.intersectsObject(L))){const Te=R.update(L),we=L.material;if(q&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),fe.copy(L.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),fe.copy(Te.boundingSphere.center)),fe.applyMatrix4(L.matrixWorld).applyMatrix4(pe)),Array.isArray(we)){const Pe=Te.groups;for(let Be=0,He=Pe.length;Be<He;Be++){const je=Pe[Be],xt=we[je.materialIndex];xt&&xt.visible&&v.push(L,Te,xt,J,fe.z,je)}}else we.visible&&v.push(L,Te,we,J,fe.z,null)}}const xe=L.children;for(let Te=0,we=xe.length;Te<we;Te++)Eu(xe[Te],G,J,q)}function Tu(L,G,J,q){const K=L.opaque,xe=L.transmissive,Te=L.transparent;g.setupLightsView(J),Q===!0&&O.setGlobalState(x.clippingPlanes,J),q&&A.viewport(T.copy(q)),K.length>0&&Sa(K,G,J),xe.length>0&&Sa(xe,G,J),Te.length>0&&Sa(Te,G,J),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function bu(L,G,J,q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[q.id]===void 0&&(g.state.transmissionRenderTarget[q.id]=new en(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?Nn:Gi,minFilter:di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const xe=g.state.transmissionRenderTarget[q.id],Te=q.viewport||T;xe.setSize(Te.z,Te.w);const we=x.getRenderTarget();x.setRenderTarget(xe),x.getClearColor(F),ne=x.getClearAlpha(),ne<1&&x.setClearColor(16777215,.5),x.clear();const Pe=x.toneMapping;x.toneMapping=Vi;const Be=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),g.setupLightsView(q),Q===!0&&O.setGlobalState(x.clippingPlanes,q),Sa(L,J,q),Z.updateMultisampleRenderTarget(xe),Z.updateRenderTargetMipmap(xe),be.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let je=0,xt=G.length;je<xt;je++){const Bt=G[je],dn=Bt.object,ni=Bt.geometry,nt=Bt.material,ke=Bt.group;if(nt.side===bn&&dn.layers.test(q.layers)){const Ar=nt.side;nt.side=hn,nt.needsUpdate=!0,Au(dn,J,q,ni,nt,ke),nt.side=Ar,nt.needsUpdate=!0,He=!0}}He===!0&&(Z.updateMultisampleRenderTarget(xe),Z.updateRenderTargetMipmap(xe))}x.setRenderTarget(we),x.setClearColor(F,ne),Be!==void 0&&(q.viewport=Be),x.toneMapping=Pe}function Sa(L,G,J){const q=G.isScene===!0?G.overrideMaterial:null;for(let K=0,xe=L.length;K<xe;K++){const Te=L[K],we=Te.object,Pe=Te.geometry,Be=q===null?Te.material:q,He=Te.group;we.layers.test(J.layers)&&Au(we,G,J,Pe,Be,He)}}function Au(L,G,J,q,K,xe){L.onBeforeRender(x,G,J,q,K,xe),L.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),K.onBeforeRender(x,G,J,q,L,xe),K.transparent===!0&&K.side===bn&&K.forceSinglePass===!1?(K.side=hn,K.needsUpdate=!0,x.renderBufferDirect(J,G,q,K,L,xe),K.side=gi,K.needsUpdate=!0,x.renderBufferDirect(J,G,q,K,L,xe),K.side=bn):x.renderBufferDirect(J,G,q,K,L,xe),L.onAfterRender(x,G,J,q,K,xe)}function ya(L,G,J){G.isScene!==!0&&(G=De);const q=Y.get(L),K=g.state.lights,xe=g.state.shadowsArray,Te=K.state.version,we=D.getParameters(L,K.state,xe,G,J),Pe=D.getProgramCacheKey(we);let Be=q.programs;q.environment=L.isMeshStandardMaterial?G.environment:null,q.fog=G.fog,q.envMap=(L.isMeshStandardMaterial?w:re).get(L.envMap||q.environment),q.envMapRotation=q.environment!==null&&L.envMap===null?G.environmentRotation:L.envMapRotation,Be===void 0&&(L.addEventListener("dispose",ve),Be=new Map,q.programs=Be);let He=Be.get(Pe);if(He!==void 0){if(q.currentProgram===He&&q.lightsStateVersion===Te)return Ru(L,we),He}else we.uniforms=D.getUniforms(L),L.onBuild(J,we,x),L.onBeforeCompile(we,x),He=D.acquireProgram(we,Pe),Be.set(Pe,He),q.uniforms=we.uniforms;const je=q.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(je.clippingPlanes=O.uniform),Ru(L,we),q.needsLights=cg(L),q.lightsStateVersion=Te,q.needsLights&&(je.ambientLightColor.value=K.state.ambient,je.lightProbe.value=K.state.probe,je.directionalLights.value=K.state.directional,je.directionalLightShadows.value=K.state.directionalShadow,je.spotLights.value=K.state.spot,je.spotLightShadows.value=K.state.spotShadow,je.rectAreaLights.value=K.state.rectArea,je.ltc_1.value=K.state.rectAreaLTC1,je.ltc_2.value=K.state.rectAreaLTC2,je.pointLights.value=K.state.point,je.pointLightShadows.value=K.state.pointShadow,je.hemisphereLights.value=K.state.hemi,je.directionalShadowMap.value=K.state.directionalShadowMap,je.directionalShadowMatrix.value=K.state.directionalShadowMatrix,je.spotShadowMap.value=K.state.spotShadowMap,je.spotLightMatrix.value=K.state.spotLightMatrix,je.spotLightMap.value=K.state.spotLightMap,je.pointShadowMap.value=K.state.pointShadowMap,je.pointShadowMatrix.value=K.state.pointShadowMatrix),q.currentProgram=He,q.uniformsList=null,He}function wu(L){if(L.uniformsList===null){const G=L.currentProgram.getUniforms();L.uniformsList=ho.seqWithValue(G.seq,L.uniforms)}return L.uniformsList}function Ru(L,G){const J=Y.get(L);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.instancingMorph=G.instancingMorph,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function og(L,G,J,q,K){G.isScene!==!0&&(G=De),Z.resetTextureUnits();const xe=G.fog,Te=q.isMeshStandardMaterial?G.environment:null,we=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ot,Pe=(q.isMeshStandardMaterial?w:re).get(q.envMap||Te),Be=q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,He=!!J.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),je=!!J.morphAttributes.position,xt=!!J.morphAttributes.normal,Bt=!!J.morphAttributes.color;let dn=Vi;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(dn=x.toneMapping);const ni=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,nt=ni!==void 0?ni.length:0,ke=Y.get(q),Ar=g.state.lights;if(Q===!0&&(he===!0||L!==E)){const Mn=L===E&&q.id===U;O.setState(q,L,Mn)}let pt=!1;q.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Ar.state.version||ke.outputColorSpace!==we||K.isBatchedMesh&&ke.batching===!1||!K.isBatchedMesh&&ke.batching===!0||K.isInstancedMesh&&ke.instancing===!1||!K.isInstancedMesh&&ke.instancing===!0||K.isSkinnedMesh&&ke.skinning===!1||!K.isSkinnedMesh&&ke.skinning===!0||K.isInstancedMesh&&ke.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ke.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ke.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ke.instancingMorph===!1&&K.morphTexture!==null||ke.envMap!==Pe||q.fog===!0&&ke.fog!==xe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==O.numPlanes||ke.numIntersection!==O.numIntersection)||ke.vertexAlphas!==Be||ke.vertexTangents!==He||ke.morphTargets!==je||ke.morphNormals!==xt||ke.morphColors!==Bt||ke.toneMapping!==dn||ke.morphTargetsCount!==nt)&&(pt=!0):(pt=!0,ke.__version=q.version);let qi=ke.currentProgram;pt===!0&&(qi=ya(q,G,K));let Cu=!1,wr=!1,Zo=!1;const kt=qi.getUniforms(),xi=ke.uniforms;if(A.useProgram(qi.program)&&(Cu=!0,wr=!0,Zo=!0),q.id!==U&&(U=q.id,wr=!0),Cu||E!==L){kt.setValue(z,"projectionMatrix",L.projectionMatrix),kt.setValue(z,"viewMatrix",L.matrixWorldInverse);const Mn=kt.map.cameraPosition;Mn!==void 0&&Mn.setValue(z,fe.setFromMatrixPosition(L.matrixWorld)),P.logarithmicDepthBuffer&&kt.setValue(z,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&kt.setValue(z,"isOrthographic",L.isOrthographicCamera===!0),E!==L&&(E=L,wr=!0,Zo=!0)}if(K.isSkinnedMesh){kt.setOptional(z,K,"bindMatrix"),kt.setOptional(z,K,"bindMatrixInverse");const Mn=K.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),kt.setValue(z,"boneTexture",Mn.boneTexture,Z))}K.isBatchedMesh&&(kt.setOptional(z,K,"batchingTexture"),kt.setValue(z,"batchingTexture",K._matricesTexture,Z));const Jo=J.morphAttributes;if((Jo.position!==void 0||Jo.normal!==void 0||Jo.color!==void 0)&&de.update(K,J,qi),(wr||ke.receiveShadow!==K.receiveShadow)&&(ke.receiveShadow=K.receiveShadow,kt.setValue(z,"receiveShadow",K.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(xi.envMap.value=Pe,xi.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&G.environment!==null&&(xi.envMapIntensity.value=G.environmentIntensity),wr&&(kt.setValue(z,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&lg(xi,Zo),xe&&q.fog===!0&&H.refreshFogUniforms(xi,xe),H.refreshMaterialUniforms(xi,q,ie,ae,g.state.transmissionRenderTarget[L.id]),ho.upload(z,wu(ke),xi,Z)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ho.upload(z,wu(ke),xi,Z),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&kt.setValue(z,"center",K.center),kt.setValue(z,"modelViewMatrix",K.modelViewMatrix),kt.setValue(z,"normalMatrix",K.normalMatrix),kt.setValue(z,"modelMatrix",K.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Mn=q.uniformsGroups;for(let Qo=0,ug=Mn.length;Qo<ug;Qo++){const Lu=Mn[Qo];Xe.update(Lu,qi),Xe.bind(Lu,qi)}}return qi}function lg(L,G){L.ambientLightColor.needsUpdate=G,L.lightProbe.needsUpdate=G,L.directionalLights.needsUpdate=G,L.directionalLightShadows.needsUpdate=G,L.pointLights.needsUpdate=G,L.pointLightShadows.needsUpdate=G,L.spotLights.needsUpdate=G,L.spotLightShadows.needsUpdate=G,L.rectAreaLights.needsUpdate=G,L.hemisphereLights.needsUpdate=G}function cg(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(L,G,J){Y.get(L.texture).__webglTexture=G,Y.get(L.depthTexture).__webglTexture=J;const q=Y.get(L);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=J===void 0,q.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,G){const J=Y.get(L);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(L,G=0,J=0){C=L,I=G,y=J;let q=!0,K=null,xe=!1,Te=!1;if(L){const Pe=Y.get(L);Pe.__useDefaultFramebuffer!==void 0?(A.bindFramebuffer(z.FRAMEBUFFER,null),q=!1):Pe.__webglFramebuffer===void 0?Z.setupRenderTarget(L):Pe.__hasExternalTextures&&Z.rebindTextures(L,Y.get(L.texture).__webglTexture,Y.get(L.depthTexture).__webglTexture);const Be=L.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Te=!0);const He=Y.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(He[G])?K=He[G][J]:K=He[G],xe=!0):L.samples>0&&Z.useMultisampledRTT(L)===!1?K=Y.get(L).__webglMultisampledFramebuffer:Array.isArray(He)?K=He[J]:K=He,T.copy(L.viewport),W.copy(L.scissor),$=L.scissorTest}else T.copy(ue).multiplyScalar(ie).floor(),W.copy(ge).multiplyScalar(ie).floor(),$=Re;if(A.bindFramebuffer(z.FRAMEBUFFER,K)&&q&&A.drawBuffers(L,K),A.viewport(T),A.scissor(W),A.setScissorTest($),xe){const Pe=Y.get(L.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+G,Pe.__webglTexture,J)}else if(Te){const Pe=Y.get(L.texture),Be=G||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Pe.__webglTexture,J||0,Be)}U=-1},this.readRenderTargetPixels=function(L,G,J,q,K,xe,Te){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Y.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Te!==void 0&&(we=we[Te]),we){A.bindFramebuffer(z.FRAMEBUFFER,we);try{const Pe=L.texture,Be=Pe.format,He=Pe.type;if(!P.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=L.width-q&&J>=0&&J<=L.height-K&&z.readPixels(G,J,q,K,Me.convert(Be),Me.convert(He),xe)}finally{const Pe=C!==null?Y.get(C).__webglFramebuffer:null;A.bindFramebuffer(z.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(L,G,J=0){const q=Math.pow(2,-J),K=Math.floor(G.image.width*q),xe=Math.floor(G.image.height*q);Z.setTexture2D(G,0),z.copyTexSubImage2D(z.TEXTURE_2D,J,0,0,L.x,L.y,K,xe),A.unbindTexture()},this.copyTextureToTexture=function(L,G,J,q=0){const K=G.image.width,xe=G.image.height,Te=Me.convert(J.format),we=Me.convert(J.type);Z.setTexture2D(J,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,J.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,J.unpackAlignment),G.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,q,L.x,L.y,K,xe,Te,we,G.image.data):G.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,q,L.x,L.y,G.mipmaps[0].width,G.mipmaps[0].height,Te,G.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,q,L.x,L.y,Te,we,G.image),q===0&&J.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),A.unbindTexture()},this.copyTextureToTexture3D=function(L,G,J,q,K=0){const xe=L.max.x-L.min.x,Te=L.max.y-L.min.y,we=L.max.z-L.min.z,Pe=Me.convert(q.format),Be=Me.convert(q.type);let He;if(q.isData3DTexture)Z.setTexture3D(q,0),He=z.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)Z.setTexture2DArray(q,0),He=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);const je=z.getParameter(z.UNPACK_ROW_LENGTH),xt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Bt=z.getParameter(z.UNPACK_SKIP_PIXELS),dn=z.getParameter(z.UNPACK_SKIP_ROWS),ni=z.getParameter(z.UNPACK_SKIP_IMAGES),nt=J.isCompressedTexture?J.mipmaps[K]:J.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,nt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,nt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,L.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,L.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,L.min.z),J.isDataTexture||J.isData3DTexture?z.texSubImage3D(He,K,G.x,G.y,G.z,xe,Te,we,Pe,Be,nt.data):q.isCompressedArrayTexture?z.compressedTexSubImage3D(He,K,G.x,G.y,G.z,xe,Te,we,Pe,nt.data):z.texSubImage3D(He,K,G.x,G.y,G.z,xe,Te,we,Pe,Be,nt),z.pixelStorei(z.UNPACK_ROW_LENGTH,je),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,xt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Bt),z.pixelStorei(z.UNPACK_SKIP_ROWS,dn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ni),K===0&&q.generateMipmaps&&z.generateMipmap(He),A.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?Z.setTextureCube(L,0):L.isData3DTexture?Z.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Z.setTexture2DArray(L,0):Z.setTexture2D(L,0),A.unbindTexture()},this.resetState=function(){I=0,y=0,C=null,A.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===cu?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===jo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class xr extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class yA{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Cm("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qt=new V;class pu{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new on(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const cd=new V,ud=new ct,hd=new ct,EA=new V,fd=new Ve,Za=new V,Hl=new Qn,dd=new Ve,zl=new $o;class TA extends Nt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Xh,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Za),this.boundingBox.expandByPoint(Za)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Qn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Za),this.boundingSphere.expandByPoint(Za)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hl.copy(this.boundingSphere),Hl.applyMatrix4(s),e.ray.intersectsSphere(Hl)!==!1&&(dd.copy(s).invert(),zl.copy(e.ray).applyMatrix4(dd),!(this.boundingBox!==null&&zl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,zl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ct,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Xh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===LM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;ud.fromBufferAttribute(s.attributes.skinIndex,e),hd.fromBufferAttribute(s.attributes.skinWeight,e),cd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=hd.getComponent(r);if(a!==0){const o=ud.getComponent(r);fd.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(EA.copy(cd).applyMatrix4(fd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class $m extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ym extends Lt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=rn,u=rn,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pd=new Ve,bA=new Ve;class mu{constructor(e=[],t=[]){this.uuid=Hn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ve;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:bA;pd.multiplyMatrices(o,t[r]),pd.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new mu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Ym(t,e,e,Bn,Kn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new $m),this.bones.push(a),this.boneInverses.push(new Ve().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=i[s];e.boneInverses.push(o.toArray())}return e}}class Tc extends on{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Os=new Ve,md=new Ve,Ja=[],gd=new vi,AA=new Ve,Ur=new Nt,Or=new Qn;class wA extends Nt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Tc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,AA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Os),gd.copy(e.boundingBox).applyMatrix4(Os),this.boundingBox.union(gd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Os),Or.copy(e.boundingSphere).applyMatrix4(Os),this.boundingSphere.union(Or)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Or.copy(this.boundingSphere),Or.applyMatrix4(i),e.ray.intersectsSphere(Or)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Os),md.multiplyMatrices(i,Os),Ur.matrixWorld=md,Ur.raycast(e,Ja);for(let a=0,o=Ja.length;a<o;a++){const l=Ja[a];l.instanceId=r,l.object=this,t.push(l)}Ja.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Tc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ym(new Float32Array(s*this.count),s,this.count,Sm,Kn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Qr extends an{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Co=new V,Lo=new V,_d=new Ve,Fr=new $o,Qa=new Qn,Gl=new V,vd=new V;class gu extends _t{constructor(e=new vn,t=new Qr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Co.fromBufferAttribute(t,s-1),Lo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Co.distanceTo(Lo);e.setAttribute("lineDistance",new Pt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(s),Qa.radius+=r,e.ray.intersectsSphere(Qa)===!1)return;_d.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(_d);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let v=d,g=_-1;v<g;v+=c){const m=u.getX(v),b=u.getX(v+1),x=eo(this,e,Fr,l,m,b);x&&t.push(x)}if(this.isLineLoop){const v=u.getX(_-1),g=u.getX(d),m=eo(this,e,Fr,l,v,g);m&&t.push(m)}}else{const d=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let v=d,g=_-1;v<g;v+=c){const m=eo(this,e,Fr,l,v,v+1);m&&t.push(m)}if(this.isLineLoop){const v=eo(this,e,Fr,l,_-1,d);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function eo(n,e,t,i,s,r){const a=n.geometry.attributes.position;if(Co.fromBufferAttribute(a,s),Lo.fromBufferAttribute(a,r),t.distanceSqToSegment(Co,Lo,Gl,vd)>i)return;Gl.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Gl);if(!(l<e.near||l>e.far))return{distance:l,point:vd.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,object:n}}const xd=new V,Md=new V;class bc extends gu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)xd.fromBufferAttribute(t,s),Md.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+xd.distanceTo(Md);e.setAttribute("lineDistance",new Pt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class RA extends gu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ws extends an{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sd=new Ve,Ac=new $o,to=new Qn,no=new V;class fo extends _t{constructor(e=new vn,t=new Ws){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),to.copy(i.boundingSphere),to.applyMatrix4(s),to.radius+=r,e.ray.intersectsSphere(to)===!1)return;Sd.copy(s).invert(),Ac.copy(e.ray).applyMatrix4(Sd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=f,v=d;_<v;_++){const g=c.getX(_);no.fromBufferAttribute(h,g),yd(no,g,l,s,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let _=f,v=d;_<v;_++)no.fromBufferAttribute(h,_),yd(no,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function yd(n,e,t,i,s,r,a){const o=Ac.distanceSqToPoint(n);if(o<t){const l=new V;Ac.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class va extends an{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ei extends va{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class CA extends an{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ae(16777215),this.specular=new Ae(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fr extends an{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ae(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class LA extends an{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function io(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function IA(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function PA(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Ed(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=n[o+l]}return s}function qm(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}class xa{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class NA extends xa{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hs,endingEnd:Hs}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case zs:r=e,o=2*t-i;break;case To:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case zs:a=e,l=2*i-t;break;case To:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(i-t)/(s-t),v=_*_,g=v*_,m=-f*g+2*f*v-f*_,b=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*_+1,x=(-1-d)*g+(1.5+d)*v+.5*_,S=d*g-d*v;for(let I=0;I!==o;++I)r[I]=m*a[u+I]+b*a[c+I]+x*a[l+I]+S*a[h+I];return r}}class Km extends xa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*u;return r}}class DA extends xa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class ti{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=io(t,this.TimeBufferType),this.values=io(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:io(e.times,Array),values:io(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new DA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Km(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new NA(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ua:t=this.InterpolantFactoryMethodDiscrete;break;case cr:t=this.InterpolantFactoryMethodLinear;break;case ml:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ua;case this.InterpolantFactoryMethodLinear:return cr;case this.InterpolantFactoryMethodSmooth:return ml}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&IA(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ml,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{const h=o*i,f=h-i,d=h+i;for(let _=0;_!==i;++_){const v=t[h+_];if(v!==t[f+_]||v!==t[d+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*i,f=a*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=cr;class Mr extends ti{}Mr.prototype.ValueTypeName="bool";Mr.prototype.ValueBufferType=Array;Mr.prototype.DefaultInterpolation=ua;Mr.prototype.InterpolantFactoryMethodLinear=void 0;Mr.prototype.InterpolantFactoryMethodSmooth=void 0;class Zm extends ti{}Zm.prototype.ValueTypeName="color";class dr extends ti{}dr.prototype.ValueTypeName="number";class UA extends xa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t);let c=e*o;for(let u=c+o;c!==u;c+=4)zn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class ms extends ti{InterpolantFactoryMethodLinear(e){return new UA(this.times,this.values,this.getValueSize(),e)}}ms.prototype.ValueTypeName="quaternion";ms.prototype.DefaultInterpolation=cr;ms.prototype.InterpolantFactoryMethodSmooth=void 0;class Sr extends ti{}Sr.prototype.ValueTypeName="string";Sr.prototype.ValueBufferType=Array;Sr.prototype.DefaultInterpolation=ua;Sr.prototype.InterpolantFactoryMethodLinear=void 0;Sr.prototype.InterpolantFactoryMethodSmooth=void 0;class pr extends ti{}pr.prototype.ValueTypeName="vector";class wc{constructor(e="",t=-1,i=[],s=lu){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Hn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(FA(i[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=i.length;r!==a;++r)t.push(ti.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=PA(l);l=Ed(l,1,u),c=Ed(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new dr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,d,_,v){if(d.length!==0){const g=[],m=[];qm(d,g,m,_),g.length!==0&&v.push(new h(f,g,m))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let v=0;v<f[_].morphTargets.length;v++)d[f[_].morphTargets[v]]=-1;for(const v in d){const g=[],m=[];for(let b=0;b!==f[_].morphTargets.length;++b){const x=f[_];g.push(x.time),m.push(x.morphTarget===v?1:0)}s.push(new dr(".morphTargetInfluence["+v+"]",g,m))}l=d.length*a}else{const d=".bones["+t[h].name+"]";i(pr,d+".position",f,"pos",s),i(ms,d+".quaternion",f,"rot",s),i(pr,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function OA(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return dr;case"vector":case"vector2":case"vector3":case"vector4":return pr;case"color":return Zm;case"quaternion":return ms;case"bool":case"boolean":return Mr;case"string":return Sr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function FA(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=OA(n.type);if(n.times===void 0){const t=[],i=[];qm(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Fi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class BA{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const kA=new BA;class vs{constructor(e){this.manager=e!==void 0?e:kA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}vs.DEFAULT_MATERIAL_NAME="__DEFAULT";const ui={};class VA extends Error{constructor(e,t){super(e),this.response=t}}class _u extends vs{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Fi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ui[e]!==void 0){ui[e].push({onLoad:t,onProgress:i,onError:s});return}ui[e]=[],ui[e].push({onLoad:t,onProgress:i,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ui[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let v=0;const g=new ReadableStream({start(m){b();function b(){h.read().then(({done:x,value:S})=>{if(x)m.close();else{v+=S.byteLength;const I=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:d});for(let y=0,C=u.length;y<C;y++){const U=u[y];U.onProgress&&U.onProgress(I)}m.enqueue(S),b()}})}}});return new Response(g)}else throw new VA(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Fi.add(e,c);const u=ui[e];delete ui[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=ui[e];if(u===void 0)throw this.manager.itemError(e),c;delete ui[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class HA extends vs{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Fi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=ha("img");function l(){u(),Fi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Jm extends vs{constructor(e){super(e)}load(e,t,i,s){const r=new Lt,a=new HA(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Ko extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Wl=new Ve,Td=new V,bd=new V;class vu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fu,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Td.setFromMatrixPosition(e.matrixWorld),t.position.copy(Td),bd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bd),t.updateMatrixWorld(),Wl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class zA extends vu{constructor(){super(new yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=ur*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class GA extends Ko{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new zA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ad=new Ve,Br=new V,Xl=new V;class WA extends vu{constructor(){super(new yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ee(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Br.setFromMatrixPosition(e.matrixWorld),i.position.copy(Br),Xl.copy(i.position),Xl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Xl),i.updateMatrixWorld(),s.makeTranslation(-Br.x,-Br.y,-Br.z),Ad.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ad)}}class XA extends Ko{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new WA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class jA extends vu{constructor(){super(new Yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zn extends Ko{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new jA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yr extends Ko{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ea{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class $A extends vs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Fi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Fi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Fi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Fi.add(e,l),r.manager.itemStart(e)}}class YA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=wd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function wd(){return(typeof performance>"u"?Date:performance).now()}class qA{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,s=this.valueSize,r=e*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)i[r+o]=i[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(i,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(i,s,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let r=i,a=s;r!==a;++r)t[r]=t[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[i+a]}_slerp(e,t,i,s){zn.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,r){const a=this._workIndex*r;zn.multiplyQuaternionsFlat(e,a,e,t,e,i),zn.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,i,s,r){const a=1-s;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[i+o]*s}}_lerpAdditive(e,t,i,s,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[i+a]*s}}}const xu="\\[\\]\\.:\\/",KA=new RegExp("["+xu+"]","g"),Mu="[^"+xu+"]",ZA="[^"+xu.replace("\\.","")+"]",JA=/((?:WC+[\/:])*)/.source.replace("WC",Mu),QA=/(WCOD+)?/.source.replace("WCOD",ZA),ew=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mu),tw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mu),nw=new RegExp("^"+JA+QA+ew+tw+"$"),iw=["material","materials","bones","map"];class sw{constructor(e,t,i){const s=i||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class it{constructor(e,t,i){this.path=t,this.parsedPath=i||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,i):new it(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(KA,"")}static parseTrackName(e){const t=nw.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);iw.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=sw;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class rw{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Hs,endingEnd:Hs};for(let c=0;c!==a;++c){const u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=HM,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case GM:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case lu:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let s=this.time+e,r=this._loopCount;const a=i===zM;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(i===VM){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){const o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,i){const s=this._interpolantSettings;i?(s.endingStart=zs,s.endingEnd=zs):(e?s.endingStart=this.zeroSlopeAtStart?zs:Hs:s.endingStart=To,t?s.endingEnd=this.zeroSlopeAtEnd?zs:Hs:s.endingEnd=To)}_scheduleFading(e,t,i){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=i,this}}const aw=new Float32Array(1);class Su extends _s{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const f=s[h],d=f.name;let _=u[d];if(_!==void 0)++_.referenceCount,a[h]=_;else{if(_=a[h],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,l,d));continue}const v=t&&t._propertyBindings[h].binding.parsedPath;_=new qA(it.create(i,d,v),f.ValueTypeName,f.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,l,d),a[h]=_}o[h].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,i)}const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const s=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[t];a===void 0&&(a={},s[t]=a),a[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,s=i.rootNode.uuid,r=i.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Km(new Float32Array(2),new Float32Array(2),1,aw),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){const s=t||this._root,r=s.uuid;let a=typeof e=="string"?wc.findByName(s,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=lu),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===i)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new rw(this,a,t,i);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){const i=t||this._root,s=i.uuid,r=typeof e=="string"?wc.findByName(i,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(s,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ou}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ou);function Rd(n,e){if(e===WM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Sc||e===bm){let t=n.getIndex();if(t===null){const a=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===Sc)for(let a=1;a<=i;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class Qm extends vs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hw(t)}),this.register(function(t){return new fw(t)}),this.register(function(t){return new Sw(t)}),this.register(function(t){return new yw(t)}),this.register(function(t){return new Ew(t)}),this.register(function(t){return new pw(t)}),this.register(function(t){return new mw(t)}),this.register(function(t){return new gw(t)}),this.register(function(t){return new _w(t)}),this.register(function(t){return new uw(t)}),this.register(function(t){return new vw(t)}),this.register(function(t){return new dw(t)}),this.register(function(t){return new Mw(t)}),this.register(function(t){return new xw(t)}),this.register(function(t){return new lw(t)}),this.register(function(t){return new Tw(t)}),this.register(function(t){return new bw(t)})}load(e,t,i,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=ea.extractUrlBase(e);a=ea.resolveURL(c,this.path)}else a=ea.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new _u(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===eg){try{a[qe.KHR_BINARY_GLTF]=new Aw(e)}catch(h){s&&s(h);return}r=JSON.parse(a[qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new kw(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case qe.KHR_MATERIALS_UNLIT:a[h]=new cw;break;case qe.KHR_DRACO_MESH_COMPRESSION:a[h]=new ww(r,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:a[h]=new Rw;break;case qe.KHR_MESH_QUANTIZATION:a[h]=new Cw;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function ow(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class lw{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ae(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Ot);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Zn(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new XA(u),c.distance=h;break;case"spot":c=new GA(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Pi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class cw{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return fs}extendParams(e,t,i){const s=[];e.color=new Ae(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ot),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Qt))}return Promise.all(s)}}class uw{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class hw{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ee(o,o)}return Promise.all(r)}}class fw{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class dw{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class pw{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Ot)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Qt)),a.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class mw{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class gw{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ae().setRGB(o[0],o[1],o[2],Ot),Promise.all(r)}}class _w{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class vw{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ae().setRGB(o[0],o[1],o[2],Ot),a.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,Qt)),Promise.all(r)}}class xw{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class Mw{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class Sw{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class yw{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ew{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Tw{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}}class bw{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==En.TRIANGLES&&c.mode!==En.TRIANGLE_STRIP&&c.mode!==En.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const _ of h){const v=new Ve,g=new V,m=new zn,b=new V(1,1,1),x=new wA(_.geometry,_.material,f);for(let S=0;S<f;S++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,S),l.SCALE&&b.fromBufferAttribute(l.SCALE,S),x.setMatrixAt(S,v.compose(g,m,b));for(const S in l)if(S==="_COLOR_0"){const I=l[S];x.instanceColor=new Tc(I.array,I.itemSize,I.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&_.geometry.setAttribute(S,l[S]);_t.prototype.copy.call(x,_),this.parser.assignFinalMaterial(x),d.push(x)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const eg="glTF",kr=12,Cd={JSON:1313821514,BIN:5130562};class Aw{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,kr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==eg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-kr,r=new DataView(e,kr);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Cd.JSON){const c=new Uint8Array(e,kr+a,o);this.content=i.decode(c)}else if(l===Cd.BIN){const c=kr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ww{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=Rc[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Rc[u]||u.toLowerCase();if(a[u]!==void 0){const f=i.accessors[e.attributes[u]],d=Js[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(const _ in d.attributes){const v=d.attributes[_],g=l[_];g!==void 0&&(v.normalized=g)}h(d)},o,c,Ot,f)})})}}class Rw{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Cw{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class tg extends xa{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(i-t)/u,f=h*h,d=f*h,_=e*c,v=_-c,g=-2*d+3*f,m=d-f,b=1-g,x=m-f+h;for(let S=0;S!==o;S++){const I=a[v+S+o],y=a[v+S+l]*u,C=a[_+S+o],U=a[_+S]*u;r[S]=b*I+x*y+g*C+m*U}return r}}const Lw=new zn;class Iw extends tg{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return Lw.fromArray(r).normalize().toArray(r),r}}const En={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Js={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ld={9728:rn,9729:gn,9984:gm,9985:uo,9986:zr,9987:di},Id={33071:Ui,33648:Eo,10497:or},jl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Pw={CUBICSPLINE:void 0,LINEAR:cr,STEP:ua},$l={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Nw(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new va({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:gi})),n.DefaultMaterial}function as(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Pi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Dw(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;a.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;o.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function Uw(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ow(n){let e;const t=n.extensions&&n.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Yl(t.attributes):e=n.indices+":"+Yl(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Yl(n.targets[i]);return e}function Yl(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Cc(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Fw(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Bw=new Ve;class kw{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ow,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new Jm(this.options.manager):this.textureLoader=new $A(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _u(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return as(r,o,s),Pi(o,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){i.load(ea.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=jl[s.type],o=Js[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new on(c,a,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=jl[s.type],c=Js[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0;let v,g;if(d&&d!==h){const m=Math.floor(f/d),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let x=t.cache.get(b);x||(v=new c(o,m*d,s.count*d/u),x=new yA(v,d/u),t.cache.add(b,x)),g=new pu(x,l,f%d/u,_)}else o===null?v=new c(s.count*l):v=new c(o,f,s.count*l),g=new on(v,l,_);if(s.sparse!==void 0){const m=jl.SCALAR,b=Js[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,I=new b(a[1],x,s.sparse.count*m),y=new c(a[2],S,s.sparse.count*l);o!==null&&(g=new on(g.array.slice(),g.itemSize,g.normalized));for(let C=0,U=I.length;C<U;C++){const E=I[C];if(g.setX(E,y[C*l]),l>=2&&g.setY(E,y[C*l+1]),l>=3&&g.setZ(E,y[C*l+2]),l>=4&&g.setW(E,y[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){const s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return u.magFilter=Ld[f.magFilter]||gn,u.minFilter=Ld[f.minFilter]||di,u.wrapS=Id[f.wrapS]||or,u.wrapT=Id[f.wrapT]||or,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(v){const g=new Lt(v);g.needsUpdate=!0,f(g)}),t.load(ea.resolveURL(h,r.path),_,void 0,d)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=a.mimeType||Fw(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[qe.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Ws,an.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Qr,an.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return va}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[qe.KHR_MATERIALS_UNLIT]){const h=s[qe.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Ae(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Ot),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Qt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=bn);const u=r.alphaMode||$l.OPAQUE;if(u===$l.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===$l.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==fs&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ee(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==fs&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==fs){const h=r.emissiveFactor;o.emissive=new Ae().setRGB(h[0],h[1],h[2],Ot)}return r.emissiveTexture!==void 0&&a!==fs&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Qt)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),Pi(h,r),t.associations.set(h,{materials:e}),r.extensions&&as(s,h,r),h})}createUniqueName(e){const t=it.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Pd(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=Ow(c),h=s[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Pd(new vn,c,t),s[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?Nw(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,_=u.length;d<_;d++){const v=u[d],g=a[d];let m;const b=c[d];if(g.mode===En.TRIANGLES||g.mode===En.TRIANGLE_STRIP||g.mode===En.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new TA(v,b):new Nt(v,b),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===En.TRIANGLE_STRIP?m.geometry=Rd(m.geometry,bm):g.mode===En.TRIANGLE_FAN&&(m.geometry=Rd(m.geometry,Sc));else if(g.mode===En.LINES)m=new bc(v,b);else if(g.mode===En.LINE_STRIP)m=new gu(v,b);else if(g.mode===En.LINE_LOOP)m=new RA(v,b);else if(g.mode===En.POINTS)m=new fo(v,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&Uw(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Pi(m,r),g.extensions&&as(s,m,g),t.assignFinalMaterial(m),h.push(m)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&as(s,h[0],r),h[0];const f=new Oi;r.extensions&&as(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,_=h.length;d<_;d++)f.add(h[d]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new yt(gS.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Yo(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Pi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const f=new Ve;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new mu(o,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){const d=s.channels[h],_=s.samplers[d.sampler],v=d.target,g=v.node,m=s.parameters!==void 0?s.parameters[_.input]:_.input,b=s.parameters!==void 0?s.parameters[_.output]:_.output;v.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",b)),c.push(_),u.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],_=h[2],v=h[3],g=h[4],m=[];for(let b=0,x=f.length;b<x;b++){const S=f[b],I=d[b],y=_[b],C=v[b],U=g[b];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const E=i._createAnimationTracks(S,I,y,C,U);if(E)for(let T=0;T<E.length;T++)m.push(E[T])}return new wc(r,void 0,m)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(i.getDependency("node",o[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Bw)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new $m:c.length>1?u=new Oi:c.length===1?u=c[0]:u=new _t,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Pi(u,r),r.extensions&&as(i,u,r),r.matrix!==void 0){const h=new Ve;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Oi;i.name&&(r.name=s.createUniqueName(i.name)),Pi(r,i),i.extensions&&as(t,r,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of s.associations)(f instanceof an||f instanceof Lt)&&h.set(f,d);return u.traverse(f=>{const d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const a=[],o=e.name?e.name:e.uuid,l=[];Ri[r.path]===Ri.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(Ri[r.path]){case Ri.weights:c=dr;break;case Ri.rotation:c=ms;break;case Ri.position:case Ri.scale:c=pr;break;default:switch(i.itemSize){case 1:c=dr;break;case 2:case 3:default:c=pr;break}break}const u=s.interpolation!==void 0?Pw[s.interpolation]:cr,h=this._getArrayFromAccessor(i);for(let f=0,d=l.length;f<d;f++){const _=new c(l[f]+"."+Ri[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Cc(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof ms?Iw:tg;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Vw(n,e,t){const i=e.attributes,s=new vi;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new V(l[0],l[1],l[2]),new V(c[0],c[1],c[2])),o.normalized){const u=Cc(Js[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new V,l=new V;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){const v=Cc(Js[f.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}n.boundingBox=s;const a=new Qn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=a}function Pd(n,e,t){const i=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(const a in i){const o=Rc[a]||a.toLowerCase();o in n.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});s.push(a)}return st.workingColorSpace!==Ot&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),Pi(n,e),Vw(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Dw(n,e.targets,t):n})}const ng={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ma{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Hw=new Yo(-1,1,1,-1,0,1);class zw extends vn{constructor(){super(),this.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Pt([0,2,0,0,2,0],2))}}const Gw=new zw;class ig{constructor(e){this._mesh=new Nt(Gw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Hw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Wi extends Ma{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof nn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=hu.clone(e.uniforms),this.material=new nn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ig(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Nd extends Ma{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Ww extends Ma{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Er{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ee);this._width=i.width,this._height=i.height,t=new en(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Nn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wi(ng),this.copyPass.material.blending=Vn,this.clock=new YA}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Nd!==void 0&&(a instanceof Nd?i=!0:a instanceof Ww&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Tr extends Ma{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ae}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}class _n extends Ma{constructor(e,t,i,s){super(),this.renderScene=t,this.renderCamera=i,this.selectedObjects=s!==void 0?s:[],this.visibleEdgeColor=new Ae(1,1,1),this.hiddenEdgeColor=new Ae(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this.resolution=e!==void 0?new Ee(e.x,e.y):new Ee(256,256);const r=Math.round(this.resolution.x/this.downSampleRatio),a=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new en(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new jm,this.depthMaterial.side=bn,this.depthMaterial.depthPacking=Am,this.depthMaterial.blending=Vn,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=bn,this.prepareMaskMaterial.fragmentShader=u(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new en(this.resolution.x,this.resolution.y,{type:Nn}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new en(r,a,{type:Nn}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new en(r,a,{type:Nn}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new en(Math.round(r/2),Math.round(a/2),{type:Nn}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new en(r,a,{type:Nn}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new en(Math.round(r/2),Math.round(a/2),{type:Nn}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const o=4,l=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(o),this.separableBlurMaterial1.uniforms.texSize.value.set(r,a),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(r/2),Math.round(a/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this.getOverlayMaterial();const c=ng;this.copyUniforms=hu.clone(c.uniforms),this.materialCopy=new nn({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Vn,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ae,this.oldClearAlpha=1,this.fsQuad=new ig(null),this.tempPulseColor1=new Ae,this.tempPulseColor2=new Ae,this.textureMatrix=new Ve;function u(h,f){const d=f.isPerspectiveCamera?"perspective":"orthographic";return h.replace(/DEPTH_TO_VIEW_Z/g,d+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let i=Math.round(e/this.downSampleRatio),s=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(i,s),this.renderTargetBlurBuffer1.setSize(i,s),this.renderTargetEdgeBuffer1.setSize(i,s),this.separableBlurMaterial1.uniforms.texSize.value.set(i,s),i=Math.round(i/2),s=Math.round(s/2),this.renderTargetBlurBuffer2.setSize(i,s),this.renderTargetEdgeBuffer2.setSize(i,s),this.separableBlurMaterial2.uniforms.texSize.value.set(i,s)}changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;function i(s){s.isMesh&&(e===!0?s.visible=t.get(s):(t.set(s,s.visible),s.visible=e))}for(let s=0;s<this.selectedObjects.length;s++)this.selectedObjects[s].traverse(i)}changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,i=[];function s(a){a.isMesh&&i.push(a)}for(let a=0;a<this.selectedObjects.length;a++)this.selectedObjects[a].traverse(s);function r(a){if(a.isMesh||a.isSprite){let o=!1;for(let l=0;l<i.length;l++)if(i[l].id===a.id){o=!0;break}if(o===!1){const l=a.visible;(e===!1||t.get(a)===!0)&&(a.visible=e),t.set(a,l)}}else(a.isPoints||a.isLine)&&(e===!0?a.visible=t.get(a):(t.set(a,a.visible),a.visible=e))}this.renderScene.traverse(r)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,i,s,r){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,r&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.changeVisibilityOfSelectedObjects(!1);const o=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this.renderScene.background=o,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const l=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(l),this.tempPulseColor2.multiplyScalar(l)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=_n.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=_n.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=_n.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=_n.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,r&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(i),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=i.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new nn({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new Ee(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif
					
					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}getEdgeDetectionMaterial(){return new nn({uniforms:{maskTexture:{value:null},texSize:{value:new Ee(.5,.5)},visibleEdgeColor:{value:new V(1,1,1)},hiddenEdgeColor:{value:new V(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}getSeperableBlurMaterial(e){return new nn({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new Ee(.5,.5)},direction:{value:new Ee(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}getOverlayMaterial(){return new nn({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:gc,depthTest:!1,depthWrite:!1,transparent:!0})}}_n.BlurDirectionX=new Ee(1,0);_n.BlurDirectionY=new Ee(0,1);const br={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Ee(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
				iterationsUsed = i;

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`},Xw={mounted(){this.initThreeScene()},beforeDestroy(){this.cleanupThreeScene()},methods:{initThreeScene(){this.scene=new xr,this.setupCamera(),this.setupRenderer(),this.loadModel(),this.setupLights(),this.setupPostProcessing(),this.animate()},setupCamera(){this.camera=new yt(5,1,.2,2e3),this.camera.position.z=15},setupRenderer(){this.renderer=new vr({alpha:!0}),this.renderer.setSize(300,300),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.setClearColor(0,0),this.$refs.container.appendChild(this.renderer.domElement)},loadModel(){new Qm().load("/assets/glb/cartoon_head.glb",e=>{this.model=e.scene,this.model.scale.setScalar(.2),this.model.scale.x-=.38,this.model.traverse(t=>t.castShadow=!0),this.applyMaterials(),this.setupAnimation(e),this.scene.add(this.model),this.outlinePass.selectedObjects=[this.model]},void 0,e=>{console.error("An error occurred while loading the model",e)})},applyMaterials(){const n=new fr({color:15853014}),e=new fr({color:9792597}),t=new va({emissive:10076657,roughness:0,transparent:!0,opacity:.4});this.model.traverse(i=>{i.isMesh&&((i.name==="head"||i.name==="nose"||i.name==="ear")&&(i.material=n),["Cube001","Icosphere001","Icosphere","Icosphere002","Cube002"].includes(i.name)&&(i.material=e),i.name==="glasses"&&(i.material=t))})},setupAnimation(n){this.mixer=new Su(this.model),n.animations&&n.animations.length>0&&this.mixer.clipAction(n.animations[1]).play(),this.model.rotation.y+=.2},setupLights(){const n=new Zn(16777215,2);n.position.set(2,2,2),n.castShadow=!0,this.scene.add(n);const e=new yr(16777215);this.scene.add(e)},setupPostProcessing(){this.composer=new Er(this.renderer);const n=new Tr(this.scene,this.camera);this.composer.addPass(n),this.outlinePass=new _n(new Ee(300,300),this.scene,this.camera),this.outlinePass.edgeStrength=.5,this.outlinePass.edgeGlow=25,this.outlinePass.edgeThickness=10,this.outlinePass.pulsePeriod=0,this.outlinePass.visibleEdgeColor.set("#da64ff"),this.outlinePass.hiddenEdgeColor.set("#ff0000"),this.composer.addPass(this.outlinePass);const e=new Wi(br);e.uniforms.resolution.value.set(1/300,1/300),this.composer.addPass(e)},animate(){this.floatFactor=0;const n=()=>{requestAnimationFrame(n),this.mixer&&this.mixer.update(.01),this.model&&this.updateModel(),this.composer.render()};n()},updateModel(){this.floatFactor+=.02,this.model.position.y=Math.sin(this.floatFactor)*.1,this.model.rotation.x=Math.sin(this.floatFactor)*.05,this.model.rotation.z=Math.cos(this.floatFactor)*.05},cleanupThreeScene(){this.renderer&&(this.renderer.dispose(),this.renderer.forceContextLoss(),this.$refs.container.removeChild(this.renderer.domElement)),this.scene&&this.scene.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&n.material.dispose()})}}},jw={ref:"container"};function $w(n,e,t,i,s,r){return Dt(),$t("div",jw,null,512)}const Yw=xn(Xw,[["render",$w],["__scopeId","data-v-ebeb093a"]]),qw={class:"presentation"},Kw={class:"head"},Zw={__name:"AboutMe",setup(n){const{t:e}=Jn();return(t,i)=>(Dt(),$t("div",qw,[Ye("div",Kw,[tt(Yw),Ye("h1",null,zt(Gt(e)("welcome")),1)]),Ye("p",null,zt(Gt(e)("about_description")),1)]))}},Jw=xn(Zw,[["__scopeId","data-v-1d60ef6b"]]),Qw={name:""},eR={class:"item"},tR={class:"details"};function nR(n,e,t,i,s,r){return Dt(),$t("div",eR,[Rr(n.$slots,"media-left",{},void 0),Ye("div",tR,[Ye("h3",null,[Rr(n.$slots,"heading",{},void 0)]),Rr(n.$slots,"description",{},void 0),Rr(n.$slots,"link",{},void 0)]),Rr(n.$slots,"media-right",{},void 0)])}const Vr=xn(Qw,[["render",nR],["__scopeId","data-v-958ed303"]]),iR=/^[og]\s*(.+)?/,sR=/^mtllib /,rR=/^usemtl /,aR=/^usemap /,Dd=/\s+/,Ud=new V,ql=new V,Od=new V,Fd=new V,yn=new V,so=new Ae;function oR(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,t,i){const s=this.vertices,r=this.object.geometry.normals;Ud.fromArray(s,e),ql.fromArray(s,t),Od.fromArray(s,i),yn.subVectors(Od,ql),Fd.subVectors(Ud,ql),yn.cross(Fd),yn.normalize(),r.push(yn.x,yn.y,yn.z),r.push(yn.x,yn.y,yn.z),r.push(yn.x,yn.y,yn.z)},addColor:function(e,t,i){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[i]!==void 0&&r.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,t,i){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[i+0],s[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,s,r,a,o,l,c){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),f=this.parseVertexIndex(t,u),d=this.parseVertexIndex(i,u);if(this.addVertex(h,f,d),this.addColor(h,f,d),o!==void 0&&o!==""){const _=this.normals.length;h=this.parseNormalIndex(o,_),f=this.parseNormalIndex(l,_),d=this.parseNormalIndex(c,_),this.addNormal(h,f,d)}else this.addFaceNormal(h,f,d);if(s!==void 0&&s!==""){const _=this.uvs.length;h=this.parseUVIndex(s,_),f=this.parseUVIndex(r,_),d=this.parseUVIndex(a,_),this.addUV(h,f,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,s=e.length;i<s;i++){const r=this.parseVertexIndex(e[i],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let r=0,a=e.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],i));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return n.startObject("",!1),n}class yu extends vs{constructor(e){super(e),this.materials=null}load(e,t,i,s){const r=this,a=new _u(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new oR;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let s=[];for(let o=0,l=i.length;o<l;o++){const c=i[o].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const h=c.split(Dd);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(so.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6])).convertSRGBToLinear(),t.colors.push(so.r,so.g,so.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const f=c.slice(1).trim().split(Dd),d=[];for(let v=0,g=f.length;v<g;v++){const m=f[v];if(m.length>0){const b=m.split("/");d.push(b)}}const _=d[0];for(let v=1,g=d.length-1;v<g;v++){const m=d[v],b=d[v+1];t.addFace(_[0],m[0],b[0],_[1],m[1],b[1],_[2],m[2],b[2])}}else if(u==="l"){const h=c.substring(1).trim().split(" ");let f=[];const d=[];if(c.indexOf("/")===-1)f=h;else for(let _=0,v=h.length;_<v;_++){const g=h[_].split("/");g[0]!==""&&f.push(g[0]),g[1]!==""&&d.push(g[1])}t.addLineGeometry(f,d)}else if(u==="p"){const f=c.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((s=iR.exec(c))!==null){const h=(" "+s[0].slice(1).trim()).slice(1);t.startObject(h)}else if(rR.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(sR.test(c))t.materialLibraries.push(c.substring(7).trim());else if(aR.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(s=c.split(" "),s.length>1){const f=s[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const r=new Oi;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=t.objects.length;o<l;o++){const c=t.objects[o],u=c.geometry,h=c.materials,f=u.type==="Line",d=u.type==="Points";let _=!1;if(u.vertices.length===0)continue;const v=new vn;v.setAttribute("position",new Pt(u.vertices,3)),u.normals.length>0&&v.setAttribute("normal",new Pt(u.normals,3)),u.colors.length>0&&(_=!0,v.setAttribute("color",new Pt(u.colors,3))),u.hasUVIndices===!0&&v.setAttribute("uv",new Pt(u.uvs,2));const g=[];for(let b=0,x=h.length;b<x;b++){const S=h[b],I=S.name+"_"+S.smooth+"_"+_;let y=t.materials[I];if(this.materials!==null){if(y=this.materials.create(S.name),f&&y&&!(y instanceof Qr)){const C=new Qr;an.prototype.copy.call(C,y),C.color.copy(y.color),y=C}else if(d&&y&&!(y instanceof Ws)){const C=new Ws({size:10,sizeAttenuation:!1});an.prototype.copy.call(C,y),C.color.copy(y.color),C.map=y.map,y=C}}y===void 0&&(f?y=new Qr:d?y=new Ws({size:1,sizeAttenuation:!1}):y=new CA,y.name=S.name,y.flatShading=!S.smooth,y.vertexColors=_,t.materials[I]=y),g.push(y)}let m;if(g.length>1){for(let b=0,x=h.length;b<x;b++){const S=h[b];v.addGroup(S.groupStart,S.groupCount,b)}f?m=new bc(v,g):d?m=new fo(v,g):m=new Nt(v,g)}else f?m=new bc(v,g[0]):d?m=new fo(v,g[0]):m=new Nt(v,g[0]);m.name=c.name,r.add(m)}else if(t.vertices.length>0){const o=new Ws({size:1,sizeAttenuation:!1}),l=new vn;l.setAttribute("position",new Pt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new Pt(t.colors,3)),o.vertexColors=!0);const c=new fo(l,o);r.add(c)}return r}}const lR={uniforms:{tDiffuse:{value:null},resolution:{value:new Ee},pixelSize:{value:8}},vertexShader:`
    varying highp vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform float pixelSize;
    varying highp vec2 vUv;
    void main() {
      vec2 dxy = pixelSize / resolution;
      vec2 coord = dxy * floor(vUv / dxy);
      gl_FragColor = texture2D(tDiffuse, coord);
    }
  `},cR={mounted(){this.initThreeScene()},beforeDestroy(){this.cleanupThreeScene()},methods:{initThreeScene(){this.scene=new xr,this.setupCamera(),this.setupRenderer(),this.loadModel(),this.setupLights(),this.setupPostProcessing(),this.animate()},setupCamera(){this.camera=new yt(60,1,.1,1e3),this.camera.position.z=5},setupRenderer(){this.renderer=new vr({alpha:!0}),this.renderer.setSize(300,300),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.setClearColor(0,0),this.$refs.container.appendChild(this.renderer.domElement)},loadModel(){new yu().load("/assets/obj/roundedcube.obj",e=>{this.model=e;const t=new fr({color:15258111});this.model.traverse(i=>{i.isMesh&&(i.material=t)}),this.scene.add(this.model),this.outlinePass.selectedObjects=[this.model]},void 0,e=>{console.error("An error occurred while loading the model",e)})},setupLights(){const n=new Zn(16777215,2.5);n.position.set(0,2,0),n.castShadow=!0,this.scene.add(n);const e=new Zn(16777215,1);e.position.set(2,-2,2),e.castShadow=!0,this.scene.add(e);const t=new yr(11250603);this.scene.add(t)},setupPostProcessing(){this.composer=new Er(this.renderer);const n=new Tr(this.scene,this.camera);this.composer.addPass(n),this.outlinePass=new _n(new Ee(300,300),this.scene,this.camera),this.outlinePass.edgeStrength=3,this.outlinePass.edgeGlow=4,this.outlinePass.edgeThickness=15,this.outlinePass.pulsePeriod=0,this.outlinePass.visibleEdgeColor.set("#da64ff"),this.outlinePass.hiddenEdgeColor.set("#ffffff"),this.composer.addPass(this.outlinePass);const e=new Wi(br);e.uniforms.resolution.value.set(1/300,1/300),this.composer.addPass(e);const t=new Wi(lR);t.uniforms.resolution.value=new Ee(300,300),t.uniforms.pixelSize.value=4,this.composer.addPass(t)},animate(){this.floatFactor=0,this.animateLoop=()=>{requestAnimationFrame(this.animateLoop),this.model&&(this.floatFactor+=.01,this.model.rotation.x=Math.sin(this.floatFactor)*.6,this.model.rotation.y+=.01),this.composer.render()},this.animateLoop()},cleanupThreeScene(){this.renderer&&(this.renderer.dispose(),this.renderer.forceContextLoss(),this.$refs.container.removeChild(this.renderer.domElement)),this.scene&&this.scene.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&n.material.dispose()})}}},uR={ref:"container"};function hR(n,e,t,i,s,r){return Dt(),$t("div",uR,null,512)}const fR=xn(cR,[["render",hR],["__scopeId","data-v-7b6d977c"]]),dR={mounted(){this.initThreeScene()},beforeDestroy(){this.cleanupThreeScene()},methods:{initThreeScene(){this.scene=new xr,this.setupCamera(),this.setupRenderer(),this.loadModel(),this.setupLights(),this.setupPostProcessing(),this.animate()},setupCamera(){this.camera=new yt(50,1,.2,2e3),this.camera.position.z=1.1},setupRenderer(){this.renderer=new vr({alpha:!0}),this.renderer.setSize(300,300),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.setClearColor(0,0),this.$refs.container.appendChild(this.renderer.domElement)},loadModel(){new Qm().load("/assets/glb/pong.glb",e=>{this.model=e.scene,this.model.scale.setScalar(.08),this.model.rotation.x+=.5,this.model.traverse(i=>i.castShadow=!0);const t=new fr({color:15258111});this.model.traverse(i=>{i.isMesh&&(i.material=t)}),this.mixer=new Su(this.model),e.animations&&e.animations.length>0&&this.mixer.clipAction(e.animations[0]).play(),this.scene.add(this.model),this.outlinePass.selectedObjects=[this.model]},void 0,e=>{console.error("An error occurred while loading the model",e)})},setupLights(){const n=new Zn(16777215,2);n.position.set(0,2,0),n.castShadow=!0,this.scene.add(n);const e=new Zn(16777215,.8);e.position.set(2,-2,2),e.castShadow=!0,this.scene.add(e);const t=new yr(11250603);this.scene.add(t)},setupPostProcessing(){this.composer=new Er(this.renderer);const n=new Tr(this.scene,this.camera);this.composer.addPass(n),this.outlinePass=new _n(new Ee(300,300),this.scene,this.camera),this.outlinePass.edgeStrength=3,this.outlinePass.edgeGlow=2,this.outlinePass.edgeThickness=2,this.outlinePass.pulsePeriod=0,this.outlinePass.visibleEdgeColor.set("#da64ff"),this.outlinePass.hiddenEdgeColor.set("#ffffff"),this.composer.addPass(this.outlinePass);const e=new Wi(br);e.uniforms.resolution.value.set(1/300,1/300),this.composer.addPass(e)},animate(){this.animateLoop=()=>{requestAnimationFrame(this.animateLoop),this.mixer&&this.mixer.update(.01),this.model&&(this.model.rotation.y+=.01),this.composer.render()},this.animateLoop()},cleanupThreeScene(){this.renderer&&(this.renderer.dispose(),this.renderer.forceContextLoss(),this.$refs.container.removeChild(this.renderer.domElement)),this.scene&&this.scene.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&n.material.dispose()})}}},pR={ref:"container"};function mR(n,e,t,i,s,r){return Dt(),$t("div",pR,null,512)}const gR=xn(dR,[["render",mR],["__scopeId","data-v-593af8a2"]]),_R={mounted(){this.initThreeScene()},beforeDestroy(){this.cleanupThreeScene()},methods:{initThreeScene(){this.scene=new xr,this.setupCamera(),this.setupRenderer(),this.loadModel(),this.setupLights(),this.setupPostProcessing(),this.animate()},setupCamera(){this.camera=new yt(5,1,.2,2e3),this.camera.position.z=15},setupRenderer(){this.renderer=new vr({alpha:!0}),this.renderer.setSize(300,300),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.setClearColor(0,0),this.$refs.container.appendChild(this.renderer.domElement)},loadModel(){const n=new Jm().load("/assets/icons/cursor.png"),e=new LA({map:n,transparent:!0});this.model=new Nt(new _a(1516,2400),e),this.model.scale.setScalar(3e-4),this.model.rotation.x+=.2,this.scene.add(this.model)},setupAnimation(n){this.mixer=new Su(this.model),n.animations&&n.animations.length>0&&this.mixer.clipAction(n.animations[1]).play(),this.model.rotation.y+=.2},setupLights(){const n=new yr(16777215,3);this.scene.add(n)},setupPostProcessing(){this.composer=new Er(this.renderer);const n=new Tr(this.scene,this.camera);this.composer.addPass(n),this.outlinePass=new _n(new Ee(300,300),this.scene,this.camera),this.outlinePass.edgeStrength=0,this.outlinePass.edgeGlow=0,this.outlinePass.edgeThickness=0,this.outlinePass.pulsePeriod=0,this.outlinePass.visibleEdgeColor.set("#da64ff"),this.outlinePass.hiddenEdgeColor.set("#ff0000"),this.composer.addPass(this.outlinePass);const e=new Wi(br);e.uniforms.resolution.value.set(1/300,1/300),this.composer.addPass(e)},animate(){this.floatFactor=0;const n=()=>{requestAnimationFrame(n),this.mixer&&this.mixer.update(.01),this.model&&this.updateModel(),this.composer.render()};n()},updateModel(){this.floatFactor+=.02,this.model.position.y=Math.sin(this.floatFactor)*.1,this.model.rotation.x=Math.sin(this.floatFactor)*.3,this.model.rotation.y=Math.cos(this.floatFactor)*.4,this.model.rotation.z=Math.cos(this.floatFactor)*.05},cleanupThreeScene(){this.renderer&&(this.renderer.dispose(),this.renderer.forceContextLoss(),this.$refs.container.removeChild(this.renderer.domElement)),this.scene&&this.scene.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&n.material.dispose()})}}},vR={ref:"container"};function xR(n,e,t,i,s,r){return Dt(),$t("div",vR,null,512)}const MR=xn(_R,[["render",xR],["__scopeId","data-v-2a66c458"]]),SR={mounted(){this.initThreeScene()},beforeDestroy(){this.cleanupThreeScene()},methods:{initThreeScene(){this.scene=new xr,this.setupCamera(),this.setupRenderer(),this.loadModel(),this.setupLights(),this.setupPostProcessing(),this.animate()},setupCamera(){this.camera=new yt(45,1,.1,1e3),this.camera.position.z=9},setupRenderer(){this.renderer=new vr({alpha:!0}),this.renderer.setSize(300,300),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.setClearColor(0,0),this.$refs.container.appendChild(this.renderer.domElement)},loadModel(){new yu().load("/assets/obj/irc.obj",e=>{this.model=e;const t=new fr({color:14460403}),i=new fr({color:15258111});this.model.traverse(s=>{s.name=="dots"||s.name=="dots01"?s.material=t:s.material=i}),this.scene.add(this.model),this.model.rotation.x+=.3,this.model.position.y+=.8,this.outlinePass.selectedObjects=[this.model]},void 0,e=>{console.error("An error occurred while loading the model",e)})},setupLights(){const n=new Zn(16777215,2);n.position.set(0,2,0),n.castShadow=!0,this.scene.add(n);const e=new Zn(16777215,.8);e.position.set(2,-2,2),e.castShadow=!0,this.scene.add(e);const t=new yr(11250603);this.scene.add(t)},setupPostProcessing(){this.composer=new Er(this.renderer);const n=new Tr(this.scene,this.camera);this.composer.addPass(n),this.outlinePass=new _n(new Ee(300,300),this.scene,this.camera),this.outlinePass.edgeStrength=3,this.outlinePass.edgeGlow=4,this.outlinePass.edgeThickness=1,this.outlinePass.pulsePeriod=0,this.outlinePass.visibleEdgeColor.set("#da64ff"),this.outlinePass.hiddenEdgeColor.set("#ffffff"),this.composer.addPass(this.outlinePass);const e=new Wi(br);e.uniforms.resolution.value.set(1/300,1/300),this.composer.addPass(e)},animate(){this.animateLoop=()=>{requestAnimationFrame(this.animateLoop),this.model&&(this.model.rotation.y+=.01),this.composer.render()},this.animateLoop()},cleanupThreeScene(){this.renderer&&(this.renderer.dispose(),this.renderer.forceContextLoss(),this.$refs.container.removeChild(this.renderer.domElement)),this.scene&&this.scene.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&n.material.dispose()})}}},yR={ref:"container"};function ER(n,e,t,i,s,r){return Dt(),$t("div",yR,null,512)}const TR=xn(SR,[["render",ER],["__scopeId","data-v-264fd879"]]);new Ee;const bR={mounted(){this.initThreeScene()},beforeDestroy(){this.cleanupThreeScene()},methods:{initThreeScene(){this.scene=new xr,this.setupCamera(),this.setupRenderer(),this.loadModel(),this.setupLights(),this.setupPostProcessing(),this.animate()},setupCamera(){this.camera=new yt(60,1,.1,1e3),this.camera.position.z=5},setupRenderer(){this.renderer=new vr({alpha:!0}),this.renderer.setSize(300,300),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.setClearColor(0,0),this.$refs.container.appendChild(this.renderer.domElement)},loadModel(){new yu().load("/assets/obj/spinningtop.obj",e=>{this.model=e;const t=new va({color:15258111});this.model.traverse(i=>{i.isMesh&&(i.material=t)}),this.scene.add(this.model),this.outlinePass.selectedObjects=[this.model]},void 0,e=>{console.error("An error occurred while loading the model",e)})},setupLights(){const n=new Zn(16777215,2.5);n.position.set(0,2,0),n.castShadow=!0,this.scene.add(n);const e=new Zn(16777215,1);e.position.set(2,-2,2),e.castShadow=!0,this.scene.add(e);const t=new yr(11250603,4);this.scene.add(t)},setupPostProcessing(){this.composer=new Er(this.renderer);const n=new Tr(this.scene,this.camera);this.composer.addPass(n),this.outlinePass=new _n(new Ee(300,300),this.scene,this.camera),this.outlinePass.edgeStrength=5,this.outlinePass.edgeGlow=.7,this.outlinePass.edgeThickness=5,this.outlinePass.pulsePeriod=0,this.outlinePass.visibleEdgeColor.set("#da64ff"),this.outlinePass.hiddenEdgeColor.set("#ffffff"),this.composer.addPass(this.outlinePass);const e=new Wi(br);e.uniforms.resolution.value.set(1/300,1/300),this.composer.addPass(e)},animate(){this.floatFactor=0,this.animateLoop=()=>{requestAnimationFrame(this.animateLoop),this.model&&(this.floatFactor+=.01,this.model.rotation.z=Math.sin(this.floatFactor)*.4,this.model.rotation.y+=.05),this.composer.render()},this.animateLoop()},cleanupThreeScene(){this.renderer&&(this.renderer.dispose(),this.renderer.forceContextLoss(),this.$refs.container.removeChild(this.renderer.domElement)),this.scene&&this.scene.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&n.material.dispose()})}}},AR={ref:"container"};function wR(n,e,t,i,s,r){return Dt(),$t("div",AR,null,512)}const RR=xn(bR,[["render",wR],["__scopeId","data-v-2bb0bd16"]]),CR={href:"https://github.com/LeonMauriceArt/ft_transcendence"},LR={href:"https://github.com/LeonMauriceArt/Cube_3D"},IR={href:"https://github.com/bkaboa/new_irc"},PR={href:"https://github.com/LeonMauriceArt/inception"},NR={__name:"Projects",setup(n){const{t:e}=Jn();return(t,i)=>(Dt(),$t(tn,null,[tt(Vr,null,{"media-left":St(()=>[tt(gR)]),heading:St(()=>[Ni("Transcendence")]),description:St(()=>[Ye("p",null,zt(Gt(e)("description_transcendence")),1)]),link:St(()=>[Ye("a",CR,zt(Gt(e)("link")),1)]),_:1}),tt(Vr,null,{"media-right":St(()=>[tt(fR)]),heading:St(()=>[Ni("CUBE_3d")]),description:St(()=>[Ye("p",null,zt(Gt(e)("description_cube3d")),1)]),link:St(()=>[Ye("a",LR,zt(Gt(e)("link")),1)]),_:1}),tt(Vr,null,{"media-left":St(()=>[tt(TR)]),heading:St(()=>[Ni("IRC")]),description:St(()=>[Ye("p",null,zt(Gt(e)("description_irc")),1)]),link:St(()=>[Ye("a",IR,zt(Gt(e)("link")),1)]),_:1}),tt(Vr,null,{"media-right":St(()=>[tt(RR)]),heading:St(()=>[Ni("Inception")]),description:St(()=>[Ye("p",null,zt(Gt(e)("description_inception")),1)]),link:St(()=>[Ye("a",PR,zt(Gt(e)("link")),1)]),_:1}),tt(Vr,null,{"media-left":St(()=>[tt(MR)]),heading:St(()=>[Ni(zt(Gt(e)("this_website")),1)]),description:St(()=>[Ye("p",null,zt(Gt(e)("description_website")),1)]),_:1})],64))}},DR=xn(NR,[["__scopeId","data-v-a625d5af"]]),UR="/assets/LinkedIn_icon-ylXeCwRq.png",OR="/assets/mail-BbRqljw8.png",sg=n=>(jc("data-v-b268bab0"),n=n(),$c(),n),FR={class:"presentation"},BR=sg(()=>Ye("a",{href:"https://www.linkedin.com/in/leonard-maurin-noblet/"},[Ye("img",{class:"linkedin",src:UR,alt:"Linkedin"}),Ni(" LinkedIn ")],-1)),kR=sg(()=>Ye("a",{href:"mailto:leonard.maurin@gmail.com"},[Ye("img",{class:"mail",src:OR,alt:"Mail"}),Ni(" leonard.maurin@gmail.com ")],-1)),VR={__name:"Contact",setup(n){const{t:e}=Jn();return(t,i)=>(Dt(),$t("div",FR,[Ye("h1",null,zt(Gt(e)("contact_intro")),1),BR,kR]))}},HR=xn(VR,[["__scopeId","data-v-b268bab0"]]),zR="/assets/esagames-_vQz664M.jpg",GR="/assets/42-BF2f2tYT.png",WR={class:"presentation"},XR={class:"head"},jR=Fp('<div class="image-container" data-v-e841d947><a href="https://www.nouvellesimages.xyz/jeuvideo?lang=en" data-v-e841d947><img src="'+zR+'" alt="Image 2" data-v-e841d947></a><a href="https://42lyon.fr/" data-v-e841d947><img src="'+GR+'" alt="Image 3" data-v-e841d947></a></div>',1),$R={__name:"Education",setup(n){const{t:e}=Jn();return(t,i)=>(Dt(),$t("div",WR,[Ye("div",XR,[Ye("h1",null,zt(Gt(e)("educational")),1)]),jR]))}},YR=xn($R,[["__scopeId","data-v-e841d947"]]),rg=n=>(jc("data-v-594fb681"),n=n(),$c(),n),qR={class:"app"},KR=Fp('<div id="bg-wrap" data-v-594fb681><svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" data-v-594fb681><defs data-v-594fb681><radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.5%" fy="50%" r=".5" data-v-594fb681><animate attributeName="fx" dur="20s" values="0%;3%;0%" repeatCount="indefinite" data-v-594fb681></animate><stop offset="0%" stop-color="rgba(15, 0, 75, 1)" data-v-594fb681></stop><stop offset="100%" stop-color="rgba(50, 0, 100, 0)" data-v-594fb681></stop></radialGradient><radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.5%" fy="50%" r=".5" data-v-594fb681><animate attributeName="fx" dur="25s" values="0%;3%;0%" repeatCount="indefinite" data-v-594fb681></animate><stop offset="0%" stop-color="rgba(0, 0, 100, 1)" data-v-594fb681></stop><stop offset="100%" stop-color="rgba(10, 250, 50, 0)" data-v-594fb681></stop></radialGradient></defs><rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(0 50 50)" data-v-594fb681><animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite" data-v-594fb681></animate><animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite" data-v-594fb681></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="20s" repeatCount="indefinite" data-v-594fb681></animateTransform></rect><rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient2)" transform="rotate(180 50 50)" data-v-594fb681><animate attributeName="x" dur="25s" values="-25%;0%;-25%" repeatCount="indefinite" data-v-594fb681></animate><animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite" data-v-594fb681></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="25s" repeatCount="indefinite" data-v-594fb681></animateTransform></rect></svg></div>',1),ZR={class:"content"},JR=rg(()=>Ye("div",{id:"section1"},null,-1)),QR=rg(()=>Ye("div",{id:"section2"},null,-1)),eC={__name:"App",setup(n){return Jn(),(e,t)=>(Dt(),$t("div",qR,[KR,Ye("div",ZR,[tt(jx),Ye("main",null,[tt(Jw),tt(YR),JR,tt(DR),QR,tt(HR)])])]))}},tC=xn(eC,[["__scopeId","data-v-594fb681"]]),nC="Welcome !",iC="About me",sC="Hello! I'm Leonard, a passionate junior developer with a keen interest in web development, graphic design, and game development. I'm excited to share with you my journey and showcase some of my projects that reflect my skills and creativity.",rC="Projects",aC="Interested in connecting ?",oC="This website !",lC="A full dockerized website project for playing Pong games, made with the Django framework, and using ThreeJS for awesome 3D pong graphics ! This team project also includes playing versus an AI, and include security features, such as a firewall and vault.",cC="A study project about making an IRC server, based on the IRC protocol. The server is coded in C++, and includes basic admin commands for managing chat rooms.",uC="A project aimed at learning the basics of dockers usage, by making a docker network for hosting a Wordpress website. The network includes Wordpress, MariaDB as a database, and Nginx for the server.",hC="This website is also a project of mine ! I created it using VueJs as a framework, and ThreeJS for the 3D elements. I wanted to be creative with this website, and create a portfolio that reflect on my universe and my work. Hope you like it !",fC="A graphical project about recreating an old FPS using fake 3D graphics. Nothing like an old school Wolfenstein game ! Made in C with a display library called MinilibX.",dC="Project link",pC="Educational background",mC={welcome:nC,about:iC,about_description:sC,projects:rC,contact_intro:aC,this_website:oC,description_transcendence:lC,description_irc:cC,description_inception:uC,description_website:hC,description_cube3d:fC,link:dC,educational:pC},gC="Bienvenue !",_C="À propos",vC="Bonjour ! Je m'appelle Leonard, un développeur junior passionné avec un vif intérêt pour le développement web, le design graphique et le développement de jeux. Je suis enthousiaste à l'idée de partager avec vous mon parcours et de présenter certains de mes projets qui reflètent mes compétences et ma créativité.",xC="Projets",MC="Désirez-vous prendre contact ?",SC="Ce site web !",yC="Un projet de site web entièrement dockerisé pour jouer à des jeux de Pong, réalisé avec le framework Django et utilisant ThreeJS pour des graphismes 3D impressionnants ! Ce projet d'équipe inclut également la possibilité de jouer contre une IA et comprend des fonctionnalités de sécurité, telles qu'un pare-feu ainsi que Vault.",EC="Un projet d'étude sur la création d'un serveur IRC, basé sur le protocole IRC. Le serveur est codé en C++ et inclut des commandes d'administration de base pour la gestion des salons de discussion.",TC="Un projet visant à apprendre les bases de l'utilisation des Docker, en créant un réseau Docker pour héberger un site web Wordpress. Le réseau inclut Wordpress, MariaDB comme base de données, et Nginx pour le serveur.",bC="Ce site web est également un de mes projets ! Je l'ai créé en utilisant VueJs comme framework, et ThreeJS pour les éléments 3D. J'ai voulu être créatif avec ce site web, et créer un portfolio qui reflète mon univers et mon travail. J'espère que vous l'apprécierez !",AC="Un projet graphique visant à recréer un ancien FPS en utilisant des graphismes 3D simulés. Rien de tel qu'un jeu à l'ancienne comme Wolfenstein ! Réalisé en C avec une bibliothèque d'affichage appelée MinilibX.",wC="Lien vers le projet",RC="Parcours",CC={welcome:gC,about:_C,about_description:vC,projects:xC,contact_intro:MC,this_website:SC,description_transcendence:yC,description_irc:EC,description_inception:TC,description_website:bC,description_cube3d:AC,link:wC,educational:RC},LC=Mx({legacy:!1,locale:localStorage.getItem("lang")||"en",fallbackLocale:"en",messages:{en:mC,fr:CC}}),ag=Rv(tC);ag.use(LC);ag.mount("#app");
