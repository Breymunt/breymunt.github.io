(()=>{"use strict";const x={"40x40x3":171,"60x60x3":266,"80x60x3":316,"80x80x3":360,"100x100x3":458,"60x60x4":349,"100x100x4":604,"120x120x4":730,"100x100x5":747,"100x100x6":887,"120x80x6":887,"140x100x6":1076,"140x140x6":1264,"150x100x7":1299};function o(x,o){return x*o}const n=x=>new Intl.NumberFormat("ua",{style:"currency",minimumFractionDigits:0,currency:"UAH"}).format(x),t=x=>new Intl.NumberFormat("ua",{minimumFractionDigits:0}).format(x);const e={16:{SA1:{"100x100x3":33.32,"80x80x3":6.85,"60x60x3":16.17},SA2:{"100x100x3":33.32,"80x80x3":6.85,"60x60x3":16.17},SA3:{"100x100x3":33.32,"80x80x3":6.85,"60x60x3":16.17},SA4:{"100x100x3":33.32,"80x80x3":6.85,"60x60x3":16.17},SA5:{"100x100x3":33.32,"80x80x3":6.85,"60x60x3":16.17},SA6:{"100x100x3":33.32,"80x80x3":6.85,"60x60x3":16.17}},18:{SA1:{"100x100x4":37.53,"80x80x3":6.65,"60x60x3":22.68},SA2:{"100x100x4":37.53,"80x80x3":6.65,"60x60x3":22.68},SA3:{"100x100x4":37.53,"80x80x3":6.65,"60x60x3":22.68},SA4:{"100x100x4":37.53,"80x80x3":6.65,"60x60x3":22.68},SA5:{"100x100x4":37.53,"80x80x3":6.65,"60x60x3":22.68},SA6:{"100x100x4":37.53,"80x80x3":6.65,"60x60x3":22.68}},20:{SA1:{"100x100x4":40.76,"80x80x3":3.86,"60x60x3":28.48},SA2:{"100x100x4":40.76,"80x80x3":3.86,"60x60x3":28.48},SA3:{"100x100x4":40.76,"80x80x3":3.86,"60x60x3":28.48},SA4:{"100x100x4":40.76,"80x80x3":3.86,"60x60x3":28.48},SA5:{"100x100x4":40.76,"80x80x3":3.86,"60x60x3":28.48},SA6:{"100x100x4":40.76,"80x80x3":3.86,"60x60x3":28.48}},22:{SA1:{"120x120x4":45.88,"100x100x3":7.93,"80x80x3":30.8},SA2:{"120x120x4":45.88,"100x100x3":7.93,"80x80x3":30.8},SA3:{"120x120x4":45.88,"100x100x3":7.93,"80x80x3":30.8},SA4:{"120x120x4":45.88,"100x100x3":7.93,"80x80x3":30.8},SA5:{"120x120x4":45.88,"100x100x3":7.93,"80x80x3":30.8},SA6:{"120x120x4":45.88,"100x100x3":7.93,"80x80x3":30.8}},24:{SA1:{"100x100x4":50.16,"80x80x3":47.57},SA2:{"100x100x4":50.16,"80x80x3":47.57},SA3:{"100x100x4":50.16,"80x80x3":47.57},SA4:{"100x100x4":50.16,"80x80x3":47.57},SA5:{"120x120x4":50.09,"80x80x3":46.47},SA6:{"120x120x4":50.09,"80x80x3":46.47}},30:{SA1:{"120x80x6":34.55,"100x100x5":30,"60x60x4":52.04},SA2:{"120x80x6":34.55,"100x100x5":30,"60x60x4":52.04},SA3:{"120x80x6":34.55,"100x100x6":30,"60x60x4":52.04},SA4:{"140x100x6":34.35,"140x140x6":30,"80x80x3":50.65},SA5:{"140x140x6":64.35,"80x80x3":50.65},SA6:{"150x100x7":34.31,"140x140x6":30,"80x80x3":50.45}}},c={16:{SA1:{"100x100x3":24,"80x80x3":12,"60x60x3":36},SA2:{"100x100x3":24,"80x80x3":12,"60x60x3":36},SA3:{"100x100x3":24,"80x80x3":12,"60x60x3":36},SA4:{"100x100x3":24,"80x80x3":12,"60x60x3":36},SA5:{"100x100x3":24,"80x80x3":12,"60x60x3":36},SA6:{"100x100x3":24,"80x80x3":12,"60x60x3":36}},18:{SA1:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA2:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA3:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA4:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA5:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA6:{"100x100x4":24,"80x80x3":12,"60x60x3":36}},20:{SA1:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA2:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA3:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA4:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA5:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA6:{"100x100x4":24,"80x80x3":12,"60x60x3":36}},22:{SA1:{"120x120x4":24,"100x100x3":12,"80x80x3":36},SA2:{"120x120x4":24,"100x100x3":12,"80x80x3":36},SA3:{"120x120x4":24,"100x100x3":12,"80x80x3":36},SA4:{"120x120x4":24,"100x100x3":12,"80x80x3":36},SA5:{"120x120x4":24,"100x100x3":12,"80x80x3":36},SA6:{"120x120x4":24,"100x100x3":12,"80x80x3":36}},24:{SA1:{"100x100x4":24,"80x80x3":36},SA2:{"100x100x4":24,"80x80x3":36},SA3:{"100x100x4":24,"80x80x3":36},SA4:{"100x100x4":24,"80x80x3":36},SA5:{"120x120x4":24,"80x80x3":36},SA6:{"120x120x4":24,"80x80x3":36}},30:{SA1:{"120x80x6":24,"100x100x5":12,"60x60x4":36},SA2:{"120x80x6":24,"100x100x5":12,"60x60x4":36},SA3:{"120x80x6":24,"100x100x6":12,"60x60x4":36},SA4:{"140x100x6":24,"140x140x6":12,"80x80x3":36},SA5:{"140x140x6":24,"80x80x3":36},SA6:{"150x100x7":24,"140x140x6":12,"80x80x3":36}}};function l(o,n,t,l){return function(x,o){const n=o/3+2,t=function(x){return x<=20?{arm:38.86,anker:0,beton:1.04}:x<=24?{arm:49.96,anker:0,beton:1.8}:x<=30?{arm:73.28,anker:4,beton:3.51}:void 0}(x),e=function(x){return 16==x||18==x||20==x||22==x||24==x||30==x?{s:8}:void 0}(x),c=12*Math.ceil((n*t.arm+8*e.s+84)/12),l=Math.ceil(n*t.anker),r=Math.ceil(n*t.beton+.13*e.s),s=30*c,u=630*l,i=2600*r;return console.log("Фундамент монолітний Фм1 - "+n+" шт"),console.log(`Арматура 12 - ${c} м.п.;`),console.log(`Анкера - ${l} шт;`),console.log(`Бетон - ${r} м3;`),s+u+i}(o,n)+function(x,o){const n=2*(x+o)-12,t=function(x){return x<=18?{arm:2.72,beton:.56*.9}:x<=24?{arm:2.83,beton:.5535}:x<=30?{arm:2.93,beton:.5985}:void 0}(x),e=12*Math.ceil((n*t.arm*2+10*n+84)/12),c=Math.ceil(n*t.beton*1.04),l=21*e,r=2600*c;return console.log("Стрічковий фундамент - "+n+" м.п."),console.log(`Арматура 10 - ${e} м.п.;`),console.log(`Бетон - ${c} м3;`),l+r}(o,n)+function(x,o){const n=o/3+2,t=function(x){return x<=18?{kosynki:4,type:"550x550x12",prokat:1570}:x<=24?{kosynki:6,type:"600x600x12",prokat:1870}:x<=30?{kosynki:6,type:"650x650x12",prokat:2195}:void 0}(x),e=n,c=n*t.kosynki,l=t.prokat*e,r=130*c;return console.log("Конструкція бази колон"),console.log(`Закладна пластина ${t.type} - ${e} шт;`),console.log(`Ребра жорсті - ${c} шт;`),l+r}(o,n)+function(x,o,n){const t=o/3+2,e=function(x){return x<=18?{kolona:925,type:219}:x<=24?{kolona:1160,type:273}:x<=30?{kolona:1390,type:325}:void 0}(x),c=t,l=Math.ceil(c*(n+.2)),r=e.kolona*l;return console.log("Кількість колон - "+t+" шт"),console.log(`Колона ${e.type} - ${l} м.п.;`),r}(o,n,t)+function(o,n,t){const e=function(x){return 16==x?{s2:.81}:18==x?{s2:.91}:20==x?{s2:.33}:22==x?{s2:1.11}:24==x?{s2:1.21}:30==x?{s2:.82}:void 0}(o),c=function(x){return 16==x||18==x||20==x?{s1:8,s2:2}:22==x||24==x?{s1:8,s2:6}:x<=30?{s1:8,s2:10}:void 0}(o),l=n/3,r=function(x){return 16==x?{s1:33.4,s2:-6.8}:18==x?{s1:34.8,s2:-6.4}:20==x?{s1:35.64,s2:-5}:22==x?{s1:38.16,s2:14.28-10}:24==x?{s1:39.6,s2:10.8-10}:30==x?{s1:39.92,s2:5.48}:void 0}(o),s=12*Math.ceil((c.s1*t+r.s1+12)/12),u=12*Math.ceil((l*(t+e.s2)+(c.s2*t+r.s2)+12)/12),i=x["100x100x3"]*s,a=x["80x80x3"]*u;return console.log(`Стійка 100х100х3 - ${s} м.п.;`),console.log(`Стійка 80х80х3 - ${u} м.п.;`),i+a}(o,n,t)+function(x,o){const n=o/3+2,t=function(x){return x<=18?{prokat:270,type:"250x250x10"}:x<=24?{prokat:390,type:"300x300x10"}:x<=30?{prokat:530,type:"350x350x10"}:void 0}(x),e=n,c=t.prokat*e;return console.log(`Верх колон ${t.type} - `+n+" шт"),c}(o,n)+function(o,n){const t=n-3.5,e=function(x){return x<=30?{vertCount:2}:x<=54?{vertCount:4}:x<=78?{vertCount:6}:x<=108?{vertCount:8}:x<=114?{vertCount:10}:x>=120?{vertCount:12}:void 0}(o),c=12*Math.ceil((2*Math.sqrt(Math.pow(t,2)+Math.pow(6,2))*e.vertCount+24)/12),l=1*e.vertCount,r=4*e.vertCount,s=x["80x80x3"]*c,u=390*l,i=270*r;return console.log("Вертикальних в'язів жорсткості - "+e.vertCount+" шт"),console.log(`Труба 80х80х3 - ${c} м.п.;`),console.log(`Пластина 300х300х10 - ${l} шт;`),console.log(`Пластина 250х250х10 - ${r} шт;`),s+u+i}(n,t)+function(o,n,t){const l=n/6+1,r=function(x,o){return e[x][`SA${o}`]}(o,t),s=function(x,o){return c[x][`SA${o}`]}(o,t);let u=0;console.log("Ферма "+o+"м - "+l+" шт");for(let o in r)u+=12*Math.ceil((r[o]*l+s[o])/12)*x[o],console.log(`${o} = ${12*Math.ceil((r[o]*l+s[o])/12)} м.п.`);const i=function(x){return x<30?{p:0}:30==x?{p:1.5}:void 0}(o),a=function(x){return x<=5?{p:1550,type:"Прокат 5мм"}:6==x?{p:1860,type:"Прокат 6мм"}:void 0}(t),g=l*i.p,A=a.p*g;return console.log(`${a.type} - ${g} м2;`),u+A}(o,n,l)+function(o,n){const t=function(x){return x<=30?{vertCount:2}:x<=54?{vertCount:4}:x<=78?{vertCount:6}:x<=108?{vertCount:8}:x<=114?{vertCount:10}:x>=120?{vertCount:12}:void 0}(n);let e;e=30===o?Math.ceil(n/60):t.vertCount/2;const c=function(x){return 16==x?{horizontConsts:48,constant:0,longCount:4}:18==x?{horizontConsts:60,constant:0,longCount:4}:20==x?{horizontConsts:54,constant:0,longCount:4}:22==x?{horizontConsts:62,constant:0,longCount:4}:24==x?{horizontConsts:74,constant:0,longCount:6}:30==x?{horizontConsts:36,constant:19.75,longCount:5}:void 0}(o),l=12*Math.ceil((n/6*c.constant+n*c.longCount+e*c.horizontConsts+24)/12),r=x["60x60x3"]*l;return console.log("Горизонтальних в'язів жорсткості (змійок) - "+e+" шт"),console.log("Поздовжніх - "+c.longCount+" шт"),console.log(`Труба 60х60х3 - ${l} м.п.;`),r}(o,n)+function(x,o,n){const t=function(x){return 16==x?{longCount:12,stock:24}:18==x?{longCount:14,stock:24}:20==x||22==x?{longCount:16,stock:24}:24==x?{longCount:18,stock:24}:30==x?{longCount:22,stock:24}:void 0}(x),e=function(x){return x<=5?{sh:408,type:"Швелер №12"}:6==x?{sh:581,type:"Швелер №14"}:void 0}(n),c=o*t.longCount+t.stock,l=e.sh*c;return console.log("Покрівельних прогонів - "+t.longCount+" шт"),console.log(`${e.type} - ${c} м.п.;`),l}(o,n,l)+function(o,n,t){const e=function(x,o){return 16==x?{h:o-.5-.46+.8,c:48}:18==x?{h:o-.5-.46+.9,c:60}:20==x?{h:o-.5-.46+.3,c:96}:22==x?{h:o-.5-.46+1.1,c:72}:24==x?{h:o-.5-.46+1.2,c:84}:30==x?{h:o-.5-.46+.8,c:120}:void 0}(o,t),c=Math.ceil(e.h/1.04+1),l=2*(o+n),r=12*Math.ceil((l*c+e.c+36)/12),s=x["40x40x3"]*r;return console.log("Стінових прогонів - "+c+" шт"),console.log(`Труба 40х40х3 - ${r} м.п.;`),s}(o,n,t)+function(o,n){const t=n/1.5+2,e=function(x){return x<=24?{r:4}:30==x?{r:6}:void 0}(o),c=12*Math.ceil((1.6*t+6*n+24)/12),l=2*n+2,r=e.r,s=x["40x40x3"]*c,u=533*l,i=11500*r;return console.log("Конструкція вентиляційної системи"),console.log(`Труба 40х40х3 - ${c} м.п.;`),console.log(`Полікарбонат - ${l} м.п.;`),console.log(`Вент.решітка - ${r} шт;`),s+u+i}(o,n)+function(o){const n=function(x){if(x<=30)return{g:2}}(o),t=72*n.g,e=n.g,c=x["60x60x3"]*t,l=14500*e;return console.log(`Ворта - ${n.g} шт`),console.log(`Труба 60х60х3 - ${t} м.п.;`),console.log(`Фурнітура - ${e} шт;`),c+l}(o)+function(x,o,n){const t=function(x){return 16==x?{l:8.54,k:.219}:18==x?{l:9.55,k:.219}:20==x?{l:10.74,k:.273}:22==x?{l:11.56,k:.273}:24==x?{l:12.86,k:.273}:30==x?{l:15.9,k:.325}:void 0}(x),e=2*Math.ceil((o+t.k)/.99),c=Math.ceil(e*t.l*1.04),l=280*c;console.log(`Покрівельний профлист 60-05 - ${c} м2`);const r=function(x){return 16==x?{c:5.71,h:.8,k:.219}:18==x?{c:5.71,h:.9,k:.219}:20==x?{c:12.41,h:.3,k:.273}:22==x?{c:5.71,h:1.1,k:.273}:24==x?{c:5.71,h:1.2,k:.273}:30==x?{c:6.47,h:.8,k:.325}:void 0}(x),s=Math.tan(Math.PI/180*r.c)*(x/2)+r.h+n-.46+.14,u=Math.ceil(x/2/1.1),i=(s+(s-1.1*Math.tan(Math.PI/180*r.c)*(u-1)))*(u/2)*4,a=n+r.h-.46-.5,g=2*Math.ceil((o+r.k)/1.1)*a,A=Math.ceil(1.15*(i+g+5.52)),S=260*A;console.log(`Стіновий профлист 20-045 - ${A} м2`);const h=Math.ceil((o+t.k)/.99+1),k=30*Math.ceil(h*t.l*2/30)+60,f=4*k;console.log(`Ущільнювач - ${k} м.п.`);const v=4*Math.ceil(t.l/1.9),$=4*Math.ceil((n+r.h)/1.9),p=2*Math.ceil((o+r.k)/1.9),C=Math.ceil((o+r.k)/1.9)+1,M=v+$+p+C+24+14,m=230*v+230*$+191*p+376*C+4584+3808;console.log(`Добірних планок - ${M} шт`),console.log(`Вітрова планка - ${v} шт`),console.log(`Торцева планка - ${$} шт`),console.log(`П-планка - ${p} шт`),console.log(`Коньок - ${C} шт`),console.log("Торцева планка воріт - 24 шт"),console.log("Планка воріт - 14 шт");const d=A+c,y=2*o+2,b=250*Math.ceil((4*c+6*A+11*y)/250),I=250*Math.ceil((3*d+12*M)/250),w=1.1*b+1*I;return console.log(`Саморізи по металу - ${b} шт`),console.log(`Саморізи по дереву - ${I} шт`),l+S+f+m+w}(o,n,t)+function(x,o){const n=x*o,t=1e4*Math.ceil(75*n/1e4);return console.log(`Витратні матеріали - ${t} грн`),t}(o,n)}document.getElementById("form").addEventListener("submit",(function(x){x.preventDefault();const e=new FormData(x.target),c=parseInt(e.get("width")),r=parseInt(e.get("length")),s=parseFloat(e.get("height")),u=parseInt(e.get("snow_area")),i=parseInt(e.get("type"));console.log(i);const a=function(x){switch(x){case 1:return l;case 2:alert("2");break;case 3:alert("3");break;case 4:alert("4")}}(i),g=function(x,o){return x*o*660}(c,r);let A=0;A+=a(c,r,s,u)+g,document.getElementById("square").value=t(o(c,r))+" м2",document.getElementById("out").value=n(A),document.getElementById("work").value=n(g),document.getElementById("square_meter").value=t(Math.ceil(A/o(c,r)))+" грн/м2"}))})();