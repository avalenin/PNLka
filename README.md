<!doctype html>
<!-- index.html · ПНР Контроль v2.1 — заказчики + синхронизация команды через Supabase. Один файл, заменить целиком. -->
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>ПНР Контроль — заказчики, объекты, работы</title>
<meta name="theme-color" content="#0B1220">
<meta name="color-scheme" content="dark">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="ПНР">
<link id="mfst" rel="manifest">
<link id="appleIcon" rel="apple-touch-icon">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='22' fill='%230B1220'/%3E%3Cpath d='M62 8 20 58h24l-7 34 45-52H56l13-32z' fill='%233DDC84'/%3E%3C/svg%3E">
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@700;900&family=Manrope:wght@400;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
<style>
:root{color-scheme:dark;--bg:#0B1220;--bg0:#070C16;--s1:#141F38;--s2:#0F1728;--fld:#0D1526;
--ln:rgba(122,152,204,.16);--ln2:rgba(122,152,204,.32);--ink:#EAF1FF;--dim:#9FB0CC;--faint:#6E80A4;
--amber:#FFB224;--cyan:#2BD9FF;--violet:#B78CFF;--green:#3DDC84;--red:#FF5D5D;--magenta:#FF4FD8;--blue:#6C8CFF;--lime:#C9F24D;
--e:cubic-bezier(.22,.9,.28,1);
--fh:'Unbounded','Bahnschrift','Segoe UI',system-ui,sans-serif;
--fb:'Manrope','Segoe UI',system-ui,-apple-system,sans-serif;
--fm:'JetBrains Mono','Cascadia Mono',Consolas,ui-monospace,monospace}
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
[hidden]{display:none!important}html.lock{overflow:hidden}
body{font:15px/1.45 var(--fb);color:var(--ink);background:linear-gradient(180deg,var(--bg),var(--bg0) 70%);min-height:100dvh;overflow-x:hidden}
button{font:inherit;color:inherit;background:none;border:0;cursor:pointer;touch-action:manipulation}
input,select{font:inherit}
svg.i{width:18px;height:18px;flex:none;display:block}
:focus-visible{outline:2px solid var(--cyan);outline-offset:2px;border-radius:8px}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
::-webkit-scrollbar{width:10px;height:8px}::-webkit-scrollbar-track{background:#0a101e}
::-webkit-scrollbar-thumb{background:linear-gradient(180deg,#0EA5E9,#8B5CF6);border-radius:8px;border:2px solid #0B1220}
*{scrollbar-width:thin;scrollbar-color:#3a5f8f #0a101e}
.c1{--c:#2BD9FF;--cs:rgba(43,217,255,.12);--cb:rgba(43,217,255,.42)}
.c2{--c:#FFB224;--cs:rgba(255,178,36,.12);--cb:rgba(255,178,36,.42)}
.c3{--c:#B78CFF;--cs:rgba(183,140,255,.13);--cb:rgba(183,140,255,.44)}
.c4{--c:#FF4FD8;--cs:rgba(255,79,216,.12);--cb:rgba(255,79,216,.42)}
.c5{--c:#6C8CFF;--cs:rgba(108,140,255,.14);--cb:rgba(108,140,255,.46)}
.c6{--c:#C9F24D;--cs:rgba(201,242,77,.12);--cb:rgba(201,242,77,.42)}
.cw{--c:#FFB224;--cs:rgba(255,178,36,.1);--cb:rgba(255,178,36,.45)}
.cx{--c:#9FB0CC;--cs:rgba(159,176,204,.12);--cb:rgba(159,176,204,.35)}
.bg{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden}
.bg i{position:absolute;display:block;width:60vmax;height:60vmax;border-radius:50%;filter:blur(90px);opacity:.5}
.b1{top:-28vmax;left:-18vmax;background:radial-gradient(circle,rgba(14,165,233,.22),transparent 65%);animation:dr 46s var(--e) infinite alternate}
.b2{bottom:-30vmax;right:-20vmax;background:radial-gradient(circle,rgba(255,138,0,.14),transparent 65%);animation:dr 58s var(--e) infinite alternate-reverse}
.b3{top:20%;right:-26vmax;background:radial-gradient(circle,rgba(139,92,246,.14),transparent 65%);animation:dr 64s var(--e) infinite alternate}
.b4{bottom:-24vmax;left:12vmax;background:radial-gradient(circle,rgba(61,220,132,.24),transparent 62%);opacity:0;transition:opacity 1.2s}
@keyframes dr{to{transform:translate(8vmax,6vmax) scale(1.1)}}
.gridbg{position:absolute;inset:0;background-image:linear-gradient(rgba(148,170,210,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(148,170,210,.05) 1px,transparent 1px);background-size:44px 44px;-webkit-mask-image:radial-gradient(120% 90% at 50% 0,#000 30%,transparent 90%);mask-image:radial-gradient(120% 90% at 50% 0,#000 30%,transparent 90%)}
.grain{position:absolute;inset:0;opacity:.05;mix-blend-mode:overlay;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E")}
header{position:sticky;top:0;z-index:50;background:rgba(10,16,30,.8);backdrop-filter:blur(16px) saturate(150%);border-bottom:1px solid var(--ln);padding-top:env(safe-area-inset-top)}
.hw{max-width:1080px;margin:0 auto;padding:9px 14px;display:flex;flex-direction:column;gap:8px}
.row{display:flex;align-items:center;gap:9px}
.brand{display:flex;align-items:center;gap:9px;min-width:0}
.bic{width:36px;height:36px;flex:none;border-radius:11px;display:grid;place-items:center;background:linear-gradient(150deg,#15223C,#0D1526);border:1px solid var(--ln2);box-shadow:0 0 18px rgba(61,220,132,.2)}
.brand h1{font:900 clamp(14px,4vw,17px)/1 var(--fh);letter-spacing:.3px;white-space:nowrap;background:linear-gradient(90deg,#EAF1FF 30%,#9BE8FF 70%,#B78CFF);-webkit-background-clip:text;background-clip:text;color:transparent}
.brand p{font:600 9.5px/1 var(--fm);letter-spacing:1.4px;text-transform:uppercase;color:var(--faint);margin-top:4px;white-space:nowrap}
.ctitle{display:flex;align-items:center;gap:8px;min-width:0;font:700 clamp(13px,3.6vw,16px) var(--fh)}
.ctitle svg{width:17px;height:17px;color:var(--cyan)}
.ctitle span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.sp{flex:1}
.ring{position:relative;width:40px;height:40px;flex:none}
.ring svg{width:40px;height:40px;display:block}
.rbg{fill:none;stroke:rgba(122,152,204,.18);stroke-width:4.5}
.rfg{fill:none;stroke:url(#rg);stroke-width:4.5;stroke-linecap:round;stroke-dasharray:106.8;stroke-dashoffset:106.8;transition:stroke-dashoffset .9s var(--e)}
.ring b{position:absolute;inset:0;display:grid;place-items:center;font:700 9px var(--fm);color:var(--dim)}
.ib{position:relative;width:40px;height:40px;flex:none;display:grid;place-items:center;border-radius:11px;border:1px solid var(--ln);background:rgba(22,34,59,.55);color:var(--dim);transition:.2s}
.ib:hover{color:var(--ink);border-color:rgba(43,217,255,.45);box-shadow:0 0 14px rgba(43,217,255,.18);transform:translateY(-1px)}
.ib:active{transform:scale(.94)}
.ib.sm{width:32px;height:32px;border-radius:9px}.ib.sm svg{width:15px;height:15px}
.ib.ac{width:36px;height:36px;background:none}.ib.ac svg{width:16px;height:16px}
.ib.dg:hover{color:var(--red);border-color:rgba(255,93,93,.5)}
.dot{position:absolute;right:5px;top:5px;width:8px;height:8px;border-radius:50%;background:var(--faint);border:1.5px solid #0F1728}
.dot.ok{background:var(--green);box-shadow:0 0 8px var(--green)}.dot.wn{background:var(--amber)}
.pri{display:inline-flex;align-items:center;justify-content:center;gap:8px;height:40px;padding:0 15px;border-radius:12px;font:800 13.5px var(--fb);color:#1A1206;background:linear-gradient(135deg,#FFC53D,#FF8A00 58%,#FF6A00);box-shadow:0 6px 22px -6px rgba(255,138,0,.55),inset 0 1px 0 rgba(255,255,255,.35);transition:.2s}
.pri:hover{filter:brightness(1.07);transform:translateY(-1px)}.pri:active{transform:scale(.96)}.pri svg{width:16px;height:16px}
.gh{display:inline-flex;align-items:center;justify-content:center;gap:7px;height:38px;padding:0 13px;border-radius:10px;border:1px solid var(--ln2);color:var(--dim);font:700 12.5px var(--fb);background:rgba(22,34,59,.4);transition:.2s}
.gh:hover{color:var(--ink);border-color:rgba(43,217,255,.5)}.gh:active{transform:scale(.96)}.gh svg{width:15px;height:15px}
.gh.big{height:42px;font-size:13px}.gh.sm{height:31px;font-size:11.5px;padding:0 10px}
.dg{display:inline-flex;align-items:center;justify-content:center;gap:7px;height:42px;padding:0 13px;border-radius:11px;color:var(--red);border:1px solid rgba(255,93,93,.4);background:rgba(255,93,93,.08);font:700 12.5px var(--fb)}
.dg:hover{background:rgba(255,93,93,.16)}.dg svg{width:15px;height:15px}
.srch{position:relative;flex:1;min-width:0}
.srch>svg{position:absolute;left:11px;top:50%;transform:translateY(-50%);width:16px;height:16px;color:var(--faint)}
.srch input{width:100%;height:42px;border-radius:12px;border:1px solid var(--ln);background:rgba(13,21,38,.75);color:var(--ink);font-size:16px;padding:0 38px 0 36px}
.srch input::placeholder{color:var(--faint)}
.srch input:focus{outline:none;border-color:rgba(43,217,255,.55);box-shadow:0 0 0 3px rgba(43,217,255,.14)}
.srch .ib{position:absolute;right:5px;top:5px}
.srt{flex:none}.srt select{appearance:none;height:34px;border-radius:10px;border:1px solid var(--ln);background:rgba(22,34,59,.55);color:var(--dim);font:700 11.5px var(--fb);padding:0 26px 0 11px;cursor:pointer;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' viewBox='0 0 24 24' fill='none' stroke='%239FB0CC' stroke-width='2.6' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 8px center}
.chips{display:flex;gap:6px;flex:1;min-width:0;overflow-x:auto;scrollbar-width:none;padding-bottom:2px}
.chips::-webkit-scrollbar{height:3px}
.ch{flex:none;display:inline-flex;align-items:center;gap:6px;height:34px;padding:0 11px;border-radius:999px;font:600 11.5px var(--fm);color:var(--dim);border:1px solid var(--ln);background:rgba(22,34,59,.45);transition:.2s}
.ch b{font:700 10.5px var(--fm);padding:1px 6px;border-radius:6px;background:rgba(122,152,204,.16)}
.ch:hover{border-color:var(--ln2);color:var(--ink)}
.ch.on{color:var(--t);border-color:var(--t);background:color-mix(in srgb,var(--t) 13%,transparent)}
.ch.on b{background:color-mix(in srgb,var(--t) 22%,transparent);color:var(--t)}
.wrap{max-width:1080px;margin:0 auto;padding:0 14px;position:relative;z-index:2}
main{padding:12px 0 120px}
.bar{display:flex;align-items:center;gap:9px;padding:8px 12px;margin-bottom:12px;border-radius:12px;border:1px solid var(--ln);background:linear-gradient(100deg,rgba(22,34,59,.7),rgba(13,21,38,.5))}
.bar .d{width:9px;height:9px;flex:none;border-radius:50%;background:var(--faint)}
.bar .d.ok{background:var(--green);box-shadow:0 0 10px var(--green)}.bar .d.wn{background:var(--amber);box-shadow:0 0 10px var(--amber)}
.bar span.tx{flex:1;min-width:0;font:600 10.5px var(--fm);color:var(--dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.subbar{display:flex;align-items:center;gap:9px;margin-bottom:12px;font:600 11.5px var(--fm);color:var(--faint)}
.subbar b{color:var(--dim)}
.cgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(300px,100%),1fr));gap:14px}
.cc{display:flex;align-items:center;gap:13px;text-align:left;padding:16px;border-radius:16px;border:1px solid var(--ln);background:linear-gradient(150deg,var(--s1),var(--s2) 70%);transition:transform .22s var(--e),border-color .22s,box-shadow .25s;animation:in .5s var(--e) backwards}
.cc:hover{transform:translateY(-2px);border-color:var(--cb);box-shadow:0 12px 34px -16px var(--cs)}
.cc.done{border-color:rgba(61,220,132,.5)}
.cc-ic{width:46px;height:46px;flex:none;border-radius:13px;display:grid;place-items:center;color:var(--c);background:var(--cs);border:1px solid var(--cb)}
.cc-ic svg{width:22px;height:22px}
.cc-main{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px}
.cc-main>b{font:700 15px var(--fh);letter-spacing:.2px;overflow-wrap:anywhere}
.cc-main>span.m{font-size:11.5px;color:var(--dim)}
.cc-bar{height:5px;border-radius:3px;background:rgba(148,170,210,.14);overflow:hidden}
.cc-bar i{display:block;height:100%;border-radius:3px;background:linear-gradient(90deg,var(--c),var(--green));transition:width .5s var(--e)}
.cc-meta{flex:none;text-align:right;display:flex;flex-direction:column;align-items:flex-end;gap:4px}
.cc-meta b{font:700 16px var(--fm);color:var(--c)}
.cc-meta svg{width:16px;height:16px;color:var(--green)}
.lst{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(340px,100%),1fr));gap:14px}
.card{position:relative;min-width:0;padding:15px;border-radius:18px;overflow:hidden;background:linear-gradient(160deg,var(--s1),var(--s2) 70%);border:1px solid var(--ln);box-shadow:0 10px 30px -18px #000;transition:transform .25s var(--e),border-color .25s,box-shadow .3s,background .4s;animation:in .5s var(--e) backwards}
@keyframes in{from{opacity:0;transform:translateY(14px)}}
.card:before{content:'';position:absolute;left:0;right:0;top:0;height:2px;opacity:.55;background:linear-gradient(90deg,transparent,rgba(43,217,255,.6),rgba(183,140,255,.5),transparent)}
.card:hover{transform:translateY(-2px);border-color:var(--ln2)}
.card.closed{background:linear-gradient(150deg,rgba(61,220,132,.17),rgba(61,220,132,.05) 46%,rgba(15,26,32,.95));border-color:rgba(61,220,132,.55);box-shadow:0 12px 44px -14px rgba(61,220,132,.4)}
.card.closed:before{opacity:1;background:linear-gradient(90deg,transparent,#3DDC84 30%,#A3F7BF 50%,#3DDC84 70%,transparent)}
.card.closed h2{color:#F2FFF7}
.card.pulse{animation:pulse 1.1s ease-out}
@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(61,220,132,.55)}100%{box-shadow:0 0 0 28px rgba(61,220,132,0)}}
.cust{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:9px}
.lnk{display:inline-flex;align-items:center;gap:6px;max-width:100%;padding:4px 8px;border-radius:9px;font:700 11px var(--fm);letter-spacing:.5px;color:var(--c);background:var(--cs);border:1px solid var(--cb);transition:.2s}
.lnk svg{width:13px;height:13px}
.lnk u{text-decoration:none;border-bottom:1px dashed currentColor;padding-bottom:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.lnk:hover{transform:translateY(-1px);border-color:var(--c);box-shadow:0 0 14px var(--cs)}
.lnk.un{border-style:dashed;font-weight:600}
.lnk.m{--c:#EAF1FF;--cs:rgba(234,241,255,.07);--cb:rgba(234,241,255,.22)}
.top{display:flex;align-items:flex-start;gap:9px}
.card h2{flex:1;min-width:0;font:700 clamp(14.5px,2.3vw,17px)/1.4 var(--fh);overflow-wrap:anywhere}
.badge{flex:none;display:inline-flex;align-items:center;gap:5px;margin-top:2px;font:700 10px var(--fm);letter-spacing:1.1px;text-transform:uppercase;padding:5px 8px;border-radius:8px;white-space:nowrap}
.badge svg{width:11px;height:11px}
.bw{color:var(--amber);background:rgba(255,178,36,.1);border:1px solid rgba(255,178,36,.38)}
.br{color:var(--cyan);background:rgba(43,217,255,.1);border:1px solid rgba(43,217,255,.42)}
.bc{color:#0E2417;background:linear-gradient(135deg,#4ADE80,#22C55E);border:1px solid rgba(61,220,132,.7)}
.bn{color:var(--dim);border:1px dashed var(--ln2)}
.bw i{width:6px;height:6px;border-radius:50%;background:var(--amber);animation:bl 2s infinite}
@keyframes bl{50%{opacity:.35}}
.tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:9px}
.tag{display:inline-flex;align-items:center;gap:5px;font:600 10.5px var(--fm);padding:4px 8px;border-radius:7px;border:1px solid var(--ln);background:rgba(22,34,59,.55);color:var(--dim)}
.tag svg{width:11px;height:11px}
.tag.k{color:var(--cyan);border-color:rgba(43,217,255,.35);background:rgba(43,217,255,.08)}
.tag.wn{color:var(--amber);border-color:rgba(255,178,36,.45);background:rgba(255,178,36,.1)}
.tag.bd{color:var(--red);border-color:rgba(255,93,93,.5);background:rgba(255,93,93,.1)}
.tag.ok{color:var(--green);border-color:rgba(61,220,132,.45);background:rgba(61,220,132,.1)}
.wh{display:flex;align-items:center;gap:8px;margin:13px 0 8px}
.wh span{flex:1;min-width:0;font:700 10px var(--fm);letter-spacing:1.4px;text-transform:uppercase;color:var(--faint)}
.wh span.ok{color:var(--green)}
.addw{display:inline-flex;align-items:center;gap:5px;height:28px;padding:0 9px;border-radius:8px;font:700 10px var(--fm);color:var(--dim);border:1px dashed var(--ln2);background:rgba(22,34,59,.4)}
.addw svg{width:12px;height:12px}.addw:hover{color:var(--cyan);border-color:rgba(43,217,255,.5);border-style:solid}
.works{display:flex;flex-direction:column;gap:8px}
.now{display:flex;flex-wrap:wrap;align-items:center;gap:9px;padding:13px;border-radius:12px;border:1px dashed rgba(255,178,36,.45);background:rgba(255,178,36,.06);color:var(--amber);font:700 12.5px var(--fb)}
.now span{flex:1;min-width:110px}
.w{padding:10px 11px;border-radius:12px;background:rgba(13,21,38,.6);border:1px solid rgba(122,152,204,.12);transition:.3s}
.w.d1{background:linear-gradient(120deg,var(--cs),rgba(13,21,38,.5));border-color:var(--cb)}
.w.d2{background:linear-gradient(120deg,rgba(61,220,132,.12),rgba(61,220,132,.04));border-color:rgba(61,220,132,.38)}
.wt{display:flex;align-items:center;gap:7px}
.code{font:700 10.5px var(--fm);padding:2px 7px;border-radius:6px;flex:none;color:var(--c);background:var(--cs);border:1px solid var(--cb)}
.wt b{flex:1;min-width:0;font:700 13px var(--fb);overflow-wrap:anywhere}
.x{width:26px;height:26px;flex:none;display:grid;place-items:center;border-radius:7px;color:var(--faint);opacity:.7}
.x svg{width:12px;height:12px}.x:hover{opacity:1;color:var(--red);background:rgba(255,93,93,.12)}
.per{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin:6px 0 8px}
.av{width:22px;height:22px;flex:none;border-radius:50%;display:grid;place-items:center;font:700 9px var(--fm);color:var(--c);background:var(--cs);border:1px solid var(--cb)}
.av.no,.nm.no{color:var(--amber);border-color:rgba(255,178,36,.55)}
.av.no{background:rgba(255,178,36,.1);border-style:dashed}
.nm{font:700 12.5px var(--fb);overflow-wrap:anywhere}.nm.no{font-style:italic}
.rl{font-size:10.5px;color:var(--faint)}
.cks{display:flex;flex-wrap:wrap;gap:8px}
.ck{position:relative;flex:1 1 132px;min-width:0;display:flex;align-items:center;gap:7px;min-height:40px;padding:7px 10px;border-radius:10px;cursor:pointer;user-select:none;border:1px solid rgba(122,152,204,.18);background:rgba(11,19,34,.7);transition:.25s}
.ck:active{transform:scale(.985)}
.ck input{position:absolute;left:10px;top:50%;transform:translateY(-50%);width:24px;height:24px;opacity:0;margin:0;pointer-events:none}
.bx{width:22px;height:22px;flex:none;border-radius:6px;display:grid;place-items:center;border:2px solid rgba(154,171,204,.45);background:#0B1322;transition:.25s var(--e)}
.bx svg{width:100%;height:100%;opacity:0}
.bx path{fill:none;stroke:#08130C;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}
.ck input:checked~.bx{background:var(--c);border-color:var(--c);box-shadow:0 2px 10px var(--cs)}
.ck.r input:checked~.bx{background:linear-gradient(145deg,#4ADE80,#1FB865);border-color:var(--green)}
.ck input:checked~.bx svg{opacity:1}
.ck input:focus-visible~.bx{box-shadow:0 0 0 3px rgba(43,217,255,.35)}
.bx.an{animation:pop .32s cubic-bezier(.3,1.6,.5,1)}
.bx.an path{stroke-dasharray:23;animation:dw .3s ease-out forwards}
@keyframes pop{45%{transform:scale(1.16)}}
@keyframes dw{from{stroke-dashoffset:23}}
.ck.on{background:var(--cs);border-color:var(--cb)}
.ck.r.on{background:rgba(61,220,132,.11);border-color:rgba(61,220,132,.4)}
.ck em{font:700 12px var(--fb);font-style:normal;color:var(--dim);white-space:nowrap}
.ck.on em{color:var(--ink)}.ck.r.on em{color:#BFF5D6}
.ck s{margin-left:auto;font:700 10.5px var(--fm);text-decoration:none;color:var(--green);white-space:nowrap}
.foot{display:flex;align-items:center;gap:9px;margin-top:12px}
.pg{display:flex;gap:6px;flex:1;min-width:0}
.pg i{display:flex;gap:3px;flex:1;min-width:0}
.pg u{height:6px;flex:1;border-radius:4px;background:rgba(148,170,210,.14);text-decoration:none;transition:.4s}
.pg u.on{background:var(--c);box-shadow:0 0 9px var(--cs)}
.pg u.r.on{background:linear-gradient(90deg,#3DDC84,#22C55E)}
.closed .pg u.on{background:linear-gradient(90deg,#3DDC84,#22C55E)}
.pl{font:700 11px var(--fm);color:var(--dim);white-space:nowrap}.closed .pl{color:var(--green)}
.acts{display:flex;gap:4px}
.empty{text-align:center;padding:52px 18px}
.empty div{width:74px;height:74px;margin:0 auto 16px;border-radius:50%;display:grid;place-items:center;border:1.5px dashed var(--ln2);color:var(--faint);background:rgba(22,34,59,.35)}
.empty div svg{width:29px;height:29px}
.empty h3{font:700 16px var(--fh);margin-bottom:8px}
.empty p{font-size:13px;color:var(--dim);max-width:360px;margin:0 auto 16px}
.ft{display:flex;flex-wrap:wrap;align-items:center;gap:9px;padding:15px 0 calc(20px + env(safe-area-inset-bottom));border-top:1px solid var(--ln);position:relative;z-index:2}
.ft>span{flex:1;min-width:190px;font:600 10.5px var(--fm);color:var(--faint)}
.fb{display:inline-flex;align-items:center;gap:6px;height:31px;padding:0 10px;border-radius:9px;font:600 10.5px var(--fm);color:var(--dim);border:1px solid var(--ln);background:rgba(22,34,59,.4)}
.fb:hover{color:var(--ink);border-color:var(--ln2)}.fb svg{width:13px;height:13px}
.scr{position:fixed;inset:0;z-index:100;display:flex;align-items:flex-end;justify-content:center;background:rgba(4,8,18,.74);backdrop-filter:blur(6px);animation:fi .2s}
@keyframes fi{from{opacity:0}}
.scr.out{animation:fo .18s forwards}@keyframes fo{to{opacity:0}}
.sh{width:100%;max-width:560px;max-height:90dvh;display:flex;flex-direction:column;background:linear-gradient(180deg,#152139,#0F1728);border:1px solid var(--ln2);border-bottom:0;border-radius:22px 22px 0 0;box-shadow:0 -20px 70px #000;animation:up .3s var(--e)}
.sh.nw{max-width:450px}
@keyframes up{from{transform:translateY(50px);opacity:0}}
.scr.out .sh{animation:dn .18s forwards}@keyframes dn{to{transform:translateY(50px);opacity:0}}
.hd{width:42px;height:4px;border-radius:4px;margin:9px auto 0;flex:none;background:linear-gradient(90deg,#0EA5E9,#8B5CF6);opacity:.6}
.shh{display:flex;align-items:center;gap:9px;padding:13px 16px;border-bottom:1px solid var(--ln);flex:none}
.shh div{flex:1;min-width:0}
.shh h2{font:700 15.5px var(--fh)}
.shh p{font-size:11.5px;color:var(--faint);margin-top:2px;overflow-wrap:anywhere}
.shb{position:relative;overflow-y:auto;padding:16px;flex:1}
.shf{display:flex;align-items:center;gap:8px;padding:12px 16px calc(12px + env(safe-area-inset-bottom));border-top:1px solid var(--ln);flex:none}
@media(min-width:640px){.scr{align-items:center;padding:22px}.sh{border-radius:22px;border-bottom:1px solid var(--ln2)}.hd{display:none}}
.tabs{display:flex;gap:6px;padding:10px 16px 0;flex:none}
.tb{flex:1;height:35px;border-radius:10px;font:700 10px var(--fm);letter-spacing:.4px;text-transform:uppercase;color:var(--dim);border:1px solid var(--ln);background:rgba(13,21,38,.6)}
.tb.on{color:#08130C;background:linear-gradient(135deg,#2BD9FF,#8B5CF6);border-color:transparent}
.f{display:block;margin-bottom:13px;min-width:0}
.f>span{display:flex;flex-wrap:wrap;align-items:center;gap:6px;font:700 10px var(--fm);letter-spacing:1.2px;text-transform:uppercase;color:var(--dim);margin-bottom:6px;line-height:1.35}
.f>span svg{width:12px;height:12px}
.f input,.f select{width:100%;height:44px;border-radius:12px;border:1px solid var(--ln);background:var(--fld);color:var(--ink);font-size:16px;padding:0 12px}
.f select{appearance:none;cursor:pointer;padding-right:31px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' viewBox='0 0 24 24' fill='none' stroke='%239FB0CC' stroke-width='2.4' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 11px center}
.f input:focus,.f select:focus{outline:none;border-color:rgba(43,217,255,.55);box-shadow:0 0 0 3px rgba(43,217,255,.14)}
.f input.bad{border-color:rgba(255,93,93,.65);animation:sk .3s}
@keyframes sk{25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}
.err{display:block;font:600 11px var(--fb);color:var(--red);margin-top:5px}
.two{display:grid;grid-template-columns:1fr 1fr;gap:10px}
@media(max-width:400px){.two{grid-template-columns:1fr}}
.sec{margin-top:4px;padding-top:13px;border-top:1px dashed var(--ln);outline:none}
.sec h4{font:700 10px var(--fm);letter-spacing:1.4px;text-transform:uppercase;color:var(--dim)}
.sec>p{font-size:11px;color:var(--faint);margin:3px 0 11px}
.wtl{display:flex;flex-direction:column;gap:8px;margin-bottom:11px}
.wtr{padding:9px 11px;border-radius:12px;border:1px solid var(--ln);background:rgba(13,21,38,.55);transition:.25s}
.wtr.on{border-color:var(--cb);background:linear-gradient(120deg,var(--cs),rgba(13,21,38,.5))}
.wtr label{position:relative;display:flex;align-items:center;gap:9px;min-height:32px;cursor:pointer;user-select:none}
.wtr label input{position:absolute;left:0;top:50%;transform:translateY(-50%);width:22px;height:22px;opacity:0;margin:0;pointer-events:none}
.wtr label input:checked~.bx{background:var(--c);border-color:var(--c)}
.wtr label input:checked~.bx svg{opacity:1}
.wtr b{flex:1;min-width:0;font:600 12.5px var(--fb);color:var(--dim);overflow-wrap:anywhere}
.wtr.on b{color:var(--ink)}
.wtr .pi{width:100%;height:40px;margin-top:8px;border-radius:10px;border:1px solid var(--ln);background:var(--fld);color:var(--ink);font-size:15px;padding:0 11px}
.wtr .pi:focus{outline:none;border-color:rgba(43,217,255,.55)}
.wtr:not(.on) .pi{display:none}
.addt{display:grid;grid-template-columns:100px 1fr;gap:8px}
.addt input{height:40px;border-radius:10px;border:1px dashed var(--ln2);background:var(--fld);color:var(--ink);font-size:15px;padding:0 11px;min-width:0}
.addt input::placeholder{color:var(--faint);font-size:13px}
.addt .gh{grid-column:1/-1}
.opts{display:flex;flex-direction:column;gap:8px}
.opt{display:flex;align-items:center;gap:11px;width:100%;min-height:52px;padding:10px 13px;border-radius:13px;border:1px solid var(--ln);background:var(--fld);text-align:left;transition:.2s}
.opt:hover{border-color:var(--cb);background:var(--cs)}
.opt i{width:12px;height:12px;flex:none;border-radius:4px;background:var(--c)}
.opt b{font:700 14px var(--fm);letter-spacing:.5px}
.opt s{flex:1;min-width:0;font-size:11px;color:var(--faint);text-align:right;text-decoration:none}
.opt u{width:22px;height:22px;flex:none;border-radius:50%;display:grid;place-items:center;border:1.5px solid var(--ln2);color:transparent;text-decoration:none}
.opt u svg{width:12px;height:12px}
.opt.cur{border-color:var(--cb);background:var(--cs)}.opt.cur b{color:var(--c)}
.opt.cur u{background:var(--c);border-color:var(--c);color:#08130C}
.kv{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:11px;border:1px solid var(--ln);background:rgba(13,21,38,.55);margin-bottom:7px}
.kv span{flex:1;min-width:0;font:600 12.5px var(--fb);color:var(--dim)}
.kv b{font:700 11.5px var(--fm);text-align:right}
.kv b.ok{color:var(--green)}.kv b.wn{color:var(--amber)}.kv b.bd{color:var(--red)}.kv b.dm{color:var(--faint)}
.ag{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}
.ag .wide{grid-column:1/-1}
@media(max-width:400px){.ag{grid-template-columns:1fr}}
.note{display:flex;gap:9px;align-items:flex-start;padding:11px;border-radius:12px;font-size:12px;margin-top:10px}
.note svg{width:15px;height:15px;flex:none;margin-top:1px}
.note.ok{color:#BFF5D6;background:rgba(61,220,132,.1);border:1px solid rgba(61,220,132,.35)}
.note.wn{color:#FFE2AE;background:rgba(255,178,36,.09);border:1px solid rgba(255,178,36,.35)}
.note.dm{color:var(--dim);background:rgba(22,34,59,.5);border:1px solid var(--ln)}
.note ol{margin:0 0 0 16px}.note li{margin-bottom:4px}
.stp{display:flex;gap:11px;align-items:flex-start;margin-bottom:14px}
.stp i{width:40px;height:40px;flex:none;border-radius:12px;display:grid;place-items:center;background:rgba(22,34,59,.7);border:1px solid var(--ln2);color:var(--cyan)}
.stp i svg{width:19px;height:19px}
.stp b{display:block;font:800 13.5px var(--fb)}
.stp p{font-size:12px;color:var(--dim);margin-top:2px}
.seg{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:13px}
.sg{height:31px;padding:0 11px;border-radius:9px;font:700 11.5px var(--fb);color:var(--dim);border:1px solid var(--ln);background:rgba(13,21,38,.6)}
.sg.on{color:var(--cyan);border-color:rgba(43,217,255,.5);background:rgba(43,217,255,.12)}
.port{margin-top:13px;padding:13px;border-radius:14px;border:1px solid rgba(61,220,132,.35);background:linear-gradient(140deg,rgba(61,220,132,.1),rgba(43,217,255,.06))}
.port h4{display:flex;align-items:center;gap:8px;font:700 13px var(--fh);color:#BFF5D6}
.port h4 svg{width:16px;height:16px;color:var(--green)}
.port p{font-size:11.5px;color:var(--dim);margin:6px 0 11px}
.sw{display:flex;align-items:center;gap:9px;cursor:pointer;user-select:none;margin-bottom:11px;font:600 12px var(--fb);color:var(--dim)}
.sw input{position:absolute;opacity:0;width:0;height:0}
.sw i{width:40px;height:23px;flex:none;border-radius:999px;background:rgba(122,152,204,.2);border:1px solid var(--ln2);position:relative;transition:.25s}
.sw i:after{content:'';position:absolute;left:2px;top:2px;width:17px;height:17px;border-radius:50%;background:var(--dim);transition:.25s var(--e)}
.sw input:checked~i{background:rgba(61,220,132,.3);border-color:rgba(61,220,132,.6)}
.sw input:checked~i:after{left:20px;background:var(--green)}
.sql{background:#0a101e;border:1px solid var(--ln);border-radius:10px;padding:11px;font:500 11px/1.5 var(--fm);color:#9BE8FF;overflow-x:auto;white-space:pre;margin:8px 0}
.tlink{width:100%;height:40px;border-radius:10px;border:1px solid var(--ln);background:var(--fld);color:var(--dim);font:500 11.5px var(--fm);padding:0 11px;margin-top:8px}
.tst{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(15px + env(safe-area-inset-bottom));z-index:300;display:flex;flex-direction:column;gap:8px;width:min(430px,calc(100vw - 22px));pointer-events:none}
.t{pointer-events:auto;position:relative;overflow:hidden;display:flex;align-items:center;gap:10px;padding:11px;border-radius:14px;background:rgba(19,30,54,.97);border:1px solid var(--ln2);box-shadow:0 14px 40px -10px #000;animation:in .28s var(--e)}
.t.out{animation:fo .18s forwards}
.t>i{width:27px;height:27px;flex:none;border-radius:9px;display:grid;place-items:center;color:var(--tc);background:color-mix(in srgb,var(--tc) 14%,transparent);border:1px solid color-mix(in srgb,var(--tc) 40%,transparent)}
.t>i svg{width:15px;height:15px}
.t.ok{--tc:#3DDC84}.t.info{--tc:#2BD9FF}.t.wn{--tc:#FFB224}.t.bd{--tc:#FF5D5D}
.t span{flex:1;min-width:0;font:700 12.5px var(--fb);overflow-wrap:anywhere}
.t .a{flex:none;height:31px;padding:0 10px;border-radius:8px;font:700 10.5px var(--fm);letter-spacing:.7px;text-transform:uppercase;color:var(--cyan);border:1px solid rgba(43,217,255,.45);background:rgba(43,217,255,.1)}
.t .b{position:absolute;left:0;bottom:0;height:2px;background:var(--tc);animation:sh linear forwards}
@keyframes sh{from{width:100%}to{width:0}}
#cf{position:fixed;inset:0;z-index:250;pointer-events:none;overflow:hidden}
#cf i{position:absolute;display:block}
@media(max-width:560px){.brand p{display:none}.hw{padding:8px 11px}.wrap{padding:0 11px}}
@media(max-width:420px){.pri .lbl{display:none}.pri{padding:0 13px}.ring{width:36px;height:36px}.ring svg{width:36px;height:36px}}
@media(prefers-reduced-motion:reduce){*{animation-duration:.01ms!important;transition-duration:.01ms!important}}
</style>
</head>
<body>
<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<linearGradient id="rg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2BD9FF"/><stop offset="1" stop-color="#3DDC84"/></linearGradient>
<linearGradient id="bg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFC53D"/><stop offset=".55" stop-color="#FFB224"/><stop offset="1" stop-color="#3DDC84"/></linearGradient></defs>
<symbol id="bolt" viewBox="0 0 24 24"><path d="M13.5 2 5 13.4h5.4L9 22l9.6-12.6h-5.5L15 2z" fill="currentColor"/></symbol>
<symbol id="boltg" viewBox="0 0 24 24"><path d="M13.5 2 5 13.4h5.4L9 22l9.6-12.6h-5.5L15 2z" fill="url(#bg1)"/></symbol>
<symbol id="plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></symbol>
<symbol id="find" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="m20 20-3.8-3.8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></symbol>
<symbol id="x" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></symbol>
<symbol id="ok" viewBox="0 0 24 24"><path d="m4.5 12.5 5 5L19.5 6.5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="pen" viewBox="0 0 24 24"><path d="M4 20h4L20 8a2.4 2.4 0 0 0-4-4L4 16v4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></symbol>
<symbol id="del" viewBox="0 0 24 24"><path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m3 0-1 13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1L6 7m4 4v6m4-6v6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="back" viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="play" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10 8.4 16.2 12 10 15.6z" fill="currentColor"/></symbol>
<symbol id="flag" viewBox="0 0 24 24"><path d="M6 21V4h11.5l-2.2 3.6L17.5 11H6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="doc" viewBox="0 0 24 24"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M14 3v5h5M8.6 13.2h6.8M8.6 16.6h4.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
<symbol id="usr" viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4.6 20a7.4 7.4 0 0 1 14.8 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
<symbol id="bld" viewBox="0 0 24 24"><path d="M3 21h18M5.5 21V6.6L12 3l6.5 3.6V21" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9.6 21v-4.6h4.8V21M9 9.4h1.8m2.4 0H15" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></symbol>
<symbol id="cld" viewBox="0 0 24 24"><path d="M7 18h10.5a3.5 3.5 0 0 0 .4-7A5.5 5.5 0 0 0 7.2 9.6 4.2 4.2 0 0 0 7 18z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M12 10.5v5m0 0 2-2m-2 2-2-2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
<symbol id="shr" viewBox="0 0 24 24"><path d="M12 3v12m0-12L8 7m4-4 4 4" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"/><path d="M6 10H5a1.5 1.5 0 0 0-1.5 1.5v8A1.5 1.5 0 0 0 5 21h14a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 19 10h-1" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"/></symbol>
<symbol id="hm" viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 8v8M8 12h8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></symbol>
<symbol id="saf" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="m15.5 8.5-2 5-5 2 2-5z" fill="currentColor"/></symbol>
<symbol id="ph" viewBox="0 0 24 24"><rect x="6.5" y="2.5" width="11" height="19" rx="2.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10.5 18.5h3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
<symbol id="mon" viewBox="0 0 24 24"><rect x="2.5" y="4" width="19" height="13" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8.5 21h7M12 17v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
<symbol id="fld" viewBox="0 0 24 24"><path d="M3 7a2 2 0 0 1 2-2h4l2 2.5h8a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></symbol>
<symbol id="dn" viewBox="0 0 24 24"><path d="M12 3v11m0 0 4-4m-4 4-4-4M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="up" viewBox="0 0 24 24"><path d="M12 15V4m0 0 4 4m-4-4-4 4M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="rfr" viewBox="0 0 24 24"><path d="M20 12a8 8 0 1 1-2.3-5.6M20 3v4h-4" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="alr" viewBox="0 0 24 24"><path d="M12 3 2.5 20h19L12 3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M12 9.5v4.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><circle cx="12" cy="17" r="1.2" fill="currentColor"/></symbol>
<symbol id="db" viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="7.5" ry="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4.5 6v12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" fill="none" stroke="currentColor" stroke-width="2"/></symbol>
<symbol id="shl" viewBox="0 0 24 24"><path d="M12 3 5 5.8v5.4c0 4.4 3 8.1 7 9.8 4-1.7 7-5.4 7-9.8V5.8L12 3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="m9 12 2.2 2.2L15.4 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
</svg>

<div class="bg" aria-hidden="true"><div class="gridbg"></div><i class="b1"></i><i class="b2"></i><i class="b3"></i><i class="b4" id="glow"></i><div class="grain"></div></div>

<header>
 <div class="hw">
  <div class="row" id="navHome">
   <div class="brand"><span class="bic"><svg class="i"><use href="#boltg"/></svg></span>
    <div><h1>ПНР Контроль</h1><p>заказчики · объекты · работы</p></div></div>
   <div class="sp"></div>
   <div class="ring"><svg viewBox="0 0 44 44"><circle class="rbg" cx="22" cy="22" r="17"/><circle class="rfg" id="rfgH" cx="22" cy="22" r="17" transform="rotate(-90 22 22)"/></svg><b id="pctH">0%</b></div>
   <button class="ib" data-act="app" aria-label="Приложение и данные"><svg class="i"><use href="#cld"/></svg><span class="dot" id="appDot"></span></button>
   <button class="pri" data-act="add" aria-label="Добавить объект"><svg class="i"><use href="#plus"/></svg><span class="lbl">Объект</span></button>
  </div>
  <div class="row" id="navCust" hidden>
   <button class="ib" data-act="back" aria-label="Назад к заказчикам"><svg class="i"><use href="#back"/></svg></button>
   <div class="ctitle" id="custTitle"></div>
   <div class="sp"></div>
   <div class="ring"><svg viewBox="0 0 44 44"><circle class="rbg" cx="22" cy="22" r="17"/><circle class="rfg" id="rfgC" cx="22" cy="22" r="17" transform="rotate(-90 22 22)"/></svg><b id="pctC">0%</b></div>
   <button class="pri" data-act="add" aria-label="Добавить объект"><svg class="i"><use href="#plus"/></svg><span class="lbl">Объект</span></button>
  </div>
  <div id="toolbar" hidden>
   <div class="row">
    <div class="srch"><svg class="i"><use href="#find"/></svg>
     <input id="q" type="search" placeholder="Поиск объектов этого заказчика…" autocomplete="off" aria-label="Поиск">
     <button class="ib sm" data-act="clearq" id="qx" hidden aria-label="Очистить"><svg class="i"><use href="#x"/></svg></button></div>
   </div>
   <div class="row">
    <div class="chips" id="chips">
     <button class="ch on" data-filter="all" style="--t:#EAF1FF">Все <b id="cAll">0</b></button>
     <button class="ch" data-filter="work" style="--t:#FFB224">В работе <b id="cWork">0</b></button>
     <button class="ch" data-filter="reports" style="--t:#2BD9FF">Отчёты <b id="cRep">0</b></button>
     <button class="ch" data-filter="closed" style="--t:#3DDC84">Закрытые <b id="cClosed">0</b></button>
    </div>
    <label class="srt"><span class="sr">Сортировка</span><select id="sort" aria-label="Сортировка">
     <option value="status">Сначала в работе</option><option value="name">По наименованию</option>
     <option value="start">По началу работ</option><option value="end">По окончанию работ</option>
     <option value="progress">По готовности</option></select></label>
   </div>
  </div>
 </div>
</header>

<main class="wrap">
 <div class="bar" id="sb"><span class="d" id="sbDot"></span><span class="tx" id="sbTx">Загрузка…</span>
  <button class="gh sm" data-act="app" data-tab="offline">Автономность</button></div>

 <section id="scrHome">
  <section id="homeList" class="cgrid"></section>
  <section class="empty" id="homeEmpty" hidden></section>
 </section>

 <section id="scrCust" hidden>
  <section class="subbar" id="subCust"></section>
  <section class="lst" id="list"></section>
  <section class="empty" id="empty" hidden></section>
 </section>
</main>

<footer class="wrap ft"><span id="ftTx">ПНР Контроль · данные на устройстве</span>
 <button class="fb" data-act="app"><svg class="i"><use href="#cld"/></svg>Приложение</button>
 <button class="fb" data-act="export"><svg class="i"><use href="#dn"/></svg>Экспорт</button>
 <button class="fb" data-act="demo"><svg class="i"><use href="#rfr"/></svg>Демо</button>
</footer>

<div class="scr" id="sObj" hidden>
 <form class="sh" id="objForm" role="dialog" aria-modal="true" aria-labelledby="oT" novalidate>
  <div class="hd"></div>
  <div class="shh"><div><h2 id="oT">Новый объект</h2><p>Заказчик, мастер, сроки и состав работ</p></div>
   <button type="button" class="ib sm" data-act="close" aria-label="Закрыть"><svg class="i"><use href="#x"/></svg></button></div>
  <div class="shb">
   <label class="f"><span>Заказчик</span><select id="fCust">
    <option value="">— не выбран —</option><option>СМУ-1</option><option>СМУ-3</option><option>СМУ-5</option><option>СМУ-6</option><option>СМУ-7</option><option>ПМК-3</option></select></label>
   <label class="f"><span><svg class="i"><use href="#usr"/></svg>Ответственный мастер со стороны заказчика</span><input id="fMaster" type="text" placeholder="Фамилия И. О." maxlength="60" autocomplete="off"></label>
   <label class="f"><span>Наименование объекта *</span><input id="fName" type="text" placeholder="ПС 110/10 кВ «Заречная»" maxlength="90" autocomplete="off"><span class="err" id="fNameErr" hidden>Минимум 2 символа</span></label>
   <label class="f"><span>Тип объекта</span><select id="fKind"><option>ПС</option><option>РП</option><option>ТП</option><option>КТП</option><option>МТП</option><option>КРУН</option><option>ВЛ</option><option>ЗРУ</option></select></label>
   <div class="sec"><h4>Сроки производства работ</h4><p>Плановые даты начала и окончания ПНР.</p>
    <div class="two">
     <label class="f"><span><svg class="i"><use href="#play"/></svg>Начало производства работ</span><input id="fStart" type="date"></label>
     <label class="f"><span><svg class="i"><use href="#flag"/></svg>Окончание производства работ</span><input id="fEnd" type="date"></label>
    </div><span class="err" id="fDateErr" hidden>Окончание раньше начала</span></div>
   <div class="sec" id="wSec" tabindex="-1"><h4>Виды работ на объекте</h4>
    <p>Отметьте только те виды, что входят в комплекс, и назначьте ответственных. «Отчёт выдан» ставится на карточке.</p>
    <div class="wtl" id="fWorks"></div>
    <div class="addt"><input id="nCode" type="text" placeholder="Код, напр. РЗА" maxlength="10" autocomplete="off" aria-label="Код нового вида работ">
     <input id="nTitle" type="text" placeholder="Название вида работ" maxlength="48" autocomplete="off" aria-label="Название">
     <button type="button" class="gh" data-act="addtype"><svg class="i"><use href="#plus"/></svg>Добавить свой вид работ</button></div></div>
  </div>
  <div class="shf"><button type="button" class="dg" id="oDel" data-act="delobj" hidden><svg class="i"><use href="#del"/></svg>Удалить</button>
   <div class="sp"></div><button type="button" class="gh big" data-act="close">Отмена</button>
   <button type="submit" class="pri" id="oSave" style="height:42px">Добавить объект</button></div>
 </form>
</div>

<div class="scr" id="sCust" hidden>
 <div class="sh nw" role="dialog" aria-modal="true" aria-labelledby="cuT">
  <div class="hd"></div>
  <div class="shh"><div><h2 id="cuT">Заказчик объекта</h2><p id="cuSub"></p></div>
   <button class="ib sm" data-act="close" aria-label="Закрыть"><svg class="i"><use href="#x"/></svg></button></div>
  <div class="shb"><div class="opts" id="cuList"></div>
   <div class="note dm"><svg class="i"><use href="#bld"/></svg><span>Заказчик определяет, в каком разделе находится объект.</span></div></div>
  <div class="shf"><button class="gh big" data-act="custclear">Сбросить выбор</button><div class="sp"></div>
   <button class="pri" data-act="close" style="height:42px">Готово</button></div>
 </div>
</div>

<div class="scr" id="sApp" hidden>
 <div class="sh" role="dialog" aria-modal="true" aria-labelledby="apT">
  <div class="hd"></div>
  <div class="shh"><div><h2 id="apT">Приложение</h2><p>Установка · автономность · база команды · данные</p></div>
   <button class="ib sm" data-act="close" aria-label="Закрыть"><svg class="i"><use href="#x"/></svg></button></div>
  <div class="tabs">
   <button class="tb on" data-act="tab" data-tab="install">Установка</button>
   <button class="tb" data-act="tab" data-tab="offline">Офлайн</button>
   <button class="tb" data-act="tab" data-tab="sync">База</button>
   <button class="tb" data-act="tab" data-tab="data">Данные</button>
  </div>
  <div class="shb">
   <div data-pane="install">
    <div class="seg" id="plat">
     <button class="sg" data-act="plat" data-plat="ios">iPhone</button><button class="sg" data-act="plat" data-plat="android">Android</button>
     <button class="sg" data-act="plat" data-plat="desktop">Компьютер</button><button class="sg" data-act="plat" data-plat="file">Файлом</button></div>
    <div id="steps"></div>
    <div class="note wn" id="fileNote" hidden><svg class="i"><use href="#alr"/></svg><span>Открыт локальный файл. Всё работает и сохраняется, но установка на устройство доступна только с HTTPS-адреса. Ниже — автономная копия.</span></div>
    <div class="port"><h4><svg class="i"><use href="#fld"/></svg>Автономная копия одним файлом</h4>
     <p>Сохраняет всё приложение в один <b>.html</b>: двойной клик на любом компьютере — без интернета, сервера и установки. Можно упаковать текущие объекты внутрь.</p>
     <label class="sw"><input type="checkbox" id="withData" checked><i></i><span id="wdLabel">Включить текущие данные</span></label>
     <button class="pri" data-act="portable" style="width:100%;height:42px"><svg class="i"><use href="#dn"/></svg>Скачать автономный .html</button></div>
   </div>

   <div data-pane="offline" hidden><div id="offRows"></div>
    <div class="ag"><button class="gh big" data-act="checkupd"><svg class="i"><use href="#rfr"/></svg>Проверить обновления</button>
     <button class="gh big" data-act="persist"><svg class="i"><use href="#shl"/></svg>Защитить данные</button>
     <button class="pri wide" data-act="applyupd" id="updBtn" hidden style="height:42px"><svg class="i"><use href="#bolt"/></svg>Обновить сейчас</button>
     <button class="gh big wide" data-act="rebuild"><svg class="i"><use href="#cld"/></svg>Пересобрать офлайн-копию</button></div>
    <div class="note dm"><svg class="i"><use href="#cld"/></svg><span>Офлайн на телефоне включается файлом <b>sw.js</b> рядом с index.html. Без него приложение всё равно работает, а для компьютера есть автономный .html.</span></div>
   </div>

   <div data-pane="sync" hidden>
    <div class="kv"><span>Статус базы</span><b id="syncStat" class="dm">не настроена</b></div>
    <label class="sw"><input type="checkbox" id="syncOn"><i></i><span>Общая база для команды (синхронизация)</span></label>
    <label class="f"><span><svg class="i"><use href="#cld"/></svg>URL проекта (… .supabase.co)</span><input id="syncUrl" type="url" placeholder="https://xxxx.supabase.co" autocomplete="off"></label>
    <label class="f"><span>Ключ anon (public)</span><input id="syncKey" type="text" placeholder="eyJhbGciOi…" autocomplete="off"></label>
    <div class="ag">
     <button class="pri wide" data-act="syncTest" style="height:42px"><svg class="i"><use href="#cld"/></svg>Подключить и проверить</button>
     <button class="gh big" data-act="syncPull"><svg class="i"><use href="#rfr"/></svg>Обновить из базы</button>
    </div>
    <div class="note ok" id="teamLinkBox" hidden>
     <svg class="i"><use href="#shr"/></svg>
     <span>Ссылка для сотрудников — открывает приложение сразу с общей базой. Настройка у них не нужна.
      <input class="tlink" id="teamLink" type="text" readonly>
      <span class="ag" style="margin-top:8px"><button class="gh big wide" data-act="copyTeam"><svg class="i"><use href="#shr"/></svg>Скопировать ссылку</button></span>
     </span></div>
    <div class="note dm"><svg class="i"><use href="#cld"/></svg><span>Все, кто откроет эту ссылку, видят одни и те же объекты и могут отмечать «Выполнено» и «Отчёт выдан». Изменения появляются у остальных в течение нескольких секунд. Локальная копия тоже сохраняется, поэтому без интернета приложение продолжает работать.</span></div>
    <div class="sec"><h4>Как настроить базу (однократно, 5 минут)</h4>
     <div class="note dm"><svg class="i"><use href="#db"/></svg><span><ol>
      <li>Зарегистрируйтесь на <b>supabase.com</b> (бесплатно) и создайте проект. Придумайте пароль базы и выберите регион.</li>
      <li>Дождитесь создания проекта. Слева откройте <b>SQL Editor</b> → <b>New query</b>.</li>
      <li>Вставьте SQL ниже и нажмите <b>Run</b>.</li>
      <li>Слева: <b>Project Settings</b> (шестерёнка) → <b>API</b>. Скопируйте <b>Project URL</b> и ключ <b>anon public</b>.</li>
      <li>Вставьте их в поля выше и нажмите «Подключить и проверить».</li>
      <li>Скопируйте «Ссылку для сотрудников» и разошлите команде.</li>
     </ol></span></div>
     <pre class="sql" id="sqlBox"></pre>
     <button class="gh big" data-act="copySql"><svg class="i"><use href="#up"/></svg>Скопировать SQL</button>
    </div>
   </div>

   <div data-pane="data" hidden><div id="dataRows"></div>
    <div class="ag"><button class="gh big" data-act="export"><svg class="i"><use href="#dn"/></svg>Экспорт JSON</button>
     <button class="gh big" data-act="import"><svg class="i"><use href="#up"/></svg>Импорт JSON</button>
     <button class="gh big" data-act="demo"><svg class="i"><use href="#rfr"/></svg>Демо-данные</button>
     <button class="gh big" data-act="repair"><svg class="i"><use href="#shl"/></svg>Починить данные</button>
     <button class="dg wide" data-act="wipe"><svg class="i"><use href="#del"/></svg>Удалить все объекты</button></div>
    <div class="note wn" id="impBox" hidden><svg class="i"><use href="#up"/></svg><span><b id="impInfo"></b>
     <span class="ag" style="margin-top:9px"><button class="pri" data-act="impreplace" style="height:38px">Заменить всё</button>
      <button class="gh" data-act="impmerge">Добавить</button><button class="gh wide" data-act="impcancel">Отмена</button></span></span></div>
    <div class="note dm"><svg class="i"><use href="#db"/></svg><span>Перенос между телефоном и компьютером: экспорт JSON на одном устройстве → импорт на другом. При включённой общей базе перенос не нужен — всё синхронизируется само.</span></div>
    <input type="file" id="impFile" accept="application/json,.json" hidden>
   </div>
  </div>
  <div class="shf"><button class="gh big" data-act="install" id="instBtn"><svg class="i"><use href="#dn"/></svg>Установить</button>
   <div class="sp"></div><button class="pri" data-act="close" style="height:42px">Готово</button></div>
 </div>
</div>

<div class="tst" id="toasts" role="status" aria-live="polite"></div>
<div id="cf" aria-hidden="true"></div>

<script>
window.__PNR={ok:false,err:[]};
window.addEventListener('error',function(e){try{window.__PNR.err.push((e.message||'Ошибка')+(e.lineno?' строка '+e.lineno:''))}catch(_){}});
</script>

<script>
(function(){
'use strict';
var V='2.1.0',K={d:'pnr-objects-v1',u:'pnr-ui-v2',t:'pnr-types-v1',m:'pnr-meta-v1',s:'pnr-sync-v1'};
var $=function(s){return document.querySelector(s)},$$=function(s){return [].slice.call(document.querySelectorAll(s))};
var esc=function(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})};
var ic=function(n,c){return '<svg class="i '+(c||'')+'" aria-hidden="true"><use href="#'+n+'"/></svg>'};
var cp=function(o){try{return JSON.parse(JSON.stringify(o))}catch(e){return o}};
var uid=function(){return 'o'+Date.now().toString(36)+Math.random().toString(36).slice(2,7)};
var pad=function(n){return (n<10?'0':'')+n};
var today=function(){var d=new Date();return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())};
var fmt=function(s){if(!s)return'';var p=String(s).slice(0,10).split('-');return p.length<3?'':p[2]+'.'+p[1]+(p[0]!=String(new Date().getFullYear())?'.'+p[0].slice(2):'')};
var fmtTime=function(ts){if(!ts)return'—';var d=new Date(ts);return pad(d.getHours())+':'+pad(d.getMinutes())};
var pD=function(s){var p=String(s).slice(0,10).split('-');return new Date(+p[0],+p[1]-1,+p[2])};
var left=function(s){var t=new Date();t.setHours(0,0,0,0);return Math.round((pD(s)-t)/864e5)};
var pl=function(n,a,b,c){n=Math.abs(n)%100;var d=n%10;if(n>10&&n<20)return c;if(d==1)return a;if(d>1&&d<5)return b;return c};
var ini=function(p){var t=String(p).trim().split(/\s+/);return ((t[0]||'').charAt(0)+(t[1]||'').charAt(0)).toUpperCase()||'?'};
var vib=function(p){try{navigator.vibrate&&navigator.vibrate(p)}catch(e){}};
var ISFILE=location.protocol==='file:',RM=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var mem={},memOnly=false;
var st={get:function(k){try{return localStorage.getItem(k)}catch(e){return mem[k]||null}},
 set:function(k,v){try{localStorage.setItem(k,v)}catch(e){mem[k]=v;if(!memOnly){memOnly=true;toast('wn','Хранилище браузера закрыто. Сделайте экспорт, чтобы не потерять данные.')}}}};
var TIC={ok:'ok',info:'bolt',wn:'alr',bd:'del'},TD={ok:2800,info:3400,wn:4600,bd:6500};
function toast(type,msg,act,dur){
 var box=$('#toasts');if(!box)return;
 while(box.children.length>=3){var f=box.firstElementChild;clearTimeout(f._t);f.remove()}
 var d=dur||TD[type]||3000,el=document.createElement('div');
 el.className='t '+type;
 el.innerHTML='<i>'+ic(TIC[type]||'bolt')+'</i><span>'+esc(msg)+'</span>'+
  (act?'<button class="a" type="button">'+esc(act.label)+'</button>':'')+
  '<button class="ib sm" type="button" data-t-x aria-label="Закрыть">'+ic('x')+'</button><b class="b" style="animation-duration:'+d+'ms"></b>';
 var kill=function(){if(!el.isConnected)return;clearTimeout(el._t);el.classList.add('out');setTimeout(function(){el.remove()},190)};
 el.querySelector('[data-t-x]').onclick=kill;
 if(act)el.querySelector('.a').onclick=function(){kill();act.fn()};
 box.appendChild(el);el._t=setTimeout(kill,d);
}
var BASE=[{key:'efi',code:'ЭФИ',title:'Электрофизические измерения',role:'инженер ЭФИ'},
 {key:'tm',code:'ТМ',title:'Телемеханика',role:'инженер СДТУ'},
 {key:'askue',code:'АСКУЭ',title:'Учёт электроэнергии',role:'инженер АСКУЭ'}];
var CAT=[],CUST=[],META={savedAt:null};
var S={objects:[],screen:'home',custId:null,filter:'all',sort:'status',q:''};
function paint(){CAT.forEach(function(t,i){t.cls='c'+(i%6+1)})}
function meta(k){for(var i=0;i<CAT.length;i++)if(CAT[i].key===k)return CAT[i];
 return {key:k,code:String(k).toUpperCase(),title:'Вид работ',role:'ответственный',cls:'c2'}}
function custCls(v){for(var i=0;i<CUST.length;i++)if(CUST[i]===v)return 'c'+(i%6+1);return 'cx'}
function saveTypes(){st.set(K.t,JSON.stringify(CAT.map(function(t){return{key:t.key,code:t.code,title:t.title,role:t.role}})))}
function save(){st.set(K.d,JSON.stringify(S.objects));META.savedAt=new Date().toISOString();st.set(K.m,JSON.stringify(META))}
function saveUI(){st.set(K.u,JSON.stringify({screen:S.screen,custId:S.custId,filter:S.filter,sort:S.sort}))}
function keys(o){var r=CAT.filter(function(t){return o.works[t.key]}).map(function(t){return t.key});
 Object.keys(o.works).forEach(function(k){if(r.indexOf(k)<0)r.push(k)});return r}
function steps(o){var t=0,d=0;keys(o).forEach(function(k){t+=2;if(o.works[k].done)d++;if(o.works[k].report)d++});return{total:t,done:d}}
function stage(o){var ks=keys(o);if(!ks.length)return'none';
 var ad=true,ar=true;ks.forEach(function(k){if(!o.works[k].done)ad=false;if(!o.works[k].report)ar=false});
 return ad&&ar?'closed':(ad?'reports':'work')}
var closed=function(o){return stage(o)==='closed'};
function sync(o){o.closedAt=closed(o)?(o.closedAt||today()):null}
function nw(w){w=w||{};return{person:w.person||'',done:!!w.done,doneAt:w.doneAt||null,report:!!w.report,reportAt:w.reportAt||null}}
function norm(o){
 if(!o||typeof o!=='object')return null;
 var was=!!o.closedAt,src=(o.works&&typeof o.works==='object')?o.works:{},w={};
 Object.keys(src).forEach(function(k){var old=src[k]||{},v=nw(old);
  if(!('report' in old)&&was){v.report=true;v.reportAt=o.closedAt||today()}w[k]=v});
 var r={id:o.id||uid(),num:+o.num||0,customer:o.customer||null,customerMaster:typeof o.customerMaster==='string'?o.customerMaster:'',
  name:String(o.name||'Без наименования'),kind:o.kind||'ПС',dateStart:o.dateStart||null,dateEnd:o.dateEnd||o.deadline||null,
  createdAt:o.createdAt||today(),closedAt:o.closedAt||null,works:w,_ts:o._ts||'',_dirty:!!o._dirty};
 sync(r);return r;
}
function renum(){var n=0;S.objects.forEach(function(o){n=Math.max(n,o.num||0)});S.objects.forEach(function(o){if(!o.num)o.num=++n})}
function seeds(){
 var W=function(p,d,da,r,ra){return{person:p,done:!!d,doneAt:da||null,report:!!r,reportAt:ra||null}};
 return [
 {id:uid(),num:1,customer:'СМУ-1',customerMaster:'Титов В. Н.',name:'ПС 110/10 кВ «Заречная»',kind:'ПС',dateStart:'2026-11-16',dateEnd:'2026-11-27',createdAt:today(),closedAt:null,
  works:{efi:W('Соколов А. В.',1,'2026-11-18',1,'2026-11-19'),tm:W('Мельникова И. П.'),askue:W('Гарипов Р. Н.')}},
 {id:uid(),num:2,customer:'СМУ-3',customerMaster:'Ершов А. И.',name:'ПС 220/110 кВ «Северная»',kind:'ПС',dateStart:'2026-11-25',dateEnd:'2026-12-12',createdAt:today(),closedAt:null,
  works:{efi:W('Ковалёв Д. С.'),tm:W('Мельникова И. П.'),askue:W('Штерн Е. А.')}},
 {id:uid(),num:3,customer:'СМУ-5',customerMaster:'Гущин П. Р.',name:'РП-10 кВ № 7 «Озёрный»',kind:'РП',dateStart:'2026-11-10',dateEnd:'2026-11-21',createdAt:today(),closedAt:'2026-11-19',
  works:{efi:W('Соколов А. В.',1,'2026-11-17',1,'2026-11-18'),tm:W('Нуртдинов А. Р.',1,'2026-11-18',1,'2026-11-19'),askue:W('Гарипов Р. Н.',1,'2026-11-19',1,'2026-11-19')}},
 {id:uid(),num:4,customer:'СМУ-1',customerMaster:'Титов В. Н.',name:'ПС 35/10 кВ «Таёжная»',kind:'ПС',dateStart:'2026-11-12',dateEnd:'2026-11-30',createdAt:today(),closedAt:null,
  works:{efi:W('Ковалёв Д. С.',1,'2026-11-19'),askue:W('Штерн Е. А.',1,'2026-11-18',1,'2026-11-19')}},
 {id:uid(),num:5,customer:'СМУ-6',customerMaster:'',name:'КТП-10/0,4 кВ № 118 «Лесная»',kind:'КТП',dateStart:'2026-11-14',dateEnd:'2026-11-18',createdAt:today(),closedAt:null,
  works:{efi:W('Соколов А. В.'),askue:W('Гарипов Р. Н.',1,'2026-11-16',1,'2026-11-17')}},
 {id:uid(),num:6,customer:'СМУ-7',customerMaster:'Ланской Д. Е.',name:'МТП-10/0,4 кВ № 214 «Полевая»',kind:'МТП',dateStart:'2026-11-24',dateEnd:'2026-12-05',createdAt:today(),closedAt:null,
  works:{efi:W('Ковалёв Д. С.'),askue:W('Штерн Е. А.',1,'2026-11-19')}},
 {id:uid(),num:7,customer:'ПМК-3',customerMaster:'Шубин К. Л.',name:'ВЛ-110 кВ «Северная — Таёжная»',kind:'ВЛ',dateStart:'2026-11-20',dateEnd:'2026-12-18',createdAt:today(),closedAt:null,
  works:{efi:W('Соколов А. В.',1,'2026-11-20'),tm:W('Нуртдинов А. Р.')}},
 {id:uid(),num:8,customer:null,customerMaster:'',name:'ТП-6/0,4 кВ № 42 «Речная»',kind:'ТП',dateStart:'2026-11-26',dateEnd:'2026-12-09',createdAt:today(),closedAt:null,
  works:{efi:W('Ковалёв Д. С.'),tm:W('Мельникова И. П.'),askue:W('Штерн Е. А.')}}];
}
function embedded(){var e=document.getElementById('embedData');if(!e)return null;try{return JSON.parse(e.textContent)}catch(x){return null}}
function boot(){
 CUST=[].map.call($('#fCust').options,function(o){return o.value}).filter(Boolean);
 var em=embedded(),tr=null;
 try{tr=JSON.parse(st.get(K.t)||'null')}catch(e){}
 if(!Array.isArray(tr)||!tr.length)tr=(em&&em.types&&em.types.length)?em.types:cp(BASE);
 CAT=tr.filter(function(t){return t&&t.key&&t.code}).map(function(t){return{key:t.key,code:t.code,title:t.title||t.code,role:t.role||'ответственный'}});
 if(!CAT.length)CAT=cp(BASE);paint();
 var raw=null,arr=null;
 try{raw=st.get(K.d)}catch(e){}
 if(raw){try{var a=JSON.parse(raw);if(Array.isArray(a))arr=a}catch(e){}}
 if(!arr)arr=(em&&Array.isArray(em.objects)&&em.objects.length)?em.objects:seeds();
 S.objects=[];arr.forEach(function(o){try{var n=norm(o);if(n)S.objects.push(n)}catch(e){}});
 renum();
 try{META=JSON.parse(st.get(K.m)||'{}')||{}}catch(e){META={}}
 save();
 try{var u=JSON.parse(st.get(K.u)||'{}');
  if(['all','work','reports','closed'].indexOf(u.filter)>=0)S.filter=u.filter;
  if(['status','name','start','end','progress'].indexOf(u.sort)>=0)S.sort=u.sort;
  if(u.screen==='cust'&&u.custId){S.screen='cust';S.custId=u.custId;}
 }catch(e){}
}
function statsFor(list){
 var w=0,r=0,c=0,tt=0,td=0;
 list.forEach(function(o){var s=stage(o);if(s==='closed')c++;else if(s==='reports')r++;else w++;
  var p=steps(o);tt+=p.total;td+=p.done});
 return {n:list.length,work:w,reports:r,closed:c,tt:tt,td:td};
}
function customerList(){
 var set={};S.objects.forEach(function(o){if(o.customer)set[o.customer]=1});
 var list=Object.keys(set);
 list.sort(function(a,b){var ia=CUST.indexOf(a),ib=CUST.indexOf(b);if(ia<0)ia=99;if(ib<0)ib=99;return ia-ib||a.localeCompare(b,'ru')});
 return list;
}
function objectsOf(c){
 if(c==='none')return S.objects.filter(function(o){return !o.customer});
 return S.objects.filter(function(o){return o.customer===c});
}
function match(o){
 var s=stage(o);
 if(S.filter==='work'&&s!=='work'&&s!=='none')return false;
 if(S.filter==='reports'&&s!=='reports')return false;
 if(S.filter==='closed'&&s!=='closed')return false;
 var q=S.q.trim().toLowerCase();if(!q)return true;
 var h=[o.name,o.kind,o.customer||'',o.customerMaster||''];
 keys(o).forEach(function(k){h.push(meta(k).code,meta(k).title,o.works[k].person||'')});
 return h.join(' ').toLowerCase().indexOf(q)>=0;
}
function sortArr(a){
 var bn=function(x,y){return x.name.localeCompare(y.name,'ru')},dt=function(v){return v?pD(v).getTime():1e15};
 var rk=function(o){var s=stage(o);return s==='closed'?3:s==='reports'?1:0};
 if(S.sort==='name')a.sort(bn);
 else if(S.sort==='start')a.sort(function(x,y){return dt(x.dateStart)-dt(y.dateStart)||bn(x,y)});
 else if(S.sort==='end')a.sort(function(x,y){return dt(x.dateEnd)-dt(y.dateEnd)||bn(x,y)});
 else if(S.sort==='progress')a.sort(function(x,y){var p=steps(x),q=steps(y);return (q.total?q.done/q.total:-1)-(p.total?p.done/p.total:-1)||bn(x,y)});
 else a.sort(function(x,y){return rk(x)-rk(y)||dt(x.dateEnd)-dt(y.dateEnd)||bn(x,y)});
}
var BADGE={work:['bw','<i></i>В работе'],reports:['br',ic('doc')+'Отчёты'],closed:['bc',ic('ok')+'Закрыт'],none:['bn','Без работ']};
function dStart(o){if(!o.dateStart)return['','play','Начало не задано'];
 var n=left(o.dateStart);
 if(n<0&&!steps(o).done&&!closed(o))return['bd','alr','Старт просрочен · '+fmt(o.dateStart)];
 if(n>=0&&n<=3&&!closed(o))return['wn','play','Начало '+fmt(o.dateStart)];
 return['','play','Начало '+fmt(o.dateStart)]}
function dEnd(o){if(closed(o))return['ok','ok','Закрыт '+fmt(o.closedAt)];
 if(!o.dateEnd)return['','flag','Окончание не задано'];
 var n=left(o.dateEnd);
 if(n<0)return['bd','alr','Просрочен на '+(-n)+' '+pl(-n,'день','дня','дней')];
 if(n===0)return['wn','flag','Окончание сегодня'];
 if(n<=3)return['wn','flag','Окончание '+fmt(o.dateEnd)];
 return['','flag','Окончание '+fmt(o.dateEnd)]}
function custLink(o){var v=o.customer||'';
 return '<button type="button" class="lnk '+(v?custCls(v):'cx un')+'" data-act="cust" data-id="'+o.id+'">'+ic(v?'bld':'plus')+'<u>'+(v?esc(v):'Выбрать заказчика')+'</u></button>'}
function mastLink(o){var v=(o.customerMaster||'').trim();
 return '<button type="button" class="lnk m'+(v?'':' cx un')+'" data-act="master" data-id="'+o.id+'">'+ic('usr')+'<u>'+(v?'Мастер: '+esc(v):'Указать мастера')+'</u></button>'}
function ck(o,k,f,label,cls){var w=o.works[k];
 return '<label class="ck '+cls+(w[f]?' on':'')+'"><input type="checkbox" class="wc" data-id="'+o.id+'" data-w="'+k+'" data-f="'+f+'"'+(w[f]?' checked':'')+' aria-label="'+esc(meta(k).code+': '+label)+'">'+
 '<span class="bx"><svg viewBox="0 0 26 26"><path d="M6 13.5l5 5L20 8"/></svg></span><em>'+label+'</em><s>'+(w[f]?fmt(w[f+'At']):'')+'</s></label>'}
function workHTML(o,k){var t=meta(k),w=o.works[k],p=(w.person||'').trim();
 return '<div class="w '+t.cls+(w.done?' d1':'')+(w.done&&w.report?' d2':'')+'" data-w="'+k+'">'+
 '<div class="wt"><span class="code">'+esc(t.code)+'</span><b>'+esc(t.title)+'</b>'+
 '<button type="button" class="x" data-act="delwork" data-id="'+o.id+'" data-w="'+k+'" aria-label="Убрать '+esc(t.code)+'">'+ic('x')+'</button></div>'+
 '<div class="per"><span class="av'+(p?'':' no')+'">'+(p?esc(ini(p)):'?')+'</span><span class="nm'+(p?'':' no')+'">'+(p?esc(p):'Не назначен')+'</span><span class="rl">· '+esc(t.role)+'</span></div>'+
 '<div class="cks">'+ck(o,k,'done','Выполнено','d')+ck(o,k,'report','Отчёт выдан','r')+'</div></div>'}
function cardHTML(o){
 var s=stage(o),cl=s==='closed',a=dStart(o),b=dEnd(o),ks=keys(o),st2=steps(o),bd=BADGE[s];
 var body=ks.length?ks.map(function(k){return workHTML(o,k)}).join(''):
  '<div class="now">'+ic('alr')+'<span>Виды работ не выбраны</span><button type="button" class="gh sm" data-act="addwork" data-id="'+o.id+'">Выбрать виды</button></div>';
 var pg=ks.map(function(k){var t=meta(k);
  return '<i class="'+t.cls+'"><u class="'+(o.works[k].done?'on':'')+'"></u><u class="r '+(o.works[k].report?'on':'')+'"></u></i>'}).join('');
 return '<article class="card'+(cl?' closed':'')+'" data-id="'+o.id+'">'+
 '<div class="cust">'+custLink(o)+mastLink(o)+'</div>'+
 '<div class="top"><h2>'+esc(o.name)+'</h2><span class="badge '+bd[0]+'">'+bd[1]+'</span></div>'+
 '<div class="tags"><span class="tag k">'+esc(o.kind)+'</span>'+
 '<span class="tag '+a[0]+'">'+ic(a[1])+esc(a[2])+'</span><span class="tag '+b[0]+'">'+ic(b[1])+esc(b[2])+'</span>'+
 '<span class="tag">№ '+pad(o.num||0)+'</span></div>'+
 '<div class="wh"><span class="'+(cl?'ok':'')+'">'+(cl?'Работы выполнены · отчёты выданы':'Виды работ')+'</span>'+
 '<button type="button" class="addw" data-act="addwork" data-id="'+o.id+'">'+ic('plus')+'Вид работ</button></div>'+
 '<div class="works">'+body+'</div>'+
 '<div class="foot"><div class="pg">'+pg+'</div><span class="pl">'+st2.done+'/'+st2.total+'</span>'+
 '<div class="acts"><button type="button" class="ib ac" data-act="edit" data-id="'+o.id+'" aria-label="Изменить">'+ic('pen')+'</button>'+
 '<button type="button" class="ib ac dg" data-act="delobj" data-id="'+o.id+'" aria-label="Удалить">'+ic('del')+'</button></div></div></article>'}
function custCardHTML(c){
 var isNone=c==='none',list=objectsOf(c),st=statsFor(list);
 var cls=isNone?'cx':custCls(c);
 var pct=st.tt?Math.round(st.td/st.tt*100):0;
 var allClosed=st.n>0&&st.closed===st.n;
 return '<button type="button" class="cc '+cls+(allClosed?' done':'')+'" data-act="openCust" data-id="'+esc(c)+'">'+
 '<span class="cc-ic">'+ic(isNone?'usr':'bld')+'</span>'+
 '<span class="cc-main"><b>'+esc(isNone?'Без заказчика':c)+'</b>'+
 '<span class="m">'+st.n+' '+pl(st.n,'объект','объекта','объектов')+' · закрыто '+st.closed+'</span>'+
 '<span class="cc-bar"><i style="width:'+pct+'%"></i></span></span>'+
 '<span class="cc-meta"><b>'+pct+'%</b>'+(allClosed?ic('ok'):'')+'</span></button>';
}
function setRing(fgSel,pctSel,st){
 var p=st.tt?Math.round(st.td/st.tt*100):0;
 var el=$(fgSel);if(el)el.style.strokeDashoffset=String(106.8*(1-(st.tt?st.td/st.tt:0)));
 var pc=$(pctSel);if(pc)pc.textContent=p+'%';
}
function renderHome(){
 $('#navHome').hidden=false;$('#navCust').hidden=true;$('#toolbar').hidden=true;
 $('#scrHome').hidden=false;$('#scrCust').hidden=true;
 var all=statsFor(S.objects);setRing('#rfgH','#pctH',all);
 var custs=customerList();
 var hasNone=S.objects.some(function(o){return !o.customer});
 if(!custs.length&&!hasNone){
  $('#homeList').innerHTML='';
  $('#homeEmpty').hidden=false;
  $('#homeEmpty').innerHTML='<div>'+ic('bolt')+'</div><h3>Пока нет объектов</h3><p>Добавьте первый объект и выберите для него заказчика. Затем заказчики появятся здесь списком.</p>'+
   '<button class="pri" data-act="add" style="height:42px">'+ic('plus')+'Добавить объект</button>';
  return;
 }
 $('#homeEmpty').hidden=true;
 var html='';if(hasNone)html+=custCardHTML('none');
 custs.forEach(function(c){html+=custCardHTML(c)});
 $('#homeList').innerHTML=html;
 if(!RM)[].forEach.call($('#homeList').children,function(c,i){c.style.animationDelay=Math.min(i*45,320)+'ms'});
}
function renderCust(){
 $('#navHome').hidden=true;$('#navCust').hidden=false;$('#toolbar').hidden=false;
 $('#scrHome').hidden=true;$('#scrCust').hidden=false;
 var c=S.custId,isNone=c==='none';
 var list=objectsOf(c),st=statsFor(list);
 setRing('#rfgC','#pctC',st);
 $('#custTitle').innerHTML=ic(isNone?'usr':'bld')+'<span>'+esc(isNone?'Без заказчика':c)+'</span>';
 $('#subCust').innerHTML='<span>Объектов: <b>'+st.n+'</b></span><span class="sp"></span><span>Закрыто <b>'+st.closed+'</b> из <b>'+st.n+'</b></span>';
 $('#cAll').textContent=st.n;$('#cWork').textContent=st.work;$('#cRep').textContent=st.reports;$('#cClosed').textContent=st.closed;
 $$('#chips .ch').forEach(function(b){b.classList.toggle('on',b.dataset.filter===S.filter)});
 var arr=list.filter(match);sortArr(arr);
 if(!arr.length){$('#list').innerHTML='';renderEmptyCust(list.length)}
 else{$('#empty').hidden=true;
  $('#list').innerHTML=arr.map(function(o){return cardHTML(o)}).join('');
  if(!RM)[].forEach.call($('#list').children,function(x,i){x.style.animationDelay=Math.min(i*40,300)+'ms'});}
}
function renderEmptyCust(total){
 var e=$('#empty'),h;
 if(!total)h='<div>'+ic('bld')+'</div><h3>У заказчика пока нет объектов</h3><p>Добавьте первый объект для этого заказчика.</p>'+
   '<button class="pri" data-act="add" style="height:42px">'+ic('plus')+'Добавить объект</button>';
 else if(S.q.trim())h='<div>'+ic('find')+'</div><h3>Ничего не найдено</h3><p>По запросу «'+esc(S.q.trim())+'» объектов нет.</p><button class="gh big" data-act="clearq2">Сбросить поиск</button>';
 else if(S.filter==='reports')h='<div>'+ic('doc')+'</div><h3>Нет объектов на выдаче отчётов</h3><p>Работы выполнены, но отчёты выданы не по всем видам.</p><button class="gh big" data-act="showall">Показать все</button>';
 else if(S.filter==='work')h='<div>'+ic('ok')+'</div><h3>Нет объектов в работе</h3><p>Все объекты закрыты или на выдаче отчётов.</p><button class="gh big" data-act="showall">Показать все</button>';
 else if(S.filter==='closed')h='<div>'+ic('ok')+'</div><h3>Закрытых пока нет</h3><p>Объект закроется, когда по каждому виду отмечены «Выполнено» и «Отчёт выдан».</p><button class="gh big" data-act="showall">Показать все</button>';
 else h='<div>'+ic('find')+'</div><h3>Ничего не найдено</h3><p>По выбранным фильтрам объектов нет.</p><button class="gh big" data-act="showall">Показать все</button>';
 e.innerHTML=h;e.hidden=false;
}
function render(){
 if(S.screen==='cust'&&S.custId!=null)renderCust();else renderHome();
 refreshBar();
}
var syncMsg='не настроена',syncCls='dm',lastPull=0;
function refreshBar(){
 var on=navigator.onLine!==false,d=$('#sbDot'),t=$('#sbTx');
 var txt,cls;
 if(ISFILE){cls='ok';txt='Автономная копия · данные на этом устройстве'}
 else if(!swOK){cls='wn';txt=on?'Работает локально · офлайн-копия не подключена':'Нет сети · данные сохранены локально'}
 else{cls='ok';txt=on?'Готово к работе без интернета':'Нет сети · работает автономно'}
 if(updWait){cls='wn';txt='Доступно обновление приложения'}
 var synctext=syncReady()?(' · база: '+syncMsg):'';
 d.className='d '+cls;t.textContent=txt+' · объектов: '+S.objects.length+synctext;
 var ad=$('#appDot');if(ad)ad.className='dot '+(updWait?'wn':cls);
 $('#ftTx').textContent='ПНР Контроль v'+V+' · '+(ISFILE?'локальный файл':'данные на устройстве');
 $('#updBtn').hidden=!updWait;
 $('#wdLabel').textContent='Включить текущие данные ('+S.objects.length+' '+pl(S.objects.length,'объект','объекта','объектов')+')';
 $('#glow').style.opacity=S.objects.length?String(.1+.45*S.objects.filter(closed).length/S.objects.length):'0';
}
function applyScreen(){render();try{window.scrollTo(0,0)}catch(e){}}
function setScreen(screen,custId,push){
 S.screen=screen;S.custId=custId||null;applyScreen();saveUI();
 if(push){try{history.pushState({screen:S.screen,custId:S.custId},'','#'+(screen==='cust'?'c/'+encodeURIComponent(S.custId||'none'):''));}catch(e){}}
}
window.addEventListener('popstate',function(e){
 var st=(e&&e.state)||{screen:'home',custId:null};
 S.screen=st.screen||'home';S.custId=st.custId||null;applyScreen();
});
/* ---------- СИНХРОНИЗАЦИЯ КОМАНДЫ (Supabase) ---------- */
var SYNC={url:'',key:'',on:false},dirty={},dels={},syncTimer=null,pullTimer=null,swOK2=false,syncPrimed=false;
var SQLTXT="create table if not exists public.pnr_objects (\n  id text primary key,\n  data jsonb not null,\n  updated_at timestamptz not null default now()\n);\nalter table public.pnr_objects enable row level security;\ndrop policy if exists \"pnr_all\" on public.pnr_objects;\ncreate policy \"pnr_all\" on public.pnr_objects for all using (true) with check (true);";
function loadSync(){
 try{var s=JSON.parse(st.get(K.s)||'{}');SYNC.url=s.url||'';SYNC.key=s.key||'';SYNC.on=!!s.on}catch(e){}
 try{var qs=new URLSearchParams(location.search),sb=qs.get('sb');
  if(sb){var cfg=JSON.parse(decodeURIComponent(escape(atob(sb))));
   if(cfg&&cfg.url&&cfg.key){SYNC.url=cfg.url;SYNC.key=cfg.key;SYNC.on=true;saveSync();
    try{history.replaceState(history.state,'',location.pathname+location.hash)}catch(e){}}}}catch(e){}
}
function saveSync(){st.set(K.s,JSON.stringify(SYNC))}
function syncReady(){return SYNC.on&&SYNC.url&&SYNC.key}
function sbase(){return SYNC.url.replace(/\/+$/,'')}
function shdr(extra){var h={'apikey':SYNC.key,'Authorization':'Bearer '+SYNC.key,'Content-Type':'application/json'};
 if(extra)for(var k in extra)h[k]=extra[k];return h}
function apiFetch(path,method,body,prefer){
 return fetch(sbase()+'/rest/v1/'+path,{method:method||'GET',headers:shdr(prefer?{'Prefer':prefer}:null),body:body?JSON.stringify(body):undefined});
}
function apiPull(){return apiFetch('pnr_objects?select=id,data,updated_at','GET')}
function cleanObj(o){var c=cp(o);delete c._dirty;return c}
function apiPush(o){return apiFetch('pnr_objects','POST',{id:o.id,data:cleanObj(o),updated_at:o._ts},'resolution=merge-duplicates,return=minimal')}
function apiDel(id){return apiFetch('pnr_objects?id=eq.'+encodeURIComponent(id),'DELETE',null,'return=minimal')}
function syncStatus(m,c){syncMsg=m;syncCls=c;var e=$('#syncStat');if(e){e.textContent=m;e.className=c}}
function scheduleSync(){if(!syncReady())return;clearTimeout(syncTimer);syncTimer=setTimeout(runSync,350)}
function runSync(){
 if(!syncReady())return;
 if(navigator.onLine===false){syncStatus('офлайн — отправим при сети','wn');refreshBar();return}
 var delIds=Object.keys(dels),chain=Promise.resolve();
 delIds.forEach(function(id){chain=chain.then(function(){return apiDel(id).then(function(r){if(r.ok||r.status===204||r.status===404||r.status===406)delete dels[id]}).catch(function(){})})});
 chain.then(function(){
  var ids=Object.keys(dirty),p=Promise.resolve();
  ids.forEach(function(id){var o=find(id);if(!o){delete dirty[id];return}
   p=p.then(function(){return apiPush(o).then(function(r){if(r.ok||r.status===201||r.status===204){delete dirty[id];o._dirty=false}}).catch(function(){})})});
  return p;
 }).then(function(){
  var pend=Object.keys(dirty).length+Object.keys(dels).length;
  if(pend===0){syncPrimed=true;lastPull=Date.now();syncStatus('синхронизировано · '+fmtTime(lastPull),'ok');doPull()}
  else syncStatus('ожидание отправки ('+pend+')','wn');
  refreshBar();
 });
}
function doPull(){
 if(!syncReady())return;
 apiPull().then(function(r){
  if(!r.ok){if(r.status===404||r.status===400)syncStatus('таблица не найдена — выполните SQL','bd');
   else if(r.status===401||r.status===403)syncStatus('неверный ключ','bd');
   else syncStatus('ошибка базы ('+r.status+')','bd');refreshBar();return null}
  return r.json();
 }).then(function(rows){
  if(!rows||!Array.isArray(rows))return;
  if(rows.length===0&&S.objects.length>0&&!syncPrimed){
   S.objects.forEach(function(o){o._ts=o._ts||new Date().toISOString();o._dirty=true;dirty[o.id]=true});
   scheduleSync();return;
  }
  var remote={},changed=false;
  rows.forEach(function(r){remote[r.id]=r});
  rows.forEach(function(r){
   var loc=find(r.id),rd=r.data||{};rd.id=r.id;var ru=r.updated_at||'';
   if(!loc){S.objects.push(norm(rd));changed=true}
   else if(!loc._dirty&&ru>(loc._ts||'')){var idx=S.objects.indexOf(loc);var n=norm(rd);n._ts=ru;S.objects[idx]=n;changed=true}
  });
  if(syncPrimed){
   for(var i=S.objects.length-1;i>=0;i--){var o=S.objects[i];
    if(!remote[o.id]&&!o._dirty){S.objects.splice(i,1);changed=true}}
  }
  if(changed){renum();save();render()}
  lastPull=Date.now();
  var pend=Object.keys(dirty).length+Object.keys(dels).length;
  if(pend===0)syncStatus('синхронизировано · '+fmtTime(lastPull),'ok');
  refreshBar();
 }).catch(function(){syncStatus('нет связи с базой','wn');refreshBar()});
}
function syncAfter(o){if(!syncReady())return;if(o){o._ts=new Date().toISOString();o._dirty=true;dirty[o.id]=true;delete dels[o.id]}scheduleSync()}
function syncAfterDelete(id){if(!syncReady())return;dels[id]=true;delete dirty[id];scheduleSync()}
function syncResyncAll(prevIds){
 if(!syncReady())return;
 if(prevIds)prevIds.forEach(function(id){if(!find(id))dels[id]=true});
 S.objects.forEach(function(o){o._ts=o._ts||new Date().toISOString();o._dirty=true;dirty[o.id]=true;delete dels[o.id]});
 scheduleSync();
}
function startPoll(){stopPoll();if(!syncReady())return;doPull();pullTimer=setInterval(function(){doPull()},5000)}
function stopPoll(){if(pullTimer){clearInterval(pullTimer);pullTimer=null}}
function teamLink(){var cfg={url:SYNC.url,key:SYNC.key};
 var b=btoa(unescape(encodeURIComponent(JSON.stringify(cfg))));
 return location.origin+location.pathname+'?sb='+b}
function showTeamLink(){var box=$('#teamLinkBox');if(!box)return;
 if(syncReady()){box.hidden=false;$('#teamLink').value=teamLink()}else box.hidden=true}
function syncTest(){
 SYNC.url=$('#syncUrl').value.trim();SYNC.key=$('#syncKey').value.trim();SYNC.on=true;saveSync();
 syncStatus('проверяю подключение…','wn');refreshBar();
 apiPull().then(function(r){
  if(r.ok){syncPrimed=false;syncStatus('подключено ✓','ok');startPoll();showTeamLink();toast('ok','База подключена')}
  else if(r.status===404||r.status===400){syncStatus('таблица не найдена — выполните SQL','bd');stopPoll()}
  else if(r.status===401||r.status===403){syncStatus('неверный ключ','bd');stopPoll()}
  else{syncStatus('ошибка '+r.status,'bd');stopPoll()}
  refreshBar();
 }).catch(function(){syncStatus('нет связи (проверьте URL)','bd');refreshBar()});
}
function copyText(t,ok){
 if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){toast('ok',ok||'Скопировано')}).catch(function(){fallbackCopy(t,ok)})}
 else fallbackCopy(t,ok);
}
function fallbackCopy(t,ok){
 var ta=document.createElement('textarea');ta.value=t;ta.style.position='fixed';ta.style.opacity='0';
 document.body.appendChild(ta);ta.select();
 try{document.execCommand('copy');toast('ok',ok||'Скопировано')}catch(e){toast('wn','Не удалось скопировать')}
 ta.remove();
}
/* ---------- конец блока синхронизации ---------- */
function confetti(card){
 if(RM||!card)return;var L=$('#cf'),r=card.getBoundingClientRect(),cx=r.left+r.width/2,cy=Math.max(70,r.top+60);
 var cols=['#3DDC84','#A3F7BF','#FFB224','#2BD9FF','#B78CFF','#FF4FD8','#EAF1FF'];
 for(var i=0;i<24;i++){(function(i){
  var p=document.createElement('i'),s=4+Math.random()*6;
  p.style.cssText='left:'+(cx-s/2)+'px;top:'+(cy-s/2)+'px;width:'+s+'px;height:'+(s*(Math.random()>.5?1:.45))+'px;background:'+cols[i%7]+';border-radius:'+(Math.random()>.6?'50%':'2px');
  L.appendChild(p);if(!p.animate){p.remove();return}
  var ang=(-160+Math.random()*140)*Math.PI/180,v=70+Math.random()*100,dx=Math.cos(ang)*v,dy=Math.sin(ang)*v,ro=(Math.random()-.5)*480;
  p.animate([{transform:'translate(0,0)',opacity:1},{transform:'translate('+dx+'px,'+dy+'px) rotate('+ro*.6+'deg)',opacity:1,offset:.55},
   {transform:'translate('+dx*1.1+'px,'+(dy+150)+'px) rotate('+ro+'deg)',opacity:0}],
   {duration:800+Math.random()*450,easing:'cubic-bezier(.15,.6,.35,1)'}).onfinish=function(){p.remove()};
 })(i)}
}
function party(o){var c=$('#list').querySelector('[data-id="'+o.id+'"]');
 if(c){c.classList.remove('pulse');void c.offsetWidth;c.classList.add('pulse');confetti(c)}
 vib([30,40,60]);toast('ok','Объект закрыт: '+o.name)}
var SCR=['#sObj','#sCust','#sApp'],lastFocus=null;
function openS(sel,focus){lastFocus=document.activeElement;$(sel).hidden=false;document.documentElement.classList.add('lock');
 setTimeout(function(){var f=focus?$(focus):$(sel).querySelector('input,select,button');if(f&&f.focus)f.focus()},70)}
function closeS(sel){var s=$(sel);if(s.hidden)return;s.classList.add('out');
 setTimeout(function(){s.hidden=true;s.classList.remove('out');
  if(SCR.every(function(x){return $(x).hidden}))document.documentElement.classList.remove('lock');
  if(lastFocus&&lastFocus.focus)lastFocus.focus()},180)}
function closeTop(){for(var i=0;i<SCR.length;i++)if(!$(SCR[i]).hidden){closeS(SCR[i]);return}}
var editId=null,FW={};
function setSel(sel,v){var s=$(sel),has=[].some.call(s.options,function(o){return o.value===v});
 if(!has&&v){var o=document.createElement('option');o.textContent=v;o.value=v;s.appendChild(o)}s.value=v}
function renderFW(){
 var ks=CAT.map(function(t){return t.key});Object.keys(FW).forEach(function(k){if(ks.indexOf(k)<0)ks.push(k)});
 $('#fWorks').innerHTML=ks.map(function(k){var t=meta(k),f=FW[k];
  return '<div class="wtr '+t.cls+(f.on?' on':'')+'" data-k="'+k+'"><label>'+
  '<input type="checkbox" class="wtc" data-k="'+k+'"'+(f.on?' checked':'')+' aria-label="'+esc(t.code)+' на объекте">'+
  '<span class="bx"><svg viewBox="0 0 26 26"><path d="M6 13.5l5 5L20 8"/></svg></span>'+
  '<span class="code">'+esc(t.code)+'</span><b>'+esc(t.title)+'</b></label>'+
  '<input class="pi" data-k="'+k+'" type="text" maxlength="60" autocomplete="off" placeholder="Ответственный: Фамилия И. О." value="'+esc(f.person)+'" aria-label="Ответственный за '+esc(t.code)+'"></div>'}).join('');
}
function openObj(o,opt){
 opt=opt||{};editId=o?o.id:null;
 $('#oT').textContent=o?'Изменить объект':'Новый объект';
 $('#oSave').textContent=o?'Сохранить':'Добавить объект';
 $('#oDel').hidden=!o;
 setSel('#fCust',o?(o.customer||''):(opt.cust||''));
 $('#fMaster').value=o?(o.customerMaster||''):'';
 $('#fName').value=o?o.name:'';setSel('#fKind',o?o.kind:'ПС');
 $('#fStart').value=o?(o.dateStart||''):'';$('#fEnd').value=o?(o.dateEnd||''):'';
 FW={};CAT.forEach(function(t){var e=o&&o.works[t.key];
  FW[t.key]=e?{on:true,person:e.person,done:e.done,doneAt:e.doneAt,report:e.report,reportAt:e.reportAt}:{on:false,person:'',done:false,doneAt:null,report:false,reportAt:null}});
 if(o)Object.keys(o.works).forEach(function(k){if(!FW[k]){var w=o.works[k];FW[k]={on:true,person:w.person,done:w.done,doneAt:w.doneAt,report:w.report,reportAt:w.reportAt}}});
 renderFW();
 $('#nCode').value='';$('#nTitle').value='';
 $('#fName').classList.remove('bad');$('#fNameErr').hidden=true;$('#fEnd').classList.remove('bad');$('#fDateErr').hidden=true;
 $('#sObj .shb').scrollTop=0;
 openS('#sObj',opt.focus||'#fName');
 if(opt.scroll)setTimeout(function(){var b=$('#sObj .shb'),s=$('#wSec');if(b&&s)b.scrollTop=Math.max(0,s.offsetTop-12)},130);
}
function find(id){for(var i=0;i<S.objects.length;i++)if(S.objects[i].id===id)return S.objects[i];return null}
function delObj(id){
 var i=-1;S.objects.forEach(function(o,k){if(o.id===id)i=k});if(i<0)return;
 var o=S.objects[i];S.objects.splice(i,1);save();render();syncAfterDelete(o.id);
 toast('bd','Удалено: '+o.name,{label:'Отменить',fn:function(){S.objects.splice(Math.min(i,S.objects.length),0,o);save();render();syncAfter(o);toast('ok','Объект восстановлен')}});
}
function delWork(id,k){
 var o=find(id);if(!o||!o.works[k])return;
 var e=cp(o.works[k]),t=meta(k),was=closed(o);
 delete o.works[k];sync(o);save();render();syncAfter(o);
 if(closed(o)&&!was)party(o);
 toast('bd','Вид работ убран: '+t.code,{label:'Отменить',fn:function(){var x=find(id);if(!x)return;
  x.works[k]=e;sync(x);save();render();syncAfter(x);toast('ok','Вид работ возвращён: '+t.code)}});
}
var pickId=null;
function openCustPick(id){var o=find(id);if(!o)return;pickId=id;
 $('#cuSub').textContent=o.name+' · сейчас: '+(o.customer||'не выбран');
 var cnt={};CUST.forEach(function(x){cnt[x]=0});S.objects.forEach(function(x){if(cnt.hasOwnProperty(x.customer))cnt[x.customer]++});
 var extra=(o.customer&&CUST.indexOf(o.customer)<0)?[o.customer]:[];
 var opts=CUST.concat(extra);
 $('#cuList').innerHTML=opts.map(function(x){var n=cnt[x]||0;
  return '<button type="button" class="opt '+custCls(x)+(o.customer===x?' cur':'')+'" data-act="setcust" data-v="'+esc(x)+'">'+
  '<i></i><b>'+esc(x)+'</b><s>'+n+' '+pl(n,'объект','объекта','объектов')+'</s><u>'+ic('ok')+'</u></button>'}).join('')
  +'<button type="button" class="opt cx'+((!o.customer)?' cur':'')+'" data-act="setcust" data-v="">'+
  '<i></i><b>Без заказчика</b><s>—</s><u>'+ic('ok')+'</u></button>';
 openS('#sCust','#cuList .opt');
}
function setCust(v){var o=find(pickId);if(!o){closeS('#sCust');return}
 o.customer=v||null;save();closeS('#sCust');render();syncAfter(o);vib(15);
 toast('ok',v?('Заказчик '+v+' · '+o.name):('Заказчик сброшен · '+o.name));
}
function dl(name,text,mime){
 var b=new Blob([text],{type:mime||'application/octet-stream'}),a=document.createElement('a');
 a.href=URL.createObjectURL(b);a.download=name;document.body.appendChild(a);a.click();a.remove();
 setTimeout(function(){URL.revokeObjectURL(a.href)},5000);
}
function exportJSON(){
 dl('pnr-objects-'+today()+'.json',JSON.stringify({app:'ПНР Контроль',version:V,exportedAt:new Date().toISOString(),
  customers:CUST,types:CAT.map(function(t){return{key:t.key,code:t.code,title:t.title,role:t.role}}),objects:S.objects},null,2),'application/json');
 toast('ok','Экспортировано объектов: '+S.objects.length);
}
function demo(){var p=cp(S.objects),prev=S.objects.map(function(o){return o.id});
 S.objects=seeds();save();render();syncResyncAll(prev);
 toast('wn','Демо-данные восстановлены',{label:'Отменить',fn:function(){var pv=S.objects.map(function(o){return o.id});S.objects=p;save();render();syncResyncAll(pv);toast('ok','Ваши данные возвращены')}})}
function repair(){var prev=S.objects.map(function(o){return o.id});
 S.objects=seeds();renum();save();S.filter='all';S.q='';$('#q').value='';$('#qx').hidden=true;saveUI();render();syncResyncAll(prev);
 toast('ok','Данные пересобраны и приложение работает')}
function wipe(){if(!S.objects.length){toast('info','Список уже пуст');return}
 var p=cp(S.objects),ids=S.objects.map(function(o){return o.id});
 S.objects=[];save();render();
 if(syncReady()){ids.forEach(function(id){dels[id]=true});scheduleSync()}
 toast('bd','Удалено объектов: '+ids.length,{label:'Отменить',fn:function(){S.objects=p;save();render();syncResyncAll([]);toast('ok','Все объекты восстановлены')}},8000)}
var pend=null;
function readImp(file){
 var r=new FileReader();
 r.onload=function(){try{
  var d=JSON.parse(String(r.result)),raw=Array.isArray(d)?d:(Array.isArray(d.objects)?d.objects:null);
  if(!raw)throw 0;
  var objs=[];raw.forEach(function(o){try{var n=norm(o);if(n)objs.push(n)}catch(e){}});
  if(!objs.length)throw 0;
  pend={objects:objs,types:(d&&Array.isArray(d.types))?d.types.filter(function(t){return t&&t.key&&t.code}):[]};
  $('#impInfo').textContent='Файл «'+file.name+'»: '+objs.length+' '+pl(objs.length,'объект','объекта','объектов')+'. Сейчас в приложении: '+S.objects.length+'.';
  $('#impBox').hidden=false;
 }catch(e){toast('wn','Не удалось прочитать файл: нужен JSON из этого приложения')}};
 r.onerror=function(){toast('wn','Ошибка чтения файла')};r.readAsText(file);
}
function applyImp(mode){
 if(!pend)return;var p=cp(S.objects),pt=cp(CAT),prev=S.objects.map(function(o){return o.id});
 pend.types.forEach(function(t){if(!CAT.some(function(x){return x.key===t.key||String(x.code).toLowerCase()===String(t.code).toLowerCase()}))
  CAT.push({key:t.key,code:t.code,title:t.title||t.code,role:t.role||'ответственный'})});
 paint();saveTypes();
 if(mode==='replace')S.objects=pend.objects;
 else{var ids={};S.objects.forEach(function(o){ids[o.id]=1});
  pend.objects.forEach(function(o){if(ids[o.id])o.id=uid();S.objects.push(o)})}
 renum();S.objects.forEach(sync);
 S.filter='all';S.q='';$('#q').value='';$('#qx').hidden=true;saveUI();save();render();
 if(mode==='replace')syncResyncAll(prev);else syncResyncAll([]);
 var n=pend.objects.length;pend=null;$('#impBox').hidden=true;
 toast('ok',(mode==='replace'?'Заменено на ':'Добавлено ')+n+' '+pl(n,'объект','объекта','объектов'),
  {label:'Отменить',fn:function(){var pv=S.objects.map(function(o){return o.id});S.objects=p;CAT=pt;paint();saveTypes();save();render();syncResyncAll(pv);toast('ok','Импорт отменён')}},8000);
}
function portable(){
 var root=document.documentElement.cloneNode(true);
 ['#list','#homeList','#toasts','#cf','#cuList','#fWorks','#steps','#offRows','#dataRows'].forEach(function(s){var e=root.querySelector(s);if(e)e.innerHTML=''});
 ['#empty','#homeEmpty'].forEach(function(s){var e=root.querySelector(s);if(e){e.innerHTML='';e.hidden=true}});
 SCR.forEach(function(s){var e=root.querySelector(s);if(e){e.hidden=true;e.classList.remove('out')}});
 var ib=root.querySelector('#impBox');if(ib)ib.hidden=true;
 root.classList.remove('lock');
 var old=root.querySelector('#embedData');if(old)old.parentNode.removeChild(old);
 if($('#withData').checked){
  var payload=JSON.stringify({app:'ПНР Контроль',version:V,exportedAt:new Date().toISOString(),
   types:CAT.map(function(t){return{key:t.key,code:t.code,title:t.title,role:t.role}}),objects:S.objects}).replace(/</g,'\\u003c');
  var tag=document.createElement('script');tag.type='application/json';tag.id='embedData';tag.textContent=payload;
  var head=root.querySelector('head');if(head)head.appendChild(tag);
 }
 dl('PNR-Kontrol-'+today()+($('#withData').checked?'-s-dannymi':'')+'.html','<!doctype html>\n'+root.outerHTML,'text/html;charset=utf-8');
 toast('ok','Автономный файл сохранён');
}
var STEPS={
 ios:[['saf','Откройте страницу в Safari','Во встроенном браузере (Telegram, почта) пункта установки не будет.'],
  ['shr','Нажмите «Поделиться»','Квадрат со стрелкой вверх на нижней панели Safari.'],
  ['hm','Выберите «На экран „Домой“»','Прокрутите список действий вниз.'],
  ['ph','Нажмите «Добавить»','Иконка появится на рабочем столе. Первый запуск — с интернетом.']],
 android:[['cld','Откройте меню браузера','Три точки справа вверху в Chrome.'],
  ['dn','«Установить приложение»','Или «Добавить на главный экран».'],
  ['shl','Подтвердите установку','Ярлык появится среди приложений.'],
  ['cld','Откройте один раз с сетью','Дальше запускается без интернета.']],
 desktop:[['mon','Откройте в Chrome или Edge','Яндекс.Браузер и Opera тоже умеют.'],
  ['dn','Нажмите «Установить»','Кнопка внизу или значок в адресной строке.'],
  ['bolt','Запуск из меню «Пуск»','Отдельное окно, ярлык на рабочем столе.'],
  ['fld','Или просто файлом','Вкладка «Файлом» — один .html, работает двойным кликом без интернета.']],
 file:[['fld','Скачайте автономную копию','Кнопка ниже сохранит один файл .html со всем приложением.'],
  ['shr','Перенесите на компьютер','Флешка, почта, сетевая папка — интернет не нужен.'],
  ['play','Двойной клик по файлу','Откроется в браузере и работает полностью локально.'],
  ['db','Данные — в браузере','Для общей базы команды используйте вкладку «База».']]};
function setPlat(p){
 $$('#plat .sg').forEach(function(b){b.classList.toggle('on',b.dataset.plat===p)});
 $('#steps').innerHTML=(STEPS[p]||STEPS.desktop).map(function(s){
  return '<div class="stp"><i>'+ic(s[0])+'</i><div><b>'+esc(s[1])+'</b><p>'+esc(s[2])+'</p></div></div>'}).join('');
}
function setTab(t){
 $$('.tb').forEach(function(b){b.classList.toggle('on',b.dataset.tab===t)});
 $$('[data-pane]').forEach(function(p){p.hidden=p.dataset.pane!==t});
 $('#sApp .shb').scrollTop=0;
 if(t==='offline')offRows();if(t==='data')dataRows();if(t==='sync')syncPaneInit();
}
function plat(){var u=navigator.userAgent||'';
 if(/iPhone|iPad|iPod/i.test(u)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1))return'ios';
 if(/Android/i.test(u))return'android';return'desktop'}
var standalone=function(){return navigator.standalone===true||(window.matchMedia&&matchMedia('(display-mode: standalone)').matches)};
var swOK=false,swReg=null,updWait=false,persist=false,deferred=null,reloading=false;
function offRows(){
 var rows=[['Режим',ISFILE?'локальный файл':(location.protocol==='https:'?'HTTPS':'HTTP'),ISFILE?'wn':'ok'],
  ['Файл sw.js',swOK?'подключён ✓':'не найден',swOK?'ok':'wn'],
  ['База команды',syncReady()?('включена'):('выключена'),syncReady()?'ok':'dm'],
  ['Автономный .html','доступен всегда','ok'],
  ['Сеть',navigator.onLine!==false?'онлайн':'офлайн',navigator.onLine!==false?'ok':'wn'],
  ['Защита хранилища',persist?'включена':'не запрошена',persist?'ok':'dm'],
  ['Версия',V,'dm']];
 $('#offRows').innerHTML=rows.map(function(r){return '<div class="kv"><span>'+esc(r[0])+'</span><b class="'+r[2]+'">'+esc(r[1])+'</b></div>'}).join('');
}
function dataRows(){
 var tt=0,td=0;S.objects.forEach(function(o){var p=steps(o);tt+=p.total;td+=p.done});
 var size=0;try{size=new Blob([JSON.stringify(S.objects)]).size}catch(e){}
 var sv=META.savedAt?new Date(META.savedAt):null;
 var rows=[['Объектов',String(S.objects.length),'ok'],['Видов работ в каталоге',String(CAT.length),'dm'],
  ['Отмечено этапов',td+' / '+tt,td?'ok':'dm'],['Объём данных',(size<1024?size+' Б':(size/1024).toFixed(1)+' КБ'),'dm'],
  ['Сохранение',sv?fmt(sv.toISOString())+' '+pad(sv.getHours())+':'+pad(sv.getMinutes()):'—','dm'],
  ['Хранилище',memOnly?'временное (сделайте экспорт)':'на устройстве',memOnly?'bd':'ok'],
  ['Ошибок при запуске',String(window.__PNR.err.length),window.__PNR.err.length?'bd':'ok']];
 $('#dataRows').innerHTML=rows.map(function(r){return '<div class="kv"><span>'+esc(r[0])+'</span><b class="'+r[2]+'">'+esc(r[1])+'</b></div>'}).join('');
}
function syncPaneInit(){
 $('#syncUrl').value=SYNC.url;$('#syncKey').value=SYNC.key;$('#syncOn').checked=SYNC.on;
 $('#sqlBox').textContent=SQLTXT;syncStatus(syncMsg,syncCls);showTeamLink();
}
function openApp(tab){
 $('#fileNote').hidden=!ISFILE;
 $('#instBtn').hidden=standalone();
 $('#instBtn').innerHTML=ic('dn')+(deferred?'Установить':'Как установить');
 setPlat(plat());setTab(tab||'install');offRows();dataRows();
 openS('#sApp','.tb.on');
}
function initSW(){
 if(!('serviceWorker'in navigator)||ISFILE||location.protocol!=='https:'){refreshBar();return}
 fetch('sw.js',{method:'GET',cache:'no-store'}).then(function(r){
  var ct=r.headers.get('content-type')||'';
  if(!r.ok||ct.indexOf('javascript')<0){swOK=false;refreshBar();return}
  return navigator.serviceWorker.register('sw.js',{scope:'./'}).then(function(reg){
   swReg=reg;swOK=true;refreshBar();offRows();
   if(reg.waiting&&navigator.serviceWorker.controller){updWait=true;refreshBar()}
   reg.addEventListener('updatefound',function(){
    var n=reg.installing;if(!n)return;
    n.addEventListener('statechange',function(){if(n.state==='installed'&&navigator.serviceWorker.controller){updWait=true;refreshBar();
     toast('info','Доступна новая версия',{label:'Обновить',fn:apply})}})});
  });
 }).catch(function(){swOK=false;refreshBar()});
 navigator.serviceWorker.addEventListener('controllerchange',function(){if(reloading){reloading=false;location.reload()}});
}
function apply(){if(swReg&&swReg.waiting){reloading=true;swReg.waiting.postMessage({type:'SKIP_WAITING'})}else location.reload()}
window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();deferred=e;$('#instBtn').hidden=standalone();$('#instBtn').innerHTML=ic('dn')+'Установить'});
window.addEventListener('appinstalled',function(){deferred=null;toast('ok','Приложение установлено');refreshBar()});
window.addEventListener('online',function(){toast('ok','Сеть восстановлена');if(syncReady()){runSync();doPull()}refreshBar()});
window.addEventListener('offline',function(){toast('info','Нет сети — приложение продолжает работать');refreshBar()});
window.addEventListener('focus',function(){if(syncReady())doPull()});
document.addEventListener('submit',function(e){
 if(e.target.id!=='objForm')return;e.preventDefault();
 var nameEl=$('#fName'),name=nameEl.value.trim();
 if(name.length<2){nameEl.classList.remove('bad');void nameEl.offsetWidth;nameEl.classList.add('bad');$('#fNameErr').hidden=false;nameEl.focus();return}
 $('#fNameErr').hidden=true;
 var s=$('#fStart').value||null,en=$('#fEnd').value||null;
 if(s&&en&&pD(en)<pD(s)){var el=$('#fEnd');el.classList.add('bad');$('#fDateErr').hidden=false;el.focus();return}
 $('#fDateErr').hidden=true;$('#fEnd').classList.remove('bad');
 var w={};Object.keys(FW).forEach(function(k){var f=FW[k];
  if(f.on)w[k]={person:(f.person||'').trim(),done:!!f.done,doneAt:f.doneAt||null,report:!!f.report,reportAt:f.reportAt||null}});
 var t,was=false;
 if(editId){t=find(editId);if(t){was=closed(t);t.name=name;t.customer=$('#fCust').value||null;t.customerMaster=$('#fMaster').value.trim();
  t.kind=$('#fKind').value;t.dateStart=s;t.dateEnd=en;t.works=w;sync(t)}}
 else{t={id:uid(),num:S.objects.reduce(function(m,o){return Math.max(m,o.num||0)},0)+1,customer:$('#fCust').value||null,
  customerMaster:$('#fMaster').value.trim(),name:name,kind:$('#fKind').value,dateStart:s,dateEnd:en,createdAt:today(),closedAt:null,works:w};
  sync(t);S.objects.unshift(t)}
 save();closeS('#sObj');syncAfter(t);
 if(S.screen==='home'&&t)setScreen('cust',t.customer||'none',true);
 else render();
 toast('ok',editId?'Изменения сохранены':'Объект добавлен: '+name);
 if(t){var c=$('#list').querySelector('[data-id="'+t.id+'"]');
  if(c){setTimeout(function(){c.scrollIntoView({block:'nearest',behavior:RM?'auto':'smooth'})},60);
   if(closed(t)&&!was)setTimeout(function(){party(t)},250)}}
});
document.addEventListener('change',function(e){
 var t=e.target;
 if(t.classList.contains('wc')){
  var o=find(t.dataset.id);if(!o)return;var w=o.works[t.dataset.w];if(!w)return;
  var f=t.dataset.f;w[f]=t.checked;w[f+'At']=t.checked?today():null;
  var was=closed(o);sync(o);save();
  var card=t.closest('.card');
  if(card){card.outerHTML=cardHTML(o);card=$('#list').querySelector('[data-id="'+o.id+'"]')}
  renderCust();syncAfter(o);
  if(closed(o)&&!was)party(o);
  else if(!closed(o)&&was)toast('info','Объект возвращён в работу: '+o.name);
  else vib(16);
  if(S.filter!=='all'||S.q.trim())setTimeout(function(){render()},1500);
  return;
 }
 if(t.classList.contains('wtc')){var k=t.dataset.k;if(FW[k]){FW[k].on=t.checked;t.closest('.wtr').classList.toggle('on',t.checked)}return}
 if(t.id==='sort'){S.sort=t.value;saveUI();render();return}
 if(t.id==='impFile'){var fl=t.files&&t.files[0];t.value='';if(fl)readImp(fl);return}
 if(t.id==='syncOn'){SYNC.on=t.checked;saveSync();
  if(SYNC.on&&SYNC.url&&SYNC.key){startPoll();showTeamLink()}else{stopPoll();$('#teamLinkBox').hidden=true}
  syncStatus(SYNC.on?(syncMsg):'выключена',SYNC.on?syncCls:'dm');refreshBar();return}
 if(t.id==='syncUrl'){SYNC.url=t.value.trim();saveSync();return}
 if(t.id==='syncKey'){SYNC.key=t.value.trim();saveSync();return}
});
document.addEventListener('input',function(e){
 var t=e.target;
 if(t.id==='q'){$('#qx').hidden=!t.value;S.q=t.value;if(S.screen==='cust')renderCust();return}
 if(t.classList.contains('pi')){var k=t.dataset.k;if(FW[k])FW[k].person=t.value}
});
document.addEventListener('click',function(e){
 if(e.target.classList&&e.target.classList.contains('scr')){closeS('#'+e.target.id);return}
 var f=e.target.closest('[data-filter]');
 if(f&&!e.target.closest('[data-act]')){S.filter=f.dataset.filter;saveUI();render();return}
 var b=e.target.closest('[data-act]');if(!b)return;
 var a=b.dataset.act,id=b.dataset.id,o=id?find(id):null;
 if(a==='openCust')setScreen('cust',b.dataset.id,true);
 else if(a==='back')setScreen('home',null,true);
 else if(a==='add'){var pref=S.screen==='cust'?(S.custId==='none'?null:S.custId):null;openObj(null,{cust:pref})}
 else if(a==='edit'&&o)openObj(o);
 else if(a==='master'&&o)openObj(o,{focus:'#fMaster'});
 else if(a==='addwork'&&o)openObj(o,{focus:'#wSec',scroll:true});
 else if(a==='delobj'){var did=id||editId;closeS('#sObj');setTimeout(function(){delObj(did)},190)}
 else if(a==='delwork')delWork(id,b.dataset.w);
 else if(a==='cust')openCustPick(id);
 else if(a==='setcust')setCust(b.dataset.v);
 else if(a==='custclear')setCust(null);
 else if(a==='close')closeTop();
 else if(a==='app')openApp(b.dataset.tab);
 else if(a==='tab')setTab(b.dataset.tab);
 else if(a==='plat')setPlat(b.dataset.plat);
 else if(a==='clearq'||a==='clearq2'){$('#q').value='';$('#qx').hidden=true;S.q='';render();}
 else if(a==='showall'){S.filter='all';saveUI();render()}
 else if(a==='export')exportJSON();
 else if(a==='import')$('#impFile').click();
 else if(a==='impreplace')applyImp('replace');
 else if(a==='impmerge')applyImp('merge');
 else if(a==='impcancel'){pend=null;$('#impBox').hidden=true}
 else if(a==='demo')demo();
 else if(a==='repair')repair();
 else if(a==='wipe')wipe();
 else if(a==='portable')portable();
 else if(a==='syncTest')syncTest();
 else if(a==='syncPull'){if(syncReady()){syncStatus('обновляю…','wn');doPull()}else toast('info','Сначала подключите базу')}
 else if(a==='copyTeam'){var l=$('#teamLink').value;if(l)copyText(l,'Ссылка скопирована — отправьте её сотрудникам')}
 else if(a==='copySql')copyText(SQLTXT,'SQL скопирован');
 else if(a==='checkupd'){if(swReg)swReg.update().then(function(){toast('ok',updWait?'Найдено обновление':'Установлена последняя версия')}).catch(function(){toast('wn','Нет сети для проверки')});
  else toast('info',ISFILE?'Автономный файл обновляется заменой самого файла':'Файл sw.js не подключён')}
 else if(a==='applyupd')apply();
 else if(a==='persist'){if(navigator.storage&&navigator.storage.persist)navigator.storage.persist().then(function(v){persist=v;
   toast(v?'ok':'wn',v?'Данные защищены от очистки':'Браузер отказал. Делайте экспорт JSON.');offRows()}).catch(function(){toast('wn','Не удалось запросить защиту')});
  else toast('info','Браузер не поддерживает защиту хранилища')}
 else if(a==='rebuild'){if(window.caches)caches.keys().then(function(ks){
   return Promise.all(ks.filter(function(k){return k.indexOf('pnr-')===0}).map(function(k){return caches.delete(k)}))}).then(function(){
   if(swReg)return swReg.unregister()}).then(function(){toast('info','Пересобираю…');setTimeout(function(){location.reload()},600)});
  else location.reload()}
 else if(a==='addtype'){
  var ce=$('#nCode'),code=ce.value.trim(),title=$('#nTitle').value.trim();
  if(!code){ce.classList.remove('bad');void ce.offsetWidth;ce.classList.add('bad');ce.focus();toast('wn','Укажите код вида работ, например РЗА');return}
  if(CAT.some(function(t){return String(t.code).toLowerCase()===code.toLowerCase()})){toast('wn','Вид работ «'+code+'» уже есть');return}
  ce.classList.remove('bad');
  var nk='c'+Date.now().toString(36);
  CAT.push({key:nk,code:code,title:title||code,role:'ответственный'});paint();saveTypes();
  FW[nk]={on:true,person:'',done:false,doneAt:null,report:false,reportAt:null};
  renderFW();ce.value='';$('#nTitle').value='';ce.focus();toast('ok','Вид работ добавлен: '+code);
 }
 else if(a==='install'){
  if(deferred){deferred.prompt();deferred.userChoice.then(function(r){if(r.outcome==='accepted')closeS('#sApp')}).catch(function(){});deferred=null}
  else{setTab('install');setPlat(plat())}
 }
});
document.addEventListener('keydown',function(e){
 if(e.key==='Escape')closeTop();
 if(e.key==='/'&&!e.target.closest('input,select,textarea')&&SCR.every(function(s){return $(s).hidden})){e.preventDefault();$('#q').focus()}
 if(e.key==='Tab'){var open=SCR.filter(function(s){return !$(s).hidden})[0];if(!open)return;
  var f=[].slice.call($(open).querySelectorAll('button,input,select,[tabindex]:not([tabindex="-1"])')).filter(function(x){return !x.hidden&&x.offsetParent!==null});
  if(!f.length)return;var first=f[0],last=f[f.length-1];
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}
});
try{
 boot();loadSync();
 $('#sort').value=S.sort;
 var h=location.hash||'',m=h.match(/^#c\/(.+)$/);
 if(m){S.screen='cust';S.custId=decodeURIComponent(m[1])}
 try{history.replaceState({screen:S.screen,custId:S.custId},'','#'+(S.screen==='cust'?'c/'+encodeURIComponent(S.custId||'none'):''))}catch(e){}
 applyScreen();
 window.__PNR.ok=true;
 if(syncReady()){syncStatus('подключена','ok');startPoll()}
 try{
  var c=document.createElement('canvas');c.width=c.height=180;var x=c.getContext('2d');
  var g=x.createLinearGradient(0,0,180,180);g.addColorStop(0,'#121E36');g.addColorStop(1,'#080D18');x.fillStyle=g;x.fillRect(0,0,180,180);
  var rg2=x.createRadialGradient(30,160,0,30,160,120);rg2.addColorStop(0,'rgba(61,220,132,.35)');rg2.addColorStop(1,'rgba(61,220,132,0)');x.fillStyle=rg2;x.fillRect(0,0,180,180);
  x.save();x.translate(90,90);x.scale(1.6,1.6);x.translate(-51,-50);
  var p=new Path2D('M62 4 L18 58 L44 58 L36 96 L84 40 L56 40 L70 4 Z');
  var bg2=x.createLinearGradient(0,0,0,100);bg2.addColorStop(0,'#FFC53D');bg2.addColorStop(.55,'#FFB224');bg2.addColorStop(1,'#3DDC84');
  x.fillStyle=bg2;x.fill(p);x.restore();
  var url=c.toDataURL('image/png');$('#appleIcon').href=url;
  var mf={name:'ПНР Контроль',short_name:'ПНР',lang:'ru',start_url:location.href.split(/[?#]/)[0],scope:location.href.replace(/[?#].*$/,'').replace(/[^/]*$/,''),
   display:'standalone',background_color:'#0B1220',theme_color:'#0B1220',
   icons:[{src:url,sizes:'180x180',type:'image/png',purpose:'any'},{src:url,sizes:'512x512',type:'image/png',purpose:'maskable'}]};
  if(!ISFILE)$('#mfst').href=URL.createObjectURL(new Blob([JSON.stringify(mf)],{type:'application/manifest+json'}));
 }catch(e){}
 if(navigator.storage&&navigator.storage.persisted)navigator.storage.persisted().then(function(v){persist=!!v}).catch(function(){});
 initSW();refreshBar();
 var em=embedded();
 if(em&&em.objects&&em.objects.length)setTimeout(function(){toast('info','Автономная копия: загружено '+em.objects.length+' '+pl(em.objects.length,'объект','объекта','объектов'))},600);
}catch(err){
 window.__PNR.err.push(String(err&&err.message||err));
 try{S.objects=seeds();render()}catch(e2){}
 toast('bd','Ошибка запуска: '+String(err&&err.message||err),null,10000);
}
})();
</script>
</body>
</html>
