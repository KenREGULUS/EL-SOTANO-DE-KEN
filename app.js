(function(){
var $=function(i){return document.getElementById(i)};
// ===== v6: IDIOMAS — el español queda tal cual (se guarda del HTML original); el inglés viene de estas tablas =====
var LANG='es',chipS=null;
var T={es:{title:'EL SÓTANO DE KEN REGULUS',enlace:'ENLACE',buscar:'BUSCAR',mostrando:'MOSTRANDO',listo:'Listo. Pulsa VERIFICAR.',poco:'Estuviste muy poco en el canal. Pulsa SUSCRIBIRME otra vez.',sus:'Suscríbete en la pestaña nueva y vuelve aquí.',verif:'Verificando...',nosub:'No encontramos tu suscripción. Suscríbete y verifica de nuevo.',nover:'No se pudo verificar. Inténtalo otra vez.',bloq:'Acceso bloqueado: navegador automatizado.',esp:'Demasiados intentos.<br>Espera {q}s.',noenc:'No encaja. Inténtalo otra vez.',pend:'(Esperando el enlace a colocar)',host:'Para compartir, la página debe estar subida a internet (hosting).',copiado:'Enlace copiado',nocopy:'No se pudo copiar: ',shtxt:'Descargas gratis de Minecraft Bedrock y Java'},
en:{title:'THE BASEMENT OF KEN REGULUS',enlace:'LINK',buscar:'SEARCH',mostrando:'SHOWING',listo:'Ready. Press VERIFY.',poco:'You spent too little time on the channel. Press SUBSCRIBE again.',sus:'Subscribe in the new tab and come back here.',verif:'Verifying...',nosub:"We couldn't find your subscription. Subscribe and verify again.",nover:"Couldn't verify. Please try again.",bloq:'Access blocked: automated browser.',esp:'Too many attempts.<br>Wait {q}s.',noenc:"It doesn't fit. Try again.",pend:'(Waiting for the link to be added)',host:'To share, the page must be uploaded online (hosting).',copiado:'Link copied',nocopy:"Couldn't copy: ",shtxt:'Free Minecraft Bedrock and Java downloads'}};
var EN={g1:'ENTER THE BASEMENT',g2:'Drag the block into the slot of the same color.',g3:'SLIDE TO FIT',hd:'THE BASEMENT OF<br><span class="rj">KEN REGULUS</span>',bsc:'SEARCH',q1:'WHICH MINECRAFT DO YOU HAVE?',q2:'WHICH VERSION?',q3:'WHAT ARE YOU LOOKING FOR?',tx:'TEXTURES',m1:'VERIFY YOUR SUBSCRIPTION',mp:'This site is free<br>and ad-free.<br><span class="sb">Subscribe</span> to <span class="kr">KEN REGULUS</span><br>to unlock the<br><span class="en">link.</span>',b1:'1. SUBSCRIBE',b2:'2. VERIFY',b3:'CANCEL',sub:'Free downloads for everyone. No ads.',fs:'SHARE THE BASEMENT',ft:'Unofficial fan site.<br>Minecraft is a trademark of:<br>Mojang Studios / Microsoft.<br><br>Made by KEN REGULUS'};
var EN_A={mn:'Menu',sh:'Share',se:'Search',sx:'Close search',vr:'Version',lg:'Language',cx:'Close'};
var TL={texturas:'TEXTURES',addons:'ADDONS',mods:'MODS',shaders:'SHADERS',inicio:'HOME',search:'SEARCH'};
Object.assign(T.es,{copiado2:'Copiado, pega el enlace en Google y descarga el archivo.',irini:'IR AL INICIO',sinres:'No encontramos nada parecido a lo que buscaste :(',fve:'Aún no has agregado archivos a favoritos',fav:'Favorito'});
Object.assign(T.en,{copiado2:'Copied, paste the link into Google and download the file.',irini:'GO TO HOME',sinres:"We couldn't find anything similar to what you searched :(",fve:"You haven't added any files to favorites yet",fav:'Favorite'});
Object.assign(EN,{hm:'HOME',fvt:'FAVORITES',rs:'Results for:',ol:'GET LINK',hh1:'WELCOME TO THE',hh2:'BASEMENT!',hx:'EXPLORE NOW',hs1:'WHAT WILL YOU FIND HERE?',t1:'Change how the game looks',t2:'New mobs and features',t3:'Cinematic light and shadows',t4:'More game for Java',hs2:'HOW DOES IT WORK?',s1:'Open the menu and pick your Minecraft and version.',s2:'Press LINK on the file you like.',s3:'Copy the link, paste it into Google and download. Done!',hs3:'DID YOU KNOW...?',tipb:'NEXT FACT',hs4:'COMMUNITY',hcm:'Subscribe to the channel, join the Discord and share the basement with your friends.',cs:'SHARE',ha:'NOTICE',hap:'Unofficial fan site. Not affiliated with Mojang Studios, Microsoft or Minecraft.',ft:'Unofficial, independent, non-profit fan site. Not affiliated with, endorsed or sponsored by Mojang Studios, Microsoft or Minecraft. MINECRAFT is a registered trademark of Mojang Studios / Microsoft; all rights belong to their owners.<br>This site does not host files: it only shares links to third-party content, whose rights belong to their authors. If you are a rights holder and want a link removed, contact us on Discord.<br>Everything is provided “as is”, without warranties; use it at your own risk.<br><br>Made by KEN REGULUS'});
Object.assign(EN_A,{fv:'Favorites'});
T.es.elige='ELIGE UN APARTADO';T.en.elige='PICK A SECTION';
function tr(k,q){var v=(T[LANG]&&T[LANG][k])||T.es[k]||k;return q===undefined?v:v.replace('{q}',q)}
function tyL(k){return LANG==='en'?TL[String(k).toLowerCase()]:String(k).toUpperCase()}
[].forEach.call(document.querySelectorAll('[data-t]'),function(e){e._es=e.innerHTML});
[].forEach.call(document.querySelectorAll('[data-ta]'),function(e){e._es=e.getAttribute('aria-label')});
function renderChip(){if(chipS)$('chip').textContent=tr('mostrando')+': '+chipS.ed.toUpperCase()+' · '+(chipS.ver?chipS.ver.toUpperCase():tr('todas'))+' · '+tyL(chipS.ty)}
function setLang(l){
 LANG=l;document.documentElement.lang=l;document.title=tr('title');
 [].forEach.call(document.querySelectorAll('[data-t]'),function(e){e.innerHTML=l==='es'?e._es:EN[e.dataset.t];fixAcc(e)});
 [].forEach.call(document.querySelectorAll('[data-ta]'),function(e){e.setAttribute('aria-label',l==='es'?e._es:EN_A[e.dataset.ta])});
 lbl();$('ttl').textContent=tyL(SEC);renderChip();if($('ver').options[0])$('ver').options[0].text=l==='en'?'ALL':'TODAS';
 [].forEach.call($('lgd').children,function(b){b.classList.toggle('sel',b.dataset.l===l)});
 if(!$('main').hidden)draw();
 try{sessionStorage.setItem('sotano_lang',l)}catch(x){}
}

var SUB='https://youtube.com/@ken_regulus';
var DISCORD='https://discord.gg/3U8UmCxmy'; // enlace de invitación a tu servidor de Discord (o solo el código de invitación)
// VERIFICACIÓN REAL DE SUSCRIPCIÓN (opcional): pega aquí tu ID de cliente OAuth de Google Cloud
// y el ID de tu canal (empieza con UC...). Vacío = modo básico (comprueba que visitaron tu canal).
var YT_CLIENT_ID='',YT_CHANNEL_ID='';
// Dirección pública final de la página (opcional). Si la página ya está en internet se detecta sola.
var SITE_URL='';
// Para añadir un enlace real: l:btoa('https://www.mediafire.com/...')   |   Inglés: pe = texto en inglés, te = título en inglés (opcional)
var C={
  // PUBLICACIONES: cada apartado tiene su lista. Para cambiar el orden, mueve la línea completa (t=título, v=versión opcional en blanco, p=texto; para el enlace agrega l:btoa('https://...')).
  texturas:[
   /* TEXTURAS #1 */ {"t": "Action And Stuff", "p": "Pack para Bedrock que mejora las animaciones al atacar, comer y usar objetos, y renueva texturas de ítems (hasta la maza en 3D). Requiere activar las funciones experimentales.", "v": "1.13", "pe": "Pack for Bedrock that improves the animations when attacking, eating and using items, and renews item textures (even the mace in 3D). Requires enabling experimental features."},
   /* TEXTURAS #2 */ {"t": "Smooth Moves Animations", "p": "Pack de animaciones para Bedrock que hace más fluidos los movimientos del jugador y de los mobs, para que el juego se vea menos rígido.", "v": "1.1", "pe": "Animation pack for Bedrock that makes player and mob movements smoother, so the game looks less stiff."},
   /* TEXTURAS #3 */ {"t": "Like The Trailers", "p": "Hace que tu Minecraft se vea como en los tráilers oficiales: luces suaves, colores vivos y un estilo limpio y cinematográfico.", "pe": "Makes your Minecraft look like the official trailers: soft lights, vivid colors and a clean, cinematic style."},
   /* TEXTURAS #4 */ {"t": "Bare Bones", "p": "Pack minimalista que simplifica las texturas del juego con colores planos y casi sin detalle, para un look limpio y ligero.", "pe": "A minimalist pack that simplifies the game's textures with flat colors and almost no detail, for a clean, lightweight look."},
   /* TEXTURAS JAVA #1 */ {"t": "Faithful 32x", "e": "Java", "mv": ["1.21.x"], "p": "Duplica la resolución de las texturas del juego (de 16x a 32x) manteniendo el estilo clásico de Minecraft. Se ve más nítido y detallado sin perder su esencia.", "pe": "Doubles the resolution of the game's textures (from 16x to 32x) while keeping Minecraft's classic style. It looks sharper and more detailed without losing its essence."},
   /* TEXTURAS JAVA #2 */ {"t": "Fresh Animations", "e": "Java", "mv": ["1.21.x"], "p": "Da animaciones nuevas y más fluidas a los mobs (caminar, atacar, mirar alrededor) sin cambiar su aspecto. Requiere los mods Entity Model Features y Entity Texture Features.", "pe": "Gives mobs new, smoother animations (walking, attacking, looking around) without changing how they look. Requires the Entity Model Features and Entity Texture Features mods."},
   /* TEXTURAS JAVA #3 */ {"t": "Stay True", "e": "Java", "mv": ["1.21.x"], "p": "Mejora las texturas del juego con más detalle y variedad, pero manteniéndose muy fiel al estilo original de Minecraft.", "pe": "Improves the game's textures with more detail and variety, while staying very true to Minecraft's original style."},
   /* TEXTURAS JAVA #4 */ {"t": "Mizuno's 16 Craft", "e": "Java", "mv": ["1.21.x"], "p": "Pack de estilo colorido y caricaturesco que le da a todo el juego un aspecto alegre, con colores vivos y bloques muy llamativos.", "pe": "A colorful, cartoon-style pack that gives the whole game a cheerful look, with vivid colors and eye-catching blocks."},
  ],
  addons:[
   /* ADDONS #1 */ {"t": "Villager News", "p": "Es un addon de Minecraft Bedrock creado junto a Element Animation y Oreville Studios. Hace que los aldeanos hablen con voces completas y reaccionen a lo que hacen jugadores, mobs y bloques a su alrededor. Basado en la animación clásica de YouTube.", "pe": "A Minecraft Bedrock addon made together with Element Animation and Oreville Studios. It makes villagers speak with full voice lines and react to what players, mobs and blocks around them do. Based on the classic YouTube animation."},
   /* ADDONS #2 */ {"t": "Item Physics & More", "p": "Agrega movimiento realista al mundo: los ítems caídos tienen físicas, los árboles se talan con animación de caída, los mobs mueren con mejores animaciones y los bloques sueltan escombros al romperse. Todo se puede ajustar desde un menú de ajustes.", "pe": "Adds realistic motion to the world: dropped items have physics, trees are chopped down with a falling animation, mobs die with better animations and blocks drop debris when broken. Everything can be adjusted from a settings menu."},
   /* ADDONS #3 */ {"t": "More TNT!", "p": "Añade una gran variedad de TNT únicos y súper poderosos que puedes craftear en cualquier mundo. Incluye más de 15 tipos, como Lava TNT, Shockwave TNT, Toxic TNT, Disco TNT y Nether TNT. También hay variantes como el Lucky TNT, con efectos impredecibles, y el Ultra TNT, mucho más destructivo.", "pe": "Adds a huge variety of unique, super powerful TNT that you can craft in any world. It includes more than 15 types, such as Lava TNT, Shockwave TNT, Toxic TNT, Disco TNT and Nether TNT. There are also variants like Lucky TNT, with unpredictable effects, and Ultra TNT, far more destructive."},
   /* ADDONS #4 */ {"t": "Hydra Bosses", "p": "Agrega 6 jefes Hydra que puedes invocar en tu mundo. El reto es derrotarlos a todos y quedarte con su poder. Además trae mascotas Hydra y sets de armadura temáticos.", "pe": "Adds 6 Hydra bosses that you can summon in your world. The challenge is to defeat them all and claim their power. It also comes with Hydra pets and themed armor sets."},
  ],
  mods:[
   /* MODS #1 */ {"t": "Just Enough Items (JEI)", "p": "Muestra una lista de todos los ítems y bloques del juego (incluidos los de otros mods) en un panel lateral. Permite ver las recetas de crafteo de cualquier objeto y para qué sirve, con solo hacer clic. Es casi obligatorio en modpacks.", "pe": "Shows a list of every item and block in the game (including those from other mods) in a side panel. It lets you see the crafting recipes of any object and what it is used for, with just a click. It is almost a must in modpacks."},
   /* MODS #2 */ {"t": "Create", "p": "Mod de tecnología mecánica con engranajes, cintas transportadoras, molinos de agua y de viento, prensas y trenes. Automatizas la producción con movimiento y fuerza en lugar de electricidad. Destaca por su estética de máquinas de madera y latón y por sus animaciones.", "pe": "A mechanical technology mod with gears, conveyor belts, water and wind mills, presses and trains. You automate production with motion and force instead of electricity. It stands out for its wood-and-brass machine look and its animations."},
   /* MODS #3 */ {"t": "AppleSkin", "p": "Mejora la barra de hambre mostrando cuánta comida y saturación te dará cada alimento antes de comerlo. También muestra la saturación oculta y cuánta vida regenerarás. Es pequeño y no cambia la jugabilidad, solo te da información útil.", "pe": "Improves the hunger bar by showing how much food and saturation each item will give you before you eat it. It also shows the hidden saturation and how much health you will regenerate. It is small and doesn't change gameplay, it just gives you useful information."},
   /* MODS #4 */ {"t": "Sodium", "p": "Mod de optimización que reescribe el motor de renderizado de Minecraft. Sube mucho los FPS y reduce los tirones, sobre todo en equipos modestos. No cambia el aspecto del juego, solo lo hace correr más fluido.", "pe": "An optimization mod that rewrites Minecraft's rendering engine. It boosts FPS a lot and reduces stutter, especially on modest hardware. It doesn't change how the game looks, it just makes it run smoother."},
   /* MODS #5 */ {"t": "Xaero's Minimap", "p": "Añade un minimapa en pantalla que muestra el terreno, los mobs, los jugadores y los puntos de interés a tu alrededor. Puedes crear waypoints (marcadores) para guardar tu base, minas o portales. Es ideal para no perderte en mundos grandes.", "pe": "Adds an on-screen minimap that shows the terrain, mobs, players and points of interest around you. You can create waypoints (markers) to save your base, mines or portals. It is ideal for not getting lost in big worlds."},
   /* MODS #6 */ {"t": "Iris Shaders", "p": "Permite usar shaders (efectos gráficos como sombras realistas, agua, iluminación y cielos) en Minecraft Java. Es compatible con la mayoría de los packs de shaders populares y funciona junto con Sodium, así que ofrece buen rendimiento y gráficos mejorados a la vez.", "pe": "Lets you use shaders (graphic effects like realistic shadows, water, lighting and skies) in Minecraft Java. It is compatible with most popular shader packs and works alongside Sodium, so it offers good performance and improved graphics at the same time."},
   /* MODS #7 */ {"t": "Lithium", "p": "Optimiza la lógica interna del juego: físicas, IA de mobs, generación de chunks y ticks. Mejora el rendimiento general y reduce el lag sin cambiar la jugabilidad ni el comportamiento de nada. Es un complemento perfecto de Sodium.", "pe": "Optimizes the game's internal logic: physics, mob AI, chunk generation and ticks. It improves overall performance and reduces lag without changing gameplay or the behavior of anything. It is a perfect companion to Sodium."},
  ],
  shaders:[
   /* SHADERS #1 */ {"t": "Chroma Visuals", "p": "Pack de Vibrant Visuals de BLOCKLAB Studios. Hace que todo se vea más vivo, con luz más brillante, cielos coloridos y agua realista. Mantiene un estilo equilibrado, cercano a lo vanilla.", "pe": "A Vibrant Visuals pack by BLOCKLAB Studios. It makes everything look more alive, with brighter light, colorful skies and realistic water. It keeps a balanced style, close to vanilla."},
   /* SHADERS #2 */ {"t": "Dynamic Details", "p": "Pack de Square Dreams con un look luminoso, frondoso y fiel al estilo vanilla. Añade efectos 3D, agua cinematográfica, minerales brillantes, luces de colores y variantes de bloques. Puedes elegir entre texturas Vanilla o Detalladas.", "pe": "A pack by Square Dreams with a bright, lush look that stays true to the vanilla style. It adds 3D effects, cinematic water, shiny ores, colored lights and block variants. You can choose between Vanilla or Detailed textures."},
   /* SHADERS #3 */ {"t": "Dark Fantasy Visuals", "p": "Pack de Starfish Studios con un ambiente oscuro y medieval, en lugar de un realismo brillante. Tiene más contraste y sombras pesadas, texturas de bloques rehechas, criaturas rediseñadas, rayos de luz y luces de colores.", "v": "2.0", "pe": "A pack by Starfish Studios with a dark, medieval atmosphere instead of bright realism. It has more contrast and heavy shadows, remade block textures, redesigned creatures, light rays and colored lights."},
   /* SHADERS #4 */ {"t": "Prizma Visuals", "p": "Pack de Vibrant Visuals con efectos 3D y un cielo bonito que conserva el aspecto clásico de Minecraft. Usa texturas PBR detalladas, relieve 3D y cielos atmosféricos, para que piedra, madera y follaje capten mejor la luz.", "pe": "A Vibrant Visuals pack with 3D effects and a beautiful sky that keeps Minecraft's classic look. It uses detailed PBR textures, 3D relief and atmospheric skies, so stone, wood and foliage catch the light better."},
   /* SHADERS #5 */ {"t": "Luminous Dreams", "p": "Shader con un estilo onírico. Usa colores brillantes, luz suave y visuales soñadores. Se basa en iluminación diferida (deferred) para acercar Bedrock al aspecto de Java.", "pe": "A shader with a dreamlike style. It uses bright colors, soft light and dreamy visuals. It relies on deferred lighting to bring Bedrock closer to the look of Java."},
   /* SHADERS JAVA #1 */ {"t": "BSL Shaders", "e": "Java", "mv": ["1.21.x"], "p": "Uno de los shaders más populares y equilibrados: sombras suaves, agua realista, nubes volumétricas y mejor iluminación, con muchas opciones para ajustar el rendimiento. Se usa con Iris u OptiFine.", "pe": "One of the most popular, balanced shaders: soft shadows, realistic water, volumetric clouds and better lighting, with many options to tune performance. Used with Iris or OptiFine."},
   /* SHADERS JAVA #2 */ {"t": "Complementary Reimagined", "e": "Java", "mv": ["1.21.x"], "p": "Conserva el estilo vanilla con luces, sombras, agua y cielos mejorados. Es muy configurable y rinde bien incluso en equipos modestos. Se usa con Iris u OptiFine.", "pe": "Keeps the vanilla style with improved lights, shadows, water and skies. It is highly configurable and runs well even on modest hardware. Used with Iris or OptiFine."},
   /* SHADERS JAVA #3 */ {"t": "Sildur's Vibrant Shaders", "e": "Java", "mv": ["1.21.x"], "p": "Shader de colores vivos con sombras, agua y reflejos mejorados. Tiene varias versiones (Lite, Medium, High, Extreme) para elegir según el rendimiento de tu equipo. Se usa con Iris u OptiFine.", "pe": "A vivid-color shader with improved shadows, water and reflections. It comes in several versions (Lite, Medium, High, Extreme) so you can pick one for your hardware. Used with Iris or OptiFine."},
   /* SHADERS JAVA #4 */ {"t": "MakeUp - Ultra Fast", "e": "Java", "mv": ["1.21.x"], "p": "Shader ligero pensado para equipos modestos: mejora la luz, las sombras y el agua perdiendo muy pocos FPS. Se usa con Iris u OptiFine.", "pe": "A lightweight shader made for modest hardware: it improves light, shadows and water while losing very few FPS. Used with Iris or OptiFine."},
  ],
};
var V={Bedrock:['26.70.x','26.60.x','26.50.x','26.30.x','26.10.x','1.21.x','1.20.x','1.19.x','1.18.x','1.17.x','1.16.x'],Java:['26.3.x','26.2.x','26.1.x','1.21.x','1.20.x','1.19.x','1.18.x','1.17.x','1.16.x','1.15.x','1.14.x','1.13.x','1.12.x','1.11.x','1.10.x','1.9.x','1.8.x']};
var S={ed:'Bedrock',ty:'Inicio'};
var ED='Bedrock',VERc=''; // ED = Minecraft de la página que se está viendo; VERc = versión confirmada
var cur=null,SEC='inicio';

// Fondo de cuadritos en bucle (cada celda es independiente, así no hay cortes)
(function(){
 var c=document.createElement('canvas');c.width=c.height=256;var x=c.getContext('2d');
 var P=['#0d0d0d','#101010','#131313','#161616','#191919','#1d1d1d','#0a0a0a'];
 var s=7;function r(){s=(s*1664525+1013904223)>>>0;return s/4294967296}
 for(var i=0;i<16;i++)for(var j=0;j<16;j++){x.fillStyle=P[Math.floor(r()*r()*P.length)];x.fillRect(i*16,j*16,16,16);}
 var u='url('+c.toDataURL()+')';
 document.documentElement.style.setProperty('--tile',u);
 })();

function toast(t,ms){var e=$('toast');e.textContent=t;e.classList.add('on');clearTimeout(toast.h);toast.h=setTimeout(function(){e.classList.remove('on')},ms||2200)}

// Bloqueo de la página de fondo (evita que se deslice o se toque con el menú abierto)
var locked=false,lockY=0;
function lock(on){
 var b=document.body,d=document.documentElement;
 if(on&&!locked){locked=true;lockY=window.pageYOffset||0;b.style.top=-lockY+'px';b.classList.add('lock')}
 else if(!on&&locked){locked=false;b.classList.remove('lock');b.style.top='';d.style.scrollBehavior='auto';window.scrollTo(0,lockY);d.style.scrollBehavior=''}
}

// Sin zoom
['gesturestart','gesturechange','gestureend'].forEach(function(n){document.addEventListener(n,function(e){e.preventDefault()})});
document.addEventListener('touchmove',function(e){if(e.touches.length>1)e.preventDefault()},{passive:false});
document.addEventListener('wheel',function(e){if(e.ctrlKey)e.preventDefault()},{passive:false});
document.addEventListener('keydown',function(e){if((e.ctrlKey||e.metaKey)&&['+','-','=','0'].indexOf(e.key)>-1)e.preventDefault()});

// Verificación humana: puzzle de arrastre + análisis del gesto + señales del navegador
function bad(){
 return navigator.webdriver===true||/HeadlessChrome|bot|crawl|spider|slurp|preview|facebookexternalhit|lighthouse|python|curl|puppeteer|playwright|phantom/i.test(navigator.userAgent)||!(navigator.languages&&navigator.languages.length)||['callPhantom','_phantom','__nightmare','domAutomation','_selenium','__webdriver_evaluate','__playwright'].some(function(k){return k in window})||(window.outerWidth===0&&window.innerWidth>0);
}
var done=false,fails=0,lockT=0,drag=false,off=0,t0=0,TX=0,PC='',NZ=[],P=[],bg,HW=52,ctx=$('pz').getContext('2d'),hd=$('hd'),trk=$('trk');
var COLS=['#4be3e0','#f5c542','#e5483c','#36d17a','#b983ff'];
function rnd(a,b){return a+Math.floor(Math.random()*(b-a+1))}
function puzzle(){
 var x,y,k;P=[];NZ=[];hd.style.left='0px';
 PC=COLS[rnd(0,4)];var DC=COLS[(COLS.indexOf(PC)+rnd(1,4))%5];
 TX=rnd(90,250);var DX=TX>170?TX-rnd(70,100):Math.min(TX+rnd(70,100),262);
 for(x=0;x<300;x+=10)for(y=0;y<110;y+=10){ctx.fillStyle='hsl(0,0%,'+rnd(14,26)+'%)';ctx.fillRect(x,y,10,10)}
 [[TX,PC],[DX,DC]].forEach(function(h){ctx.fillStyle='#000';ctx.fillRect(h[0]-3,36,38,38);ctx.fillStyle='#0a0a0a';ctx.fillRect(h[0],39,32,32);ctx.globalAlpha=.45;ctx.fillStyle=h[1];ctx.fillRect(h[0],39,32,32);ctx.globalAlpha=1});
 bg=ctx.getImageData(0,0,300,110);
 for(k=0;k<64;k++)NZ.push(Math.random()<.5?'rgba(255,255,255,.22)':'rgba(0,0,0,.22)');
 piece(0);t0=performance.now();
}
function piece(x){
 var i,j;ctx.putImageData(bg,0,0);ctx.fillStyle='#000';ctx.fillRect(x-3,36,38,38);
 for(i=0;i<8;i++)for(j=0;j<8;j++){ctx.fillStyle=PC;ctx.fillRect(x+i*4,39+j*4,4,4);ctx.fillStyle=NZ[i*8+j];ctx.fillRect(x+i*4,39+j*4,4,4)}
}
function human(){
 var n=P.length,i,v=[],m=0,q=0,ys=P.map(function(p){return p.y});
 if(n<8||P[n-1].t-P[0].t<600)return false;
 for(i=1;i<n;i++)v.push(Math.abs(P[i].x-P[i-1].x)/(P[i].t-P[i-1].t||1));
 v.forEach(function(a){m+=a});m/=v.length;
 v.forEach(function(a){q+=(a-m)*(a-m)});
 return Math.sqrt(q/v.length)/(m||1)>.2&&Math.max.apply(0,ys)-Math.min.apply(0,ys)>=1;
}
hd.addEventListener('pointerdown',function(e){
 if(done||!e.isTrusted)return;
 if(bad()){$('gmsg').textContent=tr('bloq');return}
 if(Date.now()<lockT){countdown();return}
 drag=true;P=[];off=e.clientX-hd.getBoundingClientRect().left;hd.setPointerCapture(e.pointerId);$('gmsg').textContent='';
});
hd.addEventListener('pointermove',function(e){
 if(!drag||!e.isTrusted)return;
 var m=trk.clientWidth-HW,x=Math.max(0,Math.min(m,e.clientX-trk.getBoundingClientRect().left-3-off));
 hd.style.left=x+'px';P.push({x:e.clientX,y:e.clientY,t:performance.now()});piece(x/m*268);
});
function up(){
 if(!drag)return;drag=false;
 var px=parseFloat(hd.style.left||0)/(trk.clientWidth-HW)*268;
 if(Math.abs(px-TX)<=8&&human()&&!$('trap').value){pass();return}
 fails++;flashBad();if(fails>=3)lockT=Date.now()+15000*(fails-2);
 if(fails>=3)countdown();else $('gmsg').textContent=tr('noenc');
 puzzle();
}
['pointerup','pointercancel'].forEach(function(n){hd.addEventListener(n,up)});
hd.addEventListener('contextmenu',function(e){e.preventDefault()});
function pass(){done=true;try{sessionStorage.setItem('sotano_ok','1')}catch(e){}piece(TX);descend()}
function enter(){$('gate').style.display='none';$('main').hidden=false;draw();build()}
puzzle();
var okSess=false;try{okSess=sessionStorage.getItem('sotano_ok')==='1'&&!bad()}catch(e){}

// Tarjetas (v7: ver bloque v7 más abajo)

// Verificación de suscripción (obligatoria antes de dar el enlace)
var gsi=false,away=0,hid=0,opened=false,subOk=false;
try{subOk=sessionStorage.getItem('sotano_sub')==='1'}catch(e){}
function vmsg(t){$('vmsg').textContent=t}
function vstate(back){
 var ok=!!YT_CLIENT_ID||away>=10000;$('cont').disabled=!ok;
 if(!YT_CLIENT_ID)vmsg(ok?tr('listo'):back?tr('poco'):tr('sus'));
}
document.addEventListener('visibilitychange',function(){
 if(!opened)return;
 if(document.hidden)hid=Date.now();else if(hid){away+=Date.now()-hid;hid=0;vstate(true)}
});
function loadGsi(){var s=document.createElement('script');s.src='https://accounts.google.com/gsi/client';s.onload=function(){gsi=true};document.head.appendChild(s)}
function ytCheck(cb){
 if(!gsi)return cb(null);
 google.accounts.oauth2.initTokenClient({client_id:YT_CLIENT_ID,scope:'https://www.googleapis.com/auth/youtube.readonly',callback:function(r){
  if(!r.access_token)return cb(null);
  fetch('https://www.googleapis.com/youtube/v3/subscriptions?part=id&mine=true&forChannelId='+YT_CHANNEL_ID,{headers:{Authorization:'Bearer '+r.access_token}}).then(function(x){return x.json()}).then(function(j){cb(j.items?j.items.length>0:null)},function(){cb(null)});
 },error_callback:function(){cb(null)}}).requestAccessToken();
}
function openStep(){
 if(subOk){lock(true);showFile();return}
 lock(true);showMod();opened=false;away=0;hid=0;vmsg('');$('cont').disabled=!YT_CLIENT_ID;
 if(YT_CLIENT_ID&&!gsi)loadGsi();
}
function closeStep(){hideMod();hideMod('fmod');hideMod('rmod');hideMod('xmod');hideMod('amod');hideMod('pmod');if(!$('menu').classList.contains('open')&&!favOpen)lock(false)}
function brief(t){var s=t.match(/^.*?[.!?](\s|$)/);s=s?s[0].trim():t;return s.length>150?s.slice(0,147).replace(/\s+\S*$/,'')+'…':s}
function showFile(){
 var c=cur,en=LANG==='en';$('fmod').dataset.s=curS;
 $('ft1').textContent=(en&&c.te)||c.t;
 $('fv1').innerHTML=(c.v?'<b class="vv">'+c.v+'</b>':'')+'<em class="vs">'+(c.s||'-- MB')+'</em>';
 $('fp1').textContent=brief((en&&c.pe)||c.p);fixAcc($('ft1'));showMod('fmod');
}
function verified(){subOk=true;try{sessionStorage.setItem('sotano_sub','1')}catch(e){}hideMod();setTimeout(showFile,170)}
$('sub').addEventListener('click',function(){window.open(SUB,'_blank','noopener');opened=true;away=0;hid=0;vstate(false)});
$('cont').addEventListener('click',function(){
 if(YT_CLIENT_ID){vmsg(tr('verif'));ytCheck(function(r){if(r===true)verified();else vmsg(r===false?tr('nosub'):tr('nover'))});return}
 if(away>=10000)verified();
});
$('skip').addEventListener('click',closeStep);

// Menú
function fillVer(){
 $('ver').innerHTML='<option value="">'+(LANG==='en'?'ALL':'TODAS')+'</option>'+V[S.ed].map(function(v){return '<option>'+v+'</option>'}).join('');
}
fillVer();
function lbl(){$('go').textContent=S.ty==='Inicio'?tr('irini'):S.ty===''?tr('elige'):tr('buscar')+' '+tyL(S.ty);$('go').disabled=S.ty===''}
function cap(x){return x.charAt(0).toUpperCase()+x.slice(1)}
function edOf(c,sec){return c.e||(sec==='mods'?'Java':'Bedrock')}
function vis(sec,c){return(sec!=='texturas'&&sec!=='shaders')||edOf(c,sec)===ED}
// el menú siempre refleja la página en la que estás
function syncMenu(){
 S.ed=ED;[].forEach.call($('ed').children,function(b){b.classList.toggle('on',b.dataset.v===ED)});
 fillVer();$('ver').value=V[ED].indexOf(VF)>-1?VF:'';
 S.ty=SEC==='inicio'?'Inicio':SEC==='search'?'':cap(SEC);fillTy();
 [].forEach.call($('ty').children,function(b){b.classList.toggle('on',b.dataset.v===S.ty)});
 $('hm').classList.toggle('on',S.ty==='Inicio');dim();lbl();
}
function dim(){var d=S.ty==='Inicio';['q1h','ed','q2h','ver'].forEach(function(i){$(i).classList.toggle('dm',d)})}
function tog(id,key,after){
 $(id).addEventListener('click',function(e){
  var b=e.target.closest('button');if(!b)return;
  [].forEach.call($(id).children,function(x){x.classList.remove('on')});
  b.classList.add('on');S[key]=b.dataset.v;after&&after();
 });
}
function fillTy(){
 var k=[].slice.call($('ty').children);
 k.forEach(function(b){b.hidden=!!b.dataset.e&&b.dataset.e!==S.ed});
 if(k.some(function(b){return b.hidden&&b.dataset.v===S.ty})){S.ty='Texturas';k.forEach(function(b){b.classList.toggle('on',b.dataset.v==='Texturas')});lbl()}
}
tog('ed','ed',function(){fillVer();fillTy()});tog('ty','ty',function(){$('hm').classList.remove('on');dim();lbl()});
$('hm').addEventListener('click',function(){[].forEach.call($('ty').children,function(x){x.classList.remove('on')});this.classList.add('on');S.ty='Inicio';dim();lbl()});dim();fillTy();
function menu(o){
 if(!o)lgOpen(false);var m=$('menu');if(o){syncMenu();lock(true);void m.offsetWidth}m.classList.toggle('open',o);
 if(o)m.removeAttribute('inert');else m.setAttribute('inert','');
 [$('main'),document.querySelector('.bar')].forEach(function(e){if(o)e.setAttribute('inert','');else e.removeAttribute('inert')});
 if(o){m.scrollTop=0;lock(true)}else lock(false);
}
$('mbtn').addEventListener('click',function(){menu(true)});
$('sbtn').addEventListener('click',function(){menu(true)});
$('xbtn').addEventListener('click',function(){menu(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){menu(false);closeStep();closeFav()}});
$('go').addEventListener('click',function(){
 menu(false);
 if(S.ty==='')return;
 if(S.ty==='Inicio'){chipS=null;showSec('inicio');return}
 ED=S.ed;VERc=VF=$('ver').value;chipS={ed:ED,ver:VERc,ty:S.ty};renderChip();showSec(S.ty.toLowerCase(),true);
});

// Compartir: enlace aleatorio funcional + copiar al portapapeles + hoja de compartir del sistema
function code(){
 var a='abcdefghijkmnpqrstuvwxyz23456789',o='',r=new Uint8Array(8),i;
 try{(window.crypto||window.msCrypto).getRandomValues(r)}catch(e){for(i=0;i<8;i++)r[i]=Math.floor(Math.random()*256)}
 for(i=0;i<8;i++)o+=a.charAt(r[i]%a.length);return o;
}
function makeLink(){
 var b=SITE_URL||(/^https?:$/.test(location.protocol)?location.origin+location.pathname:'');
 return b?b+'?s='+code():'';
}
function copy(t){
 var ok=false;
 try{var a=document.createElement('textarea');a.value=t;a.setAttribute('readonly','');a.style.cssText='position:fixed;top:0;left:0;opacity:0;font-size:16px';document.body.appendChild(a);a.focus();a.select();a.setSelectionRange(0,t.length);okCopy=true;ok=document.execCommand('copy');okCopy=false;a.remove()}catch(e){}
 if(navigator.clipboard&&navigator.clipboard.writeText){return navigator.clipboard.writeText(t).then(function(){return true},function(){return ok})}
 return Promise.resolve(ok);
}
function share(){
 var url=makeLink();
 if(!url){toast(tr('host'),4200);return}
 var d={title:tr('title'),text:tr('shtxt'),url:url};
 copy(url).then(function(ok){toast(ok?tr('copiado'):tr('nocopy')+url,ok?2200:5000)});
 if(navigator.share){try{navigator.share(d).catch(function(){})}catch(e){}}
}
document.addEventListener('click',function(e){if(e.target.closest('[data-share]'))share()});

// Acentos en mayúscula: letra normal a tamaño completo + tilde dibujada encima
function fixAcc(root){
 var M={'Á':['A','´'],'É':['E','´'],'Í':['I','´'],'Ó':['O','´'],'Ú':['U','´'],'Ü':['U','¨'],'Ñ':['N','~']},re=/[ÁÉÍÓÚÜÑ]/;
 var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,null),n,L=[];
 while(n=w.nextNode()){var p=n.parentNode;if(re.test(n.nodeValue)&&!/^(SCRIPT|STYLE|OPTION|TEXTAREA)$/.test(p.tagName)&&!p.classList.contains('ac')&&getComputedStyle(p).fontFamily.indexOf('Press Start')>-1)L.push(n)}
 L.forEach(function(t){
  var f=document.createDocumentFragment();
  t.nodeValue.split(/([ÁÉÍÓÚÜÑ])/).forEach(function(x){
   if(!x)return;
   if(M[x]){var e=document.createElement('span');e.className='ac';e.dataset.a=M[x][1];e.textContent=M[x][0];f.appendChild(e)}else f.appendChild(document.createTextNode(x))
  });
  t.parentNode.replaceChild(f,t);
 });
}
fixAcc(document.body);
// Botón presionado: efecto breve, nunca se queda (los del menú Bedrock/Java/Texturas... mantienen su estado)
document.addEventListener('pointerdown',function(e){
 var b=e.target.closest&&e.target.closest('button');
 if(!b||b.disabled||b.closest('#ed,#ty,#sx,#hmw,#xed,#xty,#sort'))return;
 b.classList.add('pr');clearTimeout(b._t);b._t=setTimeout(function(){b.classList.remove('pr')},150);
},{passive:true});
// Cuenta regresiva en vivo del bloqueo
var cdT;
function countdown(){
 clearInterval(cdT);
 function tick(){var q=Math.ceil((lockT-Date.now())/1000);var bx=document.querySelector('#gate .box');if(q>0){bx.classList.add('lk');$('gmsg').innerHTML=tr('esp',q)}else{clearInterval(cdT);bx.classList.remove('lk');$('gmsg').textContent=''}}
 tick();cdT=setInterval(tick,250);
}
// Solo traducir: sin copiar, cortar ni seleccionar todo
var okCopy=false;
['copy','cut'].forEach(function(n){document.addEventListener(n,function(e){if(okCopy)return;e.preventDefault();try{e.clipboardData.setData('text/plain','')}catch(x){}})});
document.addEventListener('keydown',function(e){if((e.ctrlKey||e.metaKey)&&String(e.key).toLowerCase()==='a')e.preventDefault()});
document.addEventListener('selectionchange',function(){var g=window.getSelection();if(g&&String(g).length>300)g.removeAllRanges()});

// ===== BÚSQUEDA (lupa) =====
var MAX_CHARS=69; // límite de dígitos de la entrada de texto (letras, números, símbolos y espacios cuentan): cámbialo aquí
var sin=$('sin'),sx=$('sx'),closing=false,opening=false,openEnd=0,clrT=0;
function clearSin(){clearTimeout(clrT);sin.value='';sin.style.height=''}
function clen(t){return Array.from(t).length}
function clip(t){var a=Array.from(t);return a.length>MAX_CHARS?a.slice(0,MAX_CHARS).join(''):t}
function sGrow(){sin.style.height='auto';sin.style.height=(sin.scrollHeight+6)+'px';sg()}
function openSearch(){
 var b=document.body;
 if(closing)return;
 if(b.classList.contains('srch')){if(sin.value.trim())doSearch();else sin.focus();return}
 sx.classList.add('op');opening=true;openEnd=Date.now()+640;setTimeout(function(){sx.classList.remove('op');opening=false},640);
 b.classList.add('srch');lock(true);$('main').setAttribute('inert','');clearSin();sGrow();sin.focus();
}
function closeSearch(anim){
 var b=document.body;if(!b.classList.contains('srch'))return;
 if(opening){setTimeout(function(){closeSearch(anim)},Math.max(0,openEnd-Date.now())+30);return}
 sin.blur();clrT=setTimeout(clearSin,330);
 if(anim&&!closing){
  closing=true;b.classList.add('cls');sx.classList.add('go');
  setTimeout(function(){sx.classList.remove('go','rd');b.classList.remove('cls');closing=false},630);
 }
 b.classList.remove('srch');lock(false);$('main').removeAttribute('inert');
}
// X: roja al tocar (sin la animación de "apretado")
sx.addEventListener('pointerdown',function(){if(!closing&&!opening)sx.classList.add('rd')});
['pointerup','pointercancel','pointerleave'].forEach(function(n){sx.addEventListener(n,function(){setTimeout(function(){if(!closing)sx.classList.remove('rd')},120)})});
// Captura el toque de la lupa antes que el manejador anterior (que abría el menú), sin borrarlo
document.querySelector('.bar').addEventListener('click',function(e){
 if(e.target.closest('#sbtn')){e.stopPropagation();openSearch()}
 else if(e.target.closest('#sx')){closeSearch(true)}
},true);
sin.addEventListener('beforeinput',function(e){
 if(e.inputType!=='insertText'||!e.cancelable)return;
 var v=sin.value,sel=v.slice(sin.selectionStart,sin.selectionEnd);
 if(clen(v)-clen(sel)+clen(e.data||'')>MAX_CHARS)e.preventDefault();
});
sin.addEventListener('input',function(){
 var c=clip(sin.value.replace(/[\r\n]+/g,' '));
 if(c!==sin.value){var p=Math.min(sin.selectionStart,c.length);sin.value=c;try{sin.setSelectionRange(p,p)}catch(x){}}
 sGrow();
});
sin.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();doSearch()}});
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeSearch()});

