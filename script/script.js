function iniciaModal(modalID) {
  const modal = document.getElementById(modalID);

    if(modal) {
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
      if (e.target.id == modalID || e.target.className == 'button-cancelar') {
        modal.classList.remove('mostrar');
      }
    });
  }
}

const button = document.querySelector('.duvida');
button.addEventListener('click', () => {
  iniciaModal('area-modal');
});

document.querySelector("#items").addEventListener("click", event => {
  if (event.layerX > 175) {
    event.target.scrollBy(300, 0);
  } else {
    event.target.scrollBy(-300, 0);
  }
})
