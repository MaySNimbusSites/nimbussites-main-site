(function(){
  const PRICES = {
    symbol: '$',
    monthly: { starter: 39, business: 69, pro: 99 },
    annual:  { starter: 390, business: 690, pro: 990 }, // 2 months free
    lifetime:{ starter: 1999, business: 2499, pro: 3499 } // limited
  };

  const qAll = (k)=>document.querySelectorAll('[data-price="'+k+'"]');
  const setText = (k,v)=>qAll(k).forEach(n=>n.textContent=v);

  function guessBilling(){
    const saved = localStorage.getItem('ns_billing_us');
    if(saved==='monthly' || saved==='annual') return saved;
    return 'annual';
  }

  let billing = guessBilling();

  function fmt(num){
    return PRICES.symbol + String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function render(){
    document.getElementById('bill-monthly')?.setAttribute('aria-pressed', billing==='monthly');
    document.getElementById('bill-annual')?.setAttribute('aria-pressed', billing==='annual');

    const p = PRICES[billing];
    setText('starter_price', fmt(p.starter) + (billing==='annual' ? ' / year' : ' / month'));
    setText('business_price', fmt(p.business) + (billing==='annual' ? ' / year' : ' / month'));
    setText('pro_price', fmt(p.pro) + (billing==='annual' ? ' / year' : ' / month'));

    setText('billing_note', billing==='annual'
      ? '2 months free when billed annually'
      : 'Upgrade to annual any time and get 2 months free');

    setText('starter_monthly', fmt(PRICES.monthly.starter) + '/mo');
    setText('business_monthly', fmt(PRICES.monthly.business) + '/mo');
    setText('pro_monthly', fmt(PRICES.monthly.pro) + '/mo');

    setText('starter_life', fmt(PRICES.lifetime.starter));
    setText('business_life', fmt(PRICES.lifetime.business));
    setText('pro_life', fmt(PRICES.lifetime.pro));

    localStorage.setItem('ns_billing_us', billing);
  }

  document.getElementById('bill-monthly')?.addEventListener('click', ()=>{ billing='monthly'; render(); });
  document.getElementById('bill-annual')?.addEventListener('click', ()=>{ billing='annual'; render(); });

  render();
})();