// ===== v6: POP de la ventana de suscripción =====
var modT=0;
function showMod(i){var m=$(i||'mod');clearTimeout(m._t);m.classList.remove('out','in');m.style.display='flex';void m.offsetWidth;m.classList.add('in')}
function hideMod(i){var m=$(i||'mod');if(m.style.display!=='flex'||m.classList.contains('out'))return;m.classList.remove('in');m.classList.add('out');clearTimeout(m._t);m._t=setTimeout(function(){m.style.display='none';m.classList.remove('out')},150)}

// ===== v6: botón de idioma del menú =====
var lgb=$('lgbtn'),lgd=$('lgd');
function lgOpen(o){lgd.classList.toggle('open',o);lgb.setAttribute('aria-expanded',o?'true':'false')}
lgb.addEventListener('click',function(e){e.stopPropagation();lgOpen(!lgd.classList.contains('open'))});
lgd.addEventListener('click',function(e){var b=e.target.closest('[data-l]');if(!b)return;e.stopPropagation();setLang(b.dataset.l);setTimeout(function(){lgOpen(false)},140)});
document.addEventListener('click',function(e){if(!e.target.closest('.lgw'))lgOpen(false)});

// ===== v6.2: DESCENSO AL SÓTANO (escotilla → caída → oscuridad → antorcha → la página se construye) =====
var SND=true,AC=null; // SND=false apaga los sonidos sintetizados (no usan archivos)
function tone(w,a,b,d,v){var t=AC.currentTime,o=AC.createOscillator(),g=AC.createGain();o.type=w;o.frequency.setValueAtTime(a,t);o.frequency.exponentialRampToValueAtTime(b,t+d);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g);g.connect(AC.destination);o.start(t);o.stop(t+d)}
function nz(d,v,fq,q,ty){var t=AC.currentTime,n=AC.sampleRate*d|0,b=AC.createBuffer(1,n,AC.sampleRate),x=b.getChannelData(0),i,s=AC.createBufferSource(),f=AC.createBiquadFilter(),g=AC.createGain();for(i=0;i<n;i++)x[i]=Math.random()*2-1;s.buffer=b;f.type=ty||'bandpass';f.frequency.value=fq;f.Q.value=q||1;g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.0001,t+d);s.connect(f);f.connect(g);g.connect(AC.destination);s.start(t)}
function snd(k){if(!SND)return;try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();if(AC.state==='suspended')AC.resume();
 if(k==='ok')tone('square',520,1040,.12,.05);
 if(k==='knock'){nz(.09,.5,260,2);tone('sine',140,70,.12,.2)}
 if(k==='creak'){tone('sawtooth',70,150,.55,.035);tone('sawtooth',74,120,.55,.03);nz(.5,.05,900,6)}
 if(k==='thud'){tone('sine',90,32,.55,.5);nz(.35,.35,160,.8,'lowpass');try{navigator.vibrate&&navigator.vibrate([30,40,15])}catch(e){}}
 if(k==='fire'){nz(.5,.18,2400,.6,'highpass');tone('triangle',180,60,.4,.05)}
}catch(e){}}
function cl(x){return x<0?0:x>1?1:x}
function mkTex(){var q=document.createElement('canvas');q.width=q.height=24;var x=q.getContext('2d'),i,j,v,s=11;function r(){s=(s*1664525+1013904223)>>>0;return s/4294967296}
 x.fillStyle='#6e7378';x.fillRect(0,0,24,24);
 for(i=0;i<24;i++)for(j=0;j<24;j++){v=r();if(v<.2){x.fillStyle='rgba(20,22,26,.22)';x.fillRect(i,j,1,1)}else if(v>.88){x.fillStyle='rgba(255,255,255,.14)';x.fillRect(i,j,1,1)}}
 x.fillStyle='#3d4045';x.fillRect(11,1,2,22);x.fillRect(1,11,22,2);
 x.fillStyle='#8e949a';x.fillRect(11,1,1,22);x.fillRect(1,11,22,1);
 x.fillStyle='#2a2c30';x.fillRect(0,0,24,1);x.fillRect(0,23,24,1);x.fillRect(0,0,1,24);x.fillRect(23,0,1,24);
 x.fillStyle='#a3a9af';x.fillRect(1,1,22,1);x.fillRect(1,1,1,22);
 [[3,7],[19,7],[3,19],[19,19],[11,11]].forEach(function(p){x.fillStyle='#c9ced3';x.fillRect(p[0],p[1],2,2);x.fillStyle='#2a2c30';x.fillRect(p[0]+1,p[1]+1,1,1)});
 x.fillStyle='#1f2023';x.fillRect(3,2,5,2);x.fillRect(16,2,5,2);x.fillStyle='#8e949a';x.fillRect(4,2,3,1);x.fillRect(17,2,3,1);
 x.fillStyle='#dfe3e8';x.fillRect(10,17,4,1);x.fillRect(10,21,4,1);x.fillRect(10,17,1,5);x.fillRect(13,17,1,5);x.fillStyle='#1f2023';x.fillRect(11,18,2,3);
 return q}
