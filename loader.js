// Barra real: 4 pasos (hoja de fuentes, Press Start 2P, VT323, fuente aplicada). Si algo falla, reintenta solo.
(function(){
var F=['Press Start 2P','VT323'],T='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ÁÉÍÓÚÜÑáéíóúüñ¿¡?!.,:;·/()-+_%>',
SRC=['https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=block','https://fonts.bunny.net/css?family=press-start-2p:400|vt323:400&display=block'],
S={c:0,a:0,b:0,r:0,p:0},fin=false,att=0,last=-1,rt=0,wd,lf=document.getElementById('lf'),ld=document.getElementById('load'),sp=document.getElementById('sp');
[[3,0],[4,0],[5,1],[6,2],[6,3],[6,4],[5,5],[4,6],[3,6],[2,6],[1,5],[0,4],[0,3],[0,2],[1,1],[2,0]].forEach(function(c,i){var e=document.createElement('span');e.style.left=c[0]*8+'px';e.style.top=c[1]*8+'px';e.style.animationDelay=(i*.08-1.28).toFixed(2)+'s';sp.appendChild(e)});
function n(){return S.c+S.a+S.b+S.r}
// v8_3: la pantalla de carga NO se quita hasta que la página ya terminó de armarse (así los botones de idioma responden al primer toque)
function hideLd(){
 if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',hideLd);return}
 setTimeout(function(){ld.style.display='none'},350)
}
function prog(){
 lf.style.width=(n()*25)+'%';
 if(n()===4&&!fin){fin=true;clearInterval(wd);sp.style.display='none';hideLd()}
}
function applied(){
 try{var c=document.createElement('canvas').getContext('2d'),s='mmmmWWWWiiii',w;
  return F.every(function(f){c.font='32px monospace';w=c.measureText(s).width;c.font='32px "'+f+'",monospace';return c.measureText(s).width!==w});
 }catch(e){return true}
}
function verify(){
 var k=0;(function p(){if(applied()||++k>30){S.r=1;prog()}else setTimeout(p,100)})();
}
function check(){if(S.a&&S.b&&!S.p){S.p=1;(document.fonts.ready||Promise.resolve()).then(verify)}}
function retry(){if(rt||fin)return;rt=setTimeout(function(){rt=0;att++;start()},1500)}
function go(){
 if(!document.fonts||!document.fonts.load){S.a=S.b=S.r=1;prog();return}
 F.forEach(function(f,i){
  var k=i?'b':'a';
  document.fonts.load('16px "'+f+'"',T).then(function(r){
   if(r&&r.length&&r.every(function(x){return x.status==='loaded'})){S[k]=1;prog();check()}else retry();
  },retry);
 });
}
function start(){
 var o=document.getElementById('fcss');if(o)o.parentNode.removeChild(o);
 var l=document.createElement('link');l.id='fcss';l.rel='stylesheet';l.href=SRC[att%2];
 l.onload=function(){S.c=1;prog();go()};
 l.onerror=retry;
 document.head.appendChild(l);
}
wd=setInterval(function(){var c=n();if(c===last&&!fin&&!S.c){att++;start()}last=c},8000);
start();
})();
