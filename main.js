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