// La página se construye pieza por pieza (cabecera cae, título golpea, tarjetas entran desde los lados, botones saltan)
function build(){
 var L=[],n=0,q=function(s){return document.querySelector(s)};
 function ad(e,c,d){if(!e)return;e.classList.add('bld',c);e.style.animationDelay=d+'ms';L.push([e,c])}
 ad(q('.bar'),'bDrop',0);ad($('favbtn'),'bDrop',0);
 ad(q('.hh1'),'bSlam',160);ad(q('.htag'),'bUp',300);ad(q('.hgo'),'bPop',420);ad(q('.grass'),'bUp',480);
 [].forEach.call(document.querySelectorAll('#home .hc'),function(e,i){n=i+1;ad(e,i%2?'bSR':'bSL',560+i*120)});
 ad(q('.foot'),'bUp',560+n*120+150);
 setTimeout(function(){L.forEach(function(p){p[0].classList.remove('bld',p[1]);p[0].style.animationDelay=''})},560+n*120+1500);
}
function descend(){
 if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches){enter();return}
 var g=$('gate'),W=innerWidth,H=innerHeight,PX=Math.round(Math.min(5,Math.max(3,W/130))),cv=document.createElement('canvas'),c=cv.getContext('2d'),
 S=Math.min(W*.5,H*.4,260),cx=W/2,cy=H*.46,ly=H*.42,dust=[],tex=mkTex(),t0=performance.now(),lt=t0,sh=false,gh=false,
 T={pop:320,dive:1700,land:2550,ign:2900,end:4300},
 E=[[0,'ok'],[700,'knock'],[850,'knock'],[900,'creak'],[2550,'thud'],[2900,'fire']];
 cv.id='dsc';cv.width=Math.ceil(W/PX);cv.height=Math.ceil(H/PX);document.body.appendChild(cv);
 document.documentElement.style.overflow='hidden';window.scrollTo(0,0);
 g.classList.add('ok');try{navigator.vibrate&&navigator.vibrate(20)}catch(e){}
 function fin(){cv.remove();document.documentElement.style.overflow='';g.style.display='none'}
 function reveal(){$('main').hidden=false;draw();build()}
 function fr(now){
  try{
  var t=now-t0,dt=Math.min(50,now-lt),p,sc,a=0,o,k=1,gl,r,w,y0,y1,cs,sn,fy,hy,i,d,u,R,e=0,gr,q,fl=0,PF=[[0,0],[.1,1],[.25,.3],[.4,1],[.7,.5],[1,0]];lt=now;
  while(E.length&&t>=E[0][0])snd(E.shift()[1]);
  c.setTransform(1/PX,0,0,1/PX,0,0);c.clearRect(0,0,W,H);c.imageSmoothingEnabled=false;
  if(t<T.land){
   p=cl((t-T.pop)/420);sc=t<T.pop?0:1+2.70158*Math.pow(p-1,3)+1.70158*Math.pow(p-1,2);
   if(t>=700&&t<900)a=6*Math.abs(Math.sin((t-700)/150*Math.PI));else if(t>=900)a=104*(1-Math.pow(1-cl((t-900)/650),3));
   if(t>=T.dive){d=cl((t-T.dive)/800);k=Math.exp(Math.log(18)*d*d)}
   o=a/104;
   if(k>1&&k<7){g.style.transformOrigin=cx+'px '+cy+'px';g.style.transform='scale('+k+')'}else if(k>=7&&!gh){gh=true;g.style.display='none'}
   if(sc>.01){
    c.save();c.translate(cx,cy);c.scale(sc*k,sc*k);
    c.drawImage(tex,-S*.62,-S*.62,S*1.24,S*1.24);c.fillStyle='rgba(0,0,0,.5)';c.fillRect(-S*.62,-S*.62,S*1.24,S*1.24);
    c.fillStyle='#000';c.fillRect(-S/2,-S/2,S,S);
    hy=-S/2;cs=Math.cos(a*Math.PI/180);sn=Math.sin(a*Math.PI/180);fy=hy+S*cs;
    for(r=0;r<24;r++){y0=hy+(fy-hy)*r/24;y1=hy+(fy-hy)*(r+1)/24;w=S*(1+.16*sn*r/24);c.drawImage(tex,0,r,24,1,-w/2,Math.min(y0,y1),w,Math.abs(y1-y0)+1)}
    c.fillStyle='rgba(0,0,0,'+(a>90?.6:.4*sn)+')';w=S*(1+.16*sn);c.beginPath();c.moveTo(-S/2,hy);c.lineTo(S/2,hy);c.lineTo(w/2,fy);c.lineTo(-w/2,fy);c.fill();
    if(o>.15&&k<4&&Math.random()<.6)dust.push({x:(Math.random()-.5)*S*.9,y:-S*.4,vx:(Math.random()-.5)*16,vy:-(30+Math.random()*70),l:1,s:4+Math.random()*6});
    for(i=dust.length-1;i>=0;i--){u=dust[i];u.x+=u.vx*dt/1000;u.y+=u.vy*dt/1000;u.l-=dt/1500;if(u.l<=0){dust.splice(i,1);continue}c.fillStyle='rgba(120,125,135,'+.45*u.l+')';c.fillRect(u.x,u.y,u.s,u.s)}
    c.restore();
   }
  }else{
   if(!gh){gh=true;g.style.display='none'}
   c.fillStyle='#000';c.fillRect(0,0,W,H);
   if(t>=T.ign){
    e=cl((t-T.ign-100)/1100);R=Math.hypot(W,H)*2.4*(1-Math.pow(1-e,3));
    R*=1+.03*Math.sin(t*.031)+.02*Math.sin(t*.073+1.3)+(Math.random()-.5)*.02;
    c.globalCompositeOperation='destination-out';
    gr=c.createRadialGradient(cx,ly,0,cx,ly,R);gr.addColorStop(0,'rgba(0,0,0,1)');gr.addColorStop(.35,'rgba(0,0,0,.97)');gr.addColorStop(1,'rgba(0,0,0,0)');
    c.fillStyle=gr;c.fillRect(0,0,W,H);c.globalCompositeOperation='source-over';
    q=cl((t-T.ign)/700);for(i=1;i<PF.length;i++)if(q<=PF[i][0]){fl=PF[i-1][1]+(PF[i][1]-PF[i-1][1])*(q-PF[i-1][0])/(PF[i][0]-PF[i-1][0]);break}
    c.fillStyle='rgba(255,255,255,'+fl+')';c.fillRect(0,0,W,H);
    gr=c.createRadialGradient(cx,ly,0,cx,ly,Math.hypot(W,H)*.6);gr.addColorStop(0,'rgba(255,255,255,'+.22*(1-e)+')');gr.addColorStop(1,'rgba(255,255,255,0)');
    c.fillStyle=gr;c.fillRect(0,0,W,H);
   }
   if(!sh&&t>=T.ign+90){sh=true;reveal()}
   if(t>T.end-250)cv.style.opacity=Math.max(0,(T.end-t)/250);
  }
  if(t<T.end)requestAnimationFrame(fr);else fin();
  }catch(err){fin();if($('main').hidden)enter()}
 }
 requestAnimationFrame(fr);
}

