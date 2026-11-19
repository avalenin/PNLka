<!doctype html>
<!-- index.html · ПНР Контроль v1.4 — автономная версия (PWA + переносимый .html) -->
<!--
  ФАЙЛЫ ПРОЕКТА (положить рядом в одну папку):
    index.html · sw.js · manifest.webmanifest · icon.svg
  HTTPS (GitHub Pages) → установка на iPhone/Android/компьютер + полная работа без интернета.
  Кнопка «Приложение → Скачать .html» сохраняет ОДИН файл, который работает двойным кликом
  на любом компьютере без интернета, сервера и установки (данные можно упаковать внутрь).
-->
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>ПНР Контроль — объекты, виды работ, отчёты</title>
<meta name="description" content="Автономный контроль пусконаладки: заказчик и мастер, сроки ПНР, виды работ по объекту, отметки выполнения и выдачи отчётов. Работает без интернета.">
<meta name="theme-color" content="#0B1220">
<meta name="color-scheme" content="dark">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="ПНР">
<meta name="format-detection" content="telephone=no">
<link rel="manifest" href="manifest.webmanifest">
<link id="appleIcon" rel="apple-touch-icon" href="icon.svg">
<link id="favicon" rel="icon" href="icon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@500;700;900&family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
<!--EMBED_SLOT-->
<style>
:root{
  color-scheme:dark;
  --bg0:#070C16;--bg1:#0B1220;--surface:#111A2E;--surface2:#16223B;--field:#0D1526;
  --line:rgba(122,152,204,.16);--line2:rgba(122,152,204,.30);
  --ink:#EAF1FF;--dim:#9FB0CC;--faint:#66779A;
  --amber:#FFB224;--amber2:#FF8A00;--cyan:#2BD9FF;--cyan2:#0EA5E9;
  --violet:#B78CFF;--violet2:#8B5CF6;--green:#3DDC84;--green2:#1FB865;
  --red:#FF5D5D;--red2:#E23B3B;--magenta:#FF4FD8;--blue:#6C8CFF;--lime:#C9F24D;
  --ease:cubic-bezier(.22,.9,.28,1);
  --f-head:'Unbounded','Bahnschrift','DIN Alternate','Segoe UI',system-ui,sans-serif;
  --f-body:'Manrope','Segoe UI','SF Pro Text',system-ui,-apple-system,sans-serif;
  --f-mono:'JetBrains Mono','Cascadia Mono','SF Mono',Consolas,ui-monospace,monospace;
}
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
[hidden]{display:none!important}
html{scroll-behavior:smooth}
html.lock{overflow:hidden}
body{font-family:var(--f-body);font-size:15px;line-height:1.45;color:var(--ink);
  background:linear-gradient(180deg,var(--bg1),var(--bg0) 70%);min-height:100vh;min-height:100dvh;overflow-x:hidden}
