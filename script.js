
const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');
menuBtn && menuBtn.addEventListener('click', ()=>{
  if(mainNav.style.display === 'block') mainNav.style.display = '';
  else mainNav.style.display = 'block';
});

function buyWhatsApp(productName){
  const phone = '6281330330719';
  const message = encodeURIComponent(`Halo Qiana Elektronik, saya tertarik membeli: ${productName}`);
  window.open(`https://wa.me/${phone}?text=${message}`,'_blank');
}
