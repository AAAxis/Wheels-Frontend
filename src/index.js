
var orderNowLink = document.querySelector('.nav-link[href="#order-now"]');
var orderNowSection = document.getElementById('order-now');

orderNowLink.addEventListener('click', function(event) {
event.preventDefault();
orderNowSection.scrollIntoView({behavior: 'smooth', block: 'end'});
});