// ===== v7: favoritos, inicio, búsqueda, ventana del archivo =====
var FV={};try{FV=JSON.parse(localStorage.getItem('sotano_fav')||'{}')||{}}catch(e){}
var curS='texturas',QRY='',favOpen=false,favBusy=false,FA=[],tipN=0;
var HT='<svg viewBox="0 0 7 6" width="21" height="18" shape-rendering="crispEdges" fill="#fff"><path d="M1 0h2v1H1zM4 0h2v1H4zM0 1h7v2H0zM1 3h5v1H1zM2 4h3v1H2zM3 5h1v1H3z"/></svg>';
var TIPS={es:['Los creepers nacieron de un error: Notch quería hacer un cerdo y se equivocó con las medidas del modelo.','Un día completo de Minecraft dura 20 minutos reales.','Los gatos asustan a los creepers. ¡Un buen guardaespaldas!','El mundo de Minecraft Java mide unos 60 millones de bloques de lado.','La roca madre (bedrock) no se puede romper en modo Supervivencia.'],
en:["Creepers were born from a mistake: Notch was making a pig and mixed up the model's measurements.",'A full Minecraft day lasts 20 real minutes.','Cats scare creepers away. A great bodyguard!',"Minecraft Java's world is about 60 million blocks wide.",'Bedrock cannot be broken in Survival mode.']};
var SL={texturas:'texturas textures',addons:'addons',mods:'mods',shaders:'shaders'};
(function(){var c=document.createElement('canvas');c.width=c.height=16;var x=c.getContext('2d'),s=5,i,j;function r(){s=(s*1664525+1013904223)>>>0;return s/4294967296}
 for(i=0;i<16;i++)for(j=0;j<16;j++){x.fillStyle=j<4?(r()<.5?'#4f9a2f':'#5cb038'):(r()<.5?'#7a5230':'#6b4526');x.fillRect(i,j,1,1)}
 for(i=0;i<16;i++)if(r()<.5){x.fillStyle='#4f9a2f';x.fillRect(i,4,1,1+Math.floor(r()*2))}
 document.documentElement.style.setProperty('--gt','url('+c.toDataURL()+')')})();
