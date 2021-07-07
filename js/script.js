const contactButton = document.querySelector('.button-contacts');
const contactModal = document.querySelector('.modal-login');
const contacModalClose = contactModal.querySelector('.modal-close')

contactButton.addEventListener('click', (e) => {
  e.preventDefault();
  contactModal.style.display = "block"
})

contacModalClose.addEventListener('click', (e) => {
  contactModal.style.display = "none"
})