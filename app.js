let toggleBtn = document.querySelector('.toggle-btn');
let mobileNav = document.getElementById('mobile-nav');

toggleBtn.addEventListener('click', function() {
	mobileNav.classList.toggle('hide');
});
