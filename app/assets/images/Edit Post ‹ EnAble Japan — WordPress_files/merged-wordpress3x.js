(function(ag,aR,aF,aj,aK,am){var aT=this;
var aH=Math.floor(Math.random()*10000);
var aE=Function.prototype;
var ad=/^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/;
var ac=/[\-\w]+\/\.\.\//;
var ao=/([^:])\/\//g;
var al="";var aG={};
var ah=ag.easyXDM;
var Z="easyXDM_";
var ap;var aw=false;
var aM;var aN;
function ar(c,a){var b=typeof c[a];
return b=="function"||(!!(b=="object"&&c[a]))||b=="unknown"
}function aA(b,a){return !!(typeof(b[a])=="object"&&b[a])
}function aD(a){return Object.prototype.toString.call(a)==="[object Array]"
}function aS(){var e="Shockwave Flash",a="application/x-shockwave-flash";
if(!aB(navigator.plugins)&&typeof navigator.plugins[e]=="object"){var c=navigator.plugins[e].description;
if(c&&!aB(navigator.mimeTypes)&&navigator.mimeTypes[a]&&navigator.mimeTypes[a].enabledPlugin){aM=c.match(/\d+/g)
}}if(!aM){var f;
try{f=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
aM=Array.prototype.slice.call(f.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/),1);
f=null}catch(b){}}if(!aM){return false
}var g=parseInt(aM[0],10),d=parseInt(aM[1],10);
aN=g>9&&d>0;
return true
}var az,ax;
if(ar(ag,"addEventListener")){az=function(a,c,b){a.addEventListener(c,b,false)
};ax=function(a,c,b){a.removeEventListener(c,b,false)
}}else{if(ar(ag,"attachEvent")){az=function(c,a,b){c.attachEvent("on"+a,b)
};ax=function(c,a,b){c.detachEvent("on"+a,b)
}}else{throw new Error("Browser not supported")
}}var X=false,ak=[],ai;
if("readyState" in aR){ai=aR.readyState;
X=ai=="complete"||(~navigator.userAgent.indexOf("AppleWebKit/")&&(ai=="loaded"||ai=="interactive"))
}else{X=!!aR.body
}function aC(){if(X){return
}X=true;for(var a=0;
a<ak.length;
a++){ak[a]()
}ak.length=0
}if(!X){if(ar(ag,"addEventListener")){az(aR,"DOMContentLoaded",aC)
}else{az(aR,"readystatechange",function(){if(aR.readyState=="complete"){aC()
}});if(aR.documentElement.doScroll&&ag===top){var aO=function(){if(X){return
}try{aR.documentElement.doScroll("left")
}catch(a){aj(aO,1);
return}aC()
};aO()}}az(ag,"load",aC)
}function an(a,b){if(X){a.call(b);
return}ak.push(function(){a.call(b)
})}function aI(){var a=parent;
if(al!==""){for(var c=0,b=al.split(".");
c<b.length;
c++){a=a[b[c]]
}}return a.easyXDM
}function aQ(a){ag.easyXDM=ah;
al=a;if(al){Z="easyXDM_"+al.replace(".","_")+"_"
}return aG}function av(a){return a.match(ad)[3]
}function aP(a){return a.match(ad)[4]||""
}function aL(c){var e=c.toLowerCase().match(ad);
var b=e[2],a=e[3],d=e[4]||"";
if((b=="http:"&&d==":80")||(b=="https:"&&d==":443")){d=""
}return b+"//"+a+d
}function at(b){b=b.replace(ao,"$1/");
if(!b.match(/^(http||https):\/\//)){var a=(b.substring(0,1)==="/")?"":aF.pathname;
if(a.substring(a.length-1)!=="/"){a=a.substring(0,a.lastIndexOf("/")+1)
}b=aF.protocol+"//"+aF.host+a+b
}while(ac.test(b)){b=b.replace(ac,"")
}return b}function ae(f,d){var a="",c=f.indexOf("#");
if(c!==-1){a=f.substring(c);
f=f.substring(0,c)
}var b=[];for(var e in d){if(d.hasOwnProperty(e)){b.push(e+"="+am(d[e]))
}}return f+(aw?"#":(f.indexOf("?")==-1?"?":"&"))+b.join("&")+a
}var ab=(function(d){d=d.substring(1).split("&");
var b={},a,c=d.length;
while(c--){a=d[c].split("=");
b[a[0]]=aK(a[1])
}return b}(/xdm_e=/.test(aF.search)?aF.search:aF.hash));
function aB(a){return typeof a==="undefined"
}var af=function(){var b={};
var a={a:[1,2,3]},c='{"a":[1,2,3]}';
if(typeof JSON!="undefined"&&typeof JSON.stringify==="function"&&JSON.stringify(a).replace((/\s/g),"")===c){return JSON
}if(Object.toJSON){if(Object.toJSON(a).replace((/\s/g),"")===c){b.stringify=Object.toJSON
}}if(typeof String.prototype.evalJSON==="function"){a=c.evalJSON();
if(a.a&&a.a.length===3&&a.a[2]===3){b.parse=function(d){return d.evalJSON()
}}}if(b.stringify&&b.parse){af=function(){return b
};return b}return null
};function aa(e,d,c){var a;
for(var b in d){if(d.hasOwnProperty(b)){if(b in e){a=d[b];
if(typeof a==="object"){aa(e[b],a,c)
}else{if(!c){e[b]=d[b]
}}}else{e[b]=d[b]
}}}return e
}function aU(){var a=aR.body.appendChild(aR.createElement("form")),b=a.appendChild(aR.createElement("input"));
b.name=Z+"TEST"+aH;
ap=b!==a.elements[b.name];
aR.body.removeChild(a)
}function au(c){if(aB(ap)){aU()
}var a;if(ap){a=aR.createElement('<iframe name="'+c.props.name+'"/>')
}else{a=aR.createElement("IFRAME");
a.name=c.props.name
}a.id=a.name=c.props.name;
delete c.props.name;
if(c.onLoad){az(a,"load",c.onLoad)
}if(typeof c.container=="string"){c.container=aR.getElementById(c.container)
}if(!c.container){aa(a.style,{position:"absolute",top:"-2000px",left:"0px"});
c.container=aR.body
}var b=c.props.src;
c.props.src="javascript:false";
aa(a,c.props);
a.border=a.frameBorder=0;
a.allowTransparency=true;
c.container.appendChild(a);
a.src=b;c.props.src=b;
return a}function Y(b,a){if(typeof b=="string"){b=[b]
}var c,d=b.length;
while(d--){c=b[d];
c=new RegExp(c.substr(0,1)=="^"?c:("^"+c.replace(/(\*)/g,".$1").replace(/\?/g,".")+"$"));
if(c.test(a)){return true
}}return false
}function aJ(f){var a=f.protocol,g;
f.isHost=f.isHost||aB(ab.xdm_p);
aw=f.hash||false;
if(!f.props){f.props={}
}if(!f.isHost){f.channel=ab.xdm_c.replace(/["'<>\\]/g,"");
f.secret=ab.xdm_s;
f.remote=ab.xdm_e.replace(/["'<>\\]/g,"");
a=ab.xdm_p;
if(f.acl&&!Y(f.acl,f.remote)){throw new Error("Access denied for "+f.remote)
}}else{f.remote=at(f.remote);
f.channel=f.channel||"default"+aH++;
f.secret=Math.random().toString(16).substring(2);
if(aB(a)){if(aL(aF.href)==aL(f.remote)){a="4"
}else{if(ar(ag,"postMessage")||ar(aR,"postMessage")){a="1"
}else{if(f.swf&&ar(ag,"ActiveXObject")&&aS()){a="6"
}else{if(navigator.product==="Gecko"&&"frameElement" in ag&&navigator.userAgent.indexOf("WebKit")==-1){a="5"
}else{if(f.remoteHelper){f.remoteHelper=at(f.remoteHelper);
a="2"}else{a="0"
}}}}}}}f.protocol=a;
switch(a){case"0":aa(f,{interval:100,delay:2000,useResize:true,useParent:false,usePolling:false},true);
if(f.isHost){if(!f.local){var c=aF.protocol+"//"+aF.host,h=aR.body.getElementsByTagName("img"),b;
var e=h.length;
while(e--){b=h[e];
if(b.src.substring(0,c.length)===c){f.local=b.src;
break}}if(!f.local){f.local=ag
}}var d={xdm_c:f.channel,xdm_p:0};
if(f.local===ag){f.usePolling=true;
f.useParent=true;
f.local=aF.protocol+"//"+aF.host+aF.pathname+aF.search;
d.xdm_e=f.local;
d.xdm_pa=1}else{d.xdm_e=at(f.local)
}if(f.container){f.useResize=false;
d.xdm_po=1}f.remote=ae(f.remote,d)
}else{aa(f,{channel:ab.xdm_c,remote:ab.xdm_e,useParent:!aB(ab.xdm_pa),usePolling:!aB(ab.xdm_po),useResize:f.useParent?false:f.useResize})
}g=[new aG.stack.HashTransport(f),new aG.stack.ReliableBehavior({}),new aG.stack.QueueBehavior({encode:true,maxLength:4000-f.remote.length}),new aG.stack.VerifyBehavior({initiate:f.isHost})];
break;case"1":g=[new aG.stack.PostMessageTransport(f)];
break;case"2":g=[new aG.stack.NameTransport(f),new aG.stack.QueueBehavior(),new aG.stack.VerifyBehavior({initiate:f.isHost})];
break;case"3":g=[new aG.stack.NixTransport(f)];
break;case"4":g=[new aG.stack.SameOriginTransport(f)];
break;case"5":g=[new aG.stack.FrameElementTransport(f)];
break;case"6":if(!aM){aS()
}g=[new aG.stack.FlashTransport(f)];
break}g.push(new aG.stack.QueueBehavior({lazy:f.lazy,remove:true}));
return g}function aq(c){var a,b={incoming:function(f,g){this.up.incoming(f,g)
},outgoing:function(g,f){this.down.outgoing(g,f)
},callback:function(f){this.up.callback(f)
},init:function(){this.down.init()
},destroy:function(){this.down.destroy()
}};for(var d=0,e=c.length;
d<e;d++){a=c[d];
aa(a,b,true);
if(d!==0){a.down=c[d-1]
}if(d!==e-1){a.up=c[d+1]
}}return a}function ay(a){a.up.down=a.down;
a.down.up=a.up;
a.up=a.down=null
}aa(aG,{version:"2.4.15.0",query:ab,stack:{},apply:aa,getJSONObject:af,whenReady:an,noConflict:aQ});
aG.DomHelper={on:az,un:ax,requiresJSON:function(a){if(!aA(ag,"JSON")){aR.write('<script type="text/javascript" src="'+a+'"><\/script>')
}}};(function(){var a={};
aG.Fn={set:function(c,b){a[c]=b
},get:function(c,d){var b=a[c];
if(d){delete a[c]
}return b}}
}());aG.Socket=function(b){var c=aq(aJ(b).concat([{incoming:function(d,e){b.onMessage(d,e)
},callback:function(d){if(b.onReady){b.onReady(d)
}}}])),a=aL(b.remote);
this.origin=aL(b.remote);
this.destroy=function(){c.destroy()
};this.postMessage=function(d){c.outgoing(d,a)
};c.init()};
aG.Rpc=function(c,d){if(d.local){for(var a in d.local){if(d.local.hasOwnProperty(a)){var b=d.local[a];
if(typeof b==="function"){d.local[a]={method:b}
}}}}var e=aq(aJ(c).concat([new aG.stack.RpcBehavior(this,d),{callback:function(f){if(c.onReady){c.onReady(f)
}}}]));this.origin=aL(c.remote);
this.destroy=function(){e.destroy()
};e.init()};
aG.stack.SameOriginTransport=function(d){var c,a,b,e;
return(c={outgoing:function(g,f,h){b(g);
if(h){h()}},destroy:function(){if(a){a.parentNode.removeChild(a);
a=null}},onDOMReady:function(){e=aL(d.remote);
if(d.isHost){aa(d.props,{src:ae(d.remote,{xdm_e:aF.protocol+"//"+aF.host+aF.pathname,xdm_c:d.channel,xdm_p:4}),name:Z+d.channel+"_provider"});
a=au(d);aG.Fn.set(d.channel,function(f){b=f;
aj(function(){c.up.callback(true)
},0);return function(g){c.up.incoming(g,e)
}})}else{b=aI().Fn.get(d.channel,true)(function(f){c.up.incoming(f,e)
});aj(function(){c.up.callback(true)
},0)}},init:function(){an(c.onDOMReady,c)
}})};aG.stack.FlashTransport=function(a){var h,d,i,g,c,f;
function e(j,k){aj(function(){h.up.incoming(j,g)
},0)}function b(k){var l=a.swf+"?host="+a.isHost;
var m="easyXDM_swf_"+Math.floor(Math.random()*10000);
aG.Fn.set("flash_loaded"+k.replace(/[\-.]/g,"_"),function(){aG.stack.FlashTransport[k].swf=c=f.firstChild;
var o=aG.stack.FlashTransport[k].queue;
for(var n=0;
n<o.length;
n++){o[n]()
}o.length=0
});if(a.swfContainer){f=(typeof a.swfContainer=="string")?aR.getElementById(a.swfContainer):a.swfContainer
}else{f=aR.createElement("div");
aa(f.style,aN&&a.swfNoThrottle?{height:"20px",width:"20px",position:"fixed",right:0,top:0}:{height:"1px",width:"1px",position:"absolute",overflow:"hidden",right:0,top:0});
aR.body.appendChild(f)
}var j="callback=flash_loaded"+k.replace(/[\-.]/g,"_")+"&proto="+aT.location.protocol+"&domain="+av(aT.location.href)+"&port="+aP(aT.location.href)+"&ns="+al;
f.innerHTML="<object height='20' width='20' type='application/x-shockwave-flash' id='"+m+"' data='"+l+"'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='"+l+"'></param><param name='flashvars' value='"+j+"'></param><embed type='application/x-shockwave-flash' FlashVars='"+j+"' allowScriptAccess='always' wmode='transparent' src='"+l+"' height='1' width='1'></embed></object>"
}return(h={outgoing:function(k,j,l){c.postMessage(a.channel,k.toString());
if(l){l()}},destroy:function(){try{c.destroyChannel(a.channel)
}catch(j){}c=null;
if(d){d.parentNode.removeChild(d);
d=null}},onDOMReady:function(){g=a.remote;
aG.Fn.set("flash_"+a.channel+"_init",function(){aj(function(){h.up.callback(true)
})});aG.Fn.set("flash_"+a.channel+"_onMessage",e);
a.swf=at(a.swf);
var j=av(a.swf);
var k=function(){aG.stack.FlashTransport[j].init=true;
c=aG.stack.FlashTransport[j].swf;
c.createChannel(a.channel,a.secret,aL(a.remote),a.isHost);
if(a.isHost){if(aN&&a.swfNoThrottle){aa(a.props,{position:"fixed",right:0,top:0,height:"20px",width:"20px"})
}aa(a.props,{src:ae(a.remote,{xdm_e:aL(aF.href),xdm_c:a.channel,xdm_p:6,xdm_s:a.secret}),name:Z+a.channel+"_provider"});
d=au(a)}};if(aG.stack.FlashTransport[j]&&aG.stack.FlashTransport[j].init){k()
}else{if(!aG.stack.FlashTransport[j]){aG.stack.FlashTransport[j]={queue:[k]};
b(j)}else{aG.stack.FlashTransport[j].queue.push(k)
}}},init:function(){an(h.onDOMReady,h)
}})};aG.stack.PostMessageTransport=function(e){var b,a,f,d;
function g(h){if(h.origin){return aL(h.origin)
}if(h.uri){return aL(h.uri)
}if(h.domain){return aF.protocol+"//"+h.domain
}throw"Unable to retrieve the origin of the event"
}function c(h){var i=g(h);
if(i==d&&h.data.substring(0,e.channel.length+1)==e.channel+" "){b.up.incoming(h.data.substring(e.channel.length+1),i)
}}return(b={outgoing:function(i,h,j){f.postMessage(e.channel+" "+i,h||d);
if(j){j()}},destroy:function(){ax(ag,"message",c);
if(a){f=null;
a.parentNode.removeChild(a);
a=null}},onDOMReady:function(){d=aL(e.remote);
if(e.isHost){var h=function(i){if(i.data==e.channel+"-ready"){f=("postMessage" in a.contentWindow)?a.contentWindow:a.contentWindow.document;
ax(ag,"message",h);
az(ag,"message",c);
aj(function(){b.up.callback(true)
},0)}};az(ag,"message",h);
aa(e.props,{src:ae(e.remote,{xdm_e:aL(aF.href),xdm_c:e.channel,xdm_p:1}),name:Z+e.channel+"_provider"});
a=au(e)}else{az(ag,"message",c);
f=("postMessage" in ag.parent)?ag.parent:ag.parent.document;
f.postMessage(e.channel+"-ready",d);
aj(function(){b.up.callback(true)
},0)}},init:function(){an(b.onDOMReady,b)
}})};aG.stack.FrameElementTransport=function(d){var c,a,b,e;
return(c={outgoing:function(g,f,h){b.call(this,g);
if(h){h()}},destroy:function(){if(a){a.parentNode.removeChild(a);
a=null}},onDOMReady:function(){e=aL(d.remote);
if(d.isHost){aa(d.props,{src:ae(d.remote,{xdm_e:aL(aF.href),xdm_c:d.channel,xdm_p:5}),name:Z+d.channel+"_provider"});
a=au(d);a.fn=function(f){delete a.fn;
b=f;aj(function(){c.up.callback(true)
},0);return function(g){c.up.incoming(g,e)
}}}else{if(aR.referrer&&aL(aR.referrer)!=ab.xdm_e){ag.top.location=ab.xdm_e
}b=ag.frameElement.fn(function(f){c.up.incoming(f,e)
});c.up.callback(true)
}},init:function(){an(c.onDOMReady,c)
}})};aG.stack.NameTransport=function(m){var l;
var j,f,a,h,g,c,d;
function i(n){var o=m.remoteHelper+(j?"#_3":"#_2")+m.channel;
f.contentWindow.sendMessage(n,o)
}function k(){if(j){if(++h===2||!j){l.up.callback(true)
}}else{i("ready");
l.up.callback(true)
}}function e(n){l.up.incoming(n,c)
}function b(){if(g){aj(function(){g(true)
},0)}}return(l={outgoing:function(o,n,p){g=p;
i(o)},destroy:function(){f.parentNode.removeChild(f);
f=null;if(j){a.parentNode.removeChild(a);
a=null}},onDOMReady:function(){j=m.isHost;
h=0;c=aL(m.remote);
m.local=at(m.local);
if(j){aG.Fn.set(m.channel,function(o){if(j&&o==="ready"){aG.Fn.set(m.channel,e);
k()}});d=ae(m.remote,{xdm_e:m.local,xdm_c:m.channel,xdm_p:2});
aa(m.props,{src:d+"#"+m.channel,name:Z+m.channel+"_provider"});
a=au(m)}else{m.remoteHelper=m.remote;
aG.Fn.set(m.channel,e)
}var n=function(){var p=f||this;
ax(p,"load",n);
aG.Fn.set(m.channel+"_load",b);
(function o(){if(typeof p.contentWindow.sendMessage=="function"){k()
}else{aj(o,50)
}}())};f=au({props:{src:m.local+"#_4"+m.channel},onLoad:n})
},init:function(){an(l.onDOMReady,l)
}})};aG.stack.HashTransport=function(b){var o;
var j=this,l,a,d,n,e,p,f;
var k,c;function g(q){if(!f){return
}var r=b.remote+"#"+(e++)+"_"+q;
((l||!k)?f.contentWindow:f).location=r
}function m(q){n=q;
o.up.incoming(n.substring(n.indexOf("_")+1),c)
}function h(){if(!p){return
}var s=p.location.href,q="",r=s.indexOf("#");
if(r!=-1){q=s.substring(r)
}if(q&&q!=n){m(q)
}}function i(){a=setInterval(h,d)
}return(o={outgoing:function(r,q){g(r)
},destroy:function(){ag.clearInterval(a);
if(l||!k){f.parentNode.removeChild(f)
}f=null},onDOMReady:function(){l=b.isHost;
d=b.interval;
n="#"+b.channel;
e=0;k=b.useParent;
c=aL(b.remote);
if(l){aa(b.props,{src:b.remote,name:Z+b.channel+"_provider"});
if(k){b.onLoad=function(){p=ag;
i();o.up.callback(true)
}}else{var q=0,s=b.delay/50;
(function r(){if(++q>s){throw new Error("Unable to reference listenerwindow")
}try{p=f.contentWindow.frames[Z+b.channel+"_consumer"]
}catch(t){}if(p){i();
o.up.callback(true)
}else{aj(r,50)
}}())}f=au(b)
}else{p=ag;
i();if(k){f=parent;
o.up.callback(true)
}else{aa(b,{props:{src:b.remote+"#"+b.channel+new Date(),name:Z+b.channel+"_consumer"},onLoad:function(){o.up.callback(true)
}});f=au(b)
}}},init:function(){an(o.onDOMReady,o)
}})};aG.stack.ReliableBehavior=function(e){var d,a;
var b=0,f=0,c="";
return(d={incoming:function(h,j){var i=h.indexOf("_"),g=h.substring(0,i).split(",");
h=h.substring(i+1);
if(g[0]==b){c="";
if(a){a(true)
}}if(h.length>0){d.down.outgoing(g[1]+","+b+"_"+c,j);
if(f!=g[1]){f=g[1];
d.up.incoming(h,j)
}}},outgoing:function(g,i,h){c=g;
a=h;d.down.outgoing(f+","+(++b)+"_"+g,i)
}})};aG.stack.QueueBehavior=function(b){var i,h=[],e=true,a="",f,d=0,c=false,j=false;
function g(){if(b.remove&&h.length===0){ay(i);
return}if(e||h.length===0||f){return
}e=true;var k=h.shift();
i.down.outgoing(k.data,k.origin,function(l){e=false;
if(k.callback){aj(function(){k.callback(l)
},0)}g()})}return(i={init:function(){if(aB(b)){b={}
}if(b.maxLength){d=b.maxLength;
j=true}if(b.lazy){c=true
}else{i.down.init()
}},callback:function(k){e=false;
var l=i.up;
g();l.callback(k)
},incoming:function(m,k){if(j){var n=m.indexOf("_"),l=parseInt(m.substring(0,n),10);
a+=m.substring(n+1);
if(l===0){if(b.encode){a=aK(a)
}i.up.incoming(a,k);
a=""}}else{i.up.incoming(m,k)
}},outgoing:function(m,k,n){if(b.encode){m=am(m)
}var l=[],o;
if(j){while(m.length!==0){o=m.substring(0,d);
m=m.substring(o.length);
l.push(o)}while((o=l.shift())){h.push({data:l.length+"_"+o,origin:k,callback:l.length===0?n:null})
}}else{h.push({data:m,origin:k,callback:n})
}if(c){i.down.init()
}else{g()}},destroy:function(){f=true;
i.down.destroy()
}})};aG.stack.VerifyBehavior=function(b){var a,d,e,c=false;
function f(){d=Math.random().toString(16).substring(2);
a.down.outgoing(d)
}return(a={incoming:function(g,i){var h=g.indexOf("_");
if(h===-1){if(g===d){a.up.callback(true)
}else{if(!e){e=g;
if(!b.initiate){f()
}a.down.outgoing(g)
}}}else{if(g.substring(0,h)===e){a.up.incoming(g.substring(h+1),i)
}}},outgoing:function(g,i,h){a.down.outgoing(d+"_"+g,i,h)
},callback:function(g){if(b.initiate){f()
}}})};aG.stack.RpcBehavior=function(g,c){var a,e=c.serializer||af();
var f=0,h={};
function d(j){j.jsonrpc="2.0";
a.down.outgoing(e.stringify(j))
}function i(l,j){var k=Array.prototype.slice;
return function(){var o=arguments.length,m,n={method:j};
if(o>0&&typeof arguments[o-1]==="function"){if(o>1&&typeof arguments[o-2]==="function"){m={success:arguments[o-2],error:arguments[o-1]};
n.params=k.call(arguments,0,o-2)
}else{m={success:arguments[o-1]};
n.params=k.call(arguments,0,o-1)
}h[""+(++f)]=m;
n.id=f}else{n.params=k.call(arguments,0)
}if(l.namedParams&&n.params.length===1){n.params=n.params[0]
}d(n)}}function b(m,n,j,o){if(!j){if(n){d({id:n,error:{code:-32601,message:"Procedure not found."}})
}return}var p,k;
if(n){p=function(r){p=aE;
d({id:n,result:r})
};k=function(t,s){k=aE;
var r={id:n,error:{code:-32099,message:t}};
if(s){r.error.data=s
}d(r)}}else{p=k=aE
}if(!aD(o)){o=[o]
}try{var l=j.method.apply(j.scope,o.concat([p,k]));
if(!aB(l)){p(l)
}}catch(q){k(q.message)
}}return(a={incoming:function(k,l){var j=e.parse(k);
if(j.method){if(c.handle){c.handle(j,d)
}else{b(j.method,j.id,c.local[j.method],j.params)
}}else{var m=h[j.id];
if(j.error){if(m.error){m.error(j.error)
}}else{if(m.success){m.success(j.result)
}}delete h[j.id]
}},init:function(){if(c.remote){for(var j in c.remote){if(c.remote.hasOwnProperty(j)){g[j]=i(c.remote[j],j)
}}}a.down.init()
},destroy:function(){for(var j in c.remote){if(c.remote.hasOwnProperty(j)&&g.hasOwnProperty(j)){delete g[j]
}}a.down.destroy()
}})};aT.easyXDM=aG
})(window,document,location,window.setTimeout,decodeURIComponent,encodeURIComponent);
/*!
 * jQuery JavaScript Library v1.7.1
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Mon Nov 21 21:11:03 2011 -0500
 * 
 * THIS IS NOT STOCK JQUERY!!!!
 */
(function(bb,L){if(bb.zQuery){return
}var av=bb.document,bu=bb.navigator,bl=bb.location;
var b=(function(){var bF=function(b0,b1){return new bF.fn.init(b0,b1,bD)
},bU=bb.jQuery,bH=bb.$,bD,bY=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,bM=/\S/,bI=/^\s+/,bE=/\s+$/,bA=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,bN=/^[\],:{}\s]*$/,bW=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,bP=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,bJ=/(?:^|:|,)(?:\s*\[)+/g,by=/(webkit)[ \/]([\w.]+)/,bR=/(opera)(?:.*version)?[ \/]([\w.]+)/,bQ=/(msie) ([\w.]+)/,bS=/(mozilla)(?:.*? rv:([\w.]+))?/,bB=/-([a-z]|[0-9])/ig,bZ=/^-ms-/,bT=function(b0,b1){return(b1+"").toUpperCase()
},bX=bu.userAgent,bV,bC,e,bL=Object.prototype.toString,bG=Object.prototype.hasOwnProperty,bz=Array.prototype.push,bK=Array.prototype.slice,bO=String.prototype.trim,bv=Array.prototype.indexOf,bx={};
bF.fn=bF.prototype={zemanta:true,constructor:bF,init:function(b0,b4,b3){var b2,b5,b1,b6;
if(!b0){return this
}if(b0.nodeType){this.context=this[0]=b0;
this.length=1;
return this
}if(b0==="body"&&!b4&&av.body){this.context=av;
this[0]=av.body;
this.selector=b0;
this.length=1;
return this
}if(typeof b0==="string"){if(b0.charAt(0)==="<"&&b0.charAt(b0.length-1)===">"&&b0.length>=3){b2=[null,b0,null]
}else{b2=bY.exec(b0)
}if(b2&&(b2[1]||!b4)){if(b2[1]){b4=b4 instanceof bF?b4[0]:b4;
b6=(b4?b4.ownerDocument||b4:av);
b1=bA.exec(b0);
if(b1){if(bF.isPlainObject(b4)){b0=[av.createElement(b1[1])];
bF.fn.attr.call(b0,b4,true)
}else{b0=[b6.createElement(b1[1])]
}}else{b1=bF.buildFragment([b2[1]],[b6]);
b0=(b1.cacheable?bF.clone(b1.fragment):b1.fragment).childNodes
}return bF.merge(this,b0)
}else{b5=av.getElementById(b2[2]);
if(b5&&b5.parentNode){if(b5.id!==b2[2]){return b3.find(b0)
}this.length=1;
this[0]=b5}this.context=av;
this.selector=b0;
return this
}}else{if(!b4||b4.jquery){return(b4||b3).find(b0)
}else{return this.constructor(b4).find(b0)
}}}else{if(bF.isFunction(b0)){return b3.ready(b0)
}}if(b0.selector!==L){this.selector=b0.selector;
this.context=b0.context
}return bF.makeArray(b0,this)
},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length
},toArray:function(){return bK.call(this,0)
},get:function(b0){return b0==null?this.toArray():(b0<0?this[this.length+b0]:this[b0])
},pushStack:function(b1,b3,b0){var b2=this.constructor();
if(bF.isArray(b1)){bz.apply(b2,b1)
}else{bF.merge(b2,b1)
}b2.prevObject=this;
b2.context=this.context;
if(b3==="find"){b2.selector=this.selector+(this.selector?" ":"")+b0
}else{if(b3){b2.selector=this.selector+"."+b3+"("+b0+")"
}}return b2
},each:function(b1,b0){return bF.each(this,b1,b0)
},ready:function(b0){bF.bindReady();
bC.add(b0);
return this
},eq:function(b0){b0=+b0;
return b0===-1?this.slice(b0):this.slice(b0,b0+1)
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},slice:function(){return this.pushStack(bK.apply(this,arguments),"slice",bK.call(arguments).join(","))
},map:function(b0){return this.pushStack(bF.map(this,function(b2,b1){return b0.call(b2,b1,b2)
}))},end:function(){return this.prevObject||this.constructor(null)
},push:bz,sort:[].sort,splice:[].splice};
bF.fn.init.prototype=bF.fn;
bF.extend=bF.fn.extend=function(){var b9,b2,b0,b1,b6,b7,b5=arguments[0]||{},b4=1,b3=arguments.length,b8=false;
if(typeof b5==="boolean"){b8=b5;
b5=arguments[1]||{};
b4=2}if(typeof b5!=="object"&&!bF.isFunction(b5)){b5={}
}if(b3===b4){b5=this;
--b4}for(;b4<b3;
b4++){if((b9=arguments[b4])!=null){for(b2 in b9){b0=b5[b2];
b1=b9[b2];if(b5===b1){continue
}if(b8&&b1&&(bF.isPlainObject(b1)||(b6=bF.isArray(b1)))){if(b6){b6=false;
b7=b0&&bF.isArray(b0)?b0:[]
}else{b7=b0&&bF.isPlainObject(b0)?b0:{}
}b5[b2]=bF.extend(b8,b7,b1)
}else{if(b1!==L){b5[b2]=b1
}}}}}return b5
};bF.extend({noConflict:function(b0){if(bb.$===bF){bb.$=bH
}if(b0&&bb.jQuery===bF){bb.jQuery=bU
}return bF},isReady:false,readyWait:1,holdReady:function(b0){if(b0){bF.readyWait++
}else{bF.ready(true)
}},ready:function(b0){if((b0===true&&!--bF.readyWait)||(b0!==true&&!bF.isReady)){if(!av.body){return setTimeout(bF.ready,1)
}bF.isReady=true;
if(b0!==true&&--bF.readyWait>0){return
}bC.fireWith(av,[bF]);
if(bF.fn.trigger){bF(av).trigger("ready").off("ready")
}}},bindReady:function(){if(bC){return
}bC=bF.Callbacks("once memory");
if(av.readyState==="complete"){return setTimeout(bF.ready,1)
}if(av.addEventListener){av.addEventListener("DOMContentLoaded",e,false);
bb.addEventListener("load",bF.ready,false)
}else{if(av.attachEvent){av.attachEvent("onreadystatechange",e);
bb.attachEvent("onload",bF.ready);
var b0=false;
try{b0=bb.frameElement==null
}catch(b1){}if(av.documentElement.doScroll&&b0){bw()
}}}},isFunction:function(b0){return bF.type(b0)==="function"
},isArray:Array.isArray||function(b0){return bF.type(b0)==="array"
},isWindow:function(b0){return b0&&typeof b0==="object"&&"setInterval" in b0
},isNumeric:function(b0){return !isNaN(parseFloat(b0))&&isFinite(b0)
},type:function(b0){return b0==null?String(b0):bx[bL.call(b0)]||"object"
},isPlainObject:function(b2){if(!b2||bF.type(b2)!=="object"||b2.nodeType||bF.isWindow(b2)){return false
}try{if(b2.constructor&&!bG.call(b2,"constructor")&&!bG.call(b2.constructor.prototype,"isPrototypeOf")){return false
}}catch(b1){return false
}var b0;for(b0 in b2){}return b0===L||bG.call(b2,b0)
},isEmptyObject:function(b1){for(var b0 in b1){return false
}return true
},error:function(b0){throw new Error(b0)
},parseJSON:function(b0){if(typeof b0!=="string"||!b0){return null
}b0=bF.trim(b0);
if(bb.JSON&&bb.JSON.parse){return bb.JSON.parse(b0)
}if(bN.test(b0.replace(bW,"@").replace(bP,"]").replace(bJ,""))){return(new Function("return "+b0))()
}bF.error("Invalid JSON: "+b0)
},parseXML:function(b2){var b0,b1;
try{if(bb.DOMParser){b1=new DOMParser();
b0=b1.parseFromString(b2,"text/xml")
}else{b0=new ActiveXObject("Microsoft.XMLDOM");
b0.async="false";
b0.loadXML(b2)
}}catch(b3){b0=L
}if(!b0||!b0.documentElement||b0.getElementsByTagName("parsererror").length){bF.error("Invalid XML: "+b2)
}return b0},noop:function(){},globalEval:function(b0){if(b0&&bM.test(b0)){(bb.execScript||function(b1){bb["eval"].call(bb,b1)
})(b0)}},camelCase:function(b0){return b0.replace(bZ,"ms-").replace(bB,bT)
},nodeName:function(b1,b0){return b1.nodeName&&b1.nodeName.toUpperCase()===b0.toUpperCase()
},each:function(b3,b6,b2){var b1,b4=0,b5=b3.length,b0=b5===L||bF.isFunction(b3);
if(b2){if(b0){for(b1 in b3){if(b6.apply(b3[b1],b2)===false){break
}}}else{for(;
b4<b5;){if(b6.apply(b3[b4++],b2)===false){break
}}}}else{if(b0){for(b1 in b3){if(b6.call(b3[b1],b1,b3[b1])===false){break
}}}else{for(;
b4<b5;){if(b6.call(b3[b4],b4,b3[b4++])===false){break
}}}}return b3
},trim:bO?function(b0){return b0==null?"":bO.call(b0)
}:function(b0){return b0==null?"":b0.toString().replace(bI,"").replace(bE,"")
},makeArray:function(b3,b1){var b0=b1||[];
if(b3!=null){var b2=bF.type(b3);
if(b3.length==null||b2==="string"||b2==="function"||b2==="regexp"||bF.isWindow(b3)){bz.call(b0,b3)
}else{bF.merge(b0,b3)
}}return b0
},inArray:function(b2,b3,b1){var b0;
if(b3){if(bv){return bv.call(b3,b2,b1)
}b0=b3.length;
b1=b1?b1<0?Math.max(0,b0+b1):b1:0;
for(;b1<b0;
b1++){if(b1 in b3&&b3[b1]===b2){return b1
}}}return -1
},merge:function(b4,b2){var b3=b4.length,b1=0;
if(typeof b2.length==="number"){for(var b0=b2.length;
b1<b0;b1++){b4[b3++]=b2[b1]
}}else{while(b2[b1]!==L){b4[b3++]=b2[b1++]
}}b4.length=b3;
return b4},grep:function(b1,b6,b0){var b2=[],b5;
b0=!!b0;for(var b3=0,b4=b1.length;
b3<b4;b3++){b5=!!b6(b1[b3],b3);
if(b0!==b5){b2.push(b1[b3])
}}return b2
},map:function(b0,b7,b8){var b5,b6,b4=[],b2=0,b1=b0.length,b3=b0 instanceof bF||b1!==L&&typeof b1==="number"&&((b1>0&&b0[0]&&b0[b1-1])||b1===0||bF.isArray(b0));
if(b3){for(;
b2<b1;b2++){b5=b7(b0[b2],b2,b8);
if(b5!=null){b4[b4.length]=b5
}}}else{for(b6 in b0){b5=b7(b0[b6],b6,b8);
if(b5!=null){b4[b4.length]=b5
}}}return b4.concat.apply([],b4)
},guid:1,proxy:function(b4,b3){if(typeof b3==="string"){var b2=b4[b3];
b3=b4;b4=b2
}if(!bF.isFunction(b4)){return L
}var b0=bK.call(arguments,2),b1=function(){return b4.apply(b3,b0.concat(bK.call(arguments)))
};b1.guid=b4.guid=b4.guid||b1.guid||bF.guid++;
return b1},access:function(b0,b8,b6,b2,b5,b7){var b1=b0.length;
if(typeof b8==="object"){for(var b3 in b8){bF.access(b0,b3,b8[b3],b2,b5,b6)
}return b0}if(b6!==L){b2=!b7&&b2&&bF.isFunction(b6);
for(var b4=0;
b4<b1;b4++){b5(b0[b4],b8,b2?b6.call(b0[b4],b4,b5(b0[b4],b8)):b6,b7)
}return b0}return b1?b5(b0[0],b8):L
},now:function(){return(new Date()).getTime()
},uaMatch:function(b1){b1=b1.toLowerCase();
var b0=by.exec(b1)||bR.exec(b1)||bQ.exec(b1)||b1.indexOf("compatible")<0&&bS.exec(b1)||[];
return{browser:b0[1]||"",version:b0[2]||"0"}
},sub:function(){function b0(b3,b4){return new b0.fn.init(b3,b4)
}bF.extend(true,b0,this);
b0.superclass=this;
b0.fn=b0.prototype=this();
b0.fn.constructor=b0;
b0.sub=this.sub;
b0.fn.init=function b2(b3,b4){if(b4&&b4 instanceof bF&&!(b4 instanceof b0)){b4=b0(b4)
}return bF.fn.init.call(this,b3,b4,b1)
};b0.fn.init.prototype=b0.fn;
var b1=b0(av);
return b0},browser:{}});
bF.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(b1,b0){bx["[object "+b0+"]"]=b0.toLowerCase()
});bV=bF.uaMatch(bX);
if(bV.browser){bF.browser[bV.browser]=true;
bF.browser.version=bV.version
}if(bF.browser.webkit){bF.browser.safari=true
}if(bM.test("\xA0")){bI=/^[\s\xA0]+/;
bE=/[\s\xA0]+$/
}bD=bF(av);
if(av.addEventListener){e=function(){av.removeEventListener("DOMContentLoaded",e,false);
bF.ready()}
}else{if(av.attachEvent){e=function(){if(av.readyState==="complete"){av.detachEvent("onreadystatechange",e);
bF.ready()}}
}}function bw(){if(bF.isReady){return
}try{av.documentElement.doScroll("left")
}catch(b0){setTimeout(bw,1);
return}bF.ready()
}return bF})();
var a2={};function X(e){var bv=a2[e]={},bw,bx;
e=e.split(/\s+/);
for(bw=0,bx=e.length;
bw<bx;bw++){bv[e[bw]]=true
}return bv}b.Callbacks=function(bw){bw=bw?(a2[bw]||X(bw)):{};
var bB=[],bC=[],bx,by,bv,bz,bA,bE=function(bF){var bG,bJ,bI,bH,bK;
for(bG=0,bJ=bF.length;
bG<bJ;bG++){bI=bF[bG];
bH=b.type(bI);
if(bH==="array"){bE(bI)
}else{if(bH==="function"){if(!bw.unique||!bD.has(bI)){bB.push(bI)
}}}}},e=function(bG,bF){bF=bF||[];
bx=!bw.memory||[bG,bF];
by=true;bA=bv||0;
bv=0;bz=bB.length;
for(;bB&&bA<bz;
bA++){if(bB[bA].apply(bG,bF)===false&&bw.stopOnFalse){bx=true;
break}}by=false;
if(bB){if(!bw.once){if(bC&&bC.length){bx=bC.shift();
bD.fireWith(bx[0],bx[1])
}}else{if(bx===true){bD.disable()
}else{bB=[]
}}}},bD={add:function(){if(bB){var bF=bB.length;
bE(arguments);
if(by){bz=bB.length
}else{if(bx&&bx!==true){bv=bF;
e(bx[0],bx[1])
}}}return this
},remove:function(){if(bB){var bF=arguments,bH=0,bI=bF.length;
for(;bH<bI;
bH++){for(var bG=0;
bG<bB.length;
bG++){if(bF[bH]===bB[bG]){if(by){if(bG<=bz){bz--;
if(bG<=bA){bA--
}}}bB.splice(bG--,1);
if(bw.unique){break
}}}}}return this
},has:function(bG){if(bB){var bF=0,bH=bB.length;
for(;bF<bH;
bF++){if(bG===bB[bF]){return true
}}}return false
},empty:function(){bB=[];
return this
},disable:function(){bB=bC=bx=L;
return this
},disabled:function(){return !bB
},lock:function(){bC=L;
if(!bx||bx===true){bD.disable()
}return this
},locked:function(){return !bC
},fireWith:function(bG,bF){if(bC){if(by){if(!bw.once){bC.push([bG,bF])
}}else{if(!(bw.once&&bx)){e(bG,bF)
}}}return this
},fire:function(){bD.fireWith(this,arguments);
return this
},fired:function(){return !!bx
}};return bD
};var aJ=[].slice;
b.extend({Deferred:function(by){var bx=b.Callbacks("once memory"),bw=b.Callbacks("once memory"),bv=b.Callbacks("memory"),e="pending",bA={resolve:bx,reject:bw,notify:bv},bC={done:bx.add,fail:bw.add,progress:bv.add,state:function(){return e
},isResolved:bx.fired,isRejected:bw.fired,then:function(bE,bD,bF){bB.done(bE).fail(bD).progress(bF);
return this
},always:function(){bB.done.apply(bB,arguments).fail.apply(bB,arguments);
return this
},pipe:function(bF,bE,bD){return b.Deferred(function(bG){b.each({done:[bF,"resolve"],fail:[bE,"reject"],progress:[bD,"notify"]},function(bI,bL){var bH=bL[0],bK=bL[1],bJ;
if(b.isFunction(bH)){bB[bI](function(){bJ=bH.apply(this,arguments);
if(bJ&&b.isFunction(bJ.promise)){bJ.promise().then(bG.resolve,bG.reject,bG.notify)
}else{bG[bK+"With"](this===bB?bG:this,[bJ])
}})}else{bB[bI](bG[bK])
}})}).promise()
},promise:function(bE){if(bE==null){bE=bC
}else{for(var bD in bC){bE[bD]=bC[bD]
}}return bE
}},bB=bC.promise({}),bz;
for(bz in bA){bB[bz]=bA[bz].fire;
bB[bz+"With"]=bA[bz].fireWith
}bB.done(function(){e="resolved"
},bw.disable,bv.lock).fail(function(){e="rejected"
},bx.disable,bv.lock);
if(by){by.call(bB,bB)
}return bB},when:function(bA){var bx=aJ.call(arguments,0),bv=0,e=bx.length,bB=new Array(e),bw=e,by=e,bC=e<=1&&bA&&b.isFunction(bA.promise)?bA:b.Deferred(),bE=bC.promise();
function bD(bF){return function(bG){bx[bF]=arguments.length>1?aJ.call(arguments,0):bG;
if(!(--bw)){bC.resolveWith(bC,bx)
}}}function bz(bF){return function(bG){bB[bF]=arguments.length>1?aJ.call(arguments,0):bG;
bC.notifyWith(bE,bB)
}}if(e>1){for(;
bv<e;bv++){if(bx[bv]&&bx[bv].promise&&b.isFunction(bx[bv].promise)){bx[bv].promise().then(bD(bv),bC.reject,bz(bv))
}else{--bw}}if(!bw){bC.resolveWith(bC,bx)
}}else{if(bC!==bA){bC.resolveWith(bC,e?[bA]:[])
}}return bE
}});b.support=(function(){var bJ,bI,bF,bG,bx,bE,bA,bD,bz,bK,bB,by,bw,bv=av.createElement("div"),bH=av.documentElement;
bv.setAttribute("className","t");
bv.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
bI=bv.getElementsByTagName("*");
bF=bv.getElementsByTagName("a")[0];
if(!bI||!bI.length||!bF){return{}
}bG=av.createElement("select");
bx=bG.appendChild(av.createElement("option"));
bE=bv.getElementsByTagName("input")[0];
bJ={leadingWhitespace:(bv.firstChild.nodeType===3),tbody:!bv.getElementsByTagName("tbody").length,htmlSerialize:!!bv.getElementsByTagName("link").length,style:/top/.test(bF.getAttribute("style")),hrefNormalized:(bF.getAttribute("href")==="/a"),opacity:/^0.55/.test(bF.style.opacity),cssFloat:!!bF.style.cssFloat,checkOn:(bE.value==="on"),optSelected:bx.selected,getSetAttribute:bv.className!=="t",enctype:!!av.createElement("form").enctype,html5Clone:av.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true};
bE.checked=true;
bJ.noCloneChecked=bE.cloneNode(true).checked;
bG.disabled=true;
bJ.optDisabled=!bx.disabled;
try{delete bv.test
}catch(bC){bJ.deleteExpando=false
}if(!bv.addEventListener&&bv.attachEvent&&bv.fireEvent){bv.attachEvent("onclick",function(){bJ.noCloneEvent=false
});bv.cloneNode(true).fireEvent("onclick")
}bE=av.createElement("input");
bE.value="t";
bE.setAttribute("type","radio");
bJ.radioValue=bE.value==="t";
bE.setAttribute("checked","checked");
bv.appendChild(bE);
bD=av.createDocumentFragment();
bD.appendChild(bv.lastChild);
bJ.checkClone=bD.cloneNode(true).cloneNode(true).lastChild.checked;
bJ.appendChecked=bE.checked;
bD.removeChild(bE);
bD.appendChild(bv);
bv.innerHTML="";
if(bb.getComputedStyle){bA=av.createElement("div");
bA.style.width="0";
bA.style.marginRight="0";
bv.style.width="2px";
bv.appendChild(bA);
bJ.reliableMarginRight=(parseInt((bb.getComputedStyle(bA,null)||{marginRight:0}).marginRight,10)||0)===0
}if(bv.attachEvent){for(by in {submit:1,change:1,focusin:1}){bB="on"+by;
bw=(bB in bv);
if(!bw){bv.setAttribute(bB,"return;");
bw=(typeof bv[bB]==="function")
}bJ[by+"Bubbles"]=bw
}}bD.removeChild(bv);
bD=bG=bx=bA=bv=bE=null;
b(function(){var bM,bU,bV,bT,bN,bO,bL,bS,bR,e,bP,bQ=av.getElementsByTagName("body")[0];
if(!bQ){return
}bL=1;bS="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;";
bR="visibility:hidden;border:0;";
e="style='"+bS+"border:5px solid #000;padding:0;'";
bP="<div "+e+"><div></div></div><table "+e+" cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
bM=av.createElement("div");
bM.style.cssText=bR+"width:0;height:0;position:static;top:0;margin-top:"+bL+"px";
bQ.insertBefore(bM,bQ.firstChild);
bv=av.createElement("div");
bM.appendChild(bv);
bv.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
bz=bv.getElementsByTagName("td");
bw=(bz[0].offsetHeight===0);
bz[0].style.display="";
bz[1].style.display="none";
bJ.reliableHiddenOffsets=bw&&(bz[0].offsetHeight===0);
bv.innerHTML="";
bv.style.width=bv.style.paddingLeft="1px";
b.boxModel=bJ.boxModel=bv.offsetWidth===2;
if(typeof bv.style.zoom!=="undefined"){bv.style.display="inline";
bv.style.zoom=1;
bJ.inlineBlockNeedsLayout=(bv.offsetWidth===2);
bv.style.display="";
bv.innerHTML="<div style='width:4px;'></div>";
bJ.shrinkWrapBlocks=(bv.offsetWidth!==2)
}bv.style.cssText=bS+bR;
bv.innerHTML=bP;
bU=bv.firstChild;
bV=bU.firstChild;
bN=bU.nextSibling.firstChild.firstChild;
bO={doesNotAddBorder:(bV.offsetTop!==5),doesAddBorderForTableAndCells:(bN.offsetTop===5)};
bV.style.position="fixed";
bV.style.top="20px";
bO.fixedPosition=(bV.offsetTop===20||bV.offsetTop===15);
bV.style.position=bV.style.top="";
bU.style.overflow="hidden";
bU.style.position="relative";
bO.subtractsBorderForOverflowNotVisible=(bV.offsetTop===-5);
bO.doesNotIncludeMarginInBodyOffset=(bQ.offsetTop!==bL);
bQ.removeChild(bM);
bv=bM=null;
b.extend(bJ,bO)
});return bJ
})();var aS=/^(?:\{.*\}|\[.*\])$/,aA=/([A-Z])/g;
b.extend({cache:{},uuid:0,expando:"jQuery"+(b.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(e){e=e.nodeType?b.cache[e[b.expando]]:e[b.expando];
return !!e&&!S(e)
},data:function(bx,bv,bz,by){if(!b.acceptData(bx)){return
}var bG,bA,bD,bE=b.expando,bC=typeof bv==="string",bF=bx.nodeType,e=bF?b.cache:bx,bw=bF?bx[bE]:bx[bE]&&bE,bB=bv==="events";
if((!bw||!e[bw]||(!bB&&!by&&!e[bw].data))&&bC&&bz===L){return
}if(!bw){if(bF){bx[bE]=bw=++b.uuid
}else{bw=bE
}}if(!e[bw]){e[bw]={};
if(!bF){e[bw].toJSON=b.noop
}}if(typeof bv==="object"||typeof bv==="function"){if(by){e[bw]=b.extend(e[bw],bv)
}else{e[bw].data=b.extend(e[bw].data,bv)
}}bG=bA=e[bw];
if(!by){if(!bA.data){bA.data={}
}bA=bA.data
}if(bz!==L){bA[b.camelCase(bv)]=bz
}if(bB&&!bA[bv]){return bG.events
}if(bC){bD=bA[bv];
if(bD==null){bD=bA[b.camelCase(bv)]
}}else{bD=bA
}return bD},removeData:function(bx,bv,by){if(!b.acceptData(bx)){return
}var bB,bA,bz,bC=b.expando,bD=bx.nodeType,e=bD?b.cache:bx,bw=bD?bx[bC]:bC;
if(!e[bw]){return
}if(bv){bB=by?e[bw]:e[bw].data;
if(bB){if(!b.isArray(bv)){if(bv in bB){bv=[bv]
}else{bv=b.camelCase(bv);
if(bv in bB){bv=[bv]
}else{bv=bv.split(" ")
}}}for(bA=0,bz=bv.length;
bA<bz;bA++){delete bB[bv[bA]]
}if(!(by?S:b.isEmptyObject)(bB)){return
}}}if(!by){delete e[bw].data;
if(!S(e[bw])){return
}}if(b.support.deleteExpando||!e.setInterval){delete e[bw]
}else{e[bw]=null
}if(bD){if(b.support.deleteExpando){delete bx[bC]
}else{if(bx.removeAttribute){bx.removeAttribute(bC)
}else{bx[bC]=null
}}}},_data:function(bv,e,bw){return b.data(bv,e,bw,true)
},acceptData:function(bv){if(bv.nodeName){var e=b.noData[bv.nodeName.toLowerCase()];
if(e){return !(e===true||bv.getAttribute("classid")!==e)
}}return true
}});b.fn.extend({data:function(by,bA){var bB,e,bw,bz=null;
if(typeof by==="undefined"){if(this.length){bz=b.data(this[0]);
if(this[0].nodeType===1&&!b._data(this[0],"parsedAttrs")){e=this[0].attributes;
for(var bx=0,bv=e.length;
bx<bv;bx++){bw=e[bx].name;
if(bw.indexOf("data-")===0){bw=b.camelCase(bw.substring(5));
a5(this[0],bw,bz[bw])
}}b._data(this[0],"parsedAttrs",true)
}}return bz
}else{if(typeof by==="object"){return this.each(function(){b.data(this,by)
})}}bB=by.split(".");
bB[1]=bB[1]?"."+bB[1]:"";
if(bA===L){bz=this.triggerHandler("getData"+bB[1]+"!",[bB[0]]);
if(bz===L&&this.length){bz=b.data(this[0],by);
bz=a5(this[0],by,bz)
}return bz===L&&bB[1]?this.data(bB[0]):bz
}else{return this.each(function(){var bC=b(this),bD=[bB[0],bA];
bC.triggerHandler("setData"+bB[1]+"!",bD);
b.data(this,by,bA);
bC.triggerHandler("changeData"+bB[1]+"!",bD)
})}},removeData:function(e){return this.each(function(){b.removeData(this,e)
})}});function a5(bx,bw,by){if(by===L&&bx.nodeType===1){var bv="data-"+bw.replace(aA,"-$1").toLowerCase();
by=bx.getAttribute(bv);
if(typeof by==="string"){try{by=by==="true"?true:by==="false"?false:by==="null"?null:b.isNumeric(by)?parseFloat(by):aS.test(by)?b.parseJSON(by):by
}catch(bz){}b.data(bx,bw,by)
}else{by=L}}return by
}function S(bv){for(var e in bv){if(e==="data"&&b.isEmptyObject(bv[e])){continue
}if(e!=="toJSON"){return false
}}return true
}function bi(by,bx,bA){var bw=bx+"defer",bv=bx+"queue",e=bx+"mark",bz=b._data(by,bw);
if(bz&&(bA==="queue"||!b._data(by,bv))&&(bA==="mark"||!b._data(by,e))){setTimeout(function(){if(!b._data(by,bv)&&!b._data(by,e)){b.removeData(by,bw,true);
bz.fire()}},0)
}}b.extend({_mark:function(bv,e){if(bv){e=(e||"fx")+"mark";
b._data(bv,e,(b._data(bv,e)||0)+1)
}},_unmark:function(by,bx,bv){if(by!==true){bv=bx;
bx=by;by=false
}if(bx){bv=bv||"fx";
var e=bv+"mark",bw=by?0:((b._data(bx,e)||1)-1);
if(bw){b._data(bx,e,bw)
}else{b.removeData(bx,e,true);
bi(bx,bv,"mark")
}}},queue:function(bv,e,bx){var bw;
if(bv){e=(e||"fx")+"queue";
bw=b._data(bv,e);
if(bx){if(!bw||b.isArray(bx)){bw=b._data(bv,e,b.makeArray(bx))
}else{bw.push(bx)
}}return bw||[]
}},dequeue:function(by,bx){bx=bx||"fx";
var bv=b.queue(by,bx),bw=bv.shift(),e={};
if(bw==="inprogress"){bw=bv.shift()
}if(bw){if(bx==="fx"){bv.unshift("inprogress")
}b._data(by,bx+".run",e);
bw.call(by,function(){b.dequeue(by,bx)
},e)}if(!bv.length){b.removeData(by,bx+"queue "+bx+".run",true);
bi(by,bx,"queue")
}}});b.fn.extend({queue:function(e,bv){if(typeof e!=="string"){bv=e;
e="fx"}if(bv===L){return b.queue(this[0],e)
}return this.each(function(){var bw=b.queue(this,e,bv);
if(e==="fx"&&bw[0]!=="inprogress"){b.dequeue(this,e)
}})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)
})},delay:function(bv,e){bv=b.fx?b.fx.speeds[bv]||bv:bv;
e=e||"fx";return this.queue(e,function(bx,bw){var by=setTimeout(bx,bv);
bw.stop=function(){clearTimeout(by)
}})},clearQueue:function(e){return this.queue(e||"fx",[])
},promise:function(bD,bw){if(typeof bD!=="string"){bw=bD;
bD=L}bD=bD||"fx";
var e=b.Deferred(),bv=this,by=bv.length,bB=1,bz=bD+"defer",bA=bD+"queue",bC=bD+"mark",bx;
function bE(){if(!(--bB)){e.resolveWith(bv,[bv])
}}while(by--){if((bx=b.data(bv[by],bz,L,true)||(b.data(bv[by],bA,L,true)||b.data(bv[by],bC,L,true))&&b.data(bv[by],bz,b.Callbacks("once memory"),true))){bB++;
bx.add(bE)}}bE();
return e.promise()
}});var aP=/[\n\t\r]/g,af=/\s+/,aU=/\r/g,g=/^(?:button|input)$/i,D=/^(?:button|input|object|select|textarea)$/i,l=/^a(?:rea)?$/i,ao=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,F=b.support.getSetAttribute,be,aY,aF;
b.fn.extend({attr:function(e,bv){return b.access(this,e,bv,true,b.attr)
},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)
})},prop:function(e,bv){return b.access(this,e,bv,true,b.prop)
},removeProp:function(e){e=b.propFix[e]||e;
return this.each(function(){try{this[e]=L;
delete this[e]
}catch(bv){}})
},addClass:function(by){var bA,bw,bv,bx,bz,bB,e;
if(b.isFunction(by)){return this.each(function(bC){b(this).addClass(by.call(this,bC,this.className))
})}if(by&&typeof by==="string"){bA=by.split(af);
for(bw=0,bv=this.length;
bw<bv;bw++){bx=this[bw];
if(bx.nodeType===1){if(!bx.className&&bA.length===1){bx.className=by
}else{bz=" "+bx.className+" ";
for(bB=0,e=bA.length;
bB<e;bB++){if(!~bz.indexOf(" "+bA[bB]+" ")){bz+=bA[bB]+" "
}}bx.className=b.trim(bz)
}}}}return this
},removeClass:function(bz){var bA,bw,bv,by,bx,bB,e;
if(b.isFunction(bz)){return this.each(function(bC){b(this).removeClass(bz.call(this,bC,this.className))
})}if((bz&&typeof bz==="string")||bz===L){bA=(bz||"").split(af);
for(bw=0,bv=this.length;
bw<bv;bw++){by=this[bw];
if(by.nodeType===1&&by.className){if(bz){bx=(" "+by.className+" ").replace(aP," ");
for(bB=0,e=bA.length;
bB<e;bB++){bx=bx.replace(" "+bA[bB]+" "," ")
}by.className=b.trim(bx)
}else{by.className=""
}}}}return this
},toggleClass:function(bx,bv){var bw=typeof bx,e=typeof bv==="boolean";
if(b.isFunction(bx)){return this.each(function(by){b(this).toggleClass(bx.call(this,by,this.className,bv),bv)
})}return this.each(function(){if(bw==="string"){var bA,bz=0,by=b(this),bB=bv,bC=bx.split(af);
while((bA=bC[bz++])){bB=e?bB:!by.hasClass(bA);
by[bB?"addClass":"removeClass"](bA)
}}else{if(bw==="undefined"||bw==="boolean"){if(this.className){b._data(this,"__className__",this.className)
}this.className=this.className||bx===false?"":b._data(this,"__className__")||""
}}})},hasClass:function(e){var bx=" "+e+" ",bw=0,bv=this.length;
for(;bw<bv;
bw++){if(this[bw].nodeType===1&&(" "+this[bw].className+" ").replace(aP," ").indexOf(bx)>-1){return true
}}return false
},val:function(bx){var e,bv,by,bw=this[0];
if(!arguments.length){if(bw){e=b.valHooks[bw.nodeName.toLowerCase()]||b.valHooks[bw.type];
if(e&&"get" in e&&(bv=e.get(bw,"value"))!==L){return bv
}bv=bw.value;
return typeof bv==="string"?bv.replace(aU,""):bv==null?"":bv
}return}by=b.isFunction(bx);
return this.each(function(bA){var bz=b(this),bB;
if(this.nodeType!==1){return
}if(by){bB=bx.call(this,bA,bz.val())
}else{bB=bx
}if(bB==null){bB=""
}else{if(typeof bB==="number"){bB+=""
}else{if(b.isArray(bB)){bB=b.map(bB,function(bC){return bC==null?"":bC+""
})}}}e=b.valHooks[this.nodeName.toLowerCase()]||b.valHooks[this.type];
if(!e||!("set" in e)||e.set(this,bB,"value")===L){this.value=bB
}})}});b.extend({valHooks:{option:{get:function(e){var bv=e.attributes.value;
return !bv||bv.specified?e.value:e.text
}},select:{get:function(e){var bA,bv,bz,bx,by=e.selectedIndex,bB=[],bC=e.options,bw=e.type==="select-one";
if(by<0){return null
}bv=bw?by:0;
bz=bw?by+1:bC.length;
for(;bv<bz;
bv++){bx=bC[bv];
if(bx.selected&&(b.support.optDisabled?!bx.disabled:bx.getAttribute("disabled")===null)&&(!bx.parentNode.disabled||!b.nodeName(bx.parentNode,"optgroup"))){bA=b(bx).val();
if(bw){return bA
}bB.push(bA)
}}if(bw&&!bB.length&&bC.length){return b(bC[by]).val()
}return bB},set:function(bv,bw){var e=b.makeArray(bw);
b(bv).find("option").each(function(){this.selected=b.inArray(b(this).val(),e)>=0
});if(!e.length){bv.selectedIndex=-1
}return e}}},attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(bA,bx,bB,bz){var bw,e,by,bv=bA.nodeType;
if(!bA||bv===3||bv===8||bv===2){return
}if(bz&&bx in b.attrFn){return b(bA)[bx](bB)
}if(typeof bA.getAttribute==="undefined"){return b.prop(bA,bx,bB)
}by=bv!==1||!b.isXMLDoc(bA);
if(by){bx=bx.toLowerCase();
e=b.attrHooks[bx]||(ao.test(bx)?aY:be)
}if(bB!==L){if(bB===null){b.removeAttr(bA,bx);
return}else{if(e&&"set" in e&&by&&(bw=e.set(bA,bB,bx))!==L){return bw
}else{bA.setAttribute(bx,""+bB);
return bB}}}else{if(e&&"get" in e&&by&&(bw=e.get(bA,bx))!==null){return bw
}else{bw=bA.getAttribute(bx);
return bw===null?L:bw
}}},removeAttr:function(bx,bz){var by,bA,bv,e,bw=0;
if(bz&&bx.nodeType===1){bA=bz.toLowerCase().split(af);
e=bA.length;
for(;bw<e;bw++){bv=bA[bw];
if(bv){by=b.propFix[bv]||bv;
b.attr(bx,bv,"");
bx.removeAttribute(F?bv:by);
if(ao.test(bv)&&by in bx){bx[by]=false
}}}}},attrHooks:{type:{set:function(e,bv){if(g.test(e.nodeName)&&e.parentNode){b.error("type property can't be changed")
}else{if(!b.support.radioValue&&bv==="radio"&&b.nodeName(e,"input")){var bw=e.value;
e.setAttribute("type",bv);
if(bw){e.value=bw
}return bv}}}},value:{get:function(bv,e){if(be&&b.nodeName(bv,"button")){return be.get(bv,e)
}return e in bv?bv.value:null
},set:function(bv,bw,e){if(be&&b.nodeName(bv,"button")){return be.set(bv,bw,e)
}bv.value=bw
}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(bz,bx,bA){var bw,e,by,bv=bz.nodeType;
if(!bz||bv===3||bv===8||bv===2){return
}by=bv!==1||!b.isXMLDoc(bz);
if(by){bx=b.propFix[bx]||bx;
e=b.propHooks[bx]
}if(bA!==L){if(e&&"set" in e&&(bw=e.set(bz,bA,bx))!==L){return bw
}else{return(bz[bx]=bA)
}}else{if(e&&"get" in e&&(bw=e.get(bz,bx))!==null){return bw
}else{return bz[bx]
}}},propHooks:{tabIndex:{get:function(bv){var e=bv.getAttributeNode("tabindex");
return e&&e.specified?parseInt(e.value,10):D.test(bv.nodeName)||l.test(bv.nodeName)&&bv.href?0:L
}}}});b.attrHooks.tabindex=b.propHooks.tabIndex;
aY={get:function(bv,e){var bx,bw=b.prop(bv,e);
return bw===true||typeof bw!=="boolean"&&(bx=bv.getAttributeNode(e))&&bx.nodeValue!==false?e.toLowerCase():L
},set:function(bv,bx,e){var bw;
if(bx===false){b.removeAttr(bv,e)
}else{bw=b.propFix[e]||e;
if(bw in bv){bv[bw]=true
}bv.setAttribute(e,e.toLowerCase())
}return e}};
if(!F){aF={name:true,id:true};
be=b.valHooks.button={get:function(bw,bv){var e;
e=bw.getAttributeNode(bv);
return e&&(aF[bv]?e.nodeValue!=="":e.specified)?e.nodeValue:L
},set:function(bw,bx,bv){var e=bw.getAttributeNode(bv);
if(!e){e=av.createAttribute(bv);
bw.setAttributeNode(e)
}return(e.nodeValue=bx+"")
}};b.attrHooks.tabindex.set=be.set;
b.each(["width","height"],function(bv,e){b.attrHooks[e]=b.extend(b.attrHooks[e],{set:function(bw,bx){if(bx===""){bw.setAttribute(e,"auto");
return bx}}})
});b.attrHooks.contenteditable={get:be.get,set:function(bv,bw,e){if(bw===""){bw="false"
}be.set(bv,bw,e)
}}}if(!b.support.hrefNormalized){b.each(["href","src","width","height"],function(bv,e){b.attrHooks[e]=b.extend(b.attrHooks[e],{get:function(bx){var bw=bx.getAttribute(e,2);
return bw===null?L:bw
}})})}if(!b.support.style){b.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||L
},set:function(e,bv){return(e.style.cssText=""+bv)
}}}if(!b.support.optSelected){b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(bv){var e=bv.parentNode;
if(e){e.selectedIndex;
if(e.parentNode){e.parentNode.selectedIndex
}}return null
}})}if(!b.support.enctype){b.propFix.enctype="encoding"
}if(!b.support.checkOn){b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value
}}})}b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,bv){if(b.isArray(bv)){return(e.checked=b.inArray(b(e).val(),bv)>=0)
}}})});var bd=/^(?:textarea|input|select)$/i,n=/^([^\.]*)?(?:\.(.+))?$/,J=/\bhover(\.\S+)?\b/,aO=/^key/,bf=/^(?:mouse|contextmenu)|click/,T=/^(?:focusinfocus|focusoutblur)$/,U=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,Y=function(e){var bv=U.exec(e);
if(bv){bv[1]=(bv[1]||"").toLowerCase();
bv[3]=bv[3]&&new RegExp("(?:^|\\s)"+bv[3]+"(?:\\s|$)")
}return bv},j=function(bw,e){var bv=bw.attributes||{};
return((!e[1]||bw.nodeName.toLowerCase()===e[1])&&(!e[2]||(bv.id||{}).value===e[2])&&(!e[3]||e[3].test((bv["class"]||{}).value)))
},bt=function(e){return b.event.special.hover?e:e.replace(J,"mouseenter$1 mouseleave$1")
};b.event={add:function(bx,bC,bJ,bA,by){var bD,bB,bK,bI,bH,bF,e,bG,bv,bz,bw,bE;
if(bx.nodeType===3||bx.nodeType===8||!bC||!bJ||!(bD=b._data(bx))){return
}if(bJ.handler){bv=bJ;
bJ=bv.handler
}if(!bJ.guid){bJ.guid=b.guid++
}bK=bD.events;
if(!bK){bD.events=bK={}
}bB=bD.handle;
if(!bB){bD.handle=bB=function(bL){return typeof b!=="undefined"&&(!bL||b.event.triggered!==bL.type)?b.event.dispatch.apply(bB.elem,arguments):L
};bB.elem=bx
}bC=b.trim(bt(bC)).split(" ");
for(bI=0;bI<bC.length;
bI++){bH=n.exec(bC[bI])||[];
bF=bH[1];e=(bH[2]||"").split(".").sort();
bE=b.event.special[bF]||{};
bF=(by?bE.delegateType:bE.bindType)||bF;
bE=b.event.special[bF]||{};
bG=b.extend({type:bF,origType:bH[1],data:bA,handler:bJ,guid:bJ.guid,selector:by,quick:Y(by),namespace:e.join(".")},bv);
bw=bK[bF];if(!bw){bw=bK[bF]=[];
bw.delegateCount=0;
if(!bE.setup||bE.setup.call(bx,bA,e,bB)===false){if(bx.addEventListener){bx.addEventListener(bF,bB,false)
}else{if(bx.attachEvent){bx.attachEvent("on"+bF,bB)
}}}}if(bE.add){bE.add.call(bx,bG);
if(!bG.handler.guid){bG.handler.guid=bJ.guid
}}if(by){bw.splice(bw.delegateCount++,0,bG)
}else{bw.push(bG)
}b.event.global[bF]=true
}bx=null},global:{},remove:function(bJ,bE,bv,bH,bB){var bI=b.hasData(bJ)&&b._data(bJ),bF,bx,bz,bL,bC,bA,bG,bw,by,bK,bD,e;
if(!bI||!(bw=bI.events)){return
}bE=b.trim(bt(bE||"")).split(" ");
for(bF=0;bF<bE.length;
bF++){bx=n.exec(bE[bF])||[];
bz=bL=bx[1];
bC=bx[2];if(!bz){for(bz in bw){b.event.remove(bJ,bz+bE[bF],bv,bH,true)
}continue}by=b.event.special[bz]||{};
bz=(bH?by.delegateType:by.bindType)||bz;
bD=bw[bz]||[];
bA=bD.length;
bC=bC?new RegExp("(^|\\.)"+bC.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;
for(bG=0;bG<bD.length;
bG++){e=bD[bG];
if((bB||bL===e.origType)&&(!bv||bv.guid===e.guid)&&(!bC||bC.test(e.namespace))&&(!bH||bH===e.selector||bH==="**"&&e.selector)){bD.splice(bG--,1);
if(e.selector){bD.delegateCount--
}if(by.remove){by.remove.call(bJ,e)
}}}if(bD.length===0&&bA!==bD.length){if(!by.teardown||by.teardown.call(bJ,bC)===false){b.removeEvent(bJ,bz,bI.handle)
}delete bw[bz]
}}if(b.isEmptyObject(bw)){bK=bI.handle;
if(bK){bK.elem=null
}b.removeData(bJ,["events","handle"],true)
}},customEvent:{getData:true,setData:true,changeData:true},trigger:function(bv,bD,bA,bJ){if(bA&&(bA.nodeType===3||bA.nodeType===8)){return
}var bG=bv.type||bv,bx=[],e,bw,bC,bH,bz,by,bF,bE,bB,bI;
if(T.test(bG+b.event.triggered)){return
}if(bG.indexOf("!")>=0){bG=bG.slice(0,-1);
bw=true}if(bG.indexOf(".")>=0){bx=bG.split(".");
bG=bx.shift();
bx.sort()}if((!bA||b.event.customEvent[bG])&&!b.event.global[bG]){return
}bv=typeof bv==="object"?bv[b.expando]?bv:new b.Event(bG,bv):new b.Event(bG);
bv.type=bG;
bv.isTrigger=true;
bv.exclusive=bw;
bv.namespace=bx.join(".");
bv.namespace_re=bv.namespace?new RegExp("(^|\\.)"+bx.join("\\.(?:.*\\.)?")+"(\\.|$)"):null;
by=bG.indexOf(":")<0?"on"+bG:"";
if(!bA){e=b.cache;
for(bC in e){if(e[bC].events&&e[bC].events[bG]){b.event.trigger(bv,bD,e[bC].handle.elem,true)
}}return}bv.result=L;
if(!bv.target){bv.target=bA
}bD=bD!=null?b.makeArray(bD):[];
bD.unshift(bv);
bF=b.event.special[bG]||{};
if(bF.trigger&&bF.trigger.apply(bA,bD)===false){return
}bB=[[bA,bF.bindType||bG]];
if(!bJ&&!bF.noBubble&&!b.isWindow(bA)){bI=bF.delegateType||bG;
bH=T.test(bI+bG)?bA:bA.parentNode;
bz=null;for(;
bH;bH=bH.parentNode){bB.push([bH,bI]);
bz=bH}if(bz&&bz===bA.ownerDocument){bB.push([bz.defaultView||bz.parentWindow||bb,bI])
}}for(bC=0;
bC<bB.length&&!bv.isPropagationStopped();
bC++){bH=bB[bC][0];
bv.type=bB[bC][1];
bE=(b._data(bH,"events")||{})[bv.type]&&b._data(bH,"handle");
if(bE){bE.apply(bH,bD)
}bE=by&&bH[by];
if(bE&&b.acceptData(bH)&&bE.apply(bH,bD)===false){bv.preventDefault()
}}bv.type=bG;
if(!bJ&&!bv.isDefaultPrevented()){if((!bF._default||bF._default.apply(bA.ownerDocument,bD)===false)&&!(bG==="click"&&b.nodeName(bA,"a"))&&b.acceptData(bA)){if(by&&bA[bG]&&((bG!=="focus"&&bG!=="blur")||bv.target.offsetWidth!==0)&&!b.isWindow(bA)){bz=bA[by];
if(bz){bA[by]=null
}b.event.triggered=bG;
bA[bG]();b.event.triggered=L;
if(bz){bA[by]=bz
}}}}return bv.result
},dispatch:function(e){e=b.event.fix(e||bb.event);
var bz=((b._data(this,"events")||{})[e.type]||[]),bA=bz.delegateCount,bG=[].slice.call(arguments,0),by=!e.exclusive&&!e.namespace,bH=[],bC,bB,bK,bx,bF,bE,bv,bD,bI,bw,bJ;
bG[0]=e;e.delegateTarget=this;
if(bA&&!e.target.disabled&&!(e.button&&e.type==="click")){bx=b(this);
bx.context=this.ownerDocument||this;
for(bK=e.target;
bK!=this;bK=bK.parentNode||this){bE={};
bD=[];bx[0]=bK;
for(bC=0;bC<bA;
bC++){bI=bz[bC];
bw=bI.selector;
if(bE[bw]===L){bE[bw]=(bI.quick?j(bK,bI.quick):bx.is(bw))
}if(bE[bw]){bD.push(bI)
}}if(bD.length){bH.push({elem:bK,matches:bD})
}}}if(bz.length>bA){bH.push({elem:this,matches:bz.slice(bA)})
}for(bC=0;bC<bH.length&&!e.isPropagationStopped();
bC++){bv=bH[bC];
e.currentTarget=bv.elem;
for(bB=0;bB<bv.matches.length&&!e.isImmediatePropagationStopped();
bB++){bI=bv.matches[bB];
if(by||(!e.namespace&&!bI.namespace)||e.namespace_re&&e.namespace_re.test(bI.namespace)){e.data=bI.data;
e.handleObj=bI;
bF=((b.event.special[bI.origType]||{}).handle||bI.handler).apply(bv.elem,bG);
if(bF!==L){e.result=bF;
if(bF===false){e.preventDefault();
e.stopPropagation()
}}}}}return e.result
},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(bv,e){if(bv.which==null){bv.which=e.charCode!=null?e.charCode:e.keyCode
}return bv}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(bx,bw){var by,bz,e,bv=bw.button,bA=bw.fromElement;
if(bx.pageX==null&&bw.clientX!=null){by=bx.target.ownerDocument||av;
bz=by.documentElement;
e=by.body;bx.pageX=bw.clientX+(bz&&bz.scrollLeft||e&&e.scrollLeft||0)-(bz&&bz.clientLeft||e&&e.clientLeft||0);
bx.pageY=bw.clientY+(bz&&bz.scrollTop||e&&e.scrollTop||0)-(bz&&bz.clientTop||e&&e.clientTop||0)
}if(!bx.relatedTarget&&bA){bx.relatedTarget=bA===bx.target?bw.toElement:bA
}if(!bx.which&&bv!==L){bx.which=(bv&1?1:(bv&2?3:(bv&4?2:0)))
}return bx}},fix:function(bw){if(bw[b.expando]){return bw
}var bv,bz,e=bw,bx=b.event.fixHooks[bw.type]||{},by=bx.props?this.props.concat(bx.props):this.props;
bw=b.Event(e);
for(bv=by.length;
bv;){bz=by[--bv];
bw[bz]=e[bz]
}if(!bw.target){bw.target=e.srcElement||av
}if(bw.target.nodeType===3){bw.target=bw.target.parentNode
}if(bw.metaKey===L){bw.metaKey=bw.ctrlKey
}return bx.filter?bx.filter(bw,e):bw
},special:{ready:{setup:b.bindReady},load:{noBubble:true},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(bw,bv,e){if(b.isWindow(this)){this.onbeforeunload=e
}},teardown:function(bv,e){if(this.onbeforeunload===e){this.onbeforeunload=null
}}}},simulate:function(bw,by,bx,bv){var bz=b.extend(new b.Event(),bx,{type:bw,isSimulated:true,originalEvent:{}});
if(bv){b.event.trigger(bz,null,by)
}else{b.event.dispatch.call(by,bz)
}if(bz.isDefaultPrevented()){bx.preventDefault()
}}};b.event.handle=b.event.dispatch;
b.removeEvent=av.removeEventListener?function(bv,e,bw){if(bv.removeEventListener){bv.removeEventListener(e,bw,false)
}}:function(bv,e,bw){if(bv.detachEvent){bv.detachEvent("on"+e,bw)
}};b.Event=function(bv,e){if(!(this instanceof b.Event)){return new b.Event(bv,e)
}if(bv&&bv.type){this.originalEvent=bv;
this.type=bv.type;
this.isDefaultPrevented=(bv.defaultPrevented||bv.returnValue===false||bv.getPreventDefault&&bv.getPreventDefault())?i:bk
}else{this.type=bv
}if(e){b.extend(this,e)
}this.timeStamp=bv&&bv.timeStamp||b.now();
this[b.expando]=true
};function bk(){return false
}function i(){return true
}b.Event.prototype={preventDefault:function(){this.isDefaultPrevented=i;
var bv=this.originalEvent;
if(!bv){return
}if(bv.preventDefault){bv.preventDefault()
}else{bv.returnValue=false
}},stopPropagation:function(){this.isPropagationStopped=i;
var bv=this.originalEvent;
if(!bv){return
}if(bv.stopPropagation){bv.stopPropagation()
}bv.cancelBubble=true
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=i;
this.stopPropagation()
},isDefaultPrevented:bk,isPropagationStopped:bk,isImmediatePropagationStopped:bk};
b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(bv,e){b.event.special[bv]={delegateType:e,bindType:e,handle:function(bz){var bB=this,bA=bz.relatedTarget,by=bz.handleObj,bw=by.selector,bx;
if(!bA||(bA!==bB&&!b.contains(bB,bA))){bz.type=by.origType;
bx=by.handler.apply(this,arguments);
bz.type=e}return bx
}}});if(!b.support.submitBubbles){b.event.special.submit={setup:function(){if(b.nodeName(this,"form")){return false
}b.event.add(this,"click._submit keypress._submit",function(bx){var bw=bx.target,bv=b.nodeName(bw,"input")||b.nodeName(bw,"button")?bw.form:L;
if(bv&&!bv._submit_attached){b.event.add(bv,"submit._submit",function(e){if(this.parentNode&&!e.isTrigger){b.event.simulate("submit",this.parentNode,e,true)
}});bv._submit_attached=true
}})},teardown:function(){if(b.nodeName(this,"form")){return false
}b.event.remove(this,"._submit")
}}}if(!b.support.changeBubbles){b.event.special.change={setup:function(){if(bd.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){b.event.add(this,"propertychange._change",function(e){if(e.originalEvent.propertyName==="checked"){this._just_changed=true
}});b.event.add(this,"click._change",function(e){if(this._just_changed&&!e.isTrigger){this._just_changed=false;
b.event.simulate("change",this,e,true)
}})}return false
}b.event.add(this,"beforeactivate._change",function(bw){var bv=bw.target;
if(bd.test(bv.nodeName)&&!bv._change_attached){b.event.add(bv,"change._change",function(e){if(this.parentNode&&!e.isSimulated&&!e.isTrigger){b.event.simulate("change",this.parentNode,e,true)
}});bv._change_attached=true
}})},handle:function(bv){var e=bv.target;
if(this!==e||bv.isSimulated||bv.isTrigger||(e.type!=="radio"&&e.type!=="checkbox")){return bv.handleObj.handler.apply(this,arguments)
}},teardown:function(){b.event.remove(this,"._change");
return bd.test(this.nodeName)
}}}if(!b.support.focusinBubbles){b.each({focus:"focusin",blur:"focusout"},function(bx,e){var bv=0,bw=function(by){b.event.simulate(e,by.target,b.event.fix(by),true)
};b.event.special[e]={setup:function(){if(bv++===0){av.addEventListener(bx,bw,true)
}},teardown:function(){if(--bv===0){av.removeEventListener(bx,bw,true)
}}}})}b.fn.extend({on:function(bw,e,bz,by,bv){var bA,bx;
if(typeof bw==="object"){if(typeof e!=="string"){bz=e;
e=L}for(bx in bw){this.on(bx,e,bz,bw[bx],bv)
}return this
}if(bz==null&&by==null){by=e;
bz=e=L}else{if(by==null){if(typeof e==="string"){by=bz;
bz=L}else{by=bz;
bz=e;e=L}}}if(by===false){by=bk
}else{if(!by){return this
}}if(bv===1){bA=by;
by=function(bB){b().off(bB);
return bA.apply(this,arguments)
};by.guid=bA.guid||(bA.guid=b.guid++)
}return this.each(function(){b.event.add(this,bw,by,bz,e)
})},one:function(bv,e,bx,bw){return this.on.call(this,bv,e,bx,bw,1)
},off:function(bw,e,by){if(bw&&bw.preventDefault&&bw.handleObj){var bv=bw.handleObj;
b(bw.delegateTarget).off(bv.namespace?bv.type+"."+bv.namespace:bv.type,bv.selector,bv.handler);
return this
}if(typeof bw==="object"){for(var bx in bw){this.off(bx,e,bw[bx])
}return this
}if(e===false||typeof e==="function"){by=e;
e=L}if(by===false){by=bk
}return this.each(function(){b.event.remove(this,bw,by,e)
})},bind:function(e,bw,bv){return this.on(e,null,bw,bv)
},unbind:function(e,bv){return this.off(e,null,bv)
},live:function(e,bw,bv){b(this.context).on(e,this.selector,bw,bv);
return this
},die:function(e,bv){b(this.context).off(e,this.selector||"**",bv);
return this
},delegate:function(e,bv,bx,bw){return this.on(bv,e,bx,bw)
},undelegate:function(e,bv,bw){return arguments.length==1?this.off(e,"**"):this.off(bv,e,bw)
},trigger:function(e,bv){return this.each(function(){b.event.trigger(e,bv,this)
})},triggerHandler:function(e,bv){if(this[0]){return b.event.trigger(e,bv,this[0],true)
}},toggle:function(bx){var bv=arguments,e=bx.guid||b.guid++,bw=0,by=function(bz){var bA=(b._data(this,"lastToggle"+bx.guid)||0)%bw;
b._data(this,"lastToggle"+bx.guid,bA+1);
bz.preventDefault();
return bv[bA].apply(this,arguments)||false
};by.guid=e;
while(bw<bv.length){bv[bw++].guid=e
}return this.click(by)
},hover:function(e,bv){return this.mouseenter(e).mouseleave(bv||e)
}});b.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(bv,e){b.fn[e]=function(bx,bw){if(bw==null){bw=bx;
bx=null}return arguments.length>0?this.on(e,null,bx,bw):this.trigger(e)
};if(b.attrFn){b.attrFn[e]=true
}if(aO.test(e)){b.event.fixHooks[e]=b.event.keyHooks
}if(bf.test(e)){b.event.fixHooks[e]=b.event.mouseHooks
}});
/*!
 * Sizzle CSS Selector Engine
 *  Copyright 2011, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var bH=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,bC="sizcache"+(Math.random()+"").replace(".",""),bI=0,bL=Object.prototype.toString,bB=false,bA=true,bK=/\\/g,bO=/\r\n/g,bQ=/\W/;
[0,0].sort(function(){bA=false;
return 0});
var by=function(bV,e,bY,bZ){bY=bY||[];
e=e||av;var b1=e;
if(e.nodeType!==1&&e.nodeType!==9){return[]
}if(!bV||typeof bV!=="string"){return bY
}var bS,b3,b6,bR,b2,b5,b4,bX,bU=true,bT=by.isXML(e),bW=[],b0=bV;
do{bH.exec("");
bS=bH.exec(b0);
if(bS){b0=bS[3];
bW.push(bS[1]);
if(bS[2]){bR=bS[3];
break}}}while(bS);
if(bW.length>1&&bD.exec(bV)){if(bW.length===2&&bE.relative[bW[0]]){b3=bM(bW[0]+bW[1],e,bZ)
}else{b3=bE.relative[bW[0]]?[e]:by(bW.shift(),e);
while(bW.length){bV=bW.shift();
if(bE.relative[bV]){bV+=bW.shift()
}b3=bM(bV,b3,bZ)
}}}else{if(!bZ&&bW.length>1&&e.nodeType===9&&!bT&&bE.match.ID.test(bW[0])&&!bE.match.ID.test(bW[bW.length-1])){b2=by.find(bW.shift(),e,bT);
e=b2.expr?by.filter(b2.expr,b2.set)[0]:b2.set[0]
}if(e){b2=bZ?{expr:bW.pop(),set:bF(bZ)}:by.find(bW.pop(),bW.length===1&&(bW[0]==="~"||bW[0]==="+")&&e.parentNode?e.parentNode:e,bT);
b3=b2.expr?by.filter(b2.expr,b2.set):b2.set;
if(bW.length>0){b6=bF(b3)
}else{bU=false
}while(bW.length){b5=bW.pop();
b4=b5;if(!bE.relative[b5]){b5=""
}else{b4=bW.pop()
}if(b4==null){b4=e
}bE.relative[b5](b6,b4,bT)
}}else{b6=bW=[]
}}if(!b6){b6=b3
}if(!b6){by.error(b5||bV)
}if(bL.call(b6)==="[object Array]"){if(!bU){bY.push.apply(bY,b6)
}else{if(e&&e.nodeType===1){for(bX=0;
b6[bX]!=null;
bX++){if(b6[bX]&&(b6[bX]===true||b6[bX].nodeType===1&&by.contains(e,b6[bX]))){bY.push(b3[bX])
}}}else{for(bX=0;
b6[bX]!=null;
bX++){if(b6[bX]&&b6[bX].nodeType===1){bY.push(b3[bX])
}}}}}else{bF(b6,bY)
}if(bR){by(bR,b1,bY,bZ);
by.uniqueSort(bY)
}return bY};
by.uniqueSort=function(bR){if(bJ){bB=bA;
bR.sort(bJ);
if(bB){for(var e=1;
e<bR.length;
e++){if(bR[e]===bR[e-1]){bR.splice(e--,1)
}}}}return bR
};by.matches=function(e,bR){return by(e,null,null,bR)
};by.matchesSelector=function(e,bR){return by(bR,null,null,[e]).length>0
};by.find=function(bX,e,bY){var bW,bS,bU,bT,bV,bR;
if(!bX){return[]
}for(bS=0,bU=bE.order.length;
bS<bU;bS++){bV=bE.order[bS];
if((bT=bE.leftMatch[bV].exec(bX))){bR=bT[1];
bT.splice(1,1);
if(bR.substr(bR.length-1)!=="\\"){bT[1]=(bT[1]||"").replace(bK,"");
bW=bE.find[bV](bT,e,bY);
if(bW!=null){bX=bX.replace(bE.match[bV],"");
break}}}}if(!bW){bW=typeof e.getElementsByTagName!=="undefined"?e.getElementsByTagName("*"):[]
}return{set:bW,expr:bX}
};by.filter=function(b1,b0,b4,bU){var bW,e,bZ,b6,b3,bR,bT,bV,b2,bS=b1,b5=[],bY=b0,bX=b0&&b0[0]&&by.isXML(b0[0]);
while(b1&&b0.length){for(bZ in bE.filter){if((bW=bE.leftMatch[bZ].exec(b1))!=null&&bW[2]){bR=bE.filter[bZ];
bT=bW[1];e=false;
bW.splice(1,1);
if(bT.substr(bT.length-1)==="\\"){continue
}if(bY===b5){b5=[]
}if(bE.preFilter[bZ]){bW=bE.preFilter[bZ](bW,bY,b4,b5,bU,bX);
if(!bW){e=b6=true
}else{if(bW===true){continue
}}}if(bW){for(bV=0;
(b3=bY[bV])!=null;
bV++){if(b3){b6=bR(b3,bW,bV,bY);
b2=bU^b6;if(b4&&b6!=null){if(b2){e=true
}else{bY[bV]=false
}}else{if(b2){b5.push(b3);
e=true}}}}}if(b6!==L){if(!b4){bY=b5
}b1=b1.replace(bE.match[bZ],"");
if(!e){return[]
}break}}}if(b1===bS){if(e==null){by.error(b1)
}else{break
}}bS=b1}return bY
};by.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)
};var bw=by.getText=function(bU){var bS,bT,e=bU.nodeType,bR="";
if(e){if(e===1||e===9){if(typeof bU.textContent==="string"){return bU.textContent
}else{if(typeof bU.innerText==="string"){return bU.innerText.replace(bO,"")
}else{for(bU=bU.firstChild;
bU;bU=bU.nextSibling){bR+=bw(bU)
}}}}else{if(e===3||e===4){return bU.nodeValue
}}}else{for(bS=0;
(bT=bU[bS]);
bS++){if(bT.nodeType!==8){bR+=bw(bT)
}}}return bR
};var bE=by.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(e){return e.getAttribute("href")
},type:function(e){return e.getAttribute("type")
}},relative:{"+":function(bW,bR){var bT=typeof bR==="string",bV=bT&&!bQ.test(bR),bX=bT&&!bV;
if(bV){bR=bR.toLowerCase()
}for(var bS=0,e=bW.length,bU;
bS<e;bS++){if((bU=bW[bS])){while((bU=bU.previousSibling)&&bU.nodeType!==1){}bW[bS]=bX||bU&&bU.nodeName.toLowerCase()===bR?bU||false:bU===bR
}}if(bX){by.filter(bR,bW,true)
}},">":function(bW,bR){var bV,bU=typeof bR==="string",bS=0,e=bW.length;
if(bU&&!bQ.test(bR)){bR=bR.toLowerCase();
for(;bS<e;bS++){bV=bW[bS];
if(bV){var bT=bV.parentNode;
bW[bS]=bT.nodeName.toLowerCase()===bR?bT:false
}}}else{for(;
bS<e;bS++){bV=bW[bS];
if(bV){bW[bS]=bU?bV.parentNode:bV.parentNode===bR
}}if(bU){by.filter(bR,bW,true)
}}},"":function(bT,bR,bV){var bU,bS=bI++,e=bN;
if(typeof bR==="string"&&!bQ.test(bR)){bR=bR.toLowerCase();
bU=bR;e=bv}e("parentNode",bR,bS,bT,bU,bV)
},"~":function(bT,bR,bV){var bU,bS=bI++,e=bN;
if(typeof bR==="string"&&!bQ.test(bR)){bR=bR.toLowerCase();
bU=bR;e=bv}e("previousSibling",bR,bS,bT,bU,bV)
}},find:{ID:function(bR,bS,bT){if(typeof bS.getElementById!=="undefined"&&!bT){var e=bS.getElementById(bR[1]);
return e&&e.parentNode?[e]:[]
}},NAME:function(bS,bV){if(typeof bV.getElementsByName!=="undefined"){var bR=[],bU=bV.getElementsByName(bS[1]);
for(var bT=0,e=bU.length;
bT<e;bT++){if(bU[bT].getAttribute("name")===bS[1]){bR.push(bU[bT])
}}return bR.length===0?null:bR
}},TAG:function(e,bR){if(typeof bR.getElementsByTagName!=="undefined"){return bR.getElementsByTagName(e[1])
}}},preFilter:{CLASS:function(bT,bR,bS,e,bW,bX){bT=" "+bT[1].replace(bK,"")+" ";
if(bX){return bT
}for(var bU=0,bV;
(bV=bR[bU])!=null;
bU++){if(bV){if(bW^(bV.className&&(" "+bV.className+" ").replace(/[\t\n\r]/g," ").indexOf(bT)>=0)){if(!bS){e.push(bV)
}}else{if(bS){bR[bU]=false
}}}}return false
},ID:function(e){return e[1].replace(bK,"")
},TAG:function(bR,e){return bR[1].replace(bK,"").toLowerCase()
},CHILD:function(e){if(e[1]==="nth"){if(!e[2]){by.error(e[0])
}e[2]=e[2].replace(/^\+|\s*/g,"");
var bR=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2]==="even"&&"2n"||e[2]==="odd"&&"2n+1"||!/\D/.test(e[2])&&"0n+"+e[2]||e[2]);
e[2]=(bR[1]+(bR[2]||1))-0;
e[3]=bR[3]-0
}else{if(e[2]){by.error(e[0])
}}e[0]=bI++;
return e},ATTR:function(bU,bR,bS,e,bV,bW){var bT=bU[1]=bU[1].replace(bK,"");
if(!bW&&bE.attrMap[bT]){bU[1]=bE.attrMap[bT]
}bU[4]=(bU[4]||bU[5]||"").replace(bK,"");
if(bU[2]==="~="){bU[4]=" "+bU[4]+" "
}return bU},PSEUDO:function(bU,bR,bS,e,bV){if(bU[1]==="not"){if((bH.exec(bU[3])||"").length>1||/^\w/.test(bU[3])){bU[3]=by(bU[3],null,null,bR)
}else{var bT=by.filter(bU[3],bR,bS,true^bV);
if(!bS){e.push.apply(e,bT)
}return false
}}else{if(bE.match.POS.test(bU[0])||bE.match.CHILD.test(bU[0])){return true
}}return bU
},POS:function(e){e.unshift(true);
return e}},filters:{enabled:function(e){return e.disabled===false&&e.type!=="hidden"
},disabled:function(e){return e.disabled===true
},checked:function(e){return e.checked===true
},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex
}return e.selected===true
},parent:function(e){return !!e.firstChild
},empty:function(e){return !e.firstChild
},has:function(bS,bR,e){return !!by(e[3],bS).length
},header:function(e){return(/h\d/i).test(e.nodeName)
},text:function(bS){var e=bS.getAttribute("type"),bR=bS.type;
return bS.nodeName.toLowerCase()==="input"&&"text"===bR&&(e===bR||e===null)
},radio:function(e){return e.nodeName.toLowerCase()==="input"&&"radio"===e.type
},checkbox:function(e){return e.nodeName.toLowerCase()==="input"&&"checkbox"===e.type
},file:function(e){return e.nodeName.toLowerCase()==="input"&&"file"===e.type
},password:function(e){return e.nodeName.toLowerCase()==="input"&&"password"===e.type
},submit:function(bR){var e=bR.nodeName.toLowerCase();
return(e==="input"||e==="button")&&"submit"===bR.type
},image:function(e){return e.nodeName.toLowerCase()==="input"&&"image"===e.type
},reset:function(bR){var e=bR.nodeName.toLowerCase();
return(e==="input"||e==="button")&&"reset"===bR.type
},button:function(bR){var e=bR.nodeName.toLowerCase();
return e==="input"&&"button"===bR.type||e==="button"
},input:function(e){return(/input|select|textarea|button/i).test(e.nodeName)
},focus:function(e){return e===e.ownerDocument.activeElement
}},setFilters:{first:function(bR,e){return e===0
},last:function(bS,bR,e,bT){return bR===bT.length-1
},even:function(bR,e){return e%2===0
},odd:function(bR,e){return e%2===1
},lt:function(bS,bR,e){return bR<e[3]-0
},gt:function(bS,bR,e){return bR>e[3]-0
},nth:function(bS,bR,e){return e[3]-0===bR
},eq:function(bS,bR,e){return e[3]-0===bR
}},filter:{PSEUDO:function(bS,bX,bW,bY){var e=bX[1],bR=bE.filters[e];
if(bR){return bR(bS,bW,bX,bY)
}else{if(e==="contains"){return(bS.textContent||bS.innerText||bw([bS])||"").indexOf(bX[3])>=0
}else{if(e==="not"){var bT=bX[3];
for(var bV=0,bU=bT.length;
bV<bU;bV++){if(bT[bV]===bS){return false
}}return true
}else{by.error(e)
}}}},CHILD:function(bS,bU){var bT,b0,bW,bZ,e,bV,bY,bX=bU[1],bR=bS;
switch(bX){case"only":case"first":while((bR=bR.previousSibling)){if(bR.nodeType===1){return false
}}if(bX==="first"){return true
}bR=bS;case"last":while((bR=bR.nextSibling)){if(bR.nodeType===1){return false
}}return true;
case"nth":bT=bU[2];
b0=bU[3];if(bT===1&&b0===0){return true
}bW=bU[0];bZ=bS.parentNode;
if(bZ&&(bZ[bC]!==bW||!bS.nodeIndex)){bV=0;
for(bR=bZ.firstChild;
bR;bR=bR.nextSibling){if(bR.nodeType===1){bR.nodeIndex=++bV
}}bZ[bC]=bW
}bY=bS.nodeIndex-b0;
if(bT===0){return bY===0
}else{return(bY%bT===0&&bY/bT>=0)
}}},ID:function(bR,e){return bR.nodeType===1&&bR.getAttribute("id")===e
},TAG:function(bR,e){return(e==="*"&&bR.nodeType===1)||!!bR.nodeName&&bR.nodeName.toLowerCase()===e
},CLASS:function(bR,e){return(" "+(bR.className||bR.getAttribute("class"))+" ").indexOf(e)>-1
},ATTR:function(bV,bT){var bS=bT[1],e=by.attr?by.attr(bV,bS):bE.attrHandle[bS]?bE.attrHandle[bS](bV):bV[bS]!=null?bV[bS]:bV.getAttribute(bS),bW=e+"",bU=bT[2],bR=bT[4];
return e==null?bU==="!=":!bU&&by.attr?e!=null:bU==="="?bW===bR:bU==="*="?bW.indexOf(bR)>=0:bU==="~="?(" "+bW+" ").indexOf(bR)>=0:!bR?bW&&e!==false:bU==="!="?bW!==bR:bU==="^="?bW.indexOf(bR)===0:bU==="$="?bW.substr(bW.length-bR.length)===bR:bU==="|="?bW===bR||bW.substr(0,bR.length+1)===bR+"-":false
},POS:function(bU,bR,bS,bV){var e=bR[2],bT=bE.setFilters[e];
if(bT){return bT(bU,bS,bR,bV)
}}}};var bD=bE.match.POS,bx=function(bR,e){return"\\"+(e-0+1)
};for(var bz in bE.match){bE.match[bz]=new RegExp(bE.match[bz].source+(/(?![^\[]*\])(?![^\(]*\))/.source));
bE.leftMatch[bz]=new RegExp(/(^(?:.|\r|\n)*?)/.source+bE.match[bz].source.replace(/\\(\d+)/g,bx))
}var bF=function(bR,e){bR=Array.prototype.slice.call(bR,0);
if(e){e.push.apply(e,bR);
return e}return bR
};try{Array.prototype.slice.call(av.documentElement.childNodes,0)[0].nodeType
}catch(bP){bF=function(bU,bT){var bS=0,bR=bT||[];
if(bL.call(bU)==="[object Array]"){Array.prototype.push.apply(bR,bU)
}else{if(typeof bU.length==="number"){for(var e=bU.length;
bS<e;bS++){bR.push(bU[bS])
}}else{for(;
bU[bS];bS++){bR.push(bU[bS])
}}}return bR
}}var bJ,bG;
if(av.documentElement.compareDocumentPosition){bJ=function(bR,e){if(bR===e){bB=true;
return 0}if(!bR.compareDocumentPosition||!e.compareDocumentPosition){return bR.compareDocumentPosition?-1:1
}return bR.compareDocumentPosition(e)&4?-1:1
}}else{bJ=function(bY,bX){if(bY===bX){bB=true;
return 0}else{if(bY.sourceIndex&&bX.sourceIndex){return bY.sourceIndex-bX.sourceIndex
}}var bV,bR,bS=[],e=[],bU=bY.parentNode,bW=bX.parentNode,bZ=bU;
if(bU===bW){return bG(bY,bX)
}else{if(!bU){return -1
}else{if(!bW){return 1
}}}while(bZ){bS.unshift(bZ);
bZ=bZ.parentNode
}bZ=bW;while(bZ){e.unshift(bZ);
bZ=bZ.parentNode
}bV=bS.length;
bR=e.length;
for(var bT=0;
bT<bV&&bT<bR;
bT++){if(bS[bT]!==e[bT]){return bG(bS[bT],e[bT])
}}return bT===bV?bG(bY,e[bT],-1):bG(bS[bT],bX,1)
};bG=function(bR,e,bS){if(bR===e){return bS
}var bT=bR.nextSibling;
while(bT){if(bT===e){return -1
}bT=bT.nextSibling
}return 1}}(function(){var bR=av.createElement("div"),bS="script"+(new Date()).getTime(),e=av.documentElement;
bR.innerHTML="<a name='"+bS+"'/>";
e.insertBefore(bR,e.firstChild);
if(av.getElementById(bS)){bE.find.ID=function(bU,bV,bW){if(typeof bV.getElementById!=="undefined"&&!bW){var bT=bV.getElementById(bU[1]);
return bT?bT.id===bU[1]||typeof bT.getAttributeNode!=="undefined"&&bT.getAttributeNode("id").nodeValue===bU[1]?[bT]:L:[]
}};bE.filter.ID=function(bV,bT){var bU=typeof bV.getAttributeNode!=="undefined"&&bV.getAttributeNode("id");
return bV.nodeType===1&&bU&&bU.nodeValue===bT
}}e.removeChild(bR);
e=bR=null})();
(function(){var e=av.createElement("div");
e.appendChild(av.createComment(""));
if(e.getElementsByTagName("*").length>0){bE.find.TAG=function(bR,bV){var bU=bV.getElementsByTagName(bR[1]);
if(bR[1]==="*"){var bT=[];
for(var bS=0;
bU[bS];bS++){if(bU[bS].nodeType===1){bT.push(bU[bS])
}}bU=bT}return bU
}}e.innerHTML="<a href='#'></a>";
if(e.firstChild&&typeof e.firstChild.getAttribute!=="undefined"&&e.firstChild.getAttribute("href")!=="#"){bE.attrHandle.href=function(bR){return bR.getAttribute("href",2)
}}e=null})();
if(av.querySelectorAll){(function(){var e=by,bT=av.createElement("div"),bS="__sizzle__";
bT.innerHTML="<p class='TEST'></p>";
if(bT.querySelectorAll&&bT.querySelectorAll(".TEST").length===0){return
}by=function(b4,bV,bZ,b3){bV=bV||av;
if(!b3&&!by.isXML(bV)){var b2=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b4);
if(b2&&(bV.nodeType===1||bV.nodeType===9)){if(b2[1]){return bF(bV.getElementsByTagName(b4),bZ)
}else{if(b2[2]&&bE.find.CLASS&&bV.getElementsByClassName){return bF(bV.getElementsByClassName(b2[2]),bZ)
}}}if(bV.nodeType===9){if(b4==="body"&&bV.body){return bF([bV.body],bZ)
}else{if(b2&&b2[3]){var bY=bV.getElementById(b2[3]);
if(bY&&bY.parentNode){if(bY.id===b2[3]){return bF([bY],bZ)
}}else{return bF([],bZ)
}}}try{return bF(bV.querySelectorAll(b4),bZ)
}catch(b0){}}else{if(bV.nodeType===1&&bV.nodeName.toLowerCase()!=="object"){var bW=bV,bX=bV.getAttribute("id"),bU=bX||bS,b6=bV.parentNode,b5=/^\s*[+~]/.test(b4);
if(!bX){bV.setAttribute("id",bU)
}else{bU=bU.replace(/'/g,"\\$&")
}if(b5&&b6){bV=bV.parentNode
}try{if(!b5||b6){return bF(bV.querySelectorAll("[id='"+bU+"'] "+b4),bZ)
}}catch(b1){}finally{if(!bX){bW.removeAttribute("id")
}}}}}return e(b4,bV,bZ,b3)
};for(var bR in e){by[bR]=e[bR]
}bT=null})()
}(function(){var e=av.documentElement,bS=e.matchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.msMatchesSelector;
if(bS){var bU=!bS.call(av.createElement("div"),"div"),bR=false;
try{bS.call(av.documentElement,"[test!='']:sizzle")
}catch(bT){bR=true
}by.matchesSelector=function(bW,bY){bY=bY.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");
if(!by.isXML(bW)){try{if(bR||!bE.match.PSEUDO.test(bY)&&!/!=/.test(bY)){var bV=bS.call(bW,bY);
if(bV||!bU||bW.document&&bW.document.nodeType!==11){return bV
}}}catch(bX){}}return by(bY,null,null,[bW]).length>0
}}})();(function(){var e=av.createElement("div");
e.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!e.getElementsByClassName||e.getElementsByClassName("e").length===0){return
}e.lastChild.className="e";
if(e.getElementsByClassName("e").length===1){return
}bE.order.splice(1,0,"CLASS");
bE.find.CLASS=function(bR,bS,bT){if(typeof bS.getElementsByClassName!=="undefined"&&!bT){return bS.getElementsByClassName(bR[1])
}};e=null})();
function bv(bR,bW,bV,bZ,bX,bY){for(var bT=0,bS=bZ.length;
bT<bS;bT++){var e=bZ[bT];
if(e){var bU=false;
e=e[bR];while(e){if(e[bC]===bV){bU=bZ[e.sizset];
break}if(e.nodeType===1&&!bY){e[bC]=bV;
e.sizset=bT
}if(e.nodeName.toLowerCase()===bW){bU=e;
break}e=e[bR]
}bZ[bT]=bU}}}function bN(bR,bW,bV,bZ,bX,bY){for(var bT=0,bS=bZ.length;
bT<bS;bT++){var e=bZ[bT];
if(e){var bU=false;
e=e[bR];while(e){if(e[bC]===bV){bU=bZ[e.sizset];
break}if(e.nodeType===1){if(!bY){e[bC]=bV;
e.sizset=bT
}if(typeof bW!=="string"){if(e===bW){bU=true;
break}}else{if(by.filter(bW,[e]).length>0){bU=e;
break}}}e=e[bR]
}bZ[bT]=bU}}}if(av.documentElement.contains){by.contains=function(bR,e){return bR!==e&&(bR.contains?bR.contains(e):true)
}}else{if(av.documentElement.compareDocumentPosition){by.contains=function(bR,e){return !!(bR.compareDocumentPosition(e)&16)
}}else{by.contains=function(){return false
}}}by.isXML=function(e){var bR=(e?e.ownerDocument||e:0).documentElement;
return bR?bR.nodeName!=="HTML":false
};var bM=function(bS,e,bW){var bV,bX=[],bU="",bY=e.nodeType?[e]:e;
while((bV=bE.match.PSEUDO.exec(bS))){bU+=bV[0];
bS=bS.replace(bE.match.PSEUDO,"")
}bS=bE.relative[bS]?bS+"*":bS;
for(var bT=0,bR=bY.length;
bT<bR;bT++){by(bS,bY[bT],bX,bW)
}return by.filter(bU,bX)
};by.attr=b.attr;
by.selectors.attrMap={};
b.find=by;b.expr=by.selectors;
b.expr[":"]=b.expr.filters;
b.unique=by.uniqueSort;
b.text=by.getText;
b.isXMLDoc=by.isXML;
b.contains=by.contains
})();var ab=/Until$/,aq=/^(?:parents|prevUntil|prevAll)/,a9=/,/,bp=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,H=b.expr.match.POS,ay={children:true,contents:true,next:true,prev:true};
b.fn.extend({find:function(e){var bw=this,by,bv;
if(typeof e!=="string"){return b(e).filter(function(){for(by=0,bv=bw.length;
by<bv;by++){if(b.contains(bw[by],this)){return true
}}})}var bx=this.pushStack("","find",e),bA,bB,bz;
for(by=0,bv=this.length;
by<bv;by++){bA=bx.length;
b.find(e,this[by],bx);
if(by>0){for(bB=bA;
bB<bx.length;
bB++){for(bz=0;
bz<bA;bz++){if(bx[bz]===bx[bB]){bx.splice(bB--,1);
break}}}}}return bx
},has:function(bv){var e=b(bv);
return this.filter(function(){for(var bx=0,bw=e.length;
bx<bw;bx++){if(b.contains(this,e[bx])){return true
}}})},not:function(e){return this.pushStack(aG(this,e,false),"not",e)
},filter:function(e){return this.pushStack(aG(this,e,true),"filter",e)
},is:function(e){return !!e&&(typeof e==="string"?H.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)
},closest:function(by,bx){var bv=[],bw,e,bz=this[0];
if(b.isArray(by)){var bB=1;
while(bz&&bz.ownerDocument&&bz!==bx){for(bw=0;
bw<by.length;
bw++){if(b(bz).is(by[bw])){bv.push({selector:by[bw],elem:bz,level:bB})
}}bz=bz.parentNode;
bB++}return bv
}var bA=H.test(by)||typeof by!=="string"?b(by,bx||this.context):0;
for(bw=0,e=this.length;
bw<e;bw++){bz=this[bw];
while(bz){if(bA?bA.index(bz)>-1:b.find.matchesSelector(bz,by)){bv.push(bz);
break}else{bz=bz.parentNode;
if(!bz||!bz.ownerDocument||bz===bx||bz.nodeType===11){break
}}}}bv=bv.length>1?b.unique(bv):bv;
return this.pushStack(bv,"closest",by)
},index:function(e){if(!e){return(this[0]&&this[0].parentNode)?this.prevAll().length:-1
}if(typeof e==="string"){return b.inArray(this[0],b(e))
}return b.inArray(e.jquery?e[0]:e,this)
},add:function(e,bv){var bx=typeof e==="string"?b(e,bv):b.makeArray(e&&e.nodeType?[e]:e),bw=b.merge(this.get(),bx);
return this.pushStack(C(bx[0])||C(bw[0])?bw:b.unique(bw))
},andSelf:function(){return this.add(this.prevObject)
}});function C(e){return !e||!e.parentNode||e.parentNode.nodeType===11
}b.each({parent:function(bv){var e=bv.parentNode;
return e&&e.nodeType!==11?e:null
},parents:function(e){return b.dir(e,"parentNode")
},parentsUntil:function(bv,e,bw){return b.dir(bv,"parentNode",bw)
},next:function(e){return b.nth(e,2,"nextSibling")
},prev:function(e){return b.nth(e,2,"previousSibling")
},nextAll:function(e){return b.dir(e,"nextSibling")
},prevAll:function(e){return b.dir(e,"previousSibling")
},nextUntil:function(bv,e,bw){return b.dir(bv,"nextSibling",bw)
},prevUntil:function(bv,e,bw){return b.dir(bv,"previousSibling",bw)
},siblings:function(e){return b.sibling(e.parentNode.firstChild,e)
},children:function(e){return b.sibling(e.firstChild)
},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.makeArray(e.childNodes)
}},function(e,bv){b.fn[e]=function(by,bw){var bx=b.map(this,bv,by);
if(!ab.test(e)){bw=by
}if(bw&&typeof bw==="string"){bx=b.filter(bw,bx)
}bx=this.length>1&&!ay[e]?b.unique(bx):bx;
if((this.length>1||a9.test(bw))&&aq.test(e)){bx=bx.reverse()
}return this.pushStack(bx,e,P.call(arguments).join(","))
}});b.extend({filter:function(bw,e,bv){if(bv){bw=":not("+bw+")"
}return e.length===1?b.find.matchesSelector(e[0],bw)?[e[0]]:[]:b.find.matches(bw,e)
},dir:function(bw,bv,by){var e=[],bx=bw[bv];
while(bx&&bx.nodeType!==9&&(by===L||bx.nodeType!==1||!b(bx).is(by))){if(bx.nodeType===1){e.push(bx)
}bx=bx[bv]}return e
},nth:function(by,e,bw,bx){e=e||1;
var bv=0;for(;
by;by=by[bw]){if(by.nodeType===1&&++bv===e){break
}}return by
},sibling:function(bw,bv){var e=[];
for(;bw;bw=bw.nextSibling){if(bw.nodeType===1&&bw!==bv){e.push(bw)
}}return e}});
function aG(bx,bw,e){bw=bw||0;
if(b.isFunction(bw)){return b.grep(bx,function(bz,by){var bA=!!bw.call(bz,by,bz);
return bA===e
})}else{if(bw.nodeType){return b.grep(bx,function(bz,by){return(bz===bw)===e
})}else{if(typeof bw==="string"){var bv=b.grep(bx,function(by){return by.nodeType===1
});if(bp.test(bw)){return b.filter(bw,bv,!e)
}else{bw=b.filter(bw,bv)
}}}}return b.grep(bx,function(bz,by){return(b.inArray(bz,bw)>=0)===e
})}function a(e){var bw=aR.split("|"),bv=e.createDocumentFragment();
if(bv.createElement){while(bw.length){bv.createElement(bw.pop())
}}return bv
}var aR="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ag=/ jQuery\d+="(?:\d+|null)"/g,ar=/^\s+/,R=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,d=/<([\w:]+)/,w=/<tbody/i,W=/<|&#?\w+;/,ae=/<(?:script|style)/i,O=/<(?:script|object|embed|option|style)/i,ah=new RegExp("<(?:"+aR+")","i"),o=/checked\s*(?:[^=]|=\s*.checked.)/i,bm=/\/(java|ecma)script/i,aN=/^\s*<!(?:\[CDATA\[|\-\-)/,ax={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},ac=a(av);
ax.optgroup=ax.option;
ax.tbody=ax.tfoot=ax.colgroup=ax.caption=ax.thead;
ax.th=ax.td;
if(!b.support.htmlSerialize){ax._default=[1,"div<div>","</div>"]
}b.fn.extend({text:function(e){if(b.isFunction(e)){return this.each(function(bw){var bv=b(this);
bv.text(e.call(this,bw,bv.text()))
})}if(typeof e!=="object"&&e!==L){return this.empty().append((this[0]&&this[0].ownerDocument||av).createTextNode(e))
}return b.text(this)
},wrapAll:function(e){if(b.isFunction(e)){return this.each(function(bw){b(this).wrapAll(e.call(this,bw))
})}if(this[0]){var bv=b(e,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){bv.insertBefore(this[0])
}bv.map(function(){var bw=this;
while(bw.firstChild&&bw.firstChild.nodeType===1){bw=bw.firstChild
}return bw}).append(this)
}return this
},wrapInner:function(e){if(b.isFunction(e)){return this.each(function(bv){b(this).wrapInner(e.call(this,bv))
})}return this.each(function(){var bv=b(this),bw=bv.contents();
if(bw.length){bw.wrapAll(e)
}else{bv.append(e)
}})},wrap:function(e){var bv=b.isFunction(e);
return this.each(function(bw){b(this).wrapAll(bv?e.call(this,bw):e)
})},unwrap:function(){return this.parent().each(function(){if(!b.nodeName(this,"body")){b(this).replaceWith(this.childNodes)
}}).end()},append:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1){this.appendChild(e)
}})},prepend:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1){this.insertBefore(e,this.firstChild)
}})},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(bv){this.parentNode.insertBefore(bv,this)
})}else{if(arguments.length){var e=b.clean(arguments);
e.push.apply(e,this.toArray());
return this.pushStack(e,"before",arguments)
}}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(bv){this.parentNode.insertBefore(bv,this.nextSibling)
})}else{if(arguments.length){var e=this.pushStack(this,"after",arguments);
e.push.apply(e,b.clean(arguments));
return e}}},remove:function(e,bx){for(var bv=0,bw;
(bw=this[bv])!=null;
bv++){if(!e||b.filter(e,[bw]).length){if(!bx&&bw.nodeType===1){b.cleanData(bw.getElementsByTagName("*"));
b.cleanData([bw])
}if(bw.parentNode){bw.parentNode.removeChild(bw)
}}}return this
},empty:function(){for(var e=0,bv;
(bv=this[e])!=null;
e++){if(bv.nodeType===1){b.cleanData(bv.getElementsByTagName("*"))
}while(bv.firstChild){bv.removeChild(bv.firstChild)
}}return this
},clone:function(bv,e){bv=bv==null?false:bv;
e=e==null?bv:e;
return this.map(function(){return b.clone(this,bv,e)
})},html:function(bx){if(bx===L){return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(ag,""):null
}else{if(typeof bx==="string"&&!ae.test(bx)&&(b.support.leadingWhitespace||!ar.test(bx))&&!ax[(d.exec(bx)||["",""])[1].toLowerCase()]){bx=bx.replace(R,"<$1></$2>");
try{for(var bw=0,bv=this.length;
bw<bv;bw++){if(this[bw].nodeType===1){b.cleanData(this[bw].getElementsByTagName("*"));
this[bw].innerHTML=bx
}}}catch(by){this.empty().append(bx)
}}else{if(b.isFunction(bx)){this.each(function(bz){var e=b(this);
e.html(bx.call(this,bz,e.html()))
})}else{this.empty().append(bx)
}}}return this
},replaceWith:function(e){if(this[0]&&this[0].parentNode){if(b.isFunction(e)){return this.each(function(bx){var bw=b(this),bv=bw.html();
bw.replaceWith(e.call(this,bx,bv))
})}if(typeof e!=="string"){e=b(e).detach()
}return this.each(function(){var bw=this.nextSibling,bv=this.parentNode;
b(this).remove();
if(bw){b(bw).before(e)
}else{b(bv).append(e)
}})}else{return this.length?this.pushStack(b(b.isFunction(e)?e():e),"replaceWith",e):this
}},detach:function(e){return this.remove(e,true)
},domManip:function(bB,bF,bE){var bx,by,bA,bD,bC=bB[0],bv=[];
if(!b.support.checkClone&&arguments.length===3&&typeof bC==="string"&&o.test(bC)){return this.each(function(){b(this).domManip(bB,bF,bE,true)
})}if(b.isFunction(bC)){return this.each(function(bH){var bG=b(this);
bB[0]=bC.call(this,bH,bF?bG.html():L);
bG.domManip(bB,bF,bE)
})}if(this[0]){bD=bC&&bC.parentNode;
if(b.support.parentNode&&bD&&bD.nodeType===11&&bD.childNodes.length===this.length){bx={fragment:bD}
}else{bx=b.buildFragment(bB,this,bv)
}bA=bx.fragment;
if(bA.childNodes.length===1){by=bA=bA.firstChild
}else{by=bA.firstChild
}if(by){bF=bF&&b.nodeName(by,"tr");
for(var bw=0,e=this.length,bz=e-1;
bw<e;bw++){bE.call(bF?ba(this[bw],by):this[bw],bx.cacheable||(e>1&&bw<bz)?b.clone(bA,true,true):bA)
}}if(bv.length){b.each(bv,bo)
}}return this
}});function ba(e,bv){return b.nodeName(e,"table")?(e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody"))):e
}function t(bB,bv){if(bv.nodeType!==1||!b.hasData(bB)){return
}var by,bx,e,bA=b._data(bB),bz=b._data(bv,bA),bw=bA.events;
if(bw){delete bz.handle;
bz.events={};
for(by in bw){for(bx=0,e=bw[by].length;
bx<e;bx++){b.event.add(bv,by+(bw[by][bx].namespace?".":"")+bw[by][bx].namespace,bw[by][bx],bw[by][bx].data)
}}}if(bz.data){bz.data=b.extend({},bz.data)
}}function ai(bv,e){var bw;
if(e.nodeType!==1){return
}if(e.clearAttributes){e.clearAttributes()
}if(e.mergeAttributes){e.mergeAttributes(bv)
}bw=e.nodeName.toLowerCase();
if(bw==="object"){e.outerHTML=bv.outerHTML
}else{if(bw==="input"&&(bv.type==="checkbox"||bv.type==="radio")){if(bv.checked){e.defaultChecked=e.checked=bv.checked
}if(e.value!==bv.value){e.value=bv.value
}}else{if(bw==="option"){e.selected=bv.defaultSelected
}else{if(bw==="input"||bw==="textarea"){e.defaultValue=bv.defaultValue
}}}}e.removeAttribute(b.expando)
}b.buildFragment=function(bz,bx,bv){var by,e,bw,bA,bB=bz[0];
if(bx&&bx[0]){bA=bx[0].ownerDocument||bx[0]
}if(!bA.createDocumentFragment){bA=av
}if(bz.length===1&&typeof bB==="string"&&bB.length<512&&bA===av&&bB.charAt(0)==="<"&&!O.test(bB)&&(b.support.checkClone||!o.test(bB))&&(b.support.html5Clone||!ah.test(bB))){e=true;
bw=b.fragments[bB];
if(bw&&bw!==1){by=bw
}}if(!by){by=bA.createDocumentFragment();
b.clean(bz,bA,by,bv)
}if(e){b.fragments[bB]=bw?by:1
}return{fragment:by,cacheable:e}
};b.fragments={};
b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,bv){b.fn[e]=function(bw){var bz=[],bC=b(bw),bB=this.length===1&&this[0].parentNode;
if(bB&&bB.nodeType===11&&bB.childNodes.length===1&&bC.length===1){bC[bv](this[0]);
return this
}else{for(var bA=0,bx=bC.length;
bA<bx;bA++){var by=(bA>0?this.clone(true):this).get();
b(bC[bA])[bv](by);
bz=bz.concat(by)
}return this.pushStack(bz,e,bC.selector)
}}});function bg(e){if(typeof e.getElementsByTagName!=="undefined"){return e.getElementsByTagName("*")
}else{if(typeof e.querySelectorAll!=="undefined"){return e.querySelectorAll("*")
}else{return[]
}}}function az(e){if(e.type==="checkbox"||e.type==="radio"){e.defaultChecked=e.checked
}}function E(e){var bv=(e.nodeName||"").toLowerCase();
if(bv==="input"){az(e)
}else{if(bv!=="script"&&typeof e.getElementsByTagName!=="undefined"){b.grep(e.getElementsByTagName("input"),az)
}}}function al(e){var bv=av.createElement("div");
ac.appendChild(bv);
bv.innerHTML=e.outerHTML;
return bv.firstChild
}b.extend({clone:function(by,bA,bw){var e,bv,bx,bz=b.support.html5Clone||!ah.test("<"+by.nodeName)?by.cloneNode(true):al(by);
if((!b.support.noCloneEvent||!b.support.noCloneChecked)&&(by.nodeType===1||by.nodeType===11)&&!b.isXMLDoc(by)){ai(by,bz);
e=bg(by);bv=bg(bz);
for(bx=0;e[bx];
++bx){if(bv[bx]){ai(e[bx],bv[bx])
}}}if(bA){t(by,bz);
if(bw){e=bg(by);
bv=bg(bz);for(bx=0;
e[bx];++bx){t(e[bx],bv[bx])
}}}e=bv=null;
return bz},clean:function(bw,by,bH,bA){var bF;
by=by||av;if(typeof by.createElement==="undefined"){by=by.ownerDocument||by[0]&&by[0].ownerDocument||av
}var bI=[],bB;
for(var bE=0,bz;
(bz=bw[bE])!=null;
bE++){if(typeof bz==="number"){bz+=""
}if(!bz){continue
}if(typeof bz==="string"){if(!W.test(bz)){bz=by.createTextNode(bz)
}else{bz=bz.replace(R,"<$1></$2>");
var bK=(d.exec(bz)||["",""])[1].toLowerCase(),bx=ax[bK]||ax._default,bD=bx[0],bv=by.createElement("div");
if(by===av){ac.appendChild(bv)
}else{a(by).appendChild(bv)
}bv.innerHTML=bx[1]+bz+bx[2];
while(bD--){bv=bv.lastChild
}if(!b.support.tbody){var e=w.test(bz),bC=bK==="table"&&!e?bv.firstChild&&bv.firstChild.childNodes:bx[1]==="<table>"&&!e?bv.childNodes:[];
for(bB=bC.length-1;
bB>=0;--bB){if(b.nodeName(bC[bB],"tbody")&&!bC[bB].childNodes.length){bC[bB].parentNode.removeChild(bC[bB])
}}}if(!b.support.leadingWhitespace&&ar.test(bz)){bv.insertBefore(by.createTextNode(ar.exec(bz)[0]),bv.firstChild)
}bz=bv.childNodes
}}var bG;if(!b.support.appendChecked){if(bz[0]&&typeof(bG=bz.length)==="number"){for(bB=0;
bB<bG;bB++){E(bz[bB])
}}else{E(bz)
}}if(bz.nodeType){bI.push(bz)
}else{bI=b.merge(bI,bz)
}}if(bH){bF=function(bL){return !bL.type||bm.test(bL.type)
};for(bE=0;
bI[bE];bE++){if(bA&&b.nodeName(bI[bE],"script")&&(!bI[bE].type||bI[bE].type.toLowerCase()==="text/javascript")){bA.push(bI[bE].parentNode?bI[bE].parentNode.removeChild(bI[bE]):bI[bE])
}else{if(bI[bE].nodeType===1){var bJ=b.grep(bI[bE].getElementsByTagName("script"),bF);
bI.splice.apply(bI,[bE+1,0].concat(bJ))
}bH.appendChild(bI[bE])
}}}return bI
},cleanData:function(bv){var by,bw,e=b.cache,bB=b.event.special,bA=b.support.deleteExpando;
for(var bz=0,bx;
(bx=bv[bz])!=null;
bz++){if(bx.nodeName&&b.noData[bx.nodeName.toLowerCase()]){continue
}bw=bx[b.expando];
if(bw){by=e[bw];
if(by&&by.events){for(var bC in by.events){if(bB[bC]){b.event.remove(bx,bC)
}else{b.removeEvent(bx,bC,by.handle)
}}if(by.handle){by.handle.elem=null
}}if(bA){delete bx[b.expando]
}else{if(bx.removeAttribute){bx.removeAttribute(b.expando)
}}delete e[bw]
}}}});function bo(e,bv){if(bv.src){b.ajax({url:bv.src,async:false,dataType:"script"})
}else{b.globalEval((bv.text||bv.textContent||bv.innerHTML||"").replace(aN,"/*$0*/"))
}if(bv.parentNode){bv.parentNode.removeChild(bv)
}}var ak=/alpha\([^)]*\)/i,au=/opacity=([^)]*)/,z=/([A-Z]|^ms)/g,bc=/^-?\d+(?:px)?$/i,bn=/^-?\d/,I=/^([\-+])=([\-+.\de]+)/,a7={position:"absolute",visibility:"hidden",display:"block"},an=["Left","Right"],a1=["Top","Bottom"],Z,aI,aX;
b.fn.css=function(e,bv){if(arguments.length===2&&bv===L){return this
}return b.access(this,e,bv,true,function(bx,bw,by){return by!==L?b.style(bx,bw,by):b.css(bx,bw)
})};b.extend({cssHooks:{opacity:{get:function(bw,bv){if(bv){var e=Z(bw,"opacity","opacity");
return e===""?"1":e
}else{return bw.style.opacity
}}}},cssNumber:{fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(bx,bw,bD,by){if(!bx||bx.nodeType===3||bx.nodeType===8||!bx.style){return
}var bB,bC,bz=b.camelCase(bw),bv=bx.style,bE=b.cssHooks[bz];
bw=b.cssProps[bz]||bz;
if(bD!==L){bC=typeof bD;
if(bC==="string"&&(bB=I.exec(bD))){bD=(+(bB[1]+1)*+bB[2])+parseFloat(b.css(bx,bw));
bC="number"
}if(bD==null||bC==="number"&&isNaN(bD)){return
}if(bC==="number"&&!b.cssNumber[bz]){bD+="px"
}if(!bE||!("set" in bE)||(bD=bE.set(bx,bD))!==L){try{bv[bw]=bD
}catch(bA){}}}else{if(bE&&"get" in bE&&(bB=bE.get(bx,false,by))!==L){return bB
}return bv[bw]
}},css:function(by,bx,bv){var bw,e;
bx=b.camelCase(bx);
e=b.cssHooks[bx];
bx=b.cssProps[bx]||bx;
if(bx==="cssFloat"){bx="float"
}if(e&&"get" in e&&(bw=e.get(by,true,bv))!==L){return bw
}else{if(Z){return Z(by,bx)
}}},swap:function(bx,bw,by){var e={};
for(var bv in bw){e[bv]=bx.style[bv];
bx.style[bv]=bw[bv]
}by.call(bx);
for(bv in bw){bx.style[bv]=e[bv]
}}});b.curCSS=b.css;
b.each(["height","width"],function(bv,e){b.cssHooks[e]={get:function(by,bx,bw){var bz;
if(bx){if(by.offsetWidth!==0){return p(by,e,bw)
}else{b.swap(by,a7,function(){bz=p(by,e,bw)
})}return bz
}},set:function(bw,bx){if(bc.test(bx)){bx=parseFloat(bx);
if(bx>=0){return bx+"px"
}}else{return bx
}}}});if(!b.support.opacity){b.cssHooks.opacity={get:function(bv,e){return au.test((e&&bv.currentStyle?bv.currentStyle.filter:bv.style.filter)||"")?(parseFloat(RegExp.$1)/100)+"":e?"1":""
},set:function(by,bz){var bx=by.style,bv=by.currentStyle,e=b.isNumeric(bz)?"alpha(opacity="+bz*100+")":"",bw=bv&&bv.filter||bx.filter||"";
bx.zoom=1;if(bz>=1&&b.trim(bw.replace(ak,""))===""){bx.removeAttribute("filter");
if(bv&&!bv.filter){return
}}bx.filter=ak.test(bw)?bw.replace(ak,e):bw+" "+e
}}}b(function(){if(!b.support.reliableMarginRight){b.cssHooks.marginRight={get:function(bw,bv){var e;
b.swap(bw,{display:"inline-block"},function(){if(bv){e=Z(bw,"margin-right","marginRight")
}else{e=bw.style.marginRight
}});return e
}}}});if(av.defaultView&&av.defaultView.getComputedStyle){aI=function(by,bw){var bv,bx,e;
bw=bw.replace(z,"-$1").toLowerCase();
if((bx=by.ownerDocument.defaultView)&&(e=bx.getComputedStyle(by,null))){bv=e.getPropertyValue(bw);
if(bv===""&&!b.contains(by.ownerDocument.documentElement,by)){bv=b.style(by,bw)
}}return bv
}}if(av.documentElement.currentStyle){aX=function(bz,bw){var bA,e,by,bv=bz.currentStyle&&bz.currentStyle[bw],bx=bz.style;
if(bv===null&&bx&&(by=bx[bw])){bv=by
}if(!bc.test(bv)&&bn.test(bv)){bA=bx.left;
e=bz.runtimeStyle&&bz.runtimeStyle.left;
if(e){bz.runtimeStyle.left=bz.currentStyle.left
}bx.left=bw==="fontSize"?"1em":(bv||0);
bv=bx.pixelLeft+"px";
bx.left=bA;
if(e){bz.runtimeStyle.left=e
}}return bv===""?"auto":bv
}}Z=aI||aX;
function p(by,bw,bv){var bA=bw==="width"?by.offsetWidth:by.offsetHeight,bz=bw==="width"?an:a1,bx=0,e=bz.length;
if(bA>0){if(bv!=="border"){for(;
bx<e;bx++){if(!bv){bA-=parseFloat(b.css(by,"padding"+bz[bx]))||0
}if(bv==="margin"){bA+=parseFloat(b.css(by,bv+bz[bx]))||0
}else{bA-=parseFloat(b.css(by,"border"+bz[bx]+"Width"))||0
}}}return bA+"px"
}bA=Z(by,bw,bw);
if(bA<0||bA==null){bA=by.style[bw]||0
}bA=parseFloat(bA)||0;
if(bv){for(;
bx<e;bx++){bA+=parseFloat(b.css(by,"padding"+bz[bx]))||0;
if(bv!=="padding"){bA+=parseFloat(b.css(by,"border"+bz[bx]+"Width"))||0
}if(bv==="margin"){bA+=parseFloat(b.css(by,bv+bz[bx]))||0
}}}return bA+"px"
}if(b.expr&&b.expr.filters){b.expr.filters.hidden=function(bw){var bv=bw.offsetWidth,e=bw.offsetHeight;
return(bv===0&&e===0)||(!b.support.reliableHiddenOffsets&&((bw.style&&bw.style.display)||b.css(bw,"display"))==="none")
};b.expr.filters.visible=function(e){return !b.expr.filters.hidden(e)
}}var k=/%20/g,ap=/\[\]$/,bs=/\r?\n/g,bq=/#.*$/,aD=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,aZ=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,aM=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,aQ=/^(?:GET|HEAD)$/,c=/^\/\//,M=/\?/,a6=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,q=/^(?:select|textarea)/i,h=/\s+/,br=/([?&])_=[^&]*/,K=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,A=b.fn.load,aa={},r={},aE,s,aV=["*/"]+["*"];
try{aE=bl.href
}catch(aw){aE=av.createElement("a");
aE.href="";
aE=aE.href}s=K.exec(aE.toLowerCase())||[];
function f(e){return function(by,bA){if(typeof by!=="string"){bA=by;
by="*"}if(b.isFunction(bA)){var bx=by.toLowerCase().split(h),bw=0,bz=bx.length,bv,bB,bC;
for(;bw<bz;
bw++){bv=bx[bw];
bC=/^\+/.test(bv);
if(bC){bv=bv.substr(1)||"*"
}bB=e[bv]=e[bv]||[];
bB[bC?"unshift":"push"](bA)
}}}}function aW(bv,bE,bz,bD,bB,bx){bB=bB||bE.dataTypes[0];
bx=bx||{};bx[bB]=true;
var bA=bv[bB],bw=0,e=bA?bA.length:0,by=(bv===aa),bC;
for(;bw<e&&(by||!bC);
bw++){bC=bA[bw](bE,bz,bD);
if(typeof bC==="string"){if(!by||bx[bC]){bC=L
}else{bE.dataTypes.unshift(bC);
bC=aW(bv,bE,bz,bD,bC,bx)
}}}if((by||!bC)&&!bx["*"]){bC=aW(bv,bE,bz,bD,"*",bx)
}return bC}function am(bw,bx){var bv,e,by=b.ajaxSettings.flatOptions||{};
for(bv in bx){if(bx[bv]!==L){(by[bv]?bw:(e||(e={})))[bv]=bx[bv]
}}if(e){b.extend(true,bw,e)
}}b.fn.extend({load:function(bw,bz,bA){if(typeof bw!=="string"&&A){return A.apply(this,arguments)
}else{if(!this.length){return this
}}var by=bw.indexOf(" ");
if(by>=0){var e=bw.slice(by,bw.length);
bw=bw.slice(0,by)
}var bx="GET";
if(bz){if(b.isFunction(bz)){bA=bz;
bz=L}else{if(typeof bz==="object"){bz=b.param(bz,b.ajaxSettings.traditional);
bx="POST"}}}var bv=this;
b.ajax({url:bw,type:bx,dataType:"html",data:bz,complete:function(bC,bB,bD){bD=bC.responseText;
if(bC.isResolved()){bC.done(function(bE){bD=bE
});bv.html(e?b("<div>").append(bD.replace(a6,"")).find(e):bD)
}if(bA){bv.each(bA,[bD,bB,bC])
}}});return this
},serialize:function(){return b.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){return this.elements?b.makeArray(this.elements):this
}).filter(function(){return this.name&&!this.disabled&&(this.checked||q.test(this.nodeName)||aZ.test(this.type))
}).map(function(e,bv){var bw=b(this).val();
return bw==null?null:b.isArray(bw)?b.map(bw,function(by,bx){return{name:bv.name,value:by.replace(bs,"\r\n")}
}):{name:bv.name,value:bw.replace(bs,"\r\n")}
}).get()}});
b.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,bv){b.fn[bv]=function(bw){return this.on(bv,bw)
}});b.each(["get","post"],function(e,bv){b[bv]=function(bw,by,bz,bx){if(b.isFunction(by)){bx=bx||bz;
bz=by;by=L}return b.ajax({type:bv,url:bw,data:by,success:bz,dataType:bx})
}});b.extend({getScript:function(e,bv){return b.get(e,L,bv,"script")
},getJSON:function(e,bv,bw){return b.get(e,bv,bw,"json")
},ajaxSetup:function(bv,e){if(e){am(bv,b.ajaxSettings)
}else{e=bv;
bv=b.ajaxSettings
}am(bv,e);return bv
},ajaxSettings:{url:aE,isLocal:aM.test(s[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":aV},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":bb.String,"text html":true,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{context:true,url:true}},ajaxPrefilter:f(aa),ajaxTransport:f(r),ajax:function(bz,bx){if(typeof bz==="object"){bx=bz;
bz=L}bx=bx||{};
var bD=b.ajaxSetup({},bx),bS=bD.context||bD,bG=bS!==bD&&(bS.nodeType||bS instanceof b)?b(bS):b.event,bR=b.Deferred(),bN=b.Callbacks("once memory"),bB=bD.statusCode||{},bC,bH={},bO={},bQ,by,bL,bE,bI,bA=0,bw,bK,bJ={readyState:0,setRequestHeader:function(bT,bU){if(!bA){var e=bT.toLowerCase();
bT=bO[e]=bO[e]||bT;
bH[bT]=bU}return this
},getAllResponseHeaders:function(){return bA===2?bQ:null
},getResponseHeader:function(bT){var e;
if(bA===2){if(!by){by={};
while((e=aD.exec(bQ))){by[e[1].toLowerCase()]=e[2]
}}e=by[bT.toLowerCase()]
}return e===L?null:e
},overrideMimeType:function(e){if(!bA){bD.mimeType=e
}return this
},abort:function(e){e=e||"abort";
if(bL){bL.abort(e)
}bF(0,e);return this
}};function bF(bZ,bU,b0,bW){if(bA===2){return
}bA=2;if(bE){clearTimeout(bE)
}bL=L;bQ=bW||"";
bJ.readyState=bZ>0?4:0;
var bT,b4,b3,bX=bU,bY=b0?bj(bD,bJ,b0):L,bV,b2;
if(bZ>=200&&bZ<300||bZ===304){if(bD.ifModified){if((bV=bJ.getResponseHeader("Last-Modified"))){b.lastModified[bC]=bV
}if((b2=bJ.getResponseHeader("Etag"))){b.etag[bC]=b2
}}if(bZ===304){bX="notmodified";
bT=true}else{try{b4=G(bD,bY);
bX="success";
bT=true}catch(b1){bX="parsererror";
b3=b1}}}else{b3=bX;
if(!bX||bZ){bX="error";
if(bZ<0){bZ=0
}}}bJ.status=bZ;
bJ.statusText=""+(bU||bX);
if(bT){bR.resolveWith(bS,[b4,bX,bJ])
}else{bR.rejectWith(bS,[bJ,bX,b3])
}bJ.statusCode(bB);
bB=L;if(bw){bG.trigger("ajax"+(bT?"Success":"Error"),[bJ,bD,bT?b4:b3])
}bN.fireWith(bS,[bJ,bX]);
if(bw){bG.trigger("ajaxComplete",[bJ,bD]);
if(!(--b.active)){b.event.trigger("ajaxStop")
}}}bR.promise(bJ);
bJ.success=bJ.done;
bJ.error=bJ.fail;
bJ.complete=bN.add;
bJ.statusCode=function(bT){if(bT){var e;
if(bA<2){for(e in bT){bB[e]=[bB[e],bT[e]]
}}else{e=bT[bJ.status];
bJ.then(e,e)
}}return this
};bD.url=((bz||bD.url)+"").replace(bq,"").replace(c,s[1]+"//");
bD.dataTypes=b.trim(bD.dataType||"*").toLowerCase().split(h);
if(bD.crossDomain==null){bI=K.exec(bD.url.toLowerCase());
bD.crossDomain=!!(bI&&(bI[1]!=s[1]||bI[2]!=s[2]||(bI[3]||(bI[1]==="http:"?80:443))!=(s[3]||(s[1]==="http:"?80:443))))
}if(bD.data&&bD.processData&&typeof bD.data!=="string"){bD.data=b.param(bD.data,bD.traditional)
}aW(aa,bD,bx,bJ);
if(bA===2){return false
}bw=bD.global;
bD.type=bD.type.toUpperCase();
bD.hasContent=!aQ.test(bD.type);
if(bw&&b.active++===0){b.event.trigger("ajaxStart")
}if(!bD.hasContent){if(bD.data){bD.url+=(M.test(bD.url)?"&":"?")+bD.data;
delete bD.data
}bC=bD.url;
if(bD.cache===false){var bv=b.now(),bP=bD.url.replace(br,"$1_="+bv);
bD.url=bP+((bP===bD.url)?(M.test(bD.url)?"&":"?")+"_="+bv:"")
}}if(bD.data&&bD.hasContent&&bD.contentType!==false||bx.contentType){bJ.setRequestHeader("Content-Type",bD.contentType)
}if(bD.ifModified){bC=bC||bD.url;
if(b.lastModified[bC]){bJ.setRequestHeader("If-Modified-Since",b.lastModified[bC])
}if(b.etag[bC]){bJ.setRequestHeader("If-None-Match",b.etag[bC])
}}bJ.setRequestHeader("Accept",bD.dataTypes[0]&&bD.accepts[bD.dataTypes[0]]?bD.accepts[bD.dataTypes[0]]+(bD.dataTypes[0]!=="*"?", "+aV+"; q=0.01":""):bD.accepts["*"]);
for(bK in bD.headers){bJ.setRequestHeader(bK,bD.headers[bK])
}if(bD.beforeSend&&(bD.beforeSend.call(bS,bJ,bD)===false||bA===2)){bJ.abort();
return false
}for(bK in {success:1,error:1,complete:1}){bJ[bK](bD[bK])
}bL=aW(r,bD,bx,bJ);
if(!bL){bF(-1,"No Transport")
}else{bJ.readyState=1;
if(bw){bG.trigger("ajaxSend",[bJ,bD])
}if(bD.async&&bD.timeout>0){bE=setTimeout(function(){bJ.abort("timeout")
},bD.timeout)
}try{bA=1;bL.send(bH,bF)
}catch(bM){if(bA<2){bF(-1,bM)
}else{throw bM
}}}return bJ
},param:function(e,bw){var bv=[],by=function(bz,bA){bA=b.isFunction(bA)?bA():bA;
bv[bv.length]=encodeURIComponent(bz)+"="+encodeURIComponent(bA)
};if(bw===L){bw=b.ajaxSettings.traditional
}if(b.isArray(e)||(e.jquery&&!b.isPlainObject(e))){b.each(e,function(){by(this.name,this.value)
})}else{for(var bx in e){v(bx,e[bx],bw,by)
}}return bv.join("&").replace(k,"+")
}});function v(bw,by,bv,bx){if(b.isArray(by)){b.each(by,function(bA,bz){if(bv||ap.test(bw)){bx(bw,bz)
}else{v(bw+"["+(typeof bz==="object"||b.isArray(bz)?bA:"")+"]",bz,bv,bx)
}})}else{if(!bv&&by!=null&&typeof by==="object"){for(var e in by){v(bw+"["+e+"]",by[e],bv,bx)
}}else{bx(bw,by)
}}}b.extend({active:0,lastModified:{},etag:{}});
function bj(bD,bC,bz){var bv=bD.contents,bB=bD.dataTypes,bw=bD.responseFields,by,bA,bx,e;
for(bA in bw){if(bA in bz){bC[bw[bA]]=bz[bA]
}}while(bB[0]==="*"){bB.shift();
if(by===L){by=bD.mimeType||bC.getResponseHeader("content-type")
}}if(by){for(bA in bv){if(bv[bA]&&bv[bA].test(by)){bB.unshift(bA);
break}}}if(bB[0] in bz){bx=bB[0]
}else{for(bA in bz){if(!bB[0]||bD.converters[bA+" "+bB[0]]){bx=bA;
break}if(!e){e=bA
}}bx=bx||e}if(bx){if(bx!==bB[0]){bB.unshift(bx)
}return bz[bx]
}}function G(bH,bz){if(bH.dataFilter){bz=bH.dataFilter(bz,bH.dataType)
}var bD=bH.dataTypes,bG={},bA,bE,bw=bD.length,bB,bC=bD[0],bx,by,bF,bv,e;
for(bA=1;bA<bw;
bA++){if(bA===1){for(bE in bH.converters){if(typeof bE==="string"){bG[bE.toLowerCase()]=bH.converters[bE]
}}}bx=bC;bC=bD[bA];
if(bC==="*"){bC=bx
}else{if(bx!=="*"&&bx!==bC){by=bx+" "+bC;
bF=bG[by]||bG["* "+bC];
if(!bF){e=L;
for(bv in bG){bB=bv.split(" ");
if(bB[0]===bx||bB[0]==="*"){e=bG[bB[1]+" "+bC];
if(e){bv=bG[bv];
if(bv===true){bF=e
}else{if(e===true){bF=bv
}}break}}}}if(!(bF||e)){b.error("No conversion from "+by.replace(" "," to "))
}if(bF!==true){bz=bF?bF(bz):e(bv(bz))
}}}}return bz
}var aC=b.now(),u=/(\=)\?(&|$)|\?\?/i;
b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return b.expando+"_"+(aC++)
}});b.ajaxPrefilter("json jsonp",function(bD,bA,bC){var bx=bD.contentType==="application/x-www-form-urlencoded"&&(typeof bD.data==="string");
if(bD.dataTypes[0]==="jsonp"||bD.jsonp!==false&&(u.test(bD.url)||bx&&u.test(bD.data))){var bB,bw=bD.jsonpCallback=b.isFunction(bD.jsonpCallback)?bD.jsonpCallback():bD.jsonpCallback,bz=bb[bw],e=bD.url,by=bD.data,bv="$1"+bw+"$2";
if(bD.jsonp!==false){e=e.replace(u,bv);
if(bD.url===e){if(bx){by=by.replace(u,bv)
}if(bD.data===by){e+=(/\?/.test(e)?"&":"?")+bD.jsonp+"="+bw
}}}bD.url=e;
bD.data=by;
bb[bw]=function(bE){bB=[bE]
};bC.always(function(){bb[bw]=bz;
if(bB&&b.isFunction(bz)){bb[bw](bB[0])
}});bD.converters["script json"]=function(){if(!bB){b.error(bw+" was not called")
}return bB[0]
};bD.dataTypes[0]="json";
return"script"
}});b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){b.globalEval(e);
return e}}});
b.ajaxPrefilter("script",function(e){if(e.cache===L){e.cache=false
}if(e.crossDomain){e.type="GET";
e.global=false
}});b.ajaxTransport("script",function(bw){if(bw.crossDomain){var e,bv=av.head||av.getElementsByTagName("head")[0]||av.documentElement;
return{send:function(bx,by){e=av.createElement("script");
e.async="async";
if(bw.scriptCharset){e.charset=bw.scriptCharset
}e.src=bw.url;
e.onload=e.onreadystatechange=function(bA,bz){if(bz||!e.readyState||/loaded|complete/.test(e.readyState)){e.onload=e.onreadystatechange=null;
if(bv&&e.parentNode){bv.removeChild(e)
}e=L;if(!bz){by(200,"success")
}}};bv.insertBefore(e,bv.firstChild)
},abort:function(){if(e){e.onload(0,1)
}}}}});var B=bb.ActiveXObject?function(){for(var e in N){N[e](0,1)
}}:false,y=0,N;
function aL(){try{return new bb.XMLHttpRequest()
}catch(bv){}}function aj(){try{return new bb.ActiveXObject("Microsoft.XMLHTTP")
}catch(bv){}}b.ajaxSettings.xhr=bb.ActiveXObject?function(){return !this.isLocal&&aL()||aj()
}:aL;(function(e){b.extend(b.support,{ajax:!!e,cors:!!e&&("withCredentials" in e)})
})(b.ajaxSettings.xhr());
if(b.support.ajax){b.ajaxTransport(function(e){if(!e.crossDomain||b.support.cors){var bv;
return{send:function(bB,bw){var bA=e.xhr(),bz,by;
if(e.username){bA.open(e.type,e.url,e.async,e.username,e.password)
}else{bA.open(e.type,e.url,e.async)
}if(e.xhrFields){for(by in e.xhrFields){bA[by]=e.xhrFields[by]
}}if(e.mimeType&&bA.overrideMimeType){bA.overrideMimeType(e.mimeType)
}if(!e.crossDomain&&!bB["X-Requested-With"]){bB["X-Requested-With"]="XMLHttpRequest"
}try{for(by in bB){bA.setRequestHeader(by,bB[by])
}}catch(bx){}bA.send((e.hasContent&&e.data)||null);
bv=function(bK,bE){var bF,bD,bC,bI,bH;
try{if(bv&&(bE||bA.readyState===4)){bv=L;
if(bz){bA.onreadystatechange=b.noop;
if(B){delete N[bz]
}}if(bE){if(bA.readyState!==4){bA.abort()
}}else{bF=bA.status;
bC=bA.getAllResponseHeaders();
bI={};bH=bA.responseXML;
if(bH&&bH.documentElement){bI.xml=bH
}bI.text=bA.responseText;
try{bD=bA.statusText
}catch(bJ){bD=""
}if(!bF&&e.isLocal&&!e.crossDomain){bF=bI.text?200:404
}else{if(bF===1223){bF=204
}}}}}catch(bG){if(!bE){bw(-1,bG)
}}if(bI){bw(bF,bD,bI,bC)
}};if(!e.async||bA.readyState===4){bv()
}else{bz=++y;
if(B){if(!N){N={};
b(bb).unload(B)
}N[bz]=bv}bA.onreadystatechange=bv
}},abort:function(){if(bv){bv(0,1)
}}}}})}var Q={},a8,m,aB=/^(?:toggle|show|hide)$/,aT=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,a3,aH=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],a4;
b.fn.extend({show:function(bx,bA,bz){var bw,by;
if(bx||bx===0){return this.animate(a0("show",3),bx,bA,bz)
}else{for(var bv=0,e=this.length;
bv<e;bv++){bw=this[bv];
if(bw.style){by=bw.style.display;
if(!b._data(bw,"olddisplay")&&by==="none"){by=bw.style.display=""
}if(by===""&&b.css(bw,"display")==="none"){b._data(bw,"olddisplay",x(bw.nodeName))
}}}for(bv=0;
bv<e;bv++){bw=this[bv];
if(bw.style){by=bw.style.display;
if(by===""||by==="none"){bw.style.display=b._data(bw,"olddisplay")||""
}}}return this
}},hide:function(bx,bA,bz){if(bx||bx===0){return this.animate(a0("hide",3),bx,bA,bz)
}else{var bw,by,bv=0,e=this.length;
for(;bv<e;bv++){bw=this[bv];
if(bw.style){by=b.css(bw,"display");
if(by!=="none"&&!b._data(bw,"olddisplay")){b._data(bw,"olddisplay",by)
}}}for(bv=0;
bv<e;bv++){if(this[bv].style){this[bv].style.display="none"
}}return this
}},_toggle:b.fn.toggle,toggle:function(bw,bv,bx){var e=typeof bw==="boolean";
if(b.isFunction(bw)&&b.isFunction(bv)){this._toggle.apply(this,arguments)
}else{if(bw==null||e){this.each(function(){var by=e?bw:b(this).is(":hidden");
b(this)[by?"show":"hide"]()
})}else{this.animate(a0("toggle",3),bw,bv,bx)
}}return this
},fadeTo:function(e,bx,bw,bv){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:bx},e,bw,bv)
},animate:function(bz,bw,by,bx){var e=b.speed(bw,by,bx);
if(b.isEmptyObject(bz)){return this.each(e.complete,[false])
}bz=b.extend({},bz);
function bv(){if(e.queue===false){b._mark(this)
}var bE=b.extend({},e),bK=this.nodeType===1,bI=bK&&b(this).is(":hidden"),bB,bF,bD,bJ,bH,bC,bG,bL,bA;
bE.animatedProperties={};
for(bD in bz){bB=b.camelCase(bD);
if(bD!==bB){bz[bB]=bz[bD];
delete bz[bD]
}bF=bz[bB];
if(b.isArray(bF)){bE.animatedProperties[bB]=bF[1];
bF=bz[bB]=bF[0]
}else{bE.animatedProperties[bB]=bE.specialEasing&&bE.specialEasing[bB]||bE.easing||"swing"
}if(bF==="hide"&&bI||bF==="show"&&!bI){return bE.complete.call(this)
}if(bK&&(bB==="height"||bB==="width")){bE.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];
if(b.css(this,"display")==="inline"&&b.css(this,"float")==="none"){if(!b.support.inlineBlockNeedsLayout||x(this.nodeName)==="inline"){this.style.display="inline-block"
}else{this.style.zoom=1
}}}}if(bE.overflow!=null){this.style.overflow="hidden"
}for(bD in bz){bJ=new b.fx(this,bE,bD);
bF=bz[bD];if(aB.test(bF)){bA=b._data(this,"toggle"+bD)||(bF==="toggle"?bI?"show":"hide":0);
if(bA){b._data(this,"toggle"+bD,bA==="show"?"hide":"show");
bJ[bA]()}else{bJ[bF]()
}}else{bH=aT.exec(bF);
bC=bJ.cur();
if(bH){bG=parseFloat(bH[2]);
bL=bH[3]||(b.cssNumber[bD]?"":"px");
if(bL!=="px"){b.style(this,bD,(bG||1)+bL);
bC=((bG||1)/bJ.cur())*bC;
b.style(this,bD,bC+bL)
}if(bH[1]){bG=((bH[1]==="-="?-1:1)*bG)+bC
}bJ.custom(bC,bG,bL)
}else{bJ.custom(bC,bF,"")
}}}return true
}return e.queue===false?this.each(bv):this.queue(e.queue,bv)
},stop:function(bw,bv,e){if(typeof bw!=="string"){e=bv;
bv=bw;bw=L}if(bv&&bw!==false){this.queue(bw||"fx",[])
}return this.each(function(){var bx,by=false,bA=b.timers,bz=b._data(this);
if(!e){b._unmark(true,this)
}function bB(bE,bF,bD){var bC=bF[bD];
b.removeData(bE,bD,true);
bC.stop(e)}if(bw==null){for(bx in bz){if(bz[bx]&&bz[bx].stop&&bx.indexOf(".run")===bx.length-4){bB(this,bz,bx)
}}}else{if(bz[bx=bw+".run"]&&bz[bx].stop){bB(this,bz,bx)
}}for(bx=bA.length;
bx--;){if(bA[bx].elem===this&&(bw==null||bA[bx].queue===bw)){if(e){bA[bx](true)
}else{bA[bx].saveState()
}by=true;bA.splice(bx,1)
}}if(!(e&&by)){b.dequeue(this,bw)
}})}});function bh(){setTimeout(at,0);
return(a4=b.now())
}function at(){a4=L
}function a0(bv,e){var bw={};
b.each(aH.concat.apply([],aH.slice(0,e)),function(){bw[this]=bv
});return bw
}b.each({slideDown:a0("show",1),slideUp:a0("hide",1),slideToggle:a0("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,bv){b.fn[e]=function(bw,by,bx){return this.animate(bv,bw,by,bx)
}});b.extend({speed:function(bw,bx,bv){var e=bw&&typeof bw==="object"?b.extend({},bw):{complete:bv||!bv&&bx||b.isFunction(bw)&&bw,duration:bw,easing:bv&&bx||bx&&!b.isFunction(bx)&&bx};
e.duration=b.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in b.fx.speeds?b.fx.speeds[e.duration]:b.fx.speeds._default;
if(e.queue==null||e.queue===true){e.queue="fx"
}e.old=e.complete;
e.complete=function(by){if(b.isFunction(e.old)){e.old.call(this)
}if(e.queue){b.dequeue(this,e.queue)
}else{if(by!==false){b._unmark(this)
}}};return e
},easing:{linear:function(bw,bx,e,bv){return e+bv*bw
},swing:function(bw,bx,e,bv){return((-Math.cos(bw*Math.PI)/2)+0.5)*bv+e
}},timers:[],fx:function(bv,e,bw){this.options=e;
this.elem=bv;
this.prop=bw;
e.orig=e.orig||{}
}});b.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)
}(b.fx.step[this.prop]||b.fx.step._default)(this)
},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]
}var e,bv=b.css(this.elem,this.prop);
return isNaN(e=parseFloat(bv))?!bv||bv==="auto"?0:bv:e
},custom:function(bz,by,bx){var e=this,bw=b.fx;
this.startTime=a4||bh();
this.end=by;
this.now=this.start=bz;
this.pos=this.state=0;
this.unit=bx||this.unit||(b.cssNumber[this.prop]?"":"px");
function bv(bA){return e.step(bA)
}bv.queue=this.options.queue;
bv.elem=this.elem;
bv.saveState=function(){if(e.options.hide&&b._data(e.elem,"fxshow"+e.prop)===L){b._data(e.elem,"fxshow"+e.prop,e.start)
}};if(bv()&&b.timers.push(bv)&&!a3){a3=setInterval(bw.tick,bw.interval)
}},show:function(){var e=b._data(this.elem,"fxshow"+this.prop);
this.options.orig[this.prop]=e||b.style(this.elem,this.prop);
this.options.show=true;
if(e!==L){this.custom(this.cur(),e)
}else{this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur())
}b(this.elem).show()
},hide:function(){this.options.orig[this.prop]=b._data(this.elem,"fxshow"+this.prop)||b.style(this.elem,this.prop);
this.options.hide=true;
this.custom(this.cur(),0)
},step:function(by){var bA,bB,bv,bx=a4||bh(),e=true,bz=this.elem,bw=this.options;
if(by||bx>=bw.duration+this.startTime){this.now=this.end;
this.pos=this.state=1;
this.update();
bw.animatedProperties[this.prop]=true;
for(bA in bw.animatedProperties){if(bw.animatedProperties[bA]!==true){e=false
}}if(e){if(bw.overflow!=null&&!b.support.shrinkWrapBlocks){b.each(["","X","Y"],function(bC,bD){bz.style["overflow"+bD]=bw.overflow[bC]
})}if(bw.hide){b(bz).hide()
}if(bw.hide||bw.show){for(bA in bw.animatedProperties){b.style(bz,bA,bw.orig[bA]);
b.removeData(bz,"fxshow"+bA,true);
b.removeData(bz,"toggle"+bA,true)
}}bv=bw.complete;
if(bv){bw.complete=false;
bv.call(bz)
}}return false
}else{if(bw.duration==Infinity){this.now=bx
}else{bB=bx-this.startTime;
this.state=bB/bw.duration;
this.pos=b.easing[bw.animatedProperties[this.prop]](this.state,bB,0,1,bw.duration);
this.now=this.start+((this.end-this.start)*this.pos)
}this.update()
}return true
}};b.extend(b.fx,{tick:function(){var bw,bv=b.timers,e=0;
for(;e<bv.length;
e++){bw=bv[e];
if(!bw()&&bv[e]===bw){bv.splice(e--,1)
}}if(!bv.length){b.fx.stop()
}},interval:13,stop:function(){clearInterval(a3);
a3=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(e){b.style(e.elem,"opacity",e.now)
},_default:function(e){if(e.elem.style&&e.elem.style[e.prop]!=null){e.elem.style[e.prop]=e.now+e.unit
}else{e.elem[e.prop]=e.now
}}}});b.each(["width","height"],function(e,bv){b.fx.step[bv]=function(bw){b.style(bw.elem,bv,Math.max(0,bw.now)+bw.unit)
}});if(b.expr&&b.expr.filters){b.expr.filters.animated=function(e){return b.grep(b.timers,function(bv){return e===bv.elem
}).length}}function x(bx){if(!Q[bx]){var e=av.body,bv=b("<"+bx+">").appendTo(e),bw=bv.css("display");
bv.remove();
if(bw==="none"||bw===""){if(!a8){a8=av.createElement("iframe");
a8.frameBorder=a8.width=a8.height=0
}e.appendChild(a8);
if(!m||!a8.createElement){m=(a8.contentWindow||a8.contentDocument).document;
m.write((av.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>");
m.close()}bv=m.createElement(bx);
m.body.appendChild(bv);
bw=b.css(bv,"display");
e.removeChild(a8)
}Q[bx]=bw}return Q[bx]
}var V=/^t(?:able|d|h)$/i,ad=/^(?:body|html)$/i;
if("getBoundingClientRect" in av.documentElement){b.fn.offset=function(bI){var by=this[0],bB;
if(bI){return this.each(function(e){b.offset.setOffset(this,bI,e)
})}if(!by||!by.ownerDocument){return null
}if(by===by.ownerDocument.body){return b.offset.bodyOffset(by)
}try{bB=by.getBoundingClientRect()
}catch(bF){}var bH=by.ownerDocument,bw=bH.documentElement;
if(!bB||!b.contains(bw,by)){return bB?{top:bB.top,left:bB.left}:{top:0,left:0}
}var bC=bH.body,bD=aK(bH),bA=bw.clientTop||bC.clientTop||0,bE=bw.clientLeft||bC.clientLeft||0,bv=bD.pageYOffset||b.support.boxModel&&bw.scrollTop||bC.scrollTop,bz=bD.pageXOffset||b.support.boxModel&&bw.scrollLeft||bC.scrollLeft,bG=bB.top+bv-bA,bx=bB.left+bz-bE;
return{top:bG,left:bx}
}}else{b.fn.offset=function(bF){var bz=this[0];
if(bF){return this.each(function(bG){b.offset.setOffset(this,bF,bG)
})}if(!bz||!bz.ownerDocument){return null
}if(bz===bz.ownerDocument.body){return b.offset.bodyOffset(bz)
}var bC,bw=bz.offsetParent,bv=bz,bE=bz.ownerDocument,bx=bE.documentElement,bA=bE.body,bB=bE.defaultView,e=bB?bB.getComputedStyle(bz,null):bz.currentStyle,bD=bz.offsetTop,by=bz.offsetLeft;
while((bz=bz.parentNode)&&bz!==bA&&bz!==bx){if(b.support.fixedPosition&&e.position==="fixed"){break
}bC=bB?bB.getComputedStyle(bz,null):bz.currentStyle;
bD-=bz.scrollTop;
by-=bz.scrollLeft;
if(bz===bw){bD+=bz.offsetTop;
by+=bz.offsetLeft;
if(b.support.doesNotAddBorder&&!(b.support.doesAddBorderForTableAndCells&&V.test(bz.nodeName))){bD+=parseFloat(bC.borderTopWidth)||0;
by+=parseFloat(bC.borderLeftWidth)||0
}bv=bw;bw=bz.offsetParent
}if(b.support.subtractsBorderForOverflowNotVisible&&bC.overflow!=="visible"){bD+=parseFloat(bC.borderTopWidth)||0;
by+=parseFloat(bC.borderLeftWidth)||0
}e=bC}if(e.position==="relative"||e.position==="static"){bD+=bA.offsetTop;
by+=bA.offsetLeft
}if(b.support.fixedPosition&&e.position==="fixed"){bD+=Math.max(bx.scrollTop,bA.scrollTop);
by+=Math.max(bx.scrollLeft,bA.scrollLeft)
}return{top:bD,left:by}
}}b.offset={bodyOffset:function(e){var bw=e.offsetTop,bv=e.offsetLeft;
if(b.support.doesNotIncludeMarginInBodyOffset){bw+=parseFloat(b.css(e,"marginTop"))||0;
bv+=parseFloat(b.css(e,"marginLeft"))||0
}return{top:bw,left:bv}
},setOffset:function(bx,bG,bA){var bB=b.css(bx,"position");
if(bB==="static"){bx.style.position="relative"
}var bz=b(bx),bv=bz.offset(),e=b.css(bx,"top"),bE=b.css(bx,"left"),bF=(bB==="absolute"||bB==="fixed")&&b.inArray("auto",[e,bE])>-1,bD={},bC={},bw,by;
if(bF){bC=bz.position();
bw=bC.top;by=bC.left
}else{bw=parseFloat(e)||0;
by=parseFloat(bE)||0
}if(b.isFunction(bG)){bG=bG.call(bx,bA,bv)
}if(bG.top!=null){bD.top=(bG.top-bv.top)+bw
}if(bG.left!=null){bD.left=(bG.left-bv.left)+by
}if("using" in bG){bG.using.call(bx,bD)
}else{bz.css(bD)
}}};b.fn.extend({position:function(){if(!this[0]){return null
}var bw=this[0],bv=this.offsetParent(),bx=this.offset(),e=ad.test(bv[0].nodeName)?{top:0,left:0}:bv.offset();
bx.top-=parseFloat(b.css(bw,"marginTop"))||0;
bx.left-=parseFloat(b.css(bw,"marginLeft"))||0;
e.top+=parseFloat(b.css(bv[0],"borderTopWidth"))||0;
e.left+=parseFloat(b.css(bv[0],"borderLeftWidth"))||0;
return{top:bx.top-e.top,left:bx.left-e.left}
},offsetParent:function(){return this.map(function(){var e=this.offsetParent||av.body;
while(e&&(!ad.test(e.nodeName)&&b.css(e,"position")==="static")){e=e.offsetParent
}return e})
}});b.each(["Left","Top"],function(bv,e){var bw="scroll"+e;
b.fn[bw]=function(bz){var bx,by;
if(bz===L){bx=this[0];
if(!bx){return null
}by=aK(bx);
return by?("pageXOffset" in by)?by[bv?"pageYOffset":"pageXOffset"]:b.support.boxModel&&by.document.documentElement[bw]||by.document.body[bw]:bx[bw]
}return this.each(function(){by=aK(this);
if(by){by.scrollTo(!bv?bz:b(by).scrollLeft(),bv?bz:b(by).scrollTop())
}else{this[bw]=bz
}})}});function aK(e){return b.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:false
}b.each(["Height","Width"],function(bv,e){var bw=e.toLowerCase();
b.fn["inner"+e]=function(){var bx=this[0];
return bx?bx.style?parseFloat(b.css(bx,bw,"padding")):this[bw]():null
};b.fn["outer"+e]=function(by){var bx=this[0];
return bx?bx.style?parseFloat(b.css(bx,bw,by?"margin":"border")):this[bw]():null
};b.fn[bw]=function(bz){var bA=this[0];
if(!bA){return bz==null?null:this
}if(b.isFunction(bz)){return this.each(function(bE){var bD=b(this);
bD[bw](bz.call(this,bE,bD[bw]()))
})}if(b.isWindow(bA)){var bB=bA.document.documentElement["client"+e],bx=bA.document.body;
return bA.document.compatMode==="CSS1Compat"&&bB||bx&&bx["client"+e]||bB
}else{if(bA.nodeType===9){return Math.max(bA.documentElement["client"+e],bA.body["scroll"+e],bA.documentElement["scroll"+e],bA.body["offset"+e],bA.documentElement["offset"+e])
}else{if(bz===L){var bC=b.css(bA,bw),by=parseFloat(bC);
return b.isNumeric(by)?by:bC
}else{return this.css(bw,typeof bz==="string"?bz:bz+"px")
}}}}});bb.zQuery=b;
if(typeof define==="function"&&define.amd&&define.amd.jQuery){define("jquery",[],function(){return b
})}})(window);
(function(){var a=window.zQuery;
window.ZemantaUtils={isHttps:window.location.protocol==="https:",staticDomain:window.location.protocol==="https:"?"https://static.zemanta.com/":"http://fstatic.zemanta.com/",tokenList:function(){var c=[],e={};
function b(d){return d&&d.length
}c.item=function(d){return c[d]
};c.contains=function(d){if(b(d)){return e[d]
}return false
};c.add=function(d){if(b(d)&&!e[d]){c.push(d);
e[d]=true}return c
};c.remove=function(d){if(b(d)&&e[d]){c.splice(Array.indexOf(c,d),1);
delete e[d]
}return c};
c.toggle=function(d){if(b(d)){c[c.contains(d)&&"remove"||"add"]()
}return c};
c.print=function(f,g){var d=c.join(" ");
return d&&(f||"")+d+(g||"")||""
};c.toString=c.print;
return c}};
window.ZemantaHelpers={array_index:function(b,e,c){var d={};
a.each(b,function(){var f=e?this[e]:c(this);
if(!d[f]){d[f]=this
}});return d
},base64:(function(){var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",b=function(f){f=f.replace(/\x0d\x0a/g,"\x0a");
var g="",e=0,d=f.length,h=0;
for(;e<d;e+=1){h=f.charCodeAt(e);
if(h<128){g+=String.fromCharCode(h)
}else{if((h>127)&&(h<2048)){g+=String.fromCharCode((h>>6)|192);
g+=String.fromCharCode((h&63)|128)
}else{g+=String.fromCharCode((h>>12)|224);
g+=String.fromCharCode(((h>>6)&63)|128);
g+=String.fromCharCode((h&63)|128)
}}}return g
};return function(p){p=b(p);
var d="",k="",g="",e="",o=0,n=0,m=0,l=0,h=0,f=p.length;
while(h<f){k=p.charCodeAt(h);
h+=1;g=p.charCodeAt(h);
h+=1;e=p.charCodeAt(h);
h+=1;o=k>>2;
n=((k&3)<<4)|(g>>4);
m=((g&15)<<2)|(e>>6);
l=e&63;if(isNaN(g)){m=l=64
}else{if(isNaN(e)){l=64
}}d=d+c.charAt(o)+c.charAt(n)+c.charAt(m)+c.charAt(l)
}return d}}()),check_feature:function(b){try{return window.top.location.hash.indexOf(b)>=0
}catch(c){return window.location.hash.indexOf(b)>=0
}},clone:function(c){if(c===null||typeof(c)!=="object"){return c
}var b=new c.constructor();
a.each(c,function(d,e){b[d]=ZemantaHelpers.clone(e)
});return b
},simple_clone:function(d){var b,c={};
for(b in d){if(typeof d[b]!=="object"){c[b]=d[b]
}}return c},close_tags:function(g,d){var e,c="",h=["img","br","hr","meta","link","input","param","area","col"],f=["embed"],b=[];
b=d==="1"?h.concat(f):f;
e=arguments.callee["r"+d]=arguments.callee["r"+d]||new RegExp("<("+b.join("|")+")([^>]*)>","gi");
c=g.replace(e,function(k,i,j){while(" /".indexOf(j.slice(-1))>=0&&j.length>0){j=j.substr(0,j.length-1)
}return a.grep(h,function(l){return l===i.toLowerCase()
})[0]?"<"+i+j+" />":"<"+i+j+"></"+i+">"
});return c
},copy:(function(){var b=function(c){this.my={props:typeof c==="string"?[c]:c}
};b.prototype={from:function(d){var c=this.my;
c.src=d;return c.src&&c.dest&&this.exec()||this
},to:function(d){var c=this.my;
c.dest=d||{};
return c.src&&c.dest&&this.exec()||this
},exec:function(){var c=this.my;
if(!c.props){c.props=[];
a.each(c.src,function(d,e){c.props.push(d)
})}return ZemantaHelpers.copy_properties(c.src,c.dest,c.props)
}};return function(c){var d=function(){};
d.prototype=new b(c);
return new d()
}}()),copy_properties:function(b,e,c){a.each(c,function(){if(typeof b[this]!=="undefined"){e[this]=b[this]
}});return e
},create_fragment:function(b,e){e=e&&e.ownerDocument||e||document;
var f=true,d=e.createDocumentFragment(),c=e.createElement("div"),g=null;
if(typeof b==="string"){c.innerHTML="|"+b
}else{c=b;f=false
}while(c.childNodes.length){g=c.childNodes[0];
if(f&&g.nodeType===3){g.nodeValue=g.nodeValue.substr(1);
if(g.nodeValue===""){c.removeChild(g);
continue}}d.appendChild(g);
f=false}return d
},drag:(function(){var b=["#zemanta-sidebar #zemanta-gallery-wrap","#zemanta-sidebar #zemanta-articles-wrap","#zemanta-sidebar #zemanta-links-div-ul","#zemanta-sidebar #zemanta-tags-div-ul"];
function d(f,g,i){var h=f;
a.each(g.above,function(j,m){var k=i.above[j]-h,l=a(m);
if(!l.length){return true
}if(k<0){k=0;
h-=i.above[j]
}else{h=0}l.height(k);
return h!==0
});if(h>0){f-=h
}a.each(g.below,function(j,m){var k=i.below[j]+f,l=a(m);
if(!l.length){return true
}if(k<0){k=0;
f+=i.below[j]
}else{f=0}l.height(k);
return f!==0
})}function c(f){var g={};
a(document).unbind(".drag");
if(a("#zemanta-sidebar").height()!==0&&a("#zemanta-sidebar").css("display")!=="none"&&a("#zemanta-gallery").css("display")!=="none"&&a("#zemanta-articles").css("display")!=="none"){a.each(f.above.concat(f.below),function(h,j){if(a(j).height()!==null){g[j+"-size"]=a(j).height()
}});window.Zemanta.helpers.storage.set(g)
}}function e(g,f,h){if(typeof g==="function"){g.apply(f,h)
}}return function(i,h,f,g){if(window.Zemanta.platform&&window.Zemanta.platform.disable_draggable_resize){return false
}var j=null;
if(typeof h!=="string"){f=h;
h=null}f=f||{};
if(f.me||h){f.above=b.slice(0,Array.indexOf(b,f.me||h)).reverse();
f.below=b.slice(Array.indexOf(b,f.me||h))
}f.above=f.above||[];
f.below=f.below||[];
return a(i).find(".zemanta-drag-handle").remove().end().append('<span class="zemanta-drag-handle"></span>').attr("title","Drag to resize").on("mousedown",function(k){if(!a(this).hasClass("draggable")){return
}if(k.which===1){var l={above:[],below:[]},m=k.clientY;
j=this;a.each(f.above,function(o,p){l.above.push(a(p).height())
});a.each(f.below,function(o,p){l.below.push(a(p).height())
});a(document).bind({"mousemove.drag":function(n){d(m-n.clientY,f,l);
e(f.drag,j,[n]);
window.Zemanta.events.trigger(g?"dragMove."+g:"dragMove")
},"mouseup.drag":function(n){c(f);
e(f.stop,j,[n]);
window.Zemanta.events.trigger(g?"stopDrag."+g:"stopDrag")
}});k.preventDefault();
e(f.start,j,[k]);
window.Zemanta.events.trigger(g?"startDrag."+g:"startDrag")
}}).fin()}}()),elf_hash:function(e){var c,d=0,b=0;
for(c=0;c<e.length;
c+=1){d=(d<<4)+e.charCodeAt(c);
if((b=d&4026531840)!==0){d^=(b>>24);
d&=~b}}return""+(d&2147483647)
},empty:function(c){var b=true;
a.each(c,function(d){b=false;
return false
});return b
},encode_uri:function(b){b=encodeURI(b);
b=b.replace(/\(/g,"%28").replace(/\)/g,"%29");
return b},encode_url:function(b){var c=document.createElement("div");
c.innerHTML='<a href="'+b+'">';
return a("a",c).attr("href")
},extract_hostname:function(d){var f,b,c;
f=arguments.callee.e=arguments.callee.e||/\/\/((?:www|blog)\d*\.){0,1}(.*?)\//;
b=d.match(f);
if(b){c=b[2].indexOf(".")>=0?b[2]:(b[1]||"")+b[2];
if(c.indexOf("zemanta.com")>-1){if(d.split("?u=").length===2){return arguments.callee(d.split("?u=")[1])
}}return c}else{return""
}},html_attr:(function(){var c=/"/g,b=/>/g;
return function(d){return d.replace(c,"&quot;").replace(b,"&gt;")
}}()),html_value:(function(){var e=/<br \/>/g,f=/\{br\}/g,d=/&/g,b=/</g,c=/>/g;
return function(g){return g.replace(e,"{br}").replace(d,"&amp;").replace(b,"&lt;").replace(c,"&gt;").replace(f,"<br />")
}}()),escapeHtml:function(b){var c=document.createElement("div");
c.appendChild(document.createTextNode(b));
return c.innerHTML
},image_size:(function(){var e=null,b=[],c=false;
function d(){var k=0,l=b,g=l.length;
b=[];c=true;
clearTimeout(e);
e=null;for(;
k<g;k+=1){l[k].apply(this,arguments)
}c=false;if(b.length){e=setTimeout(d,100)
}}function f(g){b.push(g);
if(!c&&!e){clearTimeout(e);
e=setTimeout(d,100)
}}return function(l,i,r){var q=0,m=0,o=0,p=false,j=false,g="",k=null;
if(typeof l==="string"){g=l;
l=null;r=i;
i=""}else{g=l[i];
i+="_"}if(g&&(!i||!l[i+"_h"]||!l[i+"_w"])){k=new Image();
k.onerror=function(){p=true
};k.onload=function(){j=true
};k.src=g;if(typeof r==="function"){(function n(h){q=k.width;
m=k.height;
if(p){return
}else{if(q===0&&m===0&&!j){f(n)
}else{l[i+"w"]=q;
l[i+"h"]=m;
if(h!==true){r(l)
}}}})(true)
}else{while(q===0&&m===0&&!j){q=k.width;
m=k.height;
o+=1;if(o>100||p){break
}}l=l||{};l[i+"w"]=q;
l[i+"h"]=m}}return l
}}()),JSON:(function(){var c=window.JSON,b=false;
(function(){var f={data:[{hello:"world"}]},g={};
if(Array.prototype.toJSON){try{g=c.parse(c.stringify(f));
if(!g||f.data!==g.data){b=true
}}catch(d){}}})();
return c&&!b?c:function(){function g(f){return f>=10?f:"0"+f
}var i={date:function(f){return f.getUTCFullYear()+"-"+g(f.getUTCMonth()+1)+"-"+g(f.getUTCDate())+"T"+g(f.getUTCHours())+":"+g(f.getUTCMinutes())+":"+g(f.getUTCSeconds())+"Z"
},other:function(f){return f.valueOf()
}},e=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,k,h={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
function d(f){e.lastIndex=0;
return e.test(f)?'"'+f.replace(e,function(l){var m=h[l];
if(typeof m==="string"){return m
}return"\\u"+("0000"+l.charCodeAt(0).toString(16)).slice(-4)
})+'"':'"'+f+'"'
}function j(r,o){var m,l,s,f,p=k,n,q=o[r];
if(q&&typeof q==="object"){if(typeof q.toJSON==="function"&&typeof window.Prototype==="undefined"&&!b){q=q.toJSON(r)
}else{if(q.constructor===Date){q=i.date(q,r)
}else{if(q.constructor===Number||q.constructor===String||q.constructor===Boolean){q=i.other(q,r)
}}}}switch(typeof q){case"string":return d(q);
case"number":return isFinite(q)?String(q):"null";
case"boolean":case"null":return String(q);
case"object":if(!q){return"null"
}n=[];if(typeof q.length==="number"&&!q.propertyIsEnumerable("length")){f=q.length;
for(m=0;m<f;
m+=1){n[m]=j(m,q)||"null"
}s=n.length===0?"[]":k?"[\n"+k+n.join(",\n"+k)+"\n"+p+"]":"["+n.join(",")+"]";
k=p;return s
}for(l in q){if(Object.hasOwnProperty.call(q,l)){s=j(l,q);
if(s){n.push(d(l)+(k?": ":":")+s)
}}}s=n.length===0?"{}":k?"{\n"+k+n.join(",\n"+k)+"\n"+p+"}":"{"+n.join(",")+"}";
k=p;return s
}}return{stringify:function(f){return j("",{"":f})
},parse:function(f){try{return(new Function("return "+f))()
}catch(l){throw new Error("Parsing JSON failed.")
}}}}()}()),load_file:function(e,b,f){var g=null,c=document.getElementsByTagName("head")[0],h=false;
if(e.indexOf(".js")>=0){g=document.createElement("script");
g.type="text/javascript";
g.src=e}else{if(e.indexOf(".css")>=0){g=document.createElement("link");
g.rel="stylesheet";
g.type="text/css";
g.href=e}else{return g
}}if(f){g.onerror=function(d){f.apply(g,[d]);
c.removeChild(g)
}}if(b){g.onload=g.onreadystatechange=function(){if(!h&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){h=true;
b.apply(g);
c.removeChild(g)
}}}c.appendChild(g);
return g},merge_arrays:function(d){var r=0,n=0,m=0,h=0,w=[],x=[],g=[],t={},z={},c=d.p,s=d.f,q=!!d.p,b,u,y;
for(r=1,n=arguments.length;
r<n;r+=1){b=arguments[r];
for(m=0,h=b.length;
m<h;m+=1){u=b[m];
y=q?u[c]:s(u);
if(!t[y]){w.push(u);
t[y]=u}else{g.push(u);
z[y]=(z[y]||[]).concat([u])
}}x.push(w.length-1)
}return d.e?{union:w,unionhash:t,idx:x,duplicate:g,duplicatehash:z}:w
},object_search:function(e,b,d){if(typeof d==="undefined"){return null
}for(var c=e.length-1;
c>=0;c-=1){if(e[c][b]===d){return e[c]
}}return null
},query_to_object:function(b){var c={};
a.each(b.split("&"),function(){var d=this.split("="),e=d.shift();
c[e]=d.join("=")
});return c
},object_to_query:function(d){var c="",b="";
a.each(d,function(e,f){c+=e+"="+encodeURIComponent(f)+"&"
});return c.slice(0,c.length-1)
},qsort:(function(){function d(h,f,e){var g=this[f];
this[f]=this[e];
this[e]=g}function c(l,i,g,f){var j=l[f],h=i,k=g-1,e;
d(l,f,k);for(e=i;
e<k;++e){if(l[e]<=j){d(l,h,e);
++h}}d(l,k,h);
return h}function b(h,g,f){var e;
if(f-1>g){e=g+Math.floor(Math.random()*(f-g));
e=c(h,g,f,e);
b(h,g,e);b(h,e+1,f)
}}return function(e){b(e,0,e.length);
return e}}()),popup:function(c,b){return function(d,o){var e={mode:"default",popup_id:"intent-popup",source_marker:"intent-popup-hover",parent_selector:"body",sensitivity:6,interval:40,timeout:250,init:function(t){},create:function(t){},beforeShow:function(t){},moveShader:function(u,t){},destroy:function(t){},empty:function(t){},getPopupHeight:function(t){return t?t.outerHeight():a(this).outerHeight()
},position:function(t){a(this).css("left",t.source.position().left)
},element_height:function(t){return a(t).get_element_height(false,false,true,true,true)-1
}},q=a.browser.msie&&(a.browser.version.substr(0,1)<8),g=a("#zemanta-sidebar #zemanta-links").length,n=false,j={source:null,popup:null,config:e,links_in_sidebar:g,popupUpsidedown:true},r=null,k=null,f={},m=function(){},i=function(){};
e=a.zextend(e,o);
e.velocity=e.sensitivity/e.interval;
a.extend(f,{stop:function(t){t.stopPropagation()
},elm_enter:function(v){var u=this,x={x:v.clientX,y:v.clientY,t:a.now()},w=a(this).data("pos",x).data("currPos",x);
clearTimeout(w.data("tmer"));
w.bind("mouseleave.popup",function(y){a(this).data("currPos",{x:y.clientX,y:y.clientY,t:a.now()})
});w.data("tmer",setTimeout(function t(){var z=w.data("pos"),y=w.data("currPos");
if(y&&y.t!==z.t&&Math.sqrt(Math.pow(y.x-z.x,2)+Math.pow(y.y-z.y,2))/(y.t-z.t)>e.velocity){w.data("pos",y);
w.data("tmer",setTimeout(t,e.interval))
}else{w.data("state",1).unbind("mouseleave");
m.call(u)}},e.interval));
if(window.Zemanta.platform.big_article_preview){clearTimeout(r)
}v.preventDefault()
},elm_leave:function(u){var t=this,v=a(this);
clearTimeout(v.data("tmer"));
if(v.data("state")){v.data("tmer",setTimeout(function(){v.data("state",0).unbind("mouseleave");
i.call(t)},e.timeout))
}},popup_enter:function(){a(this).addClass("active");
clearTimeout(r)
},popup_leave:function(){var t=a(this).removeClass("active");
r=setTimeout(function(){t.trigger("out.popup")
},e.timeout)
}});function s(v){if(e.mode==="gallery"){return -1
}if(e.mode==="links"&&!g){return a(document).height()-(a("#zemanta-links").offset().top+15)
}var t=v.config.scroll_resilience&&v.config.scroll_resilience.zero||{},u=null;
if(t.length===0){return -1
}if(e.mode==="links"){u=a("#zemanta-sidebar");
return u.height()-(t.offset().top-u.offset().top)
}return t.height()
}function p(u){var t=a("#"+e.popup_id);
if(!t.length){t=a('<div id="'+e.popup_id+'" class="'+u+'"></div>').prependTo(e.parent_selector)
}else{if(!t.hasClass(u)){t.trigger("out.popup");
e.empty();t.empty();
t[0].className=u
}}return t.fin()
}function l(C,u,v,D){var A=v[0],B=A.scrollTop,y=e.getPopupHeight.call(u),F=(v.offset()||{}).top-(D.offset()||{}).top,z=s(j),x=F+(C.position().top+B),w=parseInt(C.css("border-top-width"),10),H=parseInt(C.css("margin-top"),10),E=(e.mode==="links")&&!g?D.height:v.height(),t=F+E-1,G=x+e.element_height.call(u,C)+5;
if(e.mode==="links"){G=-y
}if(q&&e.mode==="links"&&!g){G-=F
}return function(K){var L=0,I=0,J=0;
if(A.scrollTop!==B||K===true){B=A.scrollTop;
L=G-B;I=L+y;
J=j.popupUpsidedown;
j.popupUpsidedown=false;
if((e.mode!=="links")&&(L<F)){u.removeClass("active");
u.trigger("out.popup");
return}else{if(I>z&&z!==-1){L=((x-B)<F?F-w:(x-B))-(y-w)-1;
if((L+y)>z){u.removeClass("active");
u.trigger("out");
j.popupUpsidedown=true;
return}if((e.mode==="links")&&g){L+=H-3
}j.popupUpsidedown=true
}else{if(L>t){L=t
}}}if(J!==j.popupUpsidedown){e.moveShader.call(u,j,j.popupUpsidedown)
}if(e.mode==="articles"&&window.Zemanta.platform.big_article_preview){e.moveShader.call(u,j,j.popupUpsidedown)
}else{if(e.mode==="gallery"&&window.Zemanta.platform.big_gallery_preview){e.moveShader.call(u,j,j.popupUpsidedown)
}else{u.css({top:L})
}}}}}function h(t){return function(){i.call(t[0])
}}m=function(){clearTimeout(r);
var y=a(this).addClass(e.source_marker).unbind("mousemove.popup.popupIntent").bind("mousemove.popup.popupIntent",f.stop),w=y.outerHeight(),t=p(this.id),x=null,u=0,v=e.scroll_resilience;
j.source=y;
j.popup=t;e.position.call(t,j);
if(t.html()===""){t.unbind(".popupIntent").bind("mouseenter.popup.popupIntent",f.popup_enter).bind("mouseleave.popup.popupIntent",f.popup_leave).bind("mousemove.popup.popupIntent",f.stop).unbind("out").bind("out.popup",h(y))
}if(e.mode==="articles"&&window.Zemanta.platform.big_article_preview){x=a("#zemanta-articles-wrap");
u=x[0].scrollTop;
if((u<=this.offsetTop||(u-this.offsetTop)/w<0.4)&&(w+this.offsetTop-u<x.outerHeight()||(w+this.offsetTop-u-x.outerHeight())/w<0.4)){e.create.call(t,j)
}else{return
}}else{e.create.call(t,j)
}if(v){v=l(y,t,v.wrap,v.zero);
v(true);clearInterval(k);
k=setInterval(v,23)
}a(document).unbind("mousemove.popupIntent-"+e.popup_id).bind("mousemove.popup.popupIntent-"+e.popup_id,function(){y.trigger("mouseleave")
});e.beforeShow.call(t,j);
t.stop().animate({opacity:1},150,function(){a(this).css("visibility","visible")
});Zemanta.events.trigger(("popup.create."+e.mode))
};i=function(){var t=this;
a("#"+e.popup_id+"."+t.id+":not(.active)").stop().animate({opacity:0},150,function(){a(this).css("visibility","hidden")
}).each(function(){e.destroy.call(this,j);
a(document).unbind("mousemove.popupIntent-"+e.popup_id);
clearInterval(k)
});a(t).removeClass(e.source_marker);
Zemanta.events.trigger(("popup.destroy."+e.mode))
};d.live("mouseenter",f.elm_enter).live("mouseleave",f.elm_leave);
return function(){if(!n){e.init.call(this,j);
n=true}}}(c,b)
},uri_add:function(b,c){var e=b.indexOf("?")>=0&&"&"||"?";
a.each(c,function(f,d){b+=e+encodeURIComponent(f)+"="+encodeURIComponent(d);
e="&"});return b
},rdf_link:function(b,c){if(!b.target){return null
}var d=a.grep(b.target,function(f,e){return c?f.type==="rdf"&&f.url.indexOf("freebase.com")>-1:f.type==="rdf"
});if(d&&d.length>0){return d[0].url
}return null
},ZTemplate:(function(){function b(d){var c=null;
for(c in d){if(d.hasOwnProperty&&d.hasOwnProperty(c)){return false
}}return true
}return function(c){c=c||"";
var h=[],i=[],d=false,f=function(){var k=/\{(\w+)\}/g,j;
while((j=k.exec(c))!==null){h.push(j[1]);
i.push(new RegExp("{"+j[1]+"}","g"))
}d=true},g=function(n){if(!d){f()
}var m=0,k=0,l=c;
if(n){for(m=0,k=h.length;
m<k;m+=1){l=l.replace(i[m],n[h[m]])
}}return l},e=null;
if(arguments.length<=1){f();
e=g}else{if(typeof arguments[1]==="object"){e=g(arguments[1])
}}if(b(this)){this.run=g
}else{return e
}}}()),storage:(function(){var g="",d,b=JSON.stringify({}),j=document.location.host,f={localStorage:{test:function(){try{return !!window.localStorage
}catch(k){return false
}},init:function(){if(!window.localStorage[g]){window.localStorage[g]=b
}return window.localStorage[g]
},get:function(){return window.localStorage[g]
},set:function(k){window.localStorage[g]=k
},clear:function(){window.localStorage.removeItem(g)
}},globalStorage:{test:function(){try{return window.globalStorage!==d&&window.globalStorage[j]
}catch(k){return false
}},init:function(){if(window.globalStorage[j][g]){window.globalStorage[j][g]=b
}storage=window.globalStorage[j][g]
},get:function(){return window.globalStorage[j][g]
},set:function(k){window.globalStorage[j][g]=k
},clear:function(){window.globalStorage[j].removeItem(g)
}},cookie:{test:function(){try{var k="zemtest"+Math.random(),l="zemtestvalue";
a.cookie(k,l);
return a.cookie(k)===l
}catch(m){return false
}},init:function(){if(!a.cookie(g)){a.cookie(g,b)
}return a.cookie(g)
},get:function(){var k=a.cookie(g);
a.cookie(g,k,{expires:30});
return k},set:function(k){a.cookie(g,k,{expires:30})
},clear:function(){a.cookie(g,b,{expires:30})
}}},e=function(){},c=(function(){var k=null;
a.each(f,function(l,m){m.type=l;
if(m.test()){k=m;
return false
}});return k||{init:e,get:e,set:e,clear:e}
}()),h=null;
function i(){var m=c.get(),l={},k="";
if(m){k=typeof m;
if(k==="string"){try{l=JSON.parse(m)
}catch(n){window.Zemanta.log("[storage] data error")
}}else{if(k==="object"&&!Array.isArray(k)){l=m
}}}return l
}h={init:function(k){g=k||"defaultZemantaNS";
var n=c.init(),l=false;
if(c!==f.cookie&&(!n||n===b)&&f.cookie.get()){c.set(f.cookie.get())
}try{l=!JSON.parse(n)
}catch(m){l=true
}if(l){c.set(b)
}},getAll:function(){return i()
},get:function(k,m){var l=i();
m=m===d?null:m;
return k in l?l[k]:m
},set:function(k,m){var l=i();
if(typeof k==="object"){a.each(k,function(o,n){l[o]=n
})}else{l[k]=m
}c.set(JSON.stringify(l))
},clear:function(){c.clear()
},raw:function(){return c
}};return h
}()),valueForKeyPath:function(g,d,b){var f=d.split("."),e=g,c=false;
a.each(f,function(h,i){if(typeof(e)==="object"&&e!==null&&typeof(e[i])!=="undefined"){e=e[i]
}else{c=true;
e=null;return false
}});if(c&&typeof(b)!=="undefined"){return b
}return e},feedback:(function(){var g=16,f=16,c=true,d={animate:function(h,l,k,j,q,o){var r=j&&j.attr("src")||ZemantaUtils.staticDomain+"core/img/zem_source_invalph.png",n=null,m="",p=0,i=0;
f=j&&j.width()||f;
g=j&&j.height()||g;
if(j){p=Math.floor((f-50)/2);
i=Math.floor((g-50)/5);
m="rect("+i+"px, "+(p+50)+"px, "+(i+50)+"px, "+p+"px)";
h.left-=p;h.top-=i
}n=a('<div style="position:absolute;left:'+h.left+"px;top:"+h.top+"px;width:"+f+"px;height:"+g+"px;z-index:10000;background:url("+r+') no-repeat;overflow:hidden;"></div>');
if(j){n.css("clip",m)
}n.appendTo("body").animate({left:l.left,top:l.top},k,"easeInQuart",function(){a(this).remove();
if(o==="image-click"&&c){q.css({visibility:"",display:"none"}).fadeIn(300,function(){q.css("display","")
})}})},bounds_calculation:function(h,i){if(h.top<i.top){h.top=i.top;
window.Zemanta.log("[animate] height out of bounds. Too high")
}else{if(h.top>(i.top+i.height)){h.top=i.top+i.height-g;
window.Zemanta.log("[animate] height out of bounds. Too low")
}}if(h.left>(i.left+i.width)){h.left=i.left+i.width-f;
window.Zemanta.log("[animate] width out of bounds. Too right")
}else{if(h.left<i.left){h.left=i.left;
window.Zemanta.log("[animate] width out of bounds. Too left")
}}return h},modes:{"image-click":function(i,h){return{elStart:a(".zemanta-gallery-li.zemanta-gallery-img-clicked").eq(0)||a(".zemanta-gallery-li").eq(0),elEnd:h||i.win&&a(".zemanta-img",i.win.document).not(".zemanta-action-dragged").find("img").eq(0)}
},"article-click":function(i,h){return{elStart:a(".zemanta-article-li.zemanta-selected").eq(0)||a(".zemanta-article-li").eq(0),elEnd:h&&i.win&&a('.zemanta-article-ul-li a[href="'+h.url+'"]',i.win.document).eq(0)}
},"link-click":function(i,h){return{elStart:a(".zemanta-links-li.zemanta-selected").eq(0)||a(".zemanta-links-li").eq(0),elEnd:h&&i.win&&a('.zem_slink[href="'+ZemantaHelpers.encode_url(decodeURI(h.url))+'"]',i.win.document).or('.zem_slink[href="'+ZemantaHelpers.encode_uri(decodeURI(h.url))+'"]',i.win.document).eq(0)}
}}},e=function(h){var i=h&&h.offset()||{};
return{width:h&&h.width()||0,height:h&&h.height()||0,left:i.left||0,top:i.top||0}
},b={animate:function(j,o,i){if(!window.Zemanta.platform.animate_enabled){return
}var k=e(o),n={},p=null,l=window.Zemanta.platform.get_editor(false),h=null,m=null;
if(!l.frame){window.Zemanta.log("[animate] frame element not found. Animation not supported");
return}if(d.modes[j]){h=d.modes[j](l,i);
o=o||h.elStart;
if(l.type==="RTE"){m=h.elEnd
}}else{return
}p=e(l.frame);
if(l.type==="RTE"){if(m.length===0){window.Zemanta.log("[animate] can not find target");
return}n=e(m);
n.width=j==="image-click"?(n.width>50)&&n.width||160:n.width||10;
n.height=j==="image-click"?(n.height>50)&&n.height||160:n.height||10;
if(j==="link-click"){n.left=(n.left+p.left+n.width-20)-l.element.scrollLeft;
n.top=(n.top+p.top)+(n.height/3)-l.element.scrollTop
}else{n.left=(n.left+p.left)+(n.width/2)-l.element.scrollLeft;
n.top=(n.top+p.top)+(n.height/2)-l.element.scrollTop
}n=d.bounds_calculation(n,p)
}else{n.left=p.left+p.width/2;
n.top=p.top+p.height/2
}k.left=k.left+(j==="image-click"?0:k.width/2);
k.top=k.top+(j==="image-click"?0:k.height/2);
d.animate(k,n,500,(j==="image-click"?a("img",o):false),m,j)
},prepare:function(i,h){if(!window.Zemanta.platform.animate_enabled){return h
}if(i==="image-click"&&c){h.find(".zemanta-img").not(".zemanta-action-dragged").find("img").eq(0).css("visibility","hidden")
}return h}};
return b}()),get_loghistory_string:function(){var e="",c=0,b=arguments.length,f="";
a.each(Zemanta.loghistory,function(d,g){a.each(g,function(j,h){e+=f;
if(typeof h==="string"){e+=h
}else{if(h&&h.message){e+=h.message;
if(h.stack){e+=":\n"+h.stack
}}else{e+=JSON.stringify(h)
}}f=" "});e+="\n";
f=""});return e
},validateArticleRequestConfig:function(d){var c=["num_own_articles","num_related_articles","num_promoted_articles","num_specific_order","articles_limit"],b=["own","promoted","web"],f=[],e=true;
if(!d){return false
}a.each(c,function(g,h){if(!d[h]){e=false
}});if(e){f=d.num_specific_order.split(",")
}else{return e
}a.each(b,function(g,h){if(a.inArray(h,f)===-1){e=false
}});return e
}}}());window.ZemantaGallery=function(c){var e=window.zQuery,f="zemanta-gallery-li",a="zemanta-gallery-img",d={initialized:false,sources:{flickr_license:{1:"CreativeCommons NonCommercial ShareAlike",2:"CreativeCommons NonCommercial",3:"CreativeCommons NonCommercial NoDerivs",4:"CreativeCommons Attribution only",5:"CreativeCommons ShareAlike",6:"CreativeCommons NoDerivs"}},icons:["",'<img src="'+ZemantaUtils.staticDomain+'core/img/type_video.png" class="zemanta-source-icon" />','<img src="'+ZemantaUtils.staticDomain+'core/img/type_map.png" class="zemanta-source-icon" />','<img src="'+ZemantaUtils.staticDomain+'core/img/type_5min.png" class="zemanta-source-icon" />','<img src="'+ZemantaUtils.staticDomain+'core/img/type_slideshare.png" class="zemanta-source-icon" />'],activeTypes:["","zemanta-gallery-img-clicked","zemanta-gallery-img-dragged"],template:ZemantaHelpers.ZTemplate('<li id="{elid}" class="'+f+'{selection}" alt="Add/remove &quot;{desc}&quot;"><img id="img_{id}" class="'+a+'" src="{src}" style="{style}" />{icon}<div class="zemanta-selector"></div>{promoted}</li>'),handlers:{click:function(i){i.stopPropagation();
var h=e(this),g=e("."+a,this).attr("src"),j=c.helpers.object_search((c.control.sources.display_sources?c.gallery._my_images:c.gallery._images),"url_s",g);
e("#zemanta-gallery-popup").css("visibility","hidden");
if(g&&j){if(i.metaKey||i.ctrlKey){return window.open(j.source_url)
}if(e.grep(d.activeTypes,function(l,k){return l&&h.hasClass(l)
}).length){c.gallery._select(j,false)
}else{c.gallery._select(j,true)
}}},error:function(g){if(this.src==="#"||this.src.charAt(-1)==="#"||this.src.indexOf("http://api.zemanta.com")===0||this.src.indexOf("http://maps.google.com")===0){return
}e(this).parent().remove()
},boxhover:function(g){d.helpers.hidemessage(true)
}},helpers:{createResizeHandler:function(g){return function(l){var j=g.img,k=0,i=0,h="";
if(j){k=Math.floor((l.url_s_w-50)/2);
i=Math.floor((l.url_s_h-50)/5);
h="rect("+i+"px, "+(k+50)+"px, "+(i+50)+"px, "+k+"px)";
j.find("."+a).css({clip:h,position:"absolute",marginTop:(-i)+"px",marginLeft:(-k)+"px"})
}}},showmessage:function(j,g){var h=e("#zemanta-gallery"),i=h.find("div.zemanta-message");
if(!i.length){e('<div class="zemanta-message'+(g&&" zemanta-autohide"||"")+'"><div class="zemanta-message-wrap">'+j+"</div></div>").insertAfter(e("h2",h))
}else{i[g?"removeClass":"addClass"]("zemanta-autohide").find(".zemanta-message-wrap").html(j)
}},hidemessage:function(g){var h=e("#zemanta-gallery div.zemanta-message.zemanta-autohide");
if(g){h.animate({opacity:0,height:0},function(){e(this).remove()
})}else{h.remove()
}},prepDesc:function(l,k){l=(l.length>100)?l.substring(0,100)+"...":l;
k=k||30;var i="<br />",h=i.length,g=k;
for(;g<l.length;
g+=k){if(l.substring(g-k,g-h).indexOf(" ")===-1){l=l.substring(0,g-h)+i+l.substring(g-h)
}}return l},prepSource:function(h){if(h.source){return h.source
}var g="",i=h.source_url;
if(i.indexOf("wikipedia.org")!==-1||i.indexOf("wikimedia.org")!==-1){g="wikipedia"
}else{if(i.indexOf("crunchbase.com")!==-1){g="crunchbase"
}else{if(i.indexOf("last.fm")!==-1){g="lastfm"
}else{if(i.indexOf("finance.yahoo.com")!==-1){g="yahoofinance"
}else{g=c.helpers.extract_hostname(i).split(".")[0]
}}}}h.source=g;
return g},prepGettyCopyright:function(h){var g="",i="http://www.gettyimages.com/Corporate/Terms.aspx";
if(c.platform.big_gallery_preview){g='<p id="zemanta-gallery-popup-license" class="zemanta-gallery-popup-getty">By embedding this image, you consent to Getty Images\' <a class="ext zemanta-big-preview-morelink" target="_blank" href="'+i+'">Terms of Use</a></p>'
}else{g='<p id="zemanta-gallery-popup-license">By embedding this image, you consent to Getty Images\' <a class="ext" target="_blank" href="'+i+'">Terms of Use</a></p>'
}return g},prepMore:(function(){var g={wikipedia:"Wikipedia",crunchbase:"CrunchBase",lastfm:"Last.fm",yahoofinance:"Yahoo! Finance"};
return function(k){if(k.more_link){return k.more_link
}var i=k.source||d.helpers.prepSource(k),h=g[i],j="";
if(!h){h=i.substring(0,1).toUpperCase()+i.substring(1)
}if(c.platform.big_gallery_preview){j='<a class="ext zemanta-big-preview-morelink" href="'+(k.preview_source_url||k.source_url)+'">'+h+"</a>"
}else{j='<a class="ext" href="'+(k.preview_source_url||k.source_url)+'">More info at '+h+"</a>"
}if(k.type==="getty"){h='<p id="zemanta-gallery-popup-license">View this image at '+j+" website.</p>"
}else{h=j}k.more_link=h;
return h}}())},eliminateDuplicates:function(g){c.gallery._images=c.helpers.merge_arrays({p:"url_m"},e.each(c.gallery._images,function(){this.first=true
}),(g?c.gallery._old:e.each(c.gallery._old,function(){delete this.first
})))},syncData:function(g){c.gallery._my_images=c.platform.gallery_active(c.gallery._my_images,g);
c.helpers.qsort(c.gallery._my_images,function(i,h){return !!i.active-!!h.active
});c.gallery._images=c.platform.gallery_active(c.gallery._images,g);
c.helpers.qsort(c.gallery._images,function(i,h){return !!i.active-!!h.active
})},prepData:function(){e.each((c.control.sources.display_sources?c.gallery._my_images:c.gallery._images),function(g,h){if(!h.hash){h.hash=ZemantaHelpers.elf_hash(h.source_url+h.url_s);
if(c.link_target){h.attribution=h.attribution.replace(/<a href=/g,'<a target="_blank" href=')
}}})},centerImage:function(i,p){var l={width:"100%",height:"100%",position:"absolute",left:0,top:0},n=e(i).parent().css(l).end().fin(),q=n.realSize(),o=q.w,k=q.h,g=0,m=n.parents("#zemanta-media-content").css({left:0,top:0,position:"relative"}),j=m.parents("#zemanta-gallery-popup-media");
p=p||1;if(o===0&&k===0){return
}n.css(l);g=o/k;
if(g>p){j.css("height",m.width()/g);
p=g;m.css({height:0,paddingTop:(p/g*100/p)+"%",top:(((1-p/g)/2)*100/p)+"%"})
}else{m.css({width:0,height:"100%",paddingLeft:(g/p*100)+"%",marginLeft:(((1-g/p)/2)*100)+"%"})
}j.find("#zemanta-gallery-popup-preloader").css("visibility","hidden");
n.css("visibility","")
},popup:(function(){var i=null,j=function(){if(!i){throw"Popup is not configured"
}else{i()}},h=function(){var l={popup_id:"zemanta-gallery-popup",source_marker:"zemanta-gallery-img-hover",mode:"gallery",parent_selector:c.platform.gallery_popup_parent,init:function k(o,m){var q={},n=0,s=0,r=e("#zemanta-gallery-thumbnails .zemanta-gallery-li");
r.each(function(t,u){var p=(e(u).position()||{}).left;
if(n<p){s+=1;
q[p]=t;n=p}else{return false
}});if(!m&&s>c.gallery_width){c.platform.widget_resize();
k(o,true)}else{o.last_pos=n;
o.full_width=Math.max(o.last_pos+50-12,c.gallery_width*62-12);
if(r.length>c.gallery_width){c.gallery_width=s
}}},element_height:function(m){return e(m).get_element_height(false,true,true,true,true)-1
},position:function(m){c.platform.gallery_popup_position(m,this)
},create:(function(){var m={xhr:null,hash:null},n=window.ZemantaPluginFeatures&&window.ZemantaPluginFeatures.featured_image;
return(function(t){var x=t.source,o=this,p=c.platform.big_gallery_preview&&(o.width()-20)||o.width(),r=null,z=1,q=null,s=c.helpers.object_search(c.gallery._images,"url_s",x.find("."+a).attr("src")),y=false,w=null,v=null,u=o;
if(c.platform.big_gallery_preview){e("#zemanta-gallery-popup").addClass("zemanta-big-preview big-gallery-preview")
}if(!s){o.trigger("out.gallery.popup");
return}if(!e("#zemanta-gallery-popup-desc").length){if(s.pc&2){y=true
}if(!c.platform.big_gallery_preview){e('<div class="zemanta-gallery-popup-shader"></div>').css({left:x.position().left-o.position().left}).appendTo(o)
}if(c.platform.big_gallery_preview){u=e('<div class="zemanta-big-preview-content"></div>');
r=e('<p id="zemanta-gallery-popup-desc" title="'+c.helpers.html_attr(s.description||"")+'"><a href="'+s.source_url+'" class="zemanta-big-preview-title">'+d.helpers.prepDesc(c.helpers.html_value(s.description||""),30)+"</a></p>").find("a").on("click.gallery",function(A){window.open(e(this).attr("href"));
A.preventDefault()
}).end();u.append(r).appendTo(o)
}else{r=e('<p id="zemanta-gallery-popup-desc" title="'+c.helpers.html_attr(s.description||"")+'">'+d.helpers.prepDesc(c.helpers.html_value(s.description||""),30)+"</p>").appendTo(u)
}if(!s.license){s.license="Unknown license"
}if(c.platform.big_gallery_preview&&s.description_long){e('<p id="zemanta-gallery-popup-image-description">'+d.helpers.prepDesc(s.description_long)+"</p>").appendTo(u)
}if(s.type==="getty"){v=e('<p id="zemanta-gallery-popup-license">'+d.helpers.prepDesc(s.license,30)+"</p>"+d.helpers.prepGettyCopyright(s))
}else{v=e('<p id="zemanta-gallery-popup-license">'+d.helpers.prepDesc(s.license,30)+"</p>")
}u.append(v);
if(c.platform.big_gallery_preview){if(s.url_m_w&&s.url_m_h){e('<p id="zemanta-gallery-popup-size">Size: '+s.url_m_w+"x"+s.url_m_h+"px</p>").appendTo(u)
}else{if(s.width&&s.height){e('<p id="zemanta-gallery-popup-size">Original size: '+s.width+"x"+s.height+"px</p>").appendTo(u)
}}}w=e('<div id="zemanta-gallery-popup-more">'+(s.more_link||d.helpers.prepMore(s))+"</div>");
w.find("a.ext").on("click.gallery",function(A){window.open(e(this).attr("href"));
A.preventDefault()
});w.appendTo(u);
if(y){e('<div class="zemanta-promoted-content"><a href="http://www.zemanta.com/faq/?promoted#faqid-79" class="zemanta-promoted" target="_blank">promoted</a></div>').appendTo(w)
}if(c.platform.big_gallery_preview&&c.platform.featured_image&&n){e('<div class="zemanta-gallery-popup-actions"><div class="column left"><a href="" id="zemanta-gallery-insert-into-post"><span>Insert into post</span></a></div><div class="column right"><a href="" id="zemanta-gallery-set-as-featured"><span>Set as featured</span></a></div></div>').appendTo(u);
if(s.type==="getty"){e("#zemanta-gallery-set-as-featured").hide()
}e("#zemanta-gallery-insert-into-post").on("click.gallery.insert",function(A){t.source.trigger("click.gallery.insert");
A.preventDefault()
});if(m.hash==s.hash){e("#zemanta-gallery-set-as-featured").addClass("working").find("span").text("Working!")
}e("#zemanta-gallery-set-as-featured").on("click.gallery",function(A){if(e(this).hasClass("done")){o.removeClass("active");
o.trigger("out.gallery.popup");
e(this).removeClass("done").find("span").text("Set as featured")
}else{if(e(this).hasClass("working")){e(this).find("span").text((function(B){return B[Math.floor(Math.random()*B.length)]
})(["Don't push me","Just wait, OK?","Do not panic!","Working!"]))
}else{e(this).addClass("working").find("span").text("Working!");
if(m.xhr){m.xhr.abort()
}m.hash=s.hash;
m.xhr=c.platform.set_featured_image(s.url_l||s.url_m||s.url_s||"",function(B){var D=e("#zemanta-gallery-set-as-featured"),C=D.find("span");
if(o.hasClass("zemimg-"+m.hash)){D.removeClass("working").find("span").text(!B?"Done. Yeah.":"Couldn't do it.");
if(!B){D.addClass("done")
}else{c.log("set_featured_image#done: "+String(B))
}}m.hash=null;
m.xhr=null})
}}A.preventDefault()
})}}else{if(e("#zemanta-gallery-popup-media").height()===0){e("#zemanta-gallery-popup-media").find("img").unbind("error").end().remove()
}r=e("#zemanta-gallery-popup-desc")
}if(!e("#zemanta-gallery-popup-media").length){q=e('<div id="zemanta-gallery-popup-media"><div id="zemanta-gallery-popup-preloader"><span>Almost there!</span></div><div id="zemanta-media-content"><div id="zemanta-media-wrapper"><img'+(s.url_m_w&&s.url_m_h?' width="'+s.url_m_w+'" height="'+s.url_m_h+'"':"")+' alt="" src="#'+s.hash+"_"+e.now()+'_m" title="'+c.helpers.html_attr(s.description)+'" /></div></div></div>').css({width:"100%",height:150}).each(function(){var A=e("img",this);
z=p/150;A.data("timer",setTimeout(function(){A.trigger("load.gallery.popup")
},1000))}).find("#zemanta-gallery-popup-preloader").css("visibility","").end().find("img").css("visibility","hidden").on("load.gallery.popup",function(){clearTimeout(e(this).data("timer"));
e(this).css("display","block");
d.centerImage(this,z)
}).on("error.gallery.popup",function(){var A=this,B="";
if(A.src.indexOf("wikimedia")>=0){if(A.src.indexOf("thumb/")>=0&&s.url_l_w<500&&s.url_l_h<500){B=A.src.replace(/\/thumb/,"");
B=B.substr(0,B.lastIndexOf("/"));
A.src=B;s.url_m=B;
delete s.url_m_w;
delete s.url_m_h
}else{}}}).attr("src",s.url_m).end().fin();
q.insertAfter(r)
}})})(),destroy:function(m){e("#zemanta-gallery-popup-media").each(function(){if(e("#zemanta-media-content").length===0){e(this).empty().css({height:0})
}})},empty:function(m){e("#zemanta-media-content img").unbind("error")
},scroll_resilience:{zero:e("#zemanta-sidebar"),wrap:e("#zemanta-gallery-wrap")}};
i=ZemantaHelpers.popup(e("#zemanta-sidebar #zemanta-gallery li"),l)
},g=function(){e("#zemanta-gallery-popup").find("img").unbind().end().empty()
};return{setup:h,init:j,deinit:g}
}()),image_config:{init:function(){b.imageConfig=(function(){var h={isInitialized:false,currentObj:null,currentConfig:{},exactImageUrl:"",imageSize:0,initialize:function(){var i=e('<div id="zemanta-gallery-config"><div class="zemanta-gallery-config-head"><h2><span class="zemanta-gallery-config-title">Image Settings</span><a href="" id="zemanta-gallery-config-close">Close</a></h2></div><div class="zemanta-gallery-config-main"><ol><li class="zemanta-gallery-config-alignbox"><form><fieldset><legend>Position</legend><a class="zemanta-help" title="Need help with Image Settings?" href="http://www.zemanta.com/faq/#faqid-95">?</a><ul><li><label for="zemanta-gallery-config-align-left"><span class="zemanta-gallery-config-alignicon left"></span><input type="radio" name="zemanta-gallery-config-align" id="zemanta-gallery-config-align-left" value="left" />Left</label></li><li><label for="zemanta-gallery-config-align-center"><span class="zemanta-gallery-config-alignicon center"></span><input type="radio" name="zemanta-gallery-config-align" id="zemanta-gallery-config-align-center" value="center" />Center</label></li><li><label for="zemanta-gallery-config-align-right"><span class="zemanta-gallery-config-alignicon right"></span><input type="radio" name="zemanta-gallery-config-align" id="zemanta-gallery-config-align-right" value="right" />Right</label></li></ul></fieldset></form></li><li class="zemanta-gallery-config-captionbox"><form><fieldset><legend><label for="zemanta-gallery-config-caption">Caption<input type="checkbox" name="zemanta-gallery-config-caption" id="zemanta-gallery-config-caption" value="override" /></label></legend><p><textarea id="zemanta-gallery-config-caption-text" name="zemanta-gallery-config-caption-text" rows="2" cols="26" disabled="disabled"></textarea></p></fieldset></form></li><li class="zemanta-gallery-config-sizebox"><form><fieldset><legend>Size</legend><ul class="zemanta-gallery-config-sizebox-column left"><li><label for="zemanta-gallery-config-size-small"><input type="radio" name="zemanta-gallery-config-size" id="zemanta-gallery-config-size-small" value="small" />Small</label></li><li><label for="zemanta-gallery-config-size-medium"><input type="radio" name="zemanta-gallery-config-size" id="zemanta-gallery-config-size-medium" value="medium" />Medium</label></li><li><label for="zemanta-gallery-config-size-large"><input type="radio" name="zemanta-gallery-config-size" id="zemanta-gallery-config-size-large" value="large" />Large</label></li></ul><ul class="zemanta-gallery-config-sizebox-column right"><li><label for="zemanta-gallery-config-size-custom"><input type="radio" name="zemanta-gallery-config-size" id="zemanta-gallery-config-size-custom" value="custom" />Custom (width)</label></li><li><input type="text" name="zemanta-gallery-config-size-custom-value" id="zemanta-gallery-config-size-custom-value" value="100" /></li></ul></fieldset></form></li><li class="zemanta-gallery-config-sourcebox"><p><span>Source:</span> <a id="zemanta-gallery-config-source" href="http://www.zemanta.com" alt="http://www.zemanta.com" target="_blank">http://www.zemanta.com</a></p></li></ol><div class="zemanta-gallery-config-actions"><a href="" id="zemanta-gallery-config-done"><span>Done</span></a><a href="" id="zemanta-gallery-config-remove"><span>Remove</span></a></div></div></div>');
e("#zemanta-gallery-config").remove();
if(!h.isInitialized){e("#zemanta-sidebar").append(i);
if(c.platform.hide_align_image_config){e("#zemanta-gallery-config .zemanta-gallery-config-alignbox").remove()
}i.css("display","none");
i.find("#zemanta-gallery-config-close").on("click.gallery.imageConfig",function(j){g.done(j);
g.close(j)}).end().find("#zemanta-gallery-config-done").on("click.gallery.imageConfig",function(j){g.done(j);
g.close(j)}).end().find("#zemanta-gallery-config-remove").on("click.gallery.imageConfig",function(j){g.remove(j);
g.close(j)});
i.find("#zemanta-gallery-config-align-left").on("click.gallery.imageConfig",function(j){g.alignImage(j,"left")
}).end().find("#zemanta-gallery-config-align-center").on("click.gallery.imageConfig",function(j){g.alignImage(j,"center")
}).end().find("#zemanta-gallery-config-align-right").on("click.gallery.imageConfig",function(j){g.alignImage(j,"right")
}).end();i.find("#zemanta-gallery-config-caption-text").on("keyup.gallery.imageConfig",function(j){g.changeCaption(j)
});i.find("#zemanta-gallery-config-caption").on("change.gallery.imageConfig",function(j){if(e(this).attr("checked")==="checked"){g.changeCaption(j);
i.find("#zemanta-gallery-config-caption-text").attr("disabled",false)
}else{g.changeCaption(j,true);
i.find("#zemanta-gallery-config-caption-text").attr("disabled",true)
}});i.find("#zemanta-gallery-config-size-small").on("click.gallery.imageConfig",function(j){g.resizeImage(j,"url_s");
i.find("#zemanta-gallery-config-size-custom-value").attr("disabled",true)
});i.find("#zemanta-gallery-config-size-medium").on("click.gallery.imageConfig",function(j){g.resizeImage(j,"url_m");
i.find("#zemanta-gallery-config-size-custom-value").attr("disabled",true)
});i.find("#zemanta-gallery-config-size-large").on("click.gallery.imageConfig",function(j){g.resizeImage(j,"url_l");
i.find("#zemanta-gallery-config-size-custom-value").attr("disabled",true)
});i.find("#zemanta-gallery-config-size-custom").on("click.gallery.imageConfig",function(j){if(e("#zemanta-gallery-config-size-custom-value").val()){g.resizeImage(j,"custom")
}i.find("#zemanta-gallery-config-size-custom-value").attr("disabled",false)
});i.find("#zemanta-gallery-config-size-custom-value").on("keyup.gallery.imageConfig",function(j){g.resizeImage(j,"custom")
});i.find("form").on("submit.gallery.imageConfig",function(j){j.preventDefault()
});h.isInitialized=true
}}},g={isOpen:false,alignImage:function(i,k){var j=c.platform.get_image_align_element(e('a[href="'+h.currentObj.source_url+'"]',c.platform.get_editor().element));
c.platform.change_image_alignment(j,k)
},resizeImage:function(m,k){var j=c.platform.get_editor(),l=0,i=0,o=e('a[href="'+h.currentObj.source_url+'"]',j.element).closest(".zemanta-img"),n=function(q,p){if(typeof p==="string"){l=h.currentObj[p+"_w"]||null;
i=h.currentObj[p+"_h"]||null;
if(l){q.find("img").attr("width",l).attr("height",i).attr("src",h.currentObj[p]);
c.platform.set_image_wrapper_size(q,l)
}}else{if(typeof p==="number"){if(p>=h.currentObj.url_l_w){q.find("img").attr("src",h.currentObj.url_l)
}else{q.find("img").attr("src",h.currentObj.url_m)
}q.find("img").attr("width",p).attr("height",null);
c.platform.set_image_wrapper_size(q,p)
}}};customSize=parseInt(e("#zemanta-gallery-config-size-custom-value").val(),10);
j.ignoreDOMevents=true;
if(k==="custom"&&customSize&&customSize>=50){n(o,customSize)
}else{if(k!=="custom"){n(o,k)
}}j.ignoreDOMevents=false
},changeCaption:function(l,k){var j=c.platform.get_editor(),m=e('a[href="'+h.currentObj.source_url+'"]',j.element).closest(".zemanta-img"),i=c.platform.get_image_caption_elm(m);
if(k){c.platform.remove_image_caption_elm(i)
}else{if(i.length){c.platform.update_image_caption_text(i,e("#zemanta-gallery-config-caption-text").val())
}else{c.platform.add_image_caption_elm(m,e("#zemanta-gallery-config-caption-text").val())
}}},open:function(o){var k=function(q,p){if(!e(q.target).closest(p).length){g.close(q)
}},n=null,m=null,l=false,j="none",i=false;
if(g.isOpen&&h.currentObj&&h.currentObj.source_url===o.source_url){return
}m=c.helpers.object_search(c.gallery._images,"source_url",o.source_url);
h.currentObj=m||o;
h.currentObj.source_url_bare=h.currentObj.source_url.replace(/https?:\/\//ig,"");
n=e('a[href="'+h.currentObj.source_url+'"]',c.platform.get_editor().element).eq(0).closest(".zemanta-img");
n.find("img").addClass("zemanta-img-configured");
j=c.platform.get_image_alignment(n);
e("#zemanta-gallery-config .zemanta-gallery-config-alignbox input:checked").removeAttr("checked");
e("#zemanta-gallery-config-align-"+j).attr("checked","checked");
if(c.platform.get_image_caption_text(n)){e("#zemanta-gallery-config-caption").attr("checked",true);
e("#zemanta-gallery-config-caption-text").attr("disabled",false);
e("#zemanta-gallery-config-caption-text").val(c.platform.get_image_caption_text(n).replace(/\n/gi,""))
}e("#zemanta-gallery-config-source").attr("alt",h.currentObj.source_url).attr("href",h.currentObj.source_url).text((h.currentObj.source_url_bare.length>20)?h.currentObj.source_url_bare.substring(0,20)+"...":h.currentObj.source_url_bare);
h.exactImageUrl=n.find("img").attr("src");
h.imageSize=parseInt(n.find("img").attr("width")||n.find("img").width(),10);
e.each({url_s:"small",url_m:"medium",url_l:"large"},function(p,q){i=!(h.currentObj&&h.currentObj[p]&&(h.currentObj[p+"_w"]||h.currentObj[p+"_h"]));
e("#zemanta-gallery-config-size-"+q).attr("disabled",i)
});if(!h.currentObj.url_s_h){e("#zemanta-gallery-config-size-custom").attr("checked",true);
e("#zemanta-gallery-config-size-custom-value").val(!isNaN(h.imageSize)&&h.imageSize||"")
}else{e.each({url_s:"small",url_m:"medium",url_l:"large"},function(p,q){if(h.currentObj[p+"_w"]===h.imageSize&&h.currentObj[p]===h.exactImageUrl&&!l){e("#zemanta-gallery-config-size-"+q).attr("checked",true);
l=true}});if(!l){e("#zemanta-gallery-config-size-custom").attr("checked",true);
e("#zemanta-gallery-config-size-custom-value").val(h.imageSize)
}else{e("#zemanta-gallery-config-size-custom-value").attr("disabled",true)
}}if(!g.isOpen){e("#zemanta-gallery-config").slideToggle("slow")
}e("body").on("click.gallery.imageConfig",function(p){if(g.isOpen){k(p,"#zemanta-gallery-config")
}});e(c.platform.get_editor().element).parent().on("click.gallery.imageConfig",function(p){if(g.isOpen){k(p,e(p.target).closest(".zemanta-img"))
}});g.isOpen=true
},close:function(i){if(i&&i.preventDefault&&i.target&&e(i.target).parents("#zemanta-sidebar").length){i.preventDefault()
}if(g.isOpen){e("#zemanta-gallery-config").slideUp("slow",function(){e(this).css("display","none")
})}e.each(["small","medium","large","custom"],function(j,k){e("#zemanta-gallery-config-size-"+k).attr("disabled",false);
e("#zemanta-gallery-config-size-"+k).attr("checked",false)
});e("#zemanta-gallery-config-size-custom-value").val("");
e("#zemanta-gallery-config-caption-text").val("");
e("#zemanta-gallery-config-caption").attr("checked",false);
h.currentObj=null;
h.currentConfig={};
e(c.platform.get_editor().element).unbind("click.image_config");
e("body").unbind("click.image_config");
g.isOpen=false
},done:function(i){},remove:function(i){e('a[href="'+h.currentObj.source_url+'"]',c.platform.get_editor().element).closest(".zemanta-img").remove()
}};h.initialize();
return g}());
if(c.platform.image_config){c.bind("imageSelected",function(g,h){b.imageConfig.open(h);
g.preventDefault()
});c.bind("imageRemove",function(g,h){b.imageConfig.close(g);
g.preventDefault()
});c.bind("selectionUpdated",function(g,h){b.imageConfig.close(g);
g.preventDefault()
})}if(c.platform.image_config){e(c.platform.get_editor().win.document).on("click",".zemanta-img, .zemanta-img-inserted",function(g){var h=e(this);
if(h.hasClass("zemanta-img-inserted")){c.events.trigger("imageSelected",{source_url:h.parent().attr("href")})
}else{c.events.trigger("imageSelected",{source_url:h.find("a").attr("href")})
}})}},deinit:function(){c.unbind("imageSelected");
c.unbind("imageRemove");
c.unbind("selectionUpdated");
e("#zemanta-gallery-config").remove();
e("body").unbind("click.image_config");
e(c.platform.get_editor().element).parent().unbind("click.image_config")
}},image_render:{init:function(){var h=ZemantaHelpers.ZTemplate('<li id="{elid}" class="zemanta-gallery-li {selection}" alt="Add/remove &quot;{desc}&quot;">{icon}<div class="zemanta-selector"></div>{promoted}</li>'),k=d.icons,i=e("#zemanta-gallery-thumbnails"),j=null,m=[],o={},g=[],l=56,n=function(q,p){var r=e("#zemanta-gallery-wrap").height()+p+l;
e.each(g,function(t,s){var u=o[s];
if(!u.rendered){if(r>=s){u.rendered=true;
e.each(u.images,function(v,y){var w=y.data("obj"),x=y.data("id");
setTimeout(function(){y.prepend(e("<img />",{"class":"zemanta-gallery-img",id:"img_"+x}).one("load.gallery",function(){var B=w.url_s_w?Math.floor((w.url_s_w-50)/2):0,A=w.url_s_h?Math.floor((w.url_s_h-50)/5):0,z="rect("+A+"px, "+(B+50)+"px, "+(A+50)+"px, "+B+"px)";
e(this).css({clip:z,position:"absolute","margin-top":-A+"px","margin-left":-B+"px"});
y.css({background:"#fff"});
e(this).unbind("error")
}).one("error.gallery",function(){r+=Math.ceil(l/3)
}).one("error.gallery",d.handlers.error).attr("src",w.url_s))
},v)})}else{return false
}}})};b._render=function(){j=document.createDocumentFragment();
e.each(c.gallery._images,function(p,t){var s=e("#zemimg-"+t.hash),r={},q="";
q=ZemantaUtils.tokenList().add(d.activeTypes[t.active||0]).add(t.pc&2&&"zemanta-gallery-li-promoted").print(" ");
if(!s.length){if(t.url_s_h===0||t.url_s_w===0){c.helpers.image_size(t,"url_s",d.helpers.createResizeHandler(r))
}s=e(h({elid:"zemimg-"+t.hash,id:p,src:ZemantaUtils.staticDomain+"core/img/spacer.gif#"+t.hash,desc:(t.description||"").replace(/"/g,"&quot;"),style:"",selection:q,icon:k[t.personal_scope===1&&1||0],promoted:t.pc&2&&'<div class="zemanta-gallery-img-promoted">Promoted</div>'||""}));
s.data("obj",t);
s.data("id",p);
m.push(s[0]);
r.img=s}else{s.find("img").unbind("error").end()[0].className=f+q
}j.appendChild(s.get(0))
});m=e(m);i.empty();
i.append(j);
o={};g=[];i.find(".zemanta-gallery-li").each(function(q,s){var r=e(this),p=parseInt(r.position().top,10)+3;
if(!o[p]){g.push(p);
o[p]={rendered:false,images:[r]}
}else{o[p].images.push(r)
}});g.sort(function(q,p){return q-p
});d.popup.init();
c.events.trigger("galleryViewportChange",[0])
};c.bind("galleryViewportChange",n);
c.bind("dragMove.articles",function(p){c.events.trigger("galleryViewportChange",[Math.abs(parseInt(e("#zemanta-gallery-thumbnails").position().top,10))])
});e("#zemanta-gallery-wrap").on("scroll.gallery_render",function(p){c.events.trigger("galleryViewportChange",[Math.abs(parseInt(e("#zemanta-gallery-thumbnails").position().top,10))])
})},deinit:function(){c.unbind("galleryViewportChange");
c.unbind("dragMove.articles");
e("#zemanta-gallery-wrap").unbind("scroll.gallery_render")
}}},b={_images:[],_my_images:[],_old:[],_my_old:[],pages:0,imageConfig:{},exposed:{helpers:{prepSource:d.helpers.prepSource}},sources:{flickr:function(i){var g=d.sources.flickr_license,h=[];
if(i.stat==="ok"){e.each(i.photos.photo,function(k,l){if(l.title.length===0){l.title="Description unavailable"
}var j="http://farm"+l.farm+".static.flickr.com/"+l.server+"/"+l.id+"_"+l.secret;
h.push({url_l:j+"_l.jpg",url_m:j+"_m.jpg",url_s:j+"_s.jpg",url_s_w:75,url_s_h:75,url_m_w:0,url_m_h:0,source_url:"http://www.flickr.com/photos/"+l.owner+"/"+l.id+"/",height:1111,width:1111,license:g[l.license],description:l.title,confidence:0.5,poc:true,attribution:'Image by <a href="http://www.flickr.com/photos/'+l.owner+"/"+l.id+'/" >'+l.ownername+"</a> via Flickr"})
})}return h
}},init:function(){var i=e("#zemanta-gallery"),h={};
if(!i.length){return c.log("Not initializing gallery - no wrapper")
}e('<h2><span class="zemanta-gallery-title">Media Gallery</span> <a class="zemanta-help" title="Need help with Media Gallery?" href="http://www.zemanta.com/faq/quickhelp/?gallery#faqid-56">?</a></h2><div id="zemanta-gallery-wrap"><ul id="zemanta-gallery-thumbnails"></ul></div>').appendTo(i.empty().mouseover(d.helpers.hidemessage));
e("#zemanta-sidebar #zemanta-gallery-wrap").height(c.helpers.storage.get("#zemanta-sidebar #zemanta-gallery-wrap-size")===0?0:c.helpers.storage.get("#zemanta-sidebar #zemanta-gallery-wrap-size")||c.platform.gallery_height);
b.imageConfig=(function(){var k={isInitialized:false,currentObj:null,currentConfig:{},exactImageUrl:"",imageSize:0,initialize:function(){var l=e('<div id="zemanta-gallery-config"><div class="zemanta-gallery-config-head"><h2><span class="zemanta-gallery-config-title">Image Settings</span><a href="" id="zemanta-gallery-config-close">Close</a></h2></div><div class="zemanta-gallery-config-main"><ol><li class="zemanta-gallery-config-alignbox"><form><fieldset><legend>Position</legend><a class="zemanta-help" title="Need help with Image Settings?" href="http://www.zemanta.com/faq/#faqid-95">?</a><ul><li><label for="zemanta-gallery-config-align-left"><span class="zemanta-gallery-config-alignicon left"></span><input type="radio" name="zemanta-gallery-config-align" id="zemanta-gallery-config-align-left" value="left" />Left</label></li><li><label for="zemanta-gallery-config-align-center"><span class="zemanta-gallery-config-alignicon center"></span><input type="radio" name="zemanta-gallery-config-align" id="zemanta-gallery-config-align-center" value="center" />Center</label></li><li><label for="zemanta-gallery-config-align-right"><span class="zemanta-gallery-config-alignicon right"></span><input type="radio" name="zemanta-gallery-config-align" id="zemanta-gallery-config-align-right" value="right" />Right</label></li></ul></fieldset></form></li><li class="zemanta-gallery-config-captionbox"><form><fieldset><legend><label for="zemanta-gallery-config-caption">Caption<input type="checkbox" name="zemanta-gallery-config-caption" id="zemanta-gallery-config-caption" value="override" /></label></legend><p><textarea id="zemanta-gallery-config-caption-text" name="zemanta-gallery-config-caption-text" rows="2" cols="26" disabled="disabled"></textarea></p></fieldset></form></li><li class="zemanta-gallery-config-sizebox"><form><fieldset><legend>Size</legend><ul class="zemanta-gallery-config-sizebox-column left"><li><label for="zemanta-gallery-config-size-small"><input type="radio" name="zemanta-gallery-config-size" id="zemanta-gallery-config-size-small" value="small" />Small</label></li><li><label for="zemanta-gallery-config-size-medium"><input type="radio" name="zemanta-gallery-config-size" id="zemanta-gallery-config-size-medium" value="medium" />Medium</label></li><li><label for="zemanta-gallery-config-size-large"><input type="radio" name="zemanta-gallery-config-size" id="zemanta-gallery-config-size-large" value="large" />Large</label></li></ul><ul class="zemanta-gallery-config-sizebox-column right"><li><label for="zemanta-gallery-config-size-custom"><input type="radio" name="zemanta-gallery-config-size" id="zemanta-gallery-config-size-custom" value="custom" />Custom (width)</label></li><li><input type="text" name="zemanta-gallery-config-size-custom-value" id="zemanta-gallery-config-size-custom-value" value="100" /></li></ul></fieldset></form></li><li class="zemanta-gallery-config-sourcebox"><p><span>Source:</span> <a id="zemanta-gallery-config-source" href="http://www.zemanta.com" alt="http://www.zemanta.com" target="_blank">http://www.zemanta.com</a></p></li></ol><div class="zemanta-gallery-config-actions"><a href="" id="zemanta-gallery-config-done"><span>Done</span></a><a href="" id="zemanta-gallery-config-remove"><span>Remove</span></a></div></div></div>');
e("#zemanta-gallery-config").remove();
if(!k.isInitialized){e("#zemanta-sidebar").append(l);
if(c.platform.hide_align_image_config){e("#zemanta-gallery-config .zemanta-gallery-config-alignbox").remove()
}l.css("display","none");
l.find("#zemanta-gallery-config-close").click(function(m){j.done(m);
j.close(m)}).end().find("#zemanta-gallery-config-done").click(function(m){j.done(m);
j.close(m)}).end().find("#zemanta-gallery-config-remove").click(function(m){j.remove(m);
j.close(m)});
l.find("#zemanta-gallery-config-align-left").click(function(m){j.alignImage(m,"left")
}).end().find("#zemanta-gallery-config-align-center").click(function(m){j.alignImage(m,"center")
}).end().find("#zemanta-gallery-config-align-right").click(function(m){j.alignImage(m,"right")
}).end();l.find("#zemanta-gallery-config-caption-text").on("keyup",function(m){j.changeCaption(m)
});l.find("#zemanta-gallery-config-caption").on("change.gallery.imageConfig",function(m){if(e(this).attr("checked")==="checked"){j.changeCaption(m);
l.find("#zemanta-gallery-config-caption-text").attr("disabled",false)
}else{j.changeCaption(m,true);
l.find("#zemanta-gallery-config-caption-text").attr("disabled",true)
}});l.find("#zemanta-gallery-config-size-small").click(function(m){j.resizeImage(m,"url_s");
l.find("#zemanta-gallery-config-size-custom-value").attr("disabled",true)
});l.find("#zemanta-gallery-config-size-medium").click(function(m){j.resizeImage(m,"url_m");
l.find("#zemanta-gallery-config-size-custom-value").attr("disabled",true)
});l.find("#zemanta-gallery-config-size-large").click(function(m){j.resizeImage(m,"url_l");
l.find("#zemanta-gallery-config-size-custom-value").attr("disabled",true)
});l.find("#zemanta-gallery-config-size-custom").click(function(m){if(e("#zemanta-gallery-config-size-custom-value").val()){j.resizeImage(m,"custom")
}l.find("#zemanta-gallery-config-size-custom-value").attr("disabled",false)
});l.find("#zemanta-gallery-config-size-custom-value").on("keyup",function(m){j.resizeImage(m,"custom")
});l.find("form").on("submit",function(m){m.preventDefault()
});k.isInitialized=true
}}},j={isOpen:false,alignImage:function(l,n){var m=c.platform.get_image_align_element(e('a[href="'+k.currentObj.source_url+'"]',c.platform.get_editor().element));
c.platform.change_image_alignment(m,n)
},resizeImage:function(q,o){var n=c.platform.get_editor(),p=0,l=0,s=e('a[href="'+k.currentObj.source_url+'"]',n.element).closest(".zemanta-img").or(e('a.zemanta-img[href="'+k.currentObj.source_url+'"]',n.element)),m=function(y,w){for(var x=0,v=y[0].attributes,u=v.length;
x<u;x++){var t=v.item(x);
if(t.nodeName==="src"||t.nodeName==="data-mce-src"||t.nodeName==="_mce_src"||t.nodeName==="mce_src"){y.attr(t.nodeName,w)
}}},r=function(u,t){if(typeof t==="string"){p=k.currentObj[t+"_w"]||null;
l=k.currentObj[t+"_h"]||null;
if(p){u.find("img").attr("width",p).attr("height",l);
m(u.find("img"),k.currentObj[t]);
c.platform.set_image_wrapper_size(u,p)
}}else{if(typeof t==="number"){if(t>=k.currentObj.url_l_w){m(u.find("img"),k.currentObj.url_l)
}else{m(u.find("img"),k.currentObj.url_m)
}u.find("img").attr("width",t).attr("height",null);
c.platform.set_image_wrapper_size(u,t)
}}};customSize=parseInt(e("#zemanta-gallery-config-size-custom-value").val(),10);
n.ignoreDOMevents=true;
if(o==="custom"&&customSize&&customSize>=50){r(s,customSize)
}else{if(o!=="custom"){r(s,o)
}}n.ignoreDOMevents=false
},changeCaption:function(o,n){var m=c.platform.get_editor(),p=e('a[href="'+k.currentObj.source_url+'"]',m.element).closest(".zemanta-img").or(e('a.zemanta-img[href="'+k.currentObj.source_url+'"]',m.element)),l=c.platform.get_image_caption_elm(p);
if(n){c.platform.remove_image_caption_elm(l)
}else{if(l.length){c.platform.update_image_caption_text(l,e("#zemanta-gallery-config-caption-text").val())
}else{c.platform.add_image_caption_elm(p,e("#zemanta-gallery-config-caption-text").val())
}}},open:function(r){var n=function(t,s){if(!e(t.target).closest(s).length){j.close(t)
}},q=null,p=null,o=false,m="none",l=false;
if(j.isOpen&&k.currentObj&&k.currentObj.source_url===r.source_url){return
}p=c.helpers.object_search((c.control.sources.display_sources?c.gallery._my_images:c.gallery._images),"source_url",r.source_url);
k.currentObj=p||r;
k.currentObj.source_url_bare=k.currentObj.source_url.replace(/https?:\/\//ig,"");
q=e('a[href="'+k.currentObj.source_url+'"]',c.platform.get_editor().element).eq(0).closest(".zemanta-img").or(e('a.zemanta-img[href="'+k.currentObj.source_url+'"]',c.platform.get_editor())).or(e('a[href="'+k.currentObj.source_url+'"] img',c.platform.get_editor().element));
if(!q.hasClass("zemanta-img")&&q.closest("zemanta-img").length===0){q=c.platform.fix_image_structure(q)
}q.find("img").addClass("zemanta-img-configured");
m=c.platform.get_image_alignment(q);
e("#zemanta-gallery-config .zemanta-gallery-config-alignbox input:checked").removeAttr("checked");
e("#zemanta-gallery-config-align-"+m).attr("checked","checked");
if(c.platform.get_image_caption_text(q)){e("#zemanta-gallery-config-caption").attr("checked",true);
e("#zemanta-gallery-config-caption-text").attr("disabled",false);
e("#zemanta-gallery-config-caption-text").val(c.platform.get_image_caption_text(q).replace(/\n/gi,""))
}e("#zemanta-gallery-config-source").attr("alt",k.currentObj.source_url).attr("href",k.currentObj.source_url).text((k.currentObj.source_url_bare.length>20)?k.currentObj.source_url_bare.substring(0,20)+"...":k.currentObj.source_url_bare);
k.exactImageUrl=q.find("img").attr("src");
k.imageSize=parseInt(q.find("img").attr("width")||q.find("img").width(),10);
e.each({url_s:"small",url_m:"medium",url_l:"large"},function(s,t){l=!(k.currentObj&&k.currentObj[s]&&(k.currentObj[s+"_w"]||k.currentObj[s+"_h"]));
e("#zemanta-gallery-config-size-"+t).attr("disabled",l)
});if(!k.currentObj.url_s_h){e("#zemanta-gallery-config-size-custom").attr("checked",true);
e("#zemanta-gallery-config-size-custom-value").val(!isNaN(k.imageSize)&&k.imageSize||"")
}else{e.each({url_s:"small",url_m:"medium",url_l:"large"},function(s,t){if(k.currentObj[s+"_w"]===k.imageSize&&k.currentObj[s]===k.exactImageUrl&&!o){e("#zemanta-gallery-config-size-"+t).attr("checked",true);
o=true}});if(!o){e("#zemanta-gallery-config-size-custom").attr("checked",true);
e("#zemanta-gallery-config-size-custom-value").val(k.imageSize)
}else{e("#zemanta-gallery-config-size-custom-value").attr("disabled",true)
}}if(!j.isOpen){e("#zemanta-gallery-config").slideToggle("slow")
}e("body").on("click.image_config",function(s){if(j.isOpen){n(s,"#zemanta-gallery-config")
}});e(c.platform.get_editor().element).parent().on("click.image_config",function(s){if(j.isOpen){n(s,e(s.target).closest(".zemanta-img").or(".zemanta-img",s.target))
}});j.isOpen=true
},close:function(l){if(l&&l.preventDefault&&l.target&&e(l.target).parents("#zemanta-sidebar").length){l.preventDefault()
}if(j.isOpen){e("#zemanta-gallery-config").slideUp("slow",function(){e(this).css("display","none")
})}e.each(["small","medium","large","custom"],function(m,n){e("#zemanta-gallery-config-size-"+n).attr("disabled",false);
e("#zemanta-gallery-config-size-"+n).attr("checked",false)
});e("#zemanta-gallery-config-size-custom-value").val("");
e("#zemanta-gallery-config-caption-text").val("");
e("#zemanta-gallery-config-caption").attr("checked",false);
k.currentObj=null;
k.currentConfig={};
e(c.platform.get_editor().element).unbind("click.image_config");
e("body").unbind("click.image_config");
j.isOpen=false
},done:function(l){},remove:function(l){e('a[href="'+k.currentObj.source_url+'"]',c.platform.get_editor().element).closest(".zemanta-img").remove()
}};k.initialize();
return j}());
if(c.platform.image_config){c.bind("imageSelected",function(j,k){b.imageConfig.open(k);
j.preventDefault()
});c.bind("imageRemove",function(j,k){b.imageConfig.close(j);
j.preventDefault()
});c.bind("selectionUpdated",function(j,k){b.imageConfig.close(j);
j.preventDefault()
})}h={popup_id:"zemanta-gallery-popup",source_marker:"zemanta-gallery-img-hover",mode:"gallery",parent_selector:c.platform.gallery_popup_parent,init:function g(l,j){var m={},k=0,o=0,n=e("#zemanta-gallery-thumbnails .zemanta-gallery-li");
n.each(function(q,r){var p=(e(r).position()||{}).left;
if(k<p){o+=1;
m[p]=q;k=p}else{return false
}});if(!j&&o>c.gallery_width){c.platform.widget_resize();
g(l,true)}else{l.last_pos=k;
l.full_width=Math.max(l.last_pos+50-12,c.gallery_width*62-12);
if(n.length>c.gallery_width){c.gallery_width=o
}}},element_height:function(j){return e(j).get_element_height(false,true,true,true,true)-1
},position:function(j){c.platform.gallery_popup_position(j,this)
},create:(function(){var j={xhr:null,hash:null},k=window.ZemantaPluginFeatures&&window.ZemantaPluginFeatures.featured_image;
return(function(q){var u=q.source,l=this,m=c.platform.big_gallery_preview&&(l.width()-20)||l.width(),o=null,w=1,n=null,p=c.helpers.object_search((c.control.sources.display_sources?c.gallery._my_images:c.gallery._images),"url_s",u.find("."+a).attr("src")),v=false,t=null,s=null,r=l;
if(c.platform.big_gallery_preview){e("#zemanta-gallery-popup").addClass("zemanta-big-preview big-gallery-preview")
}if(!p){l.trigger("out");
return}if(p.type=="getty"&&!p.embed_html&&c.platform.includeGetty&&!c.platform.insertGettyAsUrl){c.control.oembed.getHtml(p.getty_embed_url)
}if(!e("#zemanta-gallery-popup-desc").length){if(!c.platform.big_gallery_preview){e('<div class="zemanta-gallery-popup-shader"></div>').css({left:u.position().left-l.position().left}).appendTo(l)
}if(p.pc&2){v=true
}if(c.platform.big_gallery_preview){r=e('<div class="zemanta-big-preview-content"></div>');
o=e('<p id="zemanta-gallery-popup-desc" title="'+c.helpers.html_attr(p.description||"")+'"><a href="'+(p.preview_source_url||p.source_url)+'" class="zemanta-big-preview-title">'+d.helpers.prepDesc(c.helpers.html_value(p.description||""),30)+"</a></p>").find("a").click(function(x){window.open(e(this).attr("href"));
x.preventDefault()
}).end();r.append(o).appendTo(l)
}else{o=e('<p id="zemanta-gallery-popup-desc" title="'+c.helpers.html_attr(p.description||"")+'">'+d.helpers.prepDesc(c.helpers.html_value(p.description||""),30)+"</p>").appendTo(r)
}if(!p.license){p.license="Unknown license"
}if(c.platform.big_gallery_preview&&p.description_long){e('<p id="zemanta-gallery-popup-image-description">'+d.helpers.prepDesc(p.description_long)+"</p>").appendTo(r)
}if(p.type==="getty"){s=e('<p id="zemanta-gallery-popup-license">'+d.helpers.prepDesc(p.license,30)+"</p>"+d.helpers.prepGettyCopyright(p))
}else{s=e('<p id="zemanta-gallery-popup-license">'+d.helpers.prepDesc(p.license,30)+"</p>")
}r.append(s);
if(c.platform.big_gallery_preview&&p.type!=="getty"){if(p.url_m_w&&p.url_m_h){e('<p id="zemanta-gallery-popup-size">Size: '+p.url_m_w+"x"+p.url_m_h+"px</p>").appendTo(r)
}else{if(p.width&&p.height){e('<p id="zemanta-gallery-popup-size">Original size: '+p.width+"x"+p.height+"px</p>").appendTo(r)
}}}if(p.type!=="getty"){t=e('<div id="zemanta-gallery-popup-more">'+(p.more_link||d.helpers.prepMore(p))+"</div>");
t.find("a.ext").click(function(x){window.open(e(this).attr("href"));
x.preventDefault()
});t.appendTo(r)
}else{e('<div id="zemanta-gallery-popup-more-getty">Click on a thumbnail to insert a Getty image placeholder. It will transform into an image when published.</div>').appendTo(r)
}if(v){e('<div class="zemanta-promoted-content"><a href="http://www.zemanta.com/faq/promoted" class="zemanta-promoted" target="_blank">promoted</a></div>').appendTo(t)
}if(c.platform.big_gallery_preview&&c.platform.featured_image&&k){e('<div class="zemanta-gallery-popup-actions"><div class="column left"><a href="" id="zemanta-gallery-insert-into-post"><span>Insert into post</span></a></div><div class="column right"><a href="" id="zemanta-gallery-set-as-featured"><span>Set as featured</span></a></div></div>').appendTo(r);
if(p.type==="getty"){e("#zemanta-gallery-set-as-featured").hide()
}e("#zemanta-gallery-insert-into-post").click(function(x){q.source.trigger("click");
x.preventDefault()
});if(j.hash==p.hash){e("#zemanta-gallery-set-as-featured").addClass("working").find("span").text("Working!")
}e("#zemanta-gallery-set-as-featured").click(function(x){if(e(this).hasClass("done")){l.removeClass("active");
l.trigger("out");
e(this).removeClass("done").find("span").text("Set as featured")
}else{if(e(this).hasClass("working")){e(this).find("span").text((function(y){return y[Math.floor(Math.random()*y.length)]
})(["Don't push me","Just wait, OK?","Do not panic!","Working!"]))
}else{e(this).addClass("working").find("span").text("Working!");
if(j.xhr){j.xhr.abort()
}j.hash=p.hash;
j.xhr=c.platform.set_featured_image(p.url_l||p.url_m||p.url_s||"",function(y){var A=e("#zemanta-gallery-set-as-featured"),z=A.find("span");
if(l.hasClass("zemimg-"+j.hash)){A.removeClass("working").find("span").text(!y?"Done. Yeah.":"Couldn't do it.");
if(!y){A.addClass("done")
}else{c.log("set_featured_image#done: "+String(y))
}}j.hash=null;
j.xhr=null})
}}x.preventDefault()
})}}else{if(e("#zemanta-gallery-popup-media").height()===0){e("#zemanta-gallery-popup-media").find("img").unbind("error").end().remove()
}o=e("#zemanta-gallery-popup-desc")
}if(!e("#zemanta-gallery-popup-media").length){n=e('<div id="zemanta-gallery-popup-media"><div id="zemanta-gallery-popup-preloader"><span>Almost there!</span></div><div id="zemanta-media-content"><div id="zemanta-media-wrapper"><img'+(p.url_m_w&&p.url_m_h?' width="'+p.url_m_w+'" height="'+p.url_m_h+'"':"")+' alt="" src="#'+p.hash+"_"+e.now()+'_m" title="'+c.helpers.html_attr(p.description)+'" /></div></div></div>').css({width:"100%",height:150}).each(function(){var x=e("img",this);
w=m/150;x.data("timer",setTimeout(function(){x.trigger("load")
},1000))}).find("#zemanta-gallery-popup-preloader").css("visibility","").end().find("img").css("visibility","hidden").on("load",function(){clearTimeout(e(this).data("timer"));
e(this).css("display","block");
d.centerImage(this,w)
}).on("error",function(){var x=this,y="";
if(x.src.indexOf("wikimedia")>=0){if(x.src.indexOf("thumb/")>=0&&p.url_l_w<500&&p.url_l_h<500){y=x.src.replace(/\/thumb/,"");
y=y.substr(0,y.lastIndexOf("/"));
x.src=y;p.url_m=y;
delete p.url_m_w;
delete p.url_m_h
}else{}}}).attr("src",p.url_m).end().fin();
n.insertAfter(o)
}})})(),destroy:function(j){e("#zemanta-gallery-popup-media").each(function(){if(e("#zemanta-media-content").length===0){e(this).empty().css({height:0})
}})},empty:function(j){e("#zemanta-media-content img").unbind("error")
},scroll_resilience:{zero:e("#zemanta-sidebar"),wrap:e("#zemanta-gallery-wrap")}};
d.popupInit=ZemantaHelpers.popup(e("#zemanta-gallery li",e("#zemanta-sidebar")[0]),h);
if(c.platform.image_config){e(c.platform.get_editor().win.document).on("click",".zemanta-img, .zemanta-img-inserted",function(j){var k=e(this);
if(k.hasClass("zemanta-img-inserted")){c.events.trigger("imageSelected",{source_url:k.parent().attr("href")})
}else{c.events.trigger("imageSelected",{source_url:k.find("a").attr("href")})
}})}d.initialized=true;
if(c.gallery._images.length){d.prepData();
b._render()
}return true
},deinit:function(){d.popup.deinit();
d.image_config.deinit();
d.image_render.deinit();
b._images=[];
b._old=[];b.pages=0;
c.unbind("dragMove.articles");
e("#zemanta-gallery").empty().unbind();
d.initialized=false
},_success:function(h,g,i){if(!d.initialized){return g(i)
}i=i||c.control.sync.dom();
if(typeof i==="function"){return i.simple(b._success,this,arguments)
}c.log("gallery success");
c._set_status(2);
if(c.control.sources.display_sources){c.gallery._my_old=c.gallery._my_old.concat(c.gallery._my_images);
c.gallery._my_images=c.gallery._my_images.concat(h.images)
}else{c.gallery._old=c.gallery._images;
c.gallery._images=h.images
}if(!h.images.length&&!c.control.sources.display_sources){d.helpers.showmessage("Sorry, we didn't find any new visual media for the text you're writing...",true)
}b.process(false,i);
g(i)},process:function(g,h){h=h||c.control.sync.dom();
if(typeof h==="function"){return h.simple(b.process,this,arguments)
}if(b._images.length||b._my_images.length){d.helpers.hidemessage()
}d.eliminateDuplicates(g);
d.syncData(h);
if(c.control.widget.gallery){d.prepData();
b._render()
}c.events.trigger("galleryProcessed",b)
},_render:(function(){var j=ZemantaHelpers.ZTemplate('<li id="{elid}" class="zemanta-gallery-li {selection}" alt="Add/remove &quot;{desc}&quot;">{icon}<span class="zemanta-gallery-img" src="{img_src}"></span><div class="zemanta-selector"></div>{promoted}</li>'),n=d.icons,k=null,l=null,p=[],r={},i=[],o=56,g=false,h=function(){if(!g){g=true;
c.bind("dragMove.articles",function(s){m([Math.abs(parseInt(k.position().top,10))])
})}k=e("#zemanta-gallery-thumbnails");
if(k.data("initialized")!==true){k.data("initialized",true);
k.on("galleryViewportChange",q);
k.delegate(".zemanta-gallery-li","click",d.handlers.click);
e("#zemanta-gallery-wrap").on("scroll",function(s){m([Math.abs(parseInt(k.position().top,10))])
})}c.platform.disableGallery()
},m=function(s){k.trigger("galleryViewportChange",s)
},q=function(t,s){var u=e("#zemanta-gallery-wrap").height()+s+o;
e.each(i,function(w,v){var x=r[v];
if(!x.rendered){if(u>=v){x.rendered=true;
e.each(x.images,function(y,B){var z=B.data("obj"),A=B.data("id");
setTimeout(function(){B.find(".zemanta-gallery-img").remove();
B.prepend(e("<img />",{"class":"zemanta-gallery-img",id:"img_"+A}).one("load.gallery",function(){var E=z.url_s_w?Math.floor((z.url_s_w-50)/2):0,D=z.url_s_h?Math.floor((z.url_s_h-50)/5):0,C="rect("+D+"px, "+(E+50)+"px, "+(D+50)+"px, "+E+"px)";
e(this).css({clip:C,position:"absolute","margin-top":-D+"px","margin-left":-E+"px"});
B.css({background:"#fff"});
e(this).unbind("error")
}).one("error.gallery",function(){u+=Math.ceil(o/3)
}).one("error.gallery",d.handlers.error).attr("src",z.url_s))
},y)})}else{return false
}}})};return function(){h();
l=document.createDocumentFragment();
e.each((c.control.sources.display_sources?c.gallery._my_images:c.gallery._images),function(s,w){var v=e("#zemimg-"+w.hash),u={},t="";
t=ZemantaUtils.tokenList().add(d.activeTypes[w.active||0]).add(w.pc&2&&"zemanta-gallery-li-promoted").print(" ");
if(!v.length){if(w.url_s_h===0||w.url_s_w===0){c.helpers.image_size(w,"url_s",d.helpers.createResizeHandler(u))
}v=e(j({elid:"zemimg-"+w.hash,id:s,src:ZemantaUtils.staticDomain+"core/img/spacer.gif#"+w.hash,img_src:w.url_s,desc:(w.description||"").replace(/"/g,"&quot;"),style:"",selection:t,icon:n[w.personal_scope===1&&1||0],promoted:w.pc&2&&'<div class="zemanta-gallery-img-promoted">Promoted</div>'||""}));
v.data("obj",w);
v.data("id",s);
p.push(v[0]);
u.img=v}else{v.find("img").unbind("error").end()[0].className=f+t
}l.appendChild(v.get(0))
});p=e(p);k.empty();
k.append(l);
r={};i=[];k.find(".zemanta-gallery-li").each(function(t,v){var u=e(this),s=parseInt(u.position().top,10)+3;
if(!r[s]){i.push(s);
r[s]={rendered:false,images:[u]}
}else{r[s].images.push(u)
}if(c.platform.enable_gallery_overlays){u.append('<div class="zemanta-insert"><div class="zemanta-remove-button">Remove</div><div class="zemanta-insert-button">Insert</div></div>')
}});i.sort(function(t,s){return t-s
});d.popupInit();
m([0])}}()),_mark:function(i,h){var g=e("#zemanta-gallery ."+f+"#zemimg-"+i.hash);
delete i.active;
e.each(d.activeTypes,function(j,k){if(k){g.removeClass(k)
}});if(h){i.active=h;
g.addClass(d.activeTypes[h])
}},_select:function(h,g,i){i=i||c.control.sync.dom();
if(typeof i==="function"){return i.simple(c.gallery._select,this,arguments)
}h.description=h.description.replace(/"/g,"&quot;");
if(g===true){i=c.force_one_paragraph(i);
if(c.platform.image_insert_at_cursor){i=c.platform.insert_zemanta_image(i,c.platform.gallery_insert(h,e("<div></div>")).html())
}else{i=c.platform.gallery_insert(h,i)
}i=c.helpers.feedback.prepare("image-click",i);
b._scroll(h);
b._mark(h,1);
if(c.platform.image_config&&!h.embed_html&&h.type!=="getty"){setTimeout(function(){c.events.trigger("imageSelected",h)
},1)}else{if(c.platform.image_config===false){e('a[href="'+h.source_url+'"] img',i).addClass("zemanta-img-configured")
}}}else{b._scroll(h);
i=c.platform.gallery_remove(h,i);
b._mark(h)}c.platform.set_html(i.html());
c.events.trigger(g?"imageInsert":"imageRemove",h)
},_scroll:function(h){if(!h){return
}var g=c.platform.get_editor();
if(g.win){setTimeout(function(){var i=e('.zemanta-img a[href="'+h.source_url+'"] img',g.element);
if(i.length){c.platform.scroll(i)
}c.helpers.feedback.animate("image-click",e("ul#zemanta-gallery-thumbnails li#zemimg-"+h.hash))
},1)}}};return b
};window.ZemantaLinks=function(b){var d=window.zQuery,c={initialized:false,helpers:{findIndexByType:function(h,g){var f=0,e=h.target.length;
for(;f<e;f+=1){if(h.target[f].type===g){return f
}}},deselectCurrent:function(g){var f=0,e=g.target.length;
if(g.selectedtype){b.links._select(b.links._prepObject(g,c.helpers.findIndexByType(g,g.selectedtype)))
}else{for(;
f<e;f+=1){b.links._select(b.links._prepObject(g,f))
}}},extractType:function(e){if(typeof(e)==="string"){d.each(e.split(" "),function(f,g){if(g.indexOf(":")<0&&g!=="nofollow"){e=g
}})}return e
},closeSublist:function(){d("#zemanta-links-popup").css("visibility","hidden")
},setFaviconBg:(function(i,h){var k={},g={},l=function(o){var n=o.match(/^(https?:\/\/[^\/]+)\/?.*$/);
if(!n||n.length<2){return false
}else{return n[1]+"/favicon.ico"
}},m=function(o,n){if(g[o]){g[o].push(n)
}else{g[o]=[n]
}},e=function(n){if(k[n]==="ok"){d.each(g[n],function(p,o){o()
})}g[n]=[]},f=function(p,n){var o=d("<img />");
if(k[p]==="ok"){n()
}else{if(k[p]==="checking"){m(p,n)
}else{if(k[p]!=="error"){m(p,n);
k[p]="checking";
o.one("load.links",function(){k[p]="ok";
e(p)}).one("error.links",function(){k[p]="error"
}).attr("src",p)
}}}},j=function(n,p){var o=l(n);
if(o){f(o,function(){p.css({"background-image":"url("+o+")"})
})}};return j
}())},handlers:{lastevent:{},listclick:function(h){if(c.handlers.lastevent==h){return
}c.handlers.lastevent=h;
var f=d("span.zemanta-link-anchor",this).text().replace(/\xA0/g," "),j=d(this),i=b.helpers.object_search(b.links._links,"hash",(j.attr("id")||"").replace("zemlink-","")),g=null;
if(f&&i){if(h.metaKey||h.ctrlKey){return window.open(i.target[0].url)
}if(j.is(".zemanta-selected")){c.helpers.deselectCurrent(i);
j.removeClass("zemanta-selected");
delete i.selectedtype;
b.events.trigger("linkRemove",i)
}else{i.selectedtype=i.renderData.reltype;
g=b.links._prepObject(i,0);
b.links._select(g,true);
j.addClass("zemanta-selected");
b.helpers.feedback.animate("link-click",j,g);
b.events.trigger("linkInsert",i)
}j.find(".zemanta-link-promoted")[i.renderData.promoted&&"addClass"||"removeClass"]("visible").end().find(".zemanta-link-autointext-banner")[i.renderData.autointext&&"addClass"||"removeClass"]("visible").end().find(".zemanta-link-icon").removeClass().addClass("zemanta-link-icon").addClass("zemanta-link-"+i.renderData.reltype).end();
if(i.renderData.autointext){c.helpers.setFaviconBg(i.renderData.url,j.find(".zemanta-link-icon"))
}else{j.find(".zemanta-link-icon").attr("style","")
}}c.helpers.closeSublist()
},createitemclick:function(e){return function(i){if(c.handlers.lastevent==i){return
}c.handlers.lastevent=i;
var k=d(this),j=d("#zemlink-"+e.hash),g=k.prevAll("li").length,h=e.target[g],l=h.url===e.selectedurl,f=null;
if(i.metaKey||i.ctrlKey){i.stopPropagation();
return window.open(h.url)
}if(j.is(".zemanta-selected")){c.helpers.deselectCurrent(e)
}j.find(".zemanta-link-icon").removeClass().addClass("zemanta-link-icon");
if(j.is(".zemanta-selected")&&l){j.find(".zemanta-link-icon").addClass("zemanta-link-"+e.renderData.reltype).end().find(".zemanta-link-promoted")[e.renderData.promoted&&"addClass"||"removeClass"]("visible").end().find(".zemanta-link-autointext-banner")[e.renderData.autointext&&"addClass"||"removeClass"]("visible").end().removeClass("zemanta-selected");
e.selectedtype=null;
e.selectedurl=null;
b.events.trigger("linkRemove",e)
}else{j.find(".zemanta-link-icon").addClass("zemanta-link-"+h.type).end().find(".zemanta-link-promoted")[h.pc&2&&"addClass"||"removeClass"]("visible").end().find(".zemanta-link-autointext-banner")[h.autointext&&"addClass"||"removeClass"]("visible").end().addClass("zemanta-selected");
if(h.autointext){c.helpers.setFaviconBg(h.url,j.find(".zemanta-link-icon"))
}else{j.find(".zemanta-link-icon").attr("style","")
}f=b.links._prepObject(e,g);
b.links._select(f,true);
b.helpers.feedback.animate("link-click",k,f);
e.selectedtype=e.target[g].type;
e.selectedurl=e.target[g].url;
b.events.trigger("linkInsert",e)
}c.helpers.closeSublist();
i.stopPropagation()
}},createitemover:function(e){return function(f){window.status=e
}},itemout:function(e){window.status=""
},linkclick:function(e){e.stopPropagation();
c.helpers.closeSublist()
}},listtemplate:ZemantaHelpers.ZTemplate('<li id="zemlink-{elid}" class="zemanta-links-li{addclass}" style="z-index:{index};"><span class="zemanta-link-icon zemanta-link-{reltype}"></span><span class="zemanta-link-anchor">{anchor}</span>{promoted}{autointext}</li>'),itemtemplate:ZemantaHelpers.ZTemplate('<li title="{fulltitle}"><span class="zemanta-link-icon zemanta-link-{type}"></span><span class="zemanta-link-anchor">{title}</span> <a class="ext" rel="{type}" title="Open {url} in new window" href="{url}" target="_blank">Visit</a>{promoted}{autointext}</li>'),eliminateDuplicates:function(){b.links._links=b.helpers.merge_arrays({p:"anchor"},b.links._links,d.grep(b.links._old,function(f,e){return !!f.selectedtype
}))},syncData:function(e){b.links._links=b.platform.links_active(b.links._links,e)
},prepData:function(){d.each(b.links._links,function(g,j){var h={},f=false,e=false;
j.hash=ZemantaHelpers.elf_hash(j.anchor);
if(!j.renderData){d.each(j.target,function(k,l){if(ZemantaHelpers.check_feature("ZemantaFakePC")){l.pc=Math.floor(Math.random()*4)
}if(l.pc&2){f=true
}h[l.type]=l;
if(l.autointext){e=true
}});j.renderData={fulltitle:"Add/remove link to "+j.anchor,anchor:j.anchor.replace(/ /g,"&nbsp;"),reltype:j.target[0].type,url:j.target[0].url,promoted:f?'<span class="zemanta-link-promoted">Promoted</span>':"",autointext:e?'<span class="zemanta-link-autointext-banner">Your Post</span>':"",addclass:d.grep(j.target,function(i){return i.type!=="rdf"
}).length===1?" zemanta-links-li-single":"",bytype:h}
}})}},a={_links:[],_old:[],_temp:[],getType:function(e){return c.helpers.extractType(e)
},init:function(){if(!d("#zemanta-links-div-ul").length){b.platform.links_initialize()
}if(b.widget_enabled===false){d("#zemanta-links").not("#zemanta-sidebar #zemanta-links").hide()
}var g=d("#zemanta-links"),f={};
if(!g.length){b.log("Not initializing links - no wrapper");
return false
}d("#zemanta-sidebar #zemanta-links-div-ul").height(b.helpers.storage.get("#zemanta-sidebar #zemanta-links-div-ul-size")===0?0:b.helpers.storage.get("#zemanta-sidebar #zemanta-links-div-ul-size")||120);
if(!b.platform.disable_draggable_resize){d("#zemanta-sidebar #zemanta-links h2").addClass("draggable").each(function(){b.helpers.drag("#zemanta-sidebar #zemanta-links h2.draggable","#zemanta-sidebar #zemanta-links-div-ul",{stop:function(){if(d.browser.msie){d("#zemanta-links-div-ul").hide().show()
}}},"links")
})}d("#zemanta-links h2 a.zemanta-help").attr("title","Need help with In-text Links?").attr("href","http://www.zemanta.com/faq/quickhelp/?links#faqid-60");
f={popup_id:"zemanta-links-popup",mode:"links",source_marker:"zemanta-links-link-hover",parent_selector:d("#zemanta-links h2").or("#zemanta-links"),init:function e(i,h){i.zemClearHeight=(d("#zemanta-links .zem-clear").offset()||{}).top-(d("#zemanta-articles").offset()||{}).top
},position:function(k){var j=this,i=Math.max(k.source.get_element_width(false,true),175),h=Math.round((k.source.position()||{}).left+5);
j.width(i);
if(isNaN(h)){h=3
}h+=(k.links_in_sidebar||d("#zemanta-links h2.horizontal").length)?1:0;
j.css({left:h})
},getPopupHeight:function(h){var i=h?h:d(this);
return d(i).get_element_height(true,false,true,true,false)
},beforeShow:function(i){var h=this
},moveShader:function(i,h){},create:function(l){var o=l.source,i=this,m=null,j=c.itemtemplate,h=false,k=false,n=[];
m=b.helpers.object_search(b.links._links,"hash",(o.attr("id")||"").replace("zemlink-",""));
if(!m||!m.target){return
}n=d.map(m.target,function(q,p){if(q.type==="rdf"){return null
}else{return q
}});if(!d(".zemanta-links-desc",i).length){d('<ul class="zemanta-links-desc"></ul>').appendTo(i);
d.each(n,function(p,q){if(q.type==="rdf"){return
}var r=q.title.length>22?q.title.substring(0,21)+"...":q.title,s=d(j({fulltitle:"Add link to "+q.title,type:q.type,title:r,url:q.url,promoted:(q.pc&2)&&'<div class="zemanta-link-promoted">Promoted</div>'||"",autointext:q.autointext&&'<div class="zemanta-link-autointext-banner">Your Post</div>'||""})).disableTextSelect().on("mouseover.links",c.handlers.createitemover(q.url)).on("mouseout.links",c.handlers.itemout).on("click.links",c.handlers.createitemclick(m)).find("a").on("click.links",c.handlers.linkclick).end().appendTo(d("ul.zemanta-links-desc",i));
if(b.platform.markup_autointext&&q.autointext){s.find("span.zemanta-link-icon").each(function(){c.helpers.setFaviconBg(q.url,d(this))
});k=true}if(n.length===1){s.addClass("only")
}else{if(p===0){s.addClass("first")
}else{if(p===n.length-1){s.addClass("last")
}}}h=h||q.pc&2
});i.css("min-width",k&&225||h&&200||175);
if(h){d('<p class="zemanta-promoted-content">What are <a href="http://www.zemanta.com/faq/promoted" class="zemanta-promoted" target="_blank">promoted</a> links? <a href="http://www.zemanta.com/faq/promoted" class="zemanta-more" target="_blank">Read more</a></p>').appendTo(i)
}if(k){d('<p class="zemanta-autointext-content">What does <a href="http://www.zemanta.com/faq/yourpost" class="zemanta-autointext-banner" target="_blank">your post</a> icon mean? <a href="http://www.zemanta.com/faq/yourpost" class="zemanta-more" target="_blank">Read more</a></p>').appendTo(i)
}}},destroy:function(h){},scroll_resilience:{zero:d("#zemanta-links h2.vertical").or("#zemanta-sidebar #zemanta-links h2").or("#zemanta-links-div-ul"),wrap:d("#zemanta-links-div-ul"),zeroHeader:d("#zemanta-links h2.vertical").or("#zemanta-sidebar #zemanta-links h2").or("#zemanta-links-div-ul")}};
ZemantaHelpers.popup(d(".zemanta-links-li",d("#zemanta-links")[0]),f);
d("#zemanta-links-div-ul li",d("#zemanta-links")[0]).live("click",c.handlers.listclick);
c.initialized=true;
if(b.links._links.length){b.links._render()
}return true
},deinit:function(){var e=d("#zemanta-links");
d("#zemanta-tags-div-ul li",e).die("click.zemanta",c.handlers.listclick);
e.empty().remove();
a._links=[];
a._old=[];a._temp=[];
c.initialized=false
},_success:function(n,m,p){if(!c.initialized){return m(p)
}p=p||b.control.sync.dom();
if(typeof p==="function"){return p.simple(a._success,this,arguments)
}var r=0,q=0,o=0,h=0,s="",e=[],g=[],f=null,t=function(j,i){return j.url!==f
};b.log("links success");
b._set_status(2);
b.links._old=b.links._links;
b.links._links=n.markup.links;
e=b.links._links.slice();
e.sort(function(j,i){return j.anchor.split(" ").length-i.anchor.split(" ").length
});for(r=0,o=e.length;
r<o;r+=1){for(q=0,h=g.length;
q<h;q+=1){if(e[r].anchor.toLowerCase().indexOf(g[q])>-1){if(!e[q].collidesWith){e[q].collidesWith=[]
}e[q].collidesWith.push(e[r])
}}g.push(e[r].anchor.toLowerCase())
}if(b.platform.markup_autointext){f=b.platform.get_post_url()
}for(r=0,o=b.links._links.length;
r<o;r+=1){for(q=0,h=b.links._links[r].target.length;
q<h;q+=1){s=b.links._links[r].target[q];
s.url=b.helpers.encode_url(s.url);
s.type=s.type.indexOf("_")>=0?s.type.substr(0,s.type.indexOf("_")):s.type;
s.autointext=s.type==="autointext"?true:false
}if(f){b.links._links[r].target=d.grep(b.links._links[r].target,t)
}}a.process(p);
m(p)},process:function(e){e=e||b.control.sync.dom();
if(typeof e==="function"){return e.simple(a.process,this,arguments)
}c.eliminateDuplicates();
c.syncData(e);
if(b.control.widget.links){c.prepData();
a._render(e)
}},_render:function(){var h=c.listtemplate,i=d("#zemanta-links-div-ul"),e=b.links._links.length,g=document.createDocumentFragment(),f=[];
d.each(b.links._links,function(j,m){var k=null,l=d("#zemlink-"+m.hash);
if(!l.length){k=ZemantaHelpers.simple_clone(m.renderData);
if(m.active){k.addclass+=" zemanta-selected";
k.reltype=m.selectedtype
}k.elid=m.hash;
k.index=e-j+1;
l=d(h(k)).disableTextSelect().appendTo("#zemanta-links-div-ul");
if(k.autointext){l.find("span.zemanta-link-icon").each(function(){c.helpers.setFaviconBg(k.url,d(this))
})}if(m.renderData.bytype[k.reltype].pc&2){l.find(".zemanta-link-promoted").addClass("visible")
}if(k.autointext){l.find(".zemanta-link-autointext-banner").addClass("visible")
}f.push(l[0])
}g.appendChild(l[0])
});i.empty();
i.append(g);
a.redraw();
b.platform.links_all()
},redraw:function(){var e=d.browser.msie&&parseFloat(d.browser.version)<8;
d("#zemanta-links h2.vertical").each(function(){var k=d(this),g=k.parent(),i=g.find("> ul"),j=g.find("p.zem-clear").length,f=38;
i.css("overflow","auto");
k.height(f);
g.height("");
f=g.height()+(e&&6||0);
k.height(f);
if(!j){g.height(f+2)
}i.css("overflow","")
});if(e){d("#zemanta-links h2").css("width","100px");
setTimeout(function(){d("#zemanta-links h2").css("width","")
},1)}},_prepObject:function(f,e){var g=b.helpers.simple_clone(f);
d.zextend(g,f.target[e]);
g.rdf={freebase:b.helpers.rdf_link(f,true),any:b.helpers.rdf_link(f)};
g.collidesWith=f.collidesWith;
return g},_select:function(f,e,g){g=g||b.control.sync.dom();
if(typeof g==="function"){return g.simple(b.links._select,this,arguments)
}f.title=f.title.replace(/"/g,"&quot;");
if(e===true){g=b.platform.links_insert(f,g)
}else{g=b.platform.links_remove(f,g)
}b.platform.set_html(g.html())
}};return a
};window.ZemantaArticles=function(b){var d=window.zQuery,e="zemanta-article-li",c={initialized:false,popup:{},rgx_nonascii_start:/^[^a-zA-Z0-9<]*/g,rgx_nonascii_end:/[^a-zA-Z0-9>]*$/g,helpers:{convertDate:function(g){if(typeof g==="string"){var f=new Date();
f.setISO8601(g);
return f}return g
},showmessage:function(i,f){var g=d("#zemanta-articles"),h=g.find("div.zemanta-message");
if(!h.length){d('<div class="zemanta-message'+(f&&" zemanta-autohide"||"")+'"><div class="zemanta-message-wrap">'+i+"</div></div>").insertAfter(d("h2",g))
}else{h[f?"removeClass":"addClass"]("zemanta-autohide").find(".zemanta-message-wrap").html(i)
}},hidemessage:function(f){var g=d("#zemanta-articles div.zemanta-message.zemanta-autohide");
if(f){g.animate({opacity:0,height:0},function(){d(this).remove()
})}else{g.remove()
}},humanize:function(f){f=(f||"").replace(c.rgx_nonascii_start,"").replace(c.rgx_nonascii_end,"");
f="&#x2026;"+f+"&#x2026;";
return f}},handlers:{lastevent:{},stop:function(f){f.stopPropagation()
},click:function(g){if(c.handlers.lastevent==g){return
}c.handlers.lastevent=g;
if(d(g.target).hasClass("zemanta-read-more")){return
}var j=d(this),i=(j.attr("id")||"").replace("zemart-",""),f=j.find("a").attr("href"),h=b.helpers.object_search((b.control.sources.display_sources?b.articles._my_articles:b.articles._articles),"hash",i)||b.helpers.object_search((b.control.sources.display_sources?b.articles._my_articles:b.articles._articles),"url",f);
if(g.metaKey||g.ctrlKey){return window.open(f)
}if(h){if(j.is(".zemanta-selected")){b.articles._select(h,false,j)
}else{b.articles._select(h,true,j)
}}if(c.capReached()){d("#zemanta-articles").addClass("cap-reached");
if(b.platform.horizontal_articles){d("#zemanta-articles .zemanta-insert-button").html('<div class="zemanta-interactive-background"></div><div class="zemanta-interactive-text zemanta-capped-text">limit reached</div>')
}else{d("#zemanta-articles .zemanta-insert-button").text(c.articleCap+" articles inserted - limit reached")
}}else{d("#zemanta-articles").removeClass("cap-reached");
if(b.platform.horizontal_articles){d("#zemanta-articles .zemanta-insert-button").html('<div class="zemanta-interactive-background"></div><div class="zemanta-interactive-text zemanta-insert-text">insert</div>')
}else{d("#zemanta-articles .zemanta-insert-button").text("click to insert")
}}},markhover:function(f){d(this).parent().toggleClass("hover")
}},eliminateDuplicates:function(){var f=b.helpers.merge_arrays({p:"url",e:true},b.articles._articles,d.each(b.articles._old,function(){delete this.active
}));b.articles._articles=f.union;
if(b.articles._articles[0]){b.articles._articles[0].first=true
}if(b.articles._articles[f.idx[0]+1]){b.articles._articles[f.idx[0]+1].last=true
}},createHighlightText:function(h){var f=h.text_preview||h.text_highlight||h.title_highlight||"Excerpt is not available at this time.",i=h.title.replace(" and related posts",""),g={};
if(b.platform.horizontal_articles){setTimeout(function(){g=d("#zemart-"+h.hash);
if(g.find("p.zemanta-article-title span").text().length>30){g.find("p.zemanta-article-title span").text(g.find("p.zemanta-article-title span").text().substring(0,30)+"...")
}if(!g.find(".zemanta-article-preview-img").length){d('<img src="//thumbs.zemanta.com/'+h.article_id+b.platform.article_thumbnail_suffix+'" class="zemanta-article-preview-img" />').prependTo(g)
}},1)}else{h.highlight_text='<div class="zemanta-snippet-header"><a href="'+h.url+'" title="Open link in new window" target="_blank" class="zemanta-big-preview-title">'+i+'</a><div class="zemanta-snippet-postmeta"><ul class="zemanta-snippet-social"><li class="fb"><a target="_blank" href="#">0</a></li><li class="twitter"><a target="_blank" href="#">0</a></li></ul><span class="zemanta-snippet-postdate">'+h.outdate+'</span></div></div><div class="zemanta-snippet-body">'+(h.article_id?'<img src="//thumbs.zemanta.com/'+h.article_id+b.platform.article_thumbnail_suffix+'" class="zemanta-article-preview-img" />':"")+f+'</div><div class="zemanta-snippet-footer"><a href="http://'+h.hostname.toLowerCase()+'" target="_blank" title="Open link in new window" class="zemanta-big-preview-morelink">'+h.hostname.toLowerCase()+"</a>"+(h.pc&2&&'<div class="zemanta-promoted-content"><a href="http://www.zemanta.com/faq/promoted" class="zemanta-promoted" target="_blank">promoted</a></div>'||"")+"</div>";
return h}},createShareUrl:{facebook:function(f){return"http://www.facebook.com/dialog/feed?app_id=29471221054&redirect_uri="+encodeURIComponent("http://www.zemanta.com/share/callback/")+"&link="+encodeURIComponent(f.url)+"&name=Found a good article while blogging with Zemanta.&caption="+encodeURIComponent(f.title)
},twitter:function(f){return"https://twitter.com/intent/tweet?source=webclient&text="+encodeURIComponent("Found a good article while blogging with @Zemanta. "+f.url)
}},checkImage:(function(){var h={},g={},i=function(j){var l=j%b.platform.article_thumbnail_default_count,k=parseInt(Math.random()*1000)%b.platform.article_thumbnail_default_count;
return isNaN(l)&&k||l
},f=function(j,k){var l=i(j),m="noimg_"+l;
if(k){d(k).attr("src","//thumbs.zemanta.com/"+m+b.platform.article_thumbnail_suffix)
}return m};
return function(k){var j="//thumbs.zemanta.com/"+k.article_id+b.platform.article_thumbnail_suffix;
if(!k.article_id){k.article_id=f(Math.floor(Math.random()*b.platform.article_thumbnail_default_count));
c.createHighlightText(k);
return}if(!h[j]){setTimeout(function(){var l=d("<img />");
l.one("load.articles.popup",function(){h[j]=true;
c.createHighlightText(k)
}).one("error.articles.popup",function(){h[j]=true;
g[j]=true;k.article_id=f(k.article_id,this);
c.createHighlightText(k)
}).attr("src",j)
},1)}else{if(g[j]){k.article_id=f(k.article_id)
}c.createHighlightText(k)
}}})(),syncData:function(f){b.articles._my_articles=b.platform.articles_active(b.articles._my_articles,f,b.helpers.array_index(b.articles._my_articles,false,function(g){return b.helpers.encode_url(g.url)
}));b.articles._my_articles.sort(function(h,g){return(!h.active&&!g.active)?0:h.active?!g.active?-1:1:1
});b.articles._articles=b.platform.articles_active(b.articles._articles,f,b.helpers.array_index(b.articles._articles,false,function(g){return b.helpers.encode_url(g.url)
}));b.helpers.qsort(b.articles._articles,function(h,g){return !!h.active-!!g.active
})},prepData:function(h){var i=d.now(),f=86400*1000,g=h||(b.control.sources.display_sources?b.articles._my_articles:b.articles._articles);
d.each(g,function(j,k){var l=null;
if(!k.hash){if(ZemantaHelpers.check_feature("ZemantaFakePC")){k.pc=Math.floor(Math.random()*4)
}l=c.helpers.convertDate(k.published_datetime);
k.published_datetime=l;
k.title=d.trim(k.title).replace(/"/g,"&quot;");
k.hostname=b.helpers.extract_hostname(k.url);
k.hash=ZemantaHelpers.elf_hash(k.url);
k.outdate=(!l||((i-l.getTime())>90*f))?"":l.toTimeSinceString(1)+" ago "
}if(b.platform.big_article_preview||b.platform.horizontal_articles){c.checkImage(k)
}else{k.highlight_text='<span class="zemanta-snippet-title">From the article:</span><span class="zemanta-snippet">'+c.helpers.humanize(k.text_preview||k.text_highlight||k.title_highlight||"<i>Excerpt not available at this time.</i>")+' <a href="'+ZemantaHelpers.html_attr(k.url)+'" target="_blank">read more</a></span>'+(k.pc&2&&'<p class="zemanta-promoted-content">This is a <a href="http://www.zemanta.com/faq/promoted" class="zemanta-promoted" target="_blank">promoted</a> article. <a href="http://www.zemanta.com/faq/promoted" class="zemanta-more" target="_blank">Read more</a></p>'||"")
}})},sharesData:{},setSharesCount:function(h,f,g){if(typeof(this.sharesData[h])==="undefined"){this.sharesData[h]={}
}this.sharesData[h][f]=g
},getSharesCount:function(g,f){if(typeof(this.sharesData[g])!=="undefined"&&typeof(this.sharesData[g][f])!=="undefined"){return this.sharesData[g][f]
}return false
},checkSharesCount:function(i,j){var h=i.url,g=0,f=typeof(j)==="function"?j:function(){};
if(i.likes===undefined&&this.getSharesCount("fb",i.url)===false){this.setSharesCount("fb",h,0);
d.ajax({url:"https://graph.facebook.com/",data:{id:i.url},dataType:"jsonp",crossDomain:true,success:d.proxy(function(k){g=k.shares||0;
this.setSharesCount("fb",h,g);
f("fb",h,g)
},this)})}},updateSharesUI:function(i){var f=d("#zemanta-articles-popup .zemanta-snippet-social"),k=d("#zemanta-articles-popup .zemanta-snippet-header"),g=d(".zemanta-big-preview-title",k),h=i.retweets||0,j=i.likes||this.getSharesCount("fb",i.url)||0;
f.slideDown("fast");
g.css("margin-right",k.width()-(f.position()&&f.position().left||0));
f.find(".twitter a").text(h).attr("href",c.createShareUrl.twitter(i));
f.find(".fb a").text(j).attr("href",c.createShareUrl.facebook(i))
},articleCap:10,capReached:function(){return d("#zemanta-articles .zemanta-selected").length>=c.articleCap
}},a={_articles:[],_my_articles:[],_old:[],_my_old:[],sources:{popular:function(i){var g=[],j=d.now(),h=86400*1000,f=0;
d.each(i.popular,function(k){var m=c.helpers.convertDate(this.published),l={url:b.helpers.encode_url(this.url),title:d.trim(this.title).replace(/\u0093|\u0094/g,'"').replace(/"/g,"&quot;"),published_datetime:c.helpers.convertDate(this.published),confidence:0.5,zemified:this.rid===null?0:1,text_highlight:this.description||"",poc:true,hostname:b.helpers.extract_hostname(this.url),outdate:m.getTime()<=h*3650?"":m.toTimeSinceString(1)+" ago",hash:ZemantaHelpers.elf_hash(this.url),article_id:this.article_id};
if(k===0){l.first=true
}g.push(l)});
g=g.slice(0,5);
return g}},init:function(){var g=d("#zemanta-articles"),f={};
if(b.platform.horizontal_articles){if(b.platform.removeArticleElement){g.remove()
}b.platform.articles_initialize();
g=d("#zemanta-articles")
}if(!g.length){return b.log("Not initializing articles - no wrapper")
}d("#zemanta-articles-wrap li").live("click.articles",c.handlers.click).find("a").live("click.articles",c.handlers.stop).live("mousedown.articles",c.handlers.stop).live("mouseup.articles",c.handlers.stop).live("hover.articles",c.handlers.markhover).end();
d('<h2><span class="zemanta-articles-title">'+(b.platform.horizontal_articles?"Related Posts":"Related Articles")+"</span>"+(((b.platform.articles_with_images&&!b.platform.horizontal_articles)||b.platform.horizontal_articles_with_option)?'<span id="zemanta-articles-rawi"><label for="zemanta-articles-rawi-checkbox">with thumbnails</label><input id="zemanta-articles-rawi-checkbox" type="checkbox" value="0" /></span>':"")+'</h2><div id="zemanta-articles-wrap"><ul id="zemanta-articles-list">'+(b.platform.articles_help_display?'<li class="zemanta-title">Related posts will appear here as soon as you write some text.</li>':"")+"</ul></div>").find("#zemanta-articles-rawi-checkbox").each(function(){if(b.helpers.storage.get("rawi",true)){d(this).prop("checked",true)
}}).on("change",function(){var h=d(this).prop("checked");
b.helpers.storage.set("rawi",h)
}).end().appendTo(d("#zemanta-articles").empty().on("mouseover",c.helpers.hidemessage)).disableTextSelect();
d("#zemanta-sidebar #zemanta-articles-wrap").height(b.helpers.storage.get("#zemanta-sidebar #zemanta-articles-wrap-size")===0?0:b.helpers.storage.get("#zemanta-sidebar #zemanta-articles-wrap-size")||b.platform.articles_height);
if(!b.platform.disable_draggable_resize){d("#zemanta-articles h2").addClass("draggable");
b.helpers.drag("#zemanta-articles h2.draggable","#zemanta-sidebar #zemanta-articles-wrap",{stop:function(){if(d.browser.msie){d("#zemanta-links-div-ul").hide().show()
}}},"articles")
}c.popup=f={popup_id:"zemanta-articles-popup",mode:"articles",source_marker:"zemanta-articles-li-hover",timeout:b.platform.articles_popup_timeout,parent_selector:b.platform.article_popup_parent,current_data:null,markArticleInsert:function(h){d("#zemanta-articles-popup .zemanta-big-preview-content, #zemanta-articles-popup .zemanta-article-shader").addClass("zemanta-selected");
d("#zemanta-add-article").html("Remove from post")
},markArticleRemove:function(h){d("#zemanta-articles-popup .zemanta-big-preview-content, #zemanta-articles-popup .zemanta-article-shader").removeClass("zemanta-selected zemanta-selected-image");
d("#zemanta-add-article").html("&#65122; Add to post")
},init:function(){b.bind("articleInsert.articles.popup",f.markArticleInsert);
b.bind("articleRemove.articles.popup",f.markArticleRemove);
d(this).off("click.share").on("click.share",".zemanta-snippet-social li",function(){var h=(d(this).hasClass("fb")&&"fb")||(d(this).hasClass("twitter")&&"twitter")||"unknown"
})},deinit:function(){b.unbind("articleInsert",f.markArticleInsert);
b.unbind("articleRemove",f.markArticleRemove)
},position:function(h){b.platform.article_popup_position(h)
},calcShaderPosition:function(i,k,j){function n(r){return parseInt(r,10)||0
}var o=0,m=null,l=null,h=null,p=null,q=parseInt(k.source.css("border-bottom-width"),10);
if(b.platform.big_article_preview){m=d("#"+i[0].className);
l=d("#zemanta-articles-popup");
h=d("#zemanta-articles-wrap");
p=d(".zemanta-big-preview-content",this);
o=l.outerHeight(true)-(h.outerHeight(true)+d("#zemanta-tools").outerHeight(true)+d("#zemanta-plugin-help").outerHeight(true))+(m[0].offsetTop-h[0].scrollTop)+8-(n(l.css("margin-top"))+n(l.css("border-top-width"))-n(l.css("padding-top")))
}else{o=j?i.outerHeight()-q:0
}return o},beforeShow:function(h){if(!b.platform.big_article_preview&&h.popupUpsidedown){d(".zemanta-article-shader",this).css("top",f.calcShaderPosition(this,h,true))
}},moveShader:function(i,h){if(!b.platform.big_article_preview){d(".zemanta-article-shader",this).css("top",f.calcShaderPosition(this,i,h))
}},element_height:function(h){return d(h).get_element_height(true,false,true,true)-1
},create:function(m){function k(u){var s=d(this).parents("#zemanta-articles-popup")[0].className,t=d.trim(s.replace("active","")),v=d("#"+t);
if(u.target.nodeName.toLowerCase()==="a"&&(d(u.target).parents("span.zemanta-snippet-title").length||d(u.target).parents("span.zemanta-snippet").length)||d(u.target).parents("p.zemanta-promoted-content")){return
}v.trigger("click");
u.stopPropagation();
u.preventDefault()
}var o=m.source,h=this,l=b.helpers.object_search((b.control.sources.display_sources?b.articles._my_articles:b.articles._articles),"hash",(o.attr("id")||"").replace("zemart-","")),r=0,p=29,j=0,i=0,n=0,q=0;
if(!l){return
}f.current_data=m;
if(!b.platform.big_article_preview){if(b.platform.horizontalArticlesPopups!==undefined){b.platform.horizontalArticlesPopups(l,m,o,h)
}else{if(!d(".zemanta-article-desc",h).length){d('<div class="zemanta-article-desc">'+l.highlight_text+"</div>").appendTo(h);
d(".zemanta-article-desc",h).unbind("click").on("click.articles",k)
}r=d("#zemanta-articles").height()+d("zemanta-tools").height();
p=29;j=Math.floor(o.width()*(p/100));
i=Math.max(m.source.get_element_width(false,false),100)-j;
n=Math.max(m.source.get_element_width(false,true),100)-j;
q=parseInt(this.css("left"),10)+j;
if(!d(".zemanta-article-shader",h).length){d('<div class="zemanta-article-shader"></div>').css("width",n).appendTo(h)
}h.css({width:i,left:q});
d(".zemanta-article-shader",m.source).show()
}}else{if(!d(".zemanta-big-preview-content",h).length){d('<div class="zemanta-big-preview-content">'+l.highlight_text+"</div>").appendTo(h)
}h.addClass("zemanta-big-preview big-article-preview");
b.platform.article_big_popup_position(m,h,this);
c.checkSharesCount(l,function(){if(/zemart-(\d+)/i.exec(d(h).attr("class")).pop()===l.hash){c.updateSharesUI(l)
}});c.updateSharesUI(l)
}b.events.trigger("articles_popup",l)
},destroy:function(h){},scroll_resilience:{zero:d(b.platform.article_popup_parent),wrap:d("#zemanta-articles-wrap")}};
if(b.platform.articles_help_display){d("#zemanta-articles").append('<a class="zemanta-powered" href="http://zemanta.com" target="_blank" title="Get even more recommendations by Zemanta. Images, Articles and Tags!"></a><a class="zemanta-horizontal-articles-faq" target="blank" href="http://zem.si/relatedarticleswpcom">What are related posts?</a>')
}if(b.platform.big_article_preview){f.interval=40;
f.timeout=250
}ZemantaHelpers.popup(d(".zemanta-article-li",d("#zemanta-articles")[0]),f)();
c.initialized=true;
if(b.articles._articles.length||b.articles._my_articles.length){c.prepData();
b.articles._render()
}b.events.trigger("articlesInitialized",b.articles);
return true
},prepArticlesList:function(f){c.prepData(f)
},deinit:function(){d("#zemanta-sidebar #zemanta-articles-wrap li").unbind().find("a").unbind();
d("#zemanta-articles").empty().unbind();
a._articles=[];
a._old=[];c.popup.deinit();
c.popup={};
c.initialized=false
},_success:function(g,f,i){var h=0;
if(!c.initialized){return f(i)
}i=i||b.control.sync.dom();
if(typeof i==="function"){return i.simple(a._success,this,arguments)
}b.log("articles success");
b._set_status(2);
d.each(g.articles,function(j,k){k.title=b.helpers.escapeHtml(k.title);
k.hostname=b.helpers.escapeHtml(k.hostname);
k.url=b.helpers.escapeHtml(k.url);
k.highlight_text=b.helpers.escapeHtml(k.highlight_text);
k.text_highlight=b.helpers.escapeHtml(k.text_highlight);
k.text_preview=b.helpers.escapeHtml(k.text_preview);
k.title_highlight=b.helpers.escapeHtml(k.title_highlight);
if(k.pc===2){h+=1
}});if(b.control.sources.display_sources){if(g.articles.length>0){b.articles._my_old=b.articles._my_articles;
b.articles._my_articles=g.articles
}}else{b.articles._old=b.articles._articles;
b.articles._articles=g.articles
}if(!g.articles.length&&!b.control.sources.display_sources){c.helpers.showmessage("Sorry, we didn't find any new articles for the text you're writing...",true)
}a.process(i);
f(i)},process:function(f){f=f||b.control.sync.dom();
if(typeof f==="function"){return f.simple(a.process,this,arguments)
}if(a._articles.length){c.helpers.hidemessage()
}c.eliminateDuplicates();
c.syncData(f);
if(b.control.widget.articles){c.prepData();
a._render()
}},_render:function(i){var j=d("#zemanta-articles-list"),h=b.platform.article_list_item_template(e),g=document.createDocumentFragment(),f=[];
if(b.platform.big_article_preview){j.addClass("big-article-preview")
}d.each((b.control.sources.display_sources?b.articles._my_articles:b.articles._articles),function(l,o){var n=d("#zemart-"+o.hash,j),k="",m=ZemantaUtils.tokenList().add(o.active&&"zemanta-selected").add(o.active&2&&"zemanta-selected-image").add(o.pc&2&&"zemanta-article-li-promoted").print(" ");
if(!n.length){if(!(b._ab&&b._ab==="b")){k=typeof o.zemified!=="undefined"&&o.zemified===1&&'<img src="'+ZemantaUtils.staticDomain+'core/img/zem_source.png" class="zemanta-source-icon-1">'||"";
k='<img src="'+ZemantaUtils.staticDomain+'core/img/zem_source.png" class="zemanta-source-icon-1">'
}n=d(h({hash:o.hash,fulltitle:o.title,hostname:o.hostname,article_url:o.url,date:o.outdate,title:o.title,source_icon:k,personal_icon:typeof o.personal_scope!=="undefined"&&o.personal_scope===1&&'<img src="'+ZemantaUtils.staticDomain+'core/img/user_orange.png" class="zemanta-source-icon-'+(k===""&&"1"||"2")+'">'||"",own_post:b.platform.has_own_posts&&typeof o.personal_scope!=="undefined"&&o.personal_scope===1&&'<div class="zemanta-article-mypost">Your Post</div>'||"",selection:m,promoted:o.pc&2&&'<div class="zemanta-article-promoted">Promoted</div>'||""})).disableTextSelect();
if(b.platform.big_article_preview){n.append('<div class="zemanta-insert"><div class="zemanta-remove-button">click to remove</div><div class="zemanta-insert-button">click to insert</div></div>')
}if(b.platform.horizontal_articles){n.append('<div class="zemanta-insert"><div class="zemanta-interactive-button zemanta-remove-button"><div class="zemanta-interactive-background"></div><div class="zemanta-interactive-text zemanta-remove-text">remove</div></div><div class="zemanta-interactive-button zemanta-insert-button"><div class="zemanta-interactive-background"></div><div class="zemanta-interactive-text zemanta-insert-text">insert</div></div></div>')
}f.push(n[0])
}else{n[0].className=e+m
}g.appendChild(n[0])
});j.empty().append(g);
if(i){c.prepData()
}},_select:function(h,g,j,i,f){i=i||b.control.sync.dom();
if(typeof i==="function"){return i.simple(b.articles._select,this,arguments)
}if(g&&c.capReached()){return
}if(g===true){j.addClass("zemanta-selected");
i=b.platform.articles_insert(h,b.force_one_paragraph(i),f)
}else{j.removeClass("zemanta-selected zemanta-selected-image");
i=b.platform.articles_remove(h,i)
}b.platform.set_html(i.html());
b.platform.scroll("bottom");
b.events.trigger(g?"articleInsert":"articleRemove",h);
if(j){b.helpers.feedback.animate("article-click",j,h)
}}};return a
};window.ZemantaTags=function(b){var d=window.zQuery,c={initialized:false,handlers:{lastevent:{},click:function(e){if(c.handlers.lastevent==e){return
}c.handlers.lastevent=e;
if(c.enabled()){var g=d(this).text().replace(/\xA0/g," "),f=b.helpers.object_search(b.tags._tags,"name",g),h=false;
if(g&&f){h=d(this).is(".zemanta-selected");
b.tags._select(f,!h);
d(this).toggleClass("zemanta-selected")
}}}},enabled:function(){return !!(b.tags_target_id&&document.getElementById(b.tags_target_id))
},template:ZemantaHelpers.ZTemplate('<li class="zemanta-tags-li">{name}</li>'),eliminateDuplicates:function(){b.tags._tags=b.helpers.merge_arrays({p:"name"},b.tags._tags,d.grep(b.tags._old,function(f,e){return !!f.active
}))},syncData:function(e){b.tags._tags=b.platform.tags_active(b.tags._tags,e)
}},a={_tags:[],_old:[],initialize:function(){b.log("Using deprecated initialize method");
return a.init()
},init:function(){var e=null;
if(!d("#zemanta-tags-div-ul").length&&c.enabled()){b.platform.tags_initialize()
}e=d("#zemanta-tags");
if(!e.length){b.log("Not initializing tags - no wrapper");
return false
}else{if(b.widget_enabled===false||!c.enabled()){e.not("#zemanta-sidebar #zemanta-tags").hide()
}}d("#zemanta-sidebar #zemanta-tags-div-ul").height(b.helpers.storage.get("#zemanta-sidebar #zemanta-tags-div-ul-size")===0?0:b.helpers.storage.get("#zemanta-sidebar #zemanta-tags-div-ul-size")||120);
if(!b.platform.disable_draggable_resize){d("#zemanta-sidebar #zemanta-tags h2").addClass("draggable").each(function(){b.helpers.drag("#zemanta-sidebar #zemanta-tags h2.draggable","#zemanta-sidebar #zemanta-tags-div-ul",{stop:function(){if(d.browser.msie){d("#zemanta-tags-div-ul").hide().show()
}}},"tags")
})}d("h2 a.zemanta-help",e).attr("title","Need help with Tags?").attr("href","http://www.zemanta.com/faq/quickhelp/?tags#faqid-62");
if(b._preferences.return_tags==="0"){d("#zemanta-tags").hide()
}d("#zemanta-tags-div-ul li",d("#zemanta-tags")[0]).live("click",c.handlers.click);
c.initialized=true;
if(b.tags._tags.length){b.tags._render()
}return true
},deinit:function(){var e=d("#zemanta-tags");
d("#zemanta-tags-div-ul li",e).die("click.zemanta",c.handlers.click);
e.empty().remove();
a._tags=[];
a._old=[];c.initialized=false
},_success:function(f,e,g){if(!c.initialized||!c.enabled()){return e(g)
}g=g||b.control.sync.dom();
if(typeof g==="function"){return g.simple(a._success,this,arguments)
}b.log("tags success");
b.tags._old=b.tags._tags;
b.tags._tags=f.keywords;
a.process(g);
e(g)},process:function(e){e=e||b.control.sync.dom();
if(typeof e==="function"){return e.simple(a.process,this,arguments)
}c.eliminateDuplicates();
if(b.control.widget.tags){c.syncData(e);
a._render()
}},_render:function(){d("#zemanta-tags-div-ul").empty();
var f=c.template,g=0,e=b.tags._tags.length,h=null;
for(;g<e;g+=1){h=d(f({name:b.tags._tags[g].name.replace(/ /g,"&nbsp;")})).appendTo("#zemanta-tags-div-ul").disableTextSelect();
if(b.tags._tags[g].active===true){h.addClass("zemanta-selected")
}}a.redraw();
b.platform.tags_all()
},redraw:function(){var e=d.browser.msie&&parseFloat(d.browser.version)<8;
d("#zemanta-tags h2.vertical").each(function(){var k=d(this),g=k.parent(),i=g.find("> ul"),j=g.find("p.zem-clear").length,f=38;
i.css("overflow","auto");
k.height(f);
g.height("");
f=g.height()+(e&&6||0);
k.height(f);
if(!j){g.height(f+2)
}i.css("overflow","")
});if(e){d("#zemanta-tags h2").css("width","100px");
setTimeout(function(){d("#zemanta-tags h2").css("width","")
},1)}},adjustHeight:function(){a.redraw()
},_getTagArray:function(){var e=d.map(d(document.getElementById(b.tags_target_id)).val().split(","),function(f){f=d.trim(f);
return f===""?null:f
});return e
},_setTagsFromArray:function(e){d(document.getElementById(b.tags_target_id)).val(e.join(", "))
},_select:function(f,e,g){g=g||b.control.sync.dom();
if(typeof g==="function"){return g.simple(b.tags._select,this,arguments)
}if(e===true){b.platform.tags_insert(f);
f.active=true
}else{b.platform.tags_remove(f);
f.active=false
}b.platform.set_html(g.html());
b.events.trigger(e?"tagInsert":"tagRemove",f)
},_selectAll:function(e){d.each(a._tags,function(f,g){if(!g.active){a._select(g,true,e)
}});a._render()
}};return a
};window.ZemantaPreferences=function(b){var e="http://prefs.zemanta.com/apikey-not-processed-yet",d=window.zQuery,c={busy:false,process:function(n){n=n||b.control.sync.dom();
if(typeof n==="function"){d("#zemanta-message").html(b.microcopy.fetching_content);
return n.simple(c.process,this,arguments)
}var f=b._preferences,k=null,m={change:false,nosig:true},j=false;
b.events.trigger("preferencesReceived",f);
if(f.api_key&&b.control._apikey_isvalid(f.api_key)){b.api_key=f.api_key;
b.events.trigger("apikeyChange")
}if(f.status==="ok"){f.config_url=ZemantaHelpers.uri_add(f.config_url||e,{platform:b.interface_type});
a.response(f);
if(f.link_target&&f.link_target!==b.link_target){if(f.link_target==="1"||f.link_target==="_blank"){b.link_target=true
}else{b.link_target=false
}}if(f.doctype&&f.doctype!==b.doctype){j=b.doctype!=="-1";
if(f.doctype==="True"||f.doctype==="1"||f.doctype==="raw"){b.doctype="1"
}else{b.doctype="0"
}c.update_templates();
if(j){m.change=c.update_doctype(n)||m.change
}}if(f.image_position&&f.image_position!==b.image_position.index){if(f.image_position==="1"||f.image_position==="left"){b.image_position={index:"1",title:"left"}
}else{b.image_position={index:"0",title:"right"}
}c.update_templates()
}if(f.return_rdf_links&&f.return_rdf_links!==b.return_rdf_links&&b.platform.rdf_supported&&b.widget_version>1){b.return_rdf_links=f.return_rdf_links;
if(!b.return_rdf_links){if(arguments.callee.links_template_html){b.platform.links_template_html=arguments.callee.links_template_html;
delete arguments.callee.links_template_html
}}else{k=arguments.callee.links_template_html=b.platform.links_template_html;
b.platform.links_template_html=function(i){var o=k(i),p=d("<div>"+o+"</div>");
if(i.rdf){p.find("a").each(function(){d(this).attr({rel:"ctag:means"+(d(this).attr("rel")?" "+d(this).attr("rel"):""),"xmlns:ctag":"http://commontag.org/ns#","typeof":"ctag:Tag",resource:i.rdf,property:"ctag:label"}).addClass("rdfa")
}).end();return p.html()
}else{return o
}}}m.change=c.update_rdf_links(n)||m.change
}if(f.nofollow&&f.nofollow!==b.nofollow){if(f.nofollow==="1"||f.nofollow===true){b.nofollow=true
}else{b.nofollow=false
}c.update_templates()
}if(f.is_registered==="1"){b.user_is_registered=true
}if(f.tos==="1"){b.tos_accepted=true
}if(d("#zemanta-preferences").length===0){d('<div id="zemanta-preferences"><div><a href="'+f.config_url+'" title="Open Zemanta preferences"><span class="zemanta-icon"></span>'+(b.user_is_registered?"Preferences":"Sign in")+"</a></div></div>").find("a").on("click.preferences.open",function(i){b.control.preferences.open(i,{compose_url:encodeURIComponent(window.location.href)})
}).end().appendTo("#zemanta-head").data("displayed",d("#zemanta-preferences").length>0&&d("#zemanta-preferences").css("display")||"block")
}b.platform.gallery_template_item=f.image_layout_item||b.platform.gallery_template_item;
b.platform.articles_template_wrapper=f.article_layout_wrapper||b.platform.articles_template_wrapper;
b.platform.articles_template_item=f.article_layout_item||b.platform.articles_template_item;
b.platform.links_template_item=f.link_layout_item||b.platform.links_template_item;
a.hide_parts();
for(var g=0,l=["gallery","articles","links","tags"],h="";
g<l.length;
g++){b.control.widget[l[g]]=!f["disable_"+l[g]]
}if(parseInt(f.autoupdate,10)===0){b.control.watcher={start:function(){},stop:function(){},resume:function(){},is_on:function(){return false
}}}if(m.change){b.platform.set_html(n.html())
}}b.events.trigger("preferencesProcessed",n);
b.control.update(d("#zemanta-keyword-input").val(),true,n)
},update_doctype:function(f){if(f){f.find(".zemanta-img").zattr("style",b.doctype_image1.substring(b.doctype_image1.indexOf('"')+1,b.doctype_image1.lastIndexOf('"'))||null).find("img").zattr("style",b.doctype_image2.substring(b.doctype_image2.indexOf('"')+1,b.doctype_image2.lastIndexOf('"'))||null).end().find(".zemanta-img-attribution").zattr("style",b.doctype_image3.substring(b.doctype_image3.indexOf('"')+1,b.doctype_image3.lastIndexOf('"'))||null).end().end();
if(b.platform.articles_with_images){}else{f.find(".zemanta-related").each(function(){var g=d(this);
if(b.widget_version>2){g.replaceWith(d(b.platform.articles_template_wrapper).findWithSelf(".zemanta-article-ul").append(g.find(".zemanta-article-ul-li")).end())
}else{g.replaceWith(b.doctype_related1+d(this).nextAll(".zemanta-article-ul").html()+b.doctype_related2)
}}).end().find(".zemanta-related-title").each(function(){var h=d(this),g=null;
if(h.parents(".zemanta-related").length>0||h.hasClass("zemanta-related")){return
}g=h.nextAll(".zemanta-article-ul");
h.remove();
if(b.widget_version>2){g.replaceWith(d(b.platform.articles_template_wrapper).findWithSelf(".zemanta-article-ul").append(g.find(".zemanta-article-ul-li")).end())
}else{g.replaceWith(b.doctype_related1+g.html()+b.doctype_related2)
}}).end()}return true
}return false
},update_templates:function(){b.helpers.copy(["doctype_image1","doctype_image2","doctype_image3","doctype_related1","doctype_related2"]).from(b.platform.control_setHTML(b.doctype,b.image_position.title,b.nofollow,b.link_target)).to(b);
return false
},update_rdf_links:function(f){f.find(".zem_slink").each(function(){if(b.return_rdf_links==="0"){d(this).zattr("rel",d.grep(d(this).attr("rel").split(" "),function(h,g){return h!=="ctag:means"
}).join(" ")).removeAttr("xmlns:ctag").removeAttr("typeof").removeAttr("resource").removeAttr("property").removeClass("rdfa")
}else{b.log("Converting exiting links to RDF doesn't work yet.")
}}).end();return true
},success:function(f){c.busy=false;
b._preferences=f;
c.process()
},error:function(g,f){c.busy=false;
if(f){b._set_status(6,f)
}},prefs_window:null,watch:function(){var g=false;
try{g=(c.prefs_window&&!c.prefs_window.closed)
}catch(f){b.log("Error while watching prefs:",f)
}if(g){setTimeout(c.watch,2000)
}else{if(!b.control.sources.display_sources){setTimeout(function(){b._set_status(2);
a.update();
if(c.prefs_window){d("#zemanta-control-update").disableTextSelect().unbind("focus")
}},3000)}}}},a={open:function(g,i){var f=b._preferences.config_url||e,h=i?ZemantaHelpers.uri_add(f,i):f;
if(g&&g.preventDefault){g.preventDefault()
}if(typeof window.ZemantaWindowOpen!=="undefined"){c.prefs_window=window.ZemantaWindowOpen(h,600,900)
}else{c.prefs_window=window.open(h,null,"height=600, width=980, scrollbars=1, menubar=no, toolbar=no, location=no, status=no")
}if(c.prefs_window){b._set_status(0,{text:"Reload this page for new preferences to take effect.",type:"info"});
c.watch()}else{d("#zemanta-control-update").disableTextSelect().unbind("focus").one("focus.preferences",function(j){c.watch();
d(window).unbind("focus")
});d(window).one("focus.preferences",c.watch)
}return false
},update:function(){if(c.busy){return
}var f={method:"zemanta.preferences",api_key:b.api_key,format:"json"};
if(b._lastplatformerror){f.lasterror=b._lastplatformerror
}f=b.control._add_stats(f);
c.busy=true;
b.post(b.api_url,f,c.success,c.error)
},response:function(f){if(f){b.preferences=b.helpers.copy(["amazon_id","flickr_user_id","instagram_feed_type","daylife_id","social_timestamp","target_types","image_types","flickr_license","fashiontraffic_affiliate_id","autofeed_ids","sourcefeed_ids","image_max_h","image_max_w","return_rdf_links","careful_pc","no_log","personal_scope","account_type"]).from(f).to();
if(b.preferences.amazon_id===""){delete b.preferences.amazon_id
}}else{return b.preferences?b.preferences:{}
}},hide_parts:function(){var f=b._preferences;
if(f.target_types===""){d("#zemanta-links").hide()
}if(f.image_types===""){d("#zemanta-gallery").hide()
}if(f.personal_scope&&!f.sourcefeed_ids){d("#zemanta-articles").hide()
}if(f.return_tags==="0"){d("#zemanta-tags").hide()
}if(f.account_type&&f.account_type==="pro"){d("#zemanta-source, #zemanta-preferences, #zemanta-head .zemanta-source-mine").hide();
d("#zemanta-sidebar").addClass("zemanta-pro-sidebar").find("#zemanta-message").hide()
}}};return a
};window.ZemantaSources=function(a){var c=window.zQuery,b={display_sources:false,is_init:false,num_unprocessed_requests:0,initialize:function(){a.log("Using deprecated initialize method");
return b.init()
},init:function(){var d=c("#zemanta-head div.zemanta-source-mine");
if(!a.platform.sources_enabled||(a.preferences.account_type&&a.preferences.account_type==="pro")){return
}if(a.gallery){a.gallery._my_images=[];
a.gallery._my_old=[]
}if(!d.length){d=c('<div class="zemanta-source-mine zemanta-source"><div class="zemanta-disabled" title="&quot;My sources&quot; is available after you have some recommendations">My Sources</div></div>').disableTextSelect().insertAfter("#zemanta-head h1").data("displayed",c(".zemanta-source-mine").length>0&&c(".zemanta-source-mine").css("display")||"block").show().fin()
}b.toggle(true)
},deinit:function(){},toggle_when_ready:function(){b.num_unprocessed_requests-=1;
if(b.num_unprocessed_requests<1){b.toggle(true)
}},toggle:function(g){if(a.platform.inactive_sidebar){return
}var k="zemanta-source-on",e=c("#zemanta-head div.zemanta-source-mine"),d=c("#zemanta-head h1.zemanta-source-global"),l=function(){var n=c(this).attr("id")
},m=function(p){var n=[],q=null,s=null,r=ZemantaHelpers.valueForKeyPath(p,"meta.code"),t="";
if(r!==200||typeof(p.data)!=="object"){if(r===400){a._set_status(0,{text:"Your session at Instagram expired. Please re-connect in Preferences.",type:"info"})
}return}c.each(p.data,function(o,u){t=ZemantaHelpers.valueForKeyPath(u,"user.username",null);
s={};s.source="Instagram";
s.attribution=ZemantaHelpers.valueForKeyPath(u,"caption.text","");
s.attribution+=(s.attribution.length?" ":"")+"via "+t;
s.description=s.attribution;
s.confidence=0.5;
s.width=ZemantaHelpers.valueForKeyPath(u,"images.standard_resolution.width",0);
s.height=ZemantaHelpers.valueForKeyPath(u,"images.standard_resolution.height",0);
s.license=t?"Author: "+t:null;
s.url_l=ZemantaHelpers.valueForKeyPath(u,"images.standard_resolution.url");
s.url_l_w=ZemantaHelpers.valueForKeyPath(u,"images.standard_resolution.width",0);
s.url_l_h=ZemantaHelpers.valueForKeyPath(u,"images.standard_resolution.height",0);
s.url_m=ZemantaHelpers.valueForKeyPath(u,"images.low_resolution.url");
s.url_m_w=ZemantaHelpers.valueForKeyPath(u,"images.low_resolution.width",0);
s.url_m_h=ZemantaHelpers.valueForKeyPath(u,"images.low_resolution.height",0);
s.url_s=ZemantaHelpers.valueForKeyPath(u,"images.thumbnail.url");
s.url_s_w=ZemantaHelpers.valueForKeyPath(u,"images.thumbnail.width",0);
s.url_s_h=ZemantaHelpers.valueForKeyPath(u,"images.thumbnail.height",0);
s.source_url=u.link||s.url_l;
s.hash=ZemantaHelpers.elf_hash(s.source_url+s.url_s);
n.push(s)});
a.control._success({status:"ok",images:n})
},i=function(n){a.events.trigger("sourcesReceived");
c("#zemanta-gallery-wrap, #zemanta-articles-wrap").each(function(){c(this).find(".my-sources-update").remove()
});if(a.preferences.flickr_user_id===undefined&&a.preferences.instagram_access_token===undefined){c('<div id="zemanta-flickr-sourcefeed-prompt" class="zemanta-sourcefeed-prompt"><div id="zemanta-vertical-center"></div><a href="'+a._preferences.config_url+'" target="_blank"><img src="'+window.ZemantaUtils.staticDomain+'core/img/image-sourcefeed-prompt.png" /></a></div>').on("click.log",l).on("click.preferences",function(o){a.control.preferences.open(o,{next:"/my-sources/#flickr-images-block",compose_url:encodeURIComponent(window.location.href)})
}).appendTo("#zemanta-gallery-wrap");
c("#zemanta-gallery-thumbnails").hide()
}if(a.preferences.sourcefeed_ids===undefined||a.preferences.sourcefeed_ids.length===0){c('<div id="zemanta-articles-sourcefeed-prompt" class="zemanta-sourcefeed-prompt"><div id="zemanta-vertical-center"></div><a href="'+a._preferences.config_url+'" target="_blank"><img src="'+window.ZemantaUtils.staticDomain+'core/img/articles-sourcefeed-prompt.png" /></a></div>').on("click.log",l).on("click.preferences",function(o){a.control.preferences.open(o,{next:"/sources/",compose_url:encodeURIComponent(window.location.href)})
}).appendTo("#zemanta-articles-wrap");
c("#zemanta-articles-list").hide()
}a.control._success(n)
},j=function(n){c("#zemanta-gallery-thumbnails li").remove();
c("#zemanta-articles-list li").remove();
c("#zemanta-gallery-thumbnails, #zemanta-articles-list").show();
c("#zemanta-gallery-wrap, #zemanta-articles-wrap").each(function(){c(this).find(".zemanta-sourcefeed-prompt, .my-sources-update").remove()
});if(n){c("#zemanta-gallery-wrap").append('<div id="my-sources-gallery-update" class="my-sources-update"><div id="zemanta-vertical-center"></div><img src="'+window.ZemantaUtils.staticDomain+'core/img/my_sources_loader.gif" width="25" /></div>');
c("#zemanta-articles-wrap").append('<div id="my-sources-articles-update" class="my-sources-update"><div id="zemanta-vertical-center"></div><img src="'+window.ZemantaUtils.staticDomain+'core/img/my_sources_loader.gif" width="25" /></div>');
if(a.gallery){a.gallery._my_old=a.gallery._my_images;
a.gallery._my_images=[]
}}},f=function(n){if(n){c("#zemanta-gallery").find(".zemanta-gallery-title").html("My Images");
c("#zemanta-articles").find(".zemanta-articles-title").html("My Articles")
}else{c("#zemanta-gallery").find(".zemanta-gallery-title").html("Media Gallery");
c("#zemanta-articles").find(".zemanta-articles-title").html("Related Articles")
}},h=function(){var r=a.control.sync.dom(),q=a.control.sync.title(),p=c.trim(q),n=a.platform.filter_zemanta(r).html(),o=c.zextend({method:"zemanta.suggest",format:"json",text:n,api_key:a.api_key,manual:true,images_limit:100,pc:a.platform.defer_promoted?0:1,text_title:p,personal_scope:1,sourcecall:true},a.control.preferences.response());
if(!c(this).hasClass(k)){c(this).parent().find(".zemanta-source").removeClass(k).end().end().addClass(k);
if(ZemantaHelpers.check_feature("ZemantaNoSelection")){delete a.preferences.sourcefeed_ids;
delete a.preferences.flickr_user_id;
delete a.preferences.social_timestamp
}if(!b.is_init){if(c.trim(a.platform.filter_zemanta(c(a.control.sync.dom()[0].cloneNode(true))).text()).length<a.constants.min_text_for_update){a.springboard.widget(true)
}else{a.springboard.widget(false)
}c("#zemanta-preferences").show();
b.is_init=true
}if(c(this).hasClass("zemanta-source-mine")){b.num_unprocessed_requests=!!a.preferences.flickr_user_id+!!a.preferences.instagram_access_token;
a.control.sources.display_sources=true;
j(true);c("#zemanta-sidebar").find("#zemanta-control,#zemanta-initial").hide();
f(true);a.control.sources.toggle(false);
o=a.control._add_stats(o);
a.post(a.api_url,o,i,a.control._error);
if(a.preferences.instagram_access_token){instagram_ajax=c.ajax({url:"https://api.instagram.com/v1/users/self/"+(a.preferences.instagram_feed_type==="feed"?"feed":"media/recent/")+"?access_token="+a.preferences.instagram_access_token+"&count=100",dataType:"jsonp",success:m,error:b.toggle_when_ready})
}}else{if(c(this).hasClass("zemanta-source-global")){a.control.sources.display_sources=false;
j(false);c("#zemanta-sidebar").find("#zemanta-control").show();
f(false);if(a.gallery){a.gallery._render()
}if(a.articles){a.articles._render(a.platform.horizontal_articles)
}if(!(c.trim(a.platform.filter_zemanta(c(a.control.sync.dom()[0].cloneNode(true))).text()).length<a.constants.min_text_for_update)){a.control.update(c("#zemanta-keyword-input").val(),false)
}}}}};if(g){e.find("div").attr("title","Click to switch to your selection").removeClass("zemanta-disabled");
e.unbind("click").on("click.sources",h);
d.attr("title","Click to switch to your selection").removeClass("zemanta-disabled").unbind("click").on("click.sources",h)
}else{e.find("div").attr("title","Please wait...").addClass("zemanta-disabled");
e.unbind("click");
d.attr("title","Please wait...").addClass("zemanta-disabled").unbind("click")
}}};return b
};window.ZemantaControl=function(c){var d=window.zQuery,b={"http://www.legalzoom.com/patents-guide/patent-searches.html":"http://en.wikipedia.org/wiki/Patent_application"},a={initialize:function(){if(!d("#zemanta-head").length){if(d("#zemanta-control").length){d("#zemanta-control").attr("id","zemanta-head").removeClass("zemanta").html("<h1></h1>")
}else{d("#zemanta-sidebar").prepend('<div id="zemanta-head"><h1></h1></div>')
}if(d("#zemanta-source").length){d("#zemanta-source").attr("id","zemanta-control").removeClass("zemanta")
}else{d("#zemanta-head").after('<div id="zemanta-control"></div>')
}d("#zemanta-filter").remove();
d("#zemanta-message, #zemanta-articles, #zemanta-gallery").removeClass("zemanta");
if(d("#zemanta-preferences").length){d("#zemanta-preferences").attr("id","zemanta-tools").removeClass("zemanta")
}else{if(!d("#zemanta-tools").length){d("#zemanta-sidebar").append('<div id="zemanta-tools"></div>')
}}if(!d("#zemanta-sidebar").parents(".zemanta-wrap").length){d("#zemanta-sidebar").parent().addClass("zemanta-wrap")
}}d("#zemanta-head h1").html("<div>Zemanta</div>").addClass("zemanta-source-global").addClass("zemanta-source").addClass("zemanta-source-on");
d("#zemanta-control").hide();
if(!d("#zemanta-message").prev("#zemanta-control").length){d("#zemanta-message").insertAfter("#zemanta-control")
}c._set_status(0);
d("#zemanta-control-update").disableTextSelect().unbind("click").on("click.control",function(){if(c._enabled){c.control.update_manual=true;
c.control.update(d("#zemanta-keyword-input").val(),false);
c.control.update_manual=false
}});function e(){d("#zemanta-sidebar").removeClass("zemanta-disabled");
setTimeout(c.control.preferences.update,1);
if(!c.platform.pretty_widget_loader){d("#zemanta-message").html(c.microcopy.loading_preferences).show()
}}if(c.widget_enabled===false){c.events.trigger("initDisable");
c.one("editorRich.control",e);
d("#zemanta-sidebar").addClass("zemanta-disabled");
d("#zemanta-message").hide()
}else{e()}setTimeout(c.control.initial.load,1);
c.control.refine();
c.control.content.checkLinks();
c.events.trigger("controlInitialized")
},test:(function(){var f={},g={setGroupForSeries:function(k){var j=c.helpers.elf_hash(k.id+c.api_key),i=j%100,h="";
d.each(k.groups,function(l,m){if(i>=m[0]&&i<m[1]){h=l;
return}});return h
}},e={getTests:function(){return f
},populateTests:function(h){d.each(h.data,function(j,k){f[k.name]=g.setGroupForSeries(k)
});c.events.trigger("testsPopulated")
},isInTestSeries:function(h){return !!f[h]
},isInControl:function(h){return !!f[h]&&f[h].indexOf("control")>=0
},getGroupForSeries:function(h){return f[h]||"no-groups-for-"+h
}};return e
}()),initial:(function(){var f=null,e={load:function(){c.helpers.load_file((window.ZemantaUtils.isHttps?window.ZemantaUtils.staticDomain:"http://static.zemanta.com/")+"initial/zemanta-initial.js",e.parse)
},parse:function(){f=c.initial;
try{if(f.messages&&f.messages.type==="zemanta"){c.control.messaging.init(f.messages.data)
}}catch(i){c.log("Initial failed: "+c.helpers.JSON.stringify(i))
}try{if(f.tests){c.control.test.populateTests(f.tests)
}}catch(h){c.log("Initial failed: "+c.helpers.JSON.stringify(h))
}try{if(!c.helpers.empty(c._preferences)){c.springboard.auto()
}}catch(g){c.log("Initialize parts failed")
}},inspire:function(){var h=[],g=[];
if(c.platform.inactive_sidebar){return
}try{if(f.images&&f.images.type&&c.gallery.sources[f.images.type]){h=c.gallery.sources[f.images.type](f.images.data);
if(h.length&&d("#zemanta-gallery-thumbnails").children().length===0){c.gallery._images=h.slice(0,c.gallery_width*3)
}}if(f.articles&&f.articles.type&&c.articles.sources[f.articles.type]){c.latest_articles="Interesting Articles";
g=c.articles.sources[f.articles.type](f.articles.data);
if(g.length&&d("#zemanta-articles-list").children().length===0){c.articles._articles=g
}}}catch(i){c.log("Inspiration failed: "+c.helpers.JSON.stringify(i))
}}};return e
}()),isFirstVisit:function(){var f=3,g=Math.min(f,Math.max(0,c.helpers.storage.get("hasBeenHere",0))),e=g<f;
if(e){c.helpers.storage.set("hasBeenHere",g+1)
}if(ZemantaHelpers.check_feature("ZemantaFirstVisit")){return true
}return e},recordVisit:(function(){var e=0,f=function(g){return function(){setTimeout(function(){d("#zemanta-visitrecorder"+g).remove()
},100)}};if(window.ZemantaUtils.isHttps){return function(g){}
}else{return function(h){if(c._preferences.account_type==="pro"){return
}var g=f(e);
d('<div id="zemanta-visitrecorder'+e+'" class="zemanta-visitrecorder"><iframe src="http://www.zemanta.com/widgetstats/'+h+'/" width="1" height="1"></iframe></div>').find("iframe").on("load.control",g).end().appendTo("#zemanta-sidebar");
setTimeout(g,5000);
e+=1}}}()),messaging:(function(){var e={};
e={init:function(g){var f=e.storage.init();
if(f!==false){e.parse(g||window.zemantaLatestMessage,f)
}else{e.hide()
}},helpers:{checkValidity:function(h,i){var g=false,f=null;
if((typeof h==="object"&&h[0]==="*")||h==="*"){g=true
}else{if(typeof h==="string"||(typeof h==="object"&&typeof h.test==="function")){try{f=typeof h==="object"?h:new RegExp(h);
g=f.test(i)
}catch(j){c.log("Tried regex but failed miserably")
}}else{d.each(h,function(l,k){if(k===i){g=true
}})}}return g
},browser:(function(){var f="";
d.browser.chrome=d.browser.webkit&&!!window.chrome;
d.browser.safari=d.browser.webkit&&!window.chrome;
d.each(d.browser,function(h,g){if(g===true&&h!=="webkit"){f=h
}});return f
}()),icons:{notice:"core/img/lightbulb.png",warning:"core/img/bullet_warn.png"}},parse:function(g,f){if(!g||typeof g.sort!=="function"){return
}g.sort(function(i,h){return(i.id>h.id)?1:-1
});if(f.id===20120112001){f.id=2012112001;
c.helpers.storage.set("zemantaLatestSeenCookie",f)
}d.each(g,function(){if(!c.platform.disable_messages&&e.helpers.checkValidity(this.browsers,e.helpers.browser)&&e.helpers.checkValidity(this.browsers,e.helpers.browser+d.browser.version)&&e.helpers.checkValidity(this.platforms,c.interface_type)&&Date.parse(this.date_begin)<d.now()&&Date.parse(this.date_end)>d.now()&&(f.id===undefined||this.id>=f.id)&&!(this.id===f.id&&f.read)){e.queue.append(this)
}})},hide:function(){d("#zemanta-message").hide();
d("#zemanta-sidebar").hide().show().css("display","")
},storage:(function(){var f={init:function(){var g=d.cookie("zemantaLatestSeenCookie"),h=null;
if(g){f.set(g)
}if(c.helpers.storage.get("zemantaLatestSeenCookie")===null){f.set({id:0,first:null,last:null,times:0,read:false})
}h=f.get();
if(c.control.message===null){return false
}return h},get:function(){return c.helpers.storage.get("zemantaLatestSeenCookie")
},set:function(g){c.helpers.storage.set("zemantaLatestSeenCookie",g)
}};return f
}()),clearError:function(){var f=d("#zemanta-message div.zemanta-message-wrap");
if(f.hasClass("warning")||f.hasClass("error")){e.queue.next()
}},queue:(function(){var f=[],h={},g={render:function(){var n=f[0],o=-1,m=n.title||f.length===1&&"New Message!"||"New Messages!",i=e.helpers.icons[n.type||"notice"],l=n.type==="warning"&&'If you see this often, please contact us at <a target="_blank" href="mailto:support@zemanta.com?subject=Problems%20with%20Zemanta&body=Debug message:%0AApi%20key:%20'+c.api_key+"%0AError%20message:%20"+encodeURIComponent(n.text)+"%0AInterface:%20"+encodeURIComponent(c.interface_type)+"%0ADeployment:%20"+encodeURIComponent(c.deployment)+"%0ABrowser:%20"+encodeURIComponent(window.navigator.userAgent)+'">support@zemanta.com</a>.'||"",j=n.url?'<a href="'+n.url+'" target="_blank" class="ext">Read more</a>':"",k=n.text.indexOf("<")===0?n.text+(l&&" <p>"+l+"</p>"||""):"<p>"+n.text+j+(l&&" "+l||"")+"</p>";
if(k.indexOf("{")>-1){k=ZemantaHelpers.ZTemplate(k,c)
}if(k.indexOf("zemanta-message-openanddismiss")>-1){c.events.trigger("special_message_shown")
}if(k.indexOf("message-link")===-1){if((o=k.indexOf("</p>"))>-1){k=k.substring(0,o)+j+k.substring(o)
}else{k+=j}}if(!c.platform.disable_messages){d('<div class="zemanta-message-wrap '+(n.type||"notice")+'"><div id="zemanta-message-title"><span>'+f.length+"</span><h5>"+m+'</h5></div><div class="zemanta-message-container">'+k+(n.nodismiss?"":'<div class="zemanta-message-buttons"><a href="" id="zemanta-message-ok"><span>Got it!</span></a></div>')+"</div></div>").appendTo(d("#zemanta-message").empty().show().addClass("zemanta-wrapped-message")).find("#zemanta-message-ok").disableTextSelect().on("click.control",function(p){p.preventDefault();
h.next()}).end().find(".zemanta-message-openanddismiss").on("click.control",function(p){p.preventDefault();
window.open(d(this).attr("href"));
c.events.trigger("special_message_clicked");
h.next()})}else{d("#zemanta-message").empty().append('<div class="minimal">'+k+"</div>").show()
}if(n.id){g.markAsSeen(n)
}},markAsSeen:function(k){var j=new Date().toGMTString(),i=e.storage.get();
if(typeof i==="string"){i=c.helpers.JSON.parse(i)
}if(k.id!==i.id){i.id=k.id;
i.times=0;i.first=j;
i.read=false
}i.last=j;i.times+=1;
e.storage.set(i)
},markAsRead:function(j){var i=e.storage.get();
if(i.id!==j.id){c.log("SHOULD NEVER HAPPEN!");
i.id=j.id}i.read=true;
e.storage.set(i)
}};h={render:function(){if(f.length>0){g.render()
}else{e.hide()
}},prepend:function(i){if(!f[0]||!f[0].errortype||i.errortype!==f[0].errortype){f.unshift(i)
}g.render()
},append:function(i){f.push(i);
if(f.length===1){g.render()
}},next:function(){var i=f.shift();
if(i&&i.id){g.markAsRead(i)
}h.render()
}};return h
}())};return e
}()),refine:function(){var g="",f="zemanta-refine-on",l=null,k=0;
c.one("recommendationsReceived.control",function(){k=1
});if(d("#zemanta-refine").length>0){return
}function j(){if(c.platform&&c.platform.never_hide_search){return false
}d("#zemanta-refine-box").hide();
d("#zemanta-refine-toggle").removeClass(f);
g=d("#zemanta-refine-input").val();
d("#zemanta-refine-input").val("")
}function i(){d("#zemanta-refine-input").val(g);
d("#zemanta-refine-box").show();
d("#zemanta-refine-input").css("width",d("#zemanta-refine-box").width()-d("#zemanta-refine-close").width()-26-d("#zemanta-refine-button").width()-2-7-8-10).focus();
d("#zemanta-refine-toggle").addClass(f)
}function h(){var e=c.gallery&&c.gallery._images.length-1||-1,n="Search!";
if(d("#zemanta-refine-input").val().length>0&&d("#zemanta-refine-input").val()!==n){c.control.update_manual=true;
for(;e>=0;e-=1){if(!c.gallery._images[e].active){c.gallery._images.splice(e,1)
}}d("#zemanta-gallery-thumbnails li").remove();
e=c.articles&&c.articles._articles.length-1||-1;
for(;e>=0;e-=1){if(!c.articles._articles[e].active){c.articles._articles.splice(e,1)
}}d("#zemanta-articles-list li").remove();
c.control.update(d("#zemanta-refine-input").val(),false);
c.control.update_manual=false;
j()}}function m(n){var e=n&&n.jquery?n:d(document);
e.find("#zemanta-refine-toggle, #zemanta-refine-close").on("click.control",function(o){if(d("#zemanta-refine-toggle."+f).length){j()
}else{if(d("#zemanta-refine-toggle.zemanta-refine-toggle-enabled").length){i()
}}}).end().find("#zemanta-refine-input").on("keypress.control",function(o){var p="",q=this;
if(o.which===13){o.preventDefault();
p=d(this).val();
setTimeout(function(){if(p===d(q).val()){h()
}},1)}}).end().find("#zemanta-refine-button").on("click.control",function(o){o.preventDefault();
h()}).on("keypress.control",function(o){if(o.which===13){o.preventDefault();
h()}}).end();
return !!l.find("#zemanta-refine-toggle").length
}l=d('<div id="zemanta-refine"><div id="zemanta-refine-toggle" class="zemanta-refine-toggle-disabled" title="Nothing to search from...">Search</div><div id="zemanta-refine-box"><div id="zemanta-refine-close" title="Close Search">Search</div><div id="zemanta-refine-field"><input type="search" name="refine" id="zemanta-refine-input" value="" autocomplete="off" placeholder="Search..." /><a href="#" id="zemanta-refine-button">Search</a></div></div></div>');
if(!m(l)){setTimeout(m,1000)
}l.appendTo("#zemanta-control");
c.events.trigger("refineInitialized");
c.bind("recommendationsProcessed.control.enableRefine",function(){d("#zemanta-refine-toggle.zemanta-refine-toggle-disabled").removeClass("zemanta-refine-toggle-disabled").addClass("zemanta-refine-toggle-enabled").attr("title","Open Search").each(function(){c.unbind("recommendationsProcessed.enableRefine")
})})},content:(function(){var f={},e={};
e.getDivision=function(){return parseInt(c._preferences.division||0)
};e.checkLinks=function(){if(e.getDivision()<0){var g=d(c.control.sync.dom());
g.find("a").each(function(){var i=d(this),h=b[i.attr("href")];
if(h!==undefined){i.attr("href",h);
i.attr("rel","");
i.attr("data-mce-href",h)
}});c.platform.set_html(g.html())
}};return e
}()),sources:window.ZemantaSources(c),_apikey_isvalid:function(g){var e=null,f=false;
e=arguments.callee.rgx=arguments.callee.rgx||new RegExp("^[0-9a-z]{24}$");
f=e.test(g);
return f},_add_stats:function(){var e="",f={};
d.each(["mozilla","safari","opera","msie"],function(){if(d.browser[this]){f.browser=this.toString()
}});try{e=window.top.ZemantaGetReleaseId&&window.top.ZemantaGetReleaseId()||false
}catch(g){c.log(g)
}if(e){f.releaseid=e
}return function(k){var i=0,j=0,l=null;
k=d.zextend(k,f,{"interface":c.interface_type,deployment:c.deployment});
if(window.innerWidth){i=window.innerWidth;
j=window.innerHeight
}else{l=(document.documentElement&&document.documentElement.clientWidth)?document.documentElement:document.body;
i=l.clientWidth;
j=l.clientHeight
}if(i){k.viewportWidth=i
}if(j){k.viewportHeight=j
}return k}}(),preferences:window.ZemantaPreferences(c),confirmTOS:function(e){var f=document.createElement("img"),g=encodeURIComponent(c.api_key);
c.tos_accepted=d("#zemanta-accept-tos-status").is(":checked");
if(c.tos_accepted){d(".zemanta-gallery-tos-overlay").remove();
f.src="https://prefs.zemanta.com/api/tos/?api_key="+g+"&status=true"
}else{d(".zemanta-gallery-tos-overlay .zemanta-accept-tos-line").addClass("error")
}e.preventDefault()
},cancel_update:function(e){c.events.trigger("updateCanceled");
c.control.watcher.start(e)
},update:function(e,s,k,o){if(!c.control.sources.display_sources){if(!c._enabled){return
}if(c.helpers.empty(c._preferences)){c.control.preferences.update();
return}c.control.watcher.stop();
k=k||c.control.sync.dom();
if(typeof k==="function"){return k.simple(c.control.update,this,[e,s])
}o=o||c.control.sync.title();
if(typeof o==="function"){return o.simple(c.control.update,this,[e,s,k])
}c._enabled=false;
var q=c.rid,m=c.platform.filter_zemanta(k).html(),p=d.trim(k.text()),n=d.trim(o),f=d.zextend({method:"zemanta.suggest",articles_highlight:1,images_limit:100,text_title:n,post_url:c.platform.get_post_url(),manual:c.control.update_manual||false,format:"json",text:m,markup_autointext:c.platform.markup_autointext&&1||0,api_key:c.api_key},c.control.preferences.response());
if(!c.platform.defer_promoted){f=d.zextend({pc:1},f)
}if(c.platform.includeGetty){f=d.zextend({getty:1},f)
}f=c.platform.applyImageSize(f);
if(s&&p.length<c.constants.min_text_for_update&&!e){c.control.watcher.start();
c._enabled=true;
return}if(q){f.post_rid=q
}if(d("#zemanta-head div.zemanta-source-mine").hasClass("zemanta-source-on")&&!d("#zemanta-noselection").length){f.personal_scope=1
}if(c._preferences.channel){f.channel=c._preferences.channel
}if(e){f.emphasis=e
}if((!p||p==="Write text here...")&&!f.emphasis){if(!s){c._set_status(5)
}else{c._enabled=true
}c.log("No update - no content or emphasis.");
return c.control.cancel_update(c.platform.filter_zemanta(k))
}var h=["gallery","articles","links","tags"],r={gallery:["images","rich_objects"],articles:["articles"],links:["markup","rdf_links"],tags:["keywords"]};
for(var l=0;
l<h.length;
l+=1){if(!c.control.widget[h[l]]){for(var g=0;
g<r[h[l]].length;
g+=1){f["return_"+r[h[l]][g]]=0
}}}if(c.platform.big_article_preview){f.articles_preview=1
}c.control.sources.toggle(false);
f=c.control._add_stats(f);
if(c.helpers.validateArticleRequestConfig(c.platform.articleRequestConfig)){d.zextend(f,c.platform.articleRequestConfig)
}c.post(c.api_url,f,c.control._success,c.control._error);
c.events.trigger("updateRecommendations",f);
c._set_status(4)
}},_error:function(f,e){c.control.cancel_update();
if(e){c._set_status(6,e)
}c.control.sources.toggle_when_ready()
},_success:function(f){c._set_status(2);
var e=null,g=null;
if(f.status==="fail"){c.log("Data is fail.");
return"error"
}f.images=f.images||[];
f.articles=f.articles||[];
f.markup=f.markup||{};
f.markup.links=f.markup.links||[];
f.keywords=f.keywords||[];
c.control.messaging.clearError();
c.events.trigger("recommendationsReceived",c._lastresponse["zemanta.suggest"]);
if(f.status==="ok"){e=[];
if(c.articles){e.push(c.articles._success)
}if(c.gallery){e.push(function(i,h,j){c.gallery._success(i,h,j)
})}if(c.links){e.push(c.links._success)
}if(c.tags){e.push(c.tags._success)
}e.push(function(i,h,j){c.events.trigger("recommendationsProcessed",c._lastresponse["zemanta.suggest"]);
c.control.watcher.start(c.platform.filter_zemanta(j))
});g=c.control.sync.dom();
if(typeof g==="function"){g(function(h){c.control.process(e,f,h)
})}else{c.control.process(e,f,g)
}}c.control.sources.toggle_when_ready()
},process:function(e,g,h){var f=e.shift();
f(g,function(i){if(e.length){if(h){c.control.process(e,g,h)
}else{c.control.process(e,g,h)
}}},h)},isEnabled:function(e){if(typeof e==="string"&&e.length>2048){return(/<[^>]*id="zemanta-disable"[^<]*>/g).exec(e)===null
}return d("<div>"+e+"</div>").find("#zemanta-disable").length===0
},sync:(function(){var f=0,g={data:{},createId:function(){f+=1;
return"async-"+d.now()+"-"+f
},execute:function(j,h,i){c.log("executing "+j);
g.data[j]=null;
delete g.data[j];
h.apply(window,i)
},set_data:function(i,h){c.log("setting data: "+i+" ("+g.data[i]+"):",h);
if(typeof g.data[i]==="function"){g.execute(i,g.data[i],h)
}else{g.data[i]=h
}},set_callback:function(i,h){c.log("setting callback: "+i+" ("+g.data[i]+")",h);
if(typeof g.data[i]!=="undefined"){g.execute(i,h,g.data[i])
}else{g.data[i]=h
}},create_setcallback:function(i){var h=function(j){g.set_callback(i,j)
};h.simple=function(l,k,j){c.log("simple callback:",l);
h(function(m){l.apply(k,Array.prototype.concat.apply([],j).concat(m))
})};return h
}},e={dom:function(i){var k=g.createId(),h=function(){g.set_data(k,arguments)
},j=c.platform.get_dom(i,h);
return typeof j!=="undefined"&&j||g.create_setcallback(k)
},title:function(i){var k=g.createId(),h=function(){g.set_data(k,arguments)
},j=c.platform.get_title(i,h)||" ";
return typeof j!=="undefined"&&j||g.create_setcallback(k)
}};return e
}()),dom:function(){return{get:function(e){return c.platform.get_dom(e)
},set:function(){}}
}(),oembed:(function(){var f={},h={},i={},e=3,j=function(l,k){h[l]=true;
d.ajax({url:l.replace(/https?:\/\//g,"//"),dataType:"json",type:"get",success:function(m){h[l]=false;
f[l]=m.html;
k(m.html)},error:function(){if(!i[l]){i[l]=0
}i[l]+=1;if(i[l]<e){setTimeout(function(){j(l,k)
},500)}else{h[l]=false
}}})},g={getHtml:function(l,k){k=k||function(){};
if(f[l]){k(f[l])
}else{if(h[l]){return false
}else{i[l]=0;
j(l,k)}}return true
}};return g
})(),watcher:function(){var h=null,f=null,m=10000,i=0,e={},l=function(n,o){o=o||c.control.sync.dom(true);
if(typeof o==="function"){return o.simple(l,this,[n])
}n(d.trim(o.text()).length)
},j=function(){},g=function(n){var p=d.now(),o=Math.min(m,Math.max(m/2,m-(p-i)));
if(Math.abs(n-h)>200){h=n;
c.control.update(d("#zemanta-keyword-input").val(),false)
}else{clearTimeout(f);
f=setTimeout(j,o)
}},k=function(){clearTimeout(f);
f=null};j=function(){i=d.now();
l(g)};e={start:function(n){k();
i=d.now();l(function(o){h=o;
g(o)},n)},resume:function(){if(!f){k();
j()}},stop:function(){k()
},is_on:function(){return !!f
}};return e
}(),published_ping:(function(){var e={url:"",rid:""};
return function(g,f){c.control.content.checkLinks();
if(!g){g=window&&(window.location?window.location.href:"")
}if(g&&(e.url!==g||e.rid!==c.rid)||(f&&e.blog_url!==f)){e={url:g,rid:c.rid,blog_url:f};
if(c.control.content.getDivision()>=0){c.post(c.api_url,c.control._add_stats({method:"zemanta.post_published_ping",format:"json",current_url:window&&(window.location?window.location.href:""),post_rid:e.rid,post_url:e.url||"",blog_url:e.blog_url||"",api_key:c.api_key}),function(h){c.log(h)
})}}return e
}}()),widget_reset:function(e){c.springboard.destroy();
if(e){c.springboard.auto()
}},widget_open:function(){c.control.watcher.resume();
d("#zemanta-tags, #zemanta-links, #zemanta-sidebar").show();
c.widget_opened=true;
c.events.trigger("widgetOpen")
},widget_close:function(){c.control.watcher.stop();
d("#zemanta-tags, #zemanta-links, #zemanta-sidebar").hide();
c.widget_opened=false;
c.events.trigger("widgetClose")
},widget_enable:function(){var e=d("#zemanta-disabled");
c.links_not_in_sidebar=c.links_not_in_sidebar||!(d("#zemanta-sidebar #zemanta-links").length);
c.tags_not_in_sidebar=c.tags_not_in_sidebar||!(d("#zemanta-sidebar #zemanta-tags").length);
e.css({height:"100%",display:"block"}).animate({height:"0"},300,function(){d(this).css({height:"",display:"none"})
});if(c.links_not_in_sidebar){d("#zemanta-links").show(300,function(){c.links.redraw()
})}if(c.tags_not_in_sidebar){d("#zemanta-tags").show(300,function(){c.tags.redraw()
})}c.widget_enabled=true;
c.control.watcher.resume();
c.events.trigger("widgetEnable")
},widget_disable:function(f){f=f||c.platform.widget_nonrte_screen;
var e=f();c.links_not_in_sidebar=c.links_not_in_sidebar||!(d("#zemanta-sidebar #zemanta-links").length);
c.tags_not_in_sidebar=c.tags_not_in_sidebar||!(d("#zemanta-sidebar #zemanta-tags").length);
if(e.parent().length){e.css({height:0,display:"block"}).animate({height:"100%"},300,function(){d(this).css({height:""})
})}else{e.appendTo("#zemanta-sidebar").show()
}if(c.links_not_in_sidebar){d("#zemanta-links").hide(300)
}if(c.tags_not_in_sidebar){d("#zemanta-tags").hide(300)
}c.widget_enabled=false;
c.control.watcher.stop();
c.events.trigger("widgetDisable")
},widget:{gallery:true,articles:true,links:true,tags:true}};
return a};window.ZemantaPlatform=function(b){var c=window.zQuery,a={animate_enabled:false,big_article_preview:false,articles_with_images:false,article_list_item_template:function(d){return ZemantaHelpers.ZTemplate('<li id="zemart-{hash}" class="'+d+'{selection}">{promoted}<p class="zemanta-article-title"><span>{title}</span></p><p class="zemanta-article-date-source"><span class="zemanta-article-source ext"><a class="zemanta-read-more" target="_blank" title="Open {article_url} in New Window" href="{article_url}">Visit</a>{hostname}</span><span class="zemanta-article-date">{date}</span></p>{source_icon}{personal_icon}<div class="zemanta-selector"></div></li>')
},enable_gallery_overlays:false,horizontal_articles:false,has_own_posts:false,articles_initialize:function(){},inactive_sidebar:false,never_hide_search:false,pretty_widget_loader:false,articles_popup_timeout:250,articles_help_display:false,article_popup_parent:"#zemanta-sidebar",image_insert_at_cursor:false,image_config:false,big_gallery_preview:false,featured_image:false,gallery_popup_parent:"#zemanta-sidebar",disable_draggable_resize:false,disable_messages:false,sources_enabled:true,rdf_supported:false,firstvisit_screen_type:"counter",markup_autointext:false,allow_get:true,gallery_height:192,articles_height:240,article_thumbnail_suffix:"_80_80.jpg",article_thumbnail_default_count:130,gallery_active:function(d,i){var h=[],g=[],f=null,e=null;
i.find(".zemanta-img img").each(function(){var m=c(this),k=m.attr("src").replace(/\\,/g,","),j=m.parents("a").attr("href"),l=null;
if((e=e||b.helpers.array_index(d,"url_m"))[k]){l=c(this).parents(".zemanta-img");
e[k].active=l.hasClass("zemanta-action-dragged")?2:1
}else{if((f=f||b.helpers.array_index(d,"source_url"))[j]){l=c(this).parents(".zemanta-img");
f[j].active=l.hasClass("zemanta-action-dragged")?2:1;
f[j].url_m=k
}else{h.push(m)
}}}).end();
if(h.length>0){c.each(h,function(){var k=this.attr("src"),j={url_l:k,url_m:k,url_s:k,source_url:this.parent().attr("href")||k,height:0,width:0,url_m_w:this[0].width?this[0].width:0,url_m_h:this[0].height?this[0].height:0,url_s_w:this[0].width?this[0].width:0,url_s_h:this[0].height?this[0].height:0,confidence:0.5,license:"Licence unknown",description:this.attr("alt"),attribution:this.parents(".zemanta-img").find(".zemanta-img-attribution").html(),active:this.parents(".zemanta-img").hasClass("zemanta-action-dragged")?2:1};
ZemantaHelpers.image_size(j,"url_s");
if(!j.attribution){j.attribution=this.parent(".zemanta-img").text()
}g.push(j)});
d=d.concat(g)
}return d},create_disable_gallery_overlay:function(){if(b.interface_type==="demo"){return null
}var e=b._preferences,g='<a target="_blank" href="http://blog.zemanta.com/blog/about/related-posts-terms-of-service/">Zemanta Terms of Service</a>',f='<p class="zemanta-accept-tos-line"><input type="checkbox" id="zemanta-accept-tos-status" /><span>I have read and accept '+g+'.</span></p><p class="zemanta-accpet-tos-line-button"><button id="zemanta-accept-tos-button" class="zemanta-button-default">Submit</button></p>',d=null;
if(!b.user_is_registered){d=c('<div id="zemanta-register-link" class="zemanta-gallery-overlay"><p>Register to use gallery.</p><p class="normal">Click here</p></div>')
}else{if(!b.tos_accepted){d=c('<div class="zemanta-gallery-tos-overlay"><p>Zemanta Terms of Service have changed. Please accept to continue using gallery.</p>'+f+"</div>")
}}return d},gallery_getty_insert:function(e,f){var d="";
if(!b.platform.includeGetty){return null
}if(b.platform.insertGettyAsUrl){d=e.getty_embed_url&&decodeURIComponent(e.getty_embed_url.split("?")[1]);
if(d&&d.indexOf("url=")!=-1){d=d.split("url=")[1];
d=d.split("&")[0];
f.append("<p>"+d+"</p>")
}}else{if(e.embed_html&&e.embed_html.length){f.append(c(e.embed_html))
}else{b.control.oembed.getHtml(e.getty_embed_url,function(g){e.embed_html=g;
b.gallery._select(e,true)
});return null
}}return f},gallery_insert:function(h,i){i=i||b.control.sync.dom();
if(typeof i==="function"){return i.simple(b.platform.gallery_insert,this,arguments)
}var f=b.platform.get_editor(),d=0,g=h.type==="getty",e=g?b.platform.gallery_getty_insert(h,i):undefined;
if(e!==undefined){if(e===null){return i
}else{i=e}}else{i.prepend(b.platform.gallery_create(i.getDoc(),h,true))
}if((!h.url_m_w||!h.url_m_h)&&b.doctype!=="1"&&f.win){setTimeout(function j(){d+=1;
var k=false;
c(".zemanta-img-inserted,.zemanta-img-configured",f.element).each(function(l,p){var n=c(p),m=n.width(),o=n.height();
if(!n.attr("width")||!n.attr("height")){if(m&&o){n.attr({width:m,height:o})
}else{if(!m||!o){k=true
}}}});if(k&&d<10){setTimeout(j,500)
}},500)}return i
},gallery_remove:function(d,e){if(d===undefined){return undefined
}e=e||b.control.sync.dom();
if(typeof e==="function"){return e.simple(b.platform.gallery_remove,this,arguments)
}if(typeof d==="string"){d={url_m:d}
}return e.find(".zemanta-img").each(function(){if(c(this).find("img").attr("src")===d.url_m||c(this).find("img").attr("src")===d.url_l||c(this).find("img").attr("src")===d.url_s){c(this).remove()
}}).end()},gallery_create:function(g,f,d){var i=f.description.length>50?f.description.substring(0,46)+"...":f.description,e={source_url:f.source_url,src:f.url_m,alt:i,attribution:f.attribution,box_width:f.url_m_w+10,width:f.url_m_w,height:f.url_m_h},h=null;
h=c((b.widget_version>2?b.platform.gallery_template_html(e):b.platform.gallery_template(d,e.width).run(e)),g);
if(!d){h.findWithSelf(".zemanta-img").addClass("zemanta-action-dragged").end()
}if((b.doctype!=="1"||f.rich)&&e.width&&e.height){h.find("img").attr({width:e.width,height:e.height}).parents(".zemanta-img").css("width",e.box_width).end().end()
}return h[0]
},gallery_template_item:"",gallery_template_html:function(e){var f=new b.helpers.ZTemplate(b.platform.gallery_template_item);
return f.run(e)
},gallery_popup_position:function(g,f){var e=Math.min(g.full_width-(b.gallery_width-1)*10,206),d=0;
if(b.platform.big_gallery_preview){f.width(260);
d=-f.width()+6;
f.css({top:c("#zemanta-gallery").position().top,left:d})
}else{f.width(e);
d=Math.floor(((g.source.position()||{}).left-6)/(g.last_pos-6)*(g.full_width-e))+6;
if(isNaN(d)){d=6
}f.css({left:d})
}},articles_active:function(d,i,h){var g=[],e=[],f=function(j){return c(j).parent().hasClass("zemanta-article-ul-li-image")?2:1
};i.find(".zemanta-article-ul-li a").filter(function(){return c("img",this).length===0&&c(this).text().length>0
}).each(function(){var j=(c(this).attr("href")||"").replace(/\\,/g,",");
if(h[j]){h[j].active=f(this)
}else{g.push(c(this))
}});if(g.length>0){c.each(g,function(){var k=this.attr("href"),j={url:b.helpers.encode_url(k),confidence:0.5,published_datetime:"1970-01-01T00:00:01Z",zemified:0,title:this.text(),active:f(this)};
e.push(j)});
e[0].last=true;
d=d.concat(e)
}return d},articles_insert:function(g,h,f){var d=".zemanta-article-ul:not(.zemanta-article-ul-image)",e=".zemanta-article-ul-image";
if(!f){if(b.platform.horizontal_articles&&!b.platform.horizontal_articles_with_option){f="image"
}else{f=c("#zemanta-articles-rawi-checkbox").prop("checked")&&"image"||"plain"
}}h=h||b.control.sync.dom();
if(typeof h==="function"){return h.simple(b.platform.articles_insert,this,arguments)
}if(b.widget_version>2){if(h.find(".zemanta-related-title").length===0){h.append(b.platform.articles_template_wrapper)
}if(f!=="image"&&h.find(d).length===0){h.find(e).or(h.find(".zemanta-related-title")).after(b.platform.articles_template_ul)
}if(f==="image"&&h.find(e).length===0){h.find(".zemanta-related-title").after(b.platform.articles_with_image_template_ul)
}}else{f="plain";
if(h.find(".zemanta-related-title").length===0){h.append(b.doctype_related1+b.doctype_related2)
}}return h.find(f==="image"?e:d).each(function(){var j={hash:"",article_url:g.url,article_id:g.article_id,title:g.title,host:b.helpers.extract_hostname(g.url)},i=b.widget_version>2?b.platform.articles_template_html(j,f):b.platform.articles_template().run(j);
c(this).append(i)
}).end()},article_popup_position:function(e){if(!b.platform.big_article_preview){var d=Math.round((e.source.position()||{}).left+parseInt(e.source.css("margin-left"),10));
if(isNaN(d)){d=6
}e.popup.css({left:d})
}},article_big_popup_position:function(h,d,e){var l=null,m=null,n=0,f=0,g=0,k=0,i=0,j=0;
l=h.source.position();
m=c("#zemanta-articles").position();
n=c(e).outerHeight();
f=h.source.outerHeight();
g=m.top;k=g+c("#zemanta-articles").outerHeight();
i=l.top+m.top+f-n*0.5;
j=-d.width()-4;
if(i<g){i=g
}else{if(i+n>k){i=Math.max(g,k-n)
}}d.css({top:i,left:j})
},articles_remove:function(e,f){f=f||b.control.sync.dom();
if(typeof f==="function"){return f.simple(b.platform.articles_remove,this,arguments)
}var d=c.fn.jquery==="1.1.4"?'[@href="'+e.url.replace(/~/g,"%7E")+'"]':'[href="'+e.url.replace(/~/g,"%7E").replace("&amp;","&")+'"]';
f.find(".zemanta-article-ul "+d).parent().remove();
if(f.find(".zemanta-article-ul-li").length===0){f.find(".zemanta-related, .zemanta-related-title, .zemanta-article-ul").remove()
}return f},articles_template_wrapper:"",articles_template_ul:"",articles_template_item:"",articles_with_image_template_ul:"",articles_with_image_template_item:"",articles_template_html:function(g,f){var e=f==="image"&&b.platform.articles_with_image_template_item||b.platform.articles_template_item,h=new b.helpers.ZTemplate(e);
return h.run(g)
},links_initialize:function(){c("#zemanta-links").append('<h2 class="vertical"><span class="zemanta-links-title">In-text Links</span><a class="zemanta-help" href="http://www.zemanta.com/faq/quickhelp/?links#faqid-60">?</a></h2><ul id="zemanta-links-div-ul"><li class="zemanta-title"><span>Link recommendations will appear here</span></li></ul><p class="zem-clear">&nbsp;</p>')
},links_active:function(d,g){var f=b.helpers.array_index(d,"anchor"),h=[],e=[];
g.find("a.zem_slink").each(function(){var l=c(this),k=l.text(),i="",j=this.href;
if(f[k]){f[k].active=true;
i=c.grep(f[k].target,function(o,m){return o.url===j
});if(i.length===0){f[k].target.unshift({url:j,type:b.links.getType(this.rel),title:this.title,autointext:b.links.getType(this.rel)==="autointext"?true:false})
}f[k].selectedtype=i[0]?i[0].type:b.links.getType(this.rel);
f[k].selectedurl=j
}else{if(c.trim(k).length){e.push(l.get(0))
}}});if(e.length>0){c.each(e,function(){h.push({active:true,selectedtype:b.links.getType(this.rel),selectedurl:this.href,anchor:c(this).text(),confidence:0.5,target:[{url:this.href,type:b.links.getType(this.rel),title:this.title,autointext:b.links.getType(this.rel)==="autointext"?true:false}]})
});d=d.concat(h)
}return d},links_all:function(){if(b.links._links.length===0){c("#zemanta-links-div-ul").append('<li class="zemanta-title"><span>No links found</span></li>')
}else{if(!c("#zemanta-links-apply").length){c('<span id="zemanta-links-apply" title="Apply all in-text links">Apply all</span>').appendTo("#zemanta-links h2").disableTextSelect().on("click.links.applyAll",function(){c(".zemanta-links-li:not(.zemanta-selected)").click()
})}}},links_insert:function(f,e){e=e||b.control.sync.dom();
if(typeof e==="function"){return e.simple(b.platform.links_insert,this,arguments)
}var h="",j=/([?()+\.])/g,m=false,l="",g={};
function i(o){if(c(o).parents("a, .zemanta-img-attribution").length){return true
}return false
}function d(s,r,o){var q=0,p=s.collidesWith.length;
for(;q<p;q+=1){r=r.replace(s.collidesWith[q].anchor,"")
}return r.length>=s.anchor.length&&o.test(r)
}function k(){this.parentNode.replaceChild(b.helpers.create_fragment(c(this).text(),this.ownerDocument),this)
}function n(s,A,p){var y=0,w=s.childNodes.length,u=0,t=0,o=false,q=null,E=null,D=null,z=null,C=null,B="",x=[];
for(;y<w;y+=1){q=s.childNodes[y];
if(q.nodeType===1){o=n(q,A,p);
if(o){return true
}}else{if(q.nodeType===3){E=q.nodeValue;
if(E.length<A.anchor.length){continue
}if(!C){B=A.anchor.replace(/&/g,"&amp;");
B=A.anchor.replace(j,"\\$1");
C=new RegExp("([-!\"#$%&\u2018\u2019\u201C\u201D\u2014\u2013'()*+,./:;<=>\\?@\\[\\]_`{|}~\\s\\\\]+|^)("+B+")([-!\"#$%&\u2018\u2019\u201C\u201D\u2014\u2013'()*+,./:;<=>\\?@\\[\\]_`{|}~\\s\\\\]+|$)")
}if(C.test(E)&&!i(q)){if(!A.collidesWith){q.parentNode.replaceChild(b.helpers.create_fragment(E.replace(C,"$1"+p+"$3"),q.ownerDocument),q);
return true
}else{if(!!d(A,E.slice(),C)){D=q.parentNode;
for(u=0,t=A.collidesWith.length;
u<t;u+=1){z=A.collidesWith[u];
n(D,z,'<a class="collision">'+z.anchor+"</a>")
}x=A.collidesWith;
A.collidesWith=null;
o=n(D,A,p);
A.collidesWith=x;
c("a.collision",D).each(k);
if(o){return true
}}}}}}}return false
}g={href:f.url,title:f.title,rel:f.type,freebase:l||"",anchor:f.anchor,rdf:f.rdf.any};
h=b.widget_version>1?b.platform.links_template_html(g):b.platform.links_template().run(g);
m=n(e.get(0),f,h);
b.events.trigger("links_insert");
return e},links_remove:function(d,e){e=e||b.control.sync.dom();
if(typeof e==="function"){return e.simple(b.platform.links_remove,this,arguments)
}e.find("a.zem_slink").each(function(){var f=c(this);
if(f.text()===d.anchor){f.replaceWith(b.helpers.create_fragment(f.text(),f.getDoc()))
}}).end();return e
},links_template_item:"",links_template_html:function(e){var f=new b.helpers.ZTemplate(b.platform.links_template_item);
return f.run(e)
},tags_initialize:function(){c("#zemanta-tags").append('<h2 class="vertical"><span class="zemanta-tags-title">Tags</span><a class="zemanta-help" href="http://www.zemanta.com/faq/quickhelp/?tags#faqid-62">?</a></h2><ul id="zemanta-tags-div-ul"><li class="zemanta-title"><span>Tag recommendations will appear here</span></li></ul><p class="zem-clear">&nbsp;</p>')
},tags_active:function(d,g){var f=b.helpers.array_index(d,"name"),e=[];
c.each(b.tags._getTagArray(),function(){var h=this.toString();
if(f[h]){f[h].active=true
}else{if(f[h.replace(/"/g,"")]){f[h.replace(/"/g,"")].active=true;
f[h.replace(/"/g,"")].name=h.replace(/"/g,"")
}else{if(b.tags._old.length===0){e.push({name:h,confidence:0.5,active:true})
}}}});return b.helpers.merge_arrays({p:"name"},d,e)
},tags_all:function(){if(b.tags._tags.length===0){c("#zemanta-tags-div-ul").append('<li class="zemanta-title"><span>No tags found</span></li>')
}else{if(!c("#zemanta-tags-apply").length){c('<span id="zemanta-tags-apply" title="Apply all tags">Apply all</span>').appendTo("#zemanta-tags h2").disableTextSelect().on("click.tags.selectAll",function(){b.tags._selectAll()
})}}},tags_insert:function(d){b.tags._setTagsFromArray(b.tags._getTagArray().concat(d.name))
},tags_remove:function(d){b.tags._setTagsFromArray(c.grep(b.tags._getTagArray(),function(f){return f!==d.name
}))},object_align:function(d,e){if(e){if(e==="right"||e==="left"){c(d).css("float",e)
}}else{return c(d).css("float")||""
}},widget_nonrte_screen:function(){if(b.platform.widget_enabled_screen){c("#zemanta-disabled").remove();
return b.platform.widget_enabled_screen.apply(this,arguments)
}var d=c("#zemanta-disabled");
if(d.hasClass("zemanta-nonrte")){return d
}else{d.remove();
return c('<div id="zemanta-disabled" class="zemanta-nonrte"></div>').html('<div class="zemanta-disabled-back"></div><div id="zemanta-disabled-wrap"><div id="zemanta-disabled-content" class="zemanta-tip"><h3>Zemanta is inactive!</h3><p>You need to compose your blog post in <strong>'+b.control.interface_compose_text+"</strong> mode in order for Zemanta to work!</p></div></div>").fin()
}},widget_firstvisit_screen:function(d,f){var g=140,e={counter:function(){var k=null,h=null,j=function(l){var m=0,o=Math.max(g-l,0),p="",n=(o.toString(10)).split(""),q=n.length;
if(o<=0){clearInterval(k);
i(true);b.springboard.widget(true)
}for(m=q-3;
m<q;m+=1){p+="<span>"+(m>=0?n[m]:0)+"</span>"
}return p},i=function(l){c(".zemanta-source-mine, #zemanta-preferences").each(function(m,n){if(c(n).data("displayed")!=="none"){c(n).css("display",l?"block":"none")
}})};i(true);
d.html("").append(c('<div id="zemanta-first-wrap"><div class="counter-wrap"><p class="start">Start writing!</p><p class="counter-msg-top">Zemanta needs about</p><div id="firstscreen-counter">'+j(f)+'</div><p class="counter-msg-bottom">letters to do its magic.</p><p class="button-msg">Not so sure what<br />to write about?</p><div class="button"><a class="init" href="#"><span>Get inspired!</span></a></div></div><div class="foot"><p class="notfinding">Not finding exactly what you need?<br /><a href="http://support.zemanta.com/" class="contact external" target="_blank">Give us a shout</a>.</p></div></div>').find("a.prefs").on("click.preferences.open",b.control.preferences.open).end().find("a.external").on("click.preferences.open",function(l){l.preventDefault();
window.open(this.href)
}).end().find("a.init, a.first-init").on("click.widget.init",function(l){l.preventDefault();
i(true);clearInterval(k);
b.springboard.widget(true)
}).end()).show();
k=setInterval(function(){var n=null,l=0,m=b.control.sync.dom()[0];
if(!h||!m||h.innerHTML.length!==m.innerHTML.length){h=m;
n=b.platform.filter_zemanta(c(h));
l=c.trim(n.text()).length;
c("div#firstscreen-counter").html(j(l))
}},100)},splash:function(){var h=b.platform.showHideHeader||function(i){c("#zemanta-head").css("display",i?"block":"none");
c("#zemanta-tools").css("display",i?"block":"none")
};h(false);
d.html("").addClass("splash").append(c('<div id="zemanta-first-wrap"><ul class="zemanta-splash-body"><li class="search"><a href="#"><h4>Find</h4><span>Images and articles</span></a><div class="bottom-border"></div></li><li class="prefs"><a href="#"><h4>Tune up</h4><span>Your preferences</span></a><div class="bottom-border"></div></li><li class="learn"><a href="#"><h4>Learn</h4><span>How it works</span></a></li></ul><div class="splash-foot"><p>Not finding exactly what you need?</p><br /><a href="http://support.zemanta.com/" class="contact external" target="_blank">Give us a shout</a><a class="logo external" href="http://www.zemanta.com"></a></div></div>').find("li.prefs a").on("click.preferences.open",function(i){i.preventDefault();
b.control.preferences.open()
}).end().find("li.learn a").on("click.splash.learn",function(i){i.preventDefault();
if(typeof window.ZemantaWindowOpen!=="undefined"){window.ZemantaWindowOpen("http://www.zemanta.com/demo?head",810,1055)
}else{window.open("http://www.zemanta.com/demo?head",null,"height=810, width=1055, scrollbars=1, menubar=no, toolbar=no, location=no, status=no")
}}).end().find("li.search a").on("click.splash.search",function(i){i.preventDefault();
h(true);b.springboard.widget(true)
}).end().find("a.external").on("click.splash.contact",function(j){var i=c(this).hasClass("contact")?"contact":"logo";
j.preventDefault();
window.open(this.href)
}).end()).show();
b.one("recommendationsReceived.platform",function(){h(true)
})},walkthrough:function(){var k=b.platform.showHideHeader||function(m){c("#zemanta-head").css("display",m?"block":"none");
c("#zemanta-tools").css("display",m?"block":"none")
},l=-1,i='<h1>{title}.</h1><div class="selector"><a class="prev" href="#"></a><a class="next" href="#"></a><div class="img {class}"></div></div><p class="description">{description}</p>',j={"-1":c('<h1 class="first">Welcome to Zemanta.</h1><p class="welcome">Let\'s walk through some of our most important features.</p><a href="#" class="start">Let\'s go</a>'),"0":c(ZemantaHelpers.ZTemplate(i,{"class":"tags",title:"Tags",description:"Apply <b>tags</b> to your post with one simple click. Make it easy for <b>search engines</b> to find you."})),"1":c(ZemantaHelpers.ZTemplate(i,{"class":"images",title:"Images",description:"<b>Add images</b> to your post. <b>Align and resize</b> them. <b>Check</b> licensing. Import your own."})),"2":c(ZemantaHelpers.ZTemplate(i,{"class":"rel-art",title:"Related Articles",description:"Find <b>interesting stories</b> related to your writing. <b>Connect</b> with similar bloggers. <b>Get trackbacks</b>."})),"3":c(ZemantaHelpers.ZTemplate(i,{"class":"intext",title:"In-text Links",description:"Apply links to <b>give context</b>. Link to websites, <b>explanations on Wikipedia</b> and other sources."})),"4":c(ZemantaHelpers.ZTemplate(i,{"class":"prefs",title:"Preferences",description:"Sign in to <b>customize</b> Zemanta. Get <b>revenue</b> from Amazon afilliates. Add your RSS feeds. "}))},h=function(n,o,m){var p=5;
if(o&&n===1&&l===4){return
}else{if(o&&n===-1&&l===0){return
}}l=o?(l+p+n)%p:n;
if(!m){c("#zemanta-first-wrap .zemanta-walkthrough-body").animate({opacity:0,"margin-left":20*n*-1},"fast",function(){c(this).empty().append(j[l]).css({margin:0}).animate({opacity:1},"fast")
})}else{c("#zemanta-first-wrap .zemanta-walkthrough-body").empty().append(j[l])
}};k(false);
d.html("").addClass("walkthrough").append(c('<div id="zemanta-first-wrap"><div class="zemanta-walkthrough-body"></div><a href="#" class="load">Get recommendations</a><div class="walkthrough-foot"><a class="logo external" href="http://www.zemanta.com"></a></div></div>').find(".zemanta-walkthrough-body").delegate("a.next","click",function(m){m.preventDefault();
h(1,true)}).end().find(".zemanta-walkthrough-body").delegate("a.prev","click",function(m){m.preventDefault();
h(-1,true)}).end().find(".zemanta-walkthrough-body").delegate("a.start","click",function(m){m.preventDefault();
h(0,false)}).end().delegate("a.load","click",function(m){m.preventDefault();
k(true);b.springboard.widget(true)
}).find("a.external").on("click.walkthrough",function(n){var m=c(this).hasClass("contact")?"contact":"logo";
n.preventDefault();
window.open(this.href)
}).end()).show();
h(-1,false,true);
b.one("recommendationsReceived.platform",function(){k(true)
})}};d=d||c("#zemanta-initial");
if(f>=g){b.springboard.widget(true);
return}c("#zemanta-message, #zemanta-gallery, #zemanta-articles, #zemanta-control").hide();
if(b._preferences&&b._preferences.account_type!=="pro"){if(b.platform.firstvisit_screen_type&&b.platform.firstvisit_screen_type in e){e[b.platform.firstvisit_screen_type]()
}else{e.splash()
}}else{b.springboard.widget(false);
b.platform.widget_returnvisit_screen()
}},widget_returnvisit_screen:function(d,f){d=d||c("#zemanta-initial");
var e='<div class="zemanta-baloons"><a class="zemanta-baloon zemanta-baloon-search" href="">Search for related content here</a><a class="zemanta-baloon zemanta-baloon-write" href="">Or start writing and get recommendations</a><p class="notfinding">Not finding exactly what you need?<br /><a href="http://support.zemanta.com/" class="contact" target="_blank">Give us a shout</a>.</p></div>';
d.empty().append('<div id="zemanta-initial-wrap">'+e+"</div>")
},control_setHTML:function(f,j,i,e){var g={},h=i&&' rel="nofollow"'||"",d=e&&' target="_blank"'||"";
if(f==="1"){g.doctype_image1="";
g.doctype_image2="";
g.doctype_image3="";
g.doctype_related1='<div class="zemanta-related"><h6 class="zemanta-related-title">'+(b._preferences.article_layout_title||"Related articles")+'</h6><ul class="zemanta-article-ul">';
g.doctype_related2="</ul></div>";
b.platform.articles_template_wrapper='<div class="zemanta-related"><h6 class="zemanta-related-title">'+(b._preferences.article_layout_title||"Related articles")+"</h6></div>";
b.platform.articles_template_ul='<ul class="zemanta-article-ul"></ul>';
b.platform.articles_with_image_template_ul='<ul class="zemanta-article-ul zemanta-article-ul-image"></ul>';
b.platform.gallery_template_item='<div class="zemanta-img"><a href="{source_url}"'+h+d+'><img src="{src}" alt="{alt}" /></a><p class="zemanta-img-attribution">{attribution}</p></div>';
b.platform.articles_with_image_template_item='<li class="zemanta-article-ul-li-image zemanta-article-ul-li{hash}"><a '+h+d+' href="{article_url}" ><img src="//i.zemanta.com/{article_id}_80_80.jpg"/></a><a '+h+d+' href="{article_url}">{title}</a><span>({host})</span><div><hr/></div></li>'
}else{g.doctype_image1='style="margin:1em;float:'+j+';display:block"';
g.doctype_image2='style="border:none;display:block"';
g.doctype_image3='style="font-size:0.8em;"';
g.doctype_related1='<fieldset class="zemanta-related"><legend class="zemanta-related-title">'+(b._preferences.article_layout_title||"Related articles")+'</legend><ul class="zemanta-article-ul">';
g.doctype_related2="</ul></fieldset>";
b.platform.articles_template_wrapper='<fieldset class="zemanta-related"><legend class="zemanta-related-title">'+(b._preferences.article_layout_title||"Related articles")+"</legend></fieldset>";
b.platform.articles_with_image_template_ul='<ul style="margin: 0; padding: 0; overflow: hidden;" class="zemanta-article-ul zemanta-article-ul-image"></ul>';
b.platform.articles_template_ul='<ul class="zemanta-article-ul"></ul>';
b.platform.gallery_template_item='<div class="zemanta-img" '+g.doctype_image1+'><a href="{source_url}"'+h+d+'><img src="{src}" alt="{alt}" '+g.doctype_image2+' /></a><p class="zemanta-img-attribution" '+g.doctype_image3+">{attribution}</p></div>";
b.platform.articles_with_image_template_item='<li style="padding: 0; background: none; list-style: none; display: block; float: left; vertical-align: top; text-align: left; width: 84px; font-size:11px; margin: 2px 10px 10px 2px;" class="zemanta-article-ul-li-image zemanta-article-ul-li{hash}"><a '+h+d+' href="{article_url}" target="_blank" style="box-shadow: 0px 0px 4px #999; padding: 2px; display: block; border-radius: 2px; text-decoration: none;" ><img style="padding: 0; margin: 0; border: 0; display: block; width: 80px; max-width: 100%;" src="//i.zemanta.com/{article_id}_80_80.jpg"/></a><a '+h+d+' href="{article_url}" target="_blank" style="display: block; overflow:hidden; text-decoration: none; line-height: 12pt; height: 83px; padding: 5px 2px 0 2px;background-image:none;">{title}</a></li>'
}b.platform.articles_template_item='<li class="zemanta-article-ul-li{hash}"><a href="{article_url}"'+h+d+">{title}</a> ({host})</li>";
b.platform.links_template_item='<a class="zem_slink{freebase}" href="{href}" title="{title}" rel="{rel}'+(i&&" nofollow"||"")+'"'+d+">{anchor}</a>";
return g},set_image_wrapper_size:function(e,d){return e.css("width",d)
},insert_zemanta_image:function(e,d){return{dom:e,cursorInsert:false}
},hide_align_image_config:false,change_image_alignment:function(d,e){return d
},get_image_alignment:function(e){var d=e.css("float");
if(d=="left"){return"left"
}else{if(d=="right"){return"right"
}else{if(e.css("display")=="block"&&e.css("margin-left")=="auto"&&e.css("margin-right")=="auto"){return"center"
}}}return"none"
},get_image_align_element:function(d){return d.closest(".zemanta-img")
},get_image_caption_text:function(d){return b.platform.get_image_caption_elm(d).text()
},fix_image_structure:function(d){return d
},get_image_caption_elm:function(d){return d.find(".zemanta-img-attribution")
},remove_image_caption_elm:function(d){return d.remove()
},update_image_caption_text:function(d,e){if(!e){return b.platform.remove_image_caption_elm(d)
}else{return d.text(e)
}},add_image_caption_elm:function(d,f){var e=(b.doctype!=="1")?' style="font-size:0.8em;"':"";
return d.append(c('<p class="zemanta-img-attribution"'+e+"></p>").text(f))
},set_featured_image:function(e,d){d(new Error("Featured image support is not implemented."));
return null
},get_editor:function(d){var i=null,g=null,e={element:null,property:null,type:null,win:null},f=null;
try{g=c("#"+b.rte_id).prop("contentWindow");
i=c("#"+b.rte_id+":first").get(0)||c("#"+b.rte_id).get(0);
f={rte:{element:g&&g.document.body,property:"innerHTML",type:"RTE",win:g},plain:{element:i,property:"value",type:i&&i.tagName.toLowerCase(),win:null}};
if(b.rte_type==="rte"||b.rte_type==="archetype"){e=f.rte
}else{if(b.rte_type==="textarea"){e=f.plain
}else{e=f.plain
}}}catch(h){b.log(h)
}return d?{active:e,all:f}:e
},get_dom:function(g,j){var e=null,i=null,h=null,f=b.platform.get_editor();
i=(f.type==="RTE"&&f.element)?c(f.element.cloneNode(true)):null;
if(!i){h=document.createElement("div");
if(f.element!==null){e=f.element[f.property]
}if(e!==undefined&&e!==null&&b.saveNewlines){e=e.replace(b.nlRegex,b.nlrep)
}h.innerHTML=e||"";
i=c(h)}i=b.platform.filter_dom(i,f.type,g);
if(g&&i){i=b.platform.filter_zemanta(i)
}return i.fin()
},get_title:function(){if(window.external&&typeof window.external.GetContentHtml!=="undefined"){return""
}return c("#title").or("#post_title").val()||""
},set_title:function(d){if(window.external&&typeof window.external.GetContentHtml!=="undefined"){return
}return c("#title").or("#post_title").blur().focus().val(d)
},filter_zemanta:function(d){return d.find(".zemanta-img, .zemanta-action-click, .zemanta-img-attribution, .zemanta-related, .zemanta-related-title, .zemanta-article-ul, .zemanta-article-ul-li, .zemanta-pixie, .zemanta-pixie-a, .zemanta-pixie-img, #zemanta-pixie, .zemanta-reblog-cite, #zemanta-pixie-img").remove().end().find("a.zem_slink, a.zem_olink").each(function(){c(this).replaceWith(b.helpers.create_fragment(c(this).html(),d.getDoc()))
}).end().fin()
},filter_dom:function(e,d){return e
},get_html:function(e,f){f=f||b.control.sync.dom();
if(typeof f==="function"){return f.simple(b.platform.get_html,this,arguments)
}var d=f?c.trim(f.html()):"";
b.log("get_html:"+d);
return d},set_html:function(e,h){if(e===null||typeof e==="undefined"||e===""){return""
}if(e&&b.saveNewlines){e=e.replace(b.nlRegex,"").replace(b.nlrepRegex,b.nl)
}e=b.helpers.close_tags(e,b.doctype);
var f=b.platform.get_editor(),g=null,d=null;
if(h){return e
}if(f.element){if(f.type==="RTE"){d=f.element;
g=b.helpers.create_fragment(e,d.ownerDocument);
if(!b.control.isEnabled(g)){return b._set_status(6,{text:"Something was wrong when fetching content from the editor - stopping before we lose you any content.",type:"warning",errortype:4})
}if(f.win){f.win.document.ignoreDOMevents=true
}while(d.firstChild){d.removeChild(d.firstChild)
}d.appendChild(g);
if(f.win){f.win.document.ignoreDOMevents=false
}}else{if(!b.control.isEnabled(e)){return b._set_status(6,{text:"Something was wrong when fetching content from the editor - stopping before we lose you any content.",type:"warning",errortype:4})
}f.element[f.property]=e
}}b.events.trigger("htmlSet",e)
},scroll:function(e){switch(typeof e){case"object":e=e.length?e.offset().top:0;
break;case"number":break;
case"string":e=e==="bottom"?5000:0;
break;default:e=0;
break}var d=b.platform.get_editor();
if(d.element){d.element.scrollTop=e-5;
d.element.scrollLeft=0
}},move_to_start:function(f){var d=c(f).prevAll("p, br"),e=null;
if(d.length>0&&c(f).nextAll().length!==0){e=d[0];
if(e!==c(f).prev().get(0)){c(f).insertAfter(e)
}}else{d=c(f).parents("p");
if(d.length&&c(f)[0].nextSibling!==null){e=d[0];
if(e.firstChild!==f){c(f).insertBefore(e.firstChild)
}}}},rewrap_image:function(h,g,k,d){var i=b.platform.object_align(k)||"",m=null,f=c("img",k).attr("width"),l=c("img",k).attr("height"),j=c(k).hasClass("zemanta-img")&&!c(k).hasClass("zemanta-action-dragged")?"zemanta-gallery-img-clicked":"zemanta-gallery-img-dragged",e=b.platform.get_editor();
b.log("nC: rewrapping "+k.tagName+" / "+g.url_m_w);
if(!h.ignoreDOMevents){h.ignoreDOMevents=true;
setTimeout(function(){h.ignoreDOMevents=false
},1)}c(k).parents("a, .zemanta-article-ul, .zemanta-related-title").each(function(){var n=c(this);
if(n.parent().hasClass("zemanta-related")){n=n.parent()
}else{if(n.hasClass("zemanta-article-ul")){if(n.prev().hasClass("zemanta-related-title")){n=n.prev()
}else{if(n.prev().prev().hasClass("zemanta-related-title")){n=n.prev().prev()
}}}}n.before(k)
});m=b.platform.gallery_create(h,g,j==="zemanta-gallery-img-clicked");
if(i){b.platform.object_align(m,i)
}if(d&&f>0&&l>0&&(f!==g.url_m_w||l!==g.url_m_h)){c("img",m).attr("width",f);
c("img",m).attr("height",l)
}c(k).find("img").each(function(){b.platform.mark_gallery(b.helpers.object_search((b.control.sources.display_sources?b.gallery._my_images:b.gallery._images),"url_m",this.src),false)
}).end().replaceWith(m);
b.platform.mark_gallery(g,j);
if(e&&e.element&&e.element.nodeType&&!g.poc){b.platform.set_html(e.element[e.property])
}},mark_gallery:function(e,d){if(!e){return
}var f=c('li.zemanta-gallery-li img[src="'+e.url_s+'"]').parent();
if(d){f.addClass(d)
}else{f.removeClass("zemanta-gallery-img-dragged").removeClass("zemanta-gallery-img-clicked")
}},nodesChanged:function(f,h){var e=this,d=false,g={},i={};
b.log("nodesChanged: "+e.ignoreDOMevents);
if(e.ignoreDOMevents){return
}b.events.trigger("nodesChanged",this);
c("img:not(.zemanta-img-configured)",this).each(function(){b.log("nC: looking for image: "+this.src);
var j=b.helpers.object_search((b.control.sources.display_sources?b.gallery._my_images:b.gallery._images),"url_m",this.src),l=this,k=null;
b.log("nC: img: "+(j&&j.url_s)+"/"+(j&&j.url_m));
if(j){b.log("nC: medium image");
if(c(this).parents(".zemanta-img").length>0){b.log("nC: found our image with wrapper: "+c(this).parents(".zemanta-img").html());
if(c(this).parents(".zemanta-img").find(".zemanta-img-attribution").length===0&&b.platform.gallery_template_item.indexOf("zemanta-img-attribution")>=0&&b._preferences.account_type!=="pro"){l=c(this).parents(".zemanta-img").get(0);
b.log("nC: found our image with wraper but no attribution, "+c(this).parents("a").attr("href")+" === "+j.source_url+"/"+j.attribution);
b.platform.rewrap_image(e,j,l,true)
}else{if(!isNaN(parseInt((c(this).parents(".zemanta-img").get(0)||{style:{}}).style.width,10))&&c(this).parents(".zemanta-img").css("width")!==c(this).width()+10&&c(this).width()!==0){c(this).parents(".zemanta-img").css("width",c(this).width()+10)
}if(j.url_s===j.url_m){d=true
}}if(i[this.src]||g[this.src]){c(this).parents(".zemanta-img").remove()
}else{g[this.src]=c(this).parents(".zemanta-img")
}}else{if(c(this).parents("a").attr("href")===j.source_url){b.log("nC: image has stuff around it - "+c.map(c(this).parents(),function(o,m){return o.tagName
}).join(" > "));
l=c(this).parents("a").get(0);
k=b.platform.dnd_top_node(this);
if(k){l=k.get(0)
}}b.log("nC: found our image without wraper, "+c(this).parents("a").attr("href")+" === "+j.source_url+"/"+j.attribution);
l=l||this;if(g[this.src]){g[this.src].remove()
}i[this.src]=function(){b.platform.move_to_start(l);
b.platform.rewrap_image(e,j,l,true)
}}}else{b.log("nC: not medium image");
j=b.helpers.object_search((b.control.sources.display_sources?b.gallery._my_images:b.gallery._images),"url_s",this.src);
b.log("nC: 2nd img: "+(j&&j.url_s)+" / "+(j&&j.url_m));
if(j&&!b.gallery.imageConfig.isOpen){b.log("nC: found a small image, converting to big with wrapper "+j.url_m);
if(c(this).parents(".zemanta-img").length>0){l=c(this).parents(".zemanta-img").get(0);
b.log("nC: dropped in existing wrapper "+j.url_m)
}b.platform.move_to_start(l||this);
b.platform.rewrap_image(e,j,l,true)
}else{b.log("nC: found a foreign image")
}}});e.ignoreDOMevents=true;
c.each(i,function(k,j){j()
});if(d&&!h){b.platform.nodesRemoved.call(e)
}e.ignoreDOMevents=false
},nodesRemoved:function(h,d){var g=this;
b.log("nodesRemoved: "+g.ignoreDOMevents);
if(g.ignoreDOMevents){return
}function e(){var i=[],l={},j=null,k,m;
c("img",g).each(function(){if(c(this).parents(".zemanta-img").length>0){b.log("nR: found our image: "+this.src);
i.push({indoc:true,url_m:this.src,source_url:c(this).parents("a").attr("href"),dragged:c(this).parents(".zemanta-img").hasClass("zemanta-action-dragged")})
}else{b.log("nR: found foreign image: "+this.src)
}});k=c("#zemanta-gallery-thumbnails .zemanta-gallery-img-dragged, #zemanta-gallery-thumbnails .zemanta-gallery-img-clicked").length;
j=c("#zemanta-gallery-thumbnails").find("li").removeClass("zemanta-gallery-img-dragged").removeClass("zemanta-gallery-img-clicked").end();
if(i.length>0){b.log("nR: found "+i.length+" images, making selections");
l=b.helpers.merge_arrays({p:"url_m",e:true},i,(b.control.sources.display_sources?b.gallery._my_images:b.gallery._images));
c.each(l.duplicate,function(){if(l.unionhash[this.url_m]&&l.unionhash[this.url_m].indoc){j.find('.zemanta-gallery-img[src="'+this.url_s+'"]').parents("li").eq(0).addClass(l.unionhash[this.url_m].dragged?"zemanta-gallery-img-dragged":"zemanta-gallery-img-clicked")
}});l=b.helpers.merge_arrays({p:"source_url",e:true},i,(b.control.sources.display_sources?b.gallery._my_images:b.gallery._images));
c.each(l.duplicate,function(){if(l.unionhash[this.source_url]&&l.unionhash[this.source_url].indoc){j.find('.zemanta-gallery-img[src="'+this.url_s+'"]').parents("li").eq(0).addClass(l.unionhash[this.source_url].dragged?"zemanta-gallery-img-dragged":"zemanta-gallery-img-clicked")
}})}else{b.log("nR: no images, no selections")
}m=c("#zemanta-gallery-thumbnails .zemanta-gallery-img-dragged, #zemanta-gallery-thumbnails .zemanta-gallery-img-clicked").length;
if(k!==m){b.events.trigger("selection_updated")
}}function f(){c(".zemanta-img-attribution",g).each(function(){var i=c(this);
if(!i.parents(".zemanta-img").length){i.remove()
}});c(".zemanta-img",g).each(function(){var j=c(this).find("img"),i=0;
b.log("nR: found our wrapper with "+j.length+" image(s) - "+c(this).find("img").attr("src"));
if(j.length===0){b.log("nR: removing");
if(!g.ignoreDOMevents){g.ignoreDOMevents=true;
setTimeout(function(){g.ignoreDOMevents=false
},1)}c(this).remove()
}else{j.each(function(){if(b.helpers.object_search((b.control.sources.display_sources?b.gallery._my_images:b.gallery._images),"url_m",this.src)){i+=1
}});if(i>1){b.platform.rewrap_image(g,b.helpers.object_search((b.control.sources.display_sources?b.gallery._my_images:b.gallery._images),"url_m",j.eq(1).src)||b.helpers.object_search((b.control.sources.display_sources?b.gallery._my_images:b.gallery._images),"url_s",j.eq(1).src),this,true)
}}});e()}setTimeout(function(){f();
if(d){d(g)}},50)
},widget_resize:function(){},get_post_url:function(){return""
},update_button_initialize:function(){c("#zemanta-control").append('<div id="zemanta-control-update"><span class="zemanta-update-text">Update</span></div>')
},defer_promoted:false,applyImageSize:function(d){return d
},bigImagesTimestamp:0,horizontal_articles_with_option:false,horizontalArticlesPopups:undefined,articleRequestConfig:undefined,includeGetty:false,insertGettyAsUrl:false,disableGallery:function(){var d=b.platform.create_disable_gallery_overlay(),e=c("#zemanta-gallery-wrap");
if(d){e.append(d);
d.css({width:e.width(),height:e.height()});
e.css({overflow:"hidden"});
c("#zemanta-register-link").on("click",function(f){b.control.preferences.open(f)
});c("#zemanta-accept-tos-button").on("click",b.control.confirmTOS)
}},showHideHeader:undefined,articleHoverOverlay:undefined,removeArticleElement:false};
return a};window.ZemantaTransport=function(b){var d=window.zQuery,c={ready:-1,config:{},easyxdm_remote:(ZemantaUtils.isHttps?"https://sapi.zemanta.com":"http://api.zemanta.com")+"/easyxdm/",error:null,init_timeout:null,initRPC:function(){b.log("Initialize transport RPC...");
c.init_timeout=setTimeout(c.onRPCTimeoutError,20000);
try{a.easyXDM=easyXDM.noConflict("Zemanta.transport");
c.config={swf:c.easyxdm_remote+"easyxdm.swf",remote:c.easyxdm_remote+"cors/index_merged.html",onReady:c.onReady};
a.rpc=new a.easyXDM.Rpc(c.config,{remote:{request:{}},serializer:{parse:function(e){return b.helpers.JSON.parse(e)
},stringify:function(e){return b.helpers.JSON.stringify(e)
}}})}catch(f){c.ready=-1;
c.error=b.error.transportInit;
clearTimeout(c.init_timeout);
b.log("Transport RPC initialization has thrown exception: ",f)
}},onRPCTimeoutError:function(){c.ready=-1;
c.error=b.error.transportInitTimeout;
b.log("Transport init timed out.")
},onReady:function(){var e={"0":"HashTransport","1":"PostMessageTransport","2":"NameTransport","3":"NixTransport","4":"SameOriginTransport","5":"FrameElementTransport","6":"FlashTransport"};
clearTimeout(c.init_timeout);
a.protocol=(e[c.config.protocol]||"Unknown");
b.log("Zemanta transport is initialized using "+a.protocol);
c.ready=1;c.error=b.error.noError
}},a={easyXDM:null,rpc:{},protocol:"Unknown",error:function(){return c.error
},initialize:function(){if(c.ready>=0){return c.ready==1
}c.ready=0;
if(c.error===null){c.error=b.error.noError
}c.initRPC();
return false
}};return a
};(function zemantaStart(a){function b(i){if(a.Zemanta){return
}if(!i.zextend&&i.extend){i.zextend=i.extend;
i.fn.zextend=i.fn.extend
}var h=a.setTimeout,m=a.clearTimeout,j=a.setInterval,q=a.clearInterval,k=a.document,n=a.navigator,e=a.Image,g=a.ActiveXObject,p=a.location.protocol==="https:",o=p?"https://static.zemanta.com/":"http://fstatic.zemanta.com/",l=p?o:"http://static.zemanta.com/",f={deployment:"unknown",loghistory:[],log:function(){f.loghistory.push(arguments);
if(f.debug===true){var u="",t=0,r=arguments.length,v="";
for(;t<r;t+=1){u+=v+(typeof arguments[t]==="object"&&arguments[t]?f.helpers.JSON.stringify(arguments[t]):arguments[t]);
v=" "}if(a.top.console&&(typeof a.top.console.log==="function"||typeof a.top.console.log==="object")){a.top.console.log(u)
}else{a.alert(u)
}}},error:(function(){var s=[],t=0;
function r(){t+=1;
return i.now()+":"+t+":"+Math.floor(Math.random()*10000)
}return function(w){var v=typeof w,u=null,x=null,y="";
if(v==="object"){x=f.control._add_stats(i.zextend({error:w,api_key:f.api_key,rid:f.rid},f.control.preferences.response()));
if(!p){u=new e();
y=r();u.src="http://error.zemanta.com/?error_id="+y+"&api_key="+(x.api_key||"")+"&rid="+(x.rid||"")+"&interface="+(x["interface"]||"")+"&deployment="+(x.deployment||"")+"&error="+(x.error&&x.error.error&&x.error.error.message||"")
}return s.unshift(w)
}else{if(v==="number"){return s[w]
}else{if(v==="string"){w=w.split(":");
if(w.length===2){return s.slice(w[0],w[1])
}else{return[]
}}else{return s
}}}}}())},d=function(){var s=i({}),r={trigger:function(){try{s.trigger.apply(s,arguments)
}catch(t){f.log("jQuery trigger error")
}},init:function(t){s=i(t);
(function(u){if(u.constructor===Array){i.map(u,arguments.callee)
}else{t[u]=function(){s[u].apply(s,arguments);
return this
}}})(["bind","one","unbind","on","off"]);
return t}};
return r}();
if(!Array.isArray){Array.isArray=function(r){return Object.prototype.toString.call(r)==="[object Array]"
}}Array.indexOf=function(r,u){if(r.indexOf){return r.indexOf(u)
}var t=0,s=r.length;
for(;t<s;t+=1){if(t in r&&r[t]===u){return t
}}return -1
};Date.prototype.setISO8601=function(s){var t="([0-9]{4})(-([0-9]{2})(-([0-9]{2})(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(\\.([0-9]+))?)?(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?",w=s.match(new RegExp(t)),v=0,r=new Date(w[1],0,1),u=0;
if(w[3]){r.setMonth(w[3]-1)
}if(w[5]){r.setDate(w[5])
}if(w[7]){r.setHours(w[7])
}if(w[8]){r.setMinutes(w[8])
}if(w[10]){r.setSeconds(w[10])
}if(w[12]){r.setMilliseconds(Number("0."+w[12])*1000)
}if(w[14]){v=(Number(w[16])*60)+Number(w[17]);
v*=((w[15]==="-")?1:-1)
}v-=r.getTimezoneOffset();
u=(Number(r)+(v*60*1000));
this.setTime(Number(u))
};(function(){var s=60*60*24,r=[{n:"year",s:s*365},{n:"month",s:s*30},{n:"week",s:s*7},{n:"day",s:s},{n:"hour",s:60*60},{n:"minute",s:60},{n:"second",s:1}];
Date.prototype.toTimeSinceString=function(y,w,B,G){var x=y||2,C=w||", ",I=B||" and ",E=r,H=(i.now()-this.getTime())/1000,A=0,z=E.length,u=G?[]:"",D=null,F=0;
for(;A<z;A+=1){D=E[A];
F=Math.floor(H/D.s);
if(F>0){if(G){u.push({n:D.n,v:F})
}else{if(u!==""){u+=x===1||A+1===z?I:C
}u+=F+" "+D.n+(F>1&&"s"||"")
}if(x===1){break
}H=H-F*D.s;
x-=1}}return u
}})();(function(r){r.zextend(r.easing,{easeInQuart:function(u,v,s,y,w){return y*(v/=w)*v*v*v+s
}})}(i));(function(s){var t=h(function(){},0),r=null;
s.readyOrDone=function(v){var u=k.readyState,w=function(){var x=k.getElementsByTagName("*");
return x[x.length-1]
};if(u==="complete"){s.ready()
}else{if(typeof u==="undefined"){r=w();
m(t);t=h(function(){if(w()===r&&typeof k.readyState==="undefined"){s.ready()
}},1000)}}s(v)
}}(i));i.fn.zattr=function(r,t,s){if(r.constructor===String&&t===null){return this.removeAttr(r)
}else{return this.attr(r,t,s)
}};i.fn.or=function(r){if(this.length){return this.pushStack(this)
}else{return this.add(r)
}};i.fn.findWithSelf=function(r){return this.pushStack(this.find(r).andSelf().filter(r))
};i.fn.fin=function(){return i(this)
};i.fn.getDoc=function(){return this[0]&&this[0].ownerDocument||this.ownerDocument||this||k
};i.fn.realSize=function(s){var v=s||this[0],t=null,u=null;
if(typeof v.naturalHeight==="undefined"){t=i('<img src="'+v.src+'" alt="" />').appendTo("body").css("display","none");
u={w:t.width()||v.width(),h:t.height()||v.height()}
}else{u={w:v.naturalWidth,h:v.naturalHeight}
}return u};
(function(r){if(r.browser.mozilla){r.fn.disableTextSelect=function(){return this.each(function(){r(this).css({MozUserSelect:"none"})
})}}else{if(r.browser.msie){r.fn.disableTextSelect=function(){return this.each(function(){r(this).bind("selectstart.core",function(){return false
})})}}else{r.fn.disableTextSelect=function(){return this.each(function(){r(this).on("mousedown.core",function(){return false
})})}}}})(i);
/*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
i.cookie=function(y,x,B){if(arguments.length>1&&(!/Object/.test(Object.prototype.toString.call(x))||x===null||x===undefined)){B=i.extend({},B);
if(x===null||x===undefined){B.expires=-1
}if(typeof B.expires==="number"){var z=B.expires,A=B.expires=new Date();
A.setDate(A.getDate()+z)
}x=String(x);
return(k.cookie=[encodeURIComponent(y),"=",B.raw?x:encodeURIComponent(x),B.expires?"; expires="+B.expires.toUTCString():"",B.path?"; path="+B.path:"",B.domain?"; domain="+B.domain:"",B.secure?"; secure":""].join(""))
}var r=B&&B.raw?function(t){return t
}:decodeURIComponent,s=k.cookie.split("; "),w=0,v=s.length,u=[];
B=x||{};for(;
w<v;w+=1){if(s[w]){u=s[w].split("=");
if(r(u[0])===y){return r(u[1]||"")
}}}return null
};i.fextend=function(u,r){var t="";
u.original=u.original||{};
for(t in r){if(typeof r[t]==="function"&&typeof u[t]==="function"){u.original[t]=u[t];
r[t].original=u[t];
u[t]=r[t];delete r[t]
}}i.zextend(u,r)
};i.fn.get_element_width=function(u,r){var s=this||{},t=s.width();
t+=u?parseInt(s.css("border-left-width"),10)+parseInt(s.css("border-right-width"),10):0;
t+=r?parseInt(s.css("padding-left"),10)+parseInt(s.css("padding-right"),10):0;
return t};i.fn.get_element_height=function(u,t,v,s,y,x){var w=this||{},r=w.height();
r+=u?parseInt(w.css("border-top-width"),10):0;
r+=t?parseInt(w.css("border-bottom-width"),10):0;
r+=v?parseInt(w.css("padding-top"),10):0;
r+=s?parseInt(w.css("padding-bottom"),10):0;
r+=y?parseInt(w.css("margin-top"),10):0;
r+=x?parseInt(w.css("margin-bottom"),10):0;
return r};i.extend(f,function(){var r={debug_data:[],session_id:(function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(u){var t=Math.random()*16|0,s=u=="x"?t:(t&3|8);
return s.toString(16)
})}()),constants:{min_text_for_update:50},microcopy:{retry:"Retry",loading_preferences:"Loading preferences...",loading_preferences_failed:"Preferences failed to load.",fetching_content:"Fetching content..."},get_test_version:function(x,w,u){w=w>0&&w<1&&w||0;
var t,v=0,y=0,B=0,A=f.api_key.charAt(0).toLowerCase(),z="0123456789abcdefghijklmnopqrstuvwxyz";
z=(z+z).substr(Math.floor(w*z.length)).substr(0,z.length);
x=typeof x==="number"&&[{p:x,r:true},{p:1-x,r:false}]||i.map(x,function(C,s){if(!C.p){C={p:1/x.length,r:C}
}v+=parseFloat(C.p);
return C});
y=v?1/v:1;if(u){t=[];
A="."}i.each(x,function(C,E){var D=Math.round(z.length*B*y),s=Math.round(z.length*(B+E.p)*y);
if(z.substring(D,s).indexOf(A)>=0){t=E.r;
return false
}else{if(u){t.push(z.substring(D,s))
}}B+=E.p;return true
});return t!==undefined?t:x[x.length-1].r
},initialize:function(s){f.debug=ZemantaHelpers.check_feature("zemanta-debug")||ZemantaHelpers.check_feature("ZemantaDebug");
f.init_error=f.transport.error();
if(!f.transport.initialize()){f.log("Transport is not initialized yet.");
if(f.init_error===f.error.noError){f.init_error=f.error.transportInitTimeout
}return false
}if(f.widget_opened===undefined){f.widget_opened=true
}if(f.widget_enabled===undefined){f.widget_enabled=true
}if(!i("#zemanta-sidebar").length&&!s.platform.inactive_sidebar){f.init_error=f.error.widgetSidebarNotFound;
return false
}s.platform.big_article_preview=s.platform.big_article_preview&&!(i.browser.msie&&(parseInt(i.browser.version,10)<8));
s.platform.big_gallery_preview=s.platform.big_gallery_preview&&!(i.browser.msie&&(parseInt(i.browser.version,10)<8));
if(s&&s.widget_version>=1){i.fextend(f.platform,s.platform)
}f.platform.animate_enabled=false;
f.rte_id=s.textarea_id;
f.rte_type=s.textarea_type;
if(!f.platform.get_editor().element){i("#zemanta-message").html("Finding editor...");
f.init_error=f.error.widgetEditorNotFound;
return false
}f.control.interface_compose_text="Rich Text";
if(!f.initialized&&typeof s.init==="function"){s.init(d)
}if(f.debug){f.bind("apikeyChange.core",function(t){f.debug_data.push({time:new Date(),event:t.type,data:f.api_key})
})}f.setNewline=function(v){if(!v){return
}var u=v.indexOf("\r\n")>=0&&"\r\n"||v.indexOf("\n")>=0&&"\n"||v.indexOf("\r")>=0&&"\r";
if(u&&u!==f.nl){f.nl=u;
f.nlRegex=new RegExp(f.nl,"g")
}};f.nl=i.browser.msie?"\r\n":"\n";
f.nlRegex=new RegExp(f.nl,"g");
f.nlrep=i('<div><br class="zemanta-bogus" /></div>').html();
f.nlrepRegex=new RegExp(f.nlrep,"g");
f.saveNewlines=i.browser.msie;
f.widget_version=s.widget_version||0;
f.rid=null;
f.api_url=(s.secure||p)?"https://sapi.zemanta.com/services/rest/0.0/":"http://api.zemanta.com/services/rest/0.0/";
f.api_key=s.api_key&&f.control._apikey_isvalid(s.api_key)?s.api_key:f._zemanta_api_key();
d.trigger("apikeyChange");
f.interface_type=s.interface_type;
f.tags_target_id=s.tags_target_id;
f.gallery_width=s.gallery_width?s.gallery_width:3;
f.latest_articles="Latest Update";
f._settings=s;
f._preferences={};
f.preferences={};
f.doctype="-1";
f.image_position={index:"0",title:"right"};
f.nofollow=s.nofollow||false;
f.link_target=s.link_target||true;
f.helpers.copy(["doctype_image1","doctype_image2","doctype_image3","doctype_related1","doctype_related2"]).from(f.platform.control_setHTML(f.doctype,f.image_position.title,f.nofollow,f.link_target)).to(f);
f._lastrequest={};
f._lastresponse={};
f._lasttransport={};
f.initial={};
f.unbind("editor").bind("editor.core",function(t,u){if(f.widget_opened){if(f.widget_enabled!==u){d.trigger("editorChange",u);
d.trigger(u?"editorRich":"editorPlain")
}}else{f.unbind("widgetOpen.delayedEditor").one("widgetOpen.core.delayedEditor",function(){d.trigger("editor",u)
})}});f.unbind("editorChange").bind("editorChange.core",function(t,u){if(u){f.control.widget_enable()
}else{f.control.widget_disable(f.platform.widget_nonrte_screen)
}});f.platform.get_editor();
f.one("preferencesProcessed.core",function(x,z){var v=[],t="",w="",u=-1,y=null;
if(z.nodeType){z=i(z)
}if(f._preferences.account_type==="pro"){f.detect_deployment()
}if(f._preferences.image_config==="0"){f.platform.image_config=false
}try{if(!f.helpers.empty(f.initial)){f.springboard.auto(z)
}}catch(A){f.log("Initialize parts failed")
}u=i("#zemanta-sidebar").width();
if((!f.user_is_registered&&u>=240)||u>=227){i("#zemanta-preferences").addClass("zemanta-preferences-wide")
}else{if(u<100){f.log("widget too small: "+u)
}}});f.one("recommendationsProcessed.core.published_ping",function(t,u){f.platform.get_post_url(f.control.published_ping)
});f.one("widgetPartsProcessed.core",function(u){var t=null;
if(!f.platform.disable_messages&&i("#zemanta-links").length&&(f.platform.inactive_sidebar||i(".zemanta-wrap").length&&i("#zemanta-links").offset().top<i(".zemanta-wrap").offset().top)){t=i("#zemanta-message");
t.clone(true,true).insertBefore(i("#zemanta-links")).addClass("horizontal");
t.remove()}});
f.control.initialize();
f.initialized=true;
f.detect_deployment();
f.init_error=f.error.noError;
f.events.trigger("zemantaInitialize");
return true
},detect_deployment:function(){var v=null,t=function(){return f._preferences&&f._preferences.account_type==="pro"
},x=function(){try{if(typeof a.external.GetContentHtml!=="undefined"){return true
}}catch(C){}return false
}(),y=function(){var C=null;
if(typeof g==="undefined"){return false
}try{C=new g("ZemantaBHO.ZemantaXMLHttpRequest");
if(C!==null){C=null;
return true
}}catch(D){}return false
}(),B=function(){return i('script[src^="http://labs.zemanta.com/bookmarklet"]').length
}(),z=function(){return a.ZemantaGetAPIKey&&!a.ZemantaGetReleaseId&&!a.ZemantaLoaded&&!a.ZemantaPluginVersion&&/chrome\//.test(n.userAgent.toLowerCase())
}(),u=function(){return !a.ZemantaGetAPIKey&&!a.ZemantaGetReleaseId&&!a.ZemantaLoaded&&!a.ZemantaPluginVersion&&/safari\//.test(n.userAgent.toLowerCase())&&!/chrome\//.test(n.userAgent.toLowerCase())
}(),A=function(){return a.google&&a.google.Blog&&a.google.Blog.Editor
}(),s=function(){return f.interface_type==="plugin.typepad.com"
}();function w(C,E){try{var D=0;
while(C){if(typeof C[E]!=="undefined"){return C[E]
}D+=1;C=a!==a.parent?a.parent:null;
if(D>10){break
}}return null
}catch(F){}}this.deployment="unknown";
if(!t()&&(v=w(a,"GM_xmlhttprequest"))){this.deployment="greasemonkey"
}else{if(!t()&&(v=w(a,"ZemantaXMLHttpRequest"))){this.deployment="firefox extension"
}else{if(!t()&&x){this.deployment="microsoft desktop plugin "+f.interface_type
}else{if(!t()&&y){this.deployment="ie extension"
}else{if(!t()&&B){this.deployment="bookmarklet"
}else{if(!t()&&A){this.deployment="google gadget"
}else{if(!t()&&s){this.deployment="plugin.typepad.com plugin"
}else{if(!t()&&z){this.deployment="chrome extension"
}else{if(!t()&&u){this.deployment="safari extension"
}}}}}}}}}if(this.deployment==="unknown"){this.deployment=f.interface_type+" "+(f._preferences&&f._preferences.account_type||"")+"plugin"
}if(this.deployment.indexOf("plugin")===this.deployment.length-6){if(a.ZemantaPluginVersion&&typeof a.ZemantaPluginVersion==="function"){this.deployment+=" "+a.ZemantaPluginVersion()
}}this.deployment+=" (easyXDM/"+this.transport.protocol+")";
f.log("Zemanta deployment: "+f.deployment)
},widget_is_initialized:false,springboard:(function(){var t={parts:{},filter_zemanta_text:function(u){return i.trim(f.platform.filter_zemanta(i(u[0].cloneNode(true))).text())
},get_initial:function(){var u=i("#zemanta-initial");
if(!u.length){u=i('<div id="zemanta-initial"></div>').insertBefore(i("#zemanta-gallery").or("#zemanta-articles"))
}return u},load_part:function(u){if(s.is_part_registered(u)&&!s.is_part_initialized(u)){if(f[u]){t.parts[u]=!!f[u].init()
}}},unload_part:function(u){if(s.is_part_registered(u)&&s.is_part_initialized(u)){f[u].deinit();
t.parts[u]=false
}}},s={register_part:function(u){if(!s.is_part_registered(u)){t.parts[u]=false
}},deregister_part:function(u){if(s.is_part_registered(u)){delete t.parts[u]
}},is_part_registered:function(u){return t.parts.hasOwnProperty(u)
},is_part_initialized:function(u){return s.is_part_registered(u)?t.parts[u]:false
},registered_parts:function(){var v=[],u=null;
if(typeof(Object.keys)==="function"){return Object.keys(t.parts)
}for(u in t.parts){if(t.parts.hasOwnProperty(u)){v.push(u)
}}return v},first_screen:function(v){var u=0;
v=v||f.control.sync.dom();
if(typeof v==="function"){return v.simple(s.first_screen,this)
}u=t.filter_zemanta_text(v).length;
f.platform.widget_firstvisit_screen(t.get_initial(),u);
t.get_initial().show();
if(u===0){f.one("recommendationsReceived.core.firstUpdate",function(){s.widget(false,v)
})}d.trigger("initialScreen");
d.trigger("firstvisitScreen")
},return_screen:function(u){u=u||f.control.sync.dom();
if(typeof u==="function"){return u.simple(s.return_screen,this)
}f.platform.widget_returnvisit_screen(t.get_initial(),t.filter_zemanta_text(u).length);
t.get_initial().show();
i("#zemanta-gallery, #zemanta-articles").hide();
i("#zemanta-control").show();
f.one("recommendationsReceived.core.firstUpdate",function(){s.widget(false,u)
});d.trigger("initialScreen")
},widget:function(u,v){v=v||f.control.sync.dom();
if(typeof v==="function"){return v.simple(s.widget,this,arguments)
}if(f._preferences.account_type!=="pro"){try{f.control.messaging.queue.render()
}catch(w){i("#zemanta-message").hide()
}}f.unbind("recommendationsReceived.firstUpdate");
if(f._preferences.account_type!=="pro"){if(u){if(t.filter_zemanta_text(v).length<f.constants.min_text_for_update){f.control.initial.inspire();
d.trigger("inspireFinished")
}else{f.control.update(i("#zemanta-keyword-input").val(),false,v)
}}i("#zemanta-head h1").attr("title","Switch to Zemanta selection")
}i("#zemanta-initial, #zemanta-noselection").hide();
i("#zemanta-initial-wrap div.button, #zemanta-initial-wrap div.button a.init").hide();
i("#zemanta-gallery, #zemanta-articles, #zemanta-control").show();
i("#zemanta-head div.zemanta-source-mine").show();
if(!f.platform.disable_draggable_resize){i("#zemanta-tools").addClass("draggable");
f.helpers.drag("#zemanta-tools.draggable",{above:["#zemanta-sidebar #zemanta-tags-div-ul","#zemanta-sidebar #zemanta-links-div-ul","#zemanta-sidebar #zemanta-articles-wrap","#zemanta-sidebar #zemanta-gallery-wrap"],stop:function(){if(i.browser.msie){i("#zemanta-tools").hide().show()
}}},null,"tools")
}i.each(s.registered_parts(),function(y,x){if(f.control.widget[x]){t.load_part(x)
}});i("#zemanta-links a.zemanta-help, #zemanta-tags a.zemanta-help, #zemanta-sidebar a.zemanta-help").on("click.core",function(x){x.preventDefault();
a.open(this.href)
});if(!i("#zemanta-sidebar #zemanta-gallery:visible, #zemanta-sidebar #zemanta-articles:visible, #zemanta-sidebar #zemanta-links:visible, #zemanta-sidebar #zemanta-tags:visible").length){i("#zemanta-tools").removeClass("draggable")
}f.widget_is_initialized=true;
f.control.preferences.hide_parts();
d.trigger("widgetPartsProcessed");
d.trigger("widgetReady")
},auto:function(v){var u=false;
v=v||f.control.sync.dom();
if(typeof v==="function"){return v.simple(s.auto,this)
}if(f.platform.pretty_widget_loader){i("#zemanta-control, #zemanta-head").show();
i("#zemanta-widget-loader").remove()
}f.control.sources.init();
if(f.platform.inactive_sidebar){u=s.widget(true,v)
}else{if(f.control.isFirstVisit()){u=s.first_screen(v)
}else{if(t.filter_zemanta_text(v).length===0){u=s.return_screen(v)
}else{u=s.widget(true,v)
}}}f.events.trigger("springboardAuto");
return u},destroy:function(){f.control.sources.deinit();
t.get_initial().remove();
i.each(s.registered_parts(),function(v,u){t.unload_part(u)
});f.events.trigger("springboardDestroy")
}};i.each(["gallery","articles","links","tags"],function(w,u){s.register_part(u)
});return s
})(),set_localfile:function(){var t="",s=a.location,v=s.protocol+"//"+s.host,u=10000;
i('img[src^="'+v+'"], img:not([src^="http://"])').each(function(){var x=this,w=parseInt(x.height,10)*parseInt(x.width,10);
if(w<u){u=w;
t=x.src}});
u=200;if(!t&&!(i.browser.safari&&n.userAgent.toLowerCase().indexOf("safari")>=0)){i('link[href^="'+v+'"][rel="stylesheet"]').each(function(){var y=this,w=y.sheet||y.styleSheet,x=w&&(w.rules||w.cssRules)||[];
if(x.length<u){u=x.length;
t=y.href}})
}return t.substr(v.length)
},load:function(s){f.log("load "+f.helpers.JSON.stringify(s));
f.transport.rpc.request({url:s.url,method:s.method,data:s.data,timeout:f.timeout&&f.timeout[s.data.method]||30000},function(u){var v=u.data||"",t=null;
try{t=f.helpers.JSON.parse(v)
}catch(w){}s.onload({readyState:4,status:200,responseObject:t,responseText:v},"success")
},function(w){var z=typeof(w)==="object"?w:{},u=z.data||{},v=u.data||"",A=u.status||0,t=null,x=(z.message||"unknown").toLowerCase().replace(/[^a-z0-9_ ]/g,"").replace(/(^\s+|\s+$)/g,"").replace(/\s+/g,"_").substr(0,64);
try{t=f.helpers.JSON.parse(v)
}catch(y){}f.log("Zemanta.transport RPC failed: ",z);
s.onload({readyState:4,status:A,responseObject:t,responseText:v},z.message==="TIMEOUT"?"timeout":"error")
})},rte_id:"",rte_type:"",timeout:{"zemanta.preferences":25000,"zemanta.suggest":25000,"zemanta.post_published_ping":25000},markerClassName:"hasZemanta",force_one_paragraph:function(t){t=t||f.control.sync.dom();
if(typeof t==="function"){return t.simple(f.platform.force_one_paragraph,this,arguments)
}var s=null;
if(i.trim(t.text()).length===0){s=t.find("p:first");
if(s.length===0||s.children().length>0){try{s=i("<p></p>",t.get(0)&&t.get(0).ownerDocument||f.platform.get_editor().element.ownerDocument).appendTo(t)
}catch(u){f.log("Inserting paragraph failed: "+u.message)
}}s.text("Write text here...")
}return t},_get:function(s){return(this._settings[s]!==null?this._settings[s]:f._defaults[s])
},_zemanta_api_key:function(){var t="",v="",s=null;
try{if(i("#zemanta-sidebar").data("apikey")){t=i("#zemanta-sidebar").data("apikey")
}else{if(typeof a.top.ZemantaGetTestingAPIKey!=="undefined"){t=a.top.ZemantaGetTestingAPIKey()
}else{if(typeof a.top.ZemantaGetPluginAPIKey!=="undefined"){t=a.top.ZemantaGetPluginAPIKey()
}else{if(typeof a.top.ZemantaGetAPIKey!=="undefined"){t=a.top.ZemantaGetAPIKey()
}else{if(i.browser.msie){try{s=new g("ZemantaBHO.ZemantaXMLHttpRequest");
t=s.ZemantaGetAPIKey()
}catch(u){f.log(u);
t=v}}}}}}}catch(w){f.log(w)
}if(!t||!f.control._apikey_isvalid(t)){f.log("GetAPIKey did not return a key. Inserting hardcoded key.");
t=v}return t
},_rte_filterHTML:function(t,s){if(s&1){t.find("br[mce_bogus]").each(function(){var u=i(this).parent();
i(this).remove();
if(u.html()===""){u.remove()
}})}if(s&2){t.find("p").each(function(){if(i(this).html()===""){i(this).remove()
}})}return t
},_set_status:function(s,t){if(s===0){if(!i("#zemanta-control-update").length){f.platform.update_button_initialize();
f._enabled=true;
this.nf_status_code=0
}}else{if(s===1){i("#zemanta-control-update").find("span").text("Analyzing").end().addClass("updating").removeClass("warning").removeClass("info");
this.nf_status_code=1
}else{if(s===2){i("#zemanta-control-update").find("span").text("Update").end().removeClass("updating").removeClass("warning").removeClass("info");
f._enabled=true;
this.nf_status_code=2
}else{if(s===4){f._enabled=false;
if(typeof this.nf_status_code!=="undefined"){f._set_status(this.nf_status_code)
}}else{if(s===5){i("#zemanta-control-update").find("span").text("Keep writing").end().addClass("info").removeClass("updating").removeClass("warning");
h(function(){f._set_status(2)
},5000)}else{if(s===6){i("#zemanta-control-update").find("span").text("Error").end().addClass("warning").removeClass("updating").removeClass("info");
h(function(){f._set_status(2)
},5000)}else{if(s===7){i("#zemanta-control-update").find("span").text("Updating in 3").end().addClass("updating").removeClass("warning").removeClass("info")
}else{if(s===8){i("#zemanta-control-update").find("span").text("Updating in 2").end().addClass("updating").removeClass("warning").removeClass("info")
}else{if(s===9){i("#zemanta-control-update").find("span").text("Updating in 1").end().addClass("updating").removeClass("warning").removeClass("info")
}else{if(s===10){i("#zemanta-control-update").find("span").text("No prefs").end().addClass("warning").removeClass("updating").removeClass("info");
h(function(){f._set_status(2)
},5000)}}}}}}}}}}if(t){f.control.messaging.queue.prepend(t)
}f.status=s
},post:function(u,z,H,C,G){var F=2,t={},v=z.method==="zemanta.preferences"||z.method==="zemanta.suggest",E=z.method==="zemanta.preferences"&&"preferences"||z.method==="zemanta.suggest"&&"suggestions",s="",B="",I=null;
if(typeof C==="number"){G=C;
C=null}C=C||function(){};
G=G||1;function x(J){h(function(){f.post(u,z,H,C,G+1)
},100+Math.floor(Math.random()*100))
}function D(J,K){if(v){f._set_status(6,K)
}if(!K&&z.method==="zemanta.preferences"){i("#zemanta-message").html(f.microcopy.loading_preferences_failed+" ").append(i('<a href="#">'+f.microcopy.retry+"</a>").css("cursor","pointer").on("click",function(){i("#zemanta-message").html(f.microcopy.loading_preferences);
f.post(u,z,H,C)
}))}C(J)}function y(){if(G<=F){f.log("Silent retry "+G);
x("silentError, less than 2 tries")
}else{D("error")
}}function w(K,L,J){if(G<=F){f.log(K+" - retry "+G,L);
x("handleError, less than 2 tries")
}else{C("error",J)
}}function A(N,J){var L=N.readyState,K=N.status,M=null;
if(J==="timeout"){f.log("timeout happened");
f.control.cancel_update();
return D("timeout",{text:"The connection timed out - sure you're online?",type:"warning",errortype:2})
}if(L!==4){J="error"
}else{if(N.responseText==="<h1>403 Developer Over Rate</h1>"||N.responseText==="<h1>403 Developer Inactive</h1>"){J="error";
K=403}}f.log("handleResponse "+J+", readyState: "+N.readyState+", status: "+N.status);
if(J==="error"){if(K===403&&N.responseText==="<h1>403 Developer Over Rate</h1>"){f.log("Developer Over Rate",N);
i("#zemanta-control-update, #zemanta-refine").hide();
return D("error",{text:"It seems that you've gone over quota.",nodismiss:true,type:"warning",errortype:5})
}else{if(K===403&&N.responseText==="<h1>403 Developer Inactive</h1>"){f.log("Developer Inactive",N);
i("#zemanta-control-update, #zemanta-refine").hide();
return D("error",{text:"We're experiencing technical difficulties at the moment, Zemanta will be back shorty.",nodismiss:true,type:"warning",errortype:5})
}else{M=(/<body>(.*)<\/body>/g).exec(N.responseText||"");
M=M&&M[1]||(N.responseText||"").substr(0,100);
return w("Transport "+J+" "+K+" on "+z.method+": "+M,{xhr:N,status:J,readystate:L,httpstatus:K},{text:"We had a problem fetching the "+E+" - you might want to try again later.",type:"warning",errortype:1})
}}}else{if(K===200){f._lasttransport[z.method]=N.responseText;
f._lastresponse[z.method]=i.extend(true,{},N.responseObject);
if(!N.responseObject){return w("Empty content",null,{text:"The "+E+" we got back were empty - you might want to try again later.",type:"warning",errortype:3})
}J=H(N.responseObject);
if(J==="error"){return w("Illegal content",null,{text:"There was an error getting "+E+" - you might want to try again later.",type:"warning",errortype:3})
}}else{return w("Invalid response on "+z.method+": "+K,{xhr:N,status:J,readystate:L,httpstatus:K},{text:"Unknown error happened while fetching "+E+" - you might want to try again later.",type:"warning",errortype:6})
}}}if(z.method==="zemanta.suggest"&&z.sourcecall===undefined){f._set_status(1)
}else{if(z.method==="zemanta.suggest"&&z.sourcecall===true){f._set_status(4);
delete z.sourcecall
}}B=f.helpers.object_to_query(z);
s=!f.platform.allow_get||(u+"?"+B).length>2000?"POST":"GET";
t={method:s,url:u,data:z,onload:function(K,J){A(K,J)
}};f._lastrequest[z.method]=i.extend(true,{},{data:z,send:t});
f.load(t)},events:d,gallery:a.ZemantaGallery&&a.ZemantaGallery(f),articles:a.ZemantaArticles&&a.ZemantaArticles(f),links:a.ZemantaLinks&&a.ZemantaLinks(f),tags:a.ZemantaTags&&a.ZemantaTags(f),control:a.ZemantaControl(f),platform:a.ZemantaPlatform(f),helpers:a.ZemantaHelpers,transport:a.ZemantaTransport(f),$:i};
(function(){var t={},u={noError:["no-error","No error."],transportInit:["initialize-transport-failed",'Transport failure. If this happens a lot write us! <a href="mailto:support@zemanta.com">support@zemanta.com</a>.'],transportInitTimeout:["initialize-transport-timeout",'Transport failure. If this happens a lot write us! <a href="mailto:support@zemanta.com">support@zemanta.com</a>.'],transportLoad:["load-transport-failed",'Transport failure. If this happens a lot write us! <a href="mailto:support@zemanta.com">support@zemanta.com</a>.'],widgetEditorNotFound:["initialize-editor-not-found","Editor not found."],widgetSidebarNotFound:["initialize-sidebar-not-found","Sidebar not found."]},s=null;
for(s in u){if(u.hasOwnProperty(s)){t[u[s][0]]=u[s][1];
u[s]=u[s][0]
}}r.errorString=function(v){if(typeof(v)==="undefined"){v=f.init_error
}return t[v]||"Unknown error."
};r.error=u;
r.init_error=r.error.noError
})();return r
}());i.zemanta=f;
i.fn.zemanta=function(r){f.initialize(r);
return this
};d.init(f);
f.helpers.storage.init();
a.Zemanta=f
}try{b(a.zQuery)
}catch(c){if(a.Zemanta){Zemanta.log(c)
}throw c;zemantaStart.tries=zemantaStart.tries+1||1;
zemantaStart.timeout=zemantaStart.timeout*2||100;
if(zemantaStart.tries<=10){a.setTimeout(function(){zemantaStart(a)
},zemantaStart.timeout)
}return}}(window));
(function platformInit(j){var e=null,b=null,g=null,k=null,a={trigger:function(){}},m=(function(){var p={},o=100,n=1000;
return function(r,q){q=q||{};
var t=p[r],s=q&&typeof q.inc==="function";
if(!t){t=q.def||o
}else{if(s){t=q.inc(t)
}else{t+=(q.inc||o)
}t=Math.min(t,q.max||n)
}p[r]=t;return t
}}()),d=j.setTimeout,c=j.Zemanta;
function f(n,o){return n.zextend(o,{widget_version:4,platform:{articles_with_images:true,horizontal_articles:true,disable_messages:true,animate_enabled:true,never_hide_search:true,big_article_preview:false,opportunities_disabled:true,sources_enabled:false,disable_draggable_resize:true,article_thumbnail_suffix:"_150_150.jpg",article_thumbnail_default_count:15,article_list_item_template:function(p){return ZemantaHelpers.ZTemplate('<li id="zemart-{hash}" class="'+p+'{selection}">{promoted}{own_post}<p class="zemanta-article-title"><span>{title}</span></p><p class="zemanta-article-date-source"><span class="zemanta-article-date">{date}</span></p><a class="zemanta-article-date-source zemanta-article-source" target="_blank" title="Open {article_url} in New Window" href="{article_url}"><span class="zemanta-article-source ext">{hostname}</span></a><div class="zemanta-selector"></div></li>')
},control_setHTML:function(s,w,v,q){var t=arguments.callee.original(s,w,v,q),p=q&&' target="_blank"'||"",u=v&&' rel="nofollow"'||"";
t.doctype_image1="";
t.doctype_image2="";
t.doctype_image3="";
c.platform.gallery_template_item='<div class="mceTemp"><dl class="wp-caption align'+w+' zemanta-img"><dt class="wp-caption-dt"><a href="{source_url}"'+u+p+'><img src="{src}" alt="{alt}" title="{alt}" class="zemanta-img-inserted" /></a></dt><dd class="wp-caption-dd zemanta-img-attribution">{attribution}</dd></dl></div>';
c.platform.articles_template_wrapper='<h3 class="zemanta-related-title"'+((s==="1")?"":' style="margin:0 0 10px 0;padding:0;clear:both;"')+">"+(c._preferences.article_layout_title||"Related articles across the web")+'</h3><ul class="zemanta-article-ul" style="overflow:hidden;clear:both;"></ul>';
c.platform.articles_with_image_template_wrapper='<h3 class="zemanta-related-title"'+((s==="1")?"":' style="margin:0 0 10px 0;padding:0;clear:both;"')+">"+(c._preferences.article_layout_title||"Related articles across the web")+'</h3><ul class="zemanta-article-ul" style="overflow:hidden;clear:both;"></ul>';
c.platform.articles_with_image_template_item='<li style="padding: 0; background: none; list-style: none; display: block; float: left; vertical-align: top; text-align: left; width: 104px; font-size:12px; margin: 0 5px 10px 0;" class="zemanta-article-ul-li-image zemanta-article-ul-li{hash}"><a '+u+p+' href="{article_url}" target="_blank" style="padding: 2px; display: block; text-decoration: none;" ><img style="border-radius:3px; box-shadow:0 1px 4px rgba(0, 0, 0, 0.2);padding: 0; margin: 0; border: 0; display: block; width: 100px; max-width: 100%;" src="http://i.zemanta.com/{article_id}_150_150.jpg"/></a><a '+u+p+' href="{article_url}" target="_blank" style="display: block; overflow:hidden; text-decoration: none; line-height: 12pt; height: 80px; padding: 5px 2px 0 2px;">{title}</a></li>';
return t},horizontalArticlesPopups:function(t,s,u,p){var q=0,r=300;
if(!n(".zemanta-article-desc",p).length){console.log(t);
n('<div class="zemanta-article-desc"><h6>'+t.title+"</h6>"+(t.pc===2?"<span>Promoted</span>":"")+"<p>"+t.text_preview+'</p><a href="'+t.url+'" target="_blank">'+t.hostname+"</a></div>").appendTo(p)
}popup_left=parseInt(p.css("left"),10)+q;
p.css({width:r,left:popup_left})
},move_to_start:function(r){var p=n(r).prevAll("p, br"),q=null;
if(p.length>0&&n(r).nextAll().length!==0){q=p[0];
if(q!==n(r).prev().get(0)){n(r).insertAfter(q)
}}else{p=n(r).parents("p");
if(p.length&&n(r)[0].nextSibling!==null){q=p[0];
if(q.firstChild!==r){n(r).insertBefore(q)
}}}},get_editor:function(p){var v=null,t=null,s=null,q={element:null,property:null,type:null,win:null},r={};
try{n("#wp-content-editor-container").each(function(){t=n("iframe",this);
s=t.prop("contentWindow");
v=n("textarea",this).get(0);
r={rte:{element:s&&s.document.body,property:"innerHTML",type:"RTE",win:s,frame:t},plain:{element:v,property:"value",type:v&&v.tagName.toLowerCase(),win:null,frame:n(v)}};
if(n("#wp-content-wrap").hasClass("tmce-active")){q=r.rte
}else{if(n("#wp-content-wrap").hasClass("html-active")){q=r.plain
}else{t=n("#content");
v=t.get(0);
q={element:v,property:"value",type:v&&v.tagName.toLowerCase(),win:null,frame:t};
r={plain:q}
}}})}catch(u){c.log(u)
}return p?{active:q,all:r}:q
},filter_zemanta:function(p){return p.find(".zemanta-img, .zemanta-action-click, .zemanta-img-attribution, .wp-caption, .zemanta-related, .zemanta-related-title, .zemanta-article-ul, .zemanta-article-ul-li, .zemanta-pixie, .zemanta-pixie-a, .zemanta-pixie-img, #zemanta-pixie, .zemanta-reblog-cite, #zemanta-pixie-img").remove().end().find("a.zem_slink, a.zem_olink").each(function(){n(this).replaceWith(c.helpers.create_fragment(n(this).html(),p.getDoc()))
}).end().fin()
},filter_dom:function(q,p){q.find(".zemanta-img .wp-caption-dd").not(".zemanta-img-attribution").addClass("zemanta-img-attribution");
if(p==="RTE"){q=c._rte_filterHTML(q,1)
}return q},get_post_url:function(q){q=q||function(w){return w
};var v=typeof j.ZemantaPostID==="function"?j.ZemantaPostID():"",s=n('#post_ID[name="post_ID"]').val(),r=n("#sample-permalink"),t="",u="",p="";
if(v){v=v.wp||v;
return q("http://wp.me/"+v)
}else{if(r.length){if(n("#editable-post-name-full",r).length){u=n("#editable-post-name",r).html();
n("#editable-post-name",r).html("");
p=r.text();
n("#editable-post-name",r).html(u)
}else{if(n("#editable-post-name-full").length){u=n("#editable-post-name",r).html();
n("#editable-post-name",r).html(n("#editable-post-name-full").html());
p=r.text();
n("#editable-post-name",r).html(u)
}else{p=r.text()
}}if(p){return q(p)
}}else{if(!s){return null
}t=j.location.href.split("wp-admin")[0];
return q(t+"?p="+s)
}}return null
},widget_nonrte_screen:function(){var q=c.control.interface_compose_text||"Visual",r=!n("#edButtonPreview").length,p=n("#zemanta-disabled");
if(p.hasClass("zemanta-nonrte")){return p.find("#zemanta-disabled-more").hide().end().find("#zemanta-disabled-less").show().end().fin()
}else{p.remove();
return n('<div id="zemanta-disabled" class="zemanta-nonrte"></div>').html("").append(n('<div class="zemanta-disabled-back"></div><div id="zemanta-disabled-wrap"><div id="zemanta-disabled-content" class="zemanta-tip"><h3>Zemanta is inactive!</h3><p id="zemanta-disabled-less">You need to write your blog post in <strong>'+q+"</strong> mode for Zemanta to work!</p>"+(r&&'<p id="zemanta-disabled-more" class="more">Go to <a href="users.php?page=grofiles-user-settings#rich_editing">your user profile</a> and enable "Visual Editor". Then <a href="'+j.location.href+'" rel="section">reload this page</a>. <a href="#zemanta-disabled-less" rel="subsection">Go back</a></p>'||"")+"<p></p></div></div>").find("a").click(function(u){var v=n(this),t=v.attr("rel"),s=v.attr("hash");
if(s.indexOf("#")===0&&t==="subsection"){u.preventDefault();
n(s).show(300);
v.parent("p").hide(300)
}else{if(t!=="section"&&t!=="subsection"){u.preventDefault();
j.open(v.attr("href"))
}}}).end()).fin()
}},widget_firstvisit_screen:function(p,q){p.html('<div id="zemanta-initial-wrap"><p>Related content will appear here.</p></div>')
},widget_returnvisit_screen:function(p,q){p.html('<div id="zemanta-initial-wrap"><p>Related content will appear here.</p></div>')
},links_initialize:function(){var p='<div id="zemanta-links"><h2 class="vertical"><span class="zemanta-links-title">In-text Links</span><a class="zemanta-help" href="http://www.zemanta.com/faq/quickhelp/?links#faqid-60">?</a></h2><ul id="zemanta-links-div-ul"><li class="zemanta-title"><span>Link recommendations will appear here</span></li></ul><p class="zem-clear">&nbsp;</p></div>';
if(n.zemanta.rte_type==="textarea"){n("#zemanta-sidebar").after(p)
}else{n("#zemanta-sidebar").before(p)
}},links_all:function(){if(c.links._links.length===0){n("#zemanta-links-div-ul").append('<li class="zemanta-title"><span>No links found</span></li>')
}}},init:function(p){c.microcopy.loading_preferences="Loading...";
c.bind("preferencesReceived",function(u,t){c._preferences.article_layout_title="Related articles across the web";
t.disable_gallery=true
}).bind("preferencesProcessed",function(){c.preferences.image_types="flickr wikipedia amazon snooth crunchbase mybloglog facebook twitter";
c.preferences.bp=n("#zemanta-sidebar").parents(".postbox").prevAll(".postbox").length+1;
c.preferences.bt=Math.floor((n("#zemanta-sidebar").offset()||{}).top)
}).bind("controlInitialized",function(){n("#zemanta-control").show()
}).one("firstvisitScreen",function(){n("#zemanta-control").show()
}).one("refineInitialized",function(){var t="Search related content...";
n("#zemanta-refine-input").focus(function(){if(n(this).val()===t){n(this).val("")
}}).blur(function(){if(n(this).val().length<1){n(this).val(t)
}}).val(t)});
a=p;var q=n("#content-tmce"),r=n("#content-html"),s=function(){n("img",(c.platform.get_editor().element)).each(function(){var x=n(this),w=["url_m","url_s"],y=x.attr("src"),u=null,v=0,A=w.length,z=x.hasClass("zemanta-img-inserted"),t=x.closest(".wp-caption");
for(;v<A;v++){u=z||c.helpers.object_search(c.gallery._images,w[v],y);
if(u){t.addClass("zemanta-img");
t.find(".wp-caption-dd:not(.zemanta-img-attribution)").addClass("zemanta-img-attribution");
if(!z){x.addClass("zemanta-img-inserted")
}break}}});
if(tinyMCE&&tinyMCE.activeEditor){tinyMCE.activeEditor.isNotDirty=1
}};c.control.interface_compose_text=q.text()||"Visual";
if(!q.length||!r.length){}n("#zemanta-tools").css("margin-top","4em");
c.bind("editorRich",s);
c.one("widgetReady",s);
if(b===null&&g===null&&k===null){b=c.links._select;
g=c.gallery._select;
k=c.articles._select;
c.links._select=function(u,t,v){return b.apply(c.links,arguments)
};c.gallery._select=function(u,t,v){return g.apply(c.gallery,arguments)
};c.articles._select=function(v,u,x,w,t){return k.apply(c.articles,arguments)
}}}})}function i(o){var n=null;
if(e){n=e("#zemanta-message").unbind("click").bind("click",function(){e(this).find("#zemanta-error").toggle()
});if(n.find("#zemanta-error").length===0){n=n.append('<div id="zemanta-error" style="display:none;">'+o+"</div>")
}else{if(n.find("#zemanta-error").html()!==o){n.find("#zemanta-error").html(o)
}}}}function h(){var n=false,p=null,o=0;
if(typeof c==="undefined"){e("#zemanta-message").html("Waiting...");
d(h,m("Zemanta"));
return}p=h.t0=h.t0||new Date().getTime();
e("#zemanta-message").html("Initializing...");
try{n=c.initialize(f(e,{interface_type:"wordpress-zem",gallery_width:4,tags_target_id:"tax-input-post_tag"}))
}catch(q){n=true;
i(q.toString())
}if(!n){if(new Date().getTime()-p<30000){d(h,m("init"))
}else{e("#zemanta-message").html(c.errorString()).append(e('<a href="#" style="margin-left:2px;">Retry</a>').click((function(r){return function(s){r.t0=null;
r();s.preventDefault()
}})(h)))}}else{j.jQuery("#zemanta-sidebar").bind("ajaxComplete",function(s,t,r){var u=e('#post_ID[name="post_ID"]')[0];
if(u){c.platform.get_post_url(c.control.published_ping)
}})}}try{e=j.zQuery;
if(!e){throw"No zQuery!"
}e("#zemanta-articles").addClass("articles-only");
e("#zemanta-gallery").remove();
if(e("#zemanta-message").html()==="Loading..."){e("#zemanta-message").html("Preparing...")
}e.readyOrDone(function(o){o("#edButtonPreview, #edButtonHTML").mousedown(function(){c.switching=true
}).mouseup(function(){d(function(){c.switching=false
},100)});function p(q){return typeof q==="string"&&q||c.platform.set_html(q.html(),true)
}(function n(){n.time=(n.time||25)*2;
n.tries=(n.tries||0)+1;
try{j.tinyMCE.activeEditor.onSaveContent.add(function(r,s){s.content=p(s.content)
})}catch(q){if(n.tries<10){d(n,n.time)
}}})();o("#title").change(function(){var q=j.jQuery("#edit-slug-box"),r=q.html();
q.empty();if(typeof j.autosave_update_slug==="function"){j.autosave_update_slug(o('#post_ID[name="post_ID"]').val())
}q.html(r)})
});h()}catch(l){i(l.toString());
j.setTimeout(function(){platformInit(j)
},m("error",{def:500,inc:250}));
return}})(window);