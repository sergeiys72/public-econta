

//! popup для формы перезвона
const popupTel = document.querySelector('#tel');
const btsPopAdd = document.querySelector('.popup__button-add');


//! общие переменные
const btsPop = document.querySelectorAll('.popup__button-close');




for (let i = 0; i < btsPop.length; i++) {
  btsPop[i].addEventListener('click', function (e) {
    closePopup(e.target.closest('.popup'));
  });
}

btsPopAdd.addEventListener('click', function () {
  openPopup(popupTel);
});

//! ОТКРЫВАЕТ POPUP
function openPopup(popup) {
  popup.classList.add('popup_active');
}

//! ЗАКРЫВАЕТ POPUP
function closePopup(popup) {
  popup.classList.remove('popup_active');
}
