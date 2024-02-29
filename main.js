// 1. В корне проекта должен присутствовать файл .editorconfig с настройками форматирования файлов. Форматирование файлов в проекте должны соответствовать этим настройкам.
// 2.Делаем страницу с формой регистрации, состоящей из трёх полей - ФИО, контакт и пароль, - а также кнопки отправки
// 3. При попытке отправки формы проверяем введённые значения
function validateForm() {
    var fullName = document.getElementById('fullName').value;
    var contact = document.getElementById('contact').value;
    var password = document.getElementById('password').value;

    if (!fullName || !contact || !password) {
        alert('Пожалуйста, заполните все поля формы.');
        return false;
    }


    return true;
}
// 4.Для описания требований к полям желательно использовать Map, где ключом является сам элемент поля, либо объект, где ключом является его имя
  var fieldRequirements = new Map();
  fieldRequirements.set(document.getElementById('fullName'), 'Поле ФИО обязательно для заполнения.');
  fieldRequirements.set(document.getElementById('contact'), 'Поле Контакт обязательно для заполнения.');
  fieldRequirements.set(document.getElementById('password'), 'Поле Пароль обязательно для заполнения.');

  function validateForm() {
      var isValid = true;

      fieldRequirements.forEach(function (requirement, field) {
          if (!field.value) {
              alert(requirement);
              isValid = false;
          }
      });

      return isValid;
  }
// 5. ФИО должно содержать как минимум два слова из русских или английских букв, с обязательным пробелом между ними
      var fullNameField = document.getElementById('fullName');
      var fullNameValue = fullNameField.value.trim();
      var fullNameRegex = /^[a-zA-Zа-яА-Я]+\s+[a-zA-Zа-яА-Я]+$/;
      if (!fullNameRegex.test(fullNameValue)) {
          alert('ФИО должно содержать как минимум два слова из русских или английских букв, с обязательным пробелом между ними.');
          isValid = false;
      }

      return isValid;

/* 6. Контакт в базовой версии задания должен соответствовать маске для email. Для простоты будем считать, что:
до @ у нас возможны только латинские буквы, цифры и точки (не менее 1)
разумеется, обязательно имеется @
после @ - латинские буквы, цифры, дефисы и точки (не менее 1 символа)
заканчиваться должно обязательно на точку и две или более латинские буквы*/

function validateForm() {
    var isValid = true;

    fieldRequirements.forEach(function (requirement, field) {
        if (field.id === 'fullName') {

            var fullName = field.value.trim();
            if (!/^[а-яА-Яa-zA-Z]+\s[а-яА-Яa-zA-Z]+$/.test(fullName)) {
                alert('Поле ФИО должно содержать как минимум два слова из русских или английских букв, с обязательным пробелом между ними.');
                isValid = false;
            }
        } else if (field.id === 'contact') {

            var contact = field.value.trim();
            if (!/^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(contact)) {
                alert('Поле Контакт должно быть в формате email.');
                isValid = false;
            }
        } else {

            if (!field.value) {
                alert(requirement);
                isValid = false;
            }
        }
    });

    return isValid;
}
/* 7. Пароль должен не короче 8 символов и должен обязательно включать как минимум по одной:
заглавную латинскую букву
строчную латинскую букву
цифру
символ из набора !@#$%^&*()_+-= */

function validateForm() {
    var isValid = true;


    fieldRequirements.forEach(function (requirement, field) {
        if (field.id === 'fullName') {

            var fullName = field.value.trim();
            if (!/^[а-яА-Яa-zA-Z]+\s[а-яА-Яa-zA-Z]+$/.test(fullName)) {
                alert('Поле ФИО должно содержать как минимум два слова из русских или английских букв, с обязательным пробелом между ними.');
                isValid = false;
            }
        } else if (field.id === 'contact') {

            var contact = field.value.trim();
            if (!/^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(contact)) {
                alert('Поле Контакт должно быть в формате email.');
                isValid = false;
            }
        } else if (field.id === 'password') {

            var password = field.value.trim();
            if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=])[A-Za-z\d!@#$%^&*()_+\-=]{8,}/.test(password)) {
                alert('Пароль должен содержать не менее 8 символов, включая по одной заглавной и строчной латинской букве, цифре и символу из набора !@#$%^&*()_+-=');
                isValid = false;
            }
        } else {
            if (!field.value) {
                alert(requirement);
                isValid = false;
            }
        }
    });

    return isValid;
}

