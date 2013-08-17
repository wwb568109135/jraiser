/*!
 * jRaiser 2 Javascript Library
 * sizzle - v1.10.5 (2013-08-17T18:07:02+0800)
 * http://jraiser.org/ | Released under MIT license
 *
 * Include sizzle (http://sizzlejs.com/)
 */
define("sizzle/1.10.x/",null,function(e,t,n){function ot(e,t,n,r){var s,o,u,a,f,l,c,d,g,y;(t?t.ownerDocument||t:E)!==p&&h(t),t=t||p,n=n||[];if(!e||typeof e!="string")return n;if((a=t.nodeType)!==1&&a!==9)return[];if(v&&!r){if(s=Z.exec(e))if(u=s[1]){if(a===9){o=t.getElementById(u);if(!o||!o.parentNode)return n;if(o.id===u)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(u))&&b(t,o)&&o.id===u)return n.push(o),n}else{if(s[2])return H.apply(n,t.getElementsByTagName(e)),n;if((u=s[3])&&i.getElementsByClassName&&t.getElementsByClassName)return H.apply(n,t.getElementsByClassName(u)),n}if(i.qsa&&(!m||!m.test(e))){d=c=w,g=t,y=a===9&&e;if(a===1&&t.nodeName.toLowerCase()!=="object"){l=mt(e),(c=t.getAttribute("id"))?d=c.replace(nt,"\\$&"):t.setAttribute("id",d),d="[id='"+d+"'] ",f=l.length;while(f--)l[f]=d+gt(l[f]);g=$.test(e)&&t.parentNode||t,y=l.join(",")}if(y)try{return H.apply(n,g.querySelectorAll(y)),n}catch(S){}finally{c||t.removeAttribute("id")}}}return Nt(e.replace(W,"$1"),t,n,r)}function ut(){function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}var e=[];return t}function at(e){return e[w]=!0,e}function ft(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&e.nodeType===1&&t.nodeType===1&&(~t.sourceIndex||O)-(~e.sourceIndex||O);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ht(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function dt(e){return at(function(t){return t=+t,at(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function vt(){}function mt(e,t){var n,r,i,s,u,a,f,l=N[e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=o.preFilter;while(u){if(!n||(r=X.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(i=[]);n=!1;if(r=V.exec(u))n=r.shift(),i.push({value:n,type:r[0].replace(W," ")}),u=u.slice(n.length);for(s in o.filter)(r=G[s].exec(u))&&(!f[s]||(r=f[s](r)))&&(n=r.shift(),i.push({value:n,type:s,matches:r}),u=u.slice(n.length));if(!n)break}return t?u.length:u?ot.error(e):N(e,a).slice(0)}function gt(e){var t=0,n=e.length,r="";for(;t<n;t++)r+=e[t].value;return r}function yt(e,t,n){var r=t.dir,i=n&&r==="parentNode",o=x++;return t.first?function(t,n,s){while(t=t[r])if(t.nodeType===1||i)return e(t,n,s)}:function(t,n,u){var a,f,l,c=S+" "+o;if(u){while(t=t[r])if(t.nodeType===1||i)if(e(t,n,u))return!0}else while(t=t[r])if(t.nodeType===1||i){l=t[w]||(t[w]={});if((f=l[r])&&f[0]===c){if((a=f[1])===!0||a===s)return a===!0}else{f=l[r]=[c],f[1]=e(t,n,u)||s;if(f[1]===!0)return!0}}}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function wt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function Et(e,t,n,r,i,s){return r&&!r[w]&&(r=Et(r)),i&&!i[w]&&(i=Et(i,s)),at(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||Tt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?wt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=wt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?j.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=wt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):H.apply(o,g)})}function St(e){var t,n,r,i=e.length,s=o.relative[e[0].type],u=s||o.relative[" "],a=s?1:0,f=yt(function(e){return e===t},u,!0),c=yt(function(e){return j.call(t,e)>-1},u,!0),h=[function(e,n,r){return!s&&(r||n!==l)||((t=n).nodeType?f(e,n,r):c(e,n,r))}];for(;a<i;a++)if(n=o.relative[e[a].type])h=[yt(bt(h),n)];else{n=o.filter[e[a].type].apply(null,e[a].matches);if(n[w]){r=++a;for(;r<i;r++)if(o.relative[e[r].type])break;return Et(a>1&&bt(h),a>1&&gt(e.slice(0,a-1).concat({value:e[a-2].type===" "?"*":""})).replace(W,"$1"),n,a<r&&St(e.slice(a,r)),r<i&&St(e=e.slice(r)),r<i&&gt(e))}h.push(n)}return bt(h)}function xt(e,t){var n=0,r=t.length>0,i=e.length>0,u=function(u,a,f,c,h){var d,v,m,g=[],y=0,b="0",w=u&&[],E=h!=null,x=l,T=u||i&&o.find.TAG("*",h&&a.parentNode||a),N=S+=x==null?1:Math.random()||.1,C=T.length;E&&(l=a!==p&&a,s=n);for(;b!==C&&(d=T[b])!=null;b++){if(i&&d){v=0;while(m=e[v++])if(m(d,a,f)){c.push(d);break}E&&(S=N,s=++n)}r&&((d=!m&&d)&&y--,u&&w.push(d))}y+=b;if(r&&b!==y){v=0;while(m=t[v++])m(w,g,a,f);if(u){if(y>0)while(b--)!w[b]&&!g[b]&&(g[b]=D.call(c));g=wt(g)}H.apply(c,g),E&&!u&&g.length>0&&y+t.length>1&&ot.uniqueSort(c)}return E&&(S=N,l=x),w};return r?at(u):u}function Tt(e,t,n){var r=0,i=t.length;for(;r<i;r++)ot(e,t[r],n);return n}function Nt(e,t,n,r){var s,u,a,l,c,h=mt(e);if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(a=u[0]).type==="ID"&&i.getById&&t.nodeType===9&&v&&o.relative[u[1].type]){t=(o.find.ID(a.matches[0].replace(rt,it),t)||[])[0];if(!t)return n;e=e.slice(u.shift().value.length)}s=G.needsContext.test(e)?0:u.length;while(s--){a=u[s];if(o.relative[l=a.type])break;if(c=o.find[l])if(r=c(a.matches[0].replace(rt,it),$.test(u[0].type)&&t.parentNode||t)){u.splice(s,1),e=r.length&&gt(u);if(!e)return H.apply(n,r),n;break}}}return f(e,h)(r,t,!v,n,$.test(e)),n}var r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w="sizzle"+ -(new Date),E=window.document,S=0,x=0,T=ut(),N=ut(),C=ut(),k=!1,L=function(e,t){return e===t?(k=!0,0):0},A=typeof undefined,O=1<<31,M={}.hasOwnProperty,_=[],D=_.pop,P=_.push,H=_.push,B=_.slice,j=_.indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},F="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",I="[\\x20\\t\\r\\n\\f]",q="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",R=q.replace("w","w#"),U="\\["+I+"*("+q+")"+I+"*(?:([*^$|!~]?=)"+I+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+R+")|)|)"+I+"*\\]",z=":("+q+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+U.replace(3,8)+")*)|.*)\\)|)",W=new RegExp("^"+I+"+|((?:^|[^\\\\])(?:\\\\.)*)"+I+"+$","g"),X=new RegExp("^"+I+"*,"+I+"*"),V=new RegExp("^"+I+"*([>+~]|"+I+")"+I+"*"),$=new RegExp(I+"*[+~]"),J=new RegExp("="+I+"*([^\\]'\"]*)"+I+"*\\]","g"),K=new RegExp(z),Q=new RegExp("^"+R+"$"),G={ID:new RegExp("^#("+q+")"),CLASS:new RegExp("^\\.("+q+")"),TAG:new RegExp("^("+q.replace("w","w*")+")"),ATTR:new RegExp("^"+U),PSEUDO:new RegExp("^"+z),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+I+"*(even|odd|(([+-]|)(\\d*)n|)"+I+"*(?:([+-]|)"+I+"*(\\d+)|))"+I+"*\\)|)","i"),bool:new RegExp("^(?:"+F+")$","i"),needsContext:new RegExp("^"+I+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+I+"*((?:-\\d)?\\d*)"+I+"*\\)|)(?=[^-]|$)","i")},Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=new RegExp("\\\\([\\da-f]{1,6}"+I+"?|("+I+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,r&1023|56320)};try{H.apply(_=B.call(E.childNodes),E.childNodes),_[E.childNodes.length].nodeType}catch(st){H={apply:_.length?function(e,t){P.apply(e,B.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}a=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},i=ot.support={},h=ot.setDocument=function(e){var t=e?e.ownerDocument||e:E,n=t.defaultView;if(t===p||t.nodeType!==9||!t.documentElement)return p;p=t,d=t.documentElement,v=!a(t),n&&n.attachEvent&&n!==n.top&&n.attachEvent("onbeforeunload",function(){h()}),i.attributes=ft(function(e){return e.className="i",!e.getAttribute("className")}),i.getElementsByTagName=ft(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),i.getElementsByClassName=ft(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",e.getElementsByClassName("i").length===2}),i.getById=ft(function(e){return d.appendChild(e).id=w,!t.getElementsByName||!t.getElementsByName(w).length}),i.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==A&&v){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=i.getElementsByTagName?function(e,t){if(typeof t.getElementsByTagName!==A)return t.getElementsByTagName(e)}:function(e,t){var n,r=[],i=0,s=t.getElementsByTagName(e);if(e==="*"){while(n=s[i++])n.nodeType===1&&r.push(n);return r}return s},o.find.CLASS=i.getElementsByClassName&&function(e,t){if(typeof t.getElementsByClassName!==A&&v)return t.getElementsByClassName(e)},g=[],m=[];if(i.qsa=Y.test(t.querySelectorAll))ft(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||m.push("\\["+I+"*(?:value|"+F+")"),e.querySelectorAll(":checked").length||m.push(":checked")}),ft(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&m.push("[*^$]="+I+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")});return(i.matchesSelector=Y.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ft(function(e){i.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),g.push("!=",z)}),m=m.length&&new RegExp(m.join("|")),g=g.length&&new RegExp(g.join("|")),b=Y.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!r&&r.nodeType===1&&!!(n.contains?n.contains(r):e.compareDocumentPosition&&e.compareDocumentPosition(r)&16)}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},L=d.compareDocumentPosition?function(e,n){if(e===n)return k=!0,0;var r=n.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(n);if(r)return r&1||!i.sortDetached&&n.compareDocumentPosition(e)===r?e===t||b(E,e)?-1:n===t||b(E,n)?1:c?j.call(c,e)-j.call(c,n):0:r&4?-1:1;return e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,s=e.parentNode,o=n.parentNode,u=[e],a=[n];if(e===n)return k=!0,0;if(!s||!o)return e===t?-1:n===t?1:s?-1:o?1:c?j.call(c,e)-j.call(c,n):0;if(s===o)return ct(e,n);r=e;while(r=r.parentNode)u.unshift(r);r=n;while(r=r.parentNode)a.unshift(r);while(u[i]===a[i])i++;return i?ct(u[i],a[i]):u[i]===E?-1:a[i]===E?1:0},t},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){(e.ownerDocument||e)!==p&&h(e),t=t.replace(J,"='$1']");if(i.matchesSelector&&v&&(!g||!g.test(t))&&(!m||!m.test(t)))try{var n=y.call(e,t);if(n||i.disconnectedMatch||e.document&&e.document.nodeType!==11)return n}catch(r){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&h(e),b(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&h(e);var n=o.attrHandle[t.toLowerCase()],r=n&&M.call(o.attrHandle,t.toLowerCase())?n(e,t,!v):undefined;return r===undefined?i.attributes||!v?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null:r},ot.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,n=[],r=0,s=0;k=!i.detectDuplicates,c=!i.sortStable&&e.slice(0),e.sort(L);if(k){while(t=e[s++])t===e[s]&&(r=n.push(s));while(r--)e.splice(n[r],1)}return e},u=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(!i)for(;t=e[r];r++)n+=u(t);else if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=u(e)}else if(i===3||i===4)return e.nodeValue;return n},o=ot.selectors={cacheLength:50,createPseudo:at,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1].slice(0,3)==="nth"?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*(e[3]==="even"||e[3]==="odd")),e[5]=+(e[7]+e[8]||e[3]==="odd")):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return G.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&K.test(n)&&(t=mt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return e==="*"?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=T[e+" "];return t||(t=new RegExp("(^|"+I+")"+e+"("+I+"|$)"))&&T(e,function(e){return t.test(typeof e.className=="string"&&e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return i==null?t==="!=":t?(i+="",t==="="?i===n:t==="!="?i!==n:t==="^="?n&&i.indexOf(n)===0:t==="*="?n&&i.indexOf(n)>-1:t==="$="?n&&i.slice(-n.length)===n:t==="~="?(" "+i+" ").indexOf(n)>-1:t==="|="?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var s=e.slice(0,3)!=="nth",o=e.slice(-4)!=="last",u=t==="of-type";return r===1&&i===0?function(e){return!!e.parentNode}:function(t,n,a){var f,l,c,h,p,d,v=s!==o?"nextSibling":"previousSibling",m=t.parentNode,g=u&&t.nodeName.toLowerCase(),y=!a&&!u;if(m){if(s){while(v){c=t;while(c=c[v])if(u?c.nodeName.toLowerCase()===g:c.nodeType===1)return!1;d=v=e==="only"&&!d&&"nextSibling"}return!0}d=[o?m.firstChild:m.lastChild];if(o&&y){l=m[w]||(m[w]={}),f=l[e]||[],p=f[0]===S&&f[1],h=f[0]===S&&f[2],c=p&&m.childNodes[p];while(c=++p&&c&&c[v]||(h=p=0)||d.pop())if(c.nodeType===1&&++h&&c===t){l[e]=[S,p,h];break}}else if(y&&(f=(t[w]||(t[w]={}))[e])&&f[0]===S)h=f[1];else while(c=++p&&c&&c[v]||(h=p=0)||d.pop())if((u?c.nodeName.toLowerCase()===g:c.nodeType===1)&&++h){y&&((c[w]||(c[w]={}))[e]=[S,h]);if(c===t)break}return h-=i,h===r||h%r===0&&h/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[w]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=j.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=f(e.replace(W,"$1"));return r[w]?at(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||u(t)).indexOf(e)>-1}}),lang:at(function(e){return Q.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=v?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||n.indexOf(e+"-")===0;while((t=t.parentNode)&&t.nodeType===1);return!1}}),target:function(e){var t=window.location&&window.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===d},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||e.nodeType===3||e.nodeType===4)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},text:function(e){var t;return e.nodeName.toLowerCase()==="input"&&e.type==="text"&&((t=e.getAttribute("type"))==null||t.toLowerCase()===e.type)},first:dt(function(){return[0]}),last:dt(function(e,t){return[t-1]}),eq:dt(function(e,t,n){return[n<0?n+t:n]}),even:dt(function(e,t){var n=0;for(;n<t;n+=2)e.push(n);return e}),odd:dt(function(e,t){var n=1;for(;n<t;n+=2)e.push(n);return e}),lt:dt(function(e,t,n){var r=n<0?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:dt(function(e,t,n){var r=n<0?n+t:n;for(;++r<t;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(r in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[r]=ht(r);for(r in{submit:!0,reset:!0})o.pseudos[r]=pt(r);vt.prototype=o.filters=o.pseudos,o.setFilters=new vt,f=ot.compile=function(e,t){var n,r=[],i=[],s=C[e+" "];if(!s){t||(t=mt(e)),n=t.length;while(n--)s=St(t[n]),s[w]?r.push(s):i.push(s);s=C(e,xt(i,r))}return s},i.sortStable=w.split("").sort(L).join("")===w,i.detectDuplicates=k,h(),i.sortDetached=ft(function(e){return e.compareDocumentPosition(p.createElement("div"))&1}),ft(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild.getAttribute("href")==="#"})||lt("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,t.toLowerCase()==="type"?1:2)}),(!i.attributes||!ft(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),e.firstChild.getAttribute("value")===""}))&&lt("value",function(e,t,n){if(!n&&e.nodeName.toLowerCase()==="input")return e.defaultValue}),ft(function(e){return e.getAttribute("disabled")==null})||lt(F,function(e,t,n){var r;if(!n)return(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),n.exports=ot})