for(var gi=0;gi<24;gi++)$('favbg').appendChild(document.createElement('i'));
function fk(s,c){return s+'|'+c.t}
function card(s,i){
 var c=C[s][i],en=LANG==='en',a=' data-s="'+s+'" data-i="'+i+'"';
 return '<article class="card"'+a+'><h2>'+((en&&c.te)||c.t)+'<span class="ver">'+(c.v?'<b class="vv">'+c.v+'</b>':'')+'<em class="vs">'+(c.s||'-- MB')+'</em></span></h2><div class="ph"></div><p>'+((en&&c.pe)||c.p)+'</p><div class="act"><button class="fv'+(FV[fk(s,c)]?' on':'')+'"'+a+' aria-label="'+tr('fav')+'">'+HT+'</button><button class="slot"'+a+'>'+tr('enlace')+'</button></div></article>';
}
function draw(){
 var h=SEC==='inicio',r=SEC==='search',L;
 $('home').hidden=!h;$('sres').hidden=!r;$('ttlh').hidden=h||r;document.querySelector('.sub').hidden=h||r;$('sortw').hidden=$('vfw').hidden=h||r;if(!h&&!r)fillVF();
 if(h){$('cards').innerHTML='';$('tipt').textContent=(TIPS[LANG]||TIPS.es)[tipN];drawRec();return}
 if(r){L=found(QRY);$('rq').textContent=QRY}else L=C[SEC].map(function(c,i){return[SEC,i]}).filter(function(p){return vis(p[0],C[p[0]][p[1]])&&vfok(C[p[0]][p[1]])});
 $('cards').innerHTML=L.length?L.map(function(p){return card(p[0],p[1])}).join(''):'<div class="fe"><p>'+tr(!r&&VF?'vfe':'sinres')+'</p></div>';
 fixAcc($('cards'));
}
function showSec(s,keep,noTop){
 if(s==='addons')ED='Bedrock';else if(s==='mods')ED='Java';
 SEC=s;document.body.dataset.sec=s;$('ttl').textContent=tyL(s);draw();
 $('chip').style.display=(keep&&chipS&&s!=='inicio'&&s!=='search')?'block':'none';
 if(!noTop)window.scrollTo({top:0,behavior:'smooth'});
 syncMenu();
}
function goSec(sec){if(sec==='addons')ED='Bedrock';else if(sec==='mods')ED='Java';var v=VF&&V[ED].indexOf(VF)>-1?VF:'';VF=VERc=v;chipS={ed:ED,ver:v,ty:cap(sec)};renderChip();showSec(sec,true)}
function tip(){var a=TIPS[LANG]||TIPS.es,e=$('tipt');tipN=(tipN+1)%a.length;e.textContent=a[tipN];e.classList.remove('bPop');void e.offsetWidth;e.classList.add('bPop')}
// búsqueda difusa: tolera errores y nombres incompletos
function nm(s){return String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim()}
function lev(a,b){var p=[],i,j,c,d;for(j=0;j<=b.length;j++)p[j]=j;for(i=1;i<=a.length;i++){d=p[0];p[0]=i;for(j=1;j<=b.length;j++){c=p[j];p[j]=Math.min(p[j]+1,p[j-1]+1,d+(a[i-1]===b[j-1]?0:1));d=c}}return p[b.length]}
function sc(q,c,s){
 var t=nm(c.t+' '+(c.te||'')),T2=t.split(' '),Q=q.split(' '),n=0,tq=q.replace(/ /g,''),tt=t.replace(/ /g,''),pd=nm(c.p+' '+(c.pe||'')+' '+SL[s]),r;
 if(t.indexOf(q)>-1||tt.indexOf(tq)>-1)n+=100;
 Q.forEach(function(w){var b=0;T2.forEach(function(x){var v=0;if(x===w)v=70;else if(x.indexOf(w)===0)v=60;else if(w.length>2&&x.indexOf(w)>-1)v=40;else if(w.length>3){r=1-lev(w,x.slice(0,w.length))/w.length;if(r>=.6)v=r*50}if(v>b)b=v});n+=b;if(w.length>2&&pd.indexOf(w)>-1)n+=10});
 if(tq.length>3){r=1-lev(tq,tt.slice(0,tq.length))/tq.length;if(r>=.7)n+=r*50}
 return n;
}
function found(q){q=nm(q);if(!q)return[];var L=[];['texturas','addons','shaders','mods'].forEach(function(s){C[s].forEach(function(c,i){var v=sc(q,c,s);if(v>=25)L.push([s,i,v])})});L.sort(function(a,b){return b[2]-a[2]});return L}
function sg(){
 var g=$('sg'),L=found(sin.value).slice(0,5);
 if(!L.length||!document.body.classList.contains('srch')){g.classList.remove('on');return}
 g.style.top=(sin.getBoundingClientRect().bottom+10)+'px';
 g.innerHTML=L.map(function(p){var c=C[p[0]][p[1]];return '<button class="sgi" data-s="'+p[0]+'" data-i="'+p[1]+'"><span class="sp"></span><span class="sgt"><b>'+((LANG==='en'&&c.te)||c.t)+'</b><em>'+(c.v||'')+'<s>'+(c.s||'-- MB')+'</s><u>'+edOf(c,p[0]).toUpperCase()+'</u></em></span></button>'}).join('');
 g.classList.add('on');fixAcc(g);
}
$('sg').addEventListener('mousedown',function(e){e.preventDefault()});
function doSearch(){var q=sin.value.trim();if(!q)return;QRY=q;chipS=null;closeSearch(true);showSec('search')}
function goTo(s,i){
 closeSearch(true);chipS=null;VF=VERc='';ED=edOf(C[s][i],s);showSec(s,false,true);
 setTimeout(function(){var e=document.querySelector('#cards .card[data-i="'+i+'"]');if(e){e.scrollIntoView({behavior:'smooth',block:'center'});e.classList.add('hl');setTimeout(function(){e.classList.remove('hl')},1800)}},140);
}
// favoritos
function tgl(s,i){
 var k=fk(s,C[s][i]);if(FV[k])delete FV[k];else FV[k]=1;try{localStorage.setItem('sotano_fav',JSON.stringify(FV))}catch(e){}
 [].forEach.call(document.querySelectorAll('.fv[data-s="'+s+'"][data-i="'+i+'"]'),function(x){x.classList.toggle('on',!!FV[k])});
 if(favOpen)drawFav();
}
function fcard(s,i){
 var c=C[s][i],a=' data-s="'+s+'" data-i="'+i+'"';
 return '<div class="fc"'+a+'><div class="fph"></div><b class="fct">'+((LANG==='en'&&c.te)||c.t)+'</b><span class="fcv">'+(c.v?'<b class="vv">'+c.v+'</b>':'')+'<em class="vs">'+(c.s||'-- MB')+'</em></span><span class="fce">'+edOf(c,s).toUpperCase()+'</span><button class="fv on"'+a+' aria-label="'+tr('fav')+'">'+HT+'</button></div>';
}
function drawFav(){
 var o='';['texturas','addons','shaders','mods'].forEach(function(s){var h2='';C[s].forEach(function(c,i){if(FV[fk(s,c)])h2+=fcard(s,i)});if(h2)o+='<div class="dv" data-s="'+s+'"><b>'+tyL(s)+'</b><i></i></div>'+h2});
 $('fwr').innerHTML=o||'<div class="fe"><p>'+tr('fve')+'</p><b>:(</b></div>';fixAcc($('fwr'));
}
function fanim(out,done){
 var hb=$('favbtn').getBoundingClientRect(),hx=hb.left+hb.width/2,hy=hb.top+hb.height/2,P=[].slice.call($('favbg').children).concat($('favh'),$('favt'),$('favx'),$('favc'));
 FA=P.map(function(el,i){
  var r=el.getBoundingClientRect(),k=[{transform:'none',opacity:1},{transform:'translate('+(hx-r.left-r.width/2)+'px,'+(hy-r.top-r.height/2)+'px) scale(.05) rotate('+(Math.random()*120-60)+'deg)',opacity:0}],d=i<24?Math.random()*240:[80,190,230,160][i-24];
  if(!out)k.reverse();
  return el.animate(k,{duration:400,delay:d,easing:'cubic-bezier(.3,.7,.3,1)',fill:'both'});
 });
 setTimeout(done,700);
}
function openFav(){
 if(favOpen||favBusy)return;favBusy=true;lock(true);
 var b=$('favbtn');drawFav();$('fav').hidden=false;$('favc').scrollTop=0;b.classList.add('up');
 fanim(false,function(){FA.forEach(function(a){a.cancel()});favBusy=false;favOpen=true;b.classList.add('mv')});
}
function closeFav(){
 if(!favOpen||favBusy)return;favBusy=true;var b=$('favbtn');
 b.classList.remove('mv'); // 1) el corazón vuelve a su sitio
 setTimeout(function(){fanim(true,function(){ // 2) y luego el apartado se guarda dentro del corazón
  $('fav').hidden=true;FA.forEach(function(x){x.cancel()});b.classList.remove('up');favOpen=false;favBusy=false;if(!$('menu').classList.contains('open'))lock(false);
 })},270);
}
$('favbtn').addEventListener('click',openFav);$('favx').addEventListener('click',closeFav);
// clics: publicaciones, corazones, sugerencias, atajos del inicio y botones sociales
document.addEventListener('click',function(e){
 var b=e.target.closest('.slot,.fv,.sgi,[data-go],[data-yt],[data-dc],#tipb,.fc');if(!b)return;
 if(b.dataset.go){goSec(b.dataset.go);return}
 if(b.hasAttribute('data-yt')){window.open(SUB,'_blank','noopener');return}
 if(b.hasAttribute('data-dc')){window.open(/^https?:\/\//i.test(DISCORD)?DISCORD:'https://discord.gg/'+DISCORD,'_blank','noopener');return}
 if(b.id==='tipb'){tip();return}
 var s=b.dataset.s,i=+b.dataset.i;
 if(b.classList.contains('sgi'))goTo(s,i);else if(b.classList.contains('fv')){var ft=b.closest('.fc');if(ft){if(ft.classList.contains('rm'))return;ft.classList.add('rm');setTimeout(function(){tgl(s,i)},170)}else tgl(s,i)}else{cur=C[s][i];curS=s;recAdd(s,i);openStep()}
});
document.addEventListener('pointerdown',function(e){var t=e.target.closest&&e.target.closest('.fc');if(!t||e.target.closest('button'))return;t.classList.add('pr');clearTimeout(t._t);t._t=setTimeout(function(){t.classList.remove('pr')},150)},{passive:true});
// ventana del archivo: OBTENER LINK
$('ol').addEventListener('click',function(){
 copy(cur&&cur.l?atob(cur.l):'COPIADO');hideMod('fmod');
 setTimeout(function(){if(!$('menu').classList.contains('open')&&!favOpen)lock(false);toast(tr('copiado2'),4200)},150);
});
$('fmod').addEventListener('click',function(e){if(e.target===$('fmod'))closeStep()});
// verificación: destello rojo + sacudida al fallar
function flashBad(){var b=document.querySelector('#gate .box');b.classList.remove('bad');void b.offsetWidth;b.classList.add('bad');setTimeout(function(){b.classList.remove('bad')},520)}

// ===== v8: orden, filtro de versión, ventana EXPLORAR, reporte, vistos, atajos, subir, añadir a inicio =====
Object.assign(T.es,{todas:'TODAS',vfe:'No hay archivos para esa versión todavía :(',rpok:'Reporte enviado. ¡Gracias!',rpdup:'Ya reportaste este archivo. ¡Gracias!',rpoff:'Los reportes aún no están activados.',rperr:'No se pudo enviar. Inténtalo otra vez.'});
Object.assign(T.en,{todas:'ALL',vfe:'There are no files for that version yet :(',rpok:'Report sent. Thank you!',rpdup:'You already reported this file. Thank you!',rpoff:'Reports are not enabled yet.',rperr:"Couldn't send it. Please try again."});
Object.assign(EN,{sp1:'Popular',sp2:'Recent',sp3:'+ Downloaded',sp4:'- Downloaded',sp5:'+ Searched',vfl:'VERSION:',bs:'SEARCH',rt:'IS THE LINK BROKEN?',rd:"Let me know and I'll fix it as soon as possible.",rsb:'SEND REPORT',rcv:'RECENTLY VIEWED',kbh:'Shortcuts: <b>/</b> or <b>Ctrl+K</b> search · <b>Esc</b> close',pw1:'TAKE IT ON YOUR PHONE',pw2:'Save the basement on your home screen and open it like an app.',pw3:'SHOW ME HOW',pwt:'ADD TO HOME SCREEN',pwa:'ANDROID · CHROME',pwb:'1. Tap the ⋮ menu in Chrome.<br>2. Choose “Add to Home screen” or “Install app”.<br>3. Confirm. Done!',pwc:'IPHONE · SAFARI',pwd:'1. Tap Share (the square with an arrow).<br>2. Choose “Add to Home Screen”.<br>3. Tap “Add”.',pwk:'GOT IT'});
Object.assign(EN_A,{up:'Back to top',rp:'Report broken link'});

// Botones de orden (por ahora solo quedan marcados; cuando la web esté online se conectarán a las estadísticas reales)
var SORT='pop';
$('sort').addEventListener('click',function(e){var b=e.target.closest('.tb');if(!b)return;SORT=b.dataset.k;[].forEach.call(this.children,function(x){x.classList.toggle('on',x===b)})});

// Filtro rápido de subversiones. En una publicación agrega mv:["1.21.x","1.20.x"] para marcar con qué versiones es compatible (sin mv = sale siempre)
var VF='';
function fillVF(){var l=V[ED]||[];if(VF&&l.indexOf(VF)<0)VF=VERc='';$('vf').innerHTML='<option value="">'+tr('todas')+'</option>'+l.map(function(v){return '<option>'+v+'</option>'}).join('');$('vf').value=VF}
function vfok(c){return !VF||!c.mv||c.mv.indexOf(VF)>-1}
$('vf').addEventListener('change',function(){VF=VERc=this.value;chipS={ed:ED,ver:VF,ty:cap(SEC)};renderChip();$('chip').style.display='block';draw()});

// Ventana de EXPLORAR AHORA
var XS={ed:'Bedrock',ty:'texturas'},XT={Bedrock:['texturas','addons','shaders'],Java:['texturas','mods','shaders']};
function xfill(){
 var l=XT[XS.ed];if(l.indexOf(XS.ty)<0)XS.ty='texturas';
 $('xty').innerHTML=l.map(function(k){return '<button class="mc'+(k===XS.ty?' on':'')+'" data-v="'+k+'">'+tyL(k)+'</button>'}).join('');
 [].forEach.call($('xed').children,function(b){b.classList.toggle('on',b.dataset.v===XS.ed)});
}
$('hxb').addEventListener('click',function(){XS.ed=ED;xfill();lock(true);showMod('xmod')});
$('xed').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;XS.ed=b.dataset.v;xfill()});
$('xty').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;XS.ty=b.dataset.v;xfill()});
$('xgo').addEventListener('click',function(){hideMod('xmod');if(!$('menu').classList.contains('open')&&!favOpen)lock(false);ED=XS.ed;goSec(XS.ty)});