::selection{background:rgba(43,217,255,.28);color:#fff}
button{font-family:inherit;color:inherit;background:none;border:0;cursor:pointer;touch-action:manipulation}
input,select{font-family:inherit;touch-action:manipulation}
svg.ic{width:18px;height:18px;flex:none;display:block}
:focus-visible{outline:2px solid var(--cyan);outline-offset:2px;border-radius:8px}
.sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
::-webkit-scrollbar{width:10px;height:8px}
::-webkit-scrollbar-track{background:rgba(10,16,30,.6)}
::-webkit-scrollbar-thumb{background:linear-gradient(180deg,var(--cyan2),var(--violet2));border-radius:8px;border:2px solid #0B1220}
::-webkit-scrollbar-thumb:hover{background:linear-gradient(180deg,var(--cyan),var(--violet))}
*{scrollbar-width:thin;scrollbar-color:#3a5f8f #0a101e}
.c-c1{--cc:#2BD9FF;--ccs:rgba(43,217,255,.12);--ccb:rgba(43,217,255,.42)}
.c-c2{--cc:#FFB224;--ccs:rgba(255,178,36,.12);--ccb:rgba(255,178,36,.42)}
.c-c3{--cc:#B78CFF;--ccs:rgba(183,140,255,.13);--ccb:rgba(183,140,255,.44)}
.c-c4{--cc:#FF4FD8;--ccs:rgba(255,79,216,.12);--ccb:rgba(255,79,216,.42)}
.c-c5{--cc:#6C8CFF;--ccs:rgba(108,140,255,.14);--ccb:rgba(108,140,255,.46)}
.c-c6{--cc:#C9F24D;--ccs:rgba(201,242,77,.12);--ccb:rgba(201,242,77,.42)}
.c-cw{--cc:#FFB224;--ccs:rgba(255,178,36,.1);--ccb:rgba(255,178,36,.45)}
.c-cx{--cc:#9FB0CC;--ccs:rgba(159,176,204,.12);--ccb:rgba(159,176,204,.35)}
.w-c0{--wc:#FFB224;--wcs:rgba(255,178,36,.13);--wcb:rgba(255,178,36,.4)}
.w-c1{--wc:#2BD9FF;--wcs:rgba(43,217,255,.12);--wcb:rgba(43,217,255,.4)}
.w-c2{--wc:#B78CFF;--wcs:rgba(183,140,255,.13);--wcb:rgba(183,140,255,.42)}
.w-c3{--wc:#FF4FD8;--wcs:rgba(255,79,216,.12);--wcb:rgba(255,79,216,.4)}
.w-c4{--wc:#6C8CFF;--wcs:rgba(108,140,255,.14);--wcb:rgba(108,140,255,.44)}
.w-c5{--wc:#C9F24D;--wcs:rgba(201,242,77,.12);--wcb:rgba(201,242,77,.4)}
.bg{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden}
.bg-grid{position:absolute;inset:0;
  background-image:linear-gradient(rgba(148,170,210,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(148,170,210,.05) 1px,transparent 1px);
  background-size:44px 44px;
  -webkit-mask-image:radial-gradient(120% 90% at 50% 0%,#000 30%,transparent 90%);
          mask-image:radial-gradient(120% 90% at 50% 0%,#000 30%,transparent 90%)}
.aurora{position:absolute;width:60vmax;height:60vmax;border-radius:50%;filter:blur(90px);opacity:.55;will-change:transform}
.a-cyan{top:-28vmax;left:-18vmax;background:radial-gradient(circle,rgba(14,165,233,.20),transparent 65%);animation:drift1 46s var(--ease) infinite alternate}
.a-amber{bottom:-30vmax;right:-20vmax;background:radial-gradient(circle,rgba(255,138,0,.13),transparent 65%);animation:drift2 58s var(--ease) infinite alternate}
.a-violet{top:22%;right:-26vmax;background:radial-gradient(circle,rgba(139,92,246,.13),transparent 65%);animation:drift1 64s var(--ease) infinite alternate-reverse}
.a-green{bottom:-24vmax;left:12vmax;background:radial-gradient(circle,rgba(61,220,132,.22),transparent 62%);opacity:0;transition:opacity 1.2s ease}
@keyframes drift1{from{transform:translate(0,0) scale(1)}to{transform:translate(9vmax,7vmax) scale(1.12)}}
@keyframes drift2{from{transform:translate(0,0) scale(1.05)}to{transform:translate(-8vmax,-6vmax) scale(.95)}}
.grain{position:absolute;inset:0;opacity:.05;mix-blend-mode:overlay;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")}
header{position:sticky;top:0;z-index:50;background:rgba(10,16,30,.78);
  backdrop-filter:blur(16px) saturate(150%);-webkit-backdrop-filter:blur(16px) saturate(150%);
  border-bottom:1px solid var(--line);transition:box-shadow .3s ease;padding-top:env(safe-area-inset-top)}
header.scrolled{box-shadow:0 12px 40px -18px rgba(0,0,0,.85)}
.hwrap{max-width:1080px;margin:0 auto;padding:10px 16px}
.hrow{display:flex;align-items:center;gap:10px}
.brand-row{padding-bottom:8px}
.brand{display:flex;align-items:center;gap:10px;min-width:0}
.brand-ic{width:36px;height:36px;flex:none;border-radius:11px;display:grid;place-items:center;
  background:linear-gradient(150deg,#15223C,#0D1526);border:1px solid var(--line2);
  box-shadow:0 0 18px rgba(61,220,132,.18),inset 0 0 12px rgba(43,217,255,.08)}
.brand-ic svg{width:20px;height:20px}
.brand-tx{min-width:0}
.brand-tx h1{font-family:var(--f-head);font-weight:900;font-size:clamp(14px,4vw,17px);letter-spacing:.3px;white-space:nowrap;
  background:linear-gradient(90deg,#EAF1FF 30%,#9BE8FF 70%,#B78CFF);-webkit-background-clip:text;background-clip:text;color:transparent}
.brand-tx p{font-family:var(--f-mono);font-size:9.5px;letter-spacing:1.4px;text-transform:uppercase;color:var(--faint);white-space:nowrap;margin-top:2px}
.hspace{flex:1}
.ring{position:relative;width:42px;height:42px;flex:none}
.ring svg{width:42px;height:42px;display:block}
.ring .rbg{fill:none;stroke:rgba(122,152,204,.18);stroke-width:4.5}
.ring .rfg{fill:none;stroke:url(#ringGrad);stroke-width:4.5;stroke-linecap:round;stroke-dasharray:106.8;stroke-dashoffset:106.8;transition:stroke-dashoffset 1s var(--ease) .25s}
.ring span{position:absolute;inset:0;display:grid;place-items:center;font-family:var(--f-mono);font-size:9.5px;font-weight:700;color:var(--dim)}
.ibtn{position:relative;width:40px;height:40px;flex:none;display:grid;place-items:center;border-radius:11px;
  border:1px solid var(--line);background:rgba(22,34,59,.55);color:var(--dim);
  transition:color .2s,border-color .2s,box-shadow .25s,transform .15s,background .2s}
.ibtn:hover{color:var(--ink);border-color:rgba(43,217,255,.45);box-shadow:0 0 14px rgba(43,217,255,.18);transform:translateY(-1px)}
.ibtn:active{transform:scale(.94)}
.ibtn.sm{width:32px;height:32px;border-radius:9px}
.ibtn.sm svg{width:15px;height:15px}
.ibtn.act{width:36px;height:36px;border-radius:10px;background:transparent}
.ibtn.act svg{width:16px;height:16px}
.ibtn.danger:hover{color:var(--red);border-color:rgba(255,93,93,.5);box-shadow:0 0 14px rgba(255,93,93,.2)}
.app-dot{position:absolute;right:5px;top:5px;width:8px;height:8px;border-radius:50%;background:var(--faint);border:1.5px solid #0F1728;transition:background .3s}
.app-dot.ok{background:var(--green);box-shadow:0 0 8px rgba(61,220,132,.8)}
.app-dot.warn{background:var(--amber);box-shadow:0 0 8px rgba(255,178,36,.8)}
.app-dot.upd{background:var(--cyan);box-shadow:0 0 8px rgba(43,217,255,.9);animation:pulse 1.6s ease infinite}
.btn-primary{display:inline-flex;align-items:center;gap:8px;height:40px;padding:0 16px;border-radius:12px;
  font-weight:800;font-size:13.5px;color:#1A1206;letter-spacing:.2px;
  background:linear-gradient(135deg,#FFC53D,#FF8A00 58%,#FF6A00);
  box-shadow:0 6px 22px -6px rgba(255,138,0,.55),inset 0 1px 0 rgba(255,255,255,.35);transition:filter .2s,transform .15s,box-shadow .25s}
.btn-primary:hover{filter:brightness(1.07);transform:translateY(-1px);box-shadow:0 10px 28px -6px rgba(255,138,0,.65)}
.btn-primary:active{transform:scale(.96)}
.btn-primary svg{width:16px;height:16px}
.search-row{padding-bottom:8px}
.search{position:relative;flex:1;min-width:0}
.search>svg{position:absolute;left:12px;top:50%;transform:translateY(-50%);width:16px;height:16px;color:var(--faint);pointer-events:none}
.search input{width:100%;height:42px;border-radius:12px;border:1px solid var(--line);background:rgba(13,21,38,.75);
  color:var(--ink);font-size:16px;font-weight:500;padding:0 40px 0 38px;transition:border-color .2s,box-shadow .2s}
.search input::placeholder{color:var(--faint)}
.search input:focus{outline:none;border-color:rgba(43,217,255,.55);box-shadow:0 0 0 3px rgba(43,217,255,.14)}
.search .ibtn{position:absolute;right:5px;top:50%;transform:translateY(-50%)}
.cfilter{position:relative;flex:none;max-width:158px}
.cfilter .cf-ic{position:absolute;left:10px;top:50%;transform:translateY(-50%);width:15px;height:15px;color:var(--faint);pointer-events:none;transition:color .25s}
.cfilter select{appearance:none;-webkit-appearance:none;width:100%;height:42px;border-radius:12px;border:1px solid var(--line);
  background:rgba(13,21,38,.75);color:var(--dim);font-size:12.5px;font-weight:700;padding:0 26px 0 31px;cursor:pointer;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='%239FB0CC' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat:no-repeat;background-position:right 9px center;transition:border-color .25s,color .25s,box-shadow .25s}
.cfilter select:hover{border-color:var(--line2);color:var(--ink)}
.cfilter select:focus{outline:none;border-color:rgba(43,217,255,.55);box-shadow:0 0 0 3px rgba(43,217,255,.14)}
.cfilter.active select{color:var(--cc);border-color:var(--ccb);background-color:var(--ccs);box-shadow:0 0 16px var(--ccs)}
.cfilter.active .cf-ic{color:var(--cc)}
.chips-row{gap:8px}
.chips{display:flex;gap:7px;flex:1;min-width:0;overflow-x:auto;padding-bottom:2px;scrollbar-width:none}
.chips::-webkit-scrollbar{height:4px}
.chips::-webkit-scrollbar-thumb{background:rgba(43,217,255,.35);border:0}
.chip-f{flex:none;display:inline-flex;align-items:center;gap:6px;height:34px;padding:0 12px;border-radius:999px;
  font-family:var(--f-mono);font-size:11.5px;font-weight:600;color:var(--dim);border:1px solid var(--line);background:rgba(22,34,59,.45);transition:all .2s}
.chip-f b{font-size:10.5px;font-weight:700;padding:1px 6px;border-radius:6px;background:rgba(122,152,204,.16);color:var(--dim)}
.chip-f:hover{border-color:var(--line2);color:var(--ink)}
.chip-f.active[data-filter="all"]{color:var(--ink);border-color:var(--line2);background:rgba(234,241,255,.09)}
.chip-f.active[data-filter="all"] b{background:rgba(234,241,255,.16);color:var(--ink)}
.chip-f.active[data-filter="work"]{color:var(--amber);border-color:rgba(255,178,36,.5);background:rgba(255,178,36,.12);box-shadow:0 0 14px rgba(255,178,36,.14)}
.chip-f.active[data-filter="work"] b{background:rgba(255,178,36,.2);color:var(--amber)}
.chip-f.active[data-filter="reports"]{color:var(--cyan);border-color:rgba(43,217,255,.5);background:rgba(43,217,255,.12);box-shadow:0 0 14px rgba(43,217,255,.14)}
.chip-f.active[data-filter="reports"] b{background:rgba(43,217,255,.2);color:var(--cyan)}
.chip-f.active[data-filter="closed"]{color:var(--green);border-color:rgba(61,220,132,.5);background:rgba(61,220,132,.12);box-shadow:0 0 14px rgba(61,220,132,.16)}
.chip-f.active[data-filter="closed"] b{background:rgba(61,220,132,.2);color:var(--green)}
.sort{flex:none}
.sort select{appearance:none;-webkit-appearance:none;height:34px;border-radius:10px;border:1px solid var(--line);
  background:rgba(22,34,59,.55) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%239FB0CC' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E") no-repeat right 9px center;
  color:var(--dim);font-size:12px;font-weight:700;padding:0 28px 0 11px;cursor:pointer;transition:border-color .2s,color .2s}
.sort select:hover{border-color:var(--line2);color:var(--ink)}
.sort select:focus{outline:none;border-color:rgba(43,217,255,.55)}
.wrap{max-width:1080px;margin:0 auto;padding:0 16px;position:relative;z-index:2}
main{padding-top:12px;padding-bottom:130px}
.statusbar{display:flex;align-items:center;gap:9px;padding:8px 12px;margin-bottom:12px;border-radius:12px;
  border:1px solid var(--line);background:linear-gradient(100deg,rgba(22,34,59,.7),rgba(13,21,38,.55));animation:cardIn .5s var(--ease) backwards}
.sb-dot{width:9px;height:9px;flex:none;border-radius:50%;background:var(--faint);transition:background .3s,box-shadow .3s}
.sb-dot.ok{background:var(--green);box-shadow:0 0 10px rgba(61,220,132,.9)}
.sb-dot.warn{background:var(--amber);box-shadow:0 0 10px rgba(255,178,36,.9)}
.sb-dot.busy{background:var(--cyan);box-shadow:0 0 10px rgba(43,217,255,.9);animation:pulse 1.4s ease infinite}
.sb-tx{flex:1;min-width:0;font-family:var(--f-mono);font-size:10.5px;font-weight:600;letter-spacing:.3px;color:var(--dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.sb-btn{flex:none;height:28px;padding:0 10px;border-radius:8px;font-family:var(--f-mono);font-size:10px;font-weight:700;
  letter-spacing:.6px;text-transform:uppercase;color:var(--dim);border:1px solid var(--line2);background:rgba(22,34,59,.5);transition:all .2s}
.sb-btn:hover{color:var(--ink);border-color:rgba(43,217,255,.5)}
.sb-btn.hot{color:#08130C;background:linear-gradient(135deg,#4ADE80,#22C55E);border-color:transparent}
.banner{display:flex;align-items:center;gap:12px;padding:12px 14px;margin-bottom:14px;border-radius:16px;border:1px solid rgba(43,217,255,.35);
  background:linear-gradient(120deg,rgba(43,217,255,.12),rgba(139,92,246,.10) 55%,rgba(61,220,132,.10));
  box-shadow:0 8px 30px -14px rgba(43,217,255,.35);animation:cardIn .6s var(--ease) .15s backwards}
.banner-ic{width:38px;height:38px;flex:none;border-radius:11px;display:grid;place-items:center;color:var(--cyan);background:rgba(43,217,255,.12);border:1px solid rgba(43,217,255,.35)}
.banner-tx{flex:1;min-width:0}
.banner-tx b{display:block;font-size:13.5px;font-weight:800}
.banner-tx p{font-size:11.5px;color:var(--dim);margin-top:1px}
.btn-ghost{display:inline-flex;align-items:center;justify-content:center;gap:7px;height:36px;padding:0 14px;border-radius:10px;
  border:1px solid var(--line2);color:var(--dim);font-size:12.5px;font-weight:700;background:rgba(22,34,59,.4);transition:all .2s}
.btn-ghost:hover{color:var(--ink);border-color:rgba(43,217,255,.5);box-shadow:0 0 12px rgba(43,217,255,.15)}
.btn-ghost:active{transform:scale(.96)}
.btn-ghost svg{width:15px;height:15px}
.btn-sm{height:32px;padding:0 11px;font-size:11.5px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(340px,100%),1fr));gap:14px}
.card{position:relative;min-width:0;padding:16px;border-radius:18px;overflow:hidden;
  background:linear-gradient(160deg,#141F38,#0F1728 70%);border:1px solid var(--line);box-shadow:0 10px 30px -18px rgba(0,0,0,.8);
  transition:opacity .55s var(--ease) var(--d,0ms),transform .55s var(--ease) var(--d,0ms),border-color .25s,box-shadow .3s,background .4s}
.card::before{content:'';position:absolute;left:0;right:0;top:0;height:2px;opacity:.55;
  background:linear-gradient(90deg,transparent,rgba(43,217,255,.6),rgba(183,140,255,.5),transparent)}
.card.settled{transition:transform .25s var(--ease),border-color .25s,box-shadow .3s,background .4s,opacity .3s}
.card.settled:hover{transform:translateY(-2px);border-color:var(--line2);box-shadow:0 16px 40px -18px rgba(0,0,0,.9),0 0 24px rgba(43,217,255,.07)}
.card.pre{opacity:0;transform:translateY(18px) scale(.985)}
.card.pre.in{opacity:1;transform:none}
.card.pop-in{animation:popIn .45s var(--ease) backwards}
@keyframes popIn{from{opacity:0;transform:scale(.94)}to{opacity:1;transform:none}}
@keyframes cardIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
.card-cust{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:9px}
.cust-link,.master-link{display:inline-flex;align-items:center;gap:6px;max-width:100%;padding:4px 8px 4px 7px;border-radius:9px;
  font-family:var(--f-mono);font-size:11px;font-weight:700;letter-spacing:.6px;color:var(--cc);background:var(--ccs);border:1px solid var(--ccb);
  transition:box-shadow .25s,transform .15s,background .25s,border-color .25s}
.cust-link .cl-ic,.master-link .cl-ic{width:13px;height:13px}
.cust-link .cl-tx,.master-link .cl-tx{border-bottom:1px dashed currentColor;padding-bottom:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.cust-link .cl-ch{width:11px;height:11px;opacity:.65}
.cust-link:hover,.master-link:hover{box-shadow:0 0 16px var(--ccs);transform:translateY(-1px);border-color:var(--cc)}
.cust-link:active,.master-link:active{transform:scale(.97)}
.cust-link.unset,.master-link.unset{font-weight:600;letter-spacing:.3px;border-style:dashed}
.master-link{--cc:#9FB0CC;--ccs:rgba(159,176,204,.1);--ccb:rgba(159,176,204,.3);letter-spacing:.2px}
.master-link.has{--cc:#EAF1FF;--ccs:rgba(234,241,255,.07);--ccb:rgba(234,241,255,.22)}
.card-cust.flash .cust-link{animation:cpop .38s cubic-bezier(.3,1.6,.5,1)}
.card-top{display:flex;align-items:flex-start;gap:10px}
.card-name{flex:1;min-width:0;font-family:var(--f-head);font-weight:700;font-size:clamp(14.5px,2.3vw,17px);line-height:1.4;letter-spacing:.2px;overflow-wrap:anywhere}
.status-badge{flex:none;display:inline-flex;align-items:center;gap:6px;margin-top:2px;font-family:var(--f-mono);font-size:10px;font-weight:700;
  letter-spacing:1.2px;text-transform:uppercase;padding:5px 9px;border-radius:8px;white-space:nowrap}
.status-badge .bi{width:11px;height:11px}
.b-open{color:var(--amber);background:rgba(255,178,36,.1);border:1px solid rgba(255,178,36,.38)}
.b-open .dot{width:6px;height:6px;border-radius:50%;background:var(--amber);animation:pulse 2s ease infinite}
@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(255,178,36,.5)}50%{box-shadow:0 0 0 5px rgba(255,178,36,0)}}
.b-rep{color:var(--cyan);background:rgba(43,217,255,.1);border:1px solid rgba(43,217,255,.42)}
.b-none{color:var(--dim);background:transparent;border:1px dashed var(--line2)}
.b-closed{color:#0E2417;background:linear-gradient(135deg,#4ADE80,#22C55E);border:1px solid rgba(61,220,132,.7);box-shadow:0 0 16px rgba(61,220,132,.35)}
.card-chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:9px}
.chip{display:inline-flex;align-items:center;gap:5px;font-family:var(--f-mono);font-size:10.5px;font-weight:600;
  padding:4px 8px;border-radius:7px;border:1px solid var(--line);background:rgba(22,34,59,.55);color:var(--dim)}
.chip svg{width:11px;height:11px}
.chip-kind{color:var(--cyan);border-color:rgba(43,217,255,.35);background:rgba(43,217,255,.08)}
.chip-kind.k-tp{color:var(--amber);border-color:rgba(255,178,36,.38);background:rgba(255,178,36,.09)}
.chip-kind.k-line{color:var(--violet);border-color:rgba(183,140,255,.4);background:rgba(183,140,255,.1)}
.chip-num{color:var(--faint)}
.chip-start.soon,.chip-end.soon{color:var(--amber);border-color:rgba(255,178,36,.45);background:rgba(255,178,36,.1)}
.chip-start.over,.chip-end.over{color:var(--red);border-color:rgba(255,93,93,.5);background:rgba(255,93,93,.1)}
.chip-end.ok{color:var(--green);border-color:rgba(61,220,132,.45);background:rgba(61,220,132,.1)}
.works-head{display:flex;align-items:center;gap:8px;margin:14px 0 8px}
.works-label{flex:1;min-width:0;font-family:var(--f-mono);font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--faint)}
.works-label.ok{color:var(--green)}
.add-work{display:inline-flex;align-items:center;gap:5px;height:28px;padding:0 9px;border-radius:8px;flex:none;
  font-family:var(--f-mono);font-size:10px;font-weight:700;letter-spacing:.5px;color:var(--dim);border:1px dashed var(--line2);background:rgba(22,34,59,.4);transition:all .2s}
.add-work svg{width:12px;height:12px}
.add-work:hover{color:var(--cyan);border-color:rgba(43,217,255,.5);border-style:solid;box-shadow:0 0 12px rgba(43,217,255,.14)}
.works{display:flex;flex-direction:column;gap:8px}
.nowork{display:flex;flex-wrap:wrap;align-items:center;gap:9px;padding:14px;border-radius:12px;
  border:1px dashed rgba(255,178,36,.45);background:rgba(255,178,36,.06);color:var(--amber);font-size:12.5px;font-weight:700}
.nowork svg{width:16px;height:16px}
.nowork span{flex:1;min-width:120px}
.work{padding:11px 12px;border-radius:12px;background:rgba(13,21,38,.6);border:1px solid rgba(122,152,204,.12);transition:background .3s,border-color .3s}
.work.is-done{background:linear-gradient(120deg,var(--wcs),rgba(13,21,38,.5));border-color:var(--wcb)}
.work.is-full{background:linear-gradient(120deg,rgba(61,220,132,.12),rgba(61,220,132,.04));border-color:rgba(61,220,132,.38)}
.whead{display:flex;align-items:center;gap:7px}
.wcode{font-family:var(--f-mono);font-size:10.5px;font-weight:700;letter-spacing:.5px;padding:2px 7px;border-radius:6px;flex:none;color:var(--wc);background:var(--wcs);border:1px solid var(--wcb)}
.wtitle{flex:1;min-width:0;font-size:13px;font-weight:700;color:var(--ink);overflow-wrap:anywhere}
.wdel{width:26px;height:26px;flex:none;display:grid;place-items:center;border-radius:7px;color:var(--faint);opacity:.75;transition:all .2s}
.wdel svg{width:12px;height:12px}
.wdel:hover{opacity:1;color:var(--red);background:rgba(255,93,93,.12)}
.wperson{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin:6px 0 8px}
.avatar{width:22px;height:22px;flex:none;border-radius:50%;display:grid;place-items:center;font-family:var(--f-mono);font-size:9px;font-weight:700;color:var(--wc);background:var(--wcs);border:1px solid var(--wcb)}
.avatar.warn{color:var(--amber);background:rgba(255,178,36,.1);border:1px dashed rgba(255,178,36,.55)}
.pname{font-size:12.5px;font-weight:700;color:var(--ink);overflow-wrap:anywhere}
.pname.warn{color:var(--amber);font-style:italic;font-weight:600}
.prole{font-size:10.5px;color:var(--faint)}
.wchecks{display:flex;flex-wrap:wrap;gap:8px}
.wchk{position:relative;flex:1 1 132px;min-width:0;display:flex;align-items:center;gap:7px;min-height:40px;padding:7px 10px;border-radius:10px;
  cursor:pointer;user-select:none;-webkit-user-select:none;border:1px solid rgba(122,152,204,.18);background:rgba(11,19,34,.7);transition:all .25s}
.wchk:hover{border-color:var(--line2)}
.wchk:active{transform:scale(.985)}
.wchk .work-check{position:absolute;left:10px;top:50%;transform:translateY(-50%);width:24px;height:24px;opacity:0;margin:0;pointer-events:none}
.cbox{width:24px;height:24px;flex:none;border-radius:7px;display:grid;place-items:center;border:2px solid rgba(154,171,204,.45);background:#0B1322;transition:all .25s var(--ease)}
.cbox svg{width:100%;height:100%;opacity:0;transition:opacity .15s}
.cbox svg path{fill:none;stroke:#08130C;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}
.cbox.sm{width:22px;height:22px;border-radius:6px}
.work-check:checked~.cbox,.wt-check:checked~.cbox{background:linear-gradient(145deg,var(--wc),var(--wc));border-color:var(--wc);box-shadow:0 2px 10px var(--wcs)}
.wchk.rep .work-check:checked~.cbox{background:linear-gradient(145deg,#4ADE80,#1FB865);border-color:var(--green);box-shadow:0 2px 10px rgba(61,220,132,.35)}
.work-check:checked~.cbox svg,.wt-check:checked~.cbox svg{opacity:1}
.work-check:focus-visible~.cbox,.wt-check:focus-visible~.cbox{box-shadow:0 0 0 3px rgba(43,217,255,.35)}
.cbox.anim{animation:cpop .32s cubic-bezier(.3,1.6,.5,1)}
.cbox.anim svg path{stroke-dasharray:23;animation:draw .3s ease-out forwards}
@keyframes cpop{0%{transform:scale(1)}45%{transform:scale(1.16)}100%{transform:scale(1)}}
@keyframes draw{from{stroke-dashoffset:23}to{stroke-dashoffset:0}}
.wchk.on{background:var(--wcs);border-color:var(--wcb)}
.wchk.rep.on{background:rgba(61,220,132,.11);border-color:rgba(61,220,132,.4)}
.chk-tx{font-size:12px;font-weight:700;color:var(--dim);white-space:nowrap}
.wchk.on .chk-tx{color:var(--ink)}
.wchk.rep.on .chk-tx{color:#BFF5D6}
.chk-date{margin-left:auto;font-family:var(--f-mono);font-size:10.5px;font-weight:700;color:var(--green);white-space:nowrap}
.wchk.done.on .chk-date{color:var(--wc)}
.card-foot{display:flex;align-items:center;gap:10px;margin-top:13px}
.prog{display:flex;gap:7px;flex:1;min-width:0}
.seg-group{display:flex;gap:3px;flex:1;min-width:0}
.seg{height:6px;flex:1;border-radius:4px;background:rgba(148,170,210,.14);transition:background .4s,box-shadow .4s}
.seg.on{background:var(--wc);box-shadow:0 0 10px var(--wcs)}
.seg.rep.on{background:linear-gradient(90deg,#3DDC84,#22C55E);box-shadow:0 0 10px rgba(61,220,132,.3)}
.prog-label{font-family:var(--f-mono);font-size:11px;font-weight:700;color:var(--dim);white-space:nowrap}
.card-acts{display:flex;gap:4px}
.card.closed{background:linear-gradient(150deg,rgba(61,220,132,.17),rgba(61,220,132,.05) 46%,rgba(15,26,32,.95));
  border-color:rgba(61,220,132,.55);box-shadow:0 12px 44px -14px rgba(61,220,132,.4),0 0 0 1px rgba(61,220,132,.12)}
.card.closed::before{opacity:1;background:linear-gradient(90deg,transparent,#3DDC84 30%,#A3F7BF 50%,#3DDC84 70%,transparent)}
.card.closed .card-name{color:#F2FFF7}
.card.closed .seg.on{background:linear-gradient(90deg,#3DDC84,#22C55E);box-shadow:0 0 10px rgba(61,220,132,.35)}
.card.closed .prog-label{color:var(--green)}
.card.settled.closed:hover{box-shadow:0 18px 54px -14px rgba(61,220,132,.55);border-color:rgba(61,220,132,.8)}
.card.just-closed{animation:closePulse 1.15s ease-out}
@keyframes closePulse{0%{box-shadow:0 0 0 0 rgba(61,220,132,.55)}100%{box-shadow:0 0 0 30px rgba(61,220,132,0)}}
.empty{text-align:center;padding:56px 20px;animation:cardIn .5s var(--ease) backwards}
.empty-ic{width:76px;height:76px;margin:0 auto 18px;border-radius:50%;display:grid;place-items:center;border:1.5px dashed var(--line2);color:var(--faint);background:rgba(22,34,59,.35)}
.empty-ic svg{width:30px;height:30px}
.empty-ic.ok{color:var(--green);border-color:rgba(61,220,132,.5);background:rgba(61,220,132,.08);box-shadow:0 0 30px rgba(61,220,132,.15)}
.empty h3{font-family:var(--f-head);font-weight:700;font-size:16px;margin-bottom:8px}
.empty p{font-size:13px;color:var(--dim);max-width:360px;margin:0 auto 18px}
.foot{position:relative;z-index:2;display:flex;flex-wrap:wrap;align-items:center;gap:10px;padding-top:16px;
  padding-bottom:calc(22px + env(safe-area-inset-bottom));border-top:1px solid var(--line)}
.foot-l{display:flex;align-items:center;gap:7px;font-family:var(--f-mono);font-size:10.5px;color:var(--faint);flex:1;min-width:200px}
.foot-l svg{width:13px;height:13px;color:var(--green)}
.foot-r{display:flex;flex-wrap:wrap;gap:7px;align-items:center}
.fbtn{display:inline-flex;align-items:center;gap:6px;height:32px;padding:0 11px;border-radius:9px;font-family:var(--f-mono);font-size:10.5px;font-weight:600;color:var(--dim);border:1px solid var(--line);background:rgba(22,34,59,.4);transition:all .2s}
.fbtn:hover{color:var(--ink);border-color:var(--line2)}
.fbtn svg{width:13px;height:13px}
.installed-tag{display:inline-flex;align-items:center;gap:5px;font-family:var(--f-mono);font-size:10.5px;color:var(--green)}
.installed-tag svg{width:13px;height:13px}
.scrim{position:fixed;inset:0;z-index:100;display:flex;align-items:flex-end;justify-content:center;
  background:rgba(4,8,18,.72);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);animation:fadeIn .22s ease}
.scrim.closing{animation:fadeOut .2s ease forwards}
@keyframes fadeIn{from{opacity:0}}
@keyframes fadeOut{to{opacity:0}}
.sheet{width:100%;max-width:560px;max-height:90vh;max-height:90dvh;display:flex;flex-direction:column;
  background:linear-gradient(180deg,#152139,#0F1728);border:1px solid var(--line2);border-bottom:0;border-radius:24px 24px 0 0;
  box-shadow:0 -20px 80px rgba(0,0,0,.7);animation:sheetUp .32s var(--ease)}
.sheet.narrow{max-width:460px}
.scrim.closing .sheet{animation:sheetDown .2s ease forwards}
@keyframes sheetUp{from{transform:translateY(60px);opacity:0}to{transform:none;opacity:1}}
@keyframes sheetDown{to{transform:translateY(60px);opacity:0}}
.handle{width:44px;height:4px;border-radius:4px;margin:10px auto 0;flex:none;background:linear-gradient(90deg,var(--cyan2),var(--violet2));opacity:.6}
.sheet-head{display:flex;align-items:center;gap:10px;padding:14px 18px;border-bottom:1px solid var(--line);flex:none}
.sheet-title{flex:1;min-width:0}
.sheet-title h2{font-family:var(--f-head);font-weight:700;font-size:15.5px}
.sheet-title p{font-size:11.5px;color:var(--faint);margin-top:2px;overflow-wrap:anywhere}
.sheet-body{position:relative;overflow-y:auto;padding:18px;flex:1}
.sheet-foot{display:flex;align-items:center;gap:9px;padding:13px 18px calc(13px + env(safe-area-inset-bottom));border-top:1px solid var(--line);flex:none}
.sheet-foot .sp{flex:1}
@media(min-width:640px){.scrim{align-items:center;padding:24px}.sheet{border-radius:24px;border-bottom:1px solid var(--line2)}.handle{display:none}}
.tabs{display:flex;gap:6px;padding:10px 18px 0;flex:none}
.tab{flex:1;height:36px;border-radius:10px;font-family:var(--f-mono);font-size:11px;font-weight:700;letter-spacing:.6px;text-transform:uppercase;
  color:var(--dim);border:1px solid var(--line);background:rgba(13,21,38,.6);transition:all .2s}
.tab:hover{color:var(--ink);border-color:var(--line2)}
.tab.active{color:#08130C;background:linear-gradient(135deg,#2BD9FF,#8B5CF6);border-color:transparent;box-shadow:0 0 18px rgba(43,217,255,.25)}
.seg-btns{display:flex;gap:6px;margin-bottom:14px;flex-wrap:wrap}
.seg-btn{height:32px;padding:0 12px;border-radius:9px;font-size:11.5px;font-weight:700;color:var(--dim);border:1px solid var(--line);background:rgba(13,21,38,.6);transition:all .2s}
.seg-btn:hover{color:var(--ink)}
.seg-btn.active{color:var(--cyan);border-color:rgba(43,217,255,.5);background:rgba(43,217,255,.12)}
.kv{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:11px;border:1px solid var(--line);background:rgba(13,21,38,.55);margin-bottom:7px}
.kv-k{flex:1;min-width:0;font-size:12.5px;font-weight:600;color:var(--dim)}
.kv-v{font-family:var(--f-mono);font-size:11.5px;font-weight:700;color:var(--ink);text-align:right;white-space:nowrap}
.kv-v.ok{color:var(--green)}.kv-v.warn{color:var(--amber)}.kv-v.bad{color:var(--red)}.kv-v.dim{color:var(--faint)}
.kv .ibtn{width:30px;height:30px;border-radius:8px}
.kv .ibtn svg{width:14px;height:14px}
.act-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}
.act-grid .btn-ghost,.act-grid .btn-primary,.act-grid .btn-danger{height:42px;font-size:12.5px;justify-content:center;padding:0 10px}
.act-grid .wide{grid-column:1/-1}
.portable{margin-top:14px;padding:14px;border-radius:14px;border:1px solid rgba(61,220,132,.35);
  background:linear-gradient(140deg,rgba(61,220,132,.1),rgba(43,217,255,.06))}
.portable-h{display:flex;align-items:center;gap:8px;font-family:var(--f-head);font-weight:700;font-size:13px;color:#BFF5D6}
.portable-h svg{width:16px;height:16px;color:var(--green)}
.portable p{font-size:11.5px;color:var(--dim);margin:6px 0 11px}
.switch{display:flex;align-items:center;gap:9px;cursor:pointer;user-select:none;-webkit-user-select:none;margin-bottom:11px;font-size:12px;font-weight:600;color:var(--dim)}
.switch input{position:absolute;opacity:0;width:0;height:0}
.sw-track{width:40px;height:23px;flex:none;border-radius:999px;background:rgba(122,152,204,.2);border:1px solid var(--line2);position:relative;transition:all .25s}
.sw-knob{position:absolute;left:2px;top:2px;width:17px;height:17px;border-radius:50%;background:var(--dim);transition:all .25s var(--ease)}
.switch input:checked~.sw-track{background:rgba(61,220,132,.3);border-color:rgba(61,220,132,.6)}
.switch input:checked~.sw-track .sw-knob{left:20px;background:var(--green);box-shadow:0 0 10px rgba(61,220,132,.7)}
.switch input:focus-visible~.sw-track{box-shadow:0 0 0 3px rgba(43,217,255,.35)}
.import-box{margin-top:12px;padding:13px;border-radius:13px;border:1px solid rgba(43,217,255,.4);background:rgba(43,217,255,.08)}
.import-box b{display:block;font-size:13px;margin-bottom:4px}
.import-box p{font-size:11.5px;color:var(--dim);margin-bottom:10px}
.fld{display:block;margin-bottom:14px;min-width:0}
.lbl{display:flex;align-items:center;flex-wrap:wrap;gap:6px;font-family:var(--f-mono);font-size:10px;font-weight:700;letter-spacing:1.3px;text-transform:uppercase;color:var(--dim);margin-bottom:6px;line-height:1.35}
.req{color:var(--amber)}
.fld input,.fld select{width:100%;height:44px;border-radius:12px;border:1px solid var(--line);background:var(--field);color:var(--ink);font-size:16px;font-weight:500;padding:0 12px;transition:border-color .2s,box-shadow .2s}
.fld select{appearance:none;-webkit-appearance:none;cursor:pointer;padding-right:32px;
  background:var(--field) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%239FB0CC' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E") no-repeat right 11px center}
.fld input::placeholder{color:var(--faint)}
.fld input:focus,.fld select:focus{outline:none;border-color:rgba(43,217,255,.55);box-shadow:0 0 0 3px rgba(43,217,255,.14)}
.fld input.invalid{border-color:rgba(255,93,93,.65);box-shadow:0 0 0 3px rgba(255,93,93,.15);animation:shake .35s ease}
@keyframes shake{0%,100%{transform:none}25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}
.err{display:block;font-size:11px;color:var(--red);margin-top:5px;font-weight:600}
.frow{display:grid;grid-template-columns:1fr 1fr;gap:10px}
@media(max-width:400px){.frow.dates{grid-template-columns:1fr}.act-grid{grid-template-columns:1fr}}
.psec{margin-top:4px;padding-top:14px;border-top:1px dashed var(--line);outline:none}
.psec-h{font-family:var(--f-mono);font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--dim)}
.psec-p{font-size:11px;color:var(--faint);margin:3px 0 12px}
.btn-danger{display:inline-flex;align-items:center;gap:7px;height:40px;padding:0 14px;border-radius:11px;color:var(--red);
  border:1px solid rgba(255,93,93,.4);background:rgba(255,93,93,.08);font-size:12.5px;font-weight:700;transition:all .2s}
.btn-danger:hover{background:rgba(255,93,93,.16);box-shadow:0 0 14px rgba(255,93,93,.2)}
.btn-danger svg{width:15px;height:15px}
.btn-ghost.big{height:40px;padding:0 16px;font-size:13px}
.btn-primary.big{height:40px}
.wt-list{display:flex;flex-direction:column;gap:8px;margin-bottom:12px}
.wt-row{padding:9px 11px;border-radius:12px;border:1px solid var(--line);background:rgba(13,21,38,.55);transition:all .25s}
.wt-row.on{border-color:var(--wcb);background:linear-gradient(120deg,var(--wcs),rgba(13,21,38,.5))}
.wt-toggle{position:relative;display:flex;align-items:center;gap:9px;min-height:34px;cursor:pointer;user-select:none;-webkit-user-select:none}
.wt-check{position:absolute;left:0;top:50%;transform:translateY(-50%);width:22px;height:22px;opacity:0;margin:0;pointer-events:none}
.wt-code{font-family:var(--f-mono);font-size:11px;font-weight:700;letter-spacing:.5px;padding:2px 7px;border-radius:6px;flex:none;color:var(--wc);background:var(--wcs);border:1px solid var(--wcb)}
.wt-title{flex:1;min-width:0;font-size:12.5px;font-weight:600;color:var(--dim);overflow-wrap:anywhere}
.wt-row.on .wt-title{color:var(--ink)}
.wt-person{width:100%;height:40px;margin-top:8px;border-radius:10px;border:1px solid var(--line);background:var(--field);color:var(--ink);font-size:15px;font-weight:500;padding:0 11px;transition:border-color .2s,box-shadow .2s}
.wt-person::placeholder{color:var(--faint)}
.wt-person:focus{outline:none;border-color:rgba(43,217,255,.55);box-shadow:0 0 0 3px rgba(43,217,255,.14)}
.wt-row:not(.on) .wt-person{display:none}
.wt-add{display:grid;grid-template-columns:104px 1fr;gap:8px}
.wt-add input{height:40px;border-radius:10px;border:1px dashed var(--line2);background:var(--field);color:var(--ink);font-size:15px;font-weight:500;padding:0 11px;min-width:0;transition:border-color .2s,box-shadow .2s}
.wt-add input::placeholder{color:var(--faint);font-size:13px}
.wt-add input:focus{outline:none;border-color:rgba(43,217,255,.55);border-style:solid;box-shadow:0 0 0 3px rgba(43,217,255,.14)}
.wt-add input.invalid{border-color:rgba(255,93,93,.65);animation:shake .35s ease}
.wt-add .btn-ghost{grid-column:1/-1;height:38px}
.cust-list{display:flex;flex-direction:column;gap:8px}
.cust-opt{display:flex;align-items:center;gap:11px;width:100%;min-height:54px;padding:10px 13px;border-radius:13px;border:1px solid var(--line);background:var(--field);text-align:left;transition:all .2s}
.cust-opt:hover{border-color:var(--ccb);background:var(--ccs);transform:translateY(-1px)}
.cust-opt:active{transform:scale(.985)}
.co-dot{width:12px;height:12px;flex:none;border-radius:4px;background:var(--cc);box-shadow:0 0 12px var(--ccs)}
.co-name{font-family:var(--f-mono);font-size:14px;font-weight:700;letter-spacing:.6px;color:var(--ink)}
.co-cnt{flex:1;min-width:0;font-size:11px;color:var(--faint);text-align:right}
.co-check{width:22px;height:22px;flex:none;border-radius:50%;display:grid;place-items:center;border:1.5px solid var(--line2);color:transparent;transition:all .2s}
.co-check svg{width:12px;height:12px}
.cust-opt.cur{border-color:var(--ccb);background:var(--ccs);box-shadow:0 0 18px var(--ccs)}
.cust-opt.cur .co-name{color:var(--cc)}
.cust-opt.cur .co-check{background:var(--cc);border-color:var(--cc);color:#08130C}
.step{display:flex;gap:12px;align-items:flex-start;margin-bottom:15px}
.step-ic{width:42px;height:42px;flex:none;border-radius:12px;display:grid;place-items:center;background:rgba(22,34,59,.7);border:1px solid var(--line2);color:var(--cyan)}
.step-ic svg{width:20px;height:20px}
.step:nth-child(2) .step-ic{color:var(--amber)}
.step:nth-child(3) .step-ic{color:var(--violet)}
.step:nth-child(4) .step-ic{color:var(--green)}
.step-tx{min-width:0}
.step-tx b{display:block;font-size:13.5px;font-weight:800}
.step-tx p{font-size:12px;color:var(--dim);margin-top:2px}
.note{display:flex;gap:9px;align-items:flex-start;padding:11px 12px;border-radius:12px;font-size:12px;margin-top:10px}
.note svg{width:15px;height:15px;flex:none;margin-top:1px}
.note.ok{color:#BFF5D6;background:rgba(61,220,132,.1);border:1px solid rgba(61,220,132,.35)}
.note.ok svg{color:var(--green)}
.note.warn{color:#FFE2AE;background:rgba(255,178,36,.09);border:1px solid rgba(255,178,36,.35)}
.note.warn svg{color:var(--amber)}
.note.dim{color:var(--dim);background:rgba(22,34,59,.5);border:1px solid var(--line)}
.note.dim svg{color:var(--faint)}
.toasts{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(16px + env(safe-area-inset-bottom));z-index:300;
  display:flex;flex-direction:column;gap:8px;width:min(440px,calc(100vw - 24px));pointer-events:none}
.toast{pointer-events:auto;position:relative;overflow:hidden;display:flex;align-items:center;gap:10px;padding:11px 12px;border-radius:14px;
  background:rgba(19,30,54,.96);border:1px solid var(--line2);box-shadow:0 14px 44px -10px rgba(0,0,0,.85);backdrop-filter:blur(10px);animation:toastIn .3s var(--ease)}
.toast.out{animation:toastOut .2s ease forwards}
@keyframes toastIn{from{opacity:0;transform:translateY(14px) scale(.97)}to{opacity:1;transform:none}}
@keyframes toastOut{to{opacity:0;transform:translateY(10px) scale(.97)}}
.t-ic{width:28px;height:28px;flex:none;border-radius:9px;display:grid;place-items:center}
.t-ic svg{width:15px;height:15px}
.t-success .t-ic{color:var(--green);background:rgba(61,220,132,.14);border:1px solid rgba(61,220,132,.4)}
.t-info .t-ic{color:var(--cyan);background:rgba(43,217,255,.12);border:1px solid rgba(43,217,255,.4)}
.t-warn .t-ic{color:var(--amber);background:rgba(255,178,36,.12);border:1px solid rgba(255,178,36,.4)}
.t-danger .t-ic{color:var(--red);background:rgba(255,93,93,.12);border:1px solid rgba(255,93,93,.4)}
.t-msg{flex:1;min-width:0;font-size:12.5px;font-weight:700;overflow-wrap:anywhere}
.t-act{flex:none;height:32px;padding:0 11px;border-radius:8px;font-family:var(--f-mono);font-size:10.5px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;color:var(--cyan);border:1px solid rgba(43,217,255,.45);background:rgba(43,217,255,.1);transition:all .2s}
.t-act:hover{background:rgba(43,217,255,.2)}
.t-x{flex:none;width:28px;height:28px;display:grid;place-items:center;border-radius:8px;color:var(--faint)}
.t-x:hover{color:var(--ink)}
.t-x svg{width:13px;height:13px}
.t-bar{position:absolute;left:0;bottom:0;height:2px;width:100%;animation:shrink linear forwards}
.t-success .t-bar{background:linear-gradient(90deg,#3DDC84,#A3F7BF)}
.t-info .t-bar{background:linear-gradient(90deg,#0EA5E9,#2BD9FF)}
.t-warn .t-bar{background:linear-gradient(90deg,#FF8A00,#FFC53D)}
.t-danger .t-bar{background:linear-gradient(90deg,#E23B3B,#FF5D5D)}
@keyframes shrink{from{width:100%}to{width:0}}
#confetti{position:fixed;inset:0;z-index:250;pointer-events:none;overflow:hidden}
.cf{position:absolute;display:block;will-change:transform,opacity}
@media(max-width:560px){.brand-tx p{display:none}.hwrap{padding:8px 12px}.wrap{padding:0 12px}}
@media(max-width:420px){
  .btn-primary .bp-label{display:none}
  .btn-primary{padding:0 13px}
  .ring{width:38px;height:38px}.ring svg{width:38px;height:38px}
  .cfilter{max-width:134px}.cfilter select{font-size:11.5px;padding:0 24px 0 29px}
  .sb-tx{font-size:9.5px}
}
@media(prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}
  html{scroll-behavior:auto}
}
</style>
</head>
<body>

<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <defs>
    <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2BD9FF"/><stop offset="1" stop-color="#3DDC84"/></linearGradient>
    <linearGradient id="boltGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFC53D"/><stop offset=".55" stop-color="#FFB224"/><stop offset="1" stop-color="#3DDC84"/></linearGradient>
  </defs>
  <symbol id="i-bolt" viewBox="0 0 24 24"><path d="M13.5 2 5 13.4h5.4L9 22l9.6-12.6h-5.5L15 2Z" fill="currentColor"/></symbol>
  <symbol id="i-bolt-g" viewBox="0 0 24 24"><path d="M13.5 2 5 13.4h5.4L9 22l9.6-12.6h-5.5L15 2Z" fill="url(#boltGrad)"/></symbol>
  <symbol id="i-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></symbol>
  <symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="m20 20-3.8-3.8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></symbol>
  <symbol id="i-x" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></symbol>
  <symbol id="i-check" viewBox="0 0 24 24"><path d="m4.5 12.5 5 5L19.5 6.5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="i-pencil" viewBox="0 0 24 24"><path d="M4 20h4L20 8a2.4 2.4 0 0 0-4-4L4 16v4Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="m13.5 6.5 4 4" stroke="currentColor" stroke-width="2"/></symbol>
  <symbol id="i-trash" viewBox="0 0 24 24"><path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m3 0-1 13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1L6 7m4 4v6m4-6v6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="i-cal" viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="16" rx="2.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3.5 10h17M8 2.5V6m8-3.5V6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
  <symbol id="i-play" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10 8.4 16.2 12 10 15.6V8.4Z" fill="currentColor"/></symbol>
  <symbol id="i-flag" viewBox="0 0 24 24"><path d="M6 21V4m0 0h11.5l-2.2 3.6L17.5 11H6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="i-doc" viewBox="0 0 24 24"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M14 3v5h5M8.6 13.2h6.8M8.6 16.6h4.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
  <symbol id="i-user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4.6 20a7.4 7.4 0 0 1 14.8 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
  <symbol id="i-build" viewBox="0 0 24 24"><path d="M3 21h18M5.5 21V6.6L12 3l6.5 3.6V21" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><path d="M9.6 21v-4.6h4.8V21M9 9.4h1.8m2.4 0H15M9 13h1.8m2.4 0H15" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></symbol>
  <symbol id="i-chev" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="i-share" viewBox="0 0 24 24"><path d="M12 3v12m0-12L8 7m4-4 4 4" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 10H5a1.5 1.5 0 0 0-1.5 1.5v8A1.5 1.5 0 0 0 5 21h14a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 19 10h-1" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"/></symbol>
  <symbol id="i-home-add" viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 8v8M8 12h8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></symbol>
  <symbol id="i-safari" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" fill="currentColor"/></symbol>
  <symbol id="i-phone" viewBox="0 0 24 24"><rect x="6.5" y="2.5" width="11" height="19" rx="2.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10.5 18.5h3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
  <symbol id="i-monitor" viewBox="0 0 24 24"><rect x="2.5" y="4" width="19" height="13" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8.5 21h7M12 17v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
  <symbol id="i-folder" viewBox="0 0 24 24"><path d="M3 7a2 2 0 0 1 2-2h4l2 2.5h8a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></symbol>
  <symbol id="i-cloud" viewBox="0 0 24 24"><path d="M7 18h10.5a3.5 3.5 0 0 0 .4-7A5.5 5.5 0 0 0 7.2 9.6 4.2 4.2 0 0 0 7 18Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M12 10.5v5m0 0 2-2m-2 2-2-2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 3 5 5.8v5.4c0 4.4 3 8.1 7 9.8 4-1.7 7-5.4 7-9.8V5.8L12 3Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="m9 12 2.2 2.2L15.4 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="i-db" viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="7.5" ry="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4.5 6v12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" fill="none" stroke="currentColor" stroke-width="2"/></symbol>
  <symbol id="i-download" viewBox="0 0 24 24"><path d="M12 3v11m0 0 4-4m-4 4-4-4M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="i-upload" viewBox="0 0 24 24"><path d="M12 15V4m0 0 4 4m-4-4-4 4M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="i-refresh" viewBox="0 0 24 24"><path d="M20 12a8 8 0 1 1-2.3-5.6M20 3v4h-4" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="i-alert" viewBox="0 0 24 24"><path d="M12 3 2.5 20h19L12 3Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M12 9.5v4.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><circle cx="12" cy="17" r="1.2" fill="currentColor"/></symbol>
  <symbol id="i-copy" viewBox="0 0 24 24"><rect x="8.5" y="8.5" width="12" height="12" rx="2.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M15.5 5.5v-1a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
  <symbol id="i-dots" viewBox="0 0 24 24"><circle cx="12" cy="5" r="1.8" fill="currentColor"/><circle cx="12" cy="12" r="1.8" fill="currentColor"/><circle cx="12" cy="19" r="1.8" fill="currentColor"/></symbol>
</svg>

<div class="bg" aria-hidden="true">
  <div class="bg-grid"></div><div class="aurora a-cyan"></div><div class="aurora a-amber"></div>
  <div class="aurora a-violet"></div><div class="aurora a-green" id="auroraGreen"></div><div class="grain"></div>
</div>

<header id="appHeader">
  <div class="hwrap">
    <div class="hrow brand-row">
      <div class="brand">
        <span class="brand-ic"><svg class="ic"><use href="#i-bolt-g"/></svg></span>
        <div class="brand-tx"><h1>ПНР Контроль</h1><p>работы · отчёты · закрытие объектов</p></div>
      </div>
      <div class="hspace"></div>
      <div class="ring" id="ringBox" title="Выполнено этапов">
        <svg viewBox="0 0 44 44" aria-hidden="true"><circle class="rbg" cx="22" cy="22" r="17"/><circle class="rfg" id="ringFg" cx="22" cy="22" r="17" transform="rotate(-90 22 22)"/></svg>
        <span id="ringPct">0%</span>
      </div>
      <button type="button" id="btnApp" class="ibtn" aria-label="Приложение: установка, автономность, данные">
        <svg class="ic"><use href="#i-cloud"/></svg><span class="app-dot" id="appDot"></span>
      </button>
      <button type="button" id="btnAdd" class="btn-primary" aria-label="Добавить объект"><svg class="ic"><use href="#i-plus"/></svg><span class="bp-label">Объект</span></button>
    </div>
    <div class="hrow search-row">
      <div class="search">
        <svg class="ic" aria-hidden="true"><use href="#i-search"/></svg>
        <input id="search" type="search" placeholder="Поиск: объект, заказчик, мастер, ответственный…" autocomplete="off" aria-label="Поиск">
        <button type="button" id="btnClearSearch" class="ibtn sm" aria-label="Очистить поиск" hidden><svg class="ic"><use href="#i-x"/></svg></button>
      </div>
      <label class="cfilter" id="cfilterBox" title="Фильтр по заказчику">
        <span class="sr-only">Фильтр по заказчику</span>
        <svg class="ic cf-ic" aria-hidden="true"><use href="#i-build"/></svg>
        <select id="custSel" aria-label="Фильтр по заказчику"></select>
      </label>
    </div>
    <div class="hrow chips-row">
      <div class="chips" id="chips" role="group" aria-label="Фильтр по стадии">
        <button type="button" class="chip-f active" data-filter="all" aria-pressed="true">Все <b id="cnt-all">0</b></button>
        <button type="button" class="chip-f" data-filter="work" aria-pressed="false">В работе <b id="cnt-work">0</b></button>
        <button type="button" class="chip-f" data-filter="reports" aria-pressed="false">Отчёты <b id="cnt-rep">0</b></button>
        <button type="button" class="chip-f" data-filter="closed" aria-pressed="false">Закрытые <b id="cnt-closed">0</b></button>
      </div>
      <label class="sort"><span class="sr-only">Сортировка</span>
        <select id="sortSel" aria-label="Сортировка объектов">
          <option value="status">Сначала в работе</option>
          <option value="name">По наименованию</option>
          <option value="customer">По заказчику</option>
          <option value="start">По началу работ</option>
          <option value="deadline">По окончанию работ</option>
          <option value="progress">По готовности</option>
        </select>
      </label>
    </div>
  </div>
</header>

<main id="main" class="wrap">
  <section id="statusBar" class="statusbar">
    <span class="sb-dot busy" id="sbDot"></span>
    <span class="sb-tx" id="sbText">Проверка автономного режима…</span>
    <button type="button" class="sb-btn hot" id="sbUpdate" hidden>Обновить</button>
    <button type="button" class="sb-btn" id="sbOpen">Автономность</button>
  </section>
  <section id="installBanner" class="banner" hidden>
    <span class="banner-ic"><svg class="ic"><use href="#i-phone"/></svg></span>
    <div class="banner-tx"><b>Установите приложение</b><p>Работает без интернета. Телефон и компьютер.</p></div>
    <button type="button" class="btn-ghost btn-sm" data-act="open-app">Как?</button>
    <button type="button" class="ibtn sm" data-act="banner-x" aria-label="Скрыть подсказку"><svg class="ic"><use href="#i-x"/></svg></button>
  </section>
  <section id="list" class="grid"></section>
  <section id="empty" class="empty" hidden></section>
</main>

<footer class="wrap foot">
  <span class="foot-l"><svg class="ic"><use href="#i-bolt"/></svg><span id="footStatus">ПНР Контроль · данные на устройстве</span></span>
  <div class="foot-r">
    <span id="footInstalled" class="installed-tag" hidden><svg class="ic"><use href="#i-check"/></svg>Установлено</span>
    <button type="button" id="footApp" class="fbtn"><svg class="ic"><use href="#i-cloud"/></svg>Приложение</button>
    <button type="button" id="btnExport" class="fbtn"><svg class="ic"><use href="#i-download"/></svg>Экспорт</button>
    <button type="button" id="btnReset" class="fbtn"><svg class="ic"><use href="#i-refresh"/></svg>Демо</button>
  </div>
</footer>

<div class="scrim" id="objScrim" hidden>
  <form class="sheet" id="objForm" role="dialog" aria-modal="true" aria-labelledby="objSheetTitle" novalidate>
    <div class="handle" aria-hidden="true"></div>
    <div class="sheet-head">
      <div class="sheet-title"><h2 id="objSheetTitle">Новый объект</h2><p id="objSheetSub">Заказчик, сроки и состав работ</p></div>
      <button type="button" class="ibtn sm" id="btnObjClose" aria-label="Закрыть"><svg class="ic"><use href="#i-x"/></svg></button>
    </div>
    <div class="sheet-body">
      <label class="fld"><span class="lbl">Заказчик</span>
        <select id="fCustomer">
          <option value="">— не выбран —</option>
          <option>СМУ-1</option><option>СМУ-3</option><option>СМУ-5</option><option>СМУ-6</option><option>СМУ-7</option><option>ПМК-3</option>
        </select>
      </label>
      <label class="fld"><span class="lbl"><svg class="ic" style="width:12px;height:12px"><use href="#i-user"/></svg>Ответственный мастер со стороны заказчика</span>
        <input id="fMaster" type="text" placeholder="Фамилия И. О." maxlength="60" autocomplete="off"></label>
      <label class="fld"><span class="lbl">Наименование объекта <span class="req">*</span></span>
        <input id="fName" type="text" placeholder="ПС 110/10 кВ «Заречная»" maxlength="90" autocomplete="off">
        <span class="err" id="fNameErr" hidden>Укажите наименование объекта (минимум 2 символа)</span></label>
      <label class="fld"><span class="lbl">Тип объекта</span>
        <select id="fKind"><option>ПС</option><option>РП</option><option>ТП</option><option>КТП</option><option>МТП</option><option>КРУН</option><option>ВЛ</option><option>ЗРУ</option></select>
      </label>
      <div class="psec">
        <div class="psec-h">Сроки производства работ</div>
        <p class="psec-p">Плановые даты начала и окончания ПНР на объекте.</p>
        <div class="frow dates">
          <label class="fld"><span class="lbl"><svg class="ic" style="width:12px;height:12px"><use href="#i-play"/></svg>Начало производства работ</span><input id="fStart" type="date"></label>
          <label class="fld"><span class="lbl"><svg class="ic" style="width:12px;height:12px"><use href="#i-flag"/></svg>Окончание производства работ</span><input id="fEnd" type="date"></label>
        </div>
        <span class="err" id="fDatesErr" hidden>Окончание работ не может быть раньше начала</span>
      </div>
      <div class="psec" id="worksSection" tabindex="-1">
        <div class="psec-h">Виды работ на объекте</div>
        <p class="psec-p">Отметьте только те виды, которые входят в комплекс, и назначьте ответственных. «Отчёт выдан» проставляется на карточке.</p>
        <div class="wt-list" id="fWorks"></div>
        <div class="wt-add">
          <input id="fNewCode" type="text" placeholder="Код, напр. РЗА" maxlength="10" autocomplete="off" aria-label="Код нового вида работ">
          <input id="fNewTitle" type="text" placeholder="Название вида работ" maxlength="48" autocomplete="off" aria-label="Название нового вида работ">
          <button type="button" class="btn-ghost" id="btnAddType"><svg class="ic"><use href="#i-plus"/></svg>Добавить свой вид работ</button>
        </div>
      </div>
    </div>
    <div class="sheet-foot">
      <button type="button" class="btn-danger" id="btnObjDelete" hidden><svg class="ic"><use href="#i-trash"/></svg>Удалить</button>
      <span class="sp"></span>
      <button type="button" class="btn-ghost big" id="btnObjCancel">Отмена</button>
      <button type="submit" class="btn-primary big" id="btnObjSave">Добавить объект</button>
    </div>
  </form>
</div>

<div class="scrim" id="custScrim" hidden>
  <div class="sheet narrow" role="dialog" aria-modal="true" aria-labelledby="custTitle">
    <div class="handle" aria-hidden="true"></div>
    <div class="sheet-head">
      <div class="sheet-title"><h2 id="custTitle">Заказчик объекта</h2><p id="custSub">Выберите заказчика</p></div>
      <button type="button" class="ibtn sm" id="btnCustClose" aria-label="Закрыть"><svg class="ic"><use href="#i-x"/></svg></button>
    </div>
    <div class="sheet-body">
      <div class="cust-list" id="custList"></div>
      <div class="note dim"><svg class="ic"><use href="#i-build"/></svg><span>Заказчик показан ссылкой перед наименованием объекта, участвует в поиске, фильтре и экспорте.</span></div>
    </div>
    <div class="sheet-foot">
      <button type="button" class="btn-ghost big" id="btnCustClear">Сбросить выбор</button><span class="sp"></span>
      <button type="button" class="btn-primary big" id="btnCustDone">Готово</button>
    </div>
  </div>
</div>

<div class="scrim" id="appScrim" hidden>
  <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="appTitle">
    <div class="handle" aria-hidden="true"></div>
    <div class="sheet-head">
      <div class="sheet-title"><h2 id="appTitle">Приложение</h2><p id="appSub">Установка · автономная работа · данные</p></div>
      <button type="button" class="ibtn sm" id="btnAppClose" aria-label="Закрыть"><svg class="ic"><use href="#i-x"/></svg></button>
    </div>
    <div class="tabs" role="tablist">
      <button type="button" class="tab active" data-tab="install" role="tab" aria-selected="true">Установка</button>
      <button type="button" class="tab" data-tab="offline" role="tab" aria-selected="false">Офлайн</button>
      <button type="button" class="tab" data-tab="data" role="tab" aria-selected="false">Данные</button>
    </div>
    <div class="sheet-body">
      <div class="tabpane" data-pane="install">
        <div class="seg-btns" id="platBtns">
          <button type="button" class="seg-btn" data-plat="ios">iPhone</button>
          <button type="button" class="seg-btn" data-plat="android">Android</button>
          <button type="button" class="seg-btn" data-plat="desktop">Компьютер</button>
          <button type="button" class="seg-btn" data-plat="file">Файлом</button>
        </div>
        <div id="installSteps"></div>
        <div class="note ok" id="installedNote" hidden><svg class="ic"><use href="#i-shield"/></svg><span>Приложение установлено и запускается в отдельном окне без адресной строки.</span></div>
        <div class="note warn" id="fileNote" hidden><svg class="ic"><use href="#i-alert"/></svg><span>Сейчас открыт локальный файл (file://). Всё работает и сохраняется, но установка на устройство доступна только с HTTPS-адреса. Ниже — кнопка сохранения автономной копии.</span></div>
        <div class="portable">
          <div class="portable-h"><svg class="ic"><use href="#i-folder"/></svg>Автономная копия одним файлом</div>
          <p>Сохраняет всё приложение в один <b>.html</b>: двойной клик на любом компьютере — работает без интернета, без сервера и без установки. Можно упаковать текущие объекты внутрь файла.</p>
          <label class="switch"><input type="checkbox" id="expWithData" checked><span class="sw-track"><span class="sw-knob"></span></span><span id="expWithDataLabel">Включить текущие данные</span></label>
          <button type="button" class="btn-primary big" id="btnPortable" style="width:100%"><svg class="ic"><use href="#i-download"/></svg>Скачать автономный .html</button>
        </div>
      </div>
      <div class="tabpane" data-pane="offline" hidden>
        <div id="offlineRows"></div>
        <div class="act-grid">
          <button type="button" class="btn-ghost" id="btnCheckUpd"><svg class="ic"><use href="#i-refresh"/></svg>Проверить обновления</button>
          <button type="button" class="btn-ghost" id="btnPersist"><svg class="ic"><use href="#i-shield"/></svg>Защитить данные</button>
          <button type="button" class="btn-primary wide" id="btnApplyUpd" hidden><svg class="ic"><use href="#i-bolt"/></svg>Обновить приложение сейчас</button>
          <button type="button" class="btn-ghost wide" id="btnRebuild"><svg class="ic"><use href="#i-cloud"/></svg>Пересобрать офлайн-копию</button>
        </div>
        <div class="note dim"><svg class="ic"><use href="#i-cloud"/></svg><span>После первого открытия по HTTPS приложение целиком сохраняется в память устройства и дальше запускается без сети. Данные всегда хранятся только у вас.</span></div>
      </div>
      <div class="tabpane" data-pane="data" hidden>
        <div id="dataRows"></div>
        <div class="act-grid">
          <button type="button" class="btn-ghost" id="btnExport2"><svg class="ic"><use href="#i-download"/></svg>Экспорт JSON</button>
          <button type="button" class="btn-ghost" id="btnImport"><svg class="ic"><use href="#i-upload"/></svg>Импорт JSON</button>
          <button type="button" class="btn-ghost" id="btnPortable2"><svg class="ic"><use href="#i-folder"/></svg>Автономный .html</button>
          <button type="button" class="btn-ghost" id="btnReset2"><svg class="ic"><use href="#i-refresh"/></svg>Демо-данные</button>
          <button type="button" class="btn-danger wide" id="btnWipe"><svg class="ic"><use href="#i-trash"/></svg>Удалить все объекты</button>
        </div>
        <div class="import-box" id="importBox" hidden>
          <b id="importTitle">Файл прочитан</b>
          <p id="importInfo"></p>
          <div class="act-grid" style="margin-top:0">
            <button type="button" class="btn-primary" id="btnImpReplace">Заменить всё</button>
            <button type="button" class="btn-ghost" id="btnImpMerge">Добавить к текущим</button>
            <button type="button" class="btn-ghost wide" id="btnImpCancel">Отмена</button>
          </div>
        </div>
        <div class="note dim"><svg class="ic"><use href="#i-db"/></svg><span>Резервная копия — единственный способ перенести объекты между телефоном и компьютером: экспорт на одном устройстве, импорт на другом.</span></div>
        <input type="file" id="fileImport" accept="application/json,.json" hidden>
      </div>
    </div>
    <div class="sheet-foot">
      <button type="button" class="btn-ghost big" id="btnAppInstall"><svg class="ic"><use href="#i-download"/></svg>Установить</button>
      <span class="sp"></span>
      <button type="button" class="btn-primary big" id="btnAppDone">Готово</button>
    </div>
  </div>
</div>

<div id="toasts" class="toasts" role="status" aria-live="polite"></div>
<div id="confetti" aria-hidden="true"></div>

<script>
'use strict';
/* ================= БАЗА ================= */
const APP_VER='1.4.0';
const LS_DATA='pnr-objects-v1',LS_UI='pnr-ui-v1',LS_TYPES='pnr-types-v1',LS_BANNER='pnr-banner-dismissed',LS_META='pnr-meta-v1';
const $=s=>document.querySelector(s),$$=s=>Array.from(document.querySelectorAll(s));
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icon=(id,cls='')=>`<svg class="ic ${cls}" aria-hidden="true"><use href="#${id}"/></svg>`;
const clone=o=>typeof structuredClone==='function'?structuredClone(o):JSON.parse(JSON.stringify(o));
const uid=()=>(typeof crypto!=='undefined'&&crypto.randomUUID)?crypto.randomUUID():'id-'+Date.now().toString(36)+Math.random().toString(36).slice(2,8);
const todayISO=()=>{const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
const nowHM=()=>{const d=new Date();return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')};
const reduced=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
const RING_C=106.8;
const IS_FILE=location.protocol==='file:';
const CAN_SW='serviceWorker'in navigator&&(location.protocol==='https:'||['localhost','127.0.0.1','[::1]'].includes(location.hostname));
function fmtD(iso){if(!iso)return'';const p=String(iso).slice(0,10).split('-');if(p.length!==3)return'';
  return p[2]+'.'+p[1]+(p[0]!==String(new Date().getFullYear())?'.'+p[0].slice(2):'')}
function parseD(iso){const p=String(iso).slice(0,10).split('-').map(Number);return new Date(p[0],p[1]-1,p[2])}
function daysLeft(iso){const t=new Date();t.setHours(0,0,0,0);return Math.round((parseD(iso)-t)/864e5)}
const plural=(n,a,b,c)=>{n=Math.abs(n)%100;const d=n%10;if(n>10&&n<20)return c;if(d===1)return a;if(d>1&&d<5)return b;return c};
const initials=p=>{const t=p.trim().split(/\s+/);return((t[0]?.[0]||'')+(t[1]?.[0]||'')).toUpperCase()||'?'};
const vibrate=p=>{try{navigator.vibrate&&navigator.vibrate(p)}catch(e){}};
const kb=n=>n<1024?n+' Б':n<1048576?(n/1024).toFixed(1)+' КБ':(n/1048576).toFixed(2)+' МБ';

/* ================= ТОСТЫ ================= */
const TICONS={success:'i-check',info:'i-bolt',warn:'i-alert',danger:'i-trash'};
const TDUR={success:2800,info:3400,warn:4400,danger:6000};
function toast(type,msg,action,dur){
  const box=$('#toasts');
  while(box.children.length>=3){const f=box.firstElementChild;clearTimeout(f._t);f.remove()}
  const d=dur||TDUR[type]||3000;
  const el=document.createElement('div');
  el.className='toast t-'+type;
  el.innerHTML=`<span class="t-ic">${icon(TICONS[type]||'i-bolt')}</span><span class="t-msg">${esc(msg)}</span>
    ${action?`<button type="button" class="t-act">${esc(action.label)}</button>`:''}
    <button type="button" class="t-x" aria-label="Закрыть уведомление">${icon('i-x')}</button>
    <span class="t-bar" style="animation-duration:${d}ms"></span>`;
  const dismiss=()=>{if(!el.isConnected)return;clearTimeout(el._t);el.classList.add('out');setTimeout(()=>el.remove(),200)};
  el.querySelector('.t-x').addEventListener('click',dismiss);
  if(action)el.querySelector('.t-act').addEventListener('click',()=>{dismiss();action.fn()});
  box.appendChild(el);el._t=setTimeout(dismiss,d);
}

/* ================= ХРАНИЛИЩЕ ================= */
const store={
  m:null,warned:false,
  get(k){try{return localStorage.getItem(k)}catch(e){return this.m?this.m[k]??null:null}},
  set(k,v){try{localStorage.setItem(k,v)}catch(e){(this.m=this.m||{})[k]=v;
    if(!this.warned){this.warned=true;toast('warn','Хранилище браузера недоступно. Сделайте экспорт, чтобы не потерять данные.')}}}
};
let META={savedAt:null};
try{META=Object.assign(META,JSON.parse(store.get(LS_META)||'{}'))}catch(e){}
function stampSave(){META.savedAt=new Date().toISOString();store.set(LS_META,JSON.stringify(META))}
function readEmbedded(){
  const el=document.getElementById('embeddedData');
  if(!el)return null;
  try{return JSON.parse(el.textContent)}catch(e){return null}
}
const EMBEDDED=readEmbedded();

/* ================= КАТАЛОГ ВИДОВ РАБОТ ================= */
const BASE_TYPES=[
  {key:'efi',code:'ЭФИ',title:'Электрофизические измерения',role:'инженер ЭФИ'},
  {key:'tm',code:'ТМ',title:'Телемеханика',role:'инженер СДТУ'},
  {key:'askue',code:'АСКУЭ',title:'Учёт электроэнергии',role:'инженер АСКУЭ'}
];
let CATALOG=[];
const paintTypes=()=>CATALOG.forEach((t,i)=>{t.cls='w-c'+(i%6)});
function loadTypes(){
  let arr=null;
  try{const raw=store.get(LS_TYPES);if(raw)arr=JSON.parse(raw)}catch(e){}
  if(!Array.isArray(arr)||!arr.length)arr=(EMBEDDED&&Array.isArray(EMBEDDED.types)&&EMBEDDED.types.length)?EMBEDDED.types:clone(BASE_TYPES);
  CATALOG=arr.filter(t=>t&&t.key&&t.code).map(t=>({key:t.key,code:t.code,title:t.title||t.code,role:t.role||'ответственный'}));
  if(!CATALOG.length)CATALOG=clone(BASE_TYPES);
  paintTypes();
}
const saveTypes=()=>store.set(LS_TYPES,JSON.stringify(CATALOG.map(t=>({key:t.key,code:t.code,title:t.title,role:t.role}))));
const typeMeta=k=>CATALOG.filter(t=>t.key===k)[0]||{key:k,code:String(k).toUpperCase(),title:'Вид работ',role:'ответственный',cls:'w-c1'};

/* ================= ЗАКАЗЧИКИ / ТИПЫ ================= */
const CUSTOMERS=Array.prototype.map.call($('#fCustomer').options,o=>o.value).filter(Boolean).map((id,i)=>({id,cls:'c-c'+((i%6)+1)}));
const custMeta=v=>CUSTOMERS.filter(x=>x.id===v)[0]||{id:v,cls:'c-cx'};
const custIndex=v=>{for(let i=0;i<CUSTOMERS.length;i++)if(CUSTOMERS[i].id===v)return i;return 999};
const KIND_TP=['ТП','КТП','МТП','КРУН','КТПН','БКТП'],KIND_LINE=['ВЛ','КЛ','ВЛЗ'];
const kindFamily=k=>KIND_LINE.indexOf(k)>=0?'k-line':(KIND_TP.indexOf(k)>=0?'k-tp':'k-sub');
const state={objects:[],filter:'all',custFilter:'all',sort:'status',query:''};
const save=()=>{store.set(LS_DATA,JSON.stringify(state.objects));stampSave()};
const saveUI=()=>store.set(LS_UI,JSON.stringify({filter:state.filter,custFilter:state.custFilter,sort:state.sort}));

/* ================= МОДЕЛЬ ================= */
function workKeys(o){
  const known=CATALOG.filter(t=>o.works[t.key]).map(t=>t.key);
  return known.concat(Object.keys(o.works).filter(k=>!CATALOG.some(t=>t.key===k)));
}
function steps(o){const ks=workKeys(o);let d=0;ks.forEach(k=>{if(o.works[k].done)d++;if(o.works[k].report)d++});return{total:ks.length*2,done:d}}
function stage(o){
  const ks=workKeys(o);
  if(!ks.length)return'empty';
  const allDone=ks.every(k=>o.works[k].done),allRep=ks.every(k=>o.works[k].report);
  if(allDone&&allRep)return'closed';
  if(allDone)return'reports';
  return'work';
}
const isClosed=o=>stage(o)==='closed';
function syncClosed(o){o.closedAt=isClosed(o)?(o.closedAt||todayISO()):null}
const normWork=w=>({person:(w&&w.person)||'',done:!!(w&&w.done),doneAt:(w&&w.doneAt)||null,report:!!(w&&w.report),reportAt:(w&&w.reportAt)||null});
function normalizeObject(o){
  if(!o||typeof o!=='object')return null;
  const wasClosed=!!o.closedAt,src=(o.works&&typeof o.works==='object')?o.works:{},works={};
  Object.keys(src).forEach(k=>{
    const old=src[k]||{},w=normWork(old);
    if(!('report'in old)&&wasClosed){w.report=true;w.reportAt=o.closedAt||todayISO()}
    works[k]=w;
  });
  const out={id:o.id||uid(),num:Number(o.num)||0,customer:o.customer||null,
    customerMaster:typeof o.customerMaster==='string'?o.customerMaster:'',
    name:String(o.name||'Без наименования'),kind:o.kind||'ПС',
    dateStart:o.dateStart||null,dateEnd:o.dateEnd||o.deadline||null,
    createdAt:o.createdAt||todayISO(),closedAt:o.closedAt||null,works};
  syncClosed(out);return out;
}
function renumber(){let n=0;state.objects.forEach(o=>{n=Math.max(n,o.num||0)});state.objects.forEach(o=>{if(!o.num)o.num=++n})}
function seeds(){
  const W=(person,done=false,doneAt=null,report=false,reportAt=null)=>({person,done,doneAt,report,reportAt});
  return [
    {id:uid(),num:1,customer:'СМУ-1',customerMaster:'Титов В. Н.',name:'ПС 110/10 кВ «Заречная»',kind:'ПС',dateStart:'2026-11-16',dateEnd:'2026-11-23',createdAt:'2026-11-10',closedAt:null,
      works:{efi:W('Соколов А. В.',true,'2026-11-18',true,'2026-11-19'),tm:W('Мельникова И. П.'),askue:W('Гарипов Р. Н.')}},
    {id:uid(),num:2,customer:'СМУ-3',customerMaster:'Ершов А. И.',name:'ПС 220/110 кВ «Северная»',kind:'ПС',dateStart:'2026-11-25',dateEnd:'2026-12-12',createdAt:'2026-11-12',closedAt:null,
      works:{efi:W('Ковалёв Д. С.'),tm:W('Мельникова И. П.'),askue:W('Штерн Е. А.')}},
    {id:uid(),num:3,customer:'СМУ-5',customerMaster:'Гущин П. Р.',name:'РП-10 кВ № 7 «Озёрный»',kind:'РП',dateStart:'2026-11-10',dateEnd:'2026-11-21',createdAt:'2026-11-05',closedAt:'2026-11-19',
      works:{efi:W('Соколов А. В.',true,'2026-11-17',true,'2026-11-18'),tm:W('Нуртдинов А. Р.',true,'2026-11-18',true,'2026-11-19'),askue:W('Гарипов Р. Н.',true,'2026-11-19',true,'2026-11-19')}},
    {id:uid(),num:4,customer:'СМУ-1',customerMaster:'Титов В. Н.',name:'ПС 35/10 кВ «Таёжная»',kind:'ПС',dateStart:'2026-11-12',dateEnd:'2026-11-30',createdAt:'2026-11-14',closedAt:null,
      works:{efi:W('Ковалёв Д. С.',true,'2026-11-19'),askue:W('Штерн Е. А.',true,'2026-11-18',true,'2026-11-19')}},
    {id:uid(),num:5,customer:'СМУ-6',customerMaster:'',name:'КТП-10/0,4 кВ № 118 «Лесная»',kind:'КТП',dateStart:'2026-11-14',dateEnd:'2026-11-18',createdAt:'2026-11-15',closedAt:null,
      works:{efi:W('Соколов А. В.'),askue:W('Гарипов Р. Н.',true,'2026-11-16',true,'2026-11-17')}},
    {id:uid(),num:6,customer:'СМУ-7',customerMaster:'Ланской Д. Е.',name:'МТП-10/0,4 кВ № 214 «Полевая»',kind:'МТП',dateStart:'2026-11-24',dateEnd:'2026-12-05',createdAt:'2026-11-18',closedAt:null,
      works:{efi:W('Ковалёв Д. С.'),askue:W('Штерн Е. А.',true,'2026-11-19')}},
    {id:uid(),num:7,customer:'ПМК-3',customerMaster:'Шубин К. Л.',name:'ВЛ-110 кВ «Северная — Таёжная»',kind:'ВЛ',dateStart:'2026-11-20',dateEnd:'2026-12-18',createdAt:'2026-11-19',closedAt:null,
      works:{efi:W('Соколов А. В.',true,'2026-11-20'),tm:W('Нуртдинов А. Р.')}},
    {id:uid(),num:8,customer:null,customerMaster:'',name:'ТП-6/0,4 кВ № 42 «Речная»',kind:'ТП',dateStart:'2026-11-26',dateEnd:'2026-12-09',createdAt:'2026-11-20',closedAt:null,
      works:{efi:W('Ковалёв Д. С.'),tm:W('Мельникова И. П.'),askue:W('Штерн Е. А.')}}
  ];
}
function load(){
  const raw=store.get(LS_DATA);
  let arr=null;
  if(raw!==null){try{const a=JSON.parse(raw);if(Array.isArray(a))arr=a}catch(e){}}
  if(!arr){
    if(EMBEDDED&&Array.isArray(EMBEDDED.objects)&&EMBEDDED.objects.length)arr=EMBEDDED.objects;
    else arr=seeds();
  }
  state.objects=arr.map(normalizeObject).filter(Boolean);
  renumber();save();
  try{const u=JSON.parse(store.get(LS_UI)||'{}');
    if(['all','work','reports','closed'].includes(u.filter))state.filter=u.filter;
    if(['status','name','customer','start','deadline','progress'].includes(u.sort))state.sort=u.sort;
    if(typeof u.custFilter==='string')state.custFilter=u.custFilter;
  }catch(e){}
  try{
    const q=new URLSearchParams(location.search);
    if(['all','work','reports','closed'].includes(q.get('filter')))state.filter=q.get('filter');
  }catch(e){}
}

/* ================= МЕТКИ ================= */
const BADGE={work:{cls:'b-open',html:'<span class="dot"></span>В работе'},reports:{cls:'b-rep',html:icon('i-doc','bi')+'Отчёты'},
  closed:{cls:'b-closed',html:icon('i-check','bi')+'Закрыт'},empty:{cls:'b-none',html:'Без работ'}};
function startInfo(o){
  if(!o.dateStart)return{cls:'',ic:'i-play',label:'Начало не задано'};
  const n=daysLeft(o.dateStart);
  if(n<0&&steps(o).done===0&&!isClosed(o))return{cls:'over',ic:'i-alert',label:'Старт просрочен · '+fmtD(o.dateStart)};
  if(n>=0&&n<=3&&!isClosed(o))return{cls:'soon',ic:'i-play',label:'Начало '+fmtD(o.dateStart)};
  return{cls:'',ic:'i-play',label:'Начало '+fmtD(o.dateStart)};
}
function endInfo(o){
  if(isClosed(o))return{cls:'ok',ic:'i-check',label:'Закрыт '+fmtD(o.closedAt)};
  if(!o.dateEnd)return{cls:'',ic:'i-flag',label:'Окончание не задано'};
  const n=daysLeft(o.dateEnd);
  if(n<0)return{cls:'over',ic:'i-alert',label:'Просрочен на '+(-n)+' '+plural(-n,'день','дня','дней')};
  if(n===0)return{cls:'soon',ic:'i-flag',label:'Окончание сегодня'};
  if(n<=3)return{cls:'soon',ic:'i-flag',label:'Окончание '+fmtD(o.dateEnd)};
  return{cls:'',ic:'i-flag',label:'Окончание '+fmtD(o.dateEnd)};
}
function custCounts(){const c={};CUSTOMERS.forEach(x=>c[x.id]=0);let none=0;
  state.objects.forEach(o=>{if(!o.customer)none++;else if(Object.prototype.hasOwnProperty.call(c,o.customer))c[o.customer]++});return{c,none}}
function matchesCurrent(o){
  const st=stage(o);
  if(state.filter==='work'&&!(st==='work'||st==='empty'))return false;
  if(state.filter==='reports'&&st!=='reports')return false;
  if(state.filter==='closed'&&st!=='closed')return false;
  if(state.custFilter!=='all'){
    if(state.custFilter==='none'){if(o.customer)return false}
    else if(o.customer!==state.custFilter)return false;
  }
  const q=state.query.trim().toLowerCase();if(!q)return true;
  return [o.name,o.kind,o.customer||'',o.customerMaster||'',
    workKeys(o).map(k=>typeMeta(k).code+' '+typeMeta(k).title+' '+(o.works[k].person||'')).join(' ')].join(' ').toLowerCase().includes(q);
}
function normalizeFiltersFor(o){
  if(!matchesCurrent(o)){state.filter='all';state.custFilter='all';state.query='';$('#search').value='';$('#btnClearSearch').hidden=true;saveUI()}
}

/* ================= ШАБЛОНЫ ================= */
function custLinkHTML(o){
  const v=o.customer||'',m=custMeta(v);
  return `<button type="button" class="cust-link ${v?m.cls:'c-cw unset'}" data-act="cust" data-id="${o.id}" aria-label="Заказчик: ${v?esc(v):'не выбран'}. Выбрать">
    ${icon(v?'i-build':'i-plus','cl-ic')}<span class="cl-tx">${v?esc(v):'Выбрать заказчика'}</span>${icon('i-chev','cl-ch')}</button>`;
}
function masterLinkHTML(o){
  const v=(o.customerMaster||'').trim();
  return `<button type="button" class="master-link ${v?'has':'c-cw unset'}" data-act="master" data-id="${o.id}" aria-label="Мастер заказчика: ${v?esc(v):'не указан'}. Указать">
    ${icon('i-user','cl-ic')}<span class="cl-tx">${v?'Мастер: '+esc(v):'Указать мастера'}</span></button>`;
}
function workRowHTML(o,k){
  const t=typeMeta(k),w=o.works[k],p=(w.person||'').trim(),full=w.done&&w.report;
  const chk=(f,label,cls)=>`<label class="wchk ${cls} ${w[f]?'on':''}">
      <input type="checkbox" class="work-check" data-obj="${o.id}" data-work="${k}" data-field="${f}" ${w[f]?'checked':''} aria-label="${esc(t.code)}: ${label}">
      <span class="cbox sm"><svg viewBox="0 0 26 26" aria-hidden="true"><path d="M6 13.5l5 5L20 8"/></svg></span>
      <span class="chk-tx">${label}</span><span class="chk-date">${w[f]?fmtD(w[f+'At']):''}</span></label>`;
  return `<div class="work ${t.cls} ${w.done?'is-done':''} ${full?'is-full':''}" data-w="${k}">
    <div class="whead"><span class="wcode">${esc(t.code)}</span><span class="wtitle">${esc(t.title)}</span>
      <button type="button" class="wdel" data-act="delwork" data-id="${o.id}" data-w="${k}" aria-label="Убрать вид работ ${esc(t.code)}">${icon('i-x')}</button></div>
    <div class="wperson"><span class="avatar ${p?'':'warn'}">${p?esc(initials(p)):'?'}</span>
      <span class="pname ${p?'':'warn'}">${p?esc(p):'Не назначен'}</span><span class="prole">· ${esc(t.role)}</span></div>
    <div class="wchecks">${chk('done','Выполнено','done')}${chk('report','Отчёт выдан','rep')}</div></div>`;
}
const progHTML=o=>workKeys(o).map(k=>{const t=typeMeta(k);
  return `<span class="seg-group">${['done','report'].map(f=>`<span class="seg ${t.cls} ${f==='report'?'rep':''} ${o.works[k][f]?'on':''}" data-w="${k}" data-f="${f}"></span>`).join('')}</span>`}).join('');
function cardHTML(o){
  const st=stage(o),closed=st==='closed',si=startInfo(o),ei=endInfo(o),ks=workKeys(o),s=steps(o);
  const worksBlock=ks.length?ks.map(k=>workRowHTML(o,k)).join('')
    :`<div class="nowork">${icon('i-alert')}<span>Виды работ не выбраны</span><button type="button" class="btn-ghost btn-sm" data-act="addwork" data-id="${o.id}">Выбрать виды</button></div>`;
  return `<article class="card ${closed?'closed':''}" data-id="${o.id}">
    <div class="card-cust">${custLinkHTML(o)}${masterLinkHTML(o)}</div>
    <div class="card-top"><h2 class="card-name">${esc(o.name)}</h2><span class="status-badge ${BADGE[st].cls}">${BADGE[st].html}</span></div>
    <div class="card-chips">
      <span class="chip chip-kind ${kindFamily(o.kind)}">${esc(o.kind)}</span>
      <span class="chip chip-start ${si.cls}">${icon(si.ic)}${esc(si.label)}</span>
      <span class="chip chip-end ${ei.cls}">${icon(ei.ic)}${esc(ei.label)}</span>
      <span class="chip chip-num">№ ${String(o.num||0).padStart(3,'0')}</span></div>
    <div class="works-head"><span class="works-label ${closed?'ok':''}">${closed?'Работы выполнены · отчёты выданы':'Виды работ'}</span>
      <button type="button" class="add-work" data-act="addwork" data-id="${o.id}" aria-label="Добавить вид работ">${icon('i-plus')}Вид работ</button></div>
    <div class="works">${worksBlock}</div>
    <div class="card-foot"><div class="prog">${progHTML(o)}</div><span class="prog-label">${s.done}/${s.total}</span>
      <div class="card-acts">
        <button type="button" class="ibtn act" data-act="edit" data-id="${o.id}" aria-label="Изменить объект: ${esc(o.name)}">${icon('i-pencil')}</button>
        <button type="button" class="ibtn act danger" data-act="del" data-id="${o.id}" aria-label="Удалить объект: ${esc(o.name)}">${icon('i-trash')}</button>
      </div></div></article>`;
}

/* ================= РЕНДЕР ================= */
let io=null,reconTimer=null,settleTimer=null;
if('IntersectionObserver'in window&&!reduced)
  io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08});
function renderCustomerFilter(){
  const sel=$('#custSel'),box=$('#cfilterBox'),{c,none}=custCounts();
  if(state.custFilter!=='all'&&state.custFilter!=='none'&&!Object.prototype.hasOwnProperty.call(c,state.custFilter))state.custFilter='all';
  const sig=JSON.stringify([state.objects.length,c,none]);
  if(sel.dataset.sig!==sig){
    sel.innerHTML=`<option value="all">Все (${state.objects.length})</option>`+
      CUSTOMERS.map(x=>`<option value="${esc(x.id)}">${esc(x.id)} (${c[x.id]})</option>`).join('')+
      `<option value="none">Не выбран (${none})</option>`;
    sel.dataset.sig=sig;
  }
  sel.value=state.custFilter;
  const active=state.custFilter!=='all';
  box.className='cfilter'+(active?' active '+(state.custFilter==='none'?'c-cw':custMeta(state.custFilter).cls):'');
}
function renderStats(){
  const total=state.objects.length;let nWork=0,nRep=0,nClosed=0,tTotal=0,tDone=0;
  state.objects.forEach(o=>{const st=stage(o);
    if(st==='closed')nClosed++;else if(st==='reports')nRep++;else nWork++;
    const s=steps(o);tTotal+=s.total;tDone+=s.done});
  $('#cnt-all').textContent=total;$('#cnt-work').textContent=nWork;$('#cnt-rep').textContent=nRep;$('#cnt-closed').textContent=nClosed;
  $$('#chips .chip-f').forEach(b=>{const on=b.dataset.filter===state.filter;b.classList.toggle('active',on);b.setAttribute('aria-pressed',on)});
  const pct=tTotal?Math.round(tDone/tTotal*100):0;
  $('#ringFg').style.strokeDashoffset=String(RING_C*(1-(tTotal?tDone/tTotal:0)));
  $('#ringPct').textContent=pct+'%';
  $('#ringBox').title=`Выполнено ${tDone} из ${tTotal} этапов (работы + отчёты)`;
  $('#auroraGreen').style.opacity=total?String(.1+.45*(nClosed/total)):'0';
  document.body.classList.toggle('all-closed',total>0&&nClosed===total);
  $('#expWithDataLabel').textContent=`Включить текущие данные (${total} ${plural(total,'объект','объекта','объектов')})`;
  renderCustomerFilter();
}
function visibleObjects(){
  const arr=state.objects.filter(matchesCurrent);
  const byName=(a,b)=>a.name.localeCompare(b.name,'ru'),dt=v=>v?parseD(v).getTime():Infinity;
  const rank=o=>{const s=stage(o);return s==='closed'?3:s==='reports'?1:0};
  if(state.sort==='name')arr.sort(byName);
  else if(state.sort==='customer')arr.sort((a,b)=>custIndex(a.customer)-custIndex(b.customer)||byName(a,b));
  else if(state.sort==='start')arr.sort((a,b)=>dt(a.dateStart)-dt(b.dateStart)||byName(a,b));
  else if(state.sort==='deadline')arr.sort((a,b)=>dt(a.dateEnd)-dt(b.dateEnd)||byName(a,b));
  else if(state.sort==='progress')arr.sort((a,b)=>{const sa=steps(a),sb=steps(b);
    return (sb.total?sb.done/sb.total:-1)-(sa.total?sa.done/sa.total:-1)||byName(a,b)});
  else arr.sort((a,b)=>rank(a)-rank(b)||dt(a.dateEnd)-dt(b.dateEnd)||byName(a,b));
  return arr;
}
function renderEmpty(){
  const e=$('#empty');
  if(!state.objects.length)
    e.innerHTML=`<div class="empty-ic">${icon('i-bolt')}</div><h3>Пока нет объектов</h3><p>Добавьте первый объект: заказчик, мастер, сроки и нужные виды работ.</p><button type="button" class="btn-primary big" data-act="add">${icon('i-plus')}Добавить объект</button>`;
  else if(state.query.trim())
    e.innerHTML=`<div class="empty-ic">${icon('i-search')}</div><h3>Ничего не найдено</h3><p>По запросу «${esc(state.query.trim())}» нет совпадений по объектам, заказчикам, мастерам и ответственным.</p><button type="button" class="btn-ghost big" data-act="clear-filters">Сбросить поиск и фильтры</button>`;
  else if(state.custFilter!=='all'){
    const who=state.custFilter==='none'?'без выбранного заказчика':'у заказчика '+state.custFilter;
    e.innerHTML=`<div class="empty-ic">${icon('i-build')}</div><h3>Нет объектов по фильтру</h3><p>Объектов ${esc(who)} на этой стадии не найдено.</p><button type="button" class="btn-ghost big" data-act="clear-filters">Сбросить фильтры</button>`;
  }else if(state.filter==='reports')
    e.innerHTML=`<div class="empty-ic">${icon('i-doc')}</div><h3>Нет объектов на выдаче отчётов</h3><p>Сюда попадают объекты, где все работы выполнены, но отчёты выданы не по всем видам.</p><button type="button" class="btn-ghost big" data-act="show-all">Показать все</button>`;
  else if(state.filter==='work')
    e.innerHTML=`<div class="empty-ic ok">${icon('i-check')}</div><h3>Работы завершены</h3><p>Объектов в производстве работ не осталось — все закрыты или ждут выдачи отчётов.</p><button type="button" class="btn-ghost big" data-act="show-all">Показать все</button>`;
  else
    e.innerHTML=`<div class="empty-ic">${icon('i-check')}</div><h3>Закрытых объектов пока нет</h3><p>Объект закроется и подсветится зелёным, когда по каждому виду работ отмечены «Выполнено» и «Отчёт выдан».</p><button type="button" class="btn-ghost big" data-act="show-all">Показать все</button>`;
}
function renderList(animate){
  clearTimeout(reconTimer);clearTimeout(settleTimer);
  if(io)io.disconnect();
  const list=$('#list'),arr=visibleObjects();
  if(!arr.length){list.innerHTML='';renderEmpty();$('#empty').hidden=false;return}
  $('#empty').hidden=true;
  list.innerHTML=arr.map(cardHTML).join('');
  const cards=Array.from(list.children);
  if(animate&&io){
    cards.forEach((c,i)=>{c.classList.add('pre');c.style.setProperty('--d',Math.min(i*60,420)+'ms');io.observe(c)});
    settleTimer=setTimeout(()=>cards.forEach(c=>c.classList.add('settled')),1300);
  }else{
    cards.forEach(c=>c.classList.add('settled'));
    if(animate&&!reduced)cards.forEach((c,i)=>{c.style.animation=`cardIn .5s var(--ease) ${Math.min(i*50,300)}ms backwards`});
  }
}
function renderAll(animate){renderStats();renderList(animate)}
function scheduleReconcile(delay){
  if(state.filter!=='all'||state.custFilter!=='all'||state.query.trim()||['status','progress','customer'].includes(state.sort)){
    clearTimeout(reconTimer);reconTimer=setTimeout(()=>renderList(false),delay||800);
  }
}
function updateCardInPlace(card,o){
  if(!card)return;
  const st=stage(o),closed=st==='closed',si=startInfo(o),ei=endInfo(o),s=steps(o);
  card.classList.toggle('closed',closed);
  const badge=card.querySelector('.status-badge');badge.className='status-badge '+BADGE[st].cls;badge.innerHTML=BADGE[st].html;
  const sc=card.querySelector('.chip-start');sc.className='chip chip-start '+si.cls;sc.innerHTML=icon(si.ic)+esc(si.label);
  const ec=card.querySelector('.chip-end');ec.className='chip chip-end '+ei.cls;ec.innerHTML=icon(ei.ic)+esc(ei.label);
  const lbl=card.querySelector('.works-label');lbl.classList.toggle('ok',closed);
  lbl.textContent=closed?'Работы выполнены · отчёты выданы':'Виды работ';
  workKeys(o).forEach(k=>{
    const w=o.works[k],row=card.querySelector(`.work[data-w="${k}"]`);if(!row)return;
    row.classList.toggle('is-done',w.done);row.classList.toggle('is-full',w.done&&w.report);
    [['done','done'],['report','rep']].forEach(([f,cls])=>{
      const lab=row.querySelector('.wchk.'+cls);
      if(lab){lab.classList.toggle('on',w[f]);lab.querySelector('.work-check').checked=w[f];lab.querySelector('.chk-date').textContent=w[f]?fmtD(w[f+'At']):''}
      const seg=card.querySelector(`.seg[data-w="${k}"][data-f="${f}"]`);if(seg)seg.classList.toggle('on',w[f]);
    });
  });
  card.querySelector('.prog-label').textContent=s.done+'/'+s.total;
}

/* ================= КОНФЕТТИ ================= */
const CF_COLORS=['#3DDC84','#A3F7BF','#FFB224','#2BD9FF','#B78CFF','#FF4FD8','#EAF1FF'];
function confettiAt(card){
  if(reduced||!card)return;
  const layer=$('#confetti');if(layer.children.length>120)return;
  const r=card.getBoundingClientRect(),cx=r.left+r.width/2,cy=Math.max(70,r.top+64);
  for(let i=0;i<26;i++){
    const p=document.createElement('i');p.className='cf';const s=4+Math.random()*6;
    p.style.cssText=`left:${cx-s/2}px;top:${cy-s/2}px;width:${s}px;height:${s*(Math.random()>.5?1:.45)}px;background:${CF_COLORS[i%CF_COLORS.length]};border-radius:${Math.random()>.6?'50%':'2px'}`;
    layer.appendChild(p);if(!p.animate){p.remove();continue}
    const ang=(-160+Math.random()*140)*Math.PI/180,v=70+Math.random()*110;
    const dx=Math.cos(ang)*v,dy=Math.sin(ang)*v,rot=(Math.random()-.5)*520;
    p.animate([{transform:'translate(0,0) rotate(0deg)',opacity:1},
      {transform:`translate(${dx}px,${dy}px) rotate(${rot*.6}deg)`,opacity:1,offset:.55},
      {transform:`translate(${dx*1.15}px,${dy+150}px) rotate(${rot}deg)`,opacity:0}],
      {duration:800+Math.random()*500,easing:'cubic-bezier(.15,.6,.35,1)'}).onfinish=()=>p.remove();
  }
}
function celebrate(card,o){
  if(!card)return;
  card.classList.remove('just-closed');void card.offsetWidth;card.classList.add('just-closed');
  card.addEventListener('animationend',()=>card.classList.remove('just-closed'),{once:true});
  confettiAt(card);vibrate([30,40,60]);toast('success','Объект закрыт: '+o.name);
}

/* ================= ОТМЕТКИ ================= */
function onToggle(input){
  const o=state.objects.find(x=>x.id===input.dataset.obj);if(!o)return;
  const w=o.works[input.dataset.work];if(!w)return;
  const f=input.dataset.field;
  w[f]=input.checked;w[f+'At']=input.checked?todayISO():null;
  const wasClosed=isClosed(o);syncClosed(o);const nowClosed=isClosed(o);
  save();
  const card=input.closest('.card');
  updateCardInPlace(card,o);renderStats();
  const cbox=input.parentNode.querySelector('.cbox');
  if(input.checked&&cbox){cbox.classList.remove('anim');void cbox.offsetWidth;cbox.classList.add('anim');
    cbox.addEventListener('animationend',()=>cbox.classList.remove('anim'),{once:true})}
  if(nowClosed&&!wasClosed)celebrate(card,o);
  else if(!nowClosed&&wasClosed)toast('info','Объект возвращён в работу: '+o.name);
  else vibrate(16);
  scheduleReconcile(nowClosed&&!wasClosed?1500:800);
}
function removeWork(id,key){
  const o=state.objects.find(x=>x.id===id);if(!o||!o.works[key])return;
  const entry=clone(o.works[key]),t=typeMeta(key),wasClosed=isClosed(o);
  delete o.works[key];syncClosed(o);save();
  const nowClosed=isClosed(o);renderAll(false);
  if(nowClosed&&!wasClosed)celebrate($('#list').querySelector(`.card[data-id="${id}"]`),o);
  toast('danger','Вид работ убран: '+t.code+' · '+o.name,{label:'Отменить',fn(){
    const obj=state.objects.find(x=>x.id===id);if(!obj){toast('warn','Объект уже удалён');return}
    obj.works[key]=entry;syncClosed(obj);save();normalizeFiltersFor(obj);renderAll(false);
    toast('success','Вид работ возвращён: '+t.code);
  }},6500);
}

/* ================= ЗАКАЗЧИК ================= */
let pickerId=null;
function renderCustList(o){
  const {c}=custCounts();
  $('#custList').innerHTML=CUSTOMERS.map(x=>{const n=c[x.id];
    return `<button type="button" class="cust-opt ${x.cls} ${o.customer===x.id?'cur':''}" data-cust="${esc(x.id)}">
      <span class="co-dot"></span><span class="co-name">${esc(x.id)}</span>
      <span class="co-cnt">${n} ${plural(n,'объект','объекта','объектов')}</span><span class="co-check">${icon('i-check')}</span></button>`}).join('');
}
function openCustPicker(id){
  const o=state.objects.find(x=>x.id===id);if(!o)return;
  pickerId=id;$('#custSub').textContent=o.name+' · сейчас: '+(o.customer||'не выбран');
  renderCustList(o);openSheet($('#custScrim'),$('#custList .cust-opt.cur')||$('#custList .cust-opt'));
}
function setCustomer(id,val){
  const o=state.objects.find(x=>x.id===id);if(!o){closeSheet($('#custScrim'));return}
  const next=val||null;if((o.customer||null)===next){closeSheet($('#custScrim'));return}
  o.customer=next;save();
  const card=$('#list').querySelector(`.card[data-id="${id}"]`);
  if(card){const box=card.querySelector('.card-cust');box.innerHTML=custLinkHTML(o)+masterLinkHTML(o);
    box.classList.remove('flash');void box.offsetWidth;box.classList.add('flash')}
  renderStats();scheduleReconcile(700);vibrate(15);closeSheet($('#custScrim'));
  toast('success',next?('Заказчик '+next+' · '+o.name):('Заказчик сброшен · '+o.name));
}
$('#custList').addEventListener('click',e=>{const b=e.target.closest('.cust-opt');if(b&&pickerId)setCustomer(pickerId,b.dataset.cust)});
$('#btnCustClear').addEventListener('click',()=>{if(pickerId)setCustomer(pickerId,null)});
$('#btnCustDone').addEventListener('click',()=>closeSheet($('#custScrim')));
$('#btnCustClose').addEventListener('click',()=>closeSheet($('#custScrim')));
$('#custSel').addEventListener('change',e=>{state.custFilter=e.target.value;saveUI();renderStats();renderList(false)});

/* ================= УДАЛЕНИЕ ================= */
function deleteObject(id){
  const idx=state.objects.findIndex(x=>x.id===id);if(idx<0)return;
  const obj=state.objects[idx];
  state.objects.splice(idx,1);save();renderStats();
  const card=$('#list').querySelector(`.card[data-id="${id}"]`),done=()=>renderList(false);
  if(card&&!reduced){
    card.classList.add('settled');card.style.height=card.offsetHeight+'px';card.style.overflow='hidden';
    requestAnimationFrame(()=>{card.style.transition='height .3s ease,opacity .25s ease,transform .3s ease,padding .3s ease,border-width .3s ease';
      card.style.height='0px';card.style.opacity='0';card.style.transform='scale(.96)';card.style.paddingTop='0';card.style.paddingBottom='0';card.style.borderWidth='0'});
    setTimeout(done,330);
  }else done();
  toast('danger','Удалено: '+obj.name,{label:'Отменить',fn(){
    state.objects.splice(Math.min(idx,state.objects.length),0,obj);normalizeFiltersFor(obj);save();renderAll(false);
    const c=$('#list').querySelector(`.card[data-id="${obj.id}"]`);if(c)c.classList.add('pop-in');
    toast('success','Объект восстановлен');
  }},6500);
}

/* ================= ШТОРКИ ================= */
let lastFocus=null;
const SCRIMS=['#objScrim','#custScrim','#appScrim'];
function openSheet(scrim,focusEl){
  lastFocus=document.activeElement;scrim.hidden=false;
  document.documentElement.classList.add('lock');
  setTimeout(()=>{(focusEl||scrim.querySelector('input,select,button'))?.focus?.()},80);
}
function closeSheet(scrim){
  if(scrim.hidden)return;
  scrim.classList.add('closing');
  setTimeout(()=>{scrim.hidden=true;scrim.classList.remove('closing');
    if(SCRIMS.every(s=>$(s).hidden))document.documentElement.classList.remove('lock');
    if(lastFocus&&lastFocus.focus)lastFocus.focus()},200);
}
function trapTab(e,scrim){
  if(e.key!=='Tab')return;
  const f=Array.from(scrim.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])')).filter(el=>!el.hidden&&el.offsetParent!==null);
  if(!f.length)return;
  const first=f[0],last=f[f.length-1];
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
}

/* ---- форма объекта ---- */
let editingId=null,formWorks={};
function setSelectValue(sel,val){
  if(!Array.prototype.some.call(sel.options,o=>o.value===val)&&val){const o=document.createElement('option');o.textContent=val;o.value=val;sel.appendChild(o)}
  sel.value=val;
}
function renderFormWorks(){
  const keys=CATALOG.map(t=>t.key).concat(Object.keys(formWorks).filter(k=>!CATALOG.some(t=>t.key===k)));
  $('#fWorks').innerHTML=keys.map(k=>{const t=typeMeta(k),f=formWorks[k];
    return `<div class="wt-row ${t.cls} ${f.enabled?'on':''}" data-wt="${k}">
      <label class="wt-toggle"><input type="checkbox" class="wt-check" data-wt="${k}" ${f.enabled?'checked':''} aria-label="Вид работ ${esc(t.code)} на объекте">
        <span class="cbox sm"><svg viewBox="0 0 26 26" aria-hidden="true"><path d="M6 13.5l5 5L20 8"/></svg></span>
        <span class="wt-code">${esc(t.code)}</span><span class="wt-title">${esc(t.title)}</span></label>
      <input class="wt-person" data-wtp="${k}" type="text" maxlength="60" autocomplete="off" placeholder="Ответственный: Фамилия И. О." value="${esc(f.person)}" aria-label="Ответственный за ${esc(t.code)}">
    </div>`}).join('');
}
$('#fWorks').addEventListener('change',e=>{const c=e.target.closest('.wt-check');if(!c)return;
  const k=c.dataset.wt;if(!formWorks[k])return;formWorks[k].enabled=c.checked;c.closest('.wt-row').classList.toggle('on',c.checked)});
$('#fWorks').addEventListener('input',e=>{const p=e.target.closest('.wt-person');if(!p)return;
  const k=p.dataset.wtp;if(formWorks[k])formWorks[k].person=p.value});
$('#btnAddType').addEventListener('click',()=>{
  const codeEl=$('#fNewCode'),titleEl=$('#fNewTitle'),code=codeEl.value.trim(),title=titleEl.value.trim();
  if(!code){codeEl.classList.remove('invalid');void codeEl.offsetWidth;codeEl.classList.add('invalid');codeEl.focus();toast('warn','Укажите код вида работ, например РЗА');return}
  if(CATALOG.some(t=>t.code.toLowerCase()===code.toLowerCase())){codeEl.classList.add('invalid');toast('warn','Вид работ «'+code+'» уже есть в списке');return}
  codeEl.classList.remove('invalid');
  const key='c'+Date.now().toString(36)+Math.random().toString(36).slice(2,5);
  CATALOG.push({key,code,title:title||code,role:'ответственный'});paintTypes();saveTypes();
  formWorks[key]={enabled:true,person:'',done:false,doneAt:null,report:false,reportAt:null};
  renderFormWorks();codeEl.value='';titleEl.value='';codeEl.focus();
  toast('success','Вид работ добавлен в список: '+code);
});
function openObjectSheet(mode,obj,opt){
  opt=opt||{};editingId=obj?obj.id:null;
  $('#objSheetTitle').textContent=obj?'Изменить объект':'Новый объект';
  $('#objSheetSub').textContent=obj?'Заказчик, мастер, сроки и состав работ':'Заполните карточку объекта';
  $('#btnObjSave').textContent=obj?'Сохранить':'Добавить объект';
  $('#btnObjDelete').hidden=!obj;
  setSelectValue($('#fCustomer'),obj?(obj.customer||''):'');
  $('#fMaster').value=obj?(obj.customerMaster||''):'';
  $('#fName').value=obj?obj.name:'';
  setSelectValue($('#fKind'),obj?obj.kind:'ПС');
  $('#fStart').value=obj?(obj.dateStart||''):'';
  $('#fEnd').value=obj?(obj.dateEnd||''):'';
  formWorks={};
  CATALOG.forEach(t=>{const ex=obj&&obj.works[t.key];
    formWorks[t.key]=ex?Object.assign({enabled:true},normWork(ex)):{enabled:false,person:'',done:false,doneAt:null,report:false,reportAt:null}});
  if(obj)Object.keys(obj.works).forEach(k=>{if(!formWorks[k])formWorks[k]=Object.assign({enabled:true},normWork(obj.works[k]))});
  renderFormWorks();
  $('#fNewCode').value='';$('#fNewTitle').value='';$('#fNewCode').classList.remove('invalid');
  $('#fName').classList.remove('invalid');$('#fNameErr').hidden=true;
  $('#fEnd').classList.remove('invalid');$('#fDatesErr').hidden=true;
  $('#objScrim .sheet-body').scrollTop=0;
  openSheet($('#objScrim'),opt.focus?$(opt.focus):$('#fName'));
  if(opt.scrollTo)setTimeout(()=>{const b=$('#objScrim .sheet-body'),s=$(opt.scrollTo);if(b&&s)b.scrollTop=Math.max(0,s.offsetTop-14)},140);
}
$('#objForm').addEventListener('submit',e=>{
  e.preventDefault();
  const nameEl=$('#fName'),name=nameEl.value.trim();
  if(name.length<2){nameEl.classList.remove('invalid');void nameEl.offsetWidth;nameEl.classList.add('invalid');$('#fNameErr').hidden=false;nameEl.focus();return}
  nameEl.classList.remove('invalid');$('#fNameErr').hidden=true;
  const start=$('#fStart').value||null,end=$('#fEnd').value||null;
  if(start&&end&&parseD(end)<parseD(start)){const el=$('#fEnd');el.classList.remove('invalid');void el.offsetWidth;el.classList.add('invalid');$('#fDatesErr').hidden=false;el.focus();return}
  $('#fEnd').classList.remove('invalid');$('#fDatesErr').hidden=true;
  const customer=$('#fCustomer').value||null,master=$('#fMaster').value.trim(),kind=$('#fKind').value,works={};
  Object.keys(formWorks).forEach(k=>{const f=formWorks[k];
    if(f.enabled)works[k]={person:(f.person||'').trim(),done:!!f.done,doneAt:f.doneAt||null,report:!!f.report,reportAt:f.reportAt||null}});
  let target,wasClosed=false;
  if(editingId){
    target=state.objects.find(x=>x.id===editingId);
    if(target){wasClosed=isClosed(target);target.name=name;target.customer=customer;target.customerMaster=master;
      target.kind=kind;target.dateStart=start;target.dateEnd=end;target.works=works;syncClosed(target)}
  }else{
    target={id:uid(),num:state.objects.reduce((m,o)=>Math.max(m,o.num||0),0)+1,customer,customerMaster:master,
      name,kind,dateStart:start,dateEnd:end,createdAt:todayISO(),closedAt:null,works};
    syncClosed(target);state.objects.unshift(target);
  }
  if(target)normalizeFiltersFor(target);
  save();closeSheet($('#objScrim'));renderAll(false);
  if(target){const c=$('#list').querySelector(`.card[data-id="${target.id}"]`);
    if(c){c.classList.add('pop-in');setTimeout(()=>c.scrollIntoView({behavior:reduced?'auto':'smooth',block:'nearest'}),60);
      if(isClosed(target)&&!wasClosed)setTimeout(()=>celebrate(c,target),260)}}
  toast('success',editingId?'Изменения сохранены':'Объект добавлен: '+name);
});
$('#btnObjDelete').addEventListener('click',()=>{const id=editingId;closeSheet($('#objScrim'));setTimeout(()=>deleteObject(id),210)});
$('#btnObjCancel').addEventListener('click',()=>closeSheet($('#objScrim')));
$('#btnObjClose').addEventListener('click',()=>closeSheet($('#objScrim')));

/* ================= ДЕЛЕГИРОВАНИЕ ================= */
$('#main').addEventListener('change',e=>{if(e.target.classList.contains('work-check'))onToggle(e.target)});
$('#main').addEventListener('click',e=>{
  const b=e.target.closest('[data-act]');if(!b)return;
  const act=b.dataset.act,id=b.dataset.id,obj=id?state.objects.find(x=>x.id===id):null;
  if(act==='cust')openCustPicker(id);
  else if(act==='master'&&obj)openObjectSheet('edit',obj,{focus:'#fMaster'});
  else if(act==='addwork'&&obj)openObjectSheet('edit',obj,{focus:'#worksSection',scrollTo:'#worksSection'});
  else if(act==='delwork')removeWork(id,b.dataset.w);
  else if(act==='edit'&&obj)openObjectSheet('edit',obj);
  else if(act==='del')deleteObject(id);
  else if(act==='add')openObjectSheet('new');
  else if(act==='show-all'){state.filter='all';saveUI();renderAll(false)}
  else if(act==='clear-filters'){state.filter='all';state.custFilter='all';state.query='';$('#search').value='';$('#btnClearSearch').hidden=true;saveUI();renderAll(false)}
  else if(act==='open-app')openApp('install');
  else if(act==='banner-x'){store.set(LS_BANNER,'1');$('#installBanner').hidden=true}
});
$('#btnAdd').addEventListener('click',()=>openObjectSheet('new'));
$('#chips').addEventListener('click',e=>{const b=e.target.closest('.chip-f');if(!b)return;state.filter=b.dataset.filter;saveUI();renderStats();renderList(false)});
$('#sortSel').addEventListener('change',e=>{state.sort=e.target.value;saveUI();renderList(false)});
let searchT=null;
$('#search').addEventListener('input',e=>{clearTimeout(searchT);const v=e.target.value;$('#btnClearSearch').hidden=!v;
  searchT=setTimeout(()=>{state.query=v;renderList(false)},130)});
$('#btnClearSearch').addEventListener('click',()=>{$('#search').value='';$('#btnClearSearch').hidden=true;state.query='';renderList(false);$('#search').focus()});
SCRIMS.forEach(sel=>{const sc=$(sel);
  sc.addEventListener('click',e=>{if(e.target===sc)closeSheet(sc)});
  sc.addEventListener('keydown',e=>trapTab(e,sc))});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){for(const s of SCRIMS){if(!$(s).hidden){closeSheet($(s));break}}}
  if(e.key==='/'&&!e.target.closest('input,select,textarea')&&SCRIMS.every(s=>$(s).hidden)){e.preventDefault();$('#search').focus()}
});

/* ================= ЭКСПОРТ / ИМПОРТ / ДЕМО ================= */
function download(name,text,mime){
  const blob=new Blob([text],{type:mime||'application/octet-stream'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;
  document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),5000);
}
function exportJSON(){
  const payload={app:'ПНР Контроль',version:APP_VER,exportedAt:new Date().toISOString(),
    customers:CUSTOMERS.map(c=>c.id),types:CATALOG.map(t=>({key:t.key,code:t.code,title:t.title,role:t.role})),objects:state.objects};
  download('pnr-objects-'+todayISO()+'.json',JSON.stringify(payload,null,2),'application/json');
  toast('success','Экспортировано объектов: '+state.objects.length);
}
$('#btnExport').addEventListener('click',exportJSON);
$('#btnExport2').addEventListener('click',exportJSON);
function resetDemo(){
  const prev=clone(state.objects);
  state.objects=seeds();save();renderAll(false);
  toast('warn','Демо-данные восстановлены',{label:'Отменить',fn(){state.objects=prev;save();renderAll(false);toast('success','Ваши данные возвращены')}},6000);
}
$('#btnReset').addEventListener('click',resetDemo);
$('#btnReset2').addEventListener('click',resetDemo);
$('#btnWipe').addEventListener('click',()=>{
  if(!state.objects.length){toast('info','Список объектов уже пуст');return}
  const prev=clone(state.objects),n=prev.length;
  state.objects=[];save();renderAll(false);
  toast('danger','Удалено объектов: '+n,{label:'Отменить',fn(){state.objects=prev;save();renderAll(false);toast('success','Все объекты восстановлены')}},8000);
});
let pendingImport=null;
$('#btnImport').addEventListener('click',()=>$('#fileImport').click());
$('#fileImport').addEventListener('change',e=>{
  const file=e.target.files&&e.target.files[0];e.target.value='';
  if(!file)return;
  const rd=new FileReader();
  rd.onload=()=>{
    try{
      const data=JSON.parse(String(rd.result));
      const raw=Array.isArray(data)?data:(Array.isArray(data.objects)?data.objects:null);
      if(!raw)throw new Error('no objects');
      const objs=raw.map(normalizeObject).filter(Boolean);
      if(!objs.length)throw new Error('empty');
      const types=(data&&Array.isArray(data.types))?data.types.filter(t=>t&&t.key&&t.code):[];
      pendingImport={objects:objs,types};
      $('#importTitle').textContent='Файл: '+file.name;
      $('#importInfo').textContent=`Найдено ${objs.length} ${plural(objs.length,'объект','объекта','объектов')}`+
        (types.length?`, видов работ в каталоге: ${types.length}`:'')+`. Сейчас в приложении: ${state.objects.length}.`;
      $('#importBox').hidden=false;
      $('#importBox').scrollIntoView({block:'nearest',behavior:reduced?'auto':'smooth'});
    }catch(err){toast('warn','Не удалось прочитать файл: нужен JSON, выгруженный из этого приложения')}
  };
  rd.onerror=()=>toast('warn','Ошибка чтения файла');
  rd.readAsText(file);
});
function applyImport(mode){
  if(!pendingImport)return;
  const prev=clone(state.objects),prevTypes=clone(CATALOG);
  pendingImport.types.forEach(t=>{if(!CATALOG.some(x=>x.key===t.key||x.code.toLowerCase()===String(t.code).toLowerCase()))
    CATALOG.push({key:t.key,code:t.code,title:t.title||t.code,role:t.role||'ответственный'})});
  paintTypes();saveTypes();
  if(mode==='replace')state.objects=pendingImport.objects;
  else{
    const ids=new Set(state.objects.map(o=>o.id));
    pendingImport.objects.forEach(o=>{if(ids.has(o.id))o.id=uid();state.objects.push(o)});
  }
  renumber();state.objects.forEach(syncClosed);
  state.filter='all';state.custFilter='all';state.query='';$('#search').value='';$('#btnClearSearch').hidden=true;
  save();saveUI();renderAll(false);
  const n=pendingImport.objects.length;pendingImport=null;$('#importBox').hidden=true;
  toast('success',(mode==='replace'?'Заменено на ':'Добавлено ')+n+' '+plural(n,'объект','объекта','объектов'),
    {label:'Отменить',fn(){state.objects=prev;CATALOG=prevTypes;paintTypes();saveTypes();save();renderAll(false);toast('success','Импорт отменён')}},8000);
}
$('#btnImpReplace').addEventListener('click',()=>applyImport('replace'));
$('#btnImpMerge').addEventListener('click',()=>applyImport('merge'));
$('#btnImpCancel').addEventListener('click',()=>{pendingImport=null;$('#importBox').hidden=true});

/* ================= АВТОНОМНАЯ КОПИЯ (.html) ================= */
function serializeClean(){
  const root=document.documentElement.cloneNode(true);
  const q=s=>root.querySelector(s);
  ['#list','#toasts','#confetti','#custList','#fWorks','#installSteps','#offlineRows','#dataRows'].forEach(s=>{const el=q(s);if(el)el.innerHTML=''});
  const em=q('#empty');if(em){em.innerHTML='';em.hidden=true}
  SCRIMS.forEach(s=>{const el=q(s);if(el){el.hidden=true;el.classList.remove('closing')}});
  const ib=q('#importBox');if(ib)ib.hidden=true;
  root.classList.remove('lock');
  const body=q('body');if(body)body.classList.remove('all-closed');
  const old=q('#embeddedData');if(old)old.remove();
  return '<!doctype html>\n'+root.outerHTML;
}
async function buildPortable(withData){
  let html=null;
  if(!IS_FILE){
    try{const r=await fetch(location.href,{cache:'no-store'});if(r.ok)html=await r.text()}catch(e){}
  }
  if(!html)html=serializeClean();
  html=html.replace(/<script[^>]*id="embeddedData"[\s\S]*?<\/script>/gi,'');
  if(withData){
    const payload=JSON.stringify({app:'ПНР Контроль',version:APP_VER,exportedAt:new Date().toISOString(),
      types:CATALOG.map(t=>({key:t.key,code:t.code,title:t.title,role:t.role})),objects:state.objects}).replace(/</g,'\\u003c');
    const tag='<script type="application/json" id="embeddedData">'+payload+'<\/script>';
    html=html.includes('<!--EMBED_SLOT-->')?html.replace('<!--EMBED_SLOT-->',tag):html.replace('</head>',tag+'\n</head>');
  }
  return html;
}
async function downloadPortable(){
  const withData=$('#expWithData').checked;
  const btn=$('#btnPortable');btn.disabled=true;
  try{
    const html=await buildPortable(withData);
    download('PNR-Kontrol-'+todayISO()+(withData?'-s-dannymi':'')+'.html',html,'text/html;charset=utf-8');
    toast('success','Автономный файл сохранён'+(withData?' вместе с данными':''));
  }catch(e){toast('warn','Не удалось собрать файл. Используйте экспорт JSON.')}
  btn.disabled=false;
}
$('#btnPortable').addEventListener('click',downloadPortable);
$('#btnPortable2').addEventListener('click',()=>{setTab('install');setPlat('file');$('#btnPortable').scrollIntoView({block:'center',behavior:reduced?'auto':'smooth'})});

/* ================= SERVICE WORKER / ОФЛАЙН ================= */
let swReg=null,swState=CAN_SW?'init':(IS_FILE?'file':'unsupported'),updateWaiting=false,reloading=false,persisted=false;
async function cacheStatus(){
  const out={ready:false,shell:0,fonts:0,version:'—'};
  if(!('caches'in window))return out;
  try{
    const keys=await caches.keys();
    const sk=keys.find(k=>k.indexOf('pnr-shell-')===0),fk=keys.find(k=>k.indexOf('pnr-fonts-')===0);
    if(sk){const c=await caches.open(sk);const ks=await c.keys();out.shell=ks.length;out.version=sk.replace('pnr-shell-','');
      out.ready=!!(await c.match('./index.html'))||!!(await c.match('./'))}
    if(fk){const c=await caches.open(fk);out.fonts=(await c.keys()).length}
  }catch(e){}
  return out;
}
function refreshStatusUI(cs){
  const online=navigator.onLine!==false;
  const dot=$('#sbDot'),tx=$('#sbText'),ad=$('#appDot');
  let cls='warn',text='';
  if(IS_FILE){cls='ok';text='Автономная копия · данные на этом устройстве'}
  else if(swState==='unsupported'){cls='warn';text='Браузер не поддерживает офлайн-режим · данные сохранены локально'}
  else if(updateWaiting){cls='busy';text='Доступно обновление приложения'}
  else if(cs&&cs.ready){cls='ok';text=online?'Готово к работе без интернета':'Нет сети · работает автономно'}
  else{cls=online?'busy':'warn';text=online?'Сохраняю приложение для офлайн…':'Нет сети · офлайн-копия ещё не создана'}
  dot.className='sb-dot '+cls;tx.textContent=text;
  ad.className='app-dot '+(updateWaiting?'upd':cls==='ok'?'ok':'warn');
  $('#sbUpdate').hidden=!updateWaiting;
  $('#btnApplyUpd').hidden=!updateWaiting;
  $('#footStatus').textContent='ПНР Контроль v'+APP_VER+' · '+(IS_FILE?'локальный файл':(cs&&cs.ready?'офлайн готов':'локальные данные'));
  $('#footInstalled').hidden=!isStandalone();
  $('#installBanner').hidden=isStandalone()||!!store.get(LS_BANNER)||IS_FILE;
}
async function refreshOffline(){const cs=await cacheStatus();refreshStatusUI(cs);renderOfflinePane(cs);renderDataPane();return cs}
function renderOfflinePane(cs){
  const online=navigator.onLine!==false;
  const rows=[
    ['Режим запуска',IS_FILE?'Локальный файл':(location.protocol==='https:'?'HTTPS · PWA':'HTTP'),IS_FILE?'warn':'ok'],
    ['Офлайн-копия приложения',cs.ready?'сохранена ✓':'не создана',cs.ready?'ok':'warn'],
    ['Файлов в кэше',String(cs.shell),cs.shell?'ok':'dim'],
    ['Шрифты офлайн',cs.fonts?'сохранены ✓':'системные',cs.fonts?'ok':'dim'],
    ['Сеть',online?'онлайн':'офлайн',online?'ok':'warn'],
    ['Защита хранилища',persisted?'включена':'не запрошена',persisted?'ok':'dim'],
    ['Версия',cs.version!=='—'?cs.version:APP_VER,'dim']
  ];
  $('#offlineRows').innerHTML=rows.map(([k,v,c])=>`<div class="kv"><span class="kv-k">${esc(k)}</span><span class="kv-v ${c}">${esc(v)}</span></div>`).join('');
  $('#btnPersist').disabled=persisted;
}
function renderDataPane(){
  let tTotal=0,tDone=0;state.objects.forEach(o=>{const s=steps(o);tTotal+=s.total;tDone+=s.done});
  const size=new Blob([JSON.stringify(state.objects)]).size;
  const saved=META.savedAt?new Date(META.savedAt):null;
  const rows=[
    ['Объектов',String(state.objects.length),'ok'],
    ['Видов работ в каталоге',String(CATALOG.length),'dim'],
    ['Отмечено этапов',tDone+' / '+tTotal,tDone?'ok':'dim'],
    ['Объём данных',kb(size),'dim'],
    ['Последнее сохранение',saved?fmtD(saved.toISOString())+' '+String(saved.getHours()).padStart(2,'0')+':'+String(saved.getMinutes()).padStart(2,'0'):'—','dim'],
    ['Где хранятся',IS_FILE?'в этом браузере':'на устройстве','ok']
  ];
  $('#dataRows').innerHTML=rows.map(([k,v,c])=>`<div class="kv"><span class="kv-k">${esc(k)}</span><span class="kv-v ${c}">${esc(v)}</span></div>`).join('');
}
function markUpdate(){updateWaiting=true;refreshOffline();toast('info','Доступна новая версия приложения',{label:'Обновить',fn:applyUpdate},9000)}
function applyUpdate(){
  if(swReg&&swReg.waiting){reloading=true;swReg.waiting.postMessage({type:'SKIP_WAITING'})}
  else location.reload();
}
$('#sbUpdate').addEventListener('click',applyUpdate);
$('#btnApplyUpd').addEventListener('click',applyUpdate);
$('#btnCheckUpd').addEventListener('click',async()=>{
  if(!swReg){toast('info',IS_FILE?'Автономный файл обновляется заменой самого файла':'Офлайн-режим недоступен в этом браузере');return}
  try{await swReg.update();toast('success',updateWaiting?'Найдено обновление':'Установлена последняя версия')}catch(e){toast('warn','Не удалось проверить обновления — нет сети')}
  refreshOffline();
});
$('#btnPersist').addEventListener('click',async()=>{
  if(!(navigator.storage&&navigator.storage.persist)){toast('info','Браузер не поддерживает защиту хранилища');return}
  try{persisted=await navigator.storage.persist();
    toast(persisted?'success':'warn',persisted?'Данные защищены от автоматической очистки':'Браузер отказал в защите. Делайте экспорт JSON.');
  }catch(e){toast('warn','Не удалось запросить защиту хранилища')}
  refreshOffline();
});
$('#btnRebuild').addEventListener('click',async()=>{
  if(!('caches'in window)){toast('info','Кэш недоступен в этом режиме');return}
  try{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k.indexOf('pnr-')===0).map(k=>caches.delete(k)));
    if(swReg)await swReg.unregister();
  }catch(e){}
  toast('info','Пересобираю офлайн-копию…');
  setTimeout(()=>location.reload(),700);
});
window.addEventListener('online',()=>{toast('success','Сеть восстановлена');refreshOffline();if(swReg)swReg.update().catch(()=>{})});
window.addEventListener('offline',()=>{toast('info','Нет сети — приложение продолжает работать автономно');refreshOffline()});
document.addEventListener('visibilitychange',()=>{if(!document.hidden){refreshOffline();if(swReg&&navigator.onLine)swReg.update().catch(()=>{})}});
function initSW(){
  if(!CAN_SW){refreshOffline();return}
  navigator.serviceWorker.addEventListener('controllerchange',()=>{if(reloading){reloading=false;location.reload()}});
  navigator.serviceWorker.register('sw.js',{scope:'./'}).then(reg=>{
    swReg=reg;swState='ready';
    if(reg.waiting&&navigator.serviceWorker.controller)markUpdate();
    reg.addEventListener('updatefound',()=>{
      const nw=reg.installing;if(!nw)return;
      nw.addEventListener('statechange',()=>{
        if(nw.state==='installed'){
          if(navigator.serviceWorker.controller)markUpdate();
          else{refreshOffline();setTimeout(async()=>{const cs=await refreshOffline();
            if(cs.ready)toast('success','Приложение сохранено — теперь работает без интернета')},900)}
        }
      });
    });
    navigator.serviceWorker.ready.then(()=>refreshOffline());
    refreshOffline();
  }).catch(()=>{swState='error';refreshOffline()});
}
if(navigator.storage&&navigator.storage.persisted)navigator.storage.persisted().then(v=>{persisted=!!v}).catch(()=>{});

/* ================= ВКЛАДКИ ПРИЛОЖЕНИЯ ================= */
const STEPS={
  ios:[['i-safari','Откройте страницу в Safari','Во встроенном браузере (Telegram, почта) пункта установки не будет — скопируйте ссылку в Safari.'],
       ['i-share','Нажмите «Поделиться»','Квадрат со стрелкой вверх на нижней панели Safari.'],
       ['i-home-add','Выберите «На экран „Домой“»','Прокрутите список действий вниз, при необходимости — «Изменить действия…».'],
       ['i-phone','Нажмите «Добавить»','Иконка ⚡ появится на рабочем столе. Первый запуск с сети — дальше приложение работает офлайн.']],
  android:[['i-dots','Откройте меню браузера','Три точки справа вверху в Chrome.'],
       ['i-download','«Установить приложение»','Или «Добавить на главный экран» — появится отдельное приложение.'],
       ['i-shield','Подтвердите установку','Ярлык появится на рабочем столе и в списке приложений.'],
       ['i-cloud','Откройте один раз с сетью','Приложение сохранится и дальше запускается без интернета.']],
  desktop:[['i-monitor','Откройте в Chrome или Edge','Яндекс.Браузер и Opera тоже поддерживают установку.'],
       ['i-download','Нажмите «Установить»','Кнопка ниже или значок установки в правой части адресной строки.'],
       ['i-bolt','Запуск из меню «Пуск»','Отдельное окно без вкладок, ярлык на рабочем столе.'],
       ['i-cloud','Работает без интернета','Все файлы и данные хранятся на компьютере.']],
  file:[['i-folder','Скачайте автономную копию','Кнопка ниже сохранит один файл .html со всем приложением внутри.'],
       ['i-copy','Перенесите на компьютер','Флешка, почта, мессенджер, сетевая папка — интернет не нужен.'],
       ['i-play','Двойной клик по файлу','Откроется в браузере и работает полностью локально, без сервера.'],
       ['i-db','Данные — внутри браузера','Для переноса между устройствами используйте экспорт и импорт JSON.']]
};
function setPlat(p){
  $$('#platBtns .seg-btn').forEach(b=>b.classList.toggle('active',b.dataset.plat===p));
  $('#installSteps').innerHTML=STEPS[p].map(([ic,t,d])=>
    `<div class="step"><span class="step-ic">${icon(ic)}</span><div class="step-tx"><b>${esc(t)}</b><p>${esc(d)}</p></div></div>`).join('');
}
function setTab(t){
  $$('.tab').forEach(b=>{const on=b.dataset.tab===t;b.classList.toggle('active',on);b.setAttribute('aria-selected',on)});
  $$('.tabpane').forEach(p=>{p.hidden=p.dataset.pane!==t});
  $('#appScrim .sheet-body').scrollTop=0;
  if(t!=='install')refreshOffline();
}
const isStandalone=()=>navigator.standalone===true||(window.matchMedia&&matchMedia('(display-mode: standalone)').matches);
let deferredPrompt=null;
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;
  $('#btnAppInstall').hidden=false;$('#btnAppInstall').innerHTML=icon('i-download')+'Установить приложение';refreshStatusUI()});
window.addEventListener('appinstalled',()=>{deferredPrompt=null;toast('success','Приложение установлено');refreshOffline()});
function detectPlat(){
  const ua=navigator.userAgent||'';
  if(/iPhone|iPad|iPod/i.test(ua)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1))return'ios';
  if(/Android/i.test(ua))return'android';
  return'desktop';
}
function openApp(tab){
  $('#installedNote').hidden=!isStandalone();
  $('#fileNote').hidden=!IS_FILE;
  $('#btnAppInstall').hidden=isStandalone()||(!deferredPrompt&&detectPlat()!=='desktop');
  if(!deferredPrompt)$('#btnAppInstall').innerHTML=icon('i-share')+'Как установить';
  setPlat(detectPlat());setTab(tab||'install');
  refreshOffline();
  openSheet($('#appScrim'),$('.tab.active'));
}
$('#btnApp').addEventListener('click',()=>openApp(updateWaiting?'offline':'install'));
$('#footApp').addEventListener('click',()=>openApp('install'));
$('#sbOpen').addEventListener('click',()=>openApp('offline'));
$('#btnAppClose').addEventListener('click',()=>closeSheet($('#appScrim')));
$('#btnAppDone').addEventListener('click',()=>closeSheet($('#appScrim')));
$('#btnAppInstall').addEventListener('click',async()=>{
  if(deferredPrompt){
    deferredPrompt.prompt();
    try{const r=await deferredPrompt.userChoice;
      if(r.outcome==='accepted')closeSheet($('#appScrim'));else toast('info','Установку можно выполнить позже из меню браузера')}catch(e){}
    deferredPrompt=null;refreshOffline();
  }else{setTab('install');setPlat(detectPlat())}
});
$$('.tab').forEach(b=>b.addEventListener('click',()=>setTab(b.dataset.tab)));
$('#platBtns').addEventListener('click',e=>{const b=e.target.closest('.seg-btn');if(b)setPlat(b.dataset.plat)});

/* ================= ИКОНКА ДЛЯ iOS ================= */
function makeIcon(s){
  const c=document.createElement('canvas');c.width=c.height=s;const x=c.getContext('2d');
  const g=x.createLinearGradient(0,0,s,s);g.addColorStop(0,'#121E36');g.addColorStop(1,'#080D18');x.fillStyle=g;x.fillRect(0,0,s,s);
  x.strokeStyle='rgba(120,160,220,.07)';x.lineWidth=1;
  for(let i=1;i<8;i++){x.beginPath();x.moveTo(i*s/8,0);x.lineTo(i*s/8,s);x.stroke();x.beginPath();x.moveTo(0,i*s/8);x.lineTo(s,i*s/8);x.stroke()}
  let r=x.createRadialGradient(s*.85,s*.12,0,s*.85,s*.12,s*.6);r.addColorStop(0,'rgba(43,217,255,.3)');r.addColorStop(1,'rgba(43,217,255,0)');x.fillStyle=r;x.fillRect(0,0,s,s);
  r=x.createRadialGradient(s*.14,s*.9,0,s*.14,s*.9,s*.65);r.addColorStop(0,'rgba(61,220,132,.32)');r.addColorStop(1,'rgba(61,220,132,0)');x.fillStyle=r;x.fillRect(0,0,s,s);
  x.save();x.translate(s*.5,s*.5);x.scale(s/112,s/112);x.translate(-51,-50);
  const p=new Path2D('M62 4 L18 58 L44 58 L36 96 L84 40 L56 40 L70 4 Z');
  const bg=x.createLinearGradient(0,0,0,100);bg.addColorStop(0,'#FFC53D');bg.addColorStop(.55,'#FFB224');bg.addColorStop(1,'#3DDC84');
  x.shadowColor='rgba(61,220,132,.55)';x.shadowBlur=12;x.fillStyle=bg;x.fill(p);x.restore();
  return c.toDataURL('image/png');
}
try{$('#appleIcon').href=makeIcon(180)}catch(e){}

/* ================= СТАРТ ================= */
window.addEventListener('scroll',()=>{$('#appHeader').classList.toggle('scrolled',window.scrollY>6)},{passive:true});
loadTypes();
load();
$('#sortSel').value=state.sort;
renderAll(true);
setPlat(detectPlat());
initSW();
refreshOffline();
setTimeout(()=>{try{if(new URLSearchParams(location.search).get('action')==='new')openObjectSheet('new')}catch(e){}},400);
if(EMBEDDED&&EMBEDDED.objects&&EMBEDDED.objects.length)setTimeout(()=>toast('info','Автономная копия: загружено '+EMBEDDED.objects.length+' '+plural(EMBEDDED.objects.length,'объект','объекта','объектов')),700);
</script>
</body>
</html>
