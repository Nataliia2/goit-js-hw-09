const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.querySelector("body");t.addEventListener("click",(function(){o=setInterval(n,1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(o),e.disabled=!0,t.disabled=!1})),e.disabled=!0;const n=()=>d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`;let o=null;
//# sourceMappingURL=01-color-switcher.cf40e20d.js.map