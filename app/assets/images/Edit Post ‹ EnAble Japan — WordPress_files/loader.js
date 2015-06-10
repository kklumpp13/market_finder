(function(l){function c(){return new Date().getTime()
}function n(){return"1431530135";
return"1431530135"
}function p(E,D,C){if(E.addEventListener){E.addEventListener(D,C,false)
}else{if(E.tagName&&E.tagName.toLowerCase()==="script"&&E.onreadystatechange!==undefined){E.onreadystatechange=function(){if(E.readyState==="loaded"||E.readyState==="complete"){C()
}}}else{if(E.attachEvent){E.attachEvent("on"+D,function(){C(l.event)
})}}}}var e="plugin",x=l.location.protocol==="https:"?"https://static.zemanta.com/":"http://fstatic.zemanta.com/",B=false,a={"3x":["/core/zemanta-tests.js","/core/tests/basic-tests.js"]},A={"3x":{js:{release:"merged-wordpress3x.js",development:["/easyxdm/easyXDM.min.js","/core/jquery.js","/core/zemanta-helpers.js","/core/zemanta-gallery.js","/core/zemanta-links.js","/core/zemanta-articles.js","/core/zemanta-tags.js","/core/zemanta-preferences.js","/core/zemanta-sources.js","/core/zemanta-control.js","/core/zemanta-platform.js","/core/zemanta-transport.js","/core/zemanta.js","wordpress3x.js"]},css:{release:"/css/merged-zemanta-plugin-wordpress-zem.css",development:["/core/zemanta-widget.css","zemanta-widget-wordpress3x.css"]}}},t=l.document,s="release",y="/plugins/wordpress-zem/",i=t.createElement("fieldset"),h="3x",j=t.getElementsByTagName("head")[0],w="",g=null,q=function(J,I,D){var G=false,H=t.getElementById(J),C=H&&H.getElementsByTagName(I)||[],F=0,E=C.length;
D=" "+D+" ";
for(;F<E;F+=1){if((" "+C[F].className+" ").indexOf(D)>=0){G=true;
break}}return G
},b=function(){return l.location.href.indexOf("press-this.php")>0
},o=function(){return l.location.host.indexOf("wordpress.com")>=0
},f='<div id="zemanta-head"><h1 style="font-weight:bold;font-size:10px;text-transform:uppercase;">Powered by Zemanta</h1></div><div id="zemanta-control"><h2>Related content by <a href="http://www.zemanta.com/blog/zem-form/" target="_blank">Zemanta</a></h2></div><div id="zemanta-message">Loading...</div><div id="zemanta-articles"></div><div id="zemanta-gallery"></div><div id="zemanta-tools" style="min-height:20px;margin-top:4.181818em;"></div>',m=typeof l.ZemantaGetAPIKey==="function"&&l.ZemantaGetAPIKey();
if(e!=="plugin"&&t.getElementById("zemanta-loader")){return
}if(e==="plugin"&&m){l.ZemantaGetPluginAPIKey=function(){return m
}}function d(C){if(C.charAt(0)!=="/"){C=y+C
}return x+C.substr(1)+w
}function z(E,C){var D=function(){var F=d(E.shift()),G=t.createElement("script");
G.type="text/javascript";
G.src=F;if(E.length>0){p(G,"load",D)
}else{if(C){p(G,"load",C)
}else{if(C){}}}j.appendChild(G)
};if(typeof E==="string"){E=[E]
}D()}function v(E){var D=0,C=0,F=null;
if(typeof E==="string"){E=[E]
}for(C=E.length;
D<C;D+=1){F=t.createElement("link");
F.rel="stylesheet";
F.type="text/css";
F.href=d(E[D]);
j.appendChild(F)
}}function k(){w="?v="+n();
var C=A[h],D="";
z(C.js[s],function(){if(B){z(a[h])
}});v(C.css[s])
}var r=(function(){var E,D=3,C=t.createElement("b"),F=C.getElementsByTagName("i");
do{D+=1;C.innerHTML="<!--[if gt IE "+D+"]><i></i><![endif]-->"
}while(F[0]);
return D>4?D:E
}());function u(L){var G=false,J=false,H=null,K=0,C=100;
function D(){if(L()){G=true
}else{if(!G&&K<10){K+=1;
l.setTimeout(D,C);
C+=100}}}function I(){if(!G){G=true;
D()}}if(t.addEventListener){H=function(){t.removeEventListener("DOMContentLoaded",H,false);
I()}}else{if(t.attachEvent){H=function(){if(t.readyState==="complete"){t.detachEvent("onreadystatechange",H);
I()}}}}function E(){if(G){return
}try{t.documentElement.doScroll("left")
}catch(M){return l.setTimeout(E,1)
}I()}if(t.addEventListener){t.addEventListener("DOMContentLoaded",H,false);
l.addEventListener("load",I,false)
}else{if(t.attachEvent){t.attachEvent("onreadystatechange",H);
l.attachEvent("onload",I);
try{J=l.frameElement===null
}catch(F){}if(t.documentElement.doScroll&&J){E()
}}}if(r>7||!r){D()
}}u(function(){var F=t.getElementById("post-status-info");
if(F){var E=F.parentNode;
var D=t.createElement("div");
D.innerHTML='<div id="zemanta-sidebar"></div>';
E.insertBefore(D,F)
}var C=t.getElementById("zemanta-sidebar");
if(C&&C.parentNode){C.parentNode.className+=" zemanta-wrap";
C.innerHTML=f;
if(l.location.href.indexOf("#zemanta-tests")>=0){B=true
}k();return true
}})}(window));