// Reporte de link caído -> mensaje a un canal privado de Discord mediante webhook (pega aquí la URL del webhook)
var REPORT_WEBHOOK='';
var RPT={};try{RPT=JSON.parse(localStorage.getItem('sotano_rp')||'{}')||{}}catch(e){}
$('rp').addEventListener('click',function(){showMod('rmod')});
$('rc').addEventListener('click',function(){hideMod('rmod')});
$('rs').addEventListener('click',function(){
 var k=fk(curS,cur),n=Date.now();
 if(RPT[k]&&n-RPT[k]<864e5){closeStep();toast(tr('rpdup'));return}
 if(!REPORT_WEBHOOK){closeStep();toast(tr('rpoff'),3600);return}
 var m='⚠️ **LINK CAÍDO**\n**Archivo:** '+cur.t+'\n**Apartado:** '+cap(curS)+' · '+edOf(cur,curS)+'\n**Idioma:** '+LANG.toUpperCase()+'\n**Hora:** '+new Date().toISOString();
 fetch(REPORT_WEBHOOK,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:'Reportes del Sótano',content:m})}).then(function(r){
  if(!r.ok)throw 0;RPT[k]=n;try{localStorage.setItem('sotano_rp',JSON.stringify(RPT))}catch(e){}closeStep();toast(tr('rpok'));
 }).catch(function(){toast(tr('rperr'),3200)});
});
['xmod','amod'].forEach(function(i){$(i).addEventListener('click',function(e){if(e.target===this)closeStep()})});
$('rmod').addEventListener('click',function(e){if(e.target===this)hideMod('rmod')});

