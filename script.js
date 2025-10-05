
const searchInput = document.getElementById('searchInput');
const brandFilter = document.getElementById('brandFilter');
const sizeFilter = document.getElementById('sizeFilter');
const sortSelect = document.getElementById('sortSelect');
const productGrid = document.querySelector('.products-grid');

function buyWhatsApp(productName){
  const phone = '6281330330719';
  const message = encodeURIComponent(`Halo Qiana Elektronik, saya tertarik membeli: ${productName}`);
  window.open(`https://wa.me/${phone}?text=${message}`,'_blank');
}

function getCards(){
  return Array.from(document.querySelectorAll('.product-card'));
}

function filterAndRender(){
  const q = (searchInput.value||'').toLowerCase().trim();
  const brand = brandFilter.value;
  const size = sizeFilter.value;
  let cards = getCards();

  cards.forEach(card => {
    const name = card.dataset.name.toLowerCase();
    const b = card.dataset.brand;
    const s = card.dataset.size;
    let visible = true;
    if(q && !name.includes(q) && !b.toLowerCase().includes(q)) visible = false;
    if(brand !== 'all' && b !== brand) visible = false;
    if(size !== 'all' && s !== size) visible = false;
    card.style.display = visible ? 'flex' : 'none';
  });

  // sorting
  if(sortSelect.value !== 'default'){
    const container = productGrid;
    const visibleCards = getCards().filter(c => c.style.display !== 'none');
    let sorted = visibleCards.slice();
    if(sortSelect.value === 'priceLow'){
      sorted.sort((a,b)=>Number(a.dataset.price)-Number(b.dataset.price));
    } else if(sortSelect.value === 'priceHigh'){
      sorted.sort((a,b)=>Number(b.dataset.price)-Number(a.dataset.price));
    } else if(sortSelect.value === 'promo'){
      sorted.sort((a,b)=> (b.dataset.promo === 'true') - (a.dataset.promo === 'true') );
    }
    sorted.forEach(c=>container.appendChild(c));
  }
}

searchInput.addEventListener('input', filterAndRender);
brandFilter.addEventListener('change', filterAndRender);
sizeFilter.addEventListener('change', filterAndRender);
sortSelect.addEventListener('change', filterAndRender);

// Attach buy function to inline buttons created in HTML using onclick attribute (works already)
