 const contactButton = document.querySelector('.button-contacts');
 const contactModal = document.querySelector('.modal-login');
 const contactModalClose = contactModal.querySelector('.modal-close')

 contactButton.addEventListener('click', (e) => {
   e.preventDefault();
   contactModal.style.display = "block"
 })

 contactModalClose.addEventListener('click', (e) => {
   contactModal.style.display = "none"
 })