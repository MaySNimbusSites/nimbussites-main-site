(function(){
  const TALLY_URL = "https://tally.so/r/2EakoA";
  document.querySelectorAll('[data-cta="tally"]').forEach(a=>{
    a.href = TALLY_URL;
    a.target = "_blank";
    a.rel = "noopener";
  });
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',(e)=>{
      const id=a.getAttribute('href');
      if(!id || id==="#") return;
      const el=document.querySelector(id);
      if(!el) return;
      e.preventDefault();
      el.scrollIntoView({behavior:"smooth", block:"start"});
    });
  });
  document.querySelectorAll('[data-year]').forEach(n=>n.textContent = new Date().getFullYear());
})();