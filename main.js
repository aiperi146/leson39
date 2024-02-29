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
