(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1892:function(e,t,a){Promise.resolve().then(a.bind(a,5721))},5721:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var i=a(7437),n=a(6691),l=a.n(n),s=a(2265),c=a(1739),r=a.n(c);let o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function d(e){if(e)return e.includes("Freezing")?"/Freezing.svg":e.includes("Sunny")&&e.includes("Rain")||e.includes("Cloudy")?"/Blah.svg":e.includes("Rain")?"/Typhoon.svg":e.includes("Hot")?"/Hell.svg":"/Sun.svg"}let u=e=>{let t=parseInt(e),a=[t%10,t%100];return[1,2,3,4].includes(a[0])&&![11,12,13,14,15,16,17,18,19].includes(a[1])?["st","nd","rd","th"][a[0]-1]:"th"};async function v(e){if(!e||e.length<3)return;let t=await fetch("https://geocode.xyz/".concat(e,"?json=1")),{latt:a,longt:i}=await t.json();if(isNaN(a)||isNaN(i))return;let n=await fetch("https://api.weather.gov/points/".concat(a,",").concat(i)),l=await n.json();if(!(null==l?void 0:l.properties))return;let{properties:{forecast:s,relativeLocation:{properties:c}}}=l;if(!s)return;let r=await fetch(s),o=await r.json();if(!o)return;let{properties:d}=o;if(d)return{forecast:d,location:c}}function h(){var e,t,a,n,c,h;let[p,m]=(0,s.useState)(""),[f,y]=(0,s.useState)(!1),[N,j]=(0,s.useState)(null),x=(0,s.useCallback)(r()(async e=>{y(!0);let t=await v(e);t&&j(t),y(!1)},1200),[]);async function g(e){m(e.target.value),x(e.target.value)}let w=(null==N?void 0:N.location)?"".concat(null==N?void 0:null===(e=N.location)||void 0===e?void 0:e.city,", ").concat(null==N?void 0:null===(t=N.location)||void 0===t?void 0:t.state):"",F=(null==N?void 0:null===(a=N.forecast)||void 0===a?void 0:a.updateTime)&&new Date(null==N?void 0:null===(n=N.forecast)||void 0===n?void 0:n.updateTime),S=F&&"updated ".concat(F.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})),T=null==N?void 0:null===(c=N.forecast)||void 0===c?void 0:c.periods[0],b=d(null==T?void 0:T.shortForecast),C=null==N?void 0:null===(h=N.forecast)||void 0===h?void 0:h.periods.filter(e=>!(null==e?void 0:e.name.includes("ight"))).slice(-6);return(0,i.jsxs)("main",{className:"container",children:[(0,i.jsxs)("div",{className:"header",children:[(0,i.jsx)("div",{className:"header-label",children:"My Weather"}),(0,i.jsx)("div",{className:"search-wrapper",children:(0,i.jsx)("input",{className:"search-input",value:p,onChange:g,type:"text",placeholder:"Enter Zipcode, City, or State"})})]}),(0,i.jsx)("div",{className:f?"content":"hidden",children:"Loading..."}),(0,i.jsxs)("div",{className:!T||f?"hidden":"",children:[(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)("div",{className:"icon-wrapper",children:b&&(0,i.jsx)(l(),{src:b,alt:null==T?void 0:T.shortForecast,width:180,height:180,priority:!0})}),(0,i.jsxs)("div",{className:"current-wrapper",children:[(0,i.jsx)("div",{className:"location",children:w}),(0,i.jsxs)("div",{className:"temp",children:["".concat(null==T?void 0:T.temperature),"\xb0"]}),(0,i.jsx)("div",{className:"short-forecast",children:null==T?void 0:T.shortForecast}),(0,i.jsx)("div",{className:"update-time",children:S}),(0,i.jsx)("div",{className:"detail-forecast",children:null==T?void 0:T.detailedForecast})]})]}),(0,i.jsx)("div",{className:"daily-forecast-label",children:"Daily Forecast"}),(0,i.jsx)("div",{className:"daily-forecast-content",children:null==C?void 0:C.map(e=>{let t=d(null==e?void 0:e.shortForecast),a=(null==e?void 0:e.startTime)&&new Date(null==e?void 0:e.startTime),n=a&&"".concat(o[a.getDay(a)]),s=a&&"".concat(a.getDate(a)),c=a&&"".concat(u(s));return(0,i.jsxs)("div",{className:"daily-forecast-item",children:[n," ",s,(0,i.jsx)("small",{children:c}),t&&(0,i.jsx)(l(),{className:"daily-forecast-icon",src:t,alt:null==e?void 0:e.shortForecast,width:90,height:90,priority:!0}),(0,i.jsxs)("div",{className:"daily-forecast-temp",children:["".concat(null==e?void 0:e.temperature),"\xb0"]}),null==e?void 0:e.shortForecast]},e.number)})})]})]})}}},function(e){e.O(0,[834,971,472,744],function(){return e(e.s=1892)}),_N_E=e.O()}]);