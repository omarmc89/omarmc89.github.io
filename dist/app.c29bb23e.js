parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"A2T1":[function(require,module,exports) {
var e=document.querySelector("#modify-html");e.addEventListener("click",function(){var e=document.querySelector(".description"),t=document.querySelector(".description > p"),o=document.querySelector(".img-description");if(t.classList.contains("hidden"))t.classList.remove("hidden"),o.classList.remove("hidden"),window.location.reload();else{t.classList.add("hidden"),o.classList.add("hidden");var d=document.createElement("p"),i=document.createTextNode("Esta feature ha sido creada por el usuario2 y consistia en modificar el contenido html de la web al pulsar el botón correspondiente.");d.appendChild(i);var r=document.createElement("img");r.src="https://miro.medium.com/v2/resize:fit:600/0*fh4jM9d0jtXMIuEv.jpg",r.alt="feature-img",r.classList.add("img-description"),e.appendChild(d),e.appendChild(r)}});var t=document.querySelector("#modify-attr-html");t.addEventListener("click",function(){var e=document.querySelector(".img-description"),t=document.querySelector(".description > p");t.classList.contains("hidden")?window.location.reload():(e.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"),t.setAttribute("class","hidden"))});var o=document.querySelector("#modify-css");o.addEventListener("click",function(){var e=document.querySelector(".description > p"),t=document.querySelector(".img-description"),o=document.querySelector(".navbar");"darkblue"===e.style.color?window.location.reload():(e.style.backgroundColor="rgba(255, 192, 203, 0.7)",e.style.fontSize="20px",e.style.color="darkblue",e.style.borderRadius="20px",e.style.padding="20px 20px",o.style.backgroundColor="rgba(255, 192, 203, 0.7)",t.style.display="none")});var d=document.querySelector("#home-btn");d.addEventListener("click",function(){window.location.reload()});
},{}]},{},["A2T1"], null)
//# sourceMappingURL=/app.c29bb23e.js.map