// Vistos hace poco (se guardan solo en este navegador: los últimos 4)
var REC=[];try{REC=JSON.parse(localStorage.getItem('sotano_rec')||'[]')||[]}catch(e){}
function recAdd(s,i){var k=fk(s,C[s][i]);REC=REC.filter(function(x){return x!==k});REC.unshift(k);REC=REC.slice(0,4);try{localStorage.setItem('sotano_rec',JSON.stringify(REC))}catch(e){}}
function drawRec(){
 var o='';
 REC.forEach(function(k){
  var p=k.split('|'),s=p[0],t=p.slice(1).join('|'),i=-1;(C[s]||[]).forEach(function(c,j){if(c.t===t)i=j});if(i<0)return;
  var c=C[s][i];o+='<button class="sgi" data-s="'+s+'" data-i="'+i+'"><span class="sp"></span><span class="sgt"><b>'+((LANG==='en'&&c.te)||c.t)+'</b><em>'+(c.v||'')+'<s>'+(c.s||'-- MB')+'</s><u>'+edOf(c,s).toUpperCase()+'</u></em></span></button>';
 });
 $('recc').hidden=!o;$('recl').innerHTML=o;fixAcc($('recl'));
}

// Atajos de teclado: "/" o Ctrl+K abren el buscador (Esc ya cierra ventanas, menú, favoritos y buscador)
document.addEventListener('keydown',function(e){
 var k=String(e.key).toLowerCase(),typing=/^(INPUT|TEXTAREA|SELECT)$/.test((e.target||{}).tagName||'');
 if(!((e.ctrlKey||e.metaKey)&&k==='k'||(k==='/'&&!typing&&!e.ctrlKey&&!e.metaKey&&!e.altKey)))return;
 if($('main').hidden||(locked&&!document.body.classList.contains('srch')))return;
 e.preventDefault();openSearch();
});