/* 8. В случае если все поля заполнены верно, очищаем инпуты и скрываем форму, отображая примерно такую надпись (стилизация на ваше усмотрение):
Здравствуйте, (сюда подставить ФИО)!
Мы свяжемся с вами по email: (сюда подставить контакт) */

function validateForm() {
    var isValid = true;


    fieldRequirements.forEach(function (requirement, field) {
        if (field.id === 'fullName') {

            var fullName = field.value.trim();
            if (!/^[а-яА-Яa-zA-Z]+\s[а-яА-Яa-zA-Z]+$/.test(fullName)) {
                alert('Поле ФИО должно содержать как минимум два слова из русских или английских букв, с обязательным пробелом между ними.');
                isValid = false;
            }
        } else if (field.id === 'contact') {

            var contact = field.value.trim();
            if (!/^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(contact)) {
                alert('Поле Контакт должно быть в формате email.');
                isValid = false;
            }
        } else if (field.id === 'password') {

            var password = field.value;
            if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=])[A-Za-z\d!@#$%^&*()_+\-=]{8,}/.test(password)) {
                alert('Пароль должен содержать не менее 8 символов и включать как минимум по одной заглавной и строчной латинской букве, цифре и символу из набора !@#$%^&*()_+-=');
                isValid = false;
            }
        } else {

            if (!field.value) {
                alert(requirement);
                isValid = false;
            }
        }
    });

    if (isValid) {

        var fullName = document.getElementById('fullName').value.trim();
        var contact = document.getElementById('contact').value.trim();
        var welcomeMessage = document.createElement('div');
        welcomeMessage.textContent = 'Здравствуйте, ' + fullName + '! Мы свяжемся с вами по email: ' + contact;
        document.body.appendChild(welcomeMessage);


        document.getElementById('fullName').value = '';
        document.getElementById('contact').value = '';
        document.getElementById('password').value = '';
        document.getElementById('registrationForm').style.display = 'none';
    }

    return isValid;
}

// 9. В случае если те или иные поля заполнены неверно, их необходимо подсветить (например, красной рамкой), и оставить форму отображённой и заполненной, также рядом с полем отображается краткое сообщение о требованиях к его значению
const form = document.getElementById('registration-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!validateFullname(fullname)) {
        displayErrorMessage('fullname', 'Full name must contain at least two words separated by space.');
    } else {
        clearErrorMessage('fullname');
    }

    if (!validateEmail(email)) {
        displayErrorMessage('email', 'Invalid email format.');
    } else {
        clearErrorMessage('email');
    }

    if (!validatePassword(password)) {
        displayErrorMessage('password', 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.');
    } else {
        clearErrorMessage('password');
    }

    if (validateFullname(fullname) && validateEmail(email) && validatePassword(password)) {
        displaySuccessMessage(fullname, email);
        clearForm();
    } else {
        successMessage.style.display = 'none';
    }
});

function validateFullname(fullname) {
    return fullname.split(' ').length >= 2;
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=])[A-Za-z\d!@#$%^&*()_+\-=]{8,}$/;
    return regex.test(password);
}

function displayErrorMessage(field, message) {
    const errorMessage = document.getElementById(`${field}-error`);
    errorMessage.textContent = message;
}

function clearErrorMessage(field) {
    const errorMessage = document.getElementById(`${field}-error`);
    errorMessage.textContent = '';
}

function displaySuccessMessage(fullname, email) {
    document.getElementById('fullname-value').textContent = fullname;
    document.getElementById('email-value').textContent = email;
    successMessage.style.display = 'block';
}

function clearForm() {
    form.reset();
}

