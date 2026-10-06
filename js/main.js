(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var y = $('#year'); if (y) y.textContent = new Date().getFullYear();

  // reveal on scroll
  var rv = $$('.rv');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    rv.forEach(function (el) { io.observe(el); });
  } else { rv.forEach(function (el) { el.classList.add('in'); }); }

  // count-up stats
  function fmt(n) { return n.toLocaleString('en-US'); }
  if (!reduce && 'IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target, to = +el.getAttribute('data-count'), t0 = null, dur = 1100;
        co.unobserve(el);
        (function step(ts) {
          if (t0 === null) t0 = ts;
          var p = Math.min((ts - t0) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
          el.textContent = fmt(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(step);
        })(performance.now());
      });
    }, { threshold: 0.6 });
    $$('[data-count]').forEach(function (el) { el.textContent = '0'; co.observe(el); });
  }

  // project filter
  var btns = $$('.filters button'), cards = $$('.card');
  btns.forEach(function (b) {
    b.addEventListener('click', function () {
      var f = b.getAttribute('data-f');
      btns.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      cards.forEach(function (c) {
        var show = f === 'all' || (c.getAttribute('data-cat') || '').split(' ').indexOf(f) > -1;
        c.classList.toggle('hide', !show);
        if (show) c.classList.add('in');
      });
    });
  });

  // nav: active link, mobile menu, back to top
  var nav = $('#nav'), mb = $('#menu-btn');
  mb.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    mb.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  $$('#links a').forEach(function (a) { a.addEventListener('click', function () { nav.classList.remove('open'); mb.setAttribute('aria-expanded', 'false'); }); });

  var links = $$('#links a'), secs = links.map(function (a) { return $(a.getAttribute('href')); });
  var topBtn = $('#top-btn');
  function onScroll() {
    var pos = window.scrollY + 160, cur = -1;
    secs.forEach(function (s, i) { if (s && s.offsetTop <= pos) cur = i; });
    links.forEach(function (a, i) { a.classList.toggle('active', i === cur); });
    topBtn.classList.toggle('show', window.scrollY > 700);
  }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  topBtn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); });
})();
