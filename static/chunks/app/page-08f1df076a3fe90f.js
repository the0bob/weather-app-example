(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1892:function(e,i,t){Promise.resolve().then(t.bind(t,5721))},5721:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return v}});var a=t(7437),l=t(6691),n=t.n(l),s=t(2265),r=t(1739),o=t.n(r);let c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function d(e){if(e)return e.includes("Freezing")?"/Freezing.svg":e.includes("Sunny")&&e.includes("Rain")||e.includes("Cloudy")?"/Blah.svg":e.includes("Rain")?"/Typhoon.svg":e.includes("Hot")?"/Hell.svg":"/Sun.svg"}async function u(e){if(!e||e.length<3)return;let i=await fetch("https://geocode.xyz/".concat(e,"?json=1")),{latt:t,longt:a}=await i.json();if(isNaN(t)||isNaN(a))return;let l=await fetch("https://api.weather.gov/points/".concat(t,",").concat(a)),n=await l.json();if(!(null==n?void 0:n.properties))return;let{properties:{forecast:s,relativeLocation:{properties:r}}}=n;if(!s)return;let o=await fetch(s),c=await o.json();if(!c)return;let{properties:d}=c;if(d)return{forecast:d,location:r}}function v(){var e,i,t,l,r,v;let[h,p]=(0,s.useState)(""),[m,f]=(0,s.useState)(!1),[y,N]=(0,s.useState)(null),j=(0,s.useCallback)(o()(async e=>{f(!0);let i=await u(e);i&&N(i),f(!1)},1200),[]);async function x(e){p(e.target.value),j(e.target.value)}let g=(null==y?void 0:y.location)?"".concat(null==y?void 0:null===(e=y.location)||void 0===e?void 0:e.city,", ").concat(null==y?void 0:null===(i=y.location)||void 0===i?void 0:i.state):"",w=(null==y?void 0:null===(t=y.forecast)||void 0===t?void 0:t.updateTime)&&new Date(null==y?void 0:null===(l=y.forecast)||void 0===l?void 0:l.updateTime),F=w&&"updated ".concat(w.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})),S=null==y?void 0:null===(r=y.forecast)||void 0===r?void 0:r.periods[0],b=d(null==S?void 0:S.shortForecast),T=null==y?void 0:null===(v=y.forecast)||void 0===v?void 0:v.periods.filter(e=>(null==e?void 0:e.number)%2==0).slice(-6);return(0,a.jsxs)("main",{className:"container-fluid",children:[(0,a.jsxs)("div",{className:"header",children:[(0,a.jsx)("div",{className:"header-label",children:"My Weather"}),(0,a.jsx)("div",{className:"search-wrapper",children:(0,a.jsx)("input",{className:"search-input",value:h,onChange:x,type:"text",placeholder:"Enter Zipcode, City, or State"})})]}),(0,a.jsx)("div",{className:m?"content":"hidden",children:"Loading..."}),(0,a.jsxs)("div",{className:!S||m?"hidden":"",children:[(0,a.jsxs)("div",{className:"content",children:[(0,a.jsx)("div",{className:"icon-wrapper",children:b&&(0,a.jsx)(n(),{src:b,alt:null==S?void 0:S.shortForecast,width:180,height:180,priority:!0})}),(0,a.jsxs)("div",{className:"current-wrapper",children:[(0,a.jsx)("div",{className:"location",children:g}),(0,a.jsxs)("div",{className:"temp",children:["".concat(null==S?void 0:S.temperature),"\xb0"]}),(0,a.jsx)("div",{className:"short-forecast",children:null==S?void 0:S.shortForecast}),(0,a.jsx)("div",{className:"update-time",children:F}),(0,a.jsx)("div",{className:"detail-forecast",children:null==S?void 0:S.detailedForecast})]})]}),(0,a.jsx)("div",{className:"daily-forecast-label",children:"Daily Forecast"}),(0,a.jsx)("div",{className:"daily-forecast-content",children:null==T?void 0:T.map(e=>{let i=d(null==e?void 0:e.shortForecast),t=(null==e?void 0:e.startTime)&&new Date(null==e?void 0:e.startTime),l=t&&"".concat(c[t.getDay(t)]);return(0,a.jsxs)("div",{className:"daily-forecast-item",children:[l,i&&(0,a.jsx)(n(),{className:"daily-forecast-icon",src:i,alt:null==e?void 0:e.shortForecast,width:90,height:90,priority:!0}),(0,a.jsxs)("div",{className:"daily-forecast-temp",children:["".concat(null==e?void 0:e.temperature),"\xb0"]}),null==e?void 0:e.shortForecast]},e.number)})})]})]})}}},function(e){e.O(0,[834,971,472,744],function(){return e(e.s=1892)}),_N_E=e.O()}]);