// Botón flotante de subir
var upb=$('stt'),upT=0;
window.addEventListener('scroll',function(){if(!upT)upT=requestAnimationFrame(function(){upT=0;upb.classList.toggle('on',(window.pageYOffset||0)>700)})},{passive:true});
upb.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});

// Añadir a la pantalla de inicio: la tarjeta solo aparece en móviles y si la web no está ya instalada
try{if(matchMedia('(pointer:coarse)').matches&&!(matchMedia('(display-mode: standalone)').matches||navigator.standalone))$('pwac').hidden=false}catch(e){}
$('pwab').addEventListener('click',function(){lock(true);showMod('amod')});
$('pwk').addEventListener('click',closeStep);

// ===== v8_2: TEXTURAS y SHADERS del inicio preguntan Bedrock o Java; ADDONS y MODS van directo =====
var PK='';
document.addEventListener('click',function(e){var t=e.target.closest('[data-pick]');if(!t)return;PK=t.dataset.pick;lock(true);showMod('pmod')});
$('pk').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;hideMod('pmod');if(!$('menu').classList.contains('open')&&!favOpen)lock(false);ED=b.dataset.v;goSec(PK)});
$('pmod').addEventListener('click',function(e){if(e.target===this)closeStep()});

// ===== v6: ventana de idioma (tras la barra de carga) → verificación de bot → página =====
var lgate=$('lgate'),lgDone=false;
function afterLang(){lgate.hidden=true;lgate.classList.remove('out');if(okSess){done=true;enter()}else{var g=$('gate');g.hidden=false;g.classList.add('in');setTimeout(function(){g.classList.remove('in')},320)}}
// v8_3: el idioma se elige al soltar el dedo (pointerup) o con click, lo que llegue primero; aunque algo falle al traducir, siempre avanza
function pickLang(b){
 if(!b||lgDone)return;lgDone=true;
 try{setLang(b.dataset.l)}catch(x){}
 lgate.classList.add('out');setTimeout(afterLang,230);
}
function lgBtn(t){return t&&t.closest?t.closest('[data-l]'):null}
var lgDown=null;
lgate.addEventListener('pointerdown',function(e){lgDown=lgBtn(e.target)});
lgate.addEventListener('pointerup',function(e){var b=lgBtn(document.elementFromPoint(e.clientX,e.clientY));if(b&&b===lgDown)pickLang(b);lgDown=null});
lgate.addEventListener('pointercancel',function(){lgDown=null});
lgate.addEventListener('click',function(e){pickLang(lgBtn(e.target))});
var savedL=null;try{savedL=sessionStorage.getItem('sotano_lang')}catch(e){}
if(okSess&&(savedL==='es'||savedL==='en')){lgDone=true;setLang(savedL);afterLang()}
})();
