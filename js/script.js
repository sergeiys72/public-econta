console.log('Init');


//inputmask
const form = document.querySelector('.form');
const formContent = form.querySelector('.form__content');
const telSelector = form.querySelector('input[type="tel"]');
const resultTrue = form.querySelector('.res-true');
const resultFalse = form.querySelector('.res-false');
const inputmask = new Inputmask('+7(999) 999-99-99');
inputmask.mask(telSelector);

new window.JustValidate('.form', {
  rules: {

    tel: {
      required: true
    },
    function: () => {
      const phone = telSelector.inputmask.unmaskedvalue();
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
      formContent.classList.add('form__content_type_sending');
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
          resultTrue.classList.add('form__result_add');
          formContent.classList.remove('form__content_type_sending');
        } else {
          resultFalse.classList.add('form__result_add');
        }
      }
    };

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    thisForm.reset();
  }
});



