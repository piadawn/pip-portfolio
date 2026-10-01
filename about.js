(() => {
  const links = [...document.querySelectorAll('.dial a')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href')));
  let ticking = false;
  let active = -1;
  function update() {
    let next = 0;
    sections.forEach((section, index) => {
      if (section.getBoundingClientRect().top <= window.innerHeight * .35) next = index;
    });
    if (active !== next) {
      active = next;
      links.forEach((link, index) => {
        if (index === active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
        link.style.opacity = String(Math.max(.48, 1 - Math.abs(index - active) * .16));
      });
      if (window.matchMedia('(max-width:580px)').matches) {
        const nav = links[active].parentElement;
        nav.scrollTo({left:links[active].offsetLeft-nav.clientWidth/2+links[active].offsetWidth/2,behavior:window.matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'});
      }
    }
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, {passive:true});
  window.addEventListener('resize', update);
  update();
})();
