/* ============================================================
   Felipe Fraga — interações do site
   ============================================================ */
(function () {
  "use strict";

  var WHATSAPP = "557196112541";
  var IMG = "assets/img/";
  var LQIP = window.__LQIP || {};
  var REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Galeria ---------- */
  var ITEMS = [
    { base: "ape/ape-03", cat: "ape", label: "Apê FB" },
    { base: "ape/ape-01", cat: "ape", label: "Apê FB" },
    { base: "ape/ape-05", cat: "ape", label: "Apê FB" },
    { base: "ape/ape-07", cat: "ape", label: "Apê FB" },
    { base: "ape/ape-10", cat: "ape", label: "Apê FB" },
    { base: "ape/ape-13", cat: "ape", label: "Apê FB" },
    { base: "ape/ape-06", cat: "ape", label: "Apê FB" },
    { base: "ape/ape-26", cat: "ape", label: "Apê FB" },
    { base: "ape/ape-24", cat: "ape", label: "Apê FB" },
    { base: "ape_render/aper-01", cat: "ape", label: "Apê FB · render" },
    { base: "ape_render/aper-02", cat: "ape", label: "Apê FB · render" },
    { base: "studio/studio-02", cat: "studio", label: "Studio CB" },
    { base: "studio/studio-01", cat: "studio", label: "Studio CB" },
    { base: "studio/studio-03", cat: "studio", label: "Studio CB" },
    { base: "studio/studio-04", cat: "studio", label: "Studio CB" },
    { base: "studio/studio-06", cat: "studio", label: "Studio CB" },
    { base: "studio/studio-07", cat: "studio", label: "Studio CB" },
    { base: "studio/studio-09", cat: "studio", label: "Studio CB" },
    { base: "casacor/casa-01", cat: "casacor", label: "CasaCor SP 2026" },
    { base: "casacor/casa-02", cat: "casacor", label: "CasaCor SP 2026" },
    { base: "casacor/casa-03", cat: "casacor", label: "CasaCor SP 2026" },
    { base: "casacor/casa-04", cat: "casacor", label: "CasaCor SP 2026" },
    { base: "casacor/casa-05", cat: "casacor", label: "CasaCor SP 2026" },
    { base: "casacor/casa-06", cat: "casacor", label: "CasaCor SP 2026" },
    { base: "casacor/casa-07", cat: "casacor", label: "CasaCor SP 2026" },
    { base: "casacor/casa-08", cat: "casacor", label: "CasaCor SP 2026" },
    { base: "casacor/casa-09", cat: "casacor", label: "CasaCor SP 2026" },
    { base: "quartonf/quarto-01", cat: "quartonf", label: "Quarto Nathy" },
    { base: "quartonf/quarto-02", cat: "quartonf", label: "Quarto Nathy" },
    { base: "quartonf/quarto-03", cat: "quartonf", label: "Quarto Nathy" },
    { base: "quartonf/quarto-04", cat: "quartonf", label: "Quarto Nathy" }
  ];

  /* ---------- Projetos (case studies) ---------- */
  var PROJECTS = {
    ape: {
      label: "Apê FB", eyebrow: "Residencial", cover: "ape/ape-03",
      meta: [["Tipologia", "Residencial"], ["Local", "Salvador / BA"], ["Escopo", "Reforma + Interiores + Marcenaria"]],
      paras: [
        "Uma reforma completa que transformou o apartamento num retrato de quem vive nele. A paleta quente — terracota, madeira e tons terrosos — conduz o olhar de ambiente em ambiente, criando continuidade e aconchego.",
        "A marcenaria sob medida resolve cada canto com discrição, enquanto a curadoria de arte e objetos dá alma aos espaços. Do estar à suíte, tudo conversa: um lar autoral, pensado para durar."
      ]
    },
    studio: {
      label: "Studio CB", eyebrow: "Residencial", cover: "studio/studio-02",
      meta: [["Tipologia", "Studio compacto"], ["Local", "Salvador / BA"], ["Escopo", "Interiores + Marcenaria"]],
      paras: [
        "No studio, o desafio é fazer muito com pouco. Cada centímetro foi pensado para integrar viver, trabalhar e descansar sem abrir mão do conforto.",
        "Madeira e texturas naturais aquecem o ambiente compacto; soluções integradas e marcenaria inteligente ampliam a sensação de espaço e mantêm tudo no lugar."
      ]
    },
    casacor: {
      label: "CasaCor SP 2026", eyebrow: "Inspiração", cover: "casacor/casa-01",
      meta: [["Caráter", "Visita · Referências"], ["Local", "São Paulo / SP"], ["Ano", "2026"]],
      paras: [
        "A CasaCor SP é a maior mostra de arquitetura e decoração das Américas — uma vitrine das tendências que pautam o mercado. Felipe esteve lá não como expositor, mas para contemplar, estudar e se atualizar.",
        "Acompanhar de perto o que há de mais novo em materiais, paletas e soluções faz parte do processo: alimenta o repertório e mantém os projetos do ateliê sempre atuais. As imagens abaixo são registros dessa imersão."
      ]
    },
    quartonf: {
      label: "Quarto Nathy", eyebrow: "Residencial", cover: "quartonf/quarto-01",
      meta: [["Tipologia", "Quarto / Suíte"], ["Local", "Salvador / BA"], ["Escopo", "Interiores + Marcenaria"]],
      paras: [
        "Um quarto pensado como refúgio pessoal: madeira, tons terrosos e iluminação suave criam um ambiente acolhedor e tranquilo, feito para o descanso.",
        "A marcenaria sob medida organiza guarda-roupa e penteadeira com elegância, aproveitando cada canto sem pesar. Um ambiente sofisticado, quente e profundamente confortável."
      ]
    }
  };

  /* ---------- blur-up ---------- */
  function lqipBg(base) { return LQIP[base] ? 'url("' + LQIP[base] + '")' : ""; }
  function bindMedia(mediaEl, img) {
    function done() { mediaEl.classList.add("loaded"); }
    if (img.complete && img.naturalWidth) done();
    else { img.addEventListener("load", done, { once: true }); img.addEventListener("error", done, { once: true }); }
  }
  // mídias estáticas no HTML
  document.querySelectorAll(".media[data-base]").forEach(function (m) {
    var bg = lqipBg(m.dataset.base);
    if (bg) m.style.backgroundImage = bg;
    var img = m.querySelector("img");
    if (img) bindMedia(m, img);
  });

  /* ---------- Render galeria ---------- */
  var gallery = document.getElementById("gallery");
  var visible = [];
  function render(filter) {
    visible = ITEMS.filter(function (i) { return filter === "all" || i.cat === filter; });
    gallery.innerHTML = "";
    visible.forEach(function (item, idx) {
      var b = document.createElement("button");
      b.className = "gallery__item media";
      b.type = "button";
      b.setAttribute("aria-label", "Ampliar — " + item.label);
      var bg = lqipBg(item.base);
      if (bg) b.style.backgroundImage = bg;
      var img = document.createElement("img");
      img.src = IMG + item.base + "-sm.webp";
      img.alt = item.label;
      img.loading = "lazy";
      var ov = document.createElement("span"); ov.className = "ov";
      var cap = document.createElement("span"); cap.className = "cap"; cap.textContent = item.label;
      b.appendChild(img); b.appendChild(ov); b.appendChild(cap);
      bindMedia(b, img);
      b.addEventListener("click", function () { openLightbox(idx); });
      gallery.appendChild(b);
    });
  }

  /* ---------- Filtros ---------- */
  var chips = Array.prototype.slice.call(document.querySelectorAll(".chip"));
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
      chip.setAttribute("aria-pressed", "true");
      render(chip.dataset.filter);
    });
  });
  function filterTo(cat) {
    var chip = document.querySelector('.chip[data-filter="' + cat + '"]');
    if (chip) chip.click();
  }

  /* ---------- Painel de projeto (case study) ---------- */
  var proj = document.getElementById("proj");
  var projEls = {
    eyebrow: document.getElementById("projEyebrow"),
    title: document.getElementById("projTitle"),
    img: document.getElementById("projImg"),
    imgWrap: document.getElementById("projImgWrap"),
    body: document.getElementById("projParas"),
    meta: document.getElementById("projMeta")
  };
  var projCat = null;
  function openProject(cat) {
    var p = PROJECTS[cat]; if (!p) return;
    projCat = cat;
    projEls.eyebrow.textContent = p.eyebrow;
    projEls.title.textContent = p.label;
    projEls.imgWrap.style.backgroundImage = lqipBg(p.cover);
    projEls.imgWrap.classList.remove("loaded");
    projEls.img.src = IMG + p.cover + ".webp";
    projEls.img.alt = p.label;
    bindMedia(projEls.imgWrap, projEls.img);
    projEls.body.innerHTML = "";
    p.paras.forEach(function (t) { var el = document.createElement("p"); el.textContent = t; projEls.body.appendChild(el); });
    projEls.meta.innerHTML = "";
    p.meta.forEach(function (m) {
      var dt = document.createElement("dt"); dt.textContent = m[0];
      var dd = document.createElement("dd"); dd.textContent = m[1];
      projEls.meta.appendChild(dt); projEls.meta.appendChild(dd);
    });
    proj.classList.add("open");
    document.body.style.overflow = "hidden";
    proj.scrollTop = 0;
  }
  function closeProject() { proj.classList.remove("open"); document.body.style.overflow = ""; }
  document.getElementById("projClose").addEventListener("click", closeProject);
  document.getElementById("projCta").addEventListener("click", function () {
    var cat = projCat; closeProject();
    filterTo(cat);
    document.getElementById("galeria").scrollIntoView({ behavior: REDUCE ? "auto" : "smooth" });
  });
  document.querySelectorAll(".js-open-project").forEach(function (btn) {
    btn.addEventListener("click", function () { openProject(btn.dataset.cat); });
  });

  /* ---------- Lightbox premium ---------- */
  var lb = document.getElementById("lightbox");
  var lbImg = document.getElementById("lbImg");
  var lbCap = document.getElementById("lbCap");
  var lbThumbs = document.getElementById("lbThumbs");
  var lbIndex = 0, lastFocus = null;

  function buildThumbs() {
    lbThumbs.innerHTML = "";
    visible.forEach(function (item, i) {
      var t = document.createElement("img");
      t.src = IMG + item.base + "-sm.webp";
      t.alt = item.label;
      t.addEventListener("click", function () { lbIndex = i; showImage(); });
      lbThumbs.appendChild(t);
    });
  }
  function showImage() {
    var item = visible[lbIndex];
    lbImg.classList.remove("show");
    var next = new Image();
    next.onload = function () { lbImg.src = next.src; lbImg.classList.add("show"); };
    next.src = IMG + item.base + ".webp";
    lbCap.textContent = item.label + "  ·  " + (lbIndex + 1) + " / " + visible.length;
    Array.prototype.forEach.call(lbThumbs.children, function (t, i) {
      t.classList.toggle("active", i === lbIndex);
      if (i === lbIndex) t.scrollIntoView({ block: "nearest", inline: "center", behavior: REDUCE ? "auto" : "smooth" });
    });
  }
  function openLightbox(idx) {
    lbIndex = idx; lastFocus = document.activeElement;
    buildThumbs(); showImage();
    lb.classList.add("open"); document.body.style.overflow = "hidden";
    document.getElementById("lbClose").focus();
  }
  function closeLightbox() { lb.classList.remove("open"); document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); }
  function next() { lbIndex = (lbIndex + 1) % visible.length; showImage(); }
  function prev() { lbIndex = (lbIndex - 1 + visible.length) % visible.length; showImage(); }
  document.getElementById("lbClose").addEventListener("click", closeLightbox);
  document.getElementById("lbNext").addEventListener("click", next);
  document.getElementById("lbPrev").addEventListener("click", prev);
  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowRight") next();
    else if (e.key === "ArrowLeft") prev();
  });
  // swipe mobile
  var sx = 0;
  var stage = document.getElementById("lbStage");
  stage.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener("touchend", function (e) {
    var dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 45) { dx < 0 ? next() : prev(); }
  }, { passive: true });

  /* ---------- Navbar ---------- */
  var nav = document.getElementById("nav");
  function onScrollNav() { nav.classList.toggle("scrolled", window.scrollY > 40); }
  window.addEventListener("scroll", onScrollNav, { passive: true });
  onScrollNav();

  var toggle = document.getElementById("menuToggle");
  var links = document.getElementById("navLinks");
  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    nav.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  });
  links.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      links.classList.remove("open"); nav.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- Reveal on scroll ---------- */
  if ("IntersectionObserver" in window && !REDUCE) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Parallax sutil (desktop, sem reduced-motion) ---------- */
  var parallaxEls = [];
  function setupParallax() {
    if (REDUCE || window.innerWidth < 768) return;
    parallaxEls = [];
    var hero = document.querySelector(".hero__bg img");
    if (hero) parallaxEls.push({ el: hero, factor: 0.12, type: "hero" });
    document.querySelectorAll("[data-parallax] img").forEach(function (img) {
      parallaxEls.push({ el: img, factor: 0.06, type: "el" });
    });
    onParallax();
  }
  var ticking = false;
  function onParallax() {
    var vh = window.innerHeight;
    parallaxEls.forEach(function (p) {
      if (p.type === "hero") {
        p.el.style.transform = "translate3d(0," + (window.scrollY * p.factor) + "px,0)";
      } else {
        var r = p.el.getBoundingClientRect();
        var center = r.top + r.height / 2;
        var off = (center - vh / 2) * p.factor;
        p.el.style.transform = "translate3d(0," + off.toFixed(1) + "px,0) scale(1.06)";
      }
    });
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking && parallaxEls.length) { ticking = true; requestAnimationFrame(onParallax); }
  }, { passive: true });
  window.addEventListener("resize", function () {
    parallaxEls.forEach(function (p) { p.el.style.transform = ""; });
    setupParallax();
  });

  /* ---------- Formulário -> WhatsApp ---------- */
  var form = document.getElementById("contactForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var nome = form.nome.value.trim(), contato = form.email.value.trim(), msg = form.msg.value.trim();
    if (!nome || !contato || !msg) return;
    var texto = "Ola, Felipe! Sou " + nome + " (" + contato + ").\n\n" + msg;
    window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(texto), "_blank");
  });

  /* ---------- Intro de marca ---------- */
  var intro = document.getElementById("intro");
  if (intro) {
    if (REDUCE) { intro.parentNode.removeChild(intro); }
    else {
      window.addEventListener("load", function () {
        setTimeout(function () {
          intro.classList.add("hide");
          setTimeout(function () { if (intro.parentNode) intro.parentNode.removeChild(intro); }, 700);
        }, 850);
      });
    }
  }

  /* ---------- Cursor personalizado ---------- */
  (function initCursor() {
    if (!window.matchMedia("(hover:hover) and (pointer:fine)").matches) return;
    var dot = document.createElement("div"); dot.className = "cursor-dot";
    var ring = document.createElement("div"); ring.className = "cursor-ring";
    document.body.appendChild(dot); document.body.appendChild(ring);
    document.body.classList.add("has-cursor");
    var mx = window.innerWidth / 2, my = window.innerHeight / 2, rx = mx, ry = my;
    document.addEventListener("mousemove", function (e) {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + "px"; dot.style.top = my + "px";
      if (REDUCE) { ring.style.left = mx + "px"; ring.style.top = my + "px"; }
    });
    if (!REDUCE) {
      (function loop() {
        rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
        ring.style.left = rx + "px"; ring.style.top = ry + "px";
        requestAnimationFrame(loop);
      })();
    }
    var GROW = "a,button,.chip,.gallery__item,.link-arrow,label,[role=button]";
    document.addEventListener("mouseover", function (e) {
      if (e.target.closest && e.target.closest(GROW)) ring.classList.add("grow");
      if (e.target.closest && e.target.closest("input,textarea")) { dot.classList.add("cursor--hidden"); ring.classList.add("cursor--hidden"); }
    });
    document.addEventListener("mouseout", function (e) {
      if (e.target.closest && e.target.closest(GROW)) ring.classList.remove("grow");
      if (e.target.closest && e.target.closest("input,textarea")) { dot.classList.remove("cursor--hidden"); ring.classList.remove("cursor--hidden"); }
    });
    document.documentElement.addEventListener("mouseleave", function () { dot.classList.add("cursor--hidden"); ring.classList.add("cursor--hidden"); });
    document.documentElement.addEventListener("mouseenter", function () { dot.classList.remove("cursor--hidden"); ring.classList.remove("cursor--hidden"); });
  })();

  document.getElementById("year").textContent = new Date().getFullYear();
  render("all");
  setupParallax();
})();
