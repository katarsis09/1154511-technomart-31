'use sctict';
const hide = (el) => {
  el.style.display = 'none'
}

const show = (el, displayType) => {
  el.style.display = displayType
}

// MAP POPUP
const mapButton = document.querySelector('.about-contacts-img');
const mapModal = document.querySelector('.modal-map');

if (mapModal) {
  const mapModalClose = mapModal.querySelector('.modal-close')

  mapButton.addEventListener('click', (e) => {
    e.preventDefault();
    show(mapModal, 'block')
  })
  
  mapModalClose.addEventListener('click', (e) => {
    hide(mapModal)
  })
}


// CONTACT POPUP
const contactButton = document.querySelector('.button-contacts');
const contactModal = document.querySelector('.modal-login');

if (contactModal && contactButton) {
  const contactModalClose = contactModal.querySelector('.modal-close')

  contactButton.addEventListener('click', (e) => {
    e.preventDefault();
    show(contactModal, 'block')
  })
  
  contactModalClose.addEventListener('click', (e) => {
    hide(contactModal)
  })
}

// CATALOG POPUP
const catalogButtons = document.querySelectorAll('.buy');
const catalogModal = document.querySelector('.modal-catalog');



if (catalogButtons.length && catalogModal) {
  const catalogModalClose = catalogModal.querySelector('.modal-close')
  Array.from(catalogButtons).forEach(b => {
    b.addEventListener('click', (e) => {
      e.preventDefault();
      show(catalogModal, 'flex');
    })
  })
  
  catalogModalClose.addEventListener('click', (e) => {
    hide(catalogModal);
  })
}



