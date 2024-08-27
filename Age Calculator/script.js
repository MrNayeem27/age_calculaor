const form = document.getElementById('age-calculator-form');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();

    // Calculate age in years
    let age = today.getFullYear() - birthdate.getFullYear();

    // Adjust age if birthday hasn't passed yet
    if (today.getMonth() < birthdate.getMonth() ||
        (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())) {
        age--;
    }

    result.innerHTML = `<h2>Your Age:</h2><p>${age} years old</p>`;
});