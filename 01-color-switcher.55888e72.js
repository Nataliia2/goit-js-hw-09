!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");t.addEventListener("click",(function(){a=setInterval(o,1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(a),e.disabled=!0,t.disabled=!1}));var o=function(){return n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))},a=null}();
//# sourceMappingURL=01-color-switcher.55888e72.js.map