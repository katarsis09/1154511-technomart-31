const catalogButtons = document.querySelectorAll('.buy');
const catalogModal = document.querySelector('.modal-catalog');
const catalogModalClose = catalogModal.querySelector('.modal-close')


Array.from(catalogButtons).forEach(b => {
  b.addEventListener('click', (e) => {
    e.preventDefault();
    catalogModal.style.display = "flex"
  })
})

catalogModalClose.addEventListener('click', (e) => {
  catalogModal.style.display = "none"
})