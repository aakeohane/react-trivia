(this["webpackJsonpreact-trivia"]=this["webpackJsonpreact-trivia"]||[]).push([[0],{11:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(5),i=s.n(n),r=(s(11),s.p+"static/media/quiz.d136d274.png"),o=s(0);function l(e){const[t,s,c]=[e.options,e.onStart,e.isVisible];let a="";switch(t[1]){case"9":a="general knowledge";break;case"17":a="science & nature";break;case"18":a="computers";break;case"19":a="mathematics";break;case"20":a="mythology";break;case"21":a="sports";break;case"22":a="geography";break;case"23":a="history";break;case"24":a="politics";break;case"25":a="art";break;case"26":a="celebrities";break;case"27":a="animals";break;case"28":a="vehicles";break;case"31":a="Japanese anime & manga"}return Object(o.jsxs)("div",{className:"flex-wrapper",children:[Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("img",{src:r,alt:"quizzical logo",className:"quizzical-logo"}),Object(o.jsx)("h1",{children:"Quizzical"}),Object(o.jsxs)("p",{children:[" Test your knowledge! When you start the quiz, you will have to answer ",t[2]?t[2]:5,t[1]?" ".concat(a," questions"):" random questions",". Modify quiz preferences ",Object(o.jsx)("span",{className:"modify-settings",onClick:()=>{c(!0)},children:"above"}),". Good luck!"]}),Object(o.jsx)("button",{className:"quizzical-button",onClick:s,children:" Start quiz!"})]}),Object(o.jsx)("div",{className:"footer",children:Object(o.jsxs)("footer",{children:[" Meticulously made by ",Object(o.jsx)("a",{href:"https://github.com/aakeohane/react-trivia",rel:"noreferrer",target:"_blank",children:"Aaron"})]})})]})}var b=e=>{const[t,s,c,a,n,i,r,l]=[e.isSelected,e.answered,e.isCorrect,e.fixedAnswers,e.index,e.id,e.choices,e.setChoices];return Object(o.jsx)("button",{className:"answers-btn \n          ".concat(t&&"blue","\n          ").concat(s&&"faded","\n          ").concat(t&&s&&"green","\n          ").concat(s&&c&&"green"," \n          ").concat(t&&s&&!c&&"red","\n          "),onClick:()=>(()=>{const e=[...r];e.splice(n,1,a),l(e)})(),disabled:!!s,children:a},i)},u=s(4),j="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAACzklEQVR4nO2cz45MQRSHP/8WFlZaGJ4A4RXElsFaLCeRCM8jzUbiBZgJCxbiLexYDBuzmDYjJFpjcXVIh77/Ttc5Vff3JWfVN+lzqu6tunXrS4EQQgghhBBiaBzwTmCB08At4BJwETgO/AS2gXfAc2ATeO+VYKmcAh4D36gafFlMgYdUnSUMuA5MqG/4xdgDrjnkWxS3gRntG38eM+Be8qwLYR34TvfG/7sT9CS0ZATs0L/x5/EJWEtaQeaMsWv8eTxIWkHGjIAv2HfAFDiTsA4TDja87jywRfWo922oHeCoWQV/OAzcaHitZT3/Gg43gXMGNQFwAdhfQaKriGeB6tn//V+9eZkgWat4E6yeF3XJ1H2KOAR8BY40KCwCn4FjS35PXc+Uarid/e+CpnNALvzwTqAtdR0wA16nSMSIDzW/p67nFUvu/qZoEu4WexhNwlC9Uj0FdhMk3ifuBKhnF3gCnG2YS3K0EAvAfew7YJy0gswZAR+xa/wJ1aaOaMEV7D5HX02cezFs0K8TZsDd5FkXxjrd3kYm6M434yTwiOab8mMKGfOjaSlrwE3gMtUi5gTV54Vt4C2VlrJF/YpXCCGECE+0SdgauaZOyDV1RK6pI3JNHZFr6ohcU2fkmjqS9RanhxtqHdFc00G7odbRR3MZpBtqHX1d08G5odb0dU0H54Zas3LXtDQ31Jq+rung3FDr6DMJD9INtY4urml4N9SarBdipSDX1Bm5pgGQaxoAuaYBkGsagGxc09K1FLmmQgghwrLqSVhuphNyMx2Rm+mI3ExH5GY6IjfTGbmZjmhLsAcWbmg0N9P6RugyfBbjhkY6gqxtFOGGRjsHtG1k74ZGOwe0Ldm7odmdA9qW6G5otHNA25K9G5rzJFyEGxrhHNC2kdwN1UIsAHIznZGbGQC5mQGQmxkAuZkByMbN9GbVWorcTCGEEEIIIYRY4BdEmOPRyRcVzwAAAABJRU5ErkJggg==",d=s(3);function m(e){const[t,s,a,n,i]=[e.addCustomCategories,e.options,e.quiz,e.visible,e.isVisible],[r,l]=Object(c.useState)({difficulty:s[0]||"",category:s[1]||"",number:s[2]||"5"}),[b,u]=Object(c.useState)({}),m=e=>{l({...r,[e.target.id]:e.target.value}),((e,t)=>{if("number"===e)if(t<5||t>10)u({...b,number:"Value must be between 5 and 10"});else{let e=Object(d.omit)(b,"number");u(e)}})(e.target.id,e.target.value)};return Object(o.jsxs)("div",{className:"preference-container",children:[Object(o.jsxs)("div",{className:n?"customize-container visible":"customize-container",children:[Object(o.jsx)("div",{className:"bar1"}),Object(o.jsx)("div",{className:"bar2"}),Object(o.jsx)("div",{className:"bar3"})]}),Object(o.jsx)("img",{src:j,alt:"customize icon",className:n?"custom-quizzical visible":"custom-quizzical",onClick:()=>(()=>{i((e=>!e));let e=Number(r.number);if(!e||e<5||e>10){l((e=>({...e,number:s[2]||"5"})));let e=Object(d.omit)(b,"number");u(e)}})()}),a?Object(o.jsxs)("div",{className:n?"quiz-menu on-screen":"quiz-menu",children:[Object(o.jsx)("div",{className:"yellow-blob-settings"}),Object(o.jsx)("div",{className:"blue-blob-settings"}),Object(o.jsx)("h1",{className:"quiz-menu-header",children:"Settings"}),Object(o.jsx)("div",{className:"settings-text-container",children:Object(o.jsx)("p",{className:"settings-text",children:"A bit too difficult? Reset quiz and go back to the homescreen to try again."})}),Object(o.jsx)("button",{className:"reset-button",type:"submit",onClick:()=>{e.resetGame(),i(!1)},children:"Reset"})]}):Object(o.jsxs)("form",{className:n?"quiz-menu on-screen":"quiz-menu",children:[Object(o.jsx)("h1",{className:"quiz-menu-header",children:"Settings"}),Object(o.jsx)("div",{className:"yellow-blob-settings"}),Object(o.jsx)("div",{className:"blue-blob-settings"}),Object(o.jsx)("label",{htmlFor:"difficulty",children:"Select Difficulty:"}),Object(o.jsxs)("select",{id:"difficulty",className:"input-box",value:r.difficulty,onChange:m,children:[Object(o.jsx)("option",{value:"",children:"Any Difficulty"}),Object(o.jsx)("option",{value:"easy",children:"Easy"}),Object(o.jsx)("option",{value:"medium",children:"Medium"}),Object(o.jsx)("option",{value:"hard",children:"Hard"})]}),Object(o.jsx)("label",{htmlFor:"category",children:"Select Category:"}),Object(o.jsxs)("select",{id:"category",className:"input-box",value:r.category,onChange:m,children:[Object(o.jsx)("option",{value:"",children:"Any Category"}),Object(o.jsx)("option",{value:"9",children:"General Knowledge"}),Object(o.jsx)("option",{value:"17",children:"Science & Nature"}),Object(o.jsx)("option",{value:"18",children:"Computers"}),Object(o.jsx)("option",{value:"19",children:"Mathematics"}),Object(o.jsx)("option",{value:"20",children:"Mythology"}),Object(o.jsx)("option",{value:"21",children:"Sports"}),Object(o.jsx)("option",{value:"22",children:"Geography"}),Object(o.jsx)("option",{value:"23",children:"History"}),Object(o.jsx)("option",{value:"24",children:"Politics"}),Object(o.jsx)("option",{value:"25",children:"Art"}),Object(o.jsx)("option",{value:"26",children:"Celebrities"}),Object(o.jsx)("option",{value:"27",children:"Animals"}),Object(o.jsx)("option",{value:"28",children:"Vehicles"}),Object(o.jsx)("option",{value:"31",children:"Japanese Anime & Manga"})]}),Object(o.jsx)("label",{htmlFor:"number",children:"Number of Questions:"}),Object(o.jsx)("input",{type:"number",id:"number",className:b.number?"input-box active":"input-box",value:r.number,onChange:m,min:"5",max:"10"}),b.number&&Object(o.jsx)("div",{className:"error-message",children:b.number}),Object(o.jsx)("button",{className:"submit-button",type:"submit",onClick:e=>{e.preventDefault();let s=Number(r.number);!s||s<5||s>10||(i((e=>!e)),t(r))},children:"Submit"})]})]})}var h=s(6),O=s.n(h);var x=function(){const[e,t]=Object(c.useState)(!1),[s,a]=Object(c.useState)([]),[n,i]=Object(c.useState)(!1),[r,j]=Object(c.useState)([]),[d,h]=Object(c.useState)(!1),[x,g]=Object(c.useState)(0),[p,f]=Object(c.useState)([]),[v,A]=Object(c.useState)(["","","","",""]),[y,N]=Object(c.useState)(!1),[w,C]=Object(c.useState)([]),[z,S]=Object(c.useState)({difficulty:"",category:"",number:"5"}),[k,q]=Object(c.useState)(!1),G=()=>{t(!0);const e=Object.values(z),s="".concat(e[2]),c="&category=".concat(e[1]),a="&difficulty=".concat(e[0]);let n=new Array(Number(e[2])).fill("");A(n);const i=[s,c,a].join(""),r="https://opentdb.com/api.php?amount=".concat(i);fetch(r).then((e=>e.json())).then((e=>{j(e.results),console.log("fetched")})).catch((e=>console.error(e))).finally((()=>{t((e=>!e))}))};Object(c.useEffect)((()=>{t(!0),G()}),[z]),Object(c.useEffect)((()=>{const e=[];if(Object.values(w).forEach((t=>{const[s,c,a]=[t.difficulty,t.category,t.number];e.push(s,c,a)})),0!==w.length){S(e);let t=new Array(Number(e[2])).fill("");A(t)}}),[w]),Object(c.useEffect)((()=>{const e=[],t=[];null===r||void 0===r||r.map(((s,c)=>{const a=(new DOMParser).parseFromString(s.correct_answer,"text/html").body.firstChild.textContent;t.push(a),f(t);const n=s.incorrect_answers.map((e=>({name:e,isCorrect:!1,id:Object(u.a)(),index:c}))),i={name:s.correct_answer,isCorrect:!0,id:Object(u.a)(),index:c};n.push(i),M(n);const r={question:s.question,answers:n};return e.push(r)})),a(e),console.log(e)}),[r]);const M=e=>{for(let t=e.length-1;t>0;t--){let s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}},E=s.map((e=>{const t=(new DOMParser).parseFromString(e.question,"text/html").body.firstChild.textContent,s=e.answers.map((e=>{const t=(new DOMParser).parseFromString(e.name,"text/html").body.firstChild.textContent;return Object(o.jsx)(b,{fixedAnswers:t,id:e.id,index:e.index,isCorrect:e.isCorrect,answered:y,choices:v,setChoices:A,isSelected:v[e.index]===t},e.id)}));return Object(o.jsxs)("div",{className:"question-group",children:[Object(o.jsx)("p",{className:"question",children:t}),Object(o.jsx)("div",{className:"button-container",children:s})]})})),F=()=>{i(!1),N(!1),G(),h(!1)};return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{className:"landing-container",children:[Object(o.jsx)(m,{addCustomCategories:e=>{C((t=>({...t,customization:e})))},options:z,quiz:n,visible:k,isVisible:q,resetGame:F}),Object(o.jsx)("div",{className:"yellow-blob"}),Object(o.jsx)("div",{className:"blue-blob"}),!n&&Object(o.jsx)(l,{options:z,onStart:()=>(i(!0),void q(!1)),isVisible:q}),e&&n?Object(o.jsx)(O.a,{color:"#ccccff",size:25}):Object(o.jsxs)("div",{className:"quiz-container",children:[n&&E,n&&0===s.length&&Object(o.jsx)("p",{className:"fetch-error",children:"Oops, something went wrong! Try resetting the quiz after a few seconds."}),d&&Object(o.jsx)("p",{className:"message",children:"You must answer all questions!"}),n&&!y&&!(0===s.length)&&Object(o.jsx)("button",{className:"quizzical-button",onClick:()=>((e,t)=>{g(0);for(let s=0;s<e.length;s++)e[s]===t[s]&&g((e=>e+1));t.includes("")?h(!0):(N(!0),h(!1))})(p,v),children:"Check answers"}),y&&Object(o.jsxs)("div",{className:"play-again-container",children:[Object(o.jsxs)("p",{children:["You scored ",x,"/",v.length," correct answers"]}),Object(o.jsx)("button",{className:"quizzical-button",onClick:()=>F(),children:"Play again"})]})]})]})})};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.de7539b4.chunk.js.map