

for (let i = 0; i < btsPop.length; i++) {
  btsPop[i].addEventListener('click', function (e) {
    closePopup(e.target.closest('.popup'));
  });
}

for (let i = 0; i < btsPopAdd.length; i++) {
  btsPopAdd[i].addEventListener('click', function () {
    openPopup(popupTel);
    console.log('ser');
  });
}

//! ОТКРЫВАЕТ POPUP
function openPopup(popup) {
  popupTel.classList.add('popup_active');
}

//! ЗАКРЫВАЕТ POPUP
function closePopup(popup) {
  popupTel.classList.remove('popup_active');
}
