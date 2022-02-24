"use strict"

// Napisz skrypt zarządzania formularzem logowania.
// Opracowanie przesyłania formularza form.login-form powinno przebiegać zgodnie ze zdarzeniem submit.
// Podczas przesyłania formularza strona nie powinna się restartować.
// Jeśli w formularzu są nieuzupełnione pola, wprowadź alert z upomnieniem o tym, że wszystkie pola powinny zostać wypełnione.
// Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz, zbierz wartość pól jako obiekt, gdzie nazwa pola będzie nazwą właściwości, a wartość pola - wartością właściwości. Aby otrzymać dostęp do elementów formularza użyj właściwości elements.
// Umieść obiekt z wprowadzonymi danymi do wiersza poleceń i wyczyść wartości pól formularza metodą reset.


const $form = document.querySelector(".login-form")

$form.addEventListener("submit", (e) => {
    e.preventDefault();
    const elements = {email: $form.email.value, password:$form.password.value}
    const validation = elements.email && elements.password;
    if (validation == false) {
        alert("Proszę uzupełnić wszystkie pola")
    }
    console.log(elements);
    
})

