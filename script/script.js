const btn = document.querySelector(".hero__button");
const modal = document.querySelector(".modal");

btn.addEventListener('click', () => {
	modal.classList.add('modal__open');
})

modal.addEventListener('click', (event) => {
	if (event.target === modal || event.target.closest('.modal__close')) {
		modal.classList.remove('modal__open');
	}
})