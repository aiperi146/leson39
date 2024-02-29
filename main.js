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
// 10. Подсветка ошибочного поля и сообщение о требованиях к его значению должна исчезать после того как ошибка в его заполнении будет исправлена
const form1 = document.getElementById('registrationForm');
const fullNameInput = document.getElementById('fullName');
const contactInput = document.getElementById('contact');
const passwordInput = document.getElementById('password');
const successMessage1 = document.getElementById('successMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (validateForm()) {
        showSuccessMessage();
    }
});

function validateForm() {
    let isValid = true;

    const fullName = fullNameInput.value.trim();
    const contact = contactInput.value.trim();
    const password = passwordInput.value.trim();


    if (!isValidFullName(fullName)) {
        showError(fullNameInput, 'ФИО должно содержать как минимум два слова из русских или английских букв, с обязательным пробелом между ними');
        isValid = false;
    } else {
        hideError(fullNameInput);
    }


    if (!isValidContact(contact)) {
        showError(contactInput, 'Контакт должен соответствовать маске для email');
        isValid = false;
    } else {
        hideError(contactInput);
    }


    if (!isValidPassword(password)) {
        showError(passwordInput, 'Пароль должен содержать не менее 8 символов, как минимум по одной заглавной и строчной латинской букве, цифре и символу из набора !@#$%^&*()_+-=');
        isValid = false;
    } else {
        hideError(passwordInput);
    }

    return isValid;
}

function isValidFullName(fullName) {
    return /^[a-zA-Zа-яА-Я]+\s[a-zA-Zа-яА-Я]+$/.test(fullName);
}

function isValidContact(contact) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(contact);
}

function isValidPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=])[A-Za-z\d!@#$%^&*()_+\-=]{8,}$/.test(password);
}

function showError(input, errorMessage) {
    const errorDiv = input.nextElementSibling;
    errorDiv.textContent = errorMessage;
    errorDiv.style.display = 'block';
    input.classList.add('error');
}

function hideError(input) {
    const errorDiv = input.nextElementSibling;
    errorDiv.textContent = '';
    errorDiv.style.display = 'none';
    input.classList.remove('error');
}

function showSuccessMessage() {
    successMessage.textContent = `Здравствуйте, ${fullNameInput.value}! Мы свяжемся с вами по email: ${contactInput.value}`;
    successMessage.style.display = 'block';
    form.reset();
    setTimeout(function() {
        successMessage.style.display = 'none';
    }, 5000);
}
/*Дополнительное задание на 30 баллов
В поле контакта можно ввести не только емейл, но и телефон. Телефон может начинаться с +996 или 0, и дальше содержать цифры (строго 6), а также любое количество пробелов и дефисов.

Если человек ввёл email, то всё отображается так же, как и в базовой версии задания.

Если человек ввёл телефон, отображаемая при успешном заполнении формы надпись должна выглядеть примерно так:

Здравствуйте, (сюда подставить ФИО)!
Мы свяжемся с вами по телефону: (сюда подставить телефон в строгом формате, см. ниже)
Телефон должен отображаться строго в формате вида +996 111 22-33-44, даже если его ввели в другом формате.*/
function showSuccessMessage() {
    let contactType;
    let contactValue;

    if (isValidContact(contactInput.value.trim())) {

        contactType = 'по email';
        contactValue = contactInput.value.trim();
    } else {
        contactType = 'по телефону';
        contactValue = contactInput.value.trim().replace(/^(\+996|0)?(\d{3})(\d{2})(\d{2})(\d{2})$/, '+996 $2 $3-$4-$5');
    }

    successMessage.innerHTML = `
        <p>Здравствуйте, ${fullNameInput.value}!</p>
        <p>Мы свяжемся с вами ${contactType}: ${contactValue}</p>
    `;
    successMessage.style.display = 'block';
    form.reset();
    setTimeout(function() {
        successMessage.style.display = 'none';
    }, 5000);
}
// Также можно получить ещё 10 + 10 баллов
// 1. Если использовать input с атрибутом pattern
// 2. Если использовать FormData
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 


    let formData = new FormData(this);
    let contactValue = formData.get("contact");


    if (validateEmail(contactValue)) {

        showMessage("success", "Здравствуйте, " + formData.get("fio") + "! Мы свяжемся с вами по email: " + contactValue);
    } else if (validatePhone(contactValue)) {

        showMessage("success", "Здравствуйте, " + formData.get("fio") + "! Мы свяжемся с вами по телефону: " + formatPhone(contactValue));
    } else {

        document.getElementById("contact").classList.add("error");
        document.getElementById("contactError").textContent = "Неверный формат контакта";
    }
});

function validateEmail(email) {

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePhone(phone) {

    let phonePattern = /^(?:\+996|0)(?:\s|-)?[0-9]{3}(?:\s|-)?[0-9]{2}(?:\s|-)?[0-9]{2}$/;
    return phonePattern.test(phone);
}

function formatPhone(phone) {

    return phone.replace(/(\d{3})(\d{2})(\d{2})/, "+996 $1 $2-$3");
}

function showMessage(type, message) {

    let messageDiv = document.createElement("div");
    messageDiv.classList.add(type);
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);
}

