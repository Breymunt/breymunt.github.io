(()=>{"use strict";const x={"40x40x3":171,"60x60x3":266,"80x60x3":316,"80x80x3":360,"100x100x3":458,"60x60x4":349,"100x100x4":604,"120x120x4":730,"160x160x4":981,"100x100x5":747,"120x120x5":904,"160x160x5":1219,"100x100x6":887,"120x80x6":887,"140x100x6":1076,"140x140x6":1264,"150x100x7":1299},o=2600;function n(x){return 16==x||18==x||20==x||22==x||24==x||30==x?{s:8}:void 0}function t(x){return x<=20?{arm:38.86,anker:0,beton:1.04}:x<=24?{arm:49.96,anker:0,beton:1.8}:x<=30?{arm:73.28,anker:4,beton:3.51}:void 0}function e(x,o){const n=o/3+2,t=function(x){return x<=18?{kosynki:4,type:"550x550x12",prokat:1570}:x<=24?{kosynki:6,type:"600x600x12",prokat:1870}:x<=30?{kosynki:6,type:"650x650x12",prokat:2195}:void 0}(x),e=n,c=n*t.kosynki,l=t.prokat*e,r=130*c;return console.log("Конструкція бази колон"),console.log(`Закладна пластина ${t.type} - ${e} шт;`),console.log(`Ребра жорсті - ${c} шт;`),l+r}function c(x,o,n){const t=o/3+2,e=function(x){return x<=18?{kolona:925,type:219}:x<=24?{kolona:1160,type:273}:x<=30?{kolona:1390,type:325}:void 0}(x),c=t,l=Math.ceil(c*(n+.2)),r=e.kolona*l;return console.log("Кількість колон - "+t+" шт"),console.log(`Колона ${e.type} - ${l} м.п.;`),r}function l(x,o){const n=o/3+2,t=function(x){return x<=18?{prokat:270,type:"250x250x10"}:x<=24?{prokat:390,type:"300x300x10"}:x<=30?{prokat:530,type:"350x350x10"}:void 0}(x),e=n,c=t.prokat*e;return console.log(`Верх колон ${t.type} - `+n+" шт"),c}function r(x){return x<=30?{vertCount:2}:x<=54?{vertCount:4}:x<=78?{vertCount:6}:x<=108?{vertCount:8}:x<=114?{vertCount:10}:x>=120?{vertCount:12}:void 0}const s={16:{SA1:{"100x100x3":33.32,"80x80x3":6.85,"60x60x3":16.17},SA2:{"100x100x3":33.32,"80x80x3":6.85,"60x60x3":16.17},SA3:{"100x100x3":33.32,"80x80x3":6.85,"60x60x3":16.17},SA4:{"100x100x3":33.32,"80x80x3":6.85,"60x60x3":16.17},SA5:{"100x100x3":33.32,"80x80x3":6.85,"60x60x3":16.17},SA6:{"100x100x3":33.32,"80x80x3":6.85,"60x60x3":16.17}},18:{SA1:{"100x100x4":37.53,"80x80x3":6.65,"60x60x3":22.68},SA2:{"100x100x4":37.53,"80x80x3":6.65,"60x60x3":22.68},SA3:{"100x100x4":37.53,"80x80x3":6.65,"60x60x3":22.68},SA4:{"100x100x4":37.53,"80x80x3":6.65,"60x60x3":22.68},SA5:{"100x100x4":37.53,"80x80x3":6.65,"60x60x3":22.68},SA6:{"100x100x4":37.53,"80x80x3":6.65,"60x60x3":22.68}},20:{SA1:{"100x100x4":40.76,"80x80x3":3.86,"60x60x3":28.48},SA2:{"100x100x4":40.76,"80x80x3":3.86,"60x60x3":28.48},SA3:{"100x100x4":40.76,"80x80x3":3.86,"60x60x3":28.48},SA4:{"100x100x4":40.76,"80x80x3":3.86,"60x60x3":28.48},SA5:{"100x100x4":40.76,"80x80x3":3.86,"60x60x3":28.48},SA6:{"100x100x4":40.76,"80x80x3":3.86,"60x60x3":28.48}},22:{SA1:{"120x120x4":45.88,"100x100x3":7.93,"80x80x3":30.8},SA2:{"120x120x4":45.88,"100x100x3":7.93,"80x80x3":30.8},SA3:{"120x120x4":45.88,"100x100x3":7.93,"80x80x3":30.8},SA4:{"120x120x4":45.88,"100x100x3":7.93,"80x80x3":30.8},SA5:{"120x120x4":45.88,"100x100x3":7.93,"80x80x3":30.8},SA6:{"120x120x4":45.88,"100x100x3":7.93,"80x80x3":30.8}},24:{SA1:{"100x100x4":50.16,"80x80x3":47.57},SA2:{"100x100x4":50.16,"80x80x3":47.57},SA3:{"100x100x4":50.16,"80x80x3":47.57},SA4:{"100x100x4":50.16,"80x80x3":47.57},SA5:{"120x120x4":50.09,"80x80x3":46.47},SA6:{"120x120x4":50.09,"80x80x3":46.47}},30:{SA1:{"120x80x6":34.55,"100x100x5":30,"60x60x4":52.04},SA2:{"120x80x6":34.55,"100x100x5":30,"60x60x4":52.04},SA3:{"120x80x6":34.55,"100x100x6":30,"60x60x4":52.04},SA4:{"140x100x6":34.35,"140x140x6":30,"80x80x3":50.65},SA5:{"140x140x6":64.35,"80x80x3":50.65},SA6:{"150x100x7":34.31,"140x140x6":30,"80x80x3":50.45}}},u={16:{SA1:{"100x100x3":24,"80x80x3":12,"60x60x3":36},SA2:{"100x100x3":24,"80x80x3":12,"60x60x3":36},SA3:{"100x100x3":24,"80x80x3":12,"60x60x3":36},SA4:{"100x100x3":24,"80x80x3":12,"60x60x3":36},SA5:{"100x100x3":24,"80x80x3":12,"60x60x3":36},SA6:{"100x100x3":24,"80x80x3":12,"60x60x3":36}},18:{SA1:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA2:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA3:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA4:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA5:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA6:{"100x100x4":24,"80x80x3":12,"60x60x3":36}},20:{SA1:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA2:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA3:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA4:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA5:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA6:{"100x100x4":24,"80x80x3":12,"60x60x3":36}},22:{SA1:{"120x120x4":24,"100x100x3":12,"80x80x3":36},SA2:{"120x120x4":24,"100x100x3":12,"80x80x3":36},SA3:{"120x120x4":24,"100x100x3":12,"80x80x3":36},SA4:{"120x120x4":24,"100x100x3":12,"80x80x3":36},SA5:{"120x120x4":24,"100x100x3":12,"80x80x3":36},SA6:{"120x120x4":24,"100x100x3":12,"80x80x3":36}},24:{SA1:{"100x100x4":24,"80x80x3":36},SA2:{"100x100x4":24,"80x80x3":36},SA3:{"100x100x4":24,"80x80x3":36},SA4:{"100x100x4":24,"80x80x3":36},SA5:{"120x120x4":24,"80x80x3":36},SA6:{"120x120x4":24,"80x80x3":36}},30:{SA1:{"120x80x6":24,"100x100x5":12,"60x60x4":36},SA2:{"120x80x6":24,"100x100x5":12,"60x60x4":36},SA3:{"120x80x6":24,"100x100x6":12,"60x60x4":36},SA4:{"140x100x6":24,"140x140x6":12,"80x80x3":36},SA5:{"140x140x6":24,"80x80x3":36},SA6:{"150x100x7":24,"140x140x6":12,"80x80x3":36}}},i={16:{SA1:{"100x100x3":33.32,"80x80x3":6.85,"60x60x3":16.17},SA2:{"100x100x3":33.32,"80x80x3":6.85,"60x60x3":16.17},SA3:{"100x100x3":33.32,"80x80x3":6.85,"60x60x3":16.17},SA4:{"100x100x3":33.32,"80x80x3":6.85,"60x60x3":16.17},SA5:{"100x100x3":33.32,"80x80x3":6.85,"60x60x3":16.17},SA6:{"100x100x3":33.32,"80x80x3":6.85,"60x60x3":16.17}},18:{SA1:{"100x100x4":37.53,"80x80x3":6.65,"60x60x3":22.68},SA2:{"100x100x4":37.53,"80x80x3":6.65,"60x60x3":22.68},SA3:{"100x100x4":37.53,"80x80x3":6.65,"60x60x3":22.68},SA4:{"100x100x4":37.53,"80x80x3":6.65,"60x60x3":22.68},SA5:{"100x100x4":37.53,"80x80x3":6.65,"60x60x3":22.68},SA6:{"100x100x4":37.53,"80x80x3":6.65,"60x60x3":22.68}},20:{SA1:{"100x100x4":40.76,"80x80x3":3.86,"60x60x3":28.48},SA2:{"100x100x4":40.76,"80x80x3":3.86,"60x60x3":28.48},SA3:{"100x100x4":40.76,"80x80x3":3.86,"60x60x3":28.48},SA4:{"100x100x4":40.76,"80x80x3":3.86,"60x60x3":28.48},SA5:{"100x100x4":40.76,"80x80x3":3.86,"60x60x3":28.48},SA6:{"100x100x4":40.76,"80x80x3":3.86,"60x60x3":28.48}},22:{SA1:{"120x120x4":45.88,"100x100x3":7.93,"80x80x3":30.8},SA2:{"120x120x4":45.88,"100x100x3":7.93,"80x80x3":30.8},SA3:{"120x120x4":45.88,"100x100x3":7.93,"80x80x3":30.8},SA4:{"120x120x4":45.88,"100x100x3":7.93,"80x80x3":30.8},SA5:{"120x120x4":45.88,"100x100x3":7.93,"80x80x3":30.8},SA6:{"120x120x4":45.88,"100x100x3":7.93,"80x80x3":30.8}},24:{SA1:{"100x100x4":50.16,"80x80x3":47.57},SA2:{"100x100x4":50.16,"80x80x3":47.57},SA3:{"100x100x5":50.16,"80x80x3":47.57},SA4:{"100x100x5":50.16,"80x80x3":47.57},SA5:{"120x120x5":50.09,"80x80x3":46.47},SA6:{"120x120x5":50.09,"80x80x3":46.47}},30:{SA1:{"120x80x6":34.38,"160x160x4":30,"60x60x4":50.78},SA2:{"120x80x6":34.38,"160x160x4":30,"60x60x4":50.78},SA3:{"120x80x6":34.38,"160x160x4":30,"60x60x4":50.78},SA4:{"140x100x6":34.29,"160x160x4":30,"80x80x3":50.65},SA5:{"140x140x6":34.29,"160x160x5":30,"80x80x3":50.25},SA6:{"150x100x7":34.26,"160x160x5":30,"80x80x3":50.01}}},A={16:{SA1:{"100x100x3":24,"80x80x3":12,"60x60x3":36},SA2:{"100x100x3":24,"80x80x3":12,"60x60x3":36},SA3:{"100x100x3":24,"80x80x3":12,"60x60x3":36},SA4:{"100x100x3":24,"80x80x3":12,"60x60x3":36},SA5:{"100x100x3":24,"80x80x3":12,"60x60x3":36},SA6:{"100x100x3":24,"80x80x3":12,"60x60x3":36}},18:{SA1:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA2:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA3:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA4:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA5:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA6:{"100x100x4":24,"80x80x3":12,"60x60x3":36}},20:{SA1:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA2:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA3:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA4:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA5:{"100x100x4":24,"80x80x3":12,"60x60x3":36},SA6:{"100x100x4":24,"80x80x3":12,"60x60x3":36}},22:{SA1:{"120x120x4":24,"100x100x3":12,"80x80x3":36},SA2:{"120x120x4":24,"100x100x3":12,"80x80x3":36},SA3:{"120x120x4":24,"100x100x3":12,"80x80x3":36},SA4:{"120x120x4":24,"100x100x3":12,"80x80x3":36},SA5:{"120x120x4":24,"100x100x3":12,"80x80x3":36},SA6:{"120x120x4":24,"100x100x3":12,"80x80x3":36}},24:{SA1:{"100x100x4":24,"80x80x3":36},SA2:{"100x100x4":24,"80x80x3":36},SA3:{"100x100x5":24,"80x80x3":36},SA4:{"100x100x5":24,"80x80x3":36},SA5:{"120x120x5":24,"80x80x3":36},SA6:{"120x120x5":24,"80x80x3":36}},30:{SA1:{"120x80x6":24,"160x160x4":12,"60x60x4":36},SA2:{"120x80x6":24,"160x160x4":12,"60x60x4":36},SA3:{"120x80x6":24,"160x160x4":12,"60x60x4":36},SA4:{"140x100x6":24,"160x160x4":12,"80x80x3":36},SA5:{"140x140x6":24,"160x160x5":12,"80x80x3":36},SA6:{"150x100x7":24,"160x160x5":12,"80x80x3":36}}};function S(x){return x<30?{p:0}:30==x?{p:1.5}:void 0}function a(x){return x<=5?{p:1550,type:"Прокат 5мм"}:6==x?{p:1860,type:"Прокат 6мм"}:void 0}function g(o,n){const t=function(x){return x<=30?{vertCount:2}:x<=54?{vertCount:4}:x<=78?{vertCount:6}:x<=108?{vertCount:8}:x<=114?{vertCount:10}:x>=120?{vertCount:12}:void 0}(n);let e;e=30===o?Math.ceil(n/60):t.vertCount/2;const c=function(x){return 16==x?{horizontConsts:48,constant:0,longCount:4}:18==x?{horizontConsts:60,constant:0,longCount:4}:20==x?{horizontConsts:54,constant:0,longCount:4}:22==x?{horizontConsts:62,constant:0,longCount:4}:24==x?{horizontConsts:74,constant:0,longCount:6}:30==x?{horizontConsts:36,constant:19.75,longCount:5}:void 0}(o),l=12*Math.ceil((n/6*c.constant+n*c.longCount+e*c.horizontConsts+24)/12),r=x["60x60x3"]*l;return console.log("Горизонтальних в'язів жорсткості (змійок) - "+e+" шт"),console.log("Поздовжніх - "+c.longCount+" шт"),console.log(`Труба 60х60х3 - ${l} м.п.;`),r}function h(x){return 16==x?{longCount:12,stock:24,truba:36}:18==x?{longCount:14,stock:24,truba:48}:20==x||22==x?{longCount:16,stock:24,truba:48}:24==x?{longCount:18,stock:24,truba:60}:30==x?{longCount:22,stock:24,truba:72}:void 0}function $(x){return x<=5?{sh:408,type:"Швелер №12"}:6==x?{sh:581,type:"Швелер №14"}:void 0}function f(x){return 16==x?{c:5.71,h:.8,k:.219}:18==x?{c:5.71,h:.9,k:.219}:20==x?{c:12.41,h:.3,k:.273}:22==x?{c:5.71,h:1.1,k:.273}:24==x?{c:5.71,h:1.2,k:.273}:30==x?{c:6.47,h:.8,k:.325}:void 0}function k(x,o,n){const t=function(x){return x<=2?{type:75}:x<=4?{type:60}:void 0}(n),e=x*o,c=1e4*Math.ceil(e*t.type/1e4);return console.log(`Витратні матеріали - ${c} грн`),c}function M(i,A,M,p,v){return function(x,e){const c=e/3+2,l=t(x),r=n(x),s=12*Math.ceil((c*l.arm+8*r.s+84)/12),u=Math.ceil(c*l.anker),i=Math.ceil(c*l.beton+.13*r.s),A=30*s,S=630*u,a=o*i;return console.log("Фундамент монолітний Фм1 - "+c+" шт"),console.log(`Арматура 12 - ${s} м.п.;`),console.log(`Анкера - ${u} шт;`),console.log(`Бетон - ${i} м3;`),A+S+a}(i,A)+function(x,n){const t=2*(x+n)-12,e=function(x){return x<=18?{arm:2.72,beton:.56*.9}:x<=24?{arm:2.83,beton:.5535}:x<=30?{arm:2.93,beton:.5985}:void 0}(x),c=12*Math.ceil((t*e.arm*2+10*t+84)/12),l=Math.ceil(t*e.beton*1.04),r=21*c,s=o*l;return console.log("Стрічковий фундамент - "+t+" м.п."),console.log(`Арматура 10 - ${c} м.п.;`),console.log(`Бетон - ${l} м3;`),r+s}(i,A)+e(i,A)+c(i,A,M)+function(o,n,t){const e=function(x){return 16==x?{s2:.81}:18==x?{s2:.91}:20==x?{s2:.33}:22==x?{s2:1.11}:24==x?{s2:1.21}:30==x?{s2:.82}:void 0}(o),c=function(x){return 16==x||18==x||20==x?{s1:8,s2:2}:22==x||24==x?{s1:8,s2:6}:x<=30?{s1:8,s2:10}:void 0}(o),l=n/3,r=function(x){return 16==x?{s1:33.4,s2:-6.8}:18==x?{s1:34.8,s2:-6.4}:20==x?{s1:35.64,s2:-5}:22==x?{s1:38.16,s2:14.28-10}:24==x?{s1:39.6,s2:10.8-10}:30==x?{s1:39.92,s2:5.48}:void 0}(o),s=12*Math.ceil((c.s1*t+r.s1+12)/12),u=12*Math.ceil((l*(t+e.s2)+(c.s2*t+r.s2)+12)/12),i=x["100x100x3"]*s,A=x["80x80x3"]*u;return console.log(`Стійка 100х100х3 - ${s} м.п.;`),console.log(`Стійка 80х80х3 - ${u} м.п.;`),i+A}(i,A,M)+l(i,A)+function(o,n){const t=n-3.5,e=r(o),c=12*Math.ceil((2*Math.sqrt(Math.pow(t,2)+Math.pow(6,2))*e.vertCount+24)/12),l=1*e.vertCount,s=4*e.vertCount,u=x["80x80x3"]*c,i=390*l,A=270*s;return console.log("Вертикальних в'язів жорсткості - "+e.vertCount+" шт"),console.log(`Труба 80х80х3 - ${c} м.п.;`),console.log(`Пластина 300х300х10 - ${l} шт;`),console.log(`Пластина 250х250х10 - ${s} шт;`),u+i+A}(A,M)+function(o,n,t){const e=n/6+1,c=function(x,o){return s[x][`SA${o}`]}(o,t),l=function(x,o){return u[x][`SA${o}`]}(o,t);let r=0;console.log("Ферма "+o+"м - "+e+" шт");for(let o in c)r+=12*Math.ceil((c[o]*e+l[o])/12)*x[o],console.log(`${o} = ${12*Math.ceil((c[o]*e+l[o])/12)} м.п.`);const i=S(o),A=a(t),g=e*i.p,h=A.p*g;return console.log(`${A.type} - ${g} м2;`),r+h}(i,A,p)+g(i,A)+function(x,o,n){const t=h(x),e=$(n),c=o*t.longCount+t.stock,l=e.sh*c;return console.log("Покрівельних прогонів - "+t.longCount+" шт"),console.log(`${e.type} - ${c} м.п.;`),l}(i,A,p)+function(o,n,t){const e=function(x,o){return 16==x?{h:o-.5-.46+.8,c:48}:18==x?{h:o-.5-.46+.9,c:60}:20==x?{h:o-.5-.46+.3,c:96}:22==x?{h:o-.5-.46+1.1,c:72}:24==x?{h:o-.5-.46+1.2,c:84}:30==x?{h:o-.5-.46+.8,c:120}:void 0}(o,t),c=Math.ceil(e.h/1.04+1),l=2*(o+n),r=12*Math.ceil((l*c+e.c+36)/12),s=x["40x40x3"]*r;return console.log("Стінових прогонів - "+c+" шт"),console.log(`Труба 40х40х3 - ${r} м.п.;`),s}(i,A,M)+function(o,n){const t=n/1.5+2,e=function(x){return x<=24?{r:4}:30==x?{r:6}:void 0}(o),c=12*Math.ceil((1.6*t+6*n+24)/12),l=2*n+2,r=e.r,s=x["40x40x3"]*c,u=533*l,i=14500*r;return console.log("Конструкція вентиляційної системи"),console.log(`Труба 40х40х3 - ${c} м.п.;`),console.log(`Полікарбонат - ${l} м.п.;`),console.log(`Автоматична решітка - ${r} шт;`),s+u+i}(i,A)+function(o){const n=function(x){if(x<=30)return{g:2}}(o),t=72*n.g,e=n.g,c=x["60x60x3"]*t,l=14500*e;return console.log(`Ворта - ${n.g} шт`),console.log(`Труба 60х60х3 - ${t} м.п.;`),console.log(`Фурнітура - ${e} шт;`),c+l}(i)+function(x,o,n){const t=function(x){return 16==x?{l:8.54,k:.219}:18==x?{l:9.55,k:.219}:20==x?{l:10.74,k:.273}:22==x?{l:11.56,k:.273}:24==x?{l:12.86,k:.273}:30==x?{l:15.9,k:.325}:void 0}(x),e=2*Math.ceil((o+t.k)/.99),c=Math.ceil(e*t.l*1.04),l=280*c;console.log(`Покрівельний профлист 60-05 - ${c} м2`);const r=f(x),s=Math.tan(Math.PI/180*r.c)*(x/2)+r.h+n-.46+.14,u=Math.ceil(x/2/1.1),i=(s+(s-1.1*Math.tan(Math.PI/180*r.c)*(u-1)))*(u/2)*4,A=n+r.h-.46-.5,S=2*Math.ceil((o+r.k)/1.1)*A,a=Math.ceil(1.15*(i+S+5.52)),g=260*a;console.log(`Стіновий профлист 20-045 - ${a} м2`);const h=Math.ceil((o+t.k)/.99+1),$=30*Math.ceil(h*t.l*2/30)+60,k=4*$;console.log(`Ущільнювач - ${$} м.п.`);const M=4*Math.ceil(t.l/1.9),p=4*Math.ceil((n+r.h)/1.9),v=2*Math.ceil((o+r.k)/1.9),C=Math.ceil((o+r.k)/1.9)+1,y=M+p+v+C+24+14,d=230*M+230*p+191*v+376*C+4584+3808;console.log(`Добірних планок - ${y} шт`),console.log(`Вітрова планка - ${M} шт`),console.log(`Торцева планка - ${p} шт`),console.log(`П-планка - ${v} шт`),console.log(`Коньок - ${C} шт`),console.log("Торцева планка воріт - 24 шт"),console.log("Планка воріт - 14 шт");const m=a+c,b=2*o+2,I=250*Math.ceil((4*c+6*a+11*b)/250),w=250*Math.ceil((3*m+12*y)/250),z=1.1*I+1*w;return console.log(`Саморізи по металу - ${I} шт`),console.log(`Саморізи по дереву - ${w} шт`),l+g+k+d+z}(i,A,M)+k(i,A,v)}function p(s,u,M,p,v){return function(x,e){const c=e/3+2,l=t(x),r=(n(x),12*Math.ceil((c*l.arm+84)/12)),s=Math.ceil(c*l.anker),u=Math.ceil(c*l.beton),i=30*r,A=630*s,S=o*u;return console.log("Фундамент монолітний Фм1 - "+c+" шт"),console.log(`Арматура 12 - ${r} м.п.;`),console.log(`Анкера - ${s} шт;`),console.log(`Бетон - ${u} м3;`),i+A+S}(s,u)+e(s,u)+c(s,u,M)+l(s,u)+function(o,n){const t=n-3.5,e=r(o),c=12*Math.ceil(2*Math.sqrt(Math.pow(t,2)+Math.pow(6,2))*e.vertCount/6),l=8*e.vertCount,s=x["80x80x3"]*c,u=270*l;return console.log("Вертикальних в'язів жорсткості - "+e.vertCount+" шт"),console.log(`Труба 80х80х3 - ${c} м.п.;`),console.log(`Пластина 250х250х10 - ${l} шт;`),s+u}(u,M)+function(o,n,t){const e=n/6+1,c=function(x,o){return i[x][`SA${o}`]}(o,t),l=function(x,o){return A[x][`SA${o}`]}(o,t);let r=0;console.log("Ферма "+o+"м - "+e+" шт");for(let o in c)r+=12*Math.ceil((c[o]*e+l[o])/12)*x[o],console.log(`${o} = ${12*Math.ceil((c[o]*e+l[o])/12)} м.п.`);const s=S(o),u=a(t),g=e*s.p,h=u.p*g;return console.log(`${u.type} - ${g} м2;`),r+h}(s,u,p)+g(s,u)+function(o,n,t){const e=h(o),c=$(t),l=n*e.longCount+e.stock,r=e.truba,s=c.sh*l,u=x["40x40x3"]*r;return console.log("Покрівельних прогонів - "+e.longCount+" шт"),console.log(`${c.type} - ${l} м.п.;`),console.log(`Труба 40х40х3 - ${r} м.п.;`),s+u}(s,u,p)+function(x,o){const n=function(x){return 16==x?{l:8.29,k:.219}:18==x?{l:9.3,k:.219}:20==x?{l:10.49,k:.273}:22==x?{l:11.31,k:.273}:24==x?{l:12.61,k:.273}:30==x?{l:15.65,k:.325}:void 0}(x),t=2*Math.ceil((o+n.k)/.99),e=Math.ceil(t*n.l*1.04),c=280*e;console.log(`Покрівельний профлист 60-05 - ${e} м2`);const l=Math.ceil((o+n.k)/.99+1),r=30*Math.ceil(l*n.l*2/30)+60;console.log(`Ущільнювач - ${r} м.п.`);const s=f(x),u=4*Math.ceil(n.l/1.9),i=2*Math.ceil((o+s.k)/1.9),A=Math.ceil((o+s.k)/1.9)+1,S=u+i+A,a=230*u+191*i+376*A;console.log(`Добірних планок - ${S} шт`),console.log(`Вітрова планка - ${u} шт`),console.log(`П-планка - ${i} шт`),console.log(`Коньок - ${A} шт`);const g=e,h=250*Math.ceil(4*e/250),$=250*Math.ceil((3*g+12*S)/250),k=1.1*h+1*$;return console.log(`Саморізи по металу - ${h} шт`),console.log(`Саморізи по дереву - ${$} шт`),c+a+k}(s,u)+k(s,u,v)}const v=x=>new Intl.NumberFormat("ua",{style:"currency",minimumFractionDigits:0,currency:"UAH"}).format(x),C=x=>new Intl.NumberFormat("ua",{minimumFractionDigits:0}).format(x);document.getElementById("form").addEventListener("submit",(function(x){x.preventDefault();const o=new FormData(x.target),n=parseInt(o.get("width")),t=parseInt(o.get("length")),e=parseFloat(o.get("height")),c=parseInt(o.get("snow_area")),l=parseInt(o.get("type")),r=function(x){switch(x){case 1:return M;case 2:case 4:alert("В розробці");break;case 3:return p}}(l),s=function(x,o,n){const t=function(x){return x<=2?{type:660}:x<=4?{type:500}:void 0}(n),e=x*o;return t.type*e}(n,t,l);function u(x,o){return x*o}let i=0;i+=r(n,t,e,c,l)+s,document.getElementById("square").value=C(u(n,t))+" м2",document.getElementById("out").value=v(i),document.getElementById("work").value=v(s),document.getElementById("square_meter").value=C(Math.ceil(i/u(n,t)))+" грн/м2"}))})();