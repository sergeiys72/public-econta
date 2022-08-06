console.log('Init');


//inputmask
const formPopup = document.querySelector('#form-popup');
const formContentPopup = formPopup.querySelector('.form__content');
const telSelectorPopup = formPopup.querySelector('input[type="tel"]');
const resultTruePopup = formPopup.querySelector('.res-true');
const resultFalsePopup = formPopup.querySelector('.res-false');
const inputmaskPopup = new Inputmask('+7(999) 999-99-99');
inputmaskPopup.mask(telSelectorPopup);

new window.JustValidate('#form-popup', {
  rules: {

    tel: {
      required: true
    },
    function: () => {
      const phone = telSelectorPopup.inputmask.unmaskedvalue();
      return phone.length === 10;
    },
    text: {
      required: false
    },
    email: {
      required: false
    }

  },
  colorWrong: 'rgb(214, 59, 71)',

  messages: {
    name: {
      required: 'Введите имя',
      minLength: 'Введите 3 и более символов',
      maxLength: 'Запрещенно вводить более 15 символов'
    },
    email: {
      email: 'Введите корректный email',
      required: 'Введите email'
    },
    tel: {
      required: 'Введите телефон',
      function: 'Здесь должно быть 10 символов без +7',
    },
    text: {
      minLength: 3,
      maxLength: 100
    }
  },


  submitHandler: function (thisForm) {
    let formData = new FormData(thisForm);

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      formContentPopup.classList.add('form__content_type_sending');
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
          resultTruePopup.classList.add('form__result_add');
          formContentPopup.classList.remove('form__content_type_sending');
        } else {
          resultFalsePopup.classList.add('form__result_add');
        }
      }
    };

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    thisForm.reset();
  }
});



