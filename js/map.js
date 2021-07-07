const mapButton = document.querySelector('.about-contacts-img');
const mapModal = document.querySelector('.modal-map');
const mapModalClose = mapModal.querySelector('.modal-close')

mapButton.addEventListener('click', (e) => {
  e.preventDefault();
  mapModal.style.display = "block"
})

mapModalClose.addEventListener('click', (e) => {
  mapModal.style.display = "none"
})