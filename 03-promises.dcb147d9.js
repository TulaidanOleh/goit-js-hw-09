var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var i=t("iQIUW");function r(e,o){const n=Math.random()>.3;return new Promise(((t,i)=>{setTimeout((()=>{n?t({position:e,delay:o}):i({position:e,delay:o})}),o)}))}function l({position:e,delay:o}){console.log(`✅ Fulfilled promise ${e} in ${o}ms`),i.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)}function s({position:e,delay:o}){console.log(`❌ Rejected promise ${e} in ${o}ms`),i.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const o=function(e){const o={};return e.querySelectorAll("input[name]").forEach((n=>o[n.name]=e.elements[n.name].value)),o}(e.target);if(!function(e){let o=!0;return Object.values(e).forEach((e=>{if(e<0)return i.Notify.failure("Values must be > 0"),void(o=!1)})),o}(o))return;console.clear(),console.log("Form fields data:",o);let n=Number(o.delay);const t=Number(o.step),u=Number(o.amount);for(let e=1;e<=u;e+=1)r(e,n).then(l).catch(s),n+=t}));
//# sourceMappingURL=03-promises.dcb147d